import React from 'react';

const Landing = ({ onStart }) => {
    return (
        <div className="landing fade-in">
            {/* Hero Section */}
            <section className="section hero">
                <div className="container">
                    <h1 className="text-hero slide-up stagger-1">
                        The Senior AI <br /> Product Architect.
                    </h1>
                    <p className="text-sub slide-up stagger-2">
                        Transform your vague ideas into realistic, structured prompt systems
                        for AI coding tools. High-fidelity guidance from a developer's perspective.
                    </p>
                    <div className="hero-cta slide-up stagger-3">
                        <button className="btn-primary" onClick={onStart}>
                            Build your prompt
                        </button>
                        <span className="btn-hint">Free tool • No signup required</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features">
                <div className="container">
                    <div className="section-header slide-up">
                        <span className="section-tag">Features</span>
                        <h2 className="section-title">Built for the <br /> modern engineer.</h2>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item slide-up stagger-1">
                            <h3>Senior Persona</h3>
                            <p>Prompty thinks like a Principal Engineer, focusing on architecture, logic, and realistic constraints instead of generic boilerplate.</p>
                        </div>
                        <div className="feature-item slide-up stagger-2">
                            <h3>Modular Prompts</h3>
                            <p>Break down complex applications into a sequence of executable prompts that minimize AI hallucinations and maximize code quality.</p>
                        </div>
                        <div className="feature-item slide-up stagger-3">
                            <h3>Constraint Aware</h3>
                            <p>Whether you're building a no-backend MVP or a microservices architecture, Prompty adjusts the output based on your specific skills and time limits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators Section */}
            <section className="section differentiators">
                <div className="container">
                    <div className="diff-content">
                        <div className="diff-text slide-up">
                            <span className="section-tag">Why Prompty?</span>
                            <h2 className="section-title">Different by design.</h2>
                            <p className="description">
                                Unlike generic prompt enhancers that return a single wall of text,
                                Prompty provides a <strong>Technical Roadmap</strong>. We prioritize
                                the "How" and "Why" of your build, ensuring you spend less time
                                refactoring and more time shipping.
                            </p>
                        </div>
                        <div className="diff-stats slide-up stagger-2">
                            <div className="stat-item">
                                <span className="stat-val">01</span>
                                <span className="stat-label">Architecture First</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-val">02</span>
                                <span className="stat-label">Zero Clutter</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-val">03</span>
                                <span className="stat-label">Deep Intent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-bottom">
                <div className="container text-center">
                    <h2 className="section-title slide-up">Start your next <br /> build today.</h2>
                    <button className="btn-primary slide-up stagger-1" onClick={onStart}>
                        Get Started
                    </button>
                </div>
            </section>

            <style jsx="true">{`
        .landing {
          display: flex;
          flex-direction: column;
        }
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
        }
        .hero-cta {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .btn-primary {
          background: var(--black);
          color: var(--white);
          padding: 1.25rem 3rem;
          font-family: var(--font-primary);
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }
        .btn-primary:hover {
          background: var(--orange);
        }
        .btn-hint {
          font-size: 0.85rem;
          color: var(--gray-medium);
        }

        .section-tag {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--orange);
          display: block;
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.1;
          margin-bottom: 3rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          margin-top: 4rem;
        }
        .feature-item h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .feature-item p {
          color: var(--gray-medium);
          line-height: 1.6;
        }

        .diff-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 8rem;
          align-items: center;
        }
        .diff-text .description {
          font-size: 1.25rem;
          color: var(--gray-medium);
          line-height: 1.6;
          max-width: 500px;
        }
        .diff-stats {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 2rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1.5rem;
        }
        .stat-val {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--orange);
        }
        .stat-label {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .cta-bottom {
          padding: var(--spacing-xl) 0;
          border-top: 1px solid #eee;
        }
        .text-center {
          text-align: center;
        }
        .cta-bottom .section-title {
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .diff-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .hero-cta .btn-primary {
            width: 100%;
            text-align: center;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Landing;
