export default function SecurityAnalytics() {
  return (
    <>
      <h2>Analytics Overview</h2>
      <p className="small">Insights into campus safety trends and guard performance.</p>

      <div className="row" style={{ marginTop: '12px' }}>
        <div className="card half">
          <h4>Total Incidents (30 Days)</h4>
          <div style={{ fontSize: '28px', fontWeight: 800, marginTop: '8px' }}>124</div>
        </div>
        <div className="card half">
          <h4>Average Response Time</h4>
          <div style={{ fontSize: '28px', fontWeight: 800, marginTop: '8px' }}>3m 05s</div>
        </div>
      </div>

      <div style={{ marginTop: '14px' }} className="card">
        <h4>Incident Category Breakdown</h4>
        <ul style={{ marginTop: '10px', lineHeight: 1.8, listStyle: 'none' }}>
          <li>🔴 Suspicious Activity — 28%</li>
          <li>🟠 Fire Alarm — 22%</li>
          <li>🟡 Theft — 32%</li>
          <li>🟢 Harassment — 18%</li>
        </ul>
      </div>

      <div style={{ marginTop: '14px' }} className="card">
        <h4>Incident Status Distribution</h4>
        <ul style={{ marginTop: '10px', lineHeight: 1.8, listStyle: 'none' }}>
          <li>✅ Resolved — 82%</li>
          <li>🕒 In Progress — 10%</li>
          <li>⚠️ Escalated — 8%</li>
        </ul>
      </div>

      <div style={{ marginTop: '14px' }} className="card">
        <h4>Top Performing Guards</h4>
        <ul style={{ marginTop: '10px', lineHeight: 1.8, listStyle: 'none' }}>
          <li>👮 Guard A — 45 Cases</li>
          <li>👮 Guard B — 39 Cases</li>
          <li>👮 Guard C — 33 Cases</li>
        </ul>
      </div>
    </>
  );
}