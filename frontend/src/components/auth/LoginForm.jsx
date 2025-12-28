import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../../pages/Login.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });

      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register button clicked');
    // Navigate to Register page
    navigate('/register');
  };

  return (
    <form onSubmit={handleLogin} style={{ width: '100%' }}>
      {error && (
        <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
          {error}
        </div>
      )}
      <input
        type="email"
        placeholder="Email"
        className={styles.inputBox}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.inputBox}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className={styles.loginButton} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <Link to="/register" style={{ width: '100%' }}>
        <button
          type="button"
          className={styles.registerButton}
        >
          Register
        </button>
      </Link>
    </form>
  );
}
