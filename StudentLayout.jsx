import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import AIChatbot from './AIChatbot';

export default function StudentLayout() {
  const [studentName, setStudentName] = useState('Student');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('studentName');
    if (savedName) setStudentName(savedName);
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
            Welcome, <span>{studentName}</span>
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
              {studentName.charAt(0).toUpperCase()}
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu" style={{ position: 'absolute', right: 0, top: '48px', background: '#fff', color: '#0b3441', minWidth: '220px', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', padding: '8px 0', zIndex: 50 }}>
                <Link to="/student/home" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Home</Link>
                <Link to="/student/report-issue" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Report Safety Issue</Link>
                <Link to="/student/unsafe-zones" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>View Unsafe Zones</Link>
                <Link to="/student/escort-request" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Request Night Escort</Link>
                <Link to="/student/safe-routes" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Safe Routes</Link>
                <Link to="/student/safety-tips" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Safety Tips</Link>
                <Link to="/student/emergency-contacts" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Emergency Contacts</Link>
                <Link to="/student/past-reports" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Past Reports / Incidents</Link>
                <Link to="/student/profile" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>Profile Settings</Link>
                <Link to="/student/about" style={{ display: 'block', padding: '10px 16px', color: '#0b3441', textDecoration: 'none' }}>About</Link>
                <button onClick={logoutUser} style={{ display: 'block', width: '100%', padding: '10px 16px', textAlign: 'left', background: 'none', border: 'none', color: '#e63946', cursor: 'pointer', fontWeight: 600 }}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="portal-layout">
        <nav className="portal-sidebar">
          <div className="portal-sidebar-title">Navigation</div>
          <ul className="portal-nav-list">
            <li><NavLink to="/student/home">🏠 Home</NavLink></li>
            <li><NavLink to="/student/report-issue">🚨 Report Safety Issue</NavLink></li>
            <li><NavLink to="/student/unsafe-zones">🗺️ View Unsafe Zones</NavLink></li>
            <li><NavLink to="/student/escort-request">🌙 Request Night Escort</NavLink></li>
            <li><NavLink to="/student/safe-routes">🧭 Safe Routes</NavLink></li>
            <li><NavLink to="/student/safety-tips">💡 Safety Tips</NavLink></li>
            <li><NavLink to="/student/emergency-contacts">📞 Emergency Contacts</NavLink></li>
            <li><NavLink to="/student/past-reports">📋 Past Reports</NavLink></li>
            <li><NavLink to="/student/profile">👤 Profile Settings</NavLink></li>
            <li><NavLink to="/student/about">ℹ️ About</NavLink></li>
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