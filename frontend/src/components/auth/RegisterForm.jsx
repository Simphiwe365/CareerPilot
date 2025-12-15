import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../pages/Login.module.css';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password
      });

      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to dashboard
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      {error && (
        <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
          {error}
        </div>
      )}
      <input 
        className={styles.inputBox}
        name="name" 
        placeholder="Full Name" 
        value={form.name}
        onChange={handleChange}
        required 
      />
      <input 
        className={styles.inputBox}
        name="email" 
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required 
      />
      <input 
        className={styles.inputBox}
        name="password" 
        type="password" 
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required 
      />
      <button type="submit" className={styles.loginButton} disabled={loading}>
        {loading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
}
