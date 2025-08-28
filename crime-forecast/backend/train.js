import fs from 'fs';
import path from 'path';
import url from 'url';
import * as tf from '@tensorflow/tfjs-node';
import dayjs from 'dayjs';
import { parse } from 'csv-parse';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');
const MODELS_DIR = path.join(__dirname, '..', 'models');
const MODEL_PATH = path.join(MODELS_DIR, 'grid_lstm_model');

// CONFIG
const GRID = 50;               // grid resolution
const SEQ_LEN = 14;            // days per sequence
const HORIZON_DAYS = 1;        // predict next day risk

// Load incidents CSV and aggregate into grid sequences per day
// Expected columns: datetime, latitude, longitude, category (flexible names allowed via map)
const COLUMN_MAP = {
  datetime: ['datetime', 'occurred_at', 'date', 'time'],
  lat: ['latitude', 'lat'],
  lng: ['longitude', 'lon', 'lng'],
  type: ['category', 'type', 'offense']
};

function detectColumns(header) {
  const find = (cands) => header.find(h => cands.includes(h.toLowerCase()));
  const map = {};
  map.datetime = find(COLUMN_MAP.datetime);
  map.lat = find(COLUMN_MAP.lat);
  map.lng = find(COLUMN_MAP.lng);
  map.type = find(COLUMN_MAP.type) || null;
  if (!map.datetime || !map.lat || !map.lng) {
    throw new Error('CSV must include datetime, latitude, longitude columns');
  }
  return map;
}

// Bounds for a city; update via dataset extent
const DEFAULT_BOUNDS = { south: 37.703, west: -122.527, north: 37.833, east: -122.349 };

function computeBounds(points) {
  if (points.length === 0) return DEFAULT_BOUNDS;
  let south = 90, north = -90, west = 180, east = -180;
  for (const p of points) {
    south = Math.min(south, p.lat);
    north = Math.max(north, p.lat);
    west = Math.min(west, p.lng);
    east = Math.max(east, p.lng);
  }
  return { south, west, north, east };
}

function cellIndex(bounds, n, lat, lng) {
  const i = Math.floor((lat - bounds.south) / (bounds.north - bounds.south) * n);
  const j = Math.floor((lng - bounds.west) / (bounds.east - bounds.west) * n);
  return { i: Math.max(0, Math.min(n-1, i)), j: Math.max(0, Math.min(n-1, j)) };
}

async function loadIncidents(filePath) {
  if (!fs.existsSync(filePath)) throw new Error('Incidents CSV not found: ' + filePath);
  const header = await new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath);
    const parser = parse({ columns: true });
    let first = true; let cols;
    parser.on('headers', (h) => { cols = h; });
    const rows = [];
    parser.on('data', row => rows.push(row));
    parser.on('end', () => resolve({ cols, rows }));
    parser.on('error', reject);
    stream.pipe(parser);
  });
  const map = detectColumns(header.cols);
  const points = header.rows.map(r => ({
    t: dayjs(r[map.datetime]).startOf('day'),
    lat: parseFloat(r[map.lat]),
    lng: parseFloat(r[map.lng])
  })).filter(p => isFinite(p.lat) && isFinite(p.lng) && p.t.isValid());
  return points;
}

function buildDailyGrids(points, bounds, days, grid) {
  const start = dayjs(days.min);
  const end = dayjs(days.max);
  const totalDays = end.diff(start, 'day') + 1;
  const grids = Array.from({ length: totalDays }, () =>
    Array.from({ length: grid }, () => Array.from({ length: grid }, () => 0))
  );
  for (const p of points) {
    const idx = p.t.diff(start, 'day');
    if (idx < 0 || idx >= totalDays) continue;
    const { i, j } = cellIndex(bounds, grid, p.lat, p.lng);
    grids[idx][i][j] += 1;
  }
  return { grids, start, totalDays };
}

function standardize3D(grids) {
  // Flatten to compute mean/std
  const flat = [];
  for (const g of grids) for (const row of g) for (const v of row) flat.push(v);
  const mean = flat.reduce((a,b) => a+b, 0) / flat.length;
  const std = Math.sqrt(flat.reduce((a,b) => a + (b-mean)*(b-mean), 0) / flat.length) || 1;
  const norm = grids.map(g => g.map(row => row.map(v => (v-mean)/std)));
  return { norm, scaler: { mean, std } };
}

async function train(grids, scaler) {
  // Create input sequences X: [N, GRID, GRID, 1], predict next day Y: [GRID, GRID]
  const X = []; const Y = [];
  for (let d = 0; d + SEQ_LEN < grids.length; d++) {
    const seq = grids.slice(d, d + SEQ_LEN); // [SEQ, GRID, GRID]
    const x = tf.tensor4d([averageStack(seq)], [1, GRID, GRID, 1]);
    const y = tf.tensor2d(grids[d + SEQ_LEN], [GRID, GRID]);
    X.push(x); Y.push(y);
  }
  if (X.length === 0) throw new Error('Not enough data to create sequences.');

  const xTensor = tf.concat(X, 0);
  const yTensor = tf.stack(Y);

  const model = tf.sequential();
  model.add(tf.layers.inputLayer({ inputShape: [GRID, GRID, 1] }));
  model.add(tf.layers.conv2d({ filters: 8, kernelSize: 3, activation: 'relu', padding: 'same' }));
  model.add(tf.layers.conv2d({ filters: 8, kernelSize: 3, activation: 'relu', padding: 'same' }));
  model.add(tf.layers.flatten());
  model.add(tf.layers.dense({ units: GRID*GRID, activation: 'relu' }));
  model.add(tf.layers.reshape({ targetShape: [GRID, GRID] }));

  model.compile({ optimizer: tf.train.adam(1e-3), loss: 'meanSquaredError' });
  await model.fit(xTensor, yTensor, { epochs: 10, batchSize: 8, validationSplit: 0.1 });

  await model.save(`file://${MODEL_PATH}`);
  fs.writeFileSync(path.join(MODELS_DIR, 'meta.json'), JSON.stringify({
    bounds: globalBounds,
    scaler
  }, null, 2));
  console.log('Model saved at', MODEL_PATH);
}

function averageStack(seq) {
  // Simplified temporal aggregation; replace with ConvLSTM for complexity
  const grid = seq[0].length;
  const out = Array.from({ length: grid }, () => Array.from({ length: grid }, () => 0));
  for (const g of seq) {
    for (let i = 0; i < grid; i++) {
      for (let j = 0; j < grid; j++) out[i][j] += g[i][j];
    }
  }
  for (let i = 0; i < grid; i++) for (let j = 0; j < grid; j++) out[i][j] /= seq.length;
  return out.map(row => row.map(v => [v]));
}

let globalBounds = DEFAULT_BOUNDS;

async function main() {
  const csvFile = path.join(DATA_DIR, 'incidents.csv');
  const points = await loadIncidents(csvFile);
  globalBounds = computeBounds(points);
  const days = {
    min: points.reduce((m,p) => p.t.isBefore(m) ? p.t : m, points[0].t),
    max: points.reduce((m,p) => p.t.isAfter(m) ? p.t : m, points[0].t)
  };
  const { grids } = buildDailyGrids(points, globalBounds, days, GRID);
  const { norm, scaler } = standardize3D(grids);
  await train(norm, scaler);
}

main().catch(e => { console.error(e); process.exit(1); });