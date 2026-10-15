import { Link, useNavigate } from 'react-router-dom';

export default function SignupSecurity() {
  const navigate = useNavigate();

  const securitySignup = (e) => {
    e.preventDefault();
    alert('Security account created successfully!');
    navigate('/security/dashboard');
  };

  return (
    <div className="auth-scope">
      <main className="auth-main">
        <section className="auth-card">
          <h1>Create Security Account</h1>
          <p className="subtitle">Please fill in security staff details</p>

          <form onSubmit={securitySignup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />

            <label>Age</label>
            <input type="number" placeholder="Enter age" required />

            <label>Gender</label>
            <select required>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label>Contact Number</label>
            <input type="tel" placeholder="Enter contact number" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" required />

            <label>Guard ID</label>
            <input type="text" placeholder="e.g. G-1023" required />

            <label>Upload ID Proof</label>
            <input type="file" required />

            <label>Create Password</label>
            <input type="password" placeholder="Create password" required />

            <label>Re-enter Password</label>
            <input type="password" placeholder="Confirm password" required />

            <button type="submit" className="btn-primary btn-full">
              Create Security Account
            </button>
          </form>

          <div className="auth-footer">
            <Link to="/signup-choice" className="link-inline">← Change role</Link><br />
            <Link to="/login" className="link-inline">Back to login</Link>
          </div>
        </section>
      </main>
    </div>
  );
}