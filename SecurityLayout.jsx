import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import AIChatbot from './AIChatbot';

export default function SecurityLayout() {
  const [guardName, setGuardName] = useState('Security Officer');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('studentName');
    if (savedName) setGuardName(savedName);
  }, []);

  const logoutUser = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div className="portal-wrapper">
      <header className="portal-header">
        <div className="portal-user-left">
          <img src="/assets/logo.png" alt="Sahayak Logo" className="portal-logo" />
          <span className="portal-welcome">
            Security Control — <span>{guardName}</span>
          </span>
        </div>

        <div className="header-right">
          <div
            className="profile-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: 'relative' }}
          >
            <button
              className="btn"
              style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#fff', color: '#0b3441', fontWeight: 700 }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {guardName.charAt(0).toUpperCase()}
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu" style={{ position: 'absolute', right: 0, top: '48px', background: '#fff', color: '#0b3441', minWidth: '200px', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', padding: '8px 0', zIndex: 50 }}>
                <Link to="/security/dashboard" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Dashboard</Link>
                <Link to="/security/incident" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Incidents</Link>
                <Link to="/security/escort" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Night Escort</Link>
                <Link to="/security/analytics" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Analytics</Link>
                <Link to="/security/profile" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Profile Settings</Link>
                <button onClick={logoutUser} style={{ display: 'block', width: '100%', padding: '10px 16px', textAlign: 'left', background: 'none', border: 'none', color: '#e63946', cursor: 'pointer', fontWeight: 600 }}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="portal-layout">
        <nav className="portal-sidebar">
          <div className="portal-sidebar-title">Security Navigation</div>
          <ul className="portal-nav-list">
            <li><NavLink to="/security/dashboard">🏠 Dashboard</NavLink></li>
            <li><NavLink to="/security/incident">🚨 Incidents</NavLink></li>
            <li><NavLink to="/security/escort">🌙 Night Escort</NavLink></li>
            <li><NavLink to="/security/analytics">📊 Analytics</NavLink></li>
            <li><NavLink to="/security/profile">👤 Profile Settings</NavLink></li>
          </ul>
        </nav>

        <main className="portal-content">
          <Outlet />
        </main>
      </div>

      <AIChatbot />
    </div>
  );
}