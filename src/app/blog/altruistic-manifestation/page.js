'use client';

import Link from 'next/link';

export default function BlogAltruisticPage() {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <Link href="/" className="blog-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Home
        </Link>

        <article className="blog-article">
          <div className="blog-meta">
            <span className="blog-tag">Vision & Neuroscience</span>
            <span className="blog-date">Mar 29, 2026</span>
            <span className="blog-read">6 min read</span>
          </div>

          <h1 className="blog-title">Altruistic Manifestation: Accelerating Your Vision with Neuroscience</h1>

          <div className="blog-hero-wrap">
            <img src="/blog/altruistic-manifestation.png" alt="Altruistic Manifestation" className="blog-hero-img" />
          </div>

          <div className="blog-body">
            <p className="blog-intro">
              In the framework of both neuroscience and yogic philosophy, shifting your manifestation from a "personal want" to an "altruistic mission" acts like switching from a single-engine plane to a jet. It accelerates the process by removing the internal friction that usually stalls our progress.
            </p>
            <p>
              Here is why an altruistic focus (like sharing your home or building your venture for others) actually makes the manifestation happen faster:
            </p>

            <h2>1. The "Safety Signal" to the Subconscious</h2>
            <p>
              As Dr. James Doty emphasizes, the brain is biologically wired to care for others. When your goal is purely for personal comfort, the amygdala often views the pursuit through a lens of scarcity ("I don't have this yet, I need to get it"). This creates a subtle state of stress.
            </p>
            <ul>
              <li><strong>Manifestation Impact:</strong> Stress shuts down the prefrontal cortex—the part of your brain responsible for the creative problem-solving and "pattern recognition" needed to find opportunities.</li>
              <li><strong>The Altruistic Shift:</strong> When you focus on sharing, the brain releases oxytocin. This signals to your nervous system that you are "safe" and in a state of "abundance." In this relaxed state, your brain is far more effective at noticing the resources, people, and "synchronicities" required to manifest the goal.</li>
            </ul>

            <h2>2. Overcoming the "Worthiness" Block</h2>
            <p>
              Many manifestations fail because of a "hidden" Samskara (old drama) that says: "I don't deserve this much luxury/comfort." This subconscious guilt acts as a brake on your efforts.
            </p>
            <ul>
              <li><strong>The Ego Trap:</strong> If the goal is just for "me," the ego feels the weight of judgment.</li>
              <li><strong>The Purpose Bypass:</strong> If the goal is for the benefit of others, your subconscious "worthiness" filters are bypassed. You aren't asking for a house for your vanity; you are asking for a tool to serve the world. The mind doesn't argue with a tool for service. It allows the manifestation to flow because the "egoic resistance" is gone.</li>
            </ul>

            <h2>3. Sustained Dopamine vs. Reward Crash</h2>
            <p>
              Andrew Huberman often discusses the Dopamine Reward Prediction Error. If you manifest a house for comfort, you get a dopamine spike when you get it, followed by a "crash" and the "hedonic treadmill" (wanting the next thing).
            </p>
            <ul>
              <li><strong>Manifestation Energy:</strong> Manifesting requires persistent action over time.</li>
              <li><strong>The Altruistic Engine:</strong> Pursuing a mission (like an Experience Center) provides a constant, baseline drip of dopamine because the process of building it feels meaningful. This prevents "burnout" and keeps your "manifestation energy" high until the goal is reached.</li>
            </ul>

            <h2>4. The Yogic "Law of Dharma"</h2>
            <p>
              In the traditions you'll encounter in Nepal and Bhutan, they speak of Dharma (right action).
            </p>
            <ul>
              <li><strong>Alignment:</strong> When your Sankalpa aligns with the welfare of others (<em>Loka Samasta Sukhino Bhavantu</em>), you are essentially aligning your individual will with the "universal will."</li>
              <li><strong>Attraction:</strong> Philosophically, an altruistic intention is "magnetic." People are naturally drawn to support a vision that includes them. Whether it’s investors for your venture or collaborators for your Neuro-Acoustic Garden, an altruistic manifestation recruits an "army" of external support that a selfish goal never could.</li>
            </ul>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Goal Type</th>
                    <th>Internal State</th>
                    <th>External Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Personal Comfort</strong></td>
                    <td>Contraction (Ego-based)</td>
                    <td>Relies on individual willpower alone.</td>
                  </tr>
                  <tr>
                    <td><strong>Altruistic Sharing</strong></td>
                    <td>Expansion (Purpose-based)</td>
                    <td>Attracts collaborators, resources, and "luck."</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="blog-callout">
              <strong>Applying this to your Venture</strong><br/><br/>
              If you manifest SageFlow as a way for you to succeed in blockchain, you are limited by your own energy. If you manifest it as a way to democratize longevity and wellness for thousands of people, the "weight" of that mission will pull you through the difficult days of venture building.
            </div>

            <div className="blog-cta-card">
              <h3>Align Your Intentions</h3>
              <p>Experience how setting an altruistic Sankalpa transforms your physiological and mental baseline through Kosha.</p>
              <Link href="/session" className="btn-cta">
                Start a Session
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </div>

      <style jsx>{`
        .blog-page { padding: var(--space-xl) 0 var(--space-4xl); min-height: 100vh; }
        .blog-container { max-width: 720px; margin: 0 auto; padding: 0 var(--space-lg); }

        .blog-back { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8125rem; font-weight: 600; color: var(--text-3); margin-bottom: var(--space-xl); transition: color 200ms; }
        .blog-back:hover { color: var(--text-1); }

        .blog-meta { display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg); flex-wrap: wrap; }
        .blog-tag { font-size: 0.625rem; font-weight: 700; letter-spacing: 0.06em; color: var(--gold); padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid rgba(184,132,92,0.2); background: rgba(184,132,92,0.05); }
        .blog-date, .blog-read { font-size: 0.75rem; color: var(--text-3); }

        .blog-title { font-size: 2.25rem; font-weight: 800; line-height: 1.2; color: var(--text-1); margin-bottom: var(--space-xl); }

        .blog-hero-wrap { border-radius: var(--radius-xl); overflow: hidden; margin-bottom: var(--space-2xl); border: 1px solid var(--border); }
        .blog-hero-img { width: 100%; height: auto; display: block; }

        .blog-body h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-1); margin-top: var(--space-2xl); margin-bottom: var(--space-md); }
        .blog-body p { font-size: 1rem; color: var(--text-2); line-height: 1.85; margin-bottom: var(--space-md); }
        .blog-intro { font-size: 1.125rem; line-height: 1.8; color: var(--text-1); }
        .blog-body ul { margin: 0 0 var(--space-lg) var(--space-lg); }
        .blog-body li { font-size: 0.9375rem; color: var(--text-2); line-height: 1.75; margin-bottom: var(--space-sm); }
        .blog-body strong { color: var(--text-1); }
        .blog-body em { font-style: italic; }

        .blog-callout {
          padding: var(--space-lg) var(--space-xl);
          background: rgba(107,143,113,0.04);
          border-left: 3px solid var(--steel);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-size: 1.0625rem;
          color: var(--text-1);
          line-height: 1.7;
          margin: var(--space-xl) 0;
        }

        .blog-table-wrap { overflow-x: auto; margin: var(--space-xl) 0; }
        .blog-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }
        .blog-table th {
          text-align: left;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-3);
          padding: var(--space-sm) var(--space-md);
          border-bottom: 2px solid var(--border);
        }
        .blog-table td {
          padding: var(--space-sm) var(--space-md);
          border-bottom: 1px solid var(--border);
          color: var(--text-2);
          line-height: 1.5;
        }
        .blog-table tr:last-child td { border-bottom: none; }

        .blog-cta-card {
          margin-top: var(--space-2xl);
          padding: var(--space-2xl);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          text-align: center;
        }
        .blog-cta-card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: var(--space-sm); color: var(--text-1); }
        .blog-cta-card p { font-size: 0.9375rem; color: var(--text-2); margin-bottom: var(--space-lg); line-height: 1.6; }

        @media (max-width: 768px) {
          .blog-title { font-size: 1.75rem; }
          .blog-body h2 { font-size: 1.25rem; }
          .blog-callout { font-size: 0.9375rem; }
        }
      `}</style>
    </div>
  );
}
