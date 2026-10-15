export default function About() {
  return (
    <>
      <div className="content-header">
        <h1>About the Campus Safety Portal</h1>
        <p>Student-first safety platform to report, track and avoid risks.</p>
      </div>

      <section className="card">
        <h2>Our mission</h2>
        <p>
          This student-side safety portal is designed to make campus a safer place by giving you
          simple tools to report incidents, avoid unsafe zones, and reach help quickly.
        </p>
      </section>

      <section className="card">
        <h2>Key features</h2>
        <ul style={{ fontSize: '13px', color: '#667788', paddingLeft: '18px' }}>
          <li>Anonymous and logged-in safety reporting.</li>
          <li>Heatmap of unsafe zones with safer route suggestions.</li>
          <li>Night escort requests with live tracking and emergency contact options.</li>
          <li>Saved safe routes and personalized notification settings.</li>
        </ul>
      </section>
    </>
  );
}