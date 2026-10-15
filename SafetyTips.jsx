export default function SafetyTips() {
  return (
    <>
      <div className="content-header">
        <h1>Safety Tips</h1>
        <p>Learn how to stay safe on and off campus.</p>
      </div>

      <section className="highlight-grid">
        <article className="highlight-card">
          <h2>Late-night travel tips</h2>
          <p>Stay safer when moving around campus after dark.</p>
          <ul style={{ fontSize: '13px', color: '#667788', paddingLeft: '18px' }}>
            <li>Stick to well-lit and busy paths highlighted in green on the map.</li>
            <li>Share your live location with a trusted friend or guardian.</li>
            <li>Use the <strong>Night Escort</strong> feature for late returns.</li>
            <li>Avoid using headphones at high volume while walking.</li>
          </ul>
        </article>

        <article className="highlight-card">
          <h2>How to identify harassment</h2>
          <p>Recognize behaviors that cross boundaries.</p>
          <ul style={{ fontSize: '13px', color: '#667788', paddingLeft: '18px' }}>
            <li>Unwanted comments, messages, or touching.</li>
            <li>Repeated attention even after saying “no”.</li>
            <li>Taking photos/videos without consent.</li>
            <li>Threats or blackmail, including digital threats.</li>
          </ul>
        </article>

        <article className="highlight-card">
          <h2>Stay alert in quiet areas</h2>
          <p>Extra caution in low-traffic places.</p>
          <ul style={{ fontSize: '13px', color: '#667788', paddingLeft: '18px' }}>
            <li>Avoid shortcuts through isolated spots at night.</li>
            <li>Walk with a friend when possible.</li>
            <li>Keep your phone charged and accessible.</li>
            <li>Know nearby security cabin locations.</li>
          </ul>
        </article>

        <article className="highlight-card">
          <h2>Self-defense basics</h2>
          <p>Simple techniques and mindset.</p>
          <ul style={{ fontSize: '13px', color: '#667788', paddingLeft: '18px' }}>
            <li>Trust your instincts and leave unsafe situations early.</li>
            <li>Use your voice loudly to attract attention.</li>
            <li>Focus on escaping, not fighting.</li>
            <li>Join campus self-defense workshops if available.</li>
          </ul>
        </article>

        <article className="highlight-card">
          <h2>Digital safety</h2>
          <p>Protect your accounts and privacy.</p>
          <ul style={{ fontSize: '13px', color: '#667788', paddingLeft: '18px' }}>
            <li>Don’t share OTPs, passwords, or IDs over chat.</li>
            <li>Use strong, unique passwords for email and portals.</li>
            <li>Report online harassment using the “Report Safety Issue” form.</li>
            <li>Limit personal info you share publicly on social media.</li>
          </ul>
        </article>
      </section>
    </>
  );
}