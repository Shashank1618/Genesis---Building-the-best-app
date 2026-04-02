import React from 'react';

const Docs = () => {
  return (
    <div className="docs container slide-up">
      <h1 className="docs-title">Documentation</h1>
      <p className="docs-lead">Prompty is a high-fidelity system designed for senior developers and product architects.
        It transforms your core concepts into realistic, structured prompt systems for AI coding tools.</p>

      <section className="docs-section">
        <h2>How it Works</h2>
        <p>Our multi-step builder collects critical information about your application architecture,
          tech stack, and constraints. Instead of generating a single large prompt, Prompty creates a
          modular sequence of instructions that AI tools can process more effectively.</p>
      </section>

      <section className="docs-section">
        <h2>Our Principles</h2>
        <ul className="docs-list">
          <li><strong>Typography-First:</strong> We believe information architecture starts with clear hierarchy.</li>
          <li><strong>Zero Clutter:</strong> Minimal interfaces reduce cognitive load and focus on what matters.</li>
          <li><strong>Developer-Centric:</strong> Every output is tailored to real-world engineering constraints.</li>
        </ul>
      </section>

      <section className="docs-section highlight">
        <h2 id="get-api-key">Get Unlimited Access (Free)</h2>
        <p>Prompty offers 3 professional prompt generations for free. To unlock <strong>unlimited</strong> usage, you can provide your own Gemini API key from Google AI Studio. It's 100% free!</p>

        <div className="steps-box">
          <div className="step">
            <span className="step-num">1</span>
            <p>Visit <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio (API Keys)</a>.</p>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <p>Click on <strong>"Create API key"</strong>.</p>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <p>Copy your new key and paste it into the "API Key" setting in Prompty.</p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2>Limitations</h2>
        <p>Prompty is optimized for initial scaffolding and product architecture. It does not replace
          deep engineering logic but provides the perfect starting point to minimize hallucinations
          in AI coding models.</p>
      </section>

      <section className="docs-section">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>Is it really free?</h3>
          <p>Yes. Prompty is a free tool with no sign-ups or hidden costs.</p>
        </div>
        <div className="faq-item">
          <h3>Which AI tools are supported?</h3>
          <p>The output is optimized for senior-level AI tools like Cursor, Bolt, and Lovable.</p>
        </div>
      </section>

      <style jsx="true">{`
        .docs {
          padding-top: var(--spacing-xl);
          max-width: 800px;
        }
        .docs-title {
          font-size: 3.5rem;
          margin-bottom: var(--spacing-md);
        }
        .docs-lead {
          font-size: 1.5rem;
          color: var(--gray-medium);
          margin-bottom: var(--spacing-xl);
          line-height: 1.4;
        }
        .docs-section {
          margin-bottom: var(--spacing-xl);
        }
        .docs-section h2 {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
        }
        .docs-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--black);
        }
        .docs-list {
          margin-top: var(--spacing-sm);
        }
        .docs-list li {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .faq-item {
          margin-top: 2rem;
        }
        .faq-item h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

          .docs-lead {
            font-size: 1.2rem;
          }
        }
        
        .highlight {
          background: #fbfbfb;
          border: 1px solid #eee;
          padding: 2rem;
          border-radius: 8px;
        }
        .steps-box {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .step-num {
          background: var(--black);
          color: var(--white);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .step p {
          margin: 0;
          font-size: 1rem;
        }
        .step a {
          color: var(--black);
          text-decoration: underline;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Docs;
