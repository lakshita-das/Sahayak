import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CommonLogin() {
  const [userType, setUserType] = useState('STUDENT');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Strict alphanumeric check (e.g. 21C245 or G10234)
    const idRegex = /^[A-Za-z0-9]+$/;
    if (!idRegex.test(loginId)) {
      alert('Please enter a valid alphanumeric ID only (e.g. 21C245 or G10234). Spaces, special characters, and names are not allowed.');
      return;
    }

    localStorage.setItem('studentName', loginId);

    if (userType === 'STUDENT') {
      navigate('/student/home');
    } else if (userType === 'SECURITY') {
      navigate('/security/dashboard');
    }
  };

  return (
    <div className="split-login-container">
      <div className="login-left-pane">
        <div className="login-brand-card">
          <img src="/assets/logo.png" className="login-brand-logo" alt="Sahayak Logo" />
          <h1>SAHAYAK</h1>
          <p>Campus Safety Portal</p>
        </div>
      </div>

      <div className="login-right-pane">
        <div className="login-form-box">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <label>Type of User</label>
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="STUDENT">STUDENT</option>
              <option value="SECURITY">SECURITY</option>
            </select>

            <label>User ID</label>
            <input
              type="text"
              placeholder={userType === 'STUDENT' ? 'E.g. 21C245' : 'E.g. G10234'}
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              autoComplete="off"
              pattern="[A-Za-z0-9]+"
              title="Only letters and numbers are allowed (e.g., 21C245)"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            <button type="submit" className="login-submit-btn">Login</button>

            <div className="login-links-row">
              <Link to="/forgot-password">Forgot Password?</Link>
              <Link to="/signup-choice">New user? Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}