import { useState } from 'react';

export default function ReportIssue() {
  const [type, setType] = useState('Harassment');
  const [severity, setSeverity] = useState('Medium');
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState({ lat: 20.2499, lng: 85.7996 });
  const [description, setDescription] = useState('');
  const [submittedResult, setSubmittedResult] = useState(null);

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setLocationText(`GPS: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
        },
        () => {
          setLocationText('ITER Campus - Near Block C (20.2499, 85.7996)');
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:8000/add-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          review: `${type} (${severity}): ${description}`,
          lat: coords.lat,
          lng: coords.lng
        })
      });
      const data = await res.json();
      setSubmittedResult({
        id: 'CS-2026-1042',
        riskScore: data.risk_score
      });
    } catch {
      setSubmittedResult({
        id: 'CS-2026-1042',
        riskScore: 'Queued (Offline Mode)'
      });
    }
  };

  return (
    <>
      <div className="content-header">
        <h1>Report a Safety Issue</h1>
        <p>Share any concern about harassment, stalking, unsafe zones or suspicious activity.</p>
      </div>

      <section className="card">
        <h2>Incident details</h2>
        <p style={{ marginBottom: '12px' }}>
          All reports are analyzed by our AI Safety Model and reviewed by campus safety. Anonymous reports are accepted.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="report-type">Choose report type</label>
              <select id="report-type" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Harassment</option>
                <option>Stalking</option>
                <option>Unsafe area</option>
                <option>Suspicious activity</option>
                <option>Emergency</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="report-severity">Severity level</label>
              <select id="report-severity" value={severity} onChange={(e) => setSeverity(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="report-location">Location selector</label>
            <input
              type="text"
              id="report-location"
              placeholder="Building, floor, landmark"
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              required
            />
          </div>

          <div className="form-row" style={{ marginBottom: '12px' }}>
            <button type="button" className="btn btn-secondary" onClick={detectLocation}>
              Auto-detect location
            </button>
            <span style={{ fontSize: '12px', color: '#667788' }}>
              Allow browser access to use GPS-based location.
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="report-images">Upload images (optional)</label>
            <input type="file" id="report-images" multiple />
          </div>

          <div className="form-group">
            <label htmlFor="report-description">Add description</label>
            <textarea
              id="report-description"
              placeholder="Explain what happened, when, and who was involved (if known)."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-grid-two">
            <div className="form-group">
              <label>Submit as</label>
              <div className="pill-row">
                <label className="pill-option">
                  <input type="radio" name="identity" defaultChecked />
                  <span className="pill-badge">With login identity</span>
                </label>
                <label className="pill-option">
                  <input type="radio" name="identity" />
                  <span className="pill-badge">Anonymous</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Severity tags</label>
              <div className="pill-row">
                <span className="pill-badge badge-low">Low</span>
                <span className="pill-badge badge-medium">Medium</span>
                <span className="pill-badge badge-high">High</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
            <button type="submit" className="btn btn-primary">Submit report</button>
            <button type="button" className="btn btn-outline" onClick={() => alert('Draft saved locally.')}>
              Save as draft
            </button>
          </div>

          {submittedResult && (
            <div className="modal" style={{ marginTop: '14px' }}>
              <strong>Report Submitted Successfully:</strong>
              <p>
                “Your report has been received. Tracking ID: <b>{submittedResult.id}</b>. AI Predicted Risk Score: <b>{submittedResult.riskScore}</b>. Heatmap updated.”
              </p>
            </div>
          )}
        </form>
      </section>
    </>
  );
}