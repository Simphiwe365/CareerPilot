import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../pages/Dashboard.css';

// Icon components
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5H17" />
    <path d="M6 12h3" />
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m4.22-4.22-4.24 4.24m5.08 4.98h-6m4.24 4.24-4.24-4.24m-4.98 5.08v-6M3.78 7.78l4.24-4.24m-5.08 4.98h6m-4.24 4.24l4.24-4.24m4.98 5.08v-6" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default function Sidebar() {
  const navigate = useNavigate();

  const items = [
    { to: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
    { to: '/career-recommendations', label: 'Career Recommendations', icon: BriefcaseIcon },
    { to: '/roadmap', label: 'Roadmap', icon: MapIcon },
    { to: '/skill-gap', label: 'Skill-Gap Analysis', icon: ChartIcon },
    { to: '/courses', label: 'Courses & Certifications', icon: BookIcon },
    { to: '/chat', label: 'AI Chat Coach', icon: MessageIcon },
    { to: '/settings', label: 'Settings', icon: SettingsIcon },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside className="cp-sidebar">
      <div>
        <div className="cp-sidebar-top">
          <div className="cp-logo">CareerPilot</div>
        </div>

        <nav className="cp-nav">
          {items.map(i => {
            const Icon = i.icon;
            return (
              <NavLink
                key={i.to}
                to={i.to}
                end
                className={({ isActive }) =>
                  'cp-nav-item' + (isActive ? ' active' : '')
                }
              >
                <span className="cp-nav-icon">
                  <Icon />
                </span>
                <span className="cp-nav-label">{i.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="cp-sidebar-bottom">
        <button
          onClick={handleLogout}
          className="cp-logout-btn"
        >
          <span className="cp-nav-icon">
            <LogoutIcon />
          </span>
          <span className="cp-nav-label">Logout</span>
        </button>
        <div className="cp-legal">© CareerPilot</div>
      </div>
    </aside>
  );
}