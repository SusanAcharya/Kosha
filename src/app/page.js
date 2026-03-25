'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flower, Waves, RefreshCw, Eye, BookOpen, Dna, Unlock, Brain, Sparkles, Target, Hexagon, Lightbulb, Flame, Wind, Settings, Heart } from 'lucide-react';

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

const BRIDGE = [
  { concept: 'The Mind',    vedic: 'A mirror covered in dust that needs cleaning.',              harari: 'A biological algorithm that can be hacked by external systems.' },
  { concept: 'Suffering',   vedic: 'Caused by Avidya — ignorance of the True Self.',             harari: 'Caused by falling for "Shared Fictions" and biochemical triggers.' },
  { concept: 'Meditation',  vedic: 'Connecting to the Divine / Universal Soul (Atman).',          harari: 'Debugging the code and observing the raw data of sensations.' },
  { concept: 'The "Story"', vedic: 'Your Karma and the impressions of past lives.',               harari: 'The "Narrative Fiction" created by evolution and culture.' },
  { concept: 'Yoga Nidra',  vedic: 'A journey through the Koshas to Bliss (Ananda).',            harari: 'A "System Restart" to reclaim authority from external tech.' },
  { concept: 'Freedom',     vedic: 'Moksha — liberation from the cycle of birth and death.',      harari: 'Cognitive Sovereignty — unhackable by algorithms or politics.' },
];

/* ── Component ── */

export default function HomePage() {
  const [philoTab, setPhiloTab] = useState('vedic');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openStage, setOpenStage] = useState(null);
  const [openBenefit, setOpenBenefit] = useState(null);

  const isVedic = philoTab === 'vedic';
  const principles = isVedic ? VEDIC_PRINCIPLES : HARARI_PRINCIPLES;

  const handleTabSwitch = (tab) => {
    setPhiloTab(tab);
    setOpenAccordion(null);
  };

  return (
    <div className="landing">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-container">
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

      {/* ── DEEP DIVE: Tabbed Philosophy Section ── */}
      <section className="info-section philosophy-section" id="section-two-lenses">
        <div className="container">
          <span className="section-tag">THE TWO LENSES</span>
          <h2 className="section-h2" id="heading-two-lenses">Explore the philosophies behind Yoga Nidra</h2>
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
            {/* Description */}
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
                  <div key={`${philoTab}-${i}`} className={`accordion-item glass-card ${isOpen ? 'accordion-open' : ''}`}>
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
            <div className={`goal-banner glass-card ${isVedic ? 'vedic-goal' : 'bio-goal'}`}>
              <span className="goal-label">THE GOAL</span>
              <p className="goal-text">
                {isVedic
                  ? <><strong>Enlightenment (Samadhi)</strong> — realizing you are not the &quot;story&quot; of your life, but the silent witness observing it.</>
                  : <><strong>Cognitive Sovereignty</strong> — seeing through the &quot;stories&quot; and &quot;hacks&quot; to maintain control over your own biological algorithm.</>
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bridge: How They Compare ── */}
      <section className="info-section" id="section-bridge">
        <div className="container">
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
              const isOpen = openStage === i;
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
        .hero-label { display: inline-block; font-size: 0.6875rem; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.16em; margin-bottom: var(--space-md); }
        .hero-h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; line-height: 1.08; color: var(--text-1); margin-bottom: var(--space-lg); }
        .hero-em { background: linear-gradient(135deg, var(--steel-light), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-sub { font-size: 1.0625rem; color: var(--text-2); line-height: 1.7; max-width: 580px; margin: 0 auto var(--space-lg); }
        .hero-cta { display: flex; align-items: center; justify-content: center; gap: var(--space-md); }

        .hero { position: relative; padding: var(--space-4xl) 0 var(--space-3xl); text-align: center; overflow: hidden; }
        .hero-glow { position: absolute; top: -40%; left: 50%; transform: translateX(-50%); width: 700px; height: 700px; border-radius: 50%; background: radial-gradient(circle, rgba(107,143,113,0.06) 0%, rgba(184,132,92,0.04) 40%, transparent 70%); pointer-events: none; z-index: 0; }
        .hero-container { position: relative; z-index: 1; }
        .hero-badges { display: flex; align-items: center; justify-content: center; gap: var(--space-md); flex-wrap: wrap; margin-bottom: var(--space-xl); }
        .hero-badge { display: inline-flex; align-items: center; gap: 6px; font-size: 0.6875rem; font-weight: 600; color: var(--text-3); padding: 6px 14px; border-radius: var(--radius-full); border: 1px solid var(--border); background: var(--bg-raised); }
        .hb-icon { color: var(--steel); font-size: 0.625rem; }

        .btn-cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.9375rem; background: linear-gradient(135deg, var(--steel), var(--steel-dim)); color: white; box-shadow: 0 4px 24px var(--steel-glow); }
        .btn-ghost-cta { padding: 14px 24px; border-radius: var(--radius-full); font-weight: 600; font-size: 0.9375rem; color: var(--text-2); border: 1px solid var(--border); }

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

        /* ── Philosophy Tabs ── */
        .philo-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-sm); margin-bottom: var(--space-xl); }
        .philo-tab { display: flex; align-items: center; gap: var(--space-md); padding: var(--space-lg) var(--space-xl); border: 2px solid var(--border); border-radius: var(--radius-lg); background: var(--bg-raised); cursor: pointer; transition: all 0.25s ease; }

        .tab-icon { font-size: 1.5rem; flex-shrink: 0; }
        .tab-text { display: flex; flex-direction: column; gap: 2px; }
        .tab-title { font-size: 0.875rem; font-weight: 700; color: var(--text-1); }
        .tab-sub { font-size: 0.6875rem; color: var(--text-3); font-weight: 600; letter-spacing: 0.06em; }
        .tab-active { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .vedic-active { border-color: var(--gold); background: linear-gradient(135deg, rgba(184,132,92,0.04), rgba(184,132,92,0.08)); }
        .vedic-active .tab-sub { color: var(--gold); }
        .harari-active { border-color: var(--steel); background: linear-gradient(135deg, rgba(107,143,113,0.04), rgba(107,143,113,0.08)); }
        .harari-active .tab-sub { color: var(--steel); }
        .philo-content { animation: fadeIn 0.3s ease; }
        .philo-desc { font-size: 0.9375rem; color: var(--text-2); line-height: 1.7; max-width: 640px; margin-bottom: var(--space-lg); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Expand Hint ── */
        .expand-hint { font-size: 0.75rem; color: var(--text-3); margin-bottom: var(--space-lg); font-style: italic; }

        /* ── Accordion ── */
        .accordion-list { display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-2xl); }
        .accordion-item { overflow: hidden; transition: box-shadow 0.3s ease; }
        .accordion-open { box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
        .accordion-header { display: flex; align-items: center; gap: var(--space-md); width: 100%; padding: var(--space-lg) var(--space-xl); background: none; border: none; cursor: pointer; text-align: left; }
        .accordion-icon { font-size: 1.5rem; flex-shrink: 0; }
        .accordion-header-text { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .accordion-title { font-size: 1rem; font-weight: 700; color: var(--text-1); }
        .accordion-summary { font-size: 0.8125rem; color: var(--text-3); line-height: 1.5; }
        .accordion-chevron { flex-shrink: 0; color: var(--text-3); transition: transform 0.3s ease; }
        .chevron-open { transform: rotate(180deg); }

        .accordion-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease; padding: 0 var(--space-xl); }
        .body-open { max-height: 600px; padding: 0 var(--space-xl) var(--space-xl); }
        
        .inline-icon { display: inline-block; vertical-align: text-bottom; margin-right: 4px; margin-top: -2px; }

        .ab-text { font-size: 0.875rem; color: var(--text-2); line-height: 1.7; margin-bottom: var(--space-lg); }
        .ab-cards { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .ab-mini-card { padding: var(--space-md); background: var(--bg-surface); border-radius: var(--radius-md); }
        .ab-mini-card strong { display: block; font-size: 0.875rem; color: var(--text-1); margin-bottom: 4px; }
        .ab-mini-card p { font-size: 0.75rem; color: var(--text-2); line-height: 1.6; }
        .ab-mini-label { font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.1em; color: var(--text-3); display: block; margin-bottom: 6px; }
        .analogy-card { background: linear-gradient(135deg, var(--bg-surface), var(--bg-raised)); border-left: 3px solid var(--gold); }

        /* ── Koshas Diagram ── */
        .koshas-section { margin-bottom: var(--space-2xl); }
        .diagram-title { font-size: 1.125rem; font-weight: 700; margin-bottom: var(--space-sm); color: var(--text-1); }
        .diagram-desc { font-size: 0.8125rem; color: var(--text-2); line-height: 1.6; margin-bottom: var(--space-xl); max-width: 540px; }

        .koshas-diagram { position: relative; display: flex; flex-direction: column; gap: 0; padding: var(--space-lg) 0; }
        .kosha-ring { padding: var(--space-md) var(--space-xl); border-left: 4px solid var(--gold); margin-left: calc(var(--ring-index) * 28px); background: var(--bg-raised); border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 6px; transition: transform 0.2s ease, box-shadow 0.2s ease; }

        .kosha-content { display: flex; align-items: baseline; gap: var(--space-md); flex-wrap: wrap; }
        .kosha-sanskrit { font-family: var(--font-heading); font-size: 0.9375rem; font-weight: 700; color: var(--gold); min-width: 120px; }
        .kosha-english { font-size: 0.8125rem; font-weight: 600; color: var(--text-1); min-width: 100px; }
        .kosha-desc { font-size: 0.75rem; color: var(--text-3); }
        .kosha-center { margin-left: calc(5 * 28px); padding: var(--space-md) var(--space-xl); border-left: 4px solid var(--steel); background: linear-gradient(135deg, var(--bg-raised), var(--bg-surface)); border-radius: 0 var(--radius-md) var(--radius-md) 0; }
        .kosha-atman { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 800; color: var(--steel); }
        .kosha-atman-sub { font-size: 0.75rem; color: var(--text-2); margin-left: var(--space-sm); }

        /* ── Brain Systems ── */
        .brain-section { margin-bottom: var(--space-2xl); }
        .brain-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-md); }
        .brain-node { display: flex; gap: var(--space-lg); align-items: flex-start; padding: var(--space-xl); background: var(--bg-raised); border: 1px solid var(--border); border-radius: var(--radius-lg); }
        .bn-icon-wrap { flex-shrink: 0; width: 56px; height: 56px; border-radius: var(--radius-md); background: linear-gradient(135deg, rgba(107,143,113,0.08), rgba(107,143,113,0.15)); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(107,143,113,0.12); }
        .bn-abbr { font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: var(--steel); letter-spacing: -0.02em; }
        .bn-body { flex: 1; }
        .bn-name { display: block; font-size: 0.8125rem; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
        .bn-desc { font-size: 0.8125rem; color: var(--text-2); line-height: 1.65; }

        /* ── Goal Banners ── */
        .goal-banner { padding: var(--space-lg) var(--space-xl); display: flex; align-items: center; gap: var(--space-lg); }
        .goal-label { font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.12em; padding: 4px 12px; border-radius: var(--radius-sm); white-space: nowrap; flex-shrink: 0; }
        .vedic-goal .goal-label { background: rgba(184, 132, 92, 0.1); color: var(--gold); border: 1px solid rgba(184, 132, 92, 0.2); }
        .bio-goal .goal-label { background: rgba(107, 143, 113, 0.1); color: var(--steel); border: 1px solid rgba(107, 143, 113, 0.2); }
        .goal-text { font-size: 0.9375rem; color: var(--text-2); line-height: 1.6; }
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
          .hero { padding: var(--space-2xl) 0; }
          .hero-h1 { font-size: 2.25rem; }
          .hero-cta { flex-direction: column; }
          .philo-tabs { grid-template-columns: 1fr; }
          .tab-title { font-size: 0.8125rem; }
          .fact-grid { grid-template-columns: repeat(2, 1fr); }
          .bw-row { grid-template-columns: 1fr; gap: var(--space-xs); }
          .bw-track { height: 20px; }
          .bw-pct { text-align: left; }
          .ab-cards { grid-template-columns: 1fr; }
          .kosha-ring { margin-left: calc(var(--ring-index) * 16px); }
          .kosha-center { margin-left: calc(5 * 16px); }
          .kosha-content { flex-direction: column; gap: 2px; }
          .brain-grid { grid-template-columns: 1fr; }
          .brain-node { gap: var(--space-md); }
          .bridge-header-row, .bridge-card { grid-template-columns: 1fr; gap: 0; }
          .bridge-header-row { display: none; }
          .bc-concept { padding-bottom: var(--space-xs); }
          .bc-vedic, .bc-harari { border-left: none; border-top: 1px solid var(--border); }
          .stages-grid { grid-template-columns: 1fr; }
          .expand-compare { grid-template-columns: 1fr; }
          .sch-lenses { flex-direction: column; }
          .steps-row { flex-direction: column; }
          .hw-arrow { transform: rotate(90deg); justify-content: center; }
          .prep-grid { grid-template-columns: 1fr; }
          .callout-card { flex-direction: column; gap: var(--space-sm); }
          .footer-inner { flex-direction: column; gap: var(--space-md); text-align: center; }
          .footer-left { flex-direction: column; gap: var(--space-xs); }
        }
      `}</style>
    </div>
  );
}
