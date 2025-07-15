import { useState } from 'react';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!username.trim() || !password.trim() || !email.trim()) {
      setError('Username, email, and password are required');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }
      localStorage.setItem('access_token', data.token.access);
      localStorage.setItem('refresh_token', data.token.refresh);
      setIsAuthenticated(true);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="auth-container">
      <h2 className="auth-heading">Register</h2>
      {error && <div className="blog-post-error" role="alert">{error}</div>}
      <div className="auth-fields">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="blog-form-input"
          aria-label="Username"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="blog-form-input"
          aria-label="Email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="blog-form-input"
          aria-label="Password"
        />
        <button
          onClick={handleRegister}
          className="blog-form-button"
          aria-label="Register"
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default Register;
