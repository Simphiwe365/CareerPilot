import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaCheckCircle, FaTargetIcon, FaRocket, FaTrophy } from 'react-icons/fa';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({ completed: 0, skillGap: 0, careers: 0 });
  const [skillGapData, setSkillGapData] = useState([]);
  const [roadmap, setRoadmap] = useState([]);
  const [coachingMessage, setCoachingMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      // Fetch skill gap data
      const skillGapRes = await axios.get(`${API_URL}/career/skill-gap/1`);
      const skillGap = skillGapRes.data;
      setStats({
        completed: skillGap.completed,
        skillGap: skillGap.percentage,
        careers: 3
      });
      setSkillGapData(skillGap.skills || []);

      // Fetch roadmap data
      const roadmapRes = await axios.get(`${API_URL}/career/roadmap/1`);
      const roadmapSteps = roadmapRes.data.steps || [];
      setRoadmap(roadmapSteps);

      // Fetch coaching message
      const coachRes = await axios.get(`${API_URL}/chat/history`);
      const messages = coachRes.data || [];
      if (messages.length > 0) {
        setCoachingMessage(messages[messages.length - 1].text);
      } else {
        setCoachingMessage('This week, try to complete the Docker course and start your CI/CD journey.');
      }

      setError('');
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data');
      // Set default values on error
      setStats({ completed: 5, skillGap: 20, careers: 3 });
      setSkillGapData([
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 0 },
        { name: 'AWS', level: 45 },
        { name: 'CI/CD', level: 30 },
        { name: 'Python', level: 65 }
      ]);
      setRoadmap([
        { id: 1, title: 'Learn Docker', status: 'in-progress' },
        { id: 2, title: 'Complete CI/CD Course', status: 'pending' },
        { id: 3, title: 'Build a DevOps project', status: 'pending' },
        { id: 4, title: 'AWS Certification', status: 'pending' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="cp-loading">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚙️</div>
          <p style={{ margin: 0 }}>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="cp-header">
        <div>
          <h1>Dashboard</h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>Welcome back! Here's your career progress</p>
        </div>
        <div className="cp-header-right">
          <button className="cp-btn">🔔 Notifications</button>
          <div className="cp-avatar" title="Profile" />
        </div>
      </header>

      {error && (
        <div className="cp-error">
          ⚠️ {error} - Showing sample data
        </div>
      )}

      {/* Statistics Cards */}
      <section className="cp-stats">
        <div className="cp-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div>
              <div className="card-title">Completed Skills</div>
              <div className="card-value">{stats.completed}</div>
              <div className="card-subtitle">+2 this month</div>
            </div>
            <div style={{ fontSize: '32px', opacity: 0.7 }}>✓</div>
          </div>
        </div>

        <div className="cp-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div>
              <div className="card-title">Skill Gap</div>
              <div className="card-value">{stats.skillGap}%</div>
              <div className="card-subtitle">Progress towards goal</div>
            </div>
            <div style={{ fontSize: '32px', opacity: 0.7 }}>📊</div>
          </div>
        </div>

        <div className="cp-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div>
              <div className="card-title">Career Paths</div>
              <div className="card-value">{stats.careers}</div>
              <div className="card-subtitle">Recommended for you</div>
            </div>
            <div style={{ fontSize: '32px', opacity: 0.7 }}>🎯</div>
          </div>
        </div>
      </section>

      <section className="cp-grid">
        {/* Main Chart Panel */}
        <div className="cp-panel">
          <h2>📈 Skill Assessment</h2>
          <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '-8px', marginBottom: '16px' }}>
            Your current proficiency levels across key technologies
          </p>
          {skillGapData.length > 0 ? (
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={skillGapData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                <defs>
                  <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#667eea" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#764ba2" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" style={{ fontSize: '12px' }} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value) => [`${value}%`, 'Proficiency']}
                />
                <Bar dataKey="level" fill="url(#colorLevel)" name="Skill Level" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="cp-placeholder">No skill data available</div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="cp-side-panel">
          {/* Roadmap Card */}
          <div className="cp-panel small">
            <h3>🗺️ Your Roadmap</h3>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 12px 0' }}>3-6 month learning plan</p>
            {roadmap.length > 0 ? (
              <ol className="cp-roadmap">
                {roadmap.map((step, idx) => (
                  <li key={step.id} className={`roadmap-item ${step.status}`}>
                    <span style={{ marginRight: '8px' }}>
                      {step.status === 'completed' ? '✓' : step.status === 'in-progress' ? '⚡' : '→'}
                    </span>
                    {step.title}
                  </li>
                ))}
              </ol>
            ) : (
              <div className="cp-roadmap">
                <li className="roadmap-item in-progress">⚡ Learn Docker</li>
                <li className="roadmap-item">→ Complete CI/CD Course</li>
                <li className="roadmap-item">→ Build a DevOps project</li>
                <li className="roadmap-item">→ AWS Certification</li>
              </div>
            )}
          </div>

          {/* Coaching Card */}
          <div className="cp-panel small">
            <h3>💡 Weekly Guidance</h3>
            <div className="cp-coach">
              {coachingMessage}
            </div>
            <button style={{
              width: '100%',
              marginTop: '12px',
              padding: '10px',
              background: '#667eea',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#764ba2'}
            onMouseLeave={(e) => e.target.style.background = '#667eea'}
            >
              Ask AI Coach →
            </button>
          </div>

          {/* Stats Mini Card */}
          <div className="cp-panel small" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '16px' }}>
            <h3 style={{ color: '#fff', margin: '0 0 8px 0' }}>🏆 Your Stats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
              <div>
                <div style={{ opacity: 0.8 }}>Streak</div>
                <div style={{ fontSize: '20px', fontWeight: '700' }}>7 days</div>
              </div>
              <div>
                <div style={{ opacity: 0.8 }}>Level</div>
                <div style={{ fontSize: '20px', fontWeight: '700' }}>Pro</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
