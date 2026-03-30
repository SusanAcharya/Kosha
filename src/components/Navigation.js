'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="nav-bar">
      <div className="nav-inner container">
        <Link href="https://omorenda.space" target="_blank" rel="noopener noreferrer" className="nav-logo" id="nav-logo">
          <img src="/icons/logo.png" alt="Kosha" className="brand-img" />
        </Link>

        <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/session"
            className={`nav-link ${pathname === '/session' ? 'active' : ''}`}
          >
            Session
          </Link>
          <Link
            href="/philosophies"
            className={`nav-link ${pathname === '/philosophies' ? 'active' : ''}`}
          >
            Philosophies
          </Link>
          <Link
            href="/tracker"
            className={`nav-link ${pathname === '/tracker' ? 'active' : ''}`}
          >
            Tracker
          </Link>
          <Link
            href="/#section-blog"
            className={`nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`}
          >
            Blog
          </Link>
        </div>

        <div className="nav-controls">
          <div className="nav-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </div>
          <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(246, 243, 237, 0.88);
          backdrop-filter: blur(24px) saturate(1.2);
          -webkit-backdrop-filter: blur(24px) saturate(1.2);
          border-bottom: 1px solid var(--border);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          transition: opacity var(--transition-base);
        }

        .brand-img {
          height: 120px;
          width: 200px;
          object-fit: contain;
          margin: -10px -5px -10px -20px;
        }



        .nav-logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          color: var(--gold);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-2);
          transition: color var(--transition-base);
          padding: 4px 0;
          position: relative;
        }



        .nav-link.active {
          color: var(--text-1);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: var(--text-1);
          border-radius: 1px;
        }

        .nav-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-2);
          cursor: pointer;
          transition: all var(--transition-base);
        }



        .nav-controls {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          color: var(--text-1);
          cursor: pointer;
          padding: 8px;
          margin-right: -8px;
          z-index: 101;
        }

        @media (max-width: 768px) {
          .nav-inner { height: 48px; position: relative; }
          .nav-hamburger { display: flex; align-items: center; justify-content: center; }

          .brand-img {
            height: 90px;
            width: 150px;
            margin: -5px -5px -5px -15px;
          }
          
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: rgba(246, 243, 237, 0.98);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-left: 1px solid var(--border);
            box-shadow: -10px 0 40px rgba(0,0,0,0.05);
            flex-direction: column;
            align-items: flex-start;
            padding: 80px var(--space-2xl) var(--space-xl);
            gap: var(--space-lg);
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            transform: none;
            left: auto;
          }

          .nav-links.nav-links-open {
            right: 0;
          }

          .nav-link { 
            font-size: 1.25rem; 
            font-weight: 600; 
            width: 100%; 
            padding: 12px 0; 
            border-bottom: 1px solid rgba(0,0,0,0.04); 
          }
          
          .nav-link.active::after { display: none; }
          .nav-avatar { display: none; }
        }
      `}</style>
    </nav>
  );
}
