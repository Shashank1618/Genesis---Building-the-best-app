import React, { useState } from 'react';

const Navbar = ({ activePage, setActivePage, usageCount, userApiKey }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="nav-left">
          <a href="#" className="logo" onClick={() => setActivePage('landing')}>Genesis</a>
          <div className="tier-badge">
            {userApiKey ? (
              <span className="badge-unlimited">Unlimited Tier</span>
            ) : (
              <span className="badge-free">Free Tier ({usageCount}/3)</span>
            )}
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button
            className={`nav-link ${activePage === 'landing' ? 'active' : ''}`}
            onClick={() => { setActivePage('landing'); setIsMenuOpen(false); }}
          >
            Builder
          </button>
          <button
            className={`nav-link ${activePage === 'docs' ? 'active' : ''}`}
            onClick={() => { setActivePage('docs'); setIsMenuOpen(false); }}
          >
            Docs
          </button>
          <button
            className={`nav-link ${activePage === 'upgrade' ? 'active' : ''}`}
            onClick={() => { setActivePage('upgrade'); setIsMenuOpen(false); }}
          >
            API Key
          </button>
          <button className="nav-btn-mobile" onClick={() => { setActivePage('builder'); setIsMenuOpen(false); }}>
            Get Started
          </button>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style jsx="true">{`
        .navbar {
          padding: 2rem 0;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.05em;
        }
        .tier-badge {
          display: flex;
          align-items: center;
        }
        .badge-free, .badge-unlimited {
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .badge-free {
          background: #FFF0E6;
          color: #FF6B00;
          border: 1px solid #FFD6B3;
        }
        .badge-unlimited {
          background: #FFF0E6;
          color: #FF6B00;
          border: 1px solid #FFD6B3;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--gray-medium);
          transition: var(--transition-smooth);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--black);
        }
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
        }
        .bar {
          width: 24px;
          height: 2px;
          background: var(--black);
          transition: var(--transition-smooth);
        }
        .bar.open:nth-child(1) { transform: translateY(4px) rotate(45deg); }
        .bar.open:nth-child(2) { transform: translateY(-4px) rotate(-45deg); }
        
        .nav-btn-mobile {
          display: none;
          padding: 1rem;
          background: var(--black);
          color: var(--white);
          font-weight: 600;
          width: 100%;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--white);
            flex-direction: column;
            padding: 2rem;
            gap: 2rem;
            border-bottom: 1px solid #eee;
          }
          .nav-links.active {
            display: flex;
          }
          .menu-toggle {
            display: flex;
          }
          .nav-btn-mobile {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
