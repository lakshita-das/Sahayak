import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupStudent() {
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const studentSignup = (e) => {
    e.preventDefault();
    if (fullName) localStorage.setItem('studentName', fullName);
    alert('Student account created successfully!');
    navigate('/student/home');
  };

  return (
    <div className="auth-scope">
      <main className="auth-main">
        <section className="auth-card">
          <h1>Create Student Account</h1>
          <p className="subtitle">Please fill in your student details</p>

          <form onSubmit={studentSignup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

            <label>Age</label>
            <input type="number" placeholder="Enter your age" required />

            <label>Contact Number</label>
            <input type="tel" placeholder="Enter mobile number" required />

            <label>Hostel Number</label>
            <input type="text" placeholder="e.g. Hostel B - 203" required />

            <label>Warden Name</label>
            <input type="text" placeholder="Enter warden name" required />

            <label>Warden Contact</label>
            <input type="tel" placeholder="Warden phone number" required />

            <label>Guardian Name (Parent)</label>
            <input type="text" placeholder="Father / Mother name" required />

            <label>Guardian Contact</label>
            <input type="tel" placeholder="Guardian phone number" required />

            <label>College ID</label>
            <input type="text" placeholder="e.g. 21CS001" required />

            <label>Upload ID Proof</label>
            <input type="file" required />

            <label>Create Password</label>
            <input type="password" placeholder="Create password" required />

            <label>Re-enter Password</label>
            <input type="password" placeholder="Confirm password" required />

            <button type="submit" className="btn-primary btn-full">
              Create Student Account
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