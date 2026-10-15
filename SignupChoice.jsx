import { Link, useNavigate } from 'react-router-dom';

export default function SignupChoice() {
  const navigate = useNavigate();

  return (
    <div className="auth-scope">
      <main className="auth-main">
        <section className="auth-card">
          <h1>Create Account</h1>
          <p className="subtitle">Please select your role</p>

          <button className="btn-primary btn-full" onClick={() => navigate('/signup-student')}>
            I am a Student
          </button>

          <button className="btn-secondary btn-full" onClick={() => navigate('/signup-security')}>
            I am Security Staff
          </button>

          <div className="auth-footer">
            <Link to="/login" className="link-inline">← Back to login</Link>
          </div>
        </section>
      </main>
    </div>
  );
}