// src/pages/student/StudentHome.jsx
import { useNavigate } from 'react-router-dom';

export default function StudentHome() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="portal-content-header">
        <h1>Dashboard</h1>
        <p>Quick access to report issues, view unsafe zones, and request escort.</p>
      </div>

      <div className="card">
        <h2>Report Safety Issues</h2>
        <p>Quickly report harassment, stalking, unsafe areas, suspicious activity, or emergencies.</p>
        <ul style={{ paddingLeft: '20px', margin: '12px 0', color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
          <li>Anonymous or logged-in reporting</li>
          <li>Attach location details and images</li>
          <li>Tag severity as low, medium, or high</li>
        </ul>
        <button 
          onClick={() => navigate('/student/report-issue')} 
          className="btn btn-primary"
          style={{ marginTop: '8px' }}
        >
          Open report form ↗
        </button>
      </div>

      <div className="card">
        <h2>View Unsafe Zones</h2>
        <p>Explore a live heatmap of campus safety with green, yellow, and red paths.</p>
        <ul style={{ paddingLeft: '20px', margin: '12px 0', color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
          <li>See unsafe hotspots based on real reports</li>
          <li>Toggle “Show past incidents” for context</li>
          <li>Get AI-suggested safer routes</li>
        </ul>
        <button 
          onClick={() => navigate('/student/unsafe-zones')} 
          className="btn btn-primary"
          style={{ marginTop: '8px' }}
        >
          Open unsafe zones ↗
        </button>
      </div>

      <div className="card">
        <h2>Night Escort Request</h2>
        <p>Request a security officer or volunteer to escort you safely at night.</p>
        <ul style={{ paddingLeft: '20px', margin: '12px 0', color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
          <li>Set from & to locations with pickup time</li>
          <li>Select number of people and gender preference</li>
          <li>Track escort arrival and contact them instantly</li>
        </ul>
        <button 
          onClick={() => navigate('/student/escort-request')} 
          className="btn btn-primary"
          style={{ marginTop: '8px' }}
        >
          Request night escort ↗
        </button>
      </div>
    </div>
  );
}