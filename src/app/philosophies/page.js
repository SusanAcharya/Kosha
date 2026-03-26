'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flower, Waves, RefreshCw, Eye, BookOpen, Dna, Unlock, Brain, Settings } from 'lucide-react';

/* ── Data ── */
const VEDIC_PRINCIPLES = [
  {
    icon: Flower, title: 'Purusha vs. Prakriti',
    summary: 'The duality of Pure Consciousness and Matter — and why we confuse them.',
    body: 'Philosophy teaches that there is "Pure Consciousness" (Purusha) and "Matter/Nature" (Prakriti). Most people suffer because they confuse the two — they think they are their thoughts or their bodies. Yoga Nidra is the tool to separate them.',
    keyTerm: 'Purusha', keyDef: 'The unchanging, witnessing consciousness that exists beyond thought and form.',
    analogy: 'Like a movie projector (Purusha) vs. the movie on the screen (Prakriti). You are the projector, not the drama.',
  },
  {
    icon: Waves, title: 'The Vrittis (Mental Whirlpools)',
    summary: 'Your mind is a lake — thoughts are ripples that prevent you from seeing the bottom.',
    body: 'The mind is like a lake. Thoughts are ripples (Vrittis) that prevent you from seeing the bottom. Yoga is defined as Chitta Vritti Nirodha — the cessation of the fluctuations of the mind. When the water is still, you see your true reflection.',
    keyTerm: 'Chitta Vritti Nirodha', keyDef: 'The complete cessation of mental modifications — the very definition of Yoga (Sutra 1.2).',
    analogy: 'A turbulent lake vs. a perfectly still one. The lakebottom (truth) was always there — you just couldn\'t see it.',
  },
  {
    icon: RefreshCw, title: 'Samskaras (Subconscious Impressions)',
    summary: 'Every action or trauma leaves a "groove" in your mind — Yoga Nidra rewrites them.',
    body: 'Every action or trauma leaves a "groove" in your mind, like a scratch on a record. These Samskaras drive your habits, reactions, and fears. In the deep state of Yoga Nidra, you use a Sankalpa (Resolve) to re-write these grooves at the subconscious level.',
    keyTerm: 'Sankalpa', keyDef: 'A sacred resolve or intention planted in the fertile soil of the subconscious during Yoga Nidra.',
    analogy: 'Like reprogramming a vinyl record. The old scratches (trauma) keep playing the same song until you deliberately etch a new groove.',
  },
  {
    icon: Eye, title: 'Pratyahara (Sense Withdrawal)',
    summary: 'The specific "gate" Yoga Nidra uses — turning the senses inward.',
    body: 'This is the specific "gate" Yoga Nidra uses. By turning the senses inward, you stop feeding the external world and start nourishing the internal one. It is the fifth limb of Patanjali\'s Ashtanga Yoga — the bridge between outer practice and inner mastery.',
    keyTerm: 'Pratyahara', keyDef: 'The fifth limb of Yoga — sensory withdrawal that redirects awareness from external objects to the inner landscape.',
    analogy: 'Like a turtle withdrawing its limbs into its shell. The world doesn\'t disappear — you simply stop reacting to it.',
  },
];

const HARARI_PRINCIPLES = [
  {
    icon: BookOpen, title: 'The Myth-Making Animal',
    summary: 'Humans cooperate through "Shared Fictions" — but those fictions can enslave us.',
    body: 'Harari argues that what makes humans special is our ability to believe in "Shared Fictions" (nations, money, gods, corporations). These stories allow us to cooperate at scale, but they can also enslave us if we forget they are fictions. Most of what you believe about yourself is a story, not a fact.',
    keyTerm: 'Shared Fictions', keyDef: 'Collectively believed narratives (money, nations, religions) that enable mass cooperation but aren\'t objectively real.',
    analogy: 'Like playing a game where everyone agrees on the rules. The rules feel real — but they were invented. And they can be changed.',
  },
  {
    icon: Dna, title: 'Algorithms & Dataism',
    summary: 'Your body and brain are biological algorithms shaped by evolution.',
    body: 'Harari views the human body and brain as a massive collection of biological algorithms shaped by millions of years of evolution. In the 21st century, external algorithms (Big Tech, AI) can now understand your desires and fears better than you do. The question is: who controls the algorithm?',
    keyTerm: 'Biological Algorithm', keyDef: 'A methodical set of biochemical steps that process environmental inputs and produce emotional/behavioral outputs.',
    analogy: 'Your craving for sugar is an algorithm written 200,000 years ago when calories were scarce. It\'s still running — but the environment has changed.',
  },
  {
    icon: Unlock, title: 'The "Hacked" Human',
    summary: 'External systems exploit your biological code against your interests.',
    body: 'If an algorithm knows you are prone to anger or craving, it can trigger those feelings to sell you a product or a political idea. This is "hacking" the human — exploiting your biological code against your interests. Social media feeds, recommendation engines, and targeted ads are all designed to exploit your OS.',
    keyTerm: 'Hacking', keyDef: 'Exploiting known vulnerabilities in your biochemical system — fear, anger, craving — to manipulate behavior for external gain.',
    analogy: 'Like a hacker exploiting a security flaw. Your anger response is a "bug" that advertisers and algorithms know how to trigger.',
  },
  {
    icon: Brain, title: 'Sovereignty through Observation',
    summary: 'Know yourself better than the algorithms — the only path to freedom.',
    body: 'Harari (a dedicated Vipassana meditator) believes the only way to remain free in the age of AI is to know yourself better than the algorithms do. You must observe your biochemical fluctuations to realize "this is just a sensation," not a command. Self-knowledge is the ultimate firewall.',
    keyTerm: 'Cognitive Sovereignty', keyDef: 'The ability to observe and override your own biochemical impulses before external systems can exploit them.',
    analogy: 'Like having root access to your own operating system. If you can see the code running, no one else can execute commands without your permission.',
  },
];

const KOSHAS = [
  { name: 'Annamaya', label: 'Physical Body', desc: 'Food sheath — the gross body of bones, muscles, and organs.' },
  { name: 'Pranamaya', label: 'Energy Body', desc: 'Breath/prana sheath — the currents of vital life force.' },
  { name: 'Manomaya', label: 'Mental Body', desc: 'Mind sheath — thoughts, emotions, and sensory processing.' },
  { name: 'Vijnanamaya', label: 'Wisdom Body', desc: 'Intellect sheath — discernment, insight, and intuition.' },
  { name: 'Anandamaya', label: 'Bliss Body', desc: 'Joy sheath — the layer closest to the true Self.' },
];

const BRAIN_SYSTEMS = [
  { name: 'Reticular Activating System', abbr: 'RAS', desc: 'The brain\'s attention filter — decides what enters conscious awareness. Yoga Nidra\'s Sankalpa reprograms this gate.' },
  { name: 'Default Mode Network', abbr: 'DMN', desc: 'The "monkey mind" — generates self-referential thought loops. Meditation quiets this network by up to 50%.' },
  { name: 'Vagus Nerve', abbr: 'VN', desc: 'The body\'s "rest & digest" highway. Slow breathing during Yoga Nidra stimulates vagal tone, reducing cortisol.' },
  { name: 'Prefrontal Cortex', abbr: 'PFC', desc: 'The CEO of the brain — handles planning and impulse control. Visualization stages strengthen PFC connections.' },
  { name: 'Amygdala', abbr: 'AMG', desc: 'The threat detector — triggers fight-or-flight. Deep relaxation shrinks amygdala reactivity over time.' },
];

const BRIDGE = [
  { concept: 'The Mind',    vedic: 'A mirror covered in dust that needs cleaning.',              harari: 'A biological algorithm that can be hacked by external systems.' },
  { concept: 'Suffering',   vedic: 'Caused by Avidya — ignorance of the True Self.',             harari: 'Caused by falling for "Shared Fictions" and biochemical triggers.' },
  { concept: 'Meditation',  vedic: 'Connecting to the Divine / Universal Soul (Atman).',          harari: 'Debugging the code and observing the raw data of sensations.' },
  { concept: 'The "Story"', vedic: 'Your Karma and the impressions of past lives.',               harari: 'The "Narrative Fiction" created by evolution and culture.' },
  { concept: 'Yoga Nidra',  vedic: 'A journey through the Koshas to Bliss (Ananda).',            harari: 'A "System Restart" to reclaim authority from external tech.' },
  { concept: 'Freedom',     vedic: 'Moksha — liberation from the cycle of birth and death.',      harari: 'Cognitive Sovereignty — unhackable by algorithms or politics.' },
];

export default function PhilosophiesPage() {
  const [philoTab, setPhiloTab] = useState('vedic');
  const [openAccordion, setOpenAccordion] = useState(null);

  const isVedic = philoTab === 'vedic';
  const principles = isVedic ? VEDIC_PRINCIPLES : HARARI_PRINCIPLES;

  const handleTabSwitch = (tab) => {
    setPhiloTab(tab);
    setOpenAccordion(null);
  };

  return (
    <div className="philo-page">
      <div className="container">
        
        <div className="philo-header">
          <Link href="/" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </Link>
          <h1 className="philo-h1">The Philosophies of Rest</h1>
          <p className="philo-sub">
            Kosha is built on the intersection of ancient wisdom and modern neuroscience. Explore the mental frameworks that power true cognitive sovereignity. More lenses will be added over time.
          </p>
        </div>

        <section className="philosophy-section glass-card" id="section-two-lenses">
          <span className="section-tag">THE TWO CORE LENSES</span>
          <h2 className="section-h2" id="heading-two-lenses">Explore the foundation behind operations</h2>
          <p className="section-body">
            Two frameworks, one destination. Choose a lens to explore its core principles, visual models, and key terminology.
          </p>

          {/* Tab Switcher */}
          <div className="philo-tabs">
            <button
              className={`philo-tab ${isVedic ? 'tab-active vedic-active' : ''}`}
              onClick={() => handleTabSwitch('vedic')}
            >
              <span className="tab-icon"><Flower size={24} strokeWidth={1.5} /></span>
              <span className="tab-text">
                <span className="tab-title">Traditional Yogic Philosophy</span>
                <span className="tab-sub">The Vedic OS</span>
              </span>
            </button>
            <button
              className={`philo-tab ${!isVedic ? 'tab-active harari-active' : ''}`}
              onClick={() => handleTabSwitch('harari')}
            >
              <span className="tab-icon"><Settings size={24} strokeWidth={1.5} /></span>
              <span className="tab-text">
                <span className="tab-title">Yuval Noah Harari&apos;s Philosophy</span>
                <span className="tab-sub">The Algorithmic OS</span>
              </span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="philo-content">
            <p className="philo-desc">
              {isVedic
                ? 'Rooted in the Yoga Sutras of Patanjali and the Upanishads, this path views the human being as a series of layers (Koshas) covering a divine, unchanging center (Atman). Yoga Nidra is the tool to peel back those layers.'
                : 'Yuval Noah Harari (author of Sapiens and Homo Deus) offers a secular, historical, and biological perspective. He argues that humans are "hackable animals" — and the only defense is radical self-observation.'
              }
            </p>

            <p className="expand-hint">Click any principle to explore its deeper meaning →</p>

            {/* Accordion */}
            <div className="accordion-list">
              {principles.map((p, i) => {
                const isOpen = openAccordion === i;
                return (
                  <div key={`${philoTab}-${i}`} className={`accordion-item ${isOpen ? 'accordion-open' : ''}`}>
                    <button className="accordion-header" onClick={() => setOpenAccordion(isOpen ? null : i)}>
                      <span className="accordion-icon"><p.icon size={24} strokeWidth={1.5} /></span>
                      <div className="accordion-header-text">
                        <span className="accordion-title">{p.title}</span>
                        <span className="accordion-summary">{p.summary}</span>
                      </div>
                      <span className={`accordion-chevron ${isOpen ? 'chevron-open' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </span>
                    </button>
                    <div className={`accordion-body ${isOpen ? 'body-open' : ''}`}>
                      <p className="ab-text">{p.body}</p>
                      <div className="ab-cards">
                        <div className="ab-mini-card">
                          <span className="ab-mini-label">KEY TERM</span>
                          <strong>{p.keyTerm}</strong>
                          <p>{p.keyDef}</p>
                        </div>
                        <div className="ab-mini-card analogy-card">
                          <span className="ab-mini-label">ANALOGY</span>
                          <p>{p.analogy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Conditional Visual: Koshas or Brain Systems */}
            {isVedic ? (
              <div className="koshas-section">
                <h4 className="diagram-title">The 5 Koshas — Layers of Consciousness</h4>
                <p className="diagram-desc">Yoga Nidra systematically traverses these layers, from the outermost physical body inward toward the Atman (True Self) at the center.</p>
                <div className="koshas-diagram">
                  {KOSHAS.map((k, i) => (
                    <div key={i} className="kosha-ring" style={{ '--ring-index': i }}>
                      <div className="kosha-content">
                        <span className="kosha-sanskrit">{k.name}</span>
                        <span className="kosha-english">{k.label}</span>
                        <span className="kosha-desc">{k.desc}</span>
                      </div>
                    </div>
                  ))}
                  <div className="kosha-center">
                    <span className="kosha-atman">Ātman</span>
                    <span className="kosha-atman-sub">True Self</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="brain-section">
                <h4 className="diagram-title">Neural Systems Targeted by Yoga Nidra</h4>
                <p className="diagram-desc">Modern neuroscience identifies these key brain systems that are directly influenced during each stage of a Yoga Nidra session.</p>
                <div className="brain-grid">
                  {BRAIN_SYSTEMS.map((sys, i) => (
                    <div key={i} className="brain-node">
                      <div className="bn-icon-wrap">
                        <span className="bn-abbr">{sys.abbr}</span>
                      </div>
                      <div className="bn-body">
                        <span className="bn-name">{sys.name}</span>
                        <p className="bn-desc">{sys.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Goal Banner */}
            <div className={`goal-banner ${isVedic ? 'vedic-goal' : 'bio-goal'}`}>
              <span className="goal-label">THE GOAL</span>
              <p className="goal-text">
                {isVedic
                  ? <><strong>Enlightenment (Samadhi)</strong> — realizing you are not the &quot;story&quot; of your life, but the silent witness observing it.</>
                  : <><strong>Cognitive Sovereignty</strong> — seeing through the &quot;stories&quot; and &quot;hacks&quot; to maintain control over your own biological algorithm.</>
                }
              </p>
            </div>
          </div>
        </section>

        {/* ── Nexus Protocol: Harari Strategy (Shown Only for Harari) ── */}
        {!isVedic && (
          <section className="info-section philosophy-section glass-card nexus-section" id="section-nexus-protocol" style={{ marginTop: 'var(--space-2xl)' }}>
            <span className="section-tag">THE NEXUS PROTOCOL</span>
            <h2 className="section-h2" id="heading-nexus-protocol">How Harari&apos;s philosophy makes your practice a movement</h2>
            <p className="section-body">
              Harari is a dedicated practitioner of <em>Vipassana</em>. He meditates for <strong>two hours every day</strong> and completes a <strong>60-day silent retreat</strong> every year. He has explicitly stated that without the mental clarity gained from meditation, he could not have written <em>Sapiens</em> or <em>Homo Deus</em>.
            </p>

            {/* Strategy Cards */}
            <div className="nexus-grid">

              <div className="nexus-card glass-card">
                <div className="nexus-card-head">
                  <span className="nexus-num">01</span>
                  <h4 className="nexus-title">The Antidote to the Algorithm</h4>
                </div>
                <p className="nexus-hook">&ldquo;If you don&apos;t hack your own mind, the algorithms will do it for you.&rdquo;</p>
                <p className="nexus-body">Harari&apos;s biggest fear in <em>Nexus</em> is that AI knows us better than we know ourselves — hacking our &ldquo;biological buttons&rdquo; (anger, fear, greed). Position the Nexus Protocol not as a &ldquo;wellness&rdquo; tool, but as <strong>Mental Defense Software</strong> — the Firewall that allows humans to remain sovereign in an age of non-human agents.</p>
                <div className="nexus-tags">
                  <span className="nexus-tag">Mental Defense Software</span>
                  <span className="nexus-tag">Biological Firewall</span>
                </div>
              </div>

              <div className="nexus-card glass-card">
                <div className="nexus-card-head">
                  <span className="nexus-num">02</span>
                  <h4 className="nexus-title">The &ldquo;Sapiens vs. Nexus&rdquo; Narrative</h4>
                </div>
                <p className="nexus-hook">&ldquo;In a world of artificial intelligence, invest in your biological intelligence.&rdquo;</p>
                <p className="nexus-body">Harari&apos;s followers love the &ldquo;Big History&rdquo; perspective. Frame the app as a tool for the <em>Sapiens</em> to survive the <em>Nexus</em>. Use the Vedic-to-Harari vocabulary (e.g., calling Yoga Nidra a &ldquo;System Reset&rdquo; or &ldquo;Offline Mode&rdquo;) and present onboarding as a technical manual for the human brain.</p>
                <div className="nexus-tags">
                  <span className="nexus-tag">System Reset</span>
                  <span className="nexus-tag">Offline Mode</span>
                  <span className="nexus-tag">Big History</span>
                </div>
              </div>

              <div className="nexus-card glass-card">
                <div className="nexus-card-head">
                  <span className="nexus-num">03</span>
                  <h4 className="nexus-title">Target Intellectual Loneliness</h4>
                </div>
                <p className="nexus-hook">&ldquo;Yuval uses Vipassana to observe reality. Use the Nexus Protocol to rest the hardware that observes it.&rdquo;</p>
                <p className="nexus-body">Harari&apos;s readers are overwhelmed by AI, climate change, and political collapse. They aren&apos;t looking for &ldquo;Oms&rdquo; and &ldquo;Incense&rdquo; — they are looking for <strong>Cognitive Tools</strong>. Lead with the message that Harari meditates to &ldquo;see the world as it is,&rdquo; not as the stories tell us.</p>
                <div className="nexus-tags">
                  <span className="nexus-tag">Cognitive Tools</span>
                  <span className="nexus-tag">Reality Observation</span>
                </div>
              </div>

              <div className="nexus-card glass-card">
                <div className="nexus-card-head">
                  <span className="nexus-num">04</span>
                  <h4 className="nexus-title">Strategic Distribution &amp; Vibe</h4>
                </div>
                <p className="nexus-hook">Show up where his followers consume information.</p>
                <p className="nexus-body">Target fans of <strong>Sam Harris</strong> (friend of Harari, meditation teacher) and <strong>Lex Fridman</strong>. Post LinkedIn articles: &ldquo;Why Harari&apos;s <em>Nexus</em> Proves We Need a Biological System Reset.&rdquo; Use <strong>minimalist, high-tech, data-driven aesthetics</strong> — dark mode, clean lines, and neural network diagrams. Avoid sunsets and lotus flowers.</p>
                <div className="nexus-tags">
                  <span className="nexus-tag">Sam Harris Audience</span>
                  <span className="nexus-tag">Dark-Mode Aesthetic</span>
                  <span className="nexus-tag">LinkedIn Thought Leadership</span>
                </div>
              </div>

              <div className="nexus-card glass-card">
                <div className="nexus-card-head">
                  <span className="nexus-num">05</span>
                  <h4 className="nexus-title">The &ldquo;Harari-Approved&rdquo; Onboarding</h4>
                </div>
                <p className="nexus-hook">Don&apos;t ask about &ldquo;feelings.&rdquo; Ask about System Integrity.</p>
                <p className="nexus-body">When a user opens the app, challenge them with language that resonates: <em>&ldquo;Are your biological sensors overwhelmed by external data?&rdquo;</em> — <em>&ldquo;Is your attention being harvested by non-human agents?&rdquo;</em> — <em>&ldquo;Initiate Offline Mode now.&rdquo;</em> This language converts passive curiosity into urgent action.</p>
                <div className="nexus-tags">
                  <span className="nexus-tag">System Integrity Check</span>
                  <span className="nexus-tag">Attention Harvesting</span>
                </div>
              </div>

              <div className="nexus-card glass-card">
                <div className="nexus-card-head">
                  <span className="nexus-num">06</span>
                  <h4 className="nexus-title">The &ldquo;Silent Retreat&rdquo; Mode</h4>
                </div>
                <p className="nexus-hook">Since Harari does 60-day retreats, offer a miniaturized version.</p>
                <p className="nexus-body">Offer a <strong>&ldquo;Mini-Retreat&rdquo; Feature</strong> — a 3-day or 7-day challenge of the Nexus Protocol designed to &ldquo;de-frag&rdquo; the user&apos;s mind after a heavy work week. This directly mirrors Harari&apos;s own practice and creates a premium differentiator that no generic wellness app can match.</p>
                <div className="nexus-tags">
                  <span className="nexus-tag">3-Day De-Frag</span>
                  <span className="nexus-tag">7-Day Mini-Retreat</span>
                </div>
              </div>

            </div>

            {/* Branding Comparison Table */}
            <div className="nexus-compare">
              <h4 className="nexus-compare-title">Branding Strategy Comparison</h4>
              <div className="nexus-table">
                <div className="nt-header">
                  <div className="nt-col-label">Dimension</div>
                  <div className="nt-col-old">Traditional Yoga App</div>
                  <div className="nt-col-new">The Nexus Protocol App</div>
                </div>
                {[
                  { dim: 'Goal',      old: 'Find inner peace.',                              neo: 'Reclaim biological agency.' },
                  { dim: 'Tone',      old: 'Gentle, spiritual, soft.',                       neo: 'Clinical, urgent, intellectual.' },
                  { dim: 'Visuals',   old: 'Nature, yoga mats, pastel colors.',              neo: 'Data streams, dark mode, brain scans.' },
                  { dim: 'Key Term',  old: '"Mindfulness"',                                  neo: '"System Sovereignty"' },
                ].map((row, i) => (
                  <div key={i} className="nt-row">
                    <div className="nt-dim">{row.dim}</div>
                    <div className="nt-old"><em>{row.old}</em></div>
                    <div className="nt-new"><strong>{row.neo}</strong></div>
                  </div>
                ))}
              </div>
              <p className="nexus-verdict">By framing the app as a <strong>Sovereignty Tool</strong> rather than a Relaxation Tool, you turn a generic yoga practice into a cult-favorite intellectual accessory.</p>
            </div>

          </section>
        )}

        {/* ── Bridge: How They Compare ── */}
        <section className="info-section philosophy-section glass-card" id="section-bridge" style={{ marginTop: 'var(--space-2xl)' }}>
          <span className="section-tag">THE BRIDGE</span>
          <h2 className="section-h2" id="heading-bridge">How the two philosophies compare</h2>
          <p className="section-body">
            Different languages, same destination. Both paths teach that you are being controlled by forces you don&apos;t fully see — and that deep observation is the way to freedom.
          </p>
          <div className="bridge-table">
            <div className="bridge-header-row">
              <div className="bh-concept-col"></div>
              <div className="bh-vedic-col">
                <span className="bh-dot vedic-dot"></span>
                <span><Flower size={16} strokeWidth={1.5} className="inline-icon" /> Traditional Yogic</span>
              </div>
              <div className="bh-harari-col">
                <span className="bh-dot harari-dot"></span>
                <span><Settings size={16} strokeWidth={1.5} className="inline-icon" /> Harari / Bio-Hacker</span>
              </div>
            </div>
            {BRIDGE.map((row, i) => (
              <div key={row.concept} className="bridge-card">
                <div className="bc-concept">
                  <span className="bc-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="bc-label">{row.concept}</span>
                </div>
                <div className="bc-vedic">
                  <p>{row.vedic}</p>
                </div>
                <div className="bc-harari">
                  <p>{row.harari}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style jsx>{`
        .philo-page {
          padding: var(--space-2xl) 0 var(--space-4xl);
        }
        
        .philo-header {
          margin-bottom: var(--space-3xl);
          max-width: 640px;
        }

        .back-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.8125rem; font-weight: 600; color: var(--text-3);
          margin-bottom: var(--space-xl); transition: color 0.2s ease;
        }
        .back-link:hover { color: var(--text-1); }

        .philo-h1 {
          font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.1;
          background: linear-gradient(135deg, var(--text-1), var(--steel-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin-bottom: var(--space-md);
        }

        .philo-sub {
          font-size: 1.0625rem; color: var(--text-2); line-height: 1.7;
        }

        .philosophy-section {
          padding: var(--space-2xl) var(--space-2xl);
          background: var(--bg-card);
        }

        .section-tag { display: block; font-size: 0.625rem; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: var(--space-sm); }
        .section-h2 { font-size: 1.75rem; font-weight: 700; margin-bottom: var(--space-md); }
        .section-body { font-size: 0.9375rem; color: var(--text-2); line-height: 1.7; max-width: 640px; margin-bottom: var(--space-2xl); }

        /* ── Philosophy Tabs ── */
        .philo-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-2xl); }
        .philo-tab { display: flex; align-items: center; gap: var(--space-md); padding: var(--space-xl); border: 2px solid var(--border); border-radius: var(--radius-lg); background: var(--bg-raised); cursor: pointer; transition: all 0.25s ease; width: 100%; text-align: left; }
        .tab-icon { font-size: 1.5rem; flex-shrink: 0; }
        .tab-text { display: flex; flex-direction: column; gap: 4px; }
        .tab-title { font-size: 1rem; font-weight: 700; color: var(--text-1); }
        .tab-sub { font-size: 0.75rem; color: var(--text-3); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
        
        .tab-active { box-shadow: 0 4px 24px rgba(0,0,0,0.06); transform: translateY(-3px); }
        .vedic-active { border-color: var(--gold); background: linear-gradient(135deg, rgba(184,132,92,0.04), rgba(184,132,92,0.08)); }
        .vedic-active .tab-sub { color: var(--gold); }
        .harari-active { border-color: var(--steel); background: linear-gradient(135deg, rgba(107,143,113,0.04), rgba(107,143,113,0.08)); }
        .harari-active .tab-sub { color: var(--steel); }
        .philo-content { animation: fadeIn 0.4s ease; }
        .philo-desc { font-size: 1rem; color: var(--text-2); line-height: 1.75; max-width: 680px; margin-bottom: var(--space-lg); border-left: 3px solid var(--border); padding-left: var(--space-md); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .expand-hint { font-size: 0.75rem; color: var(--text-3); margin-bottom: var(--space-lg); font-style: italic; }

        /* ── Accordion ── */
        .accordion-list { display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-3xl); }
        .accordion-item { overflow: hidden; transition: box-shadow 0.3s ease, border-color 0.3s ease; background: var(--bg-raised); border: 1px solid var(--border); border-radius: var(--radius-lg); }
        .accordion-open { box-shadow: 0 8px 32px rgba(0,0,0,0.06); border-color: var(--steel-light); }
        .accordion-header { display: flex; align-items: center; gap: var(--space-md); width: 100%; padding: var(--space-lg) var(--space-xl); background: none; border: none; cursor: pointer; text-align: left; }
        .accordion-icon { font-size: 1.5rem; flex-shrink: 0; color: var(--text-2); }
        .accordion-header-text { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .accordion-title { font-size: 1.0625rem; font-weight: 700; color: var(--text-1); }
        .accordion-summary { font-size: 0.875rem; color: var(--text-3); line-height: 1.5; }
        .accordion-chevron { flex-shrink: 0; color: var(--text-3); transition: transform 0.3s ease; }
        .chevron-open { transform: rotate(180deg); }

        .accordion-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease; padding: 0 var(--space-xl); }
        .body-open { max-height: 600px; padding: 0 var(--space-xl) var(--space-xl); }
        
        .ab-text { font-size: 0.9375rem; color: var(--text-2); line-height: 1.7; margin-bottom: var(--space-lg); }
        .ab-cards { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .ab-mini-card { padding: var(--space-lg); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border); }
        .ab-mini-card strong { display: block; font-size: 0.875rem; color: var(--text-1); margin-bottom: 6px; }
        .ab-mini-card p { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; }
        .ab-mini-label { font-size: 0.625rem; font-weight: 800; letter-spacing: 0.1em; color: var(--text-3); display: block; margin-bottom: 8px; }
        .analogy-card { background: linear-gradient(135deg, var(--bg-surface), var(--bg-raised)); border-left: 3px solid var(--gold); }

        /* ── Koshas Diagram ── */
        .koshas-section { margin-bottom: var(--space-3xl); }
        .diagram-title { font-size: 1.25rem; font-weight: 700; margin-bottom: var(--space-sm); color: var(--text-1); }
        .diagram-desc { font-size: 0.9375rem; color: var(--text-2); line-height: 1.6; margin-bottom: var(--space-xl); max-width: 600px; }

        .koshas-diagram { position: relative; display: flex; flex-direction: column; gap: 0; padding: var(--space-lg) 0; }
        .kosha-ring { padding: var(--space-md) var(--space-xl); border-left: 4px solid var(--gold); margin-left: calc(var(--ring-index) * 28px); background: var(--bg-raised); border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.03); }

        .kosha-content { display: flex; align-items: baseline; gap: var(--space-md); flex-wrap: wrap; }
        .kosha-sanskrit { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--gold); min-width: 120px; }
        .kosha-english { font-size: 0.875rem; font-weight: 600; color: var(--text-1); min-width: 100px; }
        .kosha-desc { font-size: 0.8125rem; color: var(--text-3); }
        .kosha-center { margin-left: calc(5 * 28px); padding: var(--space-lg) var(--space-xl); border-left: 4px solid var(--steel); background: linear-gradient(135deg, var(--bg-raised), var(--bg-surface)); border-radius: 0 var(--radius-md) var(--radius-md) 0; box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
        .kosha-atman { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: var(--steel); }
        .kosha-atman-sub { font-size: 0.875rem; color: var(--text-2); margin-left: var(--space-sm); }

        /* ── Brain Systems ── */
        .brain-section { margin-bottom: var(--space-3xl); }
        .brain-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-md); }
        .brain-node { display: flex; gap: var(--space-lg); align-items: flex-start; padding: var(--space-xl); background: var(--bg-raised); border: 1px solid var(--border); border-radius: var(--radius-lg); }
        .bn-icon-wrap { flex-shrink: 0; width: 64px; height: 64px; border-radius: var(--radius-md); background: linear-gradient(135deg, rgba(107,143,113,0.08), rgba(107,143,113,0.15)); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(107,143,113,0.12); }
        .bn-abbr { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 800; color: var(--steel); letter-spacing: -0.02em; }
        .bn-body { flex: 1; }
        .bn-name { display: block; font-size: 0.9375rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .bn-desc { font-size: 0.875rem; color: var(--text-2); line-height: 1.65; }

        /* ── Goal Banners ── */
        .goal-banner { padding: var(--space-xl); display: flex; align-items: center; gap: var(--space-lg); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border); }
        .goal-label { font-size: 0.6875rem; font-weight: 800; letter-spacing: 0.12em; padding: 6px 14px; border-radius: var(--radius-sm); white-space: nowrap; flex-shrink: 0; }
        .vedic-goal .goal-label { background: rgba(184, 132, 92, 0.1); color: var(--gold); border: 1px solid rgba(184, 132, 92, 0.2); }
        .bio-goal .goal-label { background: rgba(107, 143, 113, 0.1); color: var(--steel); border: 1px solid rgba(107, 143, 113, 0.2); }
        .goal-text { font-size: 1rem; color: var(--text-2); line-height: 1.6; }
        .goal-text strong { color: var(--text-1); }

        /* ── Bridge Table ── */
        .bridge-table { display: flex; flex-direction: column; gap: 0; }
        .bridge-header-row { display: grid; grid-template-columns: 140px 1fr 1fr; gap: 0; padding: 0 0 var(--space-md); }
        .bh-concept-col { }
        .bh-vedic-col, .bh-harari-col { display: flex; align-items: center; gap: 8px; font-size: 0.6875rem; font-weight: 700; color: var(--text-3); letter-spacing: 0.06em; padding: 0 var(--space-lg); }
        .bh-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .vedic-dot { background: var(--gold); }
        .harari-dot { background: var(--steel); }
        .bridge-card { display: grid; grid-template-columns: 140px 1fr 1fr; gap: 0; border-bottom: 1px solid var(--border); transition: background 0.2s ease; }
        .bridge-card:last-child { border-bottom: none; }
        .bc-concept { padding: var(--space-lg); display: flex; flex-direction: column; gap: 2px; }
        .bc-num { font-family: var(--font-heading); font-size: 0.6875rem; font-weight: 700; color: var(--text-3); }
        .bc-label { font-size: 0.875rem; font-weight: 700; color: var(--text-1); }
        .bc-vedic { padding: var(--space-lg); border-left: 3px solid rgba(184,132,92,0.25); }
        .bc-harari { padding: var(--space-lg); border-left: 3px solid rgba(107,143,113,0.25); }
        .bc-vedic p, .bc-harari p { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; font-style: italic; }

        /* ── Nexus Protocol Section ── */
        .nexus-section { }
        .nexus-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); margin-bottom: var(--space-2xl); }
        .nexus-card { padding: var(--space-xl); display: flex; flex-direction: column; gap: var(--space-md); border-top: 3px solid transparent; transition: border-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease; }
        .nexus-card:hover { border-top-color: var(--steel); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.07); }
        .nexus-card-head { display: flex; align-items: flex-start; gap: var(--space-md); }
        .nexus-num { font-family: var(--font-heading); font-size: 2rem; font-weight: 800; line-height: 1; background: linear-gradient(135deg, var(--steel), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; flex-shrink: 0; }
        .nexus-title { font-size: 0.9375rem; font-weight: 700; color: var(--text-1); line-height: 1.35; padding-top: 4px; }
        .nexus-hook { font-size: 0.8125rem; color: var(--steel-light, var(--steel)); font-style: italic; line-height: 1.6; border-left: 3px solid var(--steel); padding-left: var(--space-md); }
        .nexus-body { font-size: 0.8125rem; color: var(--text-2); line-height: 1.65; flex: 1; }
        .nexus-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .nexus-tag { font-size: 0.5625rem; font-weight: 700; letter-spacing: 0.06em; padding: 3px 10px; border-radius: var(--radius-full); background: rgba(107,143,113,0.08); color: var(--steel); border: 1px solid rgba(107,143,113,0.18); }

        /* ── Nexus Comparison Table ── */
        .nexus-compare { }
        .nexus-compare-title { font-size: 1rem; font-weight: 700; color: var(--text-1); margin-bottom: var(--space-lg); }
        .nexus-table { border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: var(--space-lg); }
        .nt-header { display: grid; grid-template-columns: 120px 1fr 1fr; background: var(--bg-raised); border-bottom: 1px solid var(--border); }
        .nt-col-label { padding: var(--space-md) var(--space-lg); font-size: 0.625rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-3); }
        .nt-col-old { padding: var(--space-md) var(--space-lg); font-size: 0.625rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-3); border-left: 1px solid var(--border); }
        .nt-col-new { padding: var(--space-md) var(--space-lg); font-size: 0.625rem; font-weight: 700; letter-spacing: 0.08em; color: var(--steel); border-left: 1px solid var(--border); }
        .nt-row { display: grid; grid-template-columns: 120px 1fr 1fr; border-bottom: 1px solid var(--border); transition: background 0.2s ease; }
        .nt-row:last-child { border-bottom: none; }
        .nt-row:hover { background: var(--bg-raised); }
        .nt-dim { padding: var(--space-md) var(--space-lg); font-size: 0.8125rem; font-weight: 700; color: var(--text-1); display: flex; align-items: center; }
        .nt-old { padding: var(--space-md) var(--space-lg); font-size: 0.8125rem; color: var(--text-3); border-left: 1px solid var(--border); display: flex; align-items: center; }
        .nt-new { padding: var(--space-md) var(--space-lg); font-size: 0.8125rem; color: var(--steel); border-left: 1px solid rgba(107,143,113,0.25); background: rgba(107,143,113,0.03); display: flex; align-items: center; }
        .nexus-verdict { font-size: 0.875rem; color: var(--text-2); line-height: 1.7; max-width: 680px; padding: var(--space-lg) var(--space-xl); background: var(--bg-raised); border-radius: var(--radius-lg); border-left: 3px solid var(--gold); }
        .nexus-verdict strong { color: var(--text-1); }

        @media (max-width: 768px) {
          .philo-tabs { grid-template-columns: 1fr; }
          .philo-tab { flex-direction: column; align-items: flex-start; gap: var(--space-sm); }
          .ab-cards { grid-template-columns: 1fr; }
          .kosha-ring { margin-left: calc(var(--ring-index) * 16px); }
          .kosha-center { margin-left: calc(5 * 16px); }
          .kosha-content { flex-direction: column; gap: 4px; }
          .brain-grid { grid-template-columns: 1fr; }
          .goal-banner { flex-direction: column; align-items: flex-start; }
          
          .bridge-header-row { display: none; }
          .bridge-card { grid-template-columns: 1fr; gap: 0; }
          .bc-concept { padding-bottom: var(--space-xs); }
          .bc-vedic, .bc-harari { border-left: none; border-top: 1px solid var(--border); }

          .nexus-grid { grid-template-columns: 1fr; }
          .nt-header, .nt-row { grid-template-columns: 1fr; }
          .nt-col-old, .nt-col-new, .nt-old, .nt-new { border-left: none; border-top: 1px solid var(--border); }
        }
      `}</style>
    </div>
  );
}
