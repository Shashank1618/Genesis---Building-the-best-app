import React, { useEffect, useState } from 'react';

const RefiningLoader = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Analyzing architecture...');

    const statuses = [
        'Analyzing architecture...',
        'Validating constraints...',
        'Refining tech stack...',
        'Optimizing layout patterns...',
        'Designing design system...',
        'Crafting master prompts...',
        'Finalizing senior architect logic...'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 600);
                    return 100;
                }
                return prev + 1;
            });
        }, 40);

        const statusInterval = setInterval(() => {
            setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(statusInterval);
        };
    }, [onFinish]);

    return (
        <div className="loader-container container fade-in">
            <div className="loader-content">
                <h2 className="loading-title">Refining with Gemini AI</h2>
                <p className="loading-status">{status}</p>
                <div className="loading-bar-wrapper">
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <span className="loading-percent">{progress}%</span>
            </div>

            <style jsx="true">{`
        .loader-container {
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .loader-content {
          max-width: 500px;
          width: 100%;
        }
        .loading-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .loading-status {
          font-size: 1.1rem;
          color: var(--gray-medium);
          margin-bottom: 3rem;
          height: 1.5rem;
        }
        .loading-bar-wrapper {
          height: 2px;
          background: #f0f0f0;
          width: 100%;
          margin-bottom: 1rem;
        }
        .loading-bar {
          height: 100%;
          background: var(--black);
          transition: width 0.1s linear;
        }
        .loading-percent {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--black);
        }
      `}</style>
        </div>
    );
};

export default RefiningLoader;
