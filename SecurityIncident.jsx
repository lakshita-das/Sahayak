import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function SecurityIncident() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const guardLocation = [20.25015, 85.80055];
    const incidentLocation = [20.25045, 85.80085];

    const map = L.map(mapRef.current).setView(incidentLocation, 17);
    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker(guardLocation).addTo(map).bindPopup('🛡 Guard Location');
    L.marker(incidentLocation).addTo(map).bindPopup('🚨 Incident Location');

    const route = L.polyline(
      [
        guardLocation,
        [20.25022, 85.80060],
        [20.25030, 85.80068],
        [20.25038, 85.80075],
        [20.25042, 85.80080],
        incidentLocation
      ],
      { color: '#007bff', weight: 5, opacity: 0.9 }
    ).addTo(map);

    map.fitBounds(route.getBounds());

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h2>Incident #1024</h2>
          <div className="small">Reported: Dec 5, 2025 — 22:40 | Near Boys Hostel</div>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="pill">HIGH</span>
          <button className="btn btn-primary" onClick={() => alert('Accepted')}>Accept</button>
          <button className="btn btn-ghost" onClick={() => alert('Marked En-route')}>Mark En-Route</button>
        </div>
      </div>

      <div style={{ marginTop: '14px' }} className="row">
        <div className="card" style={{ flex: 0.6 }}>
          <h4>Timeline</h4>
          <ol style={{ marginTop: '8px', paddingLeft: '20px', lineHeight: 1.7 }}>
            <li><strong>Reported</strong> — Suspicious activity near hostel (22:35)</li>
            <li><strong>Accepted</strong> — Guard accepted (22:36)</li>
            <li><strong>En-route</strong> — Guard en-route (22:38)</li>
            <li><strong>Resolved</strong> — Pending</li>
          </ol>

          <h4 style={{ marginTop: '14px' }}>Notes</h4>
          <textarea
            style={{ width: '100%', minHeight: '120px', padding: '12px', borderRadius: '10px', border: '1px solid #e6eef0', marginTop: '6px' }}
            placeholder="Write notes, witness details, actions taken"
          />

          <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
            <button className="btn btn-primary" onClick={() => alert('Live tracking enabled')}>Start Live Tracking</button>
            <button className="btn btn-danger" onClick={() => alert('Incident #1024 marked as Resolved')}>Mark Resolved</button>
          </div>
        </div>

        <div className="card" style={{ flex: 0.4 }}>
          <h4>Map & Route</h4>
          <div ref={mapRef} style={{ height: '260px', marginTop: '10px', borderRadius: '12px' }} />

          <h4 style={{ marginTop: '12px' }}>Additional</h4>
          <div className="small">Reported by: Student ID S-2301</div>

          <div style={{ marginTop: '8px' }} className="kv">
            <button className="btn btn-small btn-ghost" onClick={() => alert('Calling S-2301...')}>Call Reporter</button>
            <button className="btn btn-small btn-primary" onClick={() => alert('Backup unit assigned')}>Assign Backup</button>
          </div>
        </div>
      </div>
    </>
  );
}