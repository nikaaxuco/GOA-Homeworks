import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import url from 'url';
import * as tf from '@tensorflow/tfjs-node';
import dayjs from 'dayjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, '..', 'data');
const MODELS_DIR = path.join(__dirname, '..', 'models');
const MODEL_PATH = path.join(MODELS_DIR, 'grid_lstm_model');

// In-memory mock incident list (replaceable with real feed)
let liveIncidents = [];

// SSE: stream "just happened" incidents to clients
app.get('/api/stream/incidents', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const send = (incident) => {
    res.write(`event: incident\n`);
    res.write(`data: ${JSON.stringify(incident)}\n\n`);
  };

  // Send initial recent incidents
  liveIncidents.slice(-50).forEach(send);

  // Keep connection alive
  const keepAlive = setInterval(() => {
    res.write(': ping\n\n');
  }, 25000);

  // Register listener
  const onNewIncident = (incident) => send(incident);
  emitter.on('incident', onNewIncident);

  req.on('close', () => {
    clearInterval(keepAlive);
    emitter.off('incident', onNewIncident);
    res.end();
  });
});

// Forecast endpoint: returns grid risk heatmap for next day/week/month
app.get('/api/forecast', async (req, res) => {
  try {
    const horizon = (req.query.horizon || 'day').toString(); // 'day' | 'week' | 'month'
    const gridSize = parseInt(req.query.grid || '50', 10); // number of grid cells per side

    const model = await safeLoadModel();
    const meta = JSON.parse(fs.readFileSync(path.join(MODELS_DIR, 'meta.json'), 'utf-8'));
    const { bounds, scaler } = meta; // scaler: {mean, std}

    const inputTensor = await buildLatestSequenceTensor(DATA_DIR, gridSize, scaler);
    const output = model.predict(inputTensor);
    const risk = output.arraySync()[0]; // shape [gridSize, gridSize]

    const result = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const riskScore = risk[i][j];
        const cellBounds = cellLatLng(bounds, gridSize, i, j);
        result.push({ i, j, risk: riskScore, bounds: cellBounds });
      }
    }

    res.json({ horizon, gridSize, generatedAt: new Date().toISOString(), result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'forecast_failed', message: err.message });
  }
});

// Serve static frontend
app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

// Minimal emitter for incidents
import { EventEmitter } from 'events';
const emitter = new EventEmitter();

// Mock incident generator (synthetic) every 5-10 seconds
const MOCK_CITY_BOUNDS = {
  // Default bounds: San Francisco-ish (lat/lng)
  south: 37.703, west: -122.527, north: 37.833, east: -122.349
};
function randomInRange(min, max) { return Math.random() * (max - min) + min; }
function startMockIncidents() {
  setInterval(() => {
    const incident = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2,7)}`,
      type: ['THEFT','ASSAULT','ROBBERY','BURGLARY','VANDALISM'][Math.floor(Math.random()*5)],
      occurredAt: new Date().toISOString(),
      lat: randomInRange(MOCK_CITY_BOUNDS.south, MOCK_CITY_BOUNDS.north),
      lng: randomInRange(MOCK_CITY_BOUNDS.west, MOCK_CITY_BOUNDS.east)
    };
    liveIncidents.push(incident);
    if (liveIncidents.length > 500) liveIncidents.shift();
    emitter.emit('incident', incident);
  }, 5000 + Math.random()*5000);
}

// Helper: load or create a simple model
async function safeLoadModel() {
  const modelDir = `file://${MODEL_PATH}`;
  if (!fs.existsSync(MODEL_PATH)) {
    console.log('No model found, creating a trivial baseline model...');
    const model = tf.sequential();
    model.add(tf.layers.inputLayer({ inputShape: [50, 50, 1] }));
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 50*50, activation: 'relu' }));
    model.add(tf.layers.reshape({ targetShape: [50,50] }));
    model.compile({ optimizer: 'adam', loss: 'mse' });
    await model.save(modelDir);
    fs.writeFileSync(path.join(MODELS_DIR, 'meta.json'), JSON.stringify({
      bounds: MOCK_CITY_BOUNDS,
      scaler: { mean: 0, std: 1 }
    }, null, 2));
    return model;
  }
  return await tf.loadLayersModel(`${modelDir}/model.json`);
}

// Build latest sequence tensor from aggregated counts (placeholder: zeros)
async function buildLatestSequenceTensor(dataDir, gridSize, scaler) {
  // For now, create zeros; training script will generate real sequences
  const arr = tf.zeros([1, gridSize, gridSize, 1]);
  return arr;
}

function cellLatLng(bounds, n, i, j) {
  const dLat = (bounds.north - bounds.south) / n;
  const dLng = (bounds.east - bounds.west) / n;
  const south = bounds.south + i * dLat;
  const west = bounds.west + j * dLng;
  const north = south + dLat;
  const east = west + dLng;
  return { south, west, north, east };
}

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  startMockIncidents();
});