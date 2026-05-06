import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Builder from './components/Builder';
import Output from './components/Output';
import Docs from './components/Docs';
import Upgrade from './components/Upgrade';
import RefiningLoader from './components/RefiningLoader';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';
import { generatePrompt } from './utils/promptGenerator';

function App() {
  const [activePage, setActivePage] = useState('landing'); // landing, builder, refining, output, docs, upgrade, privacy, terms
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [tempFormData, setTempFormData] = useState({});
  const [usageCount, setUsageCount] = useState(() => {
    return parseInt(localStorage.getItem('Genesis_usage_count')) || 0;
  });
  const [userApiKey, setUserApiKey] = useState(() => {
    return localStorage.getItem('Genesis_user_api_key') || '';
  });

  const handleStartBuilder = () => {
    // Check usage limit BEFORE starting
    if (!userApiKey && usageCount >= 3) {
      setActivePage('upgrade');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setActivePage('builder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBuilderComplete = (formData) => {
    setTempFormData(formData);
    setActivePage('refining');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefinementFinish = async () => {
    try {
      const prompt = await generatePrompt(tempFormData, userApiKey);
      setGeneratedPrompt(prompt);

      // Increment usage if no API key
      if (!userApiKey) {
        const newCount = usageCount + 1;
        setUsageCount(newCount);
        localStorage.setItem('Genesis_usage_count', newCount.toString());
      }

      setActivePage('output');
    } catch (error) {
      alert(error.message);
      setActivePage('landing');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveApiKey = (key) => {
    setUserApiKey(key);
    localStorage.setItem('Genesis_user_api_key', key);
    setActivePage('builder'); // Return to builder after saving
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setGeneratedPrompt('');
    setTempFormData({});
    setActivePage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        usageCount={usageCount}
        userApiKey={userApiKey}
      />

      <main className="main-content">
        {activePage === 'landing' && (
          <Landing onStart={handleStartBuilder} />
        )}

        {activePage === 'builder' && (
          <Builder onComplete={handleBuilderComplete} />
        )}

        {activePage === 'refining' && (
          <RefiningLoader onFinish={handleRefinementFinish} />
        )}

        {activePage === 'output' && (
          <Output prompt={generatedPrompt} onReset={handleReset} />
        )}

        {activePage === 'docs' && (
          <Docs />
        )}

        {activePage === 'upgrade' && (
          <Upgrade
            onSaveKey={handleSaveApiKey}
            onBackToDocs={() => {
              setActivePage('docs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'privacy' && (
          <Privacy />
        )}

        {activePage === 'terms' && (
          <Terms />
        )}
      </main>

      <Footer setActivePage={setActivePage} />

      <style jsx="true">{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-content {
          flex: 1;
          margin-top: 100px; /* Offset for fixed navbar */
        }
      `}</style>
    </div>
  );
}

export default App;
