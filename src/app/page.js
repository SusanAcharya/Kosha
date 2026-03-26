'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flower, Waves, RefreshCw, Eye, BookOpen, Dna, Unlock, Brain, Sparkles, Target, Hexagon, Lightbulb, Flame, Wind, Settings, Heart } from 'lucide-react';

/* ── Data ── */

const STAGES = [
  { n: '01', name: 'Internalization',  vedic: 'Pratyahara — withdraw the five senses inward',              bio: 'Disconnect from the Algorithm — silence notifications & data streams', detail: 'The practice begins by drawing awareness away from the external environment. In the Vedic tradition, this is Pratyahara — the turtle withdrawing into its shell. In Harari\'s framework, this is the first act of digital sovereignty: unplugging from the feeds that hack your attention.' },
  { n: '02', name: 'Sankalpa',         vedic: 'Plant a sacred seed (bija) in the fertile soil of the soul', bio: 'RAS Programming — set the brain\'s attention filter', detail: 'A short, positive resolve is planted in the receptive subconscious. The Vedic path sees this as a vow to the cosmos. The neuroscience path sees it as reprogramming the Reticular Activating System — the filter that decides what reality you notice.' },
  { n: '03', name: 'Rotation',         vedic: 'Marma Point Awareness — map the energy body',                bio: 'System Hardware Audit — somatosensory cortex body scan', detail: 'Systematic attention is rotated through 61+ body points. Yogic tradition maps these as Marma (vital energy) points connected by Nadis. Neuroscience calls this a somatosensory cortex scan that deepens proprioceptive awareness.' },
  { n: '04', name: 'Breath',           vedic: 'Prana Balancing — Ida, Pingala & Sushumna channels',         bio: 'Vagal Nerve Stimulation — HRV optimization via rhythmic breathing', detail: 'Breath becomes the vehicle. In Yoga, this balances the solar (Pingala) and lunar (Ida) channels to open the central Sushumna. In biohacking terms, slow rhythmic breathing activates the Vagus nerve, optimizing heart rate variability (HRV).' },
  { n: '05', name: 'Opposites',        vedic: 'Dvandva — find the Witness (Sakshi) beyond duality',         bio: 'Neuroplasticity Training — break rigid cognitive loops', detail: 'Pairs of opposite sensations (hot/cold, heavy/light) are experienced in rapid succession. Vedic philosophy uses this to reveal the Witness — the unchanging observer beyond all duality. Neuroscience uses it to force the brain out of rigid patterns, creating new neural pathways.' },
  { n: '06', name: 'Visualization',    vedic: 'Blue Lotus, Golden Egg, sacred fire (Agni)',                  bio: 'Cognitive Future-Casting — run vivid simulations in your inner VR', detail: 'Vivid archetypal images are presented. In the Vedic path, these are sacred symbols — lotus, golden egg, fire — that activate deep cultural memory. The bio-hacker path uses goal-oriented visualization, treating the mind as a VR simulator for desired outcomes.' },
  { n: '07', name: 'Resolve',          vedic: 'Water the seed at the Karana Sharira (causal body)',          bio: 'Firmware Update — encode new instructions into long-term memory', detail: 'The Sankalpa is repeated a final time in the deepest state of receptivity. The Vedic tradition says this waters the seed at the causal body. Neuroscience says this is a firmware update — encoding new behavioral instructions into the hippocampus for long-term memory consolidation.' },
  { n: '08', name: 'Return',           vedic: 'Samadhi into waking — Atman unchanged',                      bio: 'System Reboot — upgraded OS, unhackable narrative', detail: 'Awareness is gently returned to the waking state. In the Vedic view, you return knowing the Atman was always unchanged. In Harari\'s framework, you reboot with an upgraded operating system — your narrative is now yours, not the algorithm\'s.' },
];


/* ── Component ── */

export default function HomePage() {
  const [openStage, setOpenStage] = useState(null);
  const [openBenefit, setOpenBenefit] = useState(null);

  return (
    <div className="landing">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-container">
          <div className="hero-text-col">
            <span className="hero-label">THE OS FOR CONSCIOUSNESS</span>
            <h1 className="hero-h1">
              Program Your Mind<br />
              <span className="hero-em">While You Rest</span>
            </h1>
            <p className="hero-sub">
              Kosha uses generative AI to build personalized Yoga Nidra sessions —
              ancient sleep-based meditation, reimagined through two distinct philosophical lenses.
            </p>
            <div className="hero-badges">
              <span className="hero-badge">
                <span className="hb-icon"><Sparkles size={14} strokeWidth={1.5} /></span> AI-Generated Scripts
              </span>
              <span className="hero-badge">
                <span className="hb-icon"><Target size={14} strokeWidth={1.5} /></span> 8-Stage Structure
              </span>
              <span className="hero-badge">
                <span className="hb-icon"><Hexagon size={14} strokeWidth={1.5} /></span> Two Philosophies
              </span>
            </div>
            <div className="hero-cta">
              <Link href="/session" className="btn-cta" id="start-session-cta">
                Start a Session
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link href="/tracker" className="btn-ghost-cta">View Tracker</Link>
            </div>
          </div>
          <div className="hero-image-col">
            <div className="hero-orb"></div>
            <Image src="/avatar/pose5.png" alt="Meditating avatar" width={500} height={500} className="hero-avatar" priority />
          </div>
        </div>
      </section>

      {/* ── What is Yoga Nidra ── */}
      <section className="info-section" id="section-yoga-nidra">
        <div className="container">
          <span className="section-tag">WHAT IS YOGA NIDRA?</span>
          <h2 className="section-h2" id="heading-yoga-nidra">Conscious sleep that rewires your brain</h2>
          <p className="section-body">
            Yoga Nidra (&quot;yogic sleep&quot;) is a deeply structured practice rooted in the ancient Tantric tradition of India. Unlike ordinary sleep, you remain fully aware and present as the body rests — guided through the various levels of consciousness into a state where deep healing and rejuvenation occur. A single 20-minute session can equal 2–3 hours of deep sleep in restorative impact.
          </p>
          <p className="section-body section-body-secondary">
            Swami Satyananda Saraswati popularized this practice in the West during the mid-20th century, transforming it from an esoteric meditative technique into a widely accessible therapeutic tool. Today, controlled studies from psychological and medical journals document significant improvements in practitioners who incorporate Yoga Nidra into their routines — from overcoming insomnia to finding relief from chronic pain.
          </p>

          {/* Misconception callout */}
          <div className="callout-card glass-card">
            <span className="callout-icon"><Lightbulb size={24} strokeWidth={1.5} /></span>
            <div className="callout-content">
              <h4 className="callout-title">More than relaxation</h4>
              <p className="callout-body">Yoga Nidra is often mistaken for a simple relaxation technique. In reality, it is a systematic method for inducing complete physical, mental, and emotional transformation — guiding you through stages of intention-setting, body scanning, breath awareness, and visualization, each designed to release tension and rewrite subconscious patterns.</p>
            </div>
          </div>

          <div className="fact-grid">
            <div className="fact glass-card">
              <span className="fact-num">4,000+</span>
              <span className="fact-label">Years of practice history</span>
            </div>
            <div className="fact glass-card">
              <span className="fact-num">20 min</span>
              <span className="fact-label">= 2–3 hrs deep sleep</span>
            </div>
            <div className="fact glass-card">
              <span className="fact-num">61+</span>
              <span className="fact-label">Body points rotated</span>
            </div>
            <div className="fact glass-card">
              <span className="fact-num">Theta</span>
              <span className="fact-label">Brainwave state (4–8 Hz)</span>
            </div>
            <div className="fact glass-card">
              <span className="fact-num">PTSD</span>
              <span className="fact-label">Clinically shown to reduce symptoms</span>
            </div>
            <div className="fact glass-card">
              <span className="fact-num">50%</span>
              <span className="fact-label">Reduction in anxiety markers</span>
            </div>
          </div>

          {/* Brainwave Visual */}
          <div className="brainwave-visual glass-card">
            <h4 className="bw-title">Brainwave States During Yoga Nidra</h4>
            <div className="bw-bars">
              {[
                { name: 'Beta (Alert)', hz: '13–30 Hz', pct: 15, color: 'var(--text-3)' },
                { name: 'Alpha (Relaxed)', hz: '8–13 Hz', pct: 40, color: 'var(--steel-light)' },
                { name: 'Theta (Hypnagogic)', hz: '4–8 Hz', pct: 85, color: 'var(--steel)' },
                { name: 'Delta (Deep Sleep)', hz: '0.5–4 Hz', pct: 55, color: 'var(--gold)' },
              ].map(b => (
                <div key={b.name} className="bw-row">
                  <div className="bw-label">
                    <span className="bw-name">{b.name}</span>
                    <span className="bw-hz">{b.hz}</span>
                  </div>
                  <div className="bw-track">
                    <div className="bw-fill" style={{ width: `${b.pct}%`, background: b.color }} />
                  </div>
                  <span className="bw-pct">{b.pct}%</span>
                </div>
              ))}
            </div>
            <p className="bw-note">Yoga Nidra targets the Theta state — the gateway to the subconscious where lasting change occurs.</p>
          </div>
        </div>
      </section>
      {/* ── Preparing for Practice ── */}
      <section className="info-section" id="section-preparation">
        <div className="container">
          <span className="section-tag">PREPARING FOR PRACTICE</span>
          <h2 className="section-h2" id="heading-preparation">Set the stage for deep rest</h2>
          <p className="section-body">
            Creating a conducive environment is paramount to achieving the deep rest that Yoga Nidra promises. As Tracee Stanley writes in <em>Radiant Rest</em>, preparing both body and mind sets the stage for a transformative session.
          </p>
          <div className="prep-grid">
            <div className="prep-card glass-card">
              <span className="prep-icon"><Flame size={28} strokeWidth={1.5} /></span>
              <h4 className="prep-title">Sacred Space</h4>
              <p className="prep-desc">Create a tranquil space free from distractions. Dim the lights or use soft ambient lighting. Use a comfortable mat or blanket — ensure the temperature feels right. This is your sanctuary.</p>
            </div>
            <div className="prep-card glass-card">
              <span className="prep-icon"><Brain size={28} strokeWidth={1.5} /></span>
              <h4 className="prep-title">Body Release</h4>
              <p className="prep-desc">Begin with gentle stretches — not a rigorous workout, but simple movements to release muscular tension and prepare the body to remain still. Physical ease eliminates distractions and lets the mind relax.</p>
            </div>
            <div className="prep-card glass-card">
              <span className="prep-icon"><Wind size={28} strokeWidth={1.5} /></span>
              <h4 className="prep-title">Breathwork (Pranayama)</h4>
              <p className="prep-desc">Controlled breathing activates the parasympathetic nervous system — your body&apos;s rest-and-digest response. Diaphragmatic breathing or alternate nostril breathing calms the mind and anchors awareness.</p>
            </div>
            <div className="prep-card glass-card">
              <span className="prep-icon"><Target size={28} strokeWidth={1.5} /></span>
              <h4 className="prep-title">Set Your Sankalpa</h4>
              <p className="prep-desc">Set a clear intention — a simple affirmation or specific goal. This Sankalpa serves as a guiding principle, aligning the mind with the body&apos;s journey into profound rest. It can be as simple as &quot;I am at peace.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE: Philosophy Hub Link ── */}
      <section className="info-section philosophy-link-section" id="section-two-lenses">
        <div className="container">
          <span className="section-tag">THE PHILOSOPHIES</span>
          <h2 className="section-h2" id="heading-two-lenses">Explore the foundation behind the operations</h2>
          <p className="section-body">
            Kosha is built on the intersection of ancient wisdom and modern neuroscience. Explore the mental frameworks that power true cognitive sovereignity.
          </p>
          <div className="ph-wrapper">
            <Link href="/philosophies" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="philo-hub-card">
                <div className="phc-left">
                  <div className="phc-content">
                    <h3 className="phc-title">The Two Core Lenses</h3>
                    <p className="phc-desc">Discover the principles, visual models, and key terminology of the Vedic and Harari frameworks.</p>
                  </div>
                  <div className="phc-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
                <div className="phc-right">
                  <div className="phc-orb"></div>
                  <Image src="/avatar/pose4.png" alt="Meditating avatar" width={320} height={320} className="phc-avatar" priority />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* ── 8-Stage Journey (Interactive) ── */}
      <section className="info-section stages-section" id="section-8-stages">
        <div className="container">
          <span className="section-tag">THE ARCHITECTURE</span>
          <h2 className="section-h2" id="heading-8-stages">8 stages of consciousness reprogramming</h2>
          <p className="section-body">
            Every generated session follows this proven structure — the same skeleton, interpreted through your chosen philosophical lens. Click any stage to see the full breakdown.
          </p>

          <div className="stages-phases">
            <div className="phase-label-bar">
              <span className="phase-chip phase-prepare">PREPARE</span>
              <span className="phase-chip phase-descend">DESCEND</span>
              <span className="phase-chip phase-transform">TRANSFORM</span>
              <span className="phase-chip phase-return">RETURN</span>
            </div>
          </div>

          <div className="stages-grid">
            {STAGES.map((s, i) => {
              const isOpen = openStage !== null && Math.floor(openStage / 2) === Math.floor(i / 2);
              const phaseClass = i < 2 ? 'card-prepare' : i < 4 ? 'card-descend' : i < 7 ? 'card-transform' : 'card-return';
              return (
                <div key={s.n} className={`stage-card ${phaseClass} ${isOpen ? 'stage-card-open' : ''}`}>
                  <button className="stage-card-header" onClick={() => setOpenStage(isOpen ? null : i)}>
                    <div className="sch-top">
                      <span className="stage-number">{s.n}</span>
                      <span className="stage-title">{s.name}</span>
                    </div>
                    <div className="sch-lenses">
                      <span className="lens-tag vedic-lens"><Flower size={14} strokeWidth={1.5} className="inline-icon" /> {s.vedic.split('—')[0].trim()}</span>
                      <span className="lens-tag bio-lens"><Settings size={14} strokeWidth={1.5} className="inline-icon" /> {s.bio.split('—')[0].trim()}</span>
                    </div>
                    <span className={`stage-toggle ${isOpen ? 'toggle-open' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </span>
                  </button>
                  <div className={`stage-expand ${isOpen ? 'expand-open' : ''}`}>
                    <div className="expand-inner">
                      <p className="expand-desc">{s.detail}</p>
                      <div className="expand-compare">
                        <div className="exp-col exp-vedic">
                          <span className="exp-label"><Flower size={16} strokeWidth={1.5} className="inline-icon" /> Vedic Interpretation</span>
                          <p>{s.vedic}</p>
                        </div>
                        <div className="exp-col exp-harari">
                          <span className="exp-label"><Settings size={16} strokeWidth={1.5} className="inline-icon" /> Bio-Hacker Interpretation</span>
                          <p>{s.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="info-section" id="section-how-it-works">
        <div className="container">
          <span className="section-tag">HOW IT WORKS</span>
          <h2 className="section-h2" id="heading-how-it-works">Three steps to your session</h2>
          <div className="steps-row">
            <div className="hw-step glass-card">
              <span className="hw-num">01</span>
              <h4 className="hw-title">Tell us your state</h4>
              <p className="hw-desc">Select your current mood and the transformation you&apos;re seeking. Our engine maps your inputs to the optimal path.</p>
            </div>
            <div className="hw-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div className="hw-step glass-card">
              <span className="hw-num">02</span>
              <h4 className="hw-title">AI generates your script</h4>
              <p className="hw-desc">Gemini crafts a personalized Yoga Nidra script woven with your intention, in your chosen narrative voice.</p>
            </div>
            <div className="hw-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
            <div className="hw-step glass-card">
              <span className="hw-num">03</span>
              <h4 className="hw-title">Listen &amp; transform</h4>
              <p className="hw-desc">Play with text-to-speech narration and optional binaural theta beats. Export as PDF. Track your Sankalpa over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Science of Rest ── */}
      <section className="info-section" id="section-science">
        <div className="container">
          <span className="section-tag">THE SCIENCE OF REST</span>
          <h2 className="section-h2" id="heading-science">Why this practice transforms every dimension of your life</h2>
          <p className="section-body">
            Research from psychological and medical journals confirms what practitioners have known for millennia. As Tracee Stanley documents in <em>Radiant Rest</em>, the benefits ripple across body, heart, and mind.
          </p>

          <div className="benefit-list">
            {/* Physical */}
            <div className="benefit-item glass-card">
              <button className="benefit-header" onClick={() => setOpenBenefit(openBenefit === 'physical' ? null : 'physical')}>
                <div className="benefit-icon-circle benefit-icon-physical"><Dna size={22} strokeWidth={1.5} /></div>
                <div className="benefit-header-text">
                  <div className="benefit-name">Physical Restoration</div>
                  <div className="benefit-subtitle">Cortisol, pain management, sleep quality</div>
                </div>
                <span className={`benefit-toggle ${openBenefit === 'physical' ? 'open' : ''}`}>+</span>
              </button>
              {openBenefit === 'physical' && (
                <div className="benefit-body">
                  <ul>
                    <li>Reduces cortisol levels and activates the parasympathetic nervous system — your body&apos;s built-in recovery mode</li>
                    <li>Practitioners report significant relief from chronic pain through consistent practice, as the body-scan technique releases deeply held muscular tension</li>
                    <li>Improves sleep quality by training the brain to enter restorative brainwave states (Theta and Delta) on demand</li>
                    <li>A single 20-minute session provides physiological restoration equivalent to 2–3 hours of conventional sleep</li>
                    <li>Supports physical recovery and enhances the body&apos;s natural healing processes by reducing systemic inflammation</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Emotional */}
            <div className="benefit-item glass-card">
              <button className="benefit-header" onClick={() => setOpenBenefit(openBenefit === 'emotional' ? null : 'emotional')}>
                <div className="benefit-icon-circle benefit-icon-emotional"><Heart size={22} strokeWidth={1.5} /></div>
                <div className="benefit-header-text">
                  <div className="benefit-name">Emotional Resilience</div>
                  <div className="benefit-subtitle">Anxiety, PTSD, inner stability</div>
                </div>
                <span className={`benefit-toggle ${openBenefit === 'emotional' ? 'open' : ''}`}>+</span>
              </button>
              {openBenefit === 'emotional' && (
                <div className="benefit-body">
                  <ul>
                    <li>Controlled studies document significant reductions in symptoms of anxiety, depression, and PTSD in regular practitioners</li>
                    <li>The practice helps individuals process and release pent-up emotions, fostering inner calm and emotional resilience</li>
                    <li>The Sankalpa (intention-setting) component guides emotional healing — as practitioners repeatedly focus on their resolve, their emotional landscape becomes more stable and positive</li>
                    <li>Testimonies include individuals who reduced the severity of anxiety attacks, recovered from burnout, and reignited creative passions</li>
                    <li>Creates a sanctuary for introspection, allowing safe exploration of deeply rooted beliefs and emotions</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Mental */}
            <div className="benefit-item glass-card">
              <button className="benefit-header" onClick={() => setOpenBenefit(openBenefit === 'mental' ? null : 'mental')}>
                <div className="benefit-icon-circle benefit-icon-mental"><Brain size={22} strokeWidth={1.5} /></div>
                <div className="benefit-header-text">
                  <div className="benefit-name">Mental Clarity</div>
                  <div className="benefit-subtitle">Focus, creativity, cognitive rejuvenation</div>
                </div>
                <span className={`benefit-toggle ${openBenefit === 'mental' ? 'open' : ''}`}>+</span>
              </button>
              {openBenefit === 'mental' && (
                <div className="benefit-body">
                  <ul>
                    <li>Enhances brain functions including improved focus, memory retention, and creative problem-solving</li>
                    <li>The conscious awareness between wakefulness and sleep alleviates mental fatigue and promotes clarity</li>
                    <li>As the mind enters deep relaxation, it becomes more adept at processing complex information and reducing the impacts of chronic stress</li>
                    <li>Consistent practice leads to heightened self-awareness — practitioners uncover insights about their patterns, habits, and true desires</li>
                    <li>Catalyzes meaningful changes across all life domains, from personal relationships to career decisions, through enhanced cognitive sovereignty</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className="cta-section" id="section-cta">
        <div className="container cta-inner">
          <h2 className="cta-h2" id="heading-cta">Ready to reprogram?</h2>
          <p className="cta-sub">Your first session takes under 2 minutes to set up.</p>
          <Link href="/session" className="btn-cta" id="bottom-session-cta">
            Begin Your Session
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="blog-section" id="section-blog">
        <div className="container">
          <div className="blog-header">
            <div>
              <span className="section-tag">FROM THE JOURNAL</span>
              <h2 className="section-h2" style={{marginBottom: 0}}>Insights & Science</h2>
            </div>
          </div>

          <div className="blog-grid">
            <Link href="/blog/attention-currency" className="blog-card" id="blog-card-1">
              <div className="blog-card-img-wrap">
                <img src="/blog/attention-currency.png" alt="Meditation and neural networks" className="blog-card-img" />
                <span className="blog-card-tag">Neuroscience</span>
              </div>
              <div className="blog-card-body">
                <span className="blog-card-date">Mar 26, 2025 · 8 min read</span>
                <h3 className="blog-card-title">Your Attention is Your Currency: How to Spend It on What Matters</h3>
                <p className="blog-card-excerpt">How the Default Mode Network and Sensory Cortex create the ultimate see-saw for your mind.</p>
                <span className="blog-card-link">
                  Read Article
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </Link>

            <Link href="/blog/biological-hack-nsdr" className="blog-card" id="blog-card-2">
              <div className="blog-card-img-wrap">
                <img src="/blog/biological-hack-nsdr.png" alt="Brain resisting digital hacking through NSDR" className="blog-card-img" />
                <span className="blog-card-tag">Neuroscience</span>
              </div>
              <div className="blog-card-body">
                <span className="blog-card-date">Mar 26, 2025 · 7 min read</span>
                <h3 className="blog-card-title">The Biological Hack for Your Attention: Using NSDR to Reclaim Your Agency</h3>
                <p className="blog-card-excerpt">Algorithms are designed to steal your focus. Here&apos;s how NSDR gives it back — using your own biology.</p>
                <span className="blog-card-link">
                  Read Article
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <span className="footer-logo">Kosha</span>
            <span className="footer-copy">© 2024 Consciousness OS</span>
          </div>
          <div className="footer-links">
            <a href="#">INTEGRITY</a>
            <a href="#">PRIVACY FLUX</a>
            <a href="#">SYSTEM STATUS</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .landing { padding-bottom: 0; }

        /* ── Hero ── */
        .hero { position: relative; padding: var(--space-4xl) 0 var(--space-3xl); text-align: left; overflow: hidden; }
        .hero-glow { position: absolute; top: 0; left: 10%; transform: translateX(-50%); width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(107,143,113,0.06) 0%, rgba(184,132,92,0.04) 40%, transparent 70%); pointer-events: none; z-index: 0; }
        .hero-container { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2xl); align-items: center; }
        
        .hero-text-col { flex: 1; position: relative; z-index: 2; }
        .hero-image-col { display: flex; justify-content: flex-end; position: relative; }
        
        .hero-avatar { position: relative; z-index: 2; width: 100%; max-width: 480px; height: auto; object-fit: contain; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1)); animation: float 6s ease-in-out infinite; }
        .hero-orb { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 440px; height: 440px; background: radial-gradient(circle, rgba(107,143,113,0.15), rgba(184,132,92,0.05)); border-radius: 50%; filter: blur(60px); z-index: 1; animation: pulse-orb 8s ease-in-out infinite alternate; }
        
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-orb { 0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.6; } 100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; } }

        .hero-label { display: inline-block; font-size: 0.6875rem; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.16em; margin-bottom: var(--space-md); }
        .hero-h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; line-height: 1.08; color: var(--text-1); margin-bottom: var(--space-lg); }
        .hero-em { background: linear-gradient(135deg, var(--steel-light), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-sub { font-size: 1.0625rem; color: var(--text-2); line-height: 1.7; max-width: 580px; margin-bottom: var(--space-lg); }
        .hero-badges { display: flex; align-items: center; justify-content: flex-start; gap: var(--space-md); flex-wrap: wrap; margin-bottom: var(--space-xl); }
        .hero-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 0.6875rem; font-weight: 600; color: var(--text-3); padding: 6px 14px; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-raised); }
        .hb-icon { color: var(--steel); font-size: 0.625rem; }
        .hero-cta { display: flex; align-items: center; justify-content: flex-start; gap: var(--space-md); }

        .btn-cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9375rem; background: linear-gradient(135deg, var(--steel), var(--steel-dim)); color: white; box-shadow: 0 4px 24px var(--steel-glow); transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 32px var(--steel-glow-strong); }
        .btn-ghost-cta { padding: 14px 24px; border-radius: var(--radius-full); font-weight: 600; font-size: 0.9375rem; color: var(--text-2); border: 1px solid var(--border); transition: all 0.2s ease; }
        .btn-ghost-cta:hover { background: var(--bg-glass-hover); color: var(--text-1); border-color: var(--text-3); }

        /* ── Sections ── */
        .info-section { padding: var(--space-3xl) 0; border-top: 1px solid var(--border); }
        .section-tag { display: block; font-size: 0.625rem; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: var(--space-sm); }
        .vedic-tag { color: var(--gold); }
        .bio-tag { color: var(--steel); }
        .section-h2 { font-size: 1.75rem; font-weight: 700; margin-bottom: var(--space-md); }
        .section-body { font-size: 0.9375rem; color: var(--text-2); line-height: 1.7; max-width: 640px; margin-bottom: var(--space-md); }
        .section-body-secondary { color: var(--text-3); margin-bottom: var(--space-2xl); }

        /* ── Callout card ── */
        .callout-card { display: flex; gap: var(--space-md); padding: var(--space-lg); margin-bottom: var(--space-2xl); border-left: 3px solid var(--gold); }
        .callout-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 2px; }
        .callout-content { flex: 1; }
        .callout-title { font-size: 0.9375rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .callout-body { font-size: 0.8125rem; color: var(--text-2); line-height: 1.65; }

        /* ── Facts ── */
        .fact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); margin-bottom: var(--space-2xl); }
        .fact { padding: var(--space-lg); text-align: center; }
        .fact-num { display: block; font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--text-1); margin-bottom: 4px; }
        .fact-label { font-size: 0.75rem; color: var(--text-3); }

        /* ── Preparation Pillars ── */
        .prep-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md); }
        .prep-card { padding: var(--space-lg); }
        .prep-icon { font-size: 1.5rem; margin-bottom: var(--space-sm); display: block; }
        .prep-title { font-size: 0.9375rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .prep-desc { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; }

        /* ── Science of Rest ── */
        .benefit-list { display: flex; flex-direction: column; gap: var(--space-md); }
        .benefit-item { border-radius: var(--r-md); overflow: hidden; }
        .benefit-header { display: flex; align-items: center; gap: var(--space-md); padding: var(--space-lg); cursor: pointer; background: none; border: none; width: 100%; text-align: left; }
        .benefit-icon-circle { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; }
        .benefit-icon-physical { background: rgba(76, 175, 80, 0.1); }
        .benefit-icon-emotional { background: rgba(156, 39, 176, 0.1); }
        .benefit-icon-mental { background: rgba(33, 150, 243, 0.1); }
        .benefit-header-text { flex: 1; }
        .benefit-name { font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: 2px; }
        .benefit-subtitle { font-size: 0.75rem; color: var(--text-3); }
        .benefit-toggle { font-size: 1.25rem; color: var(--text-3); transition: transform 300ms ease; flex-shrink: 0; }
        .benefit-toggle.open { transform: rotate(45deg); }
        .benefit-body { padding: 0 var(--space-lg) var(--space-lg); }
        .benefit-body ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .benefit-body li { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; padding-left: 20px; position: relative; }
        .benefit-body li::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }

        /* ── Brainwave Visual ── */
        .brainwave-visual { padding: var(--space-xl); }
        .bw-title { font-size: 1rem; font-weight: 700; margin-bottom: var(--space-lg); color: var(--text-1); }
        .bw-bars { display: flex; flex-direction: column; gap: var(--space-md); }
        .bw-row { display: grid; grid-template-columns: 180px 1fr 40px; gap: var(--space-md); align-items: center; }
        .bw-label { display: flex; flex-direction: column; }
        .bw-name { font-size: 0.8125rem; font-weight: 600; color: var(--text-1); }
        .bw-hz { font-size: 0.6875rem; color: var(--text-3); }
        .bw-track { height: 28px; background: var(--bg-surface); border-radius: var(--radius-sm); overflow: hidden; }
        .bw-fill { height: 100%; border-radius: var(--radius-sm); transition: width 1s ease; }
        .bw-pct { font-size: 0.75rem; font-weight: 700; color: var(--text-2); text-align: right; }
        .bw-note { font-size: 0.75rem; color: var(--text-3); margin-top: var(--space-md); line-height: 1.6; font-style: italic; }

        /* ── Philosophy Hub Link ── */
        .ph-wrapper { margin-top: var(--space-2xl); }
        .philo-hub-card { 
          display: flex; align-items: stretch; justify-content: space-between; gap: 0;
          background: linear-gradient(135deg, var(--bg-raised), var(--bg-surface)); 
          border: 1px solid var(--border); border-left: 6px solid var(--steel); 
          border-radius: var(--radius-xl); text-decoration: none; 
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
          box-shadow: 0 4px 20px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.4);
          position: relative; overflow: hidden;
        }
        .philo-hub-card::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(135deg, rgba(255,255,255,0.4), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .philo-hub-card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 20px 48px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6); 
          border-left-color: var(--gold);
        }
        .philo-hub-card:hover::after { opacity: 1; }
        
        .phc-left { flex: 1; padding: var(--space-2xl) var(--space-3xl); display: flex; flex-direction: column; justify-content: center; gap: var(--space-xl); position: relative; z-index: 1; }
        .phc-content {  }
        
        .phc-right { 
          width: 320px; flex-shrink: 0; background: rgba(107,143,113,0.04);
          display: flex; align-items: center; justify-content: center; 
          position: relative; overflow: hidden; border-left: 1px solid var(--border);
        }
        .phc-orb {
          position: absolute; top: 10%; right: 10%; width: 200px; height: 200px;
          border-radius: 50%; background: var(--steel-glow); filter: blur(40px);
          transition: transform 0.8s ease;
        }
        .philo-hub-card:hover .phc-orb { transform: scale(1.2) translate(-10px, 10px); background: var(--gold-glow); }
        .phc-avatar { 
          position: relative; z-index: 1; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.06));
        }
        .philo-hub-card:hover .phc-avatar { transform: scale(1.05); }

        .phc-title { font-size: 1.5rem; font-weight: 800; color: var(--text-1); margin-bottom: 12px; letter-spacing: -0.01em; }
        .phc-desc { font-size: 1.0625rem; color: var(--text-2); line-height: 1.6; max-width: 600px; }
        
        .phc-arrow { 
          color: var(--steel); display: flex; align-items: center; justify-content: center; 
          width: 64px; height: 64px; border-radius: 50%; background: var(--bg-card); 
          box-shadow: 0 4px 16px rgba(0,0,0,0.04); flex-shrink: 0; 
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); position: relative; z-index: 1; border: 1px solid rgba(107,143,113,0.15);
        }
        .philo-hub-card:hover .phc-arrow {
          background: var(--gold); color: white; border-color: transparent;
          transform: scale(1.1) translateX(4px); box-shadow: 0 12px 24px rgba(184, 132, 92, 0.25);
        }


        /* ── Stages Section ── */
        .stages-section { position: relative; }
        .stages-phases { margin-bottom: var(--space-xl); }
        .phase-label-bar { display: flex; gap: var(--space-sm); flex-wrap: wrap; }
        .phase-chip { font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.12em; padding: 5px 14px; border-radius: var(--radius-full); }
        .phase-prepare { background: rgba(184,132,92,0.08); color: var(--gold); border: 1px solid rgba(184,132,92,0.15); }
        .phase-descend { background: rgba(100,160,160,0.08); color: #5a9e9e; border: 1px solid rgba(100,160,160,0.15); }
        .phase-transform { background: rgba(107,143,113,0.08); color: var(--steel); border: 1px solid rgba(107,143,113,0.15); }
        .phase-return { background: rgba(160,120,90,0.08); color: #a0785a; border: 1px solid rgba(160,120,90,0.15); }

        .stages-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }

        .stage-card { background: var(--bg-raised); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .card-prepare { border-left: 3px solid rgba(184,132,92,0.35); }
        .card-descend { border-left: 3px solid rgba(100,160,160,0.35); }
        .card-transform { border-left: 3px solid rgba(107,143,113,0.35); }
        .card-return { border-left: 3px solid rgba(160,120,90,0.35); }

        .stage-card-header { display: flex; flex-direction: column; gap: var(--space-sm); width: 100%; padding: var(--space-lg) var(--space-xl); background: none; border: none; cursor: pointer; text-align: left; position: relative; }

        .sch-top { display: flex; align-items: baseline; gap: var(--space-md); }
        .stage-number { font-family: var(--font-heading); font-size: 2rem; font-weight: 800; line-height: 1; background: linear-gradient(135deg, var(--steel), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .stage-title { font-size: 1.125rem; font-weight: 700; color: var(--text-1); }

        .sch-lenses { display: flex; gap: var(--space-xs); flex-wrap: wrap; }
        .lens-tag { font-size: 0.625rem; padding: 3px 10px; border-radius: var(--radius-full); font-weight: 600; background: var(--bg-surface); color: var(--text-3); border: 1px solid var(--border); }
        .vedic-lens { color: var(--gold); border-color: rgba(184,132,92,0.15); }
        .bio-lens { color: var(--steel); border-color: rgba(107,143,113,0.15); }

        .stage-toggle { position: absolute; top: var(--space-lg); right: var(--space-xl); color: var(--text-3); transition: transform 0.3s ease; display: flex; }
        .stage-toggle.toggle-open { transform: rotate(45deg); }

        .stage-expand { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
        .expand-open { max-height: 600px; }
        .expand-inner { padding: 0 var(--space-xl) var(--space-xl); border-top: 1px solid var(--border); padding-top: var(--space-lg); }
        .expand-desc { font-size: 0.875rem; color: var(--text-2); line-height: 1.75; margin-bottom: var(--space-lg); }
        .expand-compare { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .exp-col { padding: var(--space-lg); border-radius: var(--radius-md); }
        .exp-vedic { background: rgba(184,132,92,0.03); border: 1px solid rgba(184,132,92,0.12); }
        .exp-harari { background: rgba(107,143,113,0.03); border: 1px solid rgba(107,143,113,0.12); }
        .exp-col p { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; }
        .exp-label { font-size: 0.625rem; font-weight: 700; letter-spacing: 0.06em; display: block; margin-bottom: var(--space-sm); }
        .exp-vedic .exp-label { color: var(--gold); }
        .exp-harari .exp-label { color: var(--steel); }

        /* ── How It Works ── */
        .steps-row { display: flex; align-items: stretch; gap: var(--space-md); }
        .hw-step { flex: 1; padding: var(--space-xl); }
        .hw-arrow { display: flex; align-items: center; flex-shrink: 0; }
        .hw-num { display: block; font-family: var(--font-heading); font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, var(--steel), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: var(--space-sm); }
        .hw-title { font-size: 1rem; font-weight: 700; margin-bottom: var(--space-sm); }
        .hw-desc { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; }


        /* ── CTA Section ── */
        .cta-section { padding: var(--space-4xl) 0; border-top: 1px solid var(--border); text-align: center; }
        .cta-h2 { font-size: 2rem; font-weight: 800; margin-bottom: var(--space-sm); }
        .cta-sub { font-size: 0.9375rem; color: var(--text-2); margin-bottom: var(--space-xl); }

        /* ── Blog Section ── */
        .blog-section { padding: var(--space-3xl) 0; border-top: 1px solid var(--border); }
        .blog-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: var(--space-xl); }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
        .blog-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-raised);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 250ms ease, box-shadow 250ms ease;
        }
        .blog-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.07); }
        .blog-card-img-wrap { position: relative; overflow: hidden; height: 180px; flex-shrink: 0; }
        .blog-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 400ms ease; }
        .blog-card:hover .blog-card-img { transform: scale(1.04); }
        .blog-card-tag {
          position: absolute; top: var(--space-sm); left: var(--space-sm);
          font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.06em;
          color: white; background: rgba(0,0,0,0.48); backdrop-filter: blur(6px);
          padding: 3px 10px; border-radius: var(--radius-full);
        }
        .blog-card-body { padding: var(--space-lg); display: flex; flex-direction: column; flex: 1; }
        .blog-card-date { font-size: 0.625rem; color: var(--text-3); margin-bottom: var(--space-xs); display: block; letter-spacing: 0.03em; }
        .blog-card-title { font-size: 0.9375rem; font-weight: 700; color: var(--text-1); line-height: 1.4; margin-bottom: var(--space-sm); }
        .blog-card-excerpt { font-size: 0.8125rem; color: var(--text-2); line-height: 1.65; margin-bottom: var(--space-md); flex: 1; }
        .blog-card-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.75rem; font-weight: 700; color: var(--gold);
          transition: gap 200ms ease;
        }
        .blog-card:hover .blog-card-link { gap: 8px; }

        /* ── Footer ── */
        .site-footer { border-top: 1px solid var(--border); padding: var(--space-xl) 0; }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; }
        .footer-left { display: flex; align-items: center; gap: var(--space-md); }
        .footer-logo { font-family: var(--font-heading); font-weight: 700; font-size: 1rem; color: var(--gold); }
        .footer-copy { font-size: 0.6875rem; color: var(--text-3); }
        .footer-links { display: flex; gap: var(--space-xl); }
        .footer-links a { font-size: 0.6875rem; font-weight: 600; color: var(--text-3); letter-spacing: 0.06em; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero { padding: var(--space-2xl) 0; text-align: center; }
          .hero-container { grid-template-columns: 1fr; gap: var(--space-xl); text-align: center; }
          .hero-h1 { font-size: 2.25rem; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-badges { justify-content: center; }
          .hero-cta { flex-direction: column; align-items: stretch; justify-content: center; }
          .hero-image-col { justify-content: center; margin-top: var(--space-lg); }
          .hero-avatar { max-width: 320px; }

          .philo-hub-card { 
            flex-direction: column; align-items: stretch; gap: 0;
            padding: 0; border-left-width: 4px; border-radius: var(--radius-lg);
          }
          .phc-left { padding: var(--space-xl); gap: var(--space-xl); }
          .phc-right { width: 100%; height: 320px; border-left: none; border-top: 1px solid var(--border); padding: var(--space-xl) 0; }
          .phc-title { font-size: 1.25rem; }
          .phc-desc { font-size: 0.9375rem; }
          .phc-arrow { align-self: flex-start; width: 48px; height: 48px; }

          .stages-grid { grid-template-columns: 1fr; }
          .expand-compare { grid-template-columns: 1fr; }
          .sch-lenses { flex-direction: column; }
          .steps-row { flex-direction: column; }
          .hw-arrow { transform: rotate(90deg); justify-content: center; }
          .prep-grid { grid-template-columns: 1fr; }
          .fact-grid { grid-template-columns: 1fr; }
          .callout-card { flex-direction: column; gap: var(--space-sm); }
          .footer-inner { flex-direction: column; gap: var(--space-md); text-align: center; }
          .footer-left { flex-direction: column; gap: var(--space-xs); }
          .blog-grid { grid-template-columns: 1fr; }
          .blog-card-img-wrap { height: 160px; }
        }
      `}</style>
    </div>
  );
}
