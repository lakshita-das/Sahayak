import { useEffect, useRef } from 'react';
import L from 'leaflet';

const ROUTES = {
  hostelToLibrary: {
    start: [20.25028, 85.80102], // Boys Hostel 1
    end: [20.24866, 85.80006]    // Near D-Block
  },
  messToHostel: {
    start: [20.24992, 85.80108],
    end: [20.25068, 85.79982]
  }
};

export default function SecurityEscort() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const routeLayerRef = useRef(null);
  const markersRef = useRef([]);

  const loadRoute = (type) => {
    const map = mapInstance.current;
    if (!map) return;

    if (routeLayerRef.current) map.removeLayer(routeLayerRef.current);
    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    const startPoint = ROUTES[type].start;
    const endPoint = ROUTES[type].end;

    markersRef.current.push(L.marker(startPoint).addTo(map).bindPopup('Start'));
    markersRef.current.push(L.marker(endPoint).addTo(map).bindPopup('Destination'));

    const start = `${startPoint[1]},${startPoint[0]}`;
    const end = `${endPoint[1]},${endPoint[0]}`;
    const url = `https://router.project-osrm.org/route/v1/foot/${start};${end}?overview=full&geometries=geojson`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const coords = data.routes[0].geometry.coordinates.map((c) => [c[1], c[0]]);
        routeLayerRef.current = L.polyline(coords, {
          color: '#0b3441',
          weight: 5,
          opacity: 0.9
        }).addTo(map);
        map.fitBounds(routeLayerRef.current.getBounds());
      })
      .catch(() => {
        // Fallback straight polyline if OSRM is unreachable
        routeLayerRef.current = L.polyline([startPoint, endPoint], {
          color: '#0b3441',
          weight: 4
        }).addTo(map);
        map.fitBounds(routeLayerRef.current.getBounds());
      });
  };

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current).setView([20.2498, 85.8000], 17);
    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    loadRoute('hostelToLibrary');

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <>
      <h2>Escort Requests</h2>
      <p className="small">Accept or reject escort requests. Start live escort map when you begin.</p>

      <div className="incident medium" style={{ marginTop: '12px' }}>
        <div>
          <div style={{ fontWeight: 700 }}>Escort #E-501 — Student S-2309</div>
          <div className="small">From: Boys Hostel 1 → Central Library</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-primary" onClick={() => loadRoute('hostelToLibrary')}>Start Escort</button>
          <button className="btn btn-ghost">Reject</button>
        </div>
      </div>

      <div className="incident low" style={{ marginTop: '10px' }}>
        <div>
          <div style={{ fontWeight: 700 }}>Escort #E-499 — Student S-2191</div>
          <div className="small">From: Mess → Hostel C</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-primary" onClick={() => loadRoute('messToHostel')}>Start Escort</button>
          <button className="btn btn-ghost">Reject</button>
        </div>
      </div>

      <div style={{ marginTop: '18px' }} className="card">
        <h4>Live Escort Map</h4>
        <div ref={mapRef} style={{ height: '280px', marginTop: '10px', borderRadius: '12px' }} />

        <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
          <button className="btn btn-danger" onClick={() => alert('Escort marked as Completed!')}>Escort Completed</button>
          <button className="btn btn-ghost" onClick={() => alert('Live status shared with Control Room.')}>Share Status</button>
        </div>
      </div>
    </>
  );
}