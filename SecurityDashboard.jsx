import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet.heat';

export default function SecurityDashboard() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const campusCenter = [20.24935, 85.80045];
    const campusBounds = [
      [20.2478, 85.7975],
      [20.2520, 85.8025]
    ];

    const map = L.map(mapRef.current, {
      maxBounds: campusBounds,
      maxBoundsViscosity: 1.0
    }).setView(campusCenter, 17);

    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    map.fitBounds(campusBounds);
    map.on('drag', () => map.panInsideBounds(campusBounds, { animate: false }));

    L.marker(campusCenter).addTo(map).bindPopup('ITER Campus');

    const defaultHeatPoints = [
      [20.2499, 85.7996, 0.9],
      [20.2502, 85.8000, 0.8],
      [20.2495, 85.7992, 0.7],
      [20.2490, 85.7988, 0.6],
      [20.2505, 85.8005, 0.9]
    ];

    const heatLayer = L.heatLayer(defaultHeatPoints, {
      radius: 25,
      blur: 18,
      maxZoom: 17
    }).addTo(map);

    // Sync with FastAPI backend if running
    fetch('http://127.0.0.1:8000/heatmap')
      .then((r) => r.json())
      .then((pts) => {
        if (Array.isArray(pts) && pts.length > 0) heatLayer.setLatLngs(pts);
      })
      .catch(() => {});

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="row" style={{ alignItems: 'flex-start' }}>
      <div className="left-column">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Live Incident Feed</h3>
            <span className="small">Newest first</span>
          </div>

          <div className="incident-list">
            <div className="incident high" onClick={() => navigate('/security/incident')} style={{ cursor: 'pointer' }}>
              <div>
                <b>Incident #1024 — Suspicious Person</b>
                <div className="small">Near North Gate · 5m ago</div>
              </div>
              <span className="badge high">HIGH</span>
            </div>

            <div className="incident medium">
              <div>
                <b>Incident #1023 — Fire Alarm</b>
                <div className="small">Block B · 20m ago</div>
              </div>
              <span className="badge medium">MED</span>
            </div>

            <div className="incident low">
              <div>
                <b>Incident #1022 — Lost Student</b>
                <div className="small">Admin Office · 40m ago</div>
              </div>
              <span className="badge low">LOW</span>
            </div>

            <div className="incident medium">
              <div>
                <b>Incident #1021 — Crowd Issue</b>
                <div className="small">Cafeteria · 1h ago</div>
              </div>
              <span className="badge medium">MED</span>
            </div>
          </div>
        </div>

        <div className="card sos-card">
          <div className="sos-header">
            🚨 SOS Alerts <span className="live-dot" />
          </div>
          <div className="sos-list">
            <div className="sos-alert high">
              <b>Student A</b>
              <div className="small">Hostel Gate · Just now</div>
            </div>
            <div className="sos-alert medium">
              <b>Student B</b>
              <div className="small">Library · 2 min ago</div>
            </div>
            <div className="sos-alert high">
              <b>Student C</b>
              <div className="small">Parking Area · 5 min ago</div>
            </div>
            <div className="sos-alert low">
              <b>Student D</b>
              <div className="small">Sports Complex · 12 min ago</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '320px' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Live Map View</h3>
            <div className="small">Guards & Heatmap</div>
          </div>
          <div ref={mapRef} style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: '12px', marginTop: '12px' }} />
        </div>

        <div className="card half">
          <h4>Quick Stats</h4>
          <div style={{ display: 'flex', gap: '20px', marginTop: '12px' }}>
            <div><b>3</b><div className="small">Incidents</div></div>
            <div><b>2m</b><div className="small">Response</div></div>
            <div><b>12</b><div className="small">Alerts</div></div>
          </div>
        </div>

        <div className="card half">
          <h4>Actions</h4>
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => alert('Backup requested at your coordinates!')}>Need Backup</button>
            <button className="btn btn-danger" onClick={() => alert('Calling Control Room...')}>Call Control</button>
            <button className="btn btn-ghost" onClick={() => navigate('/security/escort')}>Night Escort</button>
          </div>
        </div>
      </div>
    </div>
  );
}