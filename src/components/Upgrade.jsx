import React, { useState } from 'react';

const Upgrade = ({ onSaveKey, onBackToDocs }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onSaveKey(apiKey.trim());
    } else {
      alert('Please enter a valid API key.');
    }
  };

  return (
    <div className="upgrade-container container slide-up">
      <div className="upgrade-card">
        <h1 className="upgrade-title">3/3 Free Prompts Used</h1>
        <p className="upgrade-description">
          You've used your 3 free professional prompt generations. To continue using Genesis for <strong>unlimited</strong> generations for free, you just need to provide your own Google AI Studio API key.
        </p>

        <div className="info-box">
          <h3>How to get your free API key?</h3>
          <p>It takes less than 30 seconds and it's completely free.</p>
          <button className="btn-secondary" onClick={onBackToDocs}>
            View Detailed Instructions
          </button>
        </div>

        <form onSubmit={handleSubmit} className="api-key-form">
          <label htmlFor="apiKey">Enter your Gemini API Key</label>
          <input
            id="apiKey"
            type="password"
            placeholder="paste your key here (e.g. AIzaSy...)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="api-input"
          />
          <button type="submit" className="btn-primary">
            Save Key & Get Unlimited Access
          </button>
        </form>

        <p className="security-note">
          Note: Your API key is stored locally in your browser and is never sent to our servers.
        </p>
      </div>

      <style jsx="true">{`
        .upgrade-container {
          max-width: 600px;
          margin: 0 auto;
          padding: var(--spacing-lg) var(--spacing-md);
          text-align: center;
        }
        .upgrade-card {
          background: var(--white);
          padding: var(--spacing-xl);
          border: 1px solid #eee;
          border-radius: 8px;
        }
        .upgrade-title {
          font-size: clamp(2rem, 8vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          margin-bottom: var(--spacing-md);
          line-height: 1.1;
        }
        .upgrade-description {
          font-size: 1.15rem;
          color: var(--gray-medium);
          line-height: 1.5;
          margin-bottom: var(--spacing-xl);
        }
        .info-box {
          background: #fafafa;
          padding: 1.5rem;
          border-radius: 4px;
          margin-bottom: var(--spacing-xl);
          border-left: 4px solid var(--black);
          text-align: left;
        }
        .info-box h3 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .info-box p {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: var(--gray-medium);
        }
        .api-key-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
          margin-bottom: var(--spacing-lg);
        }
        .api-key-form label {
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .api-input {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }
        .api-input:focus {
          border-color: var(--black);
        }
        .btn-primary {
          background: var(--black);
          color: var(--white);
          padding: 1rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          transition: background 0.2s;
          font-size: 1rem;
        }
        .btn-primary:hover {
          background: #333;
        }
        .btn-secondary {
          background: transparent;
          color: var(--black);
          text-decoration: underline;
          font-weight: 600;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .security-note {
          font-size: 0.8rem;
          color: var(--gray-medium);
          font-style: italic;
          line-height: 1.4;
        }
        @media (max-width: 480px) {
          .upgrade-card {
            padding: var(--spacing-md);
          }
          .upgrade-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Upgrade;
