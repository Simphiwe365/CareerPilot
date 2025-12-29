import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import '../pages/Dashboard.css';

export default function MainLayout() {
  return (
    <div className="cp-app">
      <Sidebar />
      <main className="cp-main">
        <Outlet />
      </main>
    </div>
  );
}
