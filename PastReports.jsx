export default function PastReports() {
  return (
    <>
      <div className="content-header">
        <h1>Past Reports / Incident History</h1>
        <p>View incidents reported anonymously by other students across campus.</p>
      </div>

      <section className="card">
        <h2>Recent anonymous reports</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Type</th>
              <th>Location</th>
              <th>Severity</th>
              <th>Notes (anonymous)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 Dec, 10:30 PM</td>
              <td>Harassment</td>
              <td>Pathway near CS Block</td>
              <td><span className="badge badge-medium">Medium</span></td>
              <td>Group of students making repeated comments; reported anonymously.</td>
            </tr>
            <tr>
              <td>9 Dec, 9:15 PM</td>
              <td>Unsafe area</td>
              <td>Behind Library</td>
              <td><span className="badge badge-high">High</span></td>
              <td>Very dark patch with no lights; multiple reports received.</td>
            </tr>
            <tr>
              <td>8 Dec, 7:45 PM</td>
              <td>Suspicious activity</td>
              <td>Hostel back gate</td>
              <td><span className="badge badge-medium">Medium</span></td>
              <td>Unknown persons loitering near gate; security notified.</td>
            </tr>
            <tr>
              <td>7 Dec, 6:10 PM</td>
              <td>Stalking</td>
              <td>Bus Stand</td>
              <td><span className="badge badge-high">High</span></td>
              <td>Student followed from main road to campus; reported anonymously.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}