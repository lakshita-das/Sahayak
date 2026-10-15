import { useNavigate } from 'react-router-dom';

export default function SecurityProfile() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Guard Profile</h2>
      <p className="small">Personal details, duty records, and performance overview.</p>

      <div className="card" style={{ marginTop: '14px', maxWidth: '600px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Guard Avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <h3>Security Officer</h3>
            <div className="small">ID: G-1029</div>
            <div className="small">Shift: Night</div>
            <div className="small">Zone: ITER Campus</div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: '16px' }}>
        <div className="card half">
          <h4>Incidents Handled</h4>
          <div style={{ fontSize: '26px', fontWeight: 700 }}>124</div>
        </div>
        <div className="card half">
          <h4>Avg Response Time</h4>
          <div style={{ fontSize: '26px', fontWeight: 700 }}>3m 05s</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '16px' }}>
        <h4>Account Actions</h4>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button className="btn btn-primary" onClick={() => alert('Profile edit mode enabled.')}>Edit Profile</button>
          <button className="btn btn-danger" onClick={() => navigate('/login')}>Logout</button>
        </div>
      </div>
    </>
  );
}