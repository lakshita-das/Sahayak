import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StudentProfile() {
  const [name, setName] = useState('Student');
  const [collegeId, setCollegeId] = useState('21CS001');

  useEffect(() => {
    const savedName = localStorage.getItem('studentName');
    const savedId = localStorage.getItem('studentId');
    if (savedName) setName(savedName);
    if (savedId) setCollegeId(savedId);
  }, []);

  const saveProfile = () => {
    localStorage.setItem('studentName', name);
    localStorage.setItem('studentId', collegeId);
    alert('Profile updated!');
  };

  return (
    <>
      <div className="content-header">
        <h1>Profile & Dashboard</h1>
        <p>Manage your personal info, routes, report history, and notifications.</p>
      </div>

      <section className="card">
        <h2>Profile details</h2>
        <div className="form-grid-two">
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input type="text" defaultValue="2nd Year B.Tech CSE" />
          </div>
          <div className="form-group">
            <label>College ID</label>
            <input type="text" value={collegeId} onChange={(e) => setCollegeId(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Preferred language</label>
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Telugu</option>
              <option>Kannada</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button className="btn btn-primary" onClick={saveProfile}>Save profile</button>
        </div>
      </section>

      <section className="card">
        <h2>Notification settings</h2>
        <div className="form-row">
          <label className="checkbox-inline">
            <input type="checkbox" defaultChecked /> Alerts for incidents near my hostel
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" defaultChecked /> Night escort status updates
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" /> Weekly safety tips digest
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button className="btn btn-secondary" onClick={() => alert('Notification preferences saved.')}>
            Update notification preferences
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Saved safe routes</h2>
        <div className="card-list">
          <p><strong>Library → Girls Hostel</strong> (10:00 PM) — <span className="badge badge-low">High safe</span></p>
          <p><strong>CS Block → Main Gate</strong> (8:30 PM) — <span className="badge badge-medium">Moderate</span></p>
        </div>
      </section>

      <section className="card">
        <h2>Previous reports</h2>
        <div className="card-list">
          <p><strong>#CS-2025-1042</strong> — Harassment (Medium) near CS Block — Submitted anonymously.</p>
          <p><strong>#CS-2025-0991</strong> — Unsafe area (High) behind Library — Campus security informed.</p>
        </div>
      </section>

      <section className="card">
        <h2>Escort history</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Route</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9 Dec</td>
              <td>Library → Hostel</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>3 Dec</td>
              <td>Lab → Main Gate</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>Logout</h2>
        <p style={{ marginBottom: '10px' }}>End your session on this device.</p>
        <Link to="/login" className="btn btn-outline">Logout</Link>
      </section>
    </>
  );
}