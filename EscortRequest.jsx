import { useState } from 'react';

export default function EscortRequest() {
  const [requested, setRequested] = useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    setRequested(true);
    alert('Night escort request submitted! Officer Priya (ID: SEC-23) has been notified.');
  };

  return (
    <>
      <div className="content-header">
        <h1>Request Security Escort</h1>
        <p>Get a security officer or volunteer to walk with you to your destination.</p>
      </div>

      <section className="card">
        <h2>Escort request form</h2>
        <form onSubmit={handleRequest}>
          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="escort-from">From location</label>
              <input type="text" id="escort-from" placeholder="Source location" required />
            </div>
            <div className="form-group">
              <label htmlFor="escort-to">To location</label>
              <input type="text" id="escort-to" placeholder="Destination" required />
            </div>
          </div>

          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="escort-time">Time of pickup</label>
              <input type="time" id="escort-time" required />
            </div>
            <div className="form-group">
              <label htmlFor="escort-people">Number of people</label>
              <input type="number" id="escort-people" min="1" defaultValue="1" />
            </div>
          </div>

          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="escort-gender">Gender preference (optional)</label>
              <select id="escort-gender">
                <option>No preference</option>
                <option>Male escort</option>
                <option>Female escort</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="escort-notes">Additional notes (optional)</label>
              <input type="text" id="escort-notes" placeholder="Any specific concerns" />
            </div>
          </div>

          <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
            <button type="submit" className="btn btn-primary">Request escort</button>
            <button type="button" className="btn btn-secondary" onClick={() => alert('Scheduled for later tonight.')}>
              Schedule later today
            </button>
          </div>
        </form>
      </section>

      <section className="card">
        <h2>Live tracking</h2>
        <div className="tracking-box">
          <p><strong>Status:</strong> {requested ? 'Guard Assigned — En Route (ETA: 3 mins)' : 'Awaiting escort assignment.'}</p>
          <p>Once assigned, you will see:</p>
          <ul style={{ marginTop: '6px', paddingLeft: '18px' }}>
            <li>Real-time arrival updates</li>
            <li>Estimated time of arrival</li>
            <li>Escort name and contact number</li>
          </ul>
        </div>

        <div className="modal" style={{ marginTop: '12px' }}>
          <strong>Assigned guard details:</strong>
          <p>Escort: Officer Priya (ID: SEC-23)</p>
          <p>Phone: 99999 12345</p>
          <button className="btn btn-secondary" style={{ marginTop: '8px' }} onClick={() => alert('Calling Officer Priya (99999 12345)...')}>
            Contact the escort
          </button>
        </div>
      </section>
    </>
  );
}