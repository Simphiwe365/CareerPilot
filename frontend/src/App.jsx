import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CareerRecommendations from './pages/CareerRecommendations';
import Roadmap from './pages/Roadmap';
import SkillGap from './pages/SkillGap';
import Courses from './pages/Courses';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import MainLayout from './layouts/MainLayout';

// Protected route wrapper
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/career-recommendations" element={<CareerRecommendations />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/skill-gap" element={<SkillGap />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
