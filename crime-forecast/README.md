# Crime Forecast (Demo)

This is a demo web app that shows:
- Live "just happened" incidents via SSE (mock generator you can replace with real feed)
- A forecast heatmap per grid cell using a TensorFlow.js model

## Structure
- backend/: Express server + model serving + mock incident stream
- frontend/: Leaflet UI (OpenStreetMap basemap)
- data/: Place `incidents.csv` here to train
- models/: Saved model and metadata

## Quick start
1. Install backend deps:
   - Open PowerShell in `crime-forecast/backend`
   - Run: `npm install`
2. Start the server:
   - `npm start`
   - Open http://localhost:5050
3. Train a model (optional, requires data):
   - Put `incidents.csv` into `crime-forecast/data/` with columns: datetime, latitude, longitude
   - Run: `npm run train`

## Notes
- This is a research/educational demo only. It avoids identity-level predictions and focuses on aggregate location risk. Use responsibly and review for bias.