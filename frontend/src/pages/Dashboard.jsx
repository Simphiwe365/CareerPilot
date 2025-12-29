import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <>
      <header className="cp-header">
        <h1>Dashboard</h1>
        <div className="cp-header-right">
          <button className="cp-btn">Notifications</button>
          <div className="cp-avatar" />
        </div>
      </header>

      <section className="cp-stats">
        <div className="cp-card">
          <div className="card-title">Completed Skills</div>
          <div className="card-value">5</div>
        </div>
        <div className="cp-card">
          <div className="card-title">Skill-Gap %</div>
          <div className="card-value">20%</div>
        </div>
        <div className="cp-card">
          <div className="card-title">Recommended Careers</div>
          <div className="card-value">3</div>
        </div>
      </section>

      <section className="cp-grid">
        <div className="cp-panel">
          <h2>Skill-Gap Analysis</h2>
          <div className="cp-placeholder">[Chart placeholder]</div>
        </div>

        <div className="cp-side-panel">
          <div className="cp-panel small">
            <h3>Roadmap</h3>
            <ol className="cp-roadmap">
              <li>1. Learn Docker</li>
              <li>2. Complete CI/CD Course</li>
              <li>3. Build a DevOps project</li>
              <li>4. AWS Certification</li>
            </ol>
          </div>

          <div className="cp-panel small">
            <h3>Weekly AI Coaching</h3>
            <p className="cp-coach">This week, try to complete the Docker course and start your CI/CD journey.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
