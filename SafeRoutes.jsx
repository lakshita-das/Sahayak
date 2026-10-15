import { useState } from 'react';

export default function SafeRoutes() {
  const [routes, setRoutes] = useState([
    { route: 'Library → Girls Hostel', time: '10:00 PM', level: 'High safe', badge: 'badge-low', used: 'Yesterday' },
    { route: 'CS Block → Main Gate', time: '8:30 PM', level: 'Moderate', badge: 'badge-medium', used: '2 days ago' },
    { route: 'Lab Complex → Bus Stand', time: '7:45 PM', level: 'High safe', badge: 'badge-low', used: 'Last week' }
  ]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [time, setTime] = useState('21:00');
  const [preview, setPreview] = useState('Route preview will appear here with waypoints and safety notes.');

  const saveRoute = () => {
    if (!from || !to) return alert('Please enter From and To locations.');
    setRoutes([{ route: `${from} → ${to}`, time, level: 'High safe', badge: 'badge-low', used: 'Just now' }, ...routes]);
  };

  return (
    <>
      <div className="content-header">
        <h1>Safe Routes</h1>
        <p>View and manage your saved safe routes around campus.</p>
      </div>

      <section className="card">
        <h2>Plan a route</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="route-from">From</label>
              <input type="text" id="route-from" placeholder="Start point" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="route-to">To</label>
              <input type="text" id="route-to" placeholder="Destination" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
          </div>
          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="route-time">Usual travel time</label>
              <input type="time" id="route-time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="route-preference">Route preference</label>
              <select id="route-preference">
                <option>Most lit & crowded</option>
                <option>Shortest safe route</option>
                <option>Near security posts</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setPreview(`Safe Route Generated: ${from || 'Origin'} → Central Walkway → Security Post #2 → ${to || 'Destination'} (100% Lit Path).`)}
            >
              Generate safe route
            </button>
            <button type="button" className="btn btn-secondary" onClick={saveRoute}>
              Save route
            </button>
          </div>
        </form>
        <div className="map-box" style={{ marginTop: '12px' }}>
          {preview}
        </div>
      </section>

      <section className="card">
        <h2>Saved safe routes</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Route</th>
              <th>Time</th>
              <th>Safety Level</th>
              <th>Last used</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r, i) => (
              <tr key={i}>
                <td>{r.route}</td>
                <td>{r.time}</td>
                <td><span className={`badge ${r.badge}`}>{r.level}</span></td>
                <td>{r.used}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}