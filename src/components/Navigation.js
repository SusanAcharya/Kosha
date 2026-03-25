'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav-bar">
      <div className="nav-inner container">
        <Link href="/" className="nav-logo" id="nav-logo">
          <span className="nav-logo-text">Kosha</span>
        </Link>

        <div className="nav-links">
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
            href="/tracker"
            className={`nav-link ${pathname === '/tracker' ? 'active' : ''}`}
          >
            Tracker
          </Link>
        </div>

        <div className="nav-avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
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



        @media (max-width: 768px) {
          .nav-inner { height: 48px; }
          .nav-link { font-size: 0.8125rem; }
          .nav-links { gap: var(--space-md); }
        }
      `}</style>
    </nav>
  );
}
