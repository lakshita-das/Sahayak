import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AIChatbot from '../../components/AIChatbot';

export default function ForgotPassword() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const idLabel = role === 'student' ? 'College ID' : role === 'security' ? 'Guard ID' : 'College / Guard ID';
  const idPlaceholder = role === 'student' ? 'e.g. 21CS001' : role === 'security' ? 'e.g. G1023' : 'Enter your ID';

  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Password updated successfully!');
    navigate('/login');
  };

  return (
    <div className="auth-scope">
      <header className="top-header">
        <div className="logo-greeting">
          <div className="logo-badge">SC</div>
          <div>Account Recovery</div>
        </div>
        <div>Forgot Password</div>
      </header>

      <main className="auth-main">
        <section className="auth-card">
          <h1>Reset Password</h1>
          <p className="subtitle">Enter your ID and select your role to receive an OTP.</p>

          <form onSubmit={handleUpdate}>
            <label htmlFor="role">Select Role</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Choose role</option>
              <option value="student">Student</option>
              <option value="security">Security</option>
            </select>

            <label htmlFor="recover-id">{idLabel}</label>
            <input type="text" id="recover-id" placeholder={idPlaceholder} required />

            <button
              type="button"
              className="btn-primary btn-full"
              onClick={() => alert('OTP sent to your registered mobile number!')}
            >
              Send OTP
            </button>

            <label htmlFor="otp-code">Enter OTP</label>
            <input type="text" id="otp-code" placeholder="6-digit OTP" required />

            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" placeholder="Set new password" required />

            <button type="submit" className="btn-secondary btn-full">
              Update Password
            </button>
          </form>

          <div className="auth-footer">
            <span>Remembered your password?</span>
            <Link to="/login" className="link-inline">Back to login</Link>
          </div>
        </section>
      </main>

      <AIChatbot />
    </div>
  );
}