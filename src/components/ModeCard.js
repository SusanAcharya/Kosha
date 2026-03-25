'use client';

export default function ModeCard({ mode, selected, onSelect, recommended }) {
  const isVedic = mode === 'vedic';

  const config = isVedic
    ? {
        badge: 'TRADITIONAL YOGIC',
        title: 'Vedic Sage',
        description:
          'Guided by Vedantic cosmology and classical Yoga Nidra. Uses Sanskrit mantras, prana-body mapping, and chakra visualization to dissolve the ego-mind into pure awareness.',
        features: ['Pratyahara (sense withdrawal)', 'Sankalpa as sacred vow', 'Koshas — 5 sheaths of self'],
        accent: '--vedic',
        glow: '--vedic-glow',
        bg: '--vedic-bg',
      }
    : {
        badge: 'HARARI · DOTY · DIAMANDIS',
        title: 'Bio-Hacker',
        description:
          'Framed through Harari\'s "biochemical algorithms," Doty\'s compassion neuroscience, and Diamandis\'s exponential mindset. Reprograms your neural pathways using evidence-based protocols.',
        features: ['Vagal tone & HRV optimization', 'RAS (attention gate) rewiring', 'Neuroplastic future-casting'],
        accent: '--bio',
        glow: '--bio-glow',
        bg: '--bio-bg',
      };

  return (
    <button
      className={`mode-card glass-card ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(mode)}
      type="button"
      id={`mode-card-${mode}`}
    >
      {/* Badge */}
      <span className="card-badge">{config.badge}</span>

      {/* Icon */}
      <div className="card-icon-wrap">
        {isVedic ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        )}
      </div>

      <h3 className="card-title">{config.title}</h3>
      <p className="card-desc">{config.description}</p>
      <ul className="card-features">
        {config.features.map((f) => (
          <li key={f}>
            <span className="dot" />
            {f}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .mode-card {
          text-align: left;
          padding: var(--space-xl) var(--space-lg);
          cursor: pointer;
          position: relative;
          width: 100%;
        }

        .mode-card.selected {
          border-color: var(${config.accent});
          background: var(${config.bg});
          box-shadow: 0 0 48px var(${config.glow});
        }

        .card-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          background: var(${config.accent === '--vedic' ? '--gold-glow' : '--steel-glow'});
          color: var(${config.accent === '--vedic' ? '--gold' : '--steel'});
          font-size: 0.5625rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-md);
        }

        .card-icon-wrap {
          color: var(${config.accent});
          margin-bottom: var(--space-md);
          opacity: 0.7;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-1);
          margin-bottom: var(--space-sm);
        }

        .card-desc {
          font-size: 0.8125rem;
          color: var(--text-2);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-features li {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.75rem;
          color: var(--text-2);
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(${config.accent});
          flex-shrink: 0;
        }
      `}</style>
    </button>
  );
}
