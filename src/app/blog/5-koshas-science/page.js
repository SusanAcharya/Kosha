'use client';

import Link from 'next/link';

export default function BlogKoshasPage() {
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
            <span className="blog-tag">Philosophy &amp; Science</span>
            <span className="blog-date">Mar 27, 2026</span>
            <span className="blog-read">8 min read</span>
          </div>

          <h1 className="blog-title">The Five Koshas and Western Science: Bridging Ancient Sheaths and Modern Neuroscience</h1>

          <div className="blog-hero-wrap">
            <img src="/blog/5-koshas-science.png" alt="The 5 Koshas" className="blog-hero-img" />
          </div>

          <div className="blog-body">
            <p className="blog-intro">
              In the yogic tradition, the Koshas (or Kosas) are described as five &ldquo;sheaths&rdquo; or layers of existence that veil the True Self (Atman). While Western science doesn&apos;t have a single &ldquo;Five Layer Model,&rdquo; it addresses these exact same phenomena through the lenses of anatomy, bioenergetics, psychology, and neuroscience. 
            </p>
            <p>
              The comparison below bridges the gap between the metaphorical &ldquo;sheaths&rdquo; and the literal systems identified by Western medicine.
            </p>

            <h2>Comparison of the Five Sheaths</h2>
            
            <div className="blog-hero-wrap" style={{ margin: 'var(--space-xl) 0', borderRadius: 'var(--radius-lg)' }}>
              <img src="/blog/5-koshas.jpeg" alt="The 5 Koshas Infographic" className="blog-hero-img" />
            </div>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Sheath (Kosa)</th>
                    <th>Yogic Description</th>
                    <th>Western Science Perspective</th>
                    <th>Key Western Counterpart</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Annamaya</strong></td>
                    <td>The &ldquo;Food&rdquo; Sheath (Physical body).</td>
                    <td>Gross Anatomy &amp; Physiology: The structural body composed of bones, muscles, and organs.</td>
                    <td>The Musculoskeletal &amp; Endocrine systems.</td>
                  </tr>
                  <tr>
                    <td><strong>Pranamaya</strong></td>
                    <td>The &ldquo;Vital Air&rdquo; Sheath (Energy/Breath).</td>
                    <td>Bioenergetics &amp; Bioelectromagnetics: The flow of oxygen, ATP production, and the electrical signals of the nervous system.</td>
                    <td>The Autonomic Nervous System and cellular metabolism.</td>
                  </tr>
                  <tr>
                    <td><strong>Manomaya</strong></td>
                    <td>The &ldquo;Mind&rdquo; Sheath (Emotions/Senses).</td>
                    <td>Psychology &amp; Sensory Processing: The processing of external data and the &ldquo;default mode network&rdquo; (daydreaming, basic emotions).</td>
                    <td>The Limbic System and the subconscious mind.</td>
                  </tr>
                  <tr>
                    <td><strong>Vijnanamaya</strong></td>
                    <td>The &ldquo;Wisdom&rdquo; Sheath (Intellect/Intuition).</td>
                    <td>Neuroscience &amp; Higher Cognition: Executive function, morality, judgment, and the &ldquo;observing ego.&rdquo;</td>
                    <td>The Prefrontal Cortex.</td>
                  </tr>
                  <tr>
                    <td><strong>Anandamaya</strong></td>
                    <td>The &ldquo;Bliss&rdquo; Sheath (Deep peace).</td>
                    <td>Neurochemistry &amp; Transpersonal Psychology: The &ldquo;flow state,&rdquo; deep NREM sleep, or the release of endogenous opioids (endorphins/anandamide).</td>
                    <td>Gamma brain waves and the Endocannabinoid system.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>1. Annamaya vs. Anatomy</h3>
            <p>
              In Yoga, this is the most tangible layer. Western science views this through Cellular Biology. Both agree that the body is literally &ldquo;made of food.&rdquo; The Western perspective focuses on the Homeostasis of these physical systems, ensuring the &ldquo;machine&rdquo; functions correctly through chemical balance.
            </p>

            <h3>2. Pranamaya vs. The Nervous System</h3>
            <p>
              Yoga describes Prana flowing through Nadis (channels). Western science identifies this &ldquo;vital force&rdquo; as:
            </p>
            <ul>
              <li><strong>The Nervous System:</strong> The electrical impulses traveling at high speeds to keep the heart beating and lungs moving.</li>
              <li><strong>Heart Rate Variability (HRV):</strong> A primary Western metric for measuring the &ldquo;Pranic&rdquo; health of an individual—their ability to regulate stress.</li>
            </ul>

            <h3>3. Manomaya vs. The Limbic System</h3>
            <p>
              The Manomaya Kosha is where we experience likes, dislikes, and &ldquo;monkey mind.&rdquo; In Western terms, this is the Limbic System (the emotional brain).
            </p>
            <ul>
              <li><strong>Conditioning:</strong> Western psychology calls the habits of this layer &ldquo;Cognitive Schemas&rdquo; or &ldquo;Conditioned Responses&rdquo; (Pavlovian response).</li>
            </ul>

            <h3>4. Vijnanamaya vs. The Prefrontal Cortex</h3>
            <p>
              This is the layer of discernment (Viveka). In Western Neurobiology, this aligns perfectly with the Prefrontal Cortex (PFC). The PFC allows humans to override the emotional impulses of the Limbic System (Manomaya).
            </p>
            <div className="blog-callout">
              <strong>Scientific Parallel:</strong> When you are in Yoga Nidra and &ldquo;observe&rdquo; a thought without reacting to it, you are effectively using the Prefrontal Cortex to modulate the Amygdala.
            </div>

            <h3>5. Anandamaya vs. The &ldquo;Bliss Molecules&rdquo;</h3>
            <p>
              &ldquo;Bliss&rdquo; sounds mystical, but Western science has identified the Endocannabinoid System. The primary neurotransmitter here is Anandamide, named by researchers specifically after the Sanskrit word Ananda (Bliss).
            </p>
            <ul>
              <li><strong>Brain Waves:</strong> While the lower layers correspond to Beta and Alpha waves, the Anandamaya state often correlates with Theta and Delta waves (deep sleep/meditation) where the &ldquo;self&rdquo; begins to dissolve into a state of pure being.</li>
            </ul>

            <h2>The Western &ldquo;Integrated&rdquo; View</h2>
            <p>
              While Yoga sees these as layers to be &ldquo;peeled back&rdquo; to find the soul, Western science sees them as Emergent Properties.
            </p>
            <ul>
              <li><strong>Yoga:</strong> Start from the outside (body) to reach the inside (spirit).</li>
              <li><strong>Science:</strong> Start from the bottom (cells) to understand the top (consciousness).</li>
            </ul>

            <hr style={{ margin: 'var(--space-2xl) 0', borderTop: '1px solid var(--border)' }} />

            <h2>Yoga Nidra: A Journey Through the Koshas</h2>
            <p>
              A traditional Yoga Nidra session is specifically designed as a &ldquo;journey inward,&rdquo; systematically moving through the Pancha Koshas (five sheaths). Each stage of the guided meditation acts as a key to unlock the next, deeper layer of your being.
            </p>
            
            <p>Here is how the specific parts of a Yoga Nidra script correspond to the Koshas:</p>

            <h3>1. Annamaya Kosha (The Physical Sheath)</h3>
            <p><strong>Yoga Nidra Stage:</strong> The Rotation of Consciousness</p>
            <ul>
              <li><strong>What happens:</strong> The teacher quickly names body parts (right thumb, index finger, palm, etc.), and you mentally &ldquo;touch&rdquo; each one with your awareness.</li>
              <li><strong>The Connection:</strong> This systematically relaxes the physical body. By moving awareness rapidly, you prevent the mind from dwelling on any one part, effectively &ldquo;switching off&rdquo; the motor cortex and settling the physical frame into deep stillness.</li>
            </ul>

            <h3>2. Pranamaya Kosha (The Vital Energy Sheath)</h3>
            <p><strong>Yoga Nidra Stage:</strong> Breath Awareness</p>
            <ul>
              <li><strong>What happens:</strong> You are asked to count your breaths (often backward from 27 to 1) or to visualize the breath moving in specific patterns, like from the navel to the throat.</li>
              <li><strong>The Connection:</strong> This balances the flow of Prana (energy). In Western terms, this stimulates the Vagus Nerve, shifting the body from the &ldquo;Fight or Flight&rdquo; sympathetic state into the &ldquo;Rest and Digest&rdquo; parasympathetic state.</li>
            </ul>

            <h3>3. Manomaya Kosha (The Mental/Emotional Sheath)</h3>
            <p><strong>Yoga Nidra Stage:</strong> Pairs of Opposites</p>
            <ul>
              <li><strong>What happens:</strong> You are asked to evoke intense physical or emotional sensations and then their opposites: heavy/light, hot/cold, pain/pleasure, anxiety/calm.</li>
              <li><strong>The Connection:</strong> This stage works directly with the Limbic System. By feeling two opposite things at once (or in quick succession), you create a &ldquo;neutral&rdquo; point in the brain. It teaches the mind to remain a witness to emotions rather than being overwhelmed by them.</li>
            </ul>

            <h3>4. Vijnanamaya Kosha (The Wisdom/Intuition Sheath)</h3>
            <p><strong>Yoga Nidra Stage:</strong> Rapid Visualization</p>
            <ul>
              <li><strong>What happens:</strong> The guide flashes a series of unrelated images (e.g., a flickering candle, a red desert, a path in the woods, a smiling Buddha).</li>
              <li><strong>The Connection:</strong> These symbols speak to the Subconscious Mind. This stage bypasses logical thought (the Manomaya) and taps into the deeper &ldquo;wisdom&rdquo; layer where archetypes and intuition reside. It clears the &ldquo;karmic&rdquo; or &ldquo;stored&rdquo; impressions (Samskaras) in the mind.</li>
            </ul>

            <h3>5. Anandamaya Kosha (The Bliss Sheath)</h3>
            <p><strong>Yoga Nidra Stage:</strong> The Inner Space / Chidakasha</p>
            <ul>
              <li><strong>What happens:</strong> You are invited to rest in the &ldquo;dark space behind the eyes&rdquo; or a &ldquo;golden egg&rdquo; in the heart. There is often a period of total silence.</li>
              <li><strong>The Connection:</strong> This is the destination. After the body, energy, emotions, and thoughts have been quieted, you rest in a state of pure, objectless awareness. This is the experience of Ananda (Bliss)—a state of being that is not dependent on external circumstances.</li>
            </ul>

            <h3>The &ldquo;Bookends&rdquo;: The Sankalpa</h3>
            <p>The Sankalpa (Resolve or Intention) actually wraps around all the Koshas.</p>
            <ul>
              <li><strong>At the beginning:</strong> You plant the seed of your intention while the mind is becoming receptive.</li>
              <li><strong>At the end:</strong> You restate the intention while in the Anandamaya (Bliss) state. Because you are at the deepest level of your &ldquo;self,&rdquo; the intention is believed to be &ldquo;sewn&rdquo; into the very fabric of your consciousness, making it far more powerful than a typical New Year&apos;s resolution.</li>
            </ul>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Yoga Nidra Stage</th>
                    <th>Corresponding Kosha</th>
                    <th>Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rotation of Consciousness</td>
                    <td>Annamaya (Physical)</td>
                    <td>Deep Physical Relaxation</td>
                  </tr>
                  <tr>
                    <td>Breath Counting/Sensing</td>
                    <td>Pranamaya (Energy)</td>
                    <td>Nervous System Regulation</td>
                  </tr>
                  <tr>
                    <td>Pairs of Opposites</td>
                    <td>Manomaya (Emotional)</td>
                    <td>Emotional Resilience/Equanimity</td>
                  </tr>
                  <tr>
                    <td>Rapid Visualization</td>
                    <td>Vijnanamaya (Wisdom)</td>
                    <td>Insight &amp; Subconscious Clearing</td>
                  </tr>
                  <tr>
                    <td>Inner Silence</td>
                    <td>Anandamaya (Bliss)</td>
                    <td>Connection to the True Self</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr style={{ margin: 'var(--space-2xl) 0', borderTop: '1px solid var(--border)' }} />

            <h2>Deep Dive: Vijnanamaya Kosha (The Wisdom Sheath)</h2>
            <p>
              Vijnanamaya Kosha is the &ldquo;Wisdom Sheath&rdquo; or the &ldquo;Intellectual Body.&rdquo; The name comes from the Sanskrit word Vijnana, where Vi means &ldquo;special&rdquo; or &ldquo;distinction&rdquo; and Jnana means &ldquo;knowledge.&rdquo;
            </p>
            <p>
              While the previous layer (Manomaya) is the &ldquo;automatic&rdquo; mind that reacts to likes and dislikes, Vijnanamaya is the higher mind that observes, discriminates, and decides.
            </p>

            <h3>1. The Yogic Perspective: The Discerning Eye</h3>
            <p>
              In Yoga, this sheath is the seat of Viveka (discernment). It is the part of you that can step back and say, &ldquo;I am feeling angry, but I am not the anger itself.&rdquo;
            </p>
            <ul>
              <li><strong>The Witness:</strong> It functions as the &ldquo;Observer.&rdquo; It is the bridge between our worldly personality and our spiritual essence.</li>
              <li><strong>The Seat of Ethics:</strong> This is where your values, morals, and long-term goals reside.</li>
              <li><strong>The Subconscious Storehouse:</strong> It also holds our Samskaras (deep-seated impressions or habits). In Yoga Nidra, we &ldquo;cleanse&rdquo; this layer so we aren&apos;t just repeating the same old life patterns.</li>
            </ul>

            <h3>2. The Western Science Perspective: The Executive Brain</h3>
            <p>
              Western science maps Vijnanamaya almost perfectly to the Prefrontal Cortex (PFC)—the most evolved part of the human brain.
            </p>
            <ul>
              <li><strong>Executive Function:</strong> The PFC handles complex decision-making, planning, and moderating social behavior. It &ldquo;vetoes&rdquo; the impulsive urges of the lower brain (the Limbic System).</li>
              <li><strong>Meta-Cognition:</strong> This is the scientific term for &ldquo;thinking about thinking.&rdquo; It is the ability to monitor your own mental state, which is exactly what you do during meditation.</li>
              <li><strong>Neuroplasticity:</strong> When you use your Vijnanamaya to change a habit (like choosing a healthy meal over junk food), you are physically rewiring your brain&apos;s neural pathways.</li>
            </ul>

            <h3>3. Vijnanamaya in Yoga Nidra: The Visualization Phase</h3>
            <p>
              In a Yoga Nidra session, this layer is activated during the Rapid Visualization stage.
            </p>
            <p>
              The guide might say: <em>&ldquo;A flickering candle... a red desert... a path through the woods... a heavy rain.&rdquo;</em>
            </p>
            <ul>
              <li><strong>Why?</strong> These symbols bypass the logical, &ldquo;chattering&rdquo; mind (Manomaya) and speak directly to the intuitive, &ldquo;knowing&rdquo; mind (Vijnanamaya).</li>
              <li><strong>The Result:</strong> By observing these images without getting emotionally attached to them, you are strengthening your &ldquo;Observation Muscle.&rdquo; You are training the brain to stay awake and aware even as the body sleeps.</li>
            </ul>

            <h3>Comparison: Manomaya vs. Vijnanamaya</h3>
            <p>Understanding the difference between these two is the key to mastering your mental state:</p>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Manomaya (Lower Mind)</th>
                    <th>Vijnanamaya (Higher Mind)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Function</strong></td>
                    <td>Gathers sensory data (I see, I hear).</td>
                    <td>Analyzes and judges (I understand).</td>
                  </tr>
                  <tr>
                    <td><strong>Nature</strong></td>
                    <td>Reactive and impulsive.</td>
                    <td>Reflective and steady.</td>
                  </tr>
                  <tr>
                    <td><strong>Driven by</strong></td>
                    <td>Instincts and cravings.</td>
                    <td>Wisdom and intuition.</td>
                  </tr>
                  <tr>
                    <td><strong>Western Link</strong></td>
                    <td>Limbic System (Emotional Brain).</td>
                    <td>Prefrontal Cortex (Rational Brain).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="blog-callout">
               If Annamaya (body) is the car and Pranamaya (energy) is the fuel, then Manomaya (mind) is the passenger screaming directions, and Vijnanamaya (wisdom) is the driver who actually knows the way home.<br/><br/>
               In Yoga Nidra, we quiet the &ldquo;passenger&rdquo; so the &ldquo;driver&rdquo; can finally take the wheel.
            </div>

            <hr style={{ margin: 'var(--space-2xl) 0', borderTop: '1px solid var(--border)' }} />

            <h2>Koshas vs. Shariras: Layers vs. Bodies</h2>
            <p>
              While the Koshas are the &ldquo;layers&rdquo; of your being (like the layers of an onion), the Shariras are the &ldquo;bodies&rdquo; or &ldquo;vehicles&rdquo; (like a set of nested Russian dolls).
            </p>
            <p>
              In Yogic philosophy, there are three Shariras. Each one houses specific Koshas. Think of the Shariras as the &ldquo;containers&rdquo; and the Koshas as the &ldquo;substance&rdquo; inside them.
            </p>

            <h3>1. Sthula Sharira (The Gross Body)</h3>
            <ul>
              <li><strong>Sanskrit Meaning:</strong> Sthula means &ldquo;gross,&rdquo; &ldquo;heavy,&rdquo; or &ldquo;manifest.&rdquo;</li>
              <li><strong>What it is:</strong> This is your physical anatomy—the part of you made of matter that you can touch, see in a mirror, and that eventually decays.</li>
              <li><strong>Western Science View:</strong> This is the Biological Body (Genetics, Anatomy, Microbiology).</li>
              <li><strong>Included Kosha:</strong> Annamaya Kosha (The Food Sheath).</li>
              <li><strong>State of Consciousness:</strong> Relates to the Waking State (Jagrat). This is the body we use to interact with the material world.</li>
            </ul>

            <h3>2. Sukshma Sharira (The Subtle Body)</h3>
            <ul>
              <li><strong>Sanskrit Meaning:</strong> Sukshma means &ldquo;subtle,&rdquo; &ldquo;atomic,&rdquo; or &ldquo;invisible.&rdquo;</li>
              <li><strong>What it is:</strong> This is the &ldquo;energetic&rdquo; blueprint of the physical body. It is composed of your thoughts, emotions, and life force (Prana). It is said to leave the physical body at the time of death.</li>
              <li><strong>Western Science View:</strong> This is the Psychological &amp; Bioelectric Body (The Central Nervous System, the Mind, and the Endocrine System).</li>
              <li><strong>Included Koshas:</strong>
                <ul>
                  <li>Pranamaya (Energy/Breath)</li>
                  <li>Manomaya (Emotions/Senses)</li>
                  <li>Vijnanamaya (Intellect/Wisdom)</li>
                </ul>
              </li>
              <li><strong>State of Consciousness:</strong> Relates to the Dream State (Svapna). When you dream, your Sthula (physical) body is paralyzed, but your Sukshma (subtle) body is active, traveling through mental landscapes.</li>
            </ul>

            <h3>3. Karana Sharira (The Causal Body)</h3>
            <ul>
              <li><strong>Sanskrit Meaning:</strong> Karana means &ldquo;cause&rdquo; or &ldquo;source.&rdquo;</li>
              <li><strong>What it is:</strong> This is the most &ldquo;inner&rdquo; body. It is called &ldquo;Causal&rdquo; because it contains the seeds (Karma/Samskaras) that cause the other two bodies to exist. It is the &ldquo;blueprint&rdquo; of your soul&apos;s journey.</li>
              <li><strong>Western Science View:</strong> This is the Unconscious Mind or Genetic Memory/Deep Archetypes. It is the &ldquo;silent&rdquo; part of the brain that governs our deepest instincts and the &ldquo;will to live.&rdquo;</li>
              <li><strong>Included Kosha:</strong> Anandamaya Kosha (The Bliss Sheath).</li>
              <li><strong>State of Consciousness:</strong> Relates to Deep Sleep (Sushupti). In deep, dreamless sleep, the mind and ego dissolve, and you rest in the Causal body. You wake up saying, &ldquo;I slept so well, I didn&apos;t know anything,&rdquo; which is the experience of the Karana Sharira.</li>
            </ul>

            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr>
                    <th>Sharira (The Vehicle)</th>
                    <th>Kosha (The Layer)</th>
                    <th>Western Correlation</th>
                    <th>State of Consciousness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sthula (Gross)</strong></td>
                    <td>Annamaya</td>
                    <td>Biology / Anatomy</td>
                    <td>Waking (Jagrat)</td>
                  </tr>
                  <tr>
                    <td><strong>Sukshma (Subtle)</strong></td>
                    <td>Prana, Mano, Vijnana</td>
                    <td>Neurology / Psychology</td>
                    <td>Dreaming (Svapna)</td>
                  </tr>
                  <tr>
                    <td><strong>Karana (Causal)</strong></td>
                    <td>Anandamaya</td>
                    <td>The Unconscious</td>
                    <td>Deep Sleep (Sushupti)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="blog-callout">
              <strong>How this relates to Yoga Nidra</strong><br/><br/>
              The goal of Yoga Nidra is often described as &ldquo;The Fourth State&rdquo; (Turiya). In Yoga Nidra, you are trying to do something very &ldquo;unnatural&rdquo;:
              <ul style={{ marginTop: '10px' }}>
                <li>You put the Sthula Sharira (Physical) to sleep.</li>
                <li>You quiet the Sukshma Sharira (Subtle/Thinking) mind.</li>
                <li>You remain conscious as you enter the Karana Sharira (Causal/Deep Sleep).</li>
              </ul>
              Essentially, Yoga Nidra is the practice of being awake in the Causal Body. This is why 30 minutes of Yoga Nidra can feel as restorative as 3-4 hours of regular sleep—you are accessing the &ldquo;Causal&rdquo; level of rest without losing consciousness.
            </div>

            <div className="blog-cta-card">
              <h3>Experience the Koshas</h3>
              <p>Kosha generates personalized NSDR sessions tailored to your mood and intention — systematically guiding you through all five sheaths.</p>
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
