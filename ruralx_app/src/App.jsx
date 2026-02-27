import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration
import LanguageSelector from './components/LanguageSelector';
import Login from './components/Login';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState('language'); // 'language' -> 'login' -> 'home'

  const handleLanguageSelect = (lang) => {
    setCurrentView('login');
  };

  const handleLoginComplete = () => {
    setCurrentView('home');
  };

  return (
    <div className="app-container">
      {currentView === 'language' && (
        <LanguageSelector onLanguageSelect={handleLanguageSelect} />
      )}

      {currentView === 'login' && (
        <Login onLoginComplete={handleLoginComplete} />
      )}

      {currentView === 'home' && (
        <div className="home-container">
          {/* Placeholder for Home Page Dashboard (Next Phase) */}
          <div className="glass-card dash-card fade-in-up">
            <h1>{t('homeWelcome')}</h1>
            <p>{t('subtitle')}</p>

            <div className="mt-6 flex gap-4 dashboard-mockup">
              <div className="stat-box">Scanner / Voice Mock</div>
              <div className="stat-box">Weather Alert Mock</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
