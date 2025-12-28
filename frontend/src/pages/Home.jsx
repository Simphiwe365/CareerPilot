import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    // If already logged in, redirect to dashboard
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [token, navigate]);

  return (
    <div className="home-container">
      <h1 className="home-title">CareerPilot</h1>

      <button
        className="home-button"
        onClick={() => navigate('/login')}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
