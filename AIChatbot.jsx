import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I am the Sahayak AI Safety Assistant. Describe a situation or area to check its AI Risk Score, or ask for emergency help, safe routes, or night escort.'
    }
  ]);
  const navigate = useNavigate();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    const lower = userText.toLowerCase();

    if (lower.includes('escort')) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Opening the Night Escort Request page so a guard can walk with you.' }
      ]);
      setTimeout(() => navigate('/student/escort-request'), 900);
      return;
    }

    if (lower.includes('contact') || lower.includes('helpline') || lower.includes('ambulance')) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Campus Control Room: +91-99999 00001 (24x7) | Women Cell: +91-99999 00002. Redirecting you to Emergency Contacts...' }
      ]);
      setTimeout(() => navigate('/student/emergency-contacts'), 1000);
      return;
    }

    // Call FastAPI DistilBERT safety model if running, else fallback gracefully
    try {
      const res = await fetch('http://127.0.0.1:8000/add-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: userText, lat: 20.2499, lng: 85.7996 })
      });
      const data = await res.json();
      const riskPercent = Math.round((data.risk_score || 0) * 100);
      const level = riskPercent > 70 ? 'HIGH RISK 🔴' : riskPercent > 40 ? 'MODERATE RISK 🟡' : 'LOW RISK 🟢';

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `BERT Safety Analysis: ${level} (Score: ${riskPercent}%). Your input has also been plotted on the live campus heatmap.`
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Stay on well-lit green pathways. You can report this incident directly under "Report Safety Issue" or press SOS for immediate guard dispatch.'
        }
      ]);
    }
  };

  return (
    <>
      {open && (
        <div className="ai-drawer">
          <div className="ai-drawer-header">
            <div>
              <strong>Sahayak AI Assistant</strong>
              <div style={{ fontSize: '11px', opacity: 0.8 }}>Powered by Safety-BERT</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '18px' }}
            >
              ✕
            </button>
          </div>

          <div className="ai-drawer-messages">
            {messages.map((m, idx) => (
              <div key={idx} className={`ai-msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          <form className="ai-drawer-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Describe an incident or ask for help..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" style={{ background: '#0b3441', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer' }}>
              Send
            </button>
          </form>
        </div>
      )}

      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        <span className="icon">AI</span>
        Chat with Safety Assistant
      </button>
    </>
  );
}