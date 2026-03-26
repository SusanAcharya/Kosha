'use client';

import Link from 'next/link';

export default function BlogAttentionPage() {
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
            <span className="blog-tag">Neuroscience</span>
            <span className="blog-date">Mar 26, 2025</span>
            <span className="blog-read">8 min read</span>
          </div>

          <h1 className="blog-title">Your Attention is Your Currency: How to Spend It on What Matters</h1>

          <div className="blog-hero-wrap">
            <img src="/blog/attention-currency.png" alt="Meditation with neural networks — the narrator fading, sensory awareness glowing" className="blog-hero-img" />
          </div>

          <div className="blog-body">
            <p className="blog-intro">
              In our modern, hyper-connected world, we are constantly being told that time is our most valuable asset. But there is something even more fundamental than time: <strong>Attention</strong>. Time is the container, but attention is the currency. Where you spend it determines the quality of your life.
            </p>

            <p>
              As the saying goes, <em>"Attention is your currency to the world—be wise how you use it."</em> At our core, we believe in giving you the tools to spend that currency on the things that truly matter to you.
            </p>

            <p>
              But how do we reclaim our attention when our minds are constantly flooded with "mental noise"? The answer lies in a fascinating neurological "see-saw" inside your brain.
            </p>

            <h2>The Brain's Internal See-Saw</h2>

            <p>
              To find quiet, we have to understand the relationship between two specific networks: the <strong>Default Mode Network (DMN)</strong> and the <strong>Sensory-Somatic Network</strong>.
            </p>

            <div className="blog-callout">
              Put simply: Your brain finds it nearly impossible to <strong>intensely feel</strong> and <strong>intensely think</strong> at the exact same time.
            </div>

            <h3>1. The "Narrator" (The DMN)</h3>

            <p>
              When your mind is racing—worrying about a meeting, replaying an old argument, or judging yourself—your Default Mode Network is in the driver's seat.
            </p>

            <ul>
              <li><strong>The Function:</strong> It creates the "I" story (e.g., "I hope they like me").</li>
              <li><strong>The Problem:</strong> The DMN is "noisy" because it is constantly simulating the past or future to ensure survival. It is rarely in the now.</li>
            </ul>

            <h3>2. The "Feeler" (The Sensory Cortex)</h3>

            <p>
              When you shift your focus to the physical—like the feeling of your breath or the sensation in your right thumb—you activate the Sensory Cortex.
            </p>

            <ul>
              <li><strong>The Function:</strong> It processes raw data: touch, temperature, and position.</li>
              <li><strong>The Magic:</strong> The sensory cortex lives strictly in the present. Your thumb cannot feel an "itch from next Tuesday." It can only feel what is happening <em>now</em>.</li>
            </ul>

            <h2>How the "Quieting" Happens</h2>

            <p>
              We don't quiet the mind by "fighting" thoughts; we quiet it through <strong>Neural Inhibition</strong>. When you focus intensely on sensory input, you are manually directing your brain's "spotlight" (the Thalamus) away from the Narrator and toward the Feeler.
            </p>

            <ul>
              <li><strong>Starving the Narrator:</strong> By processing the intricate sensations of the body, the brain withdraws metabolic energy from the DMN.</li>
              <li><strong>Breaking the Loop:</strong> Mental noise requires a loop where a thought triggers a feeling, which triggers another thought. Focusing on raw sensation breaks that circuit. The story simply runs out of fuel.</li>
            </ul>

            <h2>The Shift: From Story to Presence</h2>

            <p>
              By moving from the "Narrator" to the "Feeler," you transition from viewing yourself as a "story" in time to being a "witness" of the present moment.
            </p>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Mental Noise (DMN)</th>
                    <th>Quiet Awareness (Sensory Cortex)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Time Orientation</td>
                    <td>Past / Future</td>
                    <td>Right Now</td>
                  </tr>
                  <tr>
                    <td>Brain Activity</td>
                    <td>Abstract Thought / Judgment</td>
                    <td>Raw Sensation / Vibration</td>
                  </tr>
                  <tr>
                    <td>Identity</td>
                    <td>"I am [Label]"</td>
                    <td>"I am experiencing [Sensation]"</td>
                  </tr>
                  <tr>
                    <td>Nervous System</td>
                    <td>Often High Stress (Sympathetic)</td>
                    <td>Deep Calm (Parasympathetic)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Reclaim Your Currency</h2>

            <p>
              The most effective way to quiet the mind—whether through Yoga Nidra, mindfulness, or deep focus—is to give the brain something more interesting and immediate to do: <strong>feeling the body</strong>.
            </p>

            <p>
              When you stop fighting the noise and start investing your attention in the present sensation, the "narrator" finally falls asleep, and you regain control over your most precious resource.
            </p>

            <div className="blog-cta-card">
              <h3>Ready to experience this?</h3>
              <p>Try a Kosha session — our guided Yoga Nidra uses this exact mechanism to shift your brain from noise to stillness.</p>
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

        .blog-article { }

        .blog-meta { display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg); flex-wrap: wrap; }
        .blog-tag { font-size: 0.625rem; font-weight: 700; letter-spacing: 0.06em; color: var(--steel); padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid rgba(107,143,113,0.2); background: rgba(107,143,113,0.05); }
        .blog-date, .blog-read { font-size: 0.75rem; color: var(--text-3); }

        .blog-title { font-size: 2.25rem; font-weight: 800; line-height: 1.2; color: var(--text-1); margin-bottom: var(--space-xl); }

        .blog-hero-wrap { border-radius: var(--radius-xl); overflow: hidden; margin-bottom: var(--space-2xl); border: 1px solid var(--border); }
        .blog-hero-img { width: 100%; height: auto; display: block; }

        .blog-body { }
        .blog-body h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-1); margin-top: var(--space-2xl); margin-bottom: var(--space-md); }
        .blog-body h3 { font-size: 1.125rem; font-weight: 700; color: var(--text-1); margin-top: var(--space-xl); margin-bottom: var(--space-sm); }
        .blog-body p { font-size: 1rem; color: var(--text-2); line-height: 1.85; margin-bottom: var(--space-md); }
        .blog-intro { font-size: 1.125rem; line-height: 1.8; color: var(--text-1); }
        .blog-body ul { margin: 0 0 var(--space-lg) var(--space-lg); }
        .blog-body li { font-size: 0.9375rem; color: var(--text-2); line-height: 1.75; margin-bottom: var(--space-sm); }
        .blog-body strong { color: var(--text-1); }
        .blog-body em { font-style: italic; }

        .blog-callout {
          padding: var(--space-lg) var(--space-xl);
          background: rgba(184,132,92,0.04);
          border-left: 3px solid var(--gold);
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
