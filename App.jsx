import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import StudentLayout from './components/StudentLayout';
import SecurityLayout from './components/SecurityLayout';

// Common Auth Pages
import CommonLogin from './pages/auth/CommonLogin';
import ForgotPassword from './pages/auth/ForgotPassword';
import SignupChoice from './pages/auth/SignupChoice';
import SignupStudent from './pages/auth/SignupStudent';
import SignupSecurity from './pages/auth/SignupSecurity';

// Student Pages
import StudentHome from './pages/student/StudentHome';
import ReportIssue from './pages/student/ReportIssue';
import UnsafeZones from './pages/student/UnsafeZones';
import EscortRequest from './pages/student/EscortRequest';
import SafeRoutes from './pages/student/SafeRoutes';
import SafetyTips from './pages/student/SafetyTips';
import EmergencyContacts from './pages/student/EmergencyContacts';
import PastReports from './pages/student/PastReports';
import StudentProfile from './pages/student/StudentProfile';
import About from './pages/student/About';

// Security Pages
import SecurityDashboard from './pages/security/SecurityDashboard';
import SecurityIncident from './pages/security/SecurityIncident';
import SecurityEscort from './pages/security/SecurityEscort';
import SecurityAnalytics from './pages/security/SecurityAnalytics';
import SecurityProfile from './pages/security/SecurityProfile';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect to unified login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Common Authentication Routes */}
        <Route path="/login" element={<CommonLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup-choice" element={<SignupChoice />} />
        <Route path="/signup-student" element={<SignupStudent />} />
        <Route path="/signup-security" element={<SignupSecurity />} />

        {/* Student Portal Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<StudentHome />} />
          <Route path="report-issue" element={<ReportIssue />} />
          <Route path="unsafe-zones" element={<UnsafeZones />} />
          <Route path="escort-request" element={<EscortRequest />} />
          <Route path="safe-routes" element={<SafeRoutes />} />
          <Route path="safety-tips" element={<SafetyTips />} />
          <Route path="emergency-contacts" element={<EmergencyContacts />} />
          <Route path="past-reports" element={<PastReports />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Security Command Centre Routes */}
        <Route path="/security" element={<SecurityLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<SecurityDashboard />} />
          <Route path="incident" element={<SecurityIncident />} />
          <Route path="escort" element={<SecurityEscort />} />
          <Route path="analytics" element={<SecurityAnalytics />} />
          <Route path="profile" element={<SecurityProfile />} />
        </Route>

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}