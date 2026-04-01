import React, { useState } from 'react';

const Output = ({ prompt, onReset }) => {
    const [copyStatus, setCopyStatus] = useState('Copy');

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt);
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2000);
    };

    return (
        <div className="output-container container slide-up">
            <div className="output-header">
                <h2 className="output-title">Your Generated Prompt System</h2>
                <div className="output-actions">
                    <button className="btn-copy" onClick={handleCopy}>{copyStatus}</button>
                    <button className="btn-reset" onClick={onReset}>Start Over</button>
                </div>
            </div>

            <div className="output-content">
                <pre className="prompt-text">{prompt}</pre>
            </div>

            <style jsx="true">{`
        .output-container {
          padding-top: var(--spacing-xl);
          min-height: 80vh;
        }
        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--spacing-lg);
          border-bottom: 1px solid #eee;
          padding-bottom: var(--spacing-sm);
        }
        .output-title {
          font-size: 2rem;
          font-weight: 700;
        }
        .output-actions {
          display: flex;
          gap: 1.5rem;
        }
        .output-content {
          background: #fafafa;
          padding: var(--spacing-md);
          border-radius: 4px;
          overflow-x: auto;
        }
        .prompt-text {
          font-family: 'Courier New', Courier, monospace;
          font-size: 1rem;
          line-height: 1.6;
          white-space: pre-wrap;
          color: var(--black);
        }
        .btn-copy {
          background: var(--black);
          color: var(--white);
          padding: 0.75rem 2rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .btn-reset {
          color: var(--gray-medium);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .output-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .output-actions {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
        </div>
    );
};

export default Output;
