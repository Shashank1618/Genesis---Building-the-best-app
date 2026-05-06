import React from 'react';

const Footer = ({ setActivePage }) => {
  const handleLegalClick = (page) => (e) => {
    e.preventDefault();
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section">
      <div className="container footer-content">
        <div className="footer-info">
          <span className="footer-logo">Genesis</span>
          <p>Premium SaaS for Senior AI Architects.</p>
        </div>
        <div className="footer-legal">
          <span>&copy; 2026 Genesis Inc. All rights reserved.</span>
          <div className="legal-links">
            <a href="#" onClick={handleLegalClick('privacy')}>Privacy</a>
            <a href="#" onClick={handleLegalClick('terms')}>Terms</a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          border-top: 1px solid #eee;
          padding: var(--spacing-lg) 0;
          margin-top: var(--spacing-xl);
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-logo {
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: -0.05em;
        }
        .footer-legal {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--gray-medium);
        }
        .legal-links {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .footer-legal {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
