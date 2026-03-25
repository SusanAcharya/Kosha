'use client';

import { useState, useEffect, useMemo } from 'react';
import { getSessions, deleteSession, incrementSession } from '@/lib/storage';

export default function TrackerPage() {
  const [sessions, setSessions] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSessions(getSessions());
  }, []);

  function handleDelete(id) {
    const updated = deleteSession(id);
    setSessions(updated);
  }

  function handleIncrement(id) {
    incrementSession(id);
    setSessions(getSessions());
  }

  const totalSessions = sessions.length;
  const streak = useMemo(() => {
    if (!sessions.length) return 0;
    // Simple streak: count consecutive days from today
    const dates = [...new Set(sessions.map(s => new Date(s.date).toDateString()))].sort((a, b) => new Date(b) - new Date(a));
    let count = 0;
    const today = new Date();
    for (let i = 0; i < dates.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      if (new Date(dates[i]).toDateString() === expected.toDateString()) {
        count++;
      } else break;
    }
    return count;
  }, [sessions]);

  const latestSankalpa = sessions.length > 0
    ? sessions[0].sankalpa || sessions[0].prompt?.slice(0, 100)
    : null;

  const latestSankalpaDay = sessions.length > 0 ? sessions.filter(s => s.sankalpa === sessions[0].sankalpa).length : 0;

  // Primary intentions from sessions
  const intentionTags = useMemo(() => {
    const tags = new Set();
    sessions.forEach(s => {
      if (s.prompt) {
        if (s.prompt.includes('clarity')) tags.add('Clarity');
        if (s.prompt.includes('sleep')) tags.add('Restoration');
        if (s.prompt.includes('focus')) tags.add('Focus');
        if (s.prompt.includes('healing')) tags.add('Healing');
        if (s.prompt.includes('creativity') || s.prompt.includes('creative')) tags.add('Creativity');
        if (s.prompt.includes('confidence') || s.prompt.includes('strength')) tags.add('Confidence');
        if (s.prompt.includes('presence')) tags.add('Divine Connection');
        if (s.prompt.includes('burnt') || s.prompt.includes('load')) tags.add('Cognitive Load');
      }
    });
    return [...tags].slice(0, 4);
  }, [sessions]);

  if (!mounted) {
    return (
      <div className="tracker-loading">
        <div className="pulse-loader"><span /><span /><span /></div>
      </div>
    );
  }

  return (
    <div className="tracker-page">
      <div className="container">
        {/* Header */}
        <section className="tracker-hero">
          <span className="tracker-label">CONSCIOUS PROGRESS</span>
          <h1 className="tracker-title">Practice Tracker</h1>
        </section>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Active Sankalpa */}
          <div className="sankalpa-card glass-card">
            <div className="sankalpa-header">
              <span className="sankalpa-tag">ACTIVE SANKALPA</span>
              <svg className="sankalpa-star" width="20" height="20" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p className="sankalpa-quote">
              {latestSankalpa
                ? `"${latestSankalpa}"`
                : '"Generate your first session to set a Sankalpa."'}
            </p>
            <div className="sankalpa-progress">
              <div className="sankalpa-bar">
                <div className="sankalpa-fill" style={{ width: `${Math.min(latestSankalpaDay / 40 * 100, 100)}%` }} />
              </div>
              <span className="sankalpa-day">Day {latestSankalpaDay} of 40</span>
            </div>
          </div>

          {/* Frequency Spectrum placeholder */}
          <div className="spectrum-card glass-card">
            <div className="spectrum-header">
              <div>
                <h3 className="spectrum-title">Frequency Spectrum</h3>
                <p className="spectrum-sub">Active focus hours per week</p>
              </div>
              <div className="spectrum-legend">
                <span className="legend-item bio-l">
                  <span className="legend-dot" /> BIO
                </span>
                <span className="legend-item vedic-l">
                  <span className="legend-dot" /> VEDIC
                </span>
              </div>
            </div>
            <div className="spectrum-chart">
              {/* SVG Chart */}
              <svg viewBox="0 0 600 200" className="chart-svg">
                {/* Grid */}
                {[0,1,2,3,4].map(i => (
                  <line key={i} x1="0" y1={i*50} x2="600" y2={i*50} stroke="var(--border)" strokeWidth="0.5"/>
                ))}
                {/* Bio line (steel) */}
                <polyline
                  fill="none"
                  stroke="var(--steel)"
                  strokeWidth="2"
                  points="0,160 86,140 172,120 258,80 344,90 430,60 516,70 600,40"
                />
                {/* Vedic line (gold, dashed) */}
                <polyline
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  points="0,140 86,130 172,100 258,110 344,70 430,80 516,60 600,50"
                />
              </svg>
              <div className="chart-labels">
                {['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stat-card glass-card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--steel)" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span className="stat-num">{totalSessions}</span>
            <span className="stat-label">TOTAL SESSIONS</span>
          </div>
          <div className="stat-card glass-card">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span className="stat-num">{streak}</span>
            <span className="stat-label">CURRENT STREAK</span>
          </div>

          {/* Primary Intentions */}
          <div className="intentions-card glass-card">
            <span className="intentions-tag">PRIMARY INTENTIONS</span>
            <div className="intentions-pills">
              {intentionTags.length > 0 ? intentionTags.map(t => (
                <span key={t} className="intention-pill">{t}</span>
              )) : (
                <span className="no-intentions">No sessions yet</span>
              )}
            </div>
          </div>
        </div>

        {/* Recent Journeys */}
        <div className="journeys-section">
          <div className="journeys-header">
            <h3 className="journeys-title">Recent Journeys</h3>
            {sessions.length > 0 && (
              <span className="journeys-download">Download Archive</span>
            )}
          </div>

          {sessions.length === 0 ? (
            <div className="empty-state glass-card">
              <h3>No sessions yet</h3>
              <p>Generate your first Yoga Nidra session to start tracking your consciousness journey.</p>
              <a href="/" className="btn btn-primary" id="go-generate-btn">
                Generate Your First Session
              </a>
            </div>
          ) : (
            <div className="journey-list">
              {sessions.slice(0, 10).map((session, idx) => (
                <div key={session.id} className="journey-row glass-card">
                  <div className="journey-left">
                    <div className="journey-icon">
                      {session.mode === 'vedic' ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--steel)" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="journey-name">
                        {session.sankalpa?.slice(0, 40) || 'Untitled Session'}
                      </h4>
                      <p className="journey-meta">
                        {session.mode === 'vedic' ? 'Vedic Tradition' : 'Bio-Adaptive Path'} • {session.duration || 20}m
                      </p>
                    </div>
                  </div>
                  <div className="journey-right">
                    <div className="journey-state">
                      <span className="state-label">STATE</span>
                      <span className={`state-val ${session.mode === 'vedic' ? 'vedic-state' : 'bio-state'}`}>
                        <span className="state-dot" />
                        {session.mode === 'vedic' ? 'Serenity' : 'Flow State'}
                      </span>
                    </div>
                    <div className="journey-date">
                      <span className="date-main">
                        {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="date-time">
                        {new Date(session.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tracker-page { padding: var(--space-2xl) 0 var(--space-4xl); }
        .tracker-loading { display: flex; align-items: center; justify-content: center; min-height: 60vh; }

        /* Hero */
        .tracker-hero { margin-bottom: var(--space-xl); }

        .tracker-label {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin-bottom: var(--space-xs);
          display: block;
        }

        .tracker-title {
          font-size: 2.5rem;
          font-weight: 800;
        }

        /* Dashboard Grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: auto auto;
          gap: var(--space-md);
          margin-bottom: var(--space-2xl);
        }

        /* Sankalpa card - row 1, col 1 */
        .sankalpa-card {
          padding: var(--space-xl);
          grid-row: 1;
          grid-column: 1;
        }

        .sankalpa-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-md);
        }

        .sankalpa-tag {
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--text-3);
          letter-spacing: 0.1em;
        }

        .sankalpa-quote {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          font-style: italic;
          color: var(--gold);
          line-height: 1.4;
          margin-bottom: var(--space-lg);
        }

        .sankalpa-progress {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .sankalpa-bar {
          width: 40px;
          height: 3px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }

        .sankalpa-fill {
          height: 100%;
          background: var(--gold);
          border-radius: 2px;
        }

        .sankalpa-day {
          font-size: 0.6875rem;
          color: var(--text-3);
        }

        /* Spectrum - row 1, col 2 (spans into row 2) */
        .spectrum-card {
          padding: var(--space-xl);
          grid-row: 1 / span 2;
          grid-column: 2;
        }

        .spectrum-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: var(--space-lg);
        }

        .spectrum-title {
          font-size: 1.0625rem;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .spectrum-sub {
          font-size: 0.75rem;
          color: var(--text-3);
        }

        .spectrum-legend {
          display: flex;
          gap: var(--space-md);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.625rem;
          font-weight: 600;
          color: var(--text-3);
          letter-spacing: 0.04em;
        }

        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .bio-l .legend-dot { background: var(--steel); }
        .vedic-l .legend-dot { background: var(--gold); }

        .spectrum-chart { position: relative; }

        .chart-svg {
          width: 100%;
          height: 160px;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          padding: var(--space-sm) 0 0;
        }

        .chart-labels span {
          font-size: 0.625rem;
          color: var(--text-3);
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* Stats - row 2 */
        .stat-card {
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-1);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--text-3);
          letter-spacing: 0.08em;
        }

        /* Intentions */
        .intentions-card {
          padding: var(--space-lg);
          grid-column: 1 / span 2;
        }

        .intentions-tag {
          display: block;
          font-size: 0.625rem;
          font-weight: 700;
          color: var(--text-3);
          letter-spacing: 0.1em;
          margin-bottom: var(--space-md);
        }

        .intentions-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .intention-pill {
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          font-size: 0.75rem;
          color: var(--text-2);
        }

        .no-intentions {
          font-size: 0.8125rem;
          color: var(--text-3);
        }

        /* Journeys */
        .journeys-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-lg);
        }

        .journeys-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .journeys-download {
          font-size: 0.8125rem;
          color: var(--steel);
          cursor: pointer;
          transition: color var(--transition-base);
        }



        /* Empty */
        .empty-state {
          text-align: center;
          padding: var(--space-4xl) var(--space-xl);
        }

        .empty-state h3 { font-size: 1.25rem; margin-bottom: var(--space-sm); }
        .empty-state p { color: var(--text-2); font-size: 0.9rem; margin-bottom: var(--space-xl); max-width: 400px; margin-left: auto; margin-right: auto; }

        /* Journey rows */
        .journey-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .journey-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-md) var(--space-lg);
        }

        .journey-left {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .journey-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--bg-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .journey-name {
          font-size: 0.9375rem;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .journey-meta {
          font-size: 0.75rem;
          color: var(--text-3);
        }

        .journey-right {
          display: flex;
          align-items: center;
          gap: var(--space-2xl);
        }

        .journey-state { text-align: left; }

        .state-label {
          display: block;
          font-size: 0.5625rem;
          font-weight: 700;
          color: var(--text-3);
          letter-spacing: 0.06em;
          margin-bottom: 2px;
        }

        .state-val {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8125rem;
          font-weight: 600;
        }

        .state-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .vedic-state { color: var(--steel); }
        .vedic-state .state-dot { background: var(--steel); }
        .bio-state { color: var(--gold); }
        .bio-state .state-dot { background: var(--gold); }

        .journey-date { text-align: right; }

        .date-main {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-1);
        }

        .date-time {
          font-size: 0.6875rem;
          color: var(--text-3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .spectrum-card {
            grid-row: auto;
            grid-column: auto;
          }

          .intentions-card {
            grid-column: auto;
          }

          .tracker-title { font-size: 2rem; }

          .journey-right { gap: var(--space-md); }

          .journey-row { flex-direction: column; align-items: flex-start; gap: var(--space-md); }

          .journey-right { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </div>
  );
}
