import React from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import LanguageSelector from './components/LanguageSelector';
import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Emergency from './pages/Emergency';
import './App.css';

// Dashboard Layout Component wrapping the protected pages
function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-content">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    navigate('/login');
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LanguageSelector onLanguageSelect={handleLanguageSelect} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Dashboard Routes with Navbar */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="schemes" element={<Schemes />} />
          <Route path="emergency" element={<Emergency />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
