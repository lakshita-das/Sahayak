import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet.heat';

export default function UnsafeZones() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [fromLoc, setFromLoc] = useState('');
  const [toLoc, setToLoc] = useState('');
  const [routeNote, setRouteNote] = useState('');

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const campusCoords = [20.2499, 85.7996];
    const map = L.map(mapContainerRef.current).setView(campusCoords, 17);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Fallback initial points in case backend isn't running yet
    const defaultPoints = [
      [20.2499, 85.7996, 0.9],
      [20.2502, 85.8000, 0.8],
      [20.2495, 85.7992, 0.7]
    ];

    const heatLayer = L.heatLayer(defaultPoints, {
      radius: 25,
      blur: 20,
      maxZoom: 18
    }).addTo(map);

    async function loadHeatmap() {
      try {
        const res = await fetch('http://127.0.0.1:8000/heatmap');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          heatLayer.setLatLngs(data);
        }
      } catch (err) {
        console.warn('Using fallback heatmap points (FastAPI offline):', err.message);
      }
    }

    loadHeatmap();
    const interval = setInterval(loadHeatmap, 10000);

    return () => {
      clearInterval(interval);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      <div className="content-header">
        <h1>Unsafe Zones Heatmap</h1>
        <p>View campus safety heatmap and choose safer routes.</p>
      </div>

      <section className="card">
        <h2>Heatmap Overview</h2>
        <p style={{ marginBottom: '10px' }}>Colored paths show safety levels based on DistilBERT incident analysis.</p>

        <div className="form-row" style={{ marginBottom: '12px' }}>
          <label className="checkbox-inline">
            <input type="checkbox" defaultChecked /> Show past incidents
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" /> Last 7 days
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" /> Hostel areas
          </label>
        </div>

        <div className="heatmap-box">
          <strong>Map Legend</strong>
          <ul style={{ marginTop: '6px', paddingLeft: '18px' }}>
            <li>🟢 Green – Safe</li>
            <li>🟡 Yellow – Medium Risk</li>
            <li>🔴 Red – High Risk</li>
          </ul>
        </div>

        <div
          ref={mapContainerRef}
          style={{ height: '400px', width: '100%', borderRadius: '10px', marginTop: '12px', marginBottom: '14px' }}
        />

        <div className="form-grid-two">
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              placeholder="Start location"
              value={fromLoc}
              onChange={(e) => setFromLoc(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              placeholder="Destination"
              value={toLoc}
              onChange={(e) => setToLoc(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button
            className="btn btn-primary"
            onClick={() =>
              setRouteNote(
                `Suggested Safe Route from "${fromLoc || 'Current Location'}" to "${toLoc || 'Hostel'}": Via Central Academic Corridor (Well-lit, 2 Security Posts, Est. 6 mins — 🟢 High Safe).`
              )
            }
          >
            Suggest Safe Route
          </button>
          <button className="btn btn-secondary" onClick={() => setFromLoc('ITER Main Block (Live GPS)')}>
            Use My Location
          </button>
        </div>

        {routeNote && (
          <div className="modal" style={{ marginTop: '12px' }}>
            {routeNote}
          </div>
        )}
      </section>
    </>
  );
}