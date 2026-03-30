'use client';

import Link from 'next/link';

export default function BlogRewiringPage() {
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
            <span className="blog-tag">Neuroscience & Philosophy</span>
            <span className="blog-date">Mar 28, 2026</span>
            <span className="blog-read">10 min read</span>
          </div>

          <h1 className="blog-title">Rewiring Habits and Trauma through Neuroscience and Ancient Wisdom</h1>

          <div className="blog-hero-wrap">
            <img src="/blog/rewiring-habits-trauma.png" alt="Rewiring Neural Pathways" className="blog-hero-img" />
          </div>

          <div className="blog-body">
            <p className="blog-intro">
              To break free from old habits and trauma, we can look at the intersection of modern neuroscience, historical patterns, and ancient wisdom. Each perspective provides a different "layer" of the process, moving from the biological wiring of the brain to the spiritual liberation of the mind.
            </p>

            <h2>1. The Neuroscience of Habit (Andrew Huberman)</h2>
            <p>
              Andrew Huberman focuses on the biological mechanics of change. He suggests that habits and trauma responses are essentially "hard-wired" neural circuits that need to be disrupted through specific physiological triggers.
            </p>
            <ul>
              <li><strong>Limbic Friction:</strong> Recognize the effort required to overcome an old habit. To bypass this, Huberman suggests using Task Bracketing—utilizing the high-dopamine periods of your morning (0–8 hours after waking) to perform the hardest new habits.</li>
              <li><strong>NSDR (Non-Sleep Deep Rest):</strong> To process trauma and "reset" the nervous system, Huberman advocates for Yoga Nidra or NSDR. This shifts the brain into a state of high neuroplasticity, making it easier to "rewrite" the emotional charge of a traumatic memory.</li>
              <li><strong>Dopamine Management:</strong> Avoid "dopamine stacking." To break a bad habit, you must decouple the craving from the reward by introducing a "buffer" or a physiological "cliff" (like a cold plunge) to reset your baseline.</li>
            </ul>

            <h2>2. The Historical & Narrative Lens (Yuval Noah Harari)</h2>
            <p>
              Harari looks at habits and trauma as fictional stories we tell ourselves. In <em>Sapiens</em> and <em>21 Lessons for the 21st Century</em>, he emphasizes that we are often "hacked" by our own biological algorithms and societal myths.
            </p>
            <ul>
              <li><strong>Observe the Algorithm:</strong> Harari suggests that the first step is realizing that your "trauma" is often a recurring narrative—a story your mind repeats to maintain a sense of identity.</li>
              <li><strong>Vipassana (Observation):</strong> Harari is a devout practitioner of Vipassana. He argues that by sitting in silence and observing physical sensations without reacting, you stop the "story-making" machine. You see the habit not as "me," but as a passing chemical reaction.</li>
            </ul>

            <h2>3. The Compassionate Heart (James Doty)</h2>
            <p>
              Dr. James Doty, author of <em>Into the Magic Shop</em>, bridges the gap between the brain and the heart. He views trauma as a constriction of the heart that freezes the nervous system in a state of "threat."
            </p>
            <ul>
              <li><strong>The Relaxation Response:</strong> Before you can change a habit, you must convince your amygdala that you are safe. Doty teaches a specific relaxation technique to drop the body into the parasympathetic state.</li>
              <li><strong>The "Alphabet of the Heart":</strong> He emphasizes Compassion (for oneself). Trauma often carries shame. By practicing "Ruthless Compassion," you soften the neural pathways associated with the trauma, allowing the prefrontal cortex to come back online and choose a new direction.</li>
            </ul>

            <h2>4. The Yogic Practice (Samskara & Tapas)</h2>
            <p>
              In Yoga Philosophy (specifically the <em>Yoga Sutras of Patanjali</em>), habits and traumas are called Samskaras—deep grooves in the subconscious mind.
            </p>
            <ul>
              <li><strong>Tapas (Heat/Discipline):</strong> This is the "friction" required to burn up old habits. It involves a conscious choice to stay with the discomfort of not performing the old habit.</li>
              <li><strong>Pratipaksha Bhavana:</strong> This is the practice of "cultivating the opposite." When a traumatic thought or a bad habit arises, you immediately and intentionally direct the mind toward its polar opposite.</li>
              <li><strong>Asana and Breath (Pranayama):</strong> Trauma is stored in the fascia and the breath pattern. Yogic practice uses physical postures and rhythmic breathing to "unlock" the physical tension where the memory resides.</li>
            </ul>

            <h2>The Integrated Step-by-Step Process</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Step</th>
                    <th>Action</th>
                    <th>Philosophy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Regulation</strong></td>
                    <td>Use NSDR or Pranayama to calm the nervous system. You cannot change a habit while in "fight or flight."</td>
                    <td>Huberman / Yoga</td>
                  </tr>
                  <tr>
                    <td><strong>2. Observation</strong></td>
                    <td>Sit in Vipassana or silence. Watch the urge or the trauma-memory arise as a sensation, not a fact.</td>
                    <td>Harari</td>
                  </tr>
                  <tr>
                    <td><strong>3. Compassion</strong></td>
                    <td>Forgive the "old self" for the habit. Use Doty's Heart Meditation to remove the barrier of shame.</td>
                    <td>James Doty</td>
                  </tr>
                  <tr>
                    <td><strong>4. Disruption</strong></td>
                    <td>Apply Tapas. Introduce "Limbic Friction" to make the old habit hard and the new habit easy.</td>
                    <td>Yoga / Huberman</td>
                  </tr>
                  <tr>
                    <td><strong>5. Rewiring</strong></td>
                    <td>Consistent repetition during the "dopamine window" of the morning to create a new Samskara.</td>
                    <td>Huberman / Yoga</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr style={{ margin: 'var(--space-2xl) 0', borderTop: '1px solid var(--border)' }} />

            <h2>Yoga Nidra: A Biological Reset Button</h2>
            <p>
              Yoga Nidra, often called "Dynamic Sleep," is a powerful tool for self-transformation because it allows you to access the subconscious and unconscious mind while remaining fully awake.
            </p>
            <p>
              In the context of erasing "old drama" (trauma) and building new habits, the practice acts as a "biological reset button" through three specific mechanisms:
            </p>

            <h3>1. Erasing the "Old Drama": The Clearing of Samskaras</h3>
            <p>
              In yogic philosophy, every trauma, habit, and repetitive thought creates a Samskara—a deep groove or "scar" in the mind. The more you repeat a behavior or relive a trauma, the deeper the groove becomes, and the easier it is for your mind to "fall into" that track.
            </p>
            <ul>
              <li><strong>The State of Pratyahara:</strong> During Yoga Nidra, you withdraw your senses from the external world. This halts the "input" of new drama and allows the mind to turn inward.</li>
              <li><strong>The "Burning" of Impressions:</strong> By entering the Theta and Delta brainwave states while conscious, you reach the layer of the mind where these Samskaras are stored. In this deeply relaxed state, the emotional "charge" of a traumatic memory begins to dissolve. You aren't erasing the memory itself, but you are "erasing" the physiological stress response attached to it.</li>
            </ul>

            <h3>2. Creating the Foundation: The Sankalpa</h3>
            <p>
              The most critical part of Yoga Nidra for habit formation is the Sankalpa (a sacred vow or intention). Most habits fail because we try to change them using the conscious mind (Beta state), which is governed by willpower—a limited resource.
            </p>
            <ul>
              <li><strong>Planting the Seed:</strong> Yoga Nidra prepares the "soil" of the mind. When you repeat your Sankalpa at the beginning and end of the practice, you are planting a seed of a new habit directly into the subconscious.</li>
              <li><strong>Subconscious Acceptance:</strong> Because the analytical, critical part of your brain (the prefrontal cortex) is "offline" or softened during the practice, the mind does not argue with the new habit. If you say, "I am disciplined and calm," the subconscious accepts it as a present reality rather than a future goal.</li>
            </ul>

            <h3>3. The Science: Neuroplasticity and the Nervous System</h3>
            <p>
              From a scientific perspective (as Andrew Huberman often notes), Yoga Nidra is a form of NSDR (Non-Sleep Deep Rest).
            </p>
            <ul>
              <li><strong>Down-regulating the Amygdala:</strong> Old trauma keeps the amygdala (the brain's fear center) hyper-active. Yoga Nidra activates the parasympathetic nervous system, signaling to the brain that it is safe. This "safety signal" is the only environment in which neuroplasticity—the ability to change your brain—can occur.</li>
              <li><strong>Dopamine Baseline Reset:</strong> By sitting in deep stillness, you reset your dopamine receptors. This lowers your "limbic friction," making it physically easier to resist old, impulsive habits and choose the new path you set during your Sankalpa.</li>
            </ul>

            <div className="blog-callout">
              <strong>A Step-by-Step Approach for Your Practice</strong><br/><br/>
              <ul style={{ marginTop: '10px' }}>
                <li><strong>Preparation:</strong> Lie in Shavasana. Ensure you are warm and won't be disturbed.</li>
                <li><strong>The Sankalpa:</strong> State your new habit in the present tense (e.g., "I am focused and at peace").</li>
                <li><strong>Rotation of Consciousness:</strong> Move your awareness through the body. This "tires out" the conscious mind, allowing you to slip into the deeper states.</li>
                <li><strong>Breath Awareness:</strong> Use rhythmic breathing to bridge the gap between the body and the subconscious.</li>
                <li><strong>Integration:</strong> Finish by repeating your Sankalpa three times, "watering the seed" before you return to full wakefulness.</li>
              </ul>
            </div>

            <hr style={{ margin: 'var(--space-2xl) 0', borderTop: '1px solid var(--border)' }} />

            <h2>The Altruistic Sankalpa</h2>
            <p>
              In both yogic tradition and modern psychology, the "why" behind an altruistic Sankalpa (intention) comes down to the difference between contraction and expansion.
            </p>
            <p>
              If you ask for a house for personal comfort, the mind remains focused on the "small self" (the ego). If you ask for a house to share or create an "Experience Center" for others, the mind connects to a "larger self."
            </p>

            <h3>1. The Neurobiology of Altruism (Doty & Huberman)</h3>
            <p>
              Dr. James Doty often discusses how the brain transitions from the Threat Response (amygdala-driven) to the Compassion Response (vagus nerve-driven).
            </p>
            <ul>
              <li><strong>The Stress of "Mine":</strong> When a goal is purely selfish (e.g., "I want a house for my comfort"), it often carries an underlying "scarcity" mindset. The brain subconsciously worries about losing what it gains, which triggers a subtle stress response.</li>
              <li><strong>The Reward of "Ours":</strong> When you frame a Sankalpa around sharing—such as creating a space for wellness or community—your brain releases a different cocktail of neurochemicals, including oxytocin and vasopressin.</li>
              <li><strong>The "Helper's High":</strong> These "social bonding" chemicals stabilize the nervous system, making the subconscious more receptive to the Sankalpa. According to Andrew Huberman's research on dopamine, pursuit of a goal that serves a larger purpose provides a more sustained dopamine release than the quick "spike and crash" of a personal acquisition.</li>
            </ul>

            <h3>2. The Yogic View: From Ego (Ahankara) to Universal (Atman)</h3>
            <p>
              In Yoga, the goal of Yoga Nidra is to dissolve the boundaries of the ego.
            </p>
            <ul>
              <li><strong>The Ego's Limitation:</strong> A Sankalpa rooted in "I, me, mine" keeps the Samskaras of attachment (Raga) alive. It reinforces the wall between you and the rest of the world.</li>
              <li><strong>The Power of Dharma:</strong> When your intention aligns with Dharma (your higher purpose or duty to the whole), it gains "spiritual momentum." In yogic philosophy, the universe supports an intention that benefits the collective.</li>
              <li><strong>Vibrational Frequency:</strong> An altruistic Sankalpa has a "lighter" energetic quality. If you visualize a house as a center to help others find mindfulness, the mental image is expansive and vibrant. If you visualize it only for personal comfort, the image is heavy and closed-off.</li>
            </ul>

            <h3>3. The "Self-Correction" Mechanism</h3>
            <p>
              There is a practical, psychological benefit to an altruistic Sankalpa: It reduces the fear of failure.
            </p>
            <ul>
              <li><strong>Personal Goal:</strong> "If I don't get this house, I have failed, and I am uncomfortable." This creates performance anxiety in the subconscious.</li>
              <li><strong>Altruistic Goal:</strong> "I am seeking a space to serve others." This shifts the focus from your worthiness to the value of the mission. The subconscious is less likely to "sabotage" an altruistic goal because it doesn't feel like a personal test of the ego.</li>
            </ul>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Personal (Comfort)</th>
                    <th>Altruistic (Sharing/Service)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Brain State</strong></td>
                    <td>Activates "Acquisition" circuits</td>
                    <td>Activates "Social Bonding" circuits</td>
                  </tr>
                  <tr>
                    <td><strong>Primary Hormone</strong></td>
                    <td>Dopamine (Short-term spike)</td>
                    <td>Oxytocin & Dopamine (Long-term)</td>
                  </tr>
                  <tr>
                    <td><strong>Yogic Effect</strong></td>
                    <td>Reinforces the Ego (Ahankara)</td>
                    <td>Dissolves the Ego into the Whole</td>
                  </tr>
                  <tr>
                    <td><strong>Subconscious Resistance</strong></td>
                    <td>High (Fear of lack/failure)</td>
                    <td>Low (Aligned with higher purpose)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="blog-callout">
              <strong>Refining Your Sankalpa</strong><br/><br/>
              Since you are currently designing an Experience Center and a Neuro-Acoustic Garden at your home in Redwood City, your Sankalpa is already naturally leaning toward altruism.<br/><br/>
              <strong>Instead of:</strong> "I want a beautiful, comfortable home for myself."<br/>
              <strong>Try:</strong> "I am creating a sanctuary of wellness and technology to elevate the lives of all who enter."<br/><br/>
              By framing it this way, you aren't just getting a house; you are fulfilling a mission. The subconscious "erases" the old drama of struggle much faster when it is excited by a grand, helpful vision.
            </div>

            <div className="blog-cta-card">
              <h3>Commit to Your Journey</h3>
              <p>Experience the transformation of an altruistic Sankalpa through a personalized Kosha session.</p>
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
        .blog-tag { font-size: 0.625rem; font-weight: 700; letter-spacing: 0.06em; color: var(--steel); padding: 4px 12px; border-radius: var(--radius-full); border: 1px solid rgba(107,143,113,0.2); background: rgba(107,143,113,0.05); }
        .blog-date, .blog-read { font-size: 0.75rem; color: var(--text-3); }

        .blog-title { font-size: 2.25rem; font-weight: 800; line-height: 1.2; color: var(--text-1); margin-bottom: var(--space-xl); }

        .blog-hero-wrap { border-radius: var(--radius-xl); overflow: hidden; margin-bottom: var(--space-2xl); border: 1px solid var(--border); }
        .blog-hero-img { width: 100%; height: auto; display: block; }

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
