import React from 'react';

const Privacy = () => {
    return (
        <div className="legal container slide-up">
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-date">Last updated: April 2026</p>

            <section className="legal-section">
                <h2>Data Collection</h2>
                <p>Genesis is designed with a privacy-first approach. We do not store your personal data on our servers. All inputs provided in the builder are processed in real-time and are not persisted in our database.</p>
            </section>

            <section className="legal-section">
                <h2>AI Processing</h2>
                <p>To provide high-fidelity prompt refinement, your inputs are sent to the Google Gemini API. This data is handled according to Google's Generative AI Data Privacy policies. We do not use your data to train our own models.</p>
            </section>

            <section className="legal-section">
                <h2>Local Storage</h2>
                <p>We may use local browser storage to save your progress during the builder session. This data stays on your device and is not accessible by us.</p>
            </section>

            <style jsx="true">{`
        .legal {
          padding-top: var(--spacing-xl);
          max-width: 800px;
          padding-bottom: var(--spacing-xl);
        }
        .legal-title {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
        }
        .legal-date {
          color: var(--gray-medium);
          margin-bottom: var(--spacing-xl);
        }
        .legal-section {
          margin-bottom: var(--spacing-lg);
        }
        .legal-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .legal-section p {
          line-height: 1.6;
          color: var(--gray-medium);
        }
      `}</style>
        </div>
    );
};

export default Privacy;
