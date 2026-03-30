# Kosha — The OS for Consciousness

> A generative AI platform that creates personalized Yoga Nidra sessions — ancient sleep-based meditation, reimagined through two distinct philosophical lenses: **Ancient Vedic Wisdom** and **Modern Neuroscience (Bio-Hacker)**.

---

## What is Kosha?

Kosha uses Google's Gemini AI to generate custom Yoga Nidra scripts tailored to each user's emotional state and personal intention. Each session follows a proven **8-stage consciousness architecture** and is delivered through high-fidelity text-to-speech narration (via Deepgram Aura-2) with ambient background music. The platform bridges the gap between ancient meditative traditions and cutting-edge neuroscience, offering users a deeply personalized path to mental transformation.

The name **Kosha** comes from the Sanskrit concept of the five *Koshas* — the five energetic sheaths or layers of human existence, from the physical body (*Annamaya*) to the bliss body (*Anandamaya*). The platform embodies this idea: peeling back the layers of consciousness to access deeper states of rest, healing, and self-awareness.

---

## Core Features

### 🧠 AI-Personalized Sessions
Users go through a 3-step guided survey — selecting their current mood (from 8 states like Burnt Out, Anxious, Scattered), their transformational intention (like Mental Clarity, Deep Sleep, Creative Breakthrough), and their preferred session duration (15 / 30 / 45 min). An intelligent recommendation engine then suggests the optimal philosophical path and generates a fully personalized Yoga Nidra script using Google Gemini.

### 🕉️ Two Philosophical Paths

| | The Vedic Sage (Ancient Wisdom) | The Bio-Hacker (Modern Neuroscience) |
|---|---|---|
| **Language** | Sanskrit terminology, spiritual archetypes | Neuroscience, performance science, futurism |
| **Body Scan** | Marma Point Awareness (energy body mapping) | Somatosensory Cortex Body Scan |
| **Breath** | Prana Balancing — Ida, Pingala & Sushumna | Vagal Nerve Stimulation — HRV Optimization |
| **Intention** | Sankalpa (sacred resolve planted in the soul) | RAS Programming (attention filter reset) |
| **Visualization** | Blue Lotus, Golden Egg, sacred fire (Agni) | Cognitive Future-Casting (inner VR simulator) |
| **Return** | Samadhi into waking — Atman unchanged | System Reboot — upgraded OS, unhackable narrative |

A dedicated **Philosophy Hub** (`/philosophies`) allows users to deep-dive into the principles, visual models, and key terminology of both frameworks, with a side-by-side bridge table showing how both traditions describe the same states of consciousness.

### 🎧 Immersive Audio Experience
- **Text-to-Speech**: Deepgram Aura-2 (`aura-asteria-en`) delivers smooth, realistic voice narration optimized for meditative content.
- **Ambient Music**: Duration-specific ambient soundscapes (15, 30, and 45 minute tracks) provide a rich sonic foundation.
- **Audio Controls**: Independent toggles for music and voice during playback allow users to customize their listening experience.

### 🧬 The 8-Stage Journey Architecture

Every generated session follows this proven structure, with each stage interpreted through the user's chosen philosophical lens:

| Stage | Name | Phase |
|---|---|---|
| 01 | Internalization | PREPARE |
| 02 | Sankalpa | PREPARE |
| 03 | Rotation (Body Scan) | DESCEND |
| 04 | Breath Awareness | DESCEND |
| 05 | Opposites (Duality) | TRANSFORM |
| 06 | Visualization | TRANSFORM |
| 07 | Resolve (Revisit Sankalpa) | TRANSFORM |
| 08 | Return | RETURN |

Interactive stage cards on the landing page let users explore each stage with full breakdowns of both Vedic and Bio-Hacker interpretations.

### 📊 Practice Tracker Dashboard
The **Sankalpa Tracker** (`/tracker`) provides a personal dashboard to monitor practice consistency:
- **Active Sankalpa**: Displays the user's current intention with a 40-day progress bar.
- **Frequency Spectrum Chart**: SVG-rendered weekly activity graph showing Bio-Hacker vs. Vedic session distribution.
- **Session Stats**: Total sessions count and current streak tracker.
- **Primary Intentions**: Automatically extracted intention tags from past sessions.
- **Recent Journeys**: Chronological log of completed sessions with mode, duration, and date metadata.

### 🌿 Mood-Aware Guidance Engine
Powered by insights from *Radiant Rest* by Tracee Stanley, the platform offers contextual guidance based on the user's current emotional state:
- Recommended intentions per mood
- Pre-session preparation tips
- Clinical insight explaining why the practice helps that specific state
- Smart duration suggestions

### 📝 Neuroscience-Backed Blog
A journal section (`/blog`) features in-depth articles bridging ancient wisdom with modern science:
- *Your Attention is Your Currency* — Default Mode Network and Sensory Cortex dynamics
- *The Biological Hack for Your Attention* — NSDR for reclaiming cognitive agency
- *The Five Koshas and Western Science* — Mapping yogic sheaths to modern biology
- *Rewiring Habits and Trauma* — Neuroplasticity meets ancient wisdom
- *Altruistic Manifestation* — Neuroscience of purpose-driven goal acceleration

### 🐱 Leochi — Interactive Guide Avatar
**Leochi** is the platform's mascot and interactive guide — a floating avatar character that appears across all pages:
- **Tutorial system**: Click Leochi to launch a step-by-step guided tour of any page, with contextual tooltips that scroll to and highlight each section.
- **Page-aware**: Delivers different tutorial flows for the home page, session page, philosophy hub, tracker, and blog pages.
- **Animated assets**: Features multiple states (meditating, idle, standing, sitting) through custom PNG and GIF artwork.
- **Speech bubble**: Greets new visitors with a friendly introduction bubble.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript / React 19 |
| AI Engine | Google Gemini API (`@google/generative-ai`) |
| TTS Engine | Deepgram API (`aura-asteria-en`) |
| Icons | Lucide React |
| Styling | Vanilla CSS with CSS Custom Properties (design tokens) |
| Fonts | Inter (body) + Outfit (headings) via `next/font` |
| Storage | `sessionStorage` (current session) + `localStorage` (tracker history) |
| Deployment | Vercel |

---

## Design System

### Color Palette (Earth-toned, Minimalist Dark)
| Token | Value | Usage |
|---|---|---|
| `--bg-void` | `#060a09` | Deepest background |
| `--bg-base` | `#0a1210` | Primary background |
| `--bg-card` | `rgba(14,28,25,0.7)` | Glass card backgrounds |
| `--steel` | `#7ba7c2` | Primary accent (ice-blue) |
| `--gold` | `#c9a84c` | Secondary accent (warm gold) |
| `--text-1` | `#e8ede9` | Primary text (snow white) |
| `--text-2` | `rgba(232,237,233,0.6)` | Secondary text |

### Visual Techniques
- **Glassmorphism**: `backdrop-filter: blur(24px)` with semi-transparent backgrounds
- **Breathing orbs**: Slow-pulsing radial gradients on the background layer
- **Spring animations**: `cubic-bezier(0.34, 1.56, 0.64, 1)` for interactive elements
- **Steel & gold gradient**: Used for stage numbers, titles, and branding elements
- **Heartbeat pulse**: Session avatar pulses with a heartbeat animation during playback

---

## Project Structure

```
meditate/
├── src/
│   ├── app/
│   │   ├── globals.css                # Design system (tokens, glass cards, breathing bg)
│   │   ├── layout.js                  # Root layout with Navigation + Leochi + breathing background
│   │   ├── page.js                    # Landing page — hero, yoga nidra explainer, 8-stage architecture, blog
│   │   ├── session/page.js            # Session page — 3-step survey → AI generation → audio player
│   │   ├── tracker/page.js            # Sankalpa practice tracker dashboard
│   │   ├── philosophies/page.js       # Philosophy Hub — deep-dive into Vedic & Bio-Hacker frameworks
│   │   ├── blog/                      # Blog section with 5 articles
│   │   │   ├── attention-currency/
│   │   │   ├── biological-hack-nsdr/
│   │   │   ├── 5-koshas-science/
│   │   │   ├── rewiring-habits-trauma/
│   │   │   └── altruistic-manifestation/
│   │   ├── api/
│   │   │   ├── generate/route.js      # Gemini API route (streaming script generation)
│   │   │   └── tts/route.js           # Deepgram TTS proxy (text-to-speech)
│   │   ├── error.js                   # Error boundary
│   │   └── global-error.js            # Global error boundary
│   ├── components/
│   │   ├── AudioEngine.js             # Deepgram TTS + ambient music playback engine
│   │   ├── Leochi.js                  # Interactive guide avatar with page-aware tutorials
│   │   ├── ModeCard.js                # Philosophy path selection cards
│   │   └── Navigation.js              # Top navigation bar
│   └── lib/
│       └── storage.js                 # localStorage helpers for session history
├── public/
│   ├── avatar/                        # Leochi character PNGs and pose variants
│   ├── gif/                           # Leochi animated GIFs (idle, sitting, standing transitions)
│   ├── music/                         # Ambient soundscapes (15, 30, 45 min MP3s)
│   └── blog/                          # Blog cover images
├── .env.local                         # API keys (GEMINI_API_KEY, DEEPGRAM_API_KEY)
├── .env.local.example                 # Environment template
└── package.json
```

---

## Pages

### `/` — Landing Page
The home page introduces Kosha through a series of rich, scroll-driven sections:
- **Hero**: Animated Leochi avatar with floating orb, "Program Your Mind While You Rest" headline
- **What is Yoga Nidra?**: History, clinical facts, brainwave state visualization chart
- **Preparing for Practice**: Four preparation pillars (Sacred Space, Body Release, Breathwork, Sankalpa)
- **The Philosophies**: Link card to the Philosophy Hub with interactive hover effects
- **The Architecture**: Interactive 8-stage cards with expandable Vedic/Bio-Hacker comparisons
- **How It Works**: 3-step visual flow (State → AI Script → Listen & Transform)
- **Science of Rest**: Expandable accordion cards covering Physical, Emotional, and Mental benefits
- **Blog**: Cards linking to the five journal articles
- **CTA**: Final call-to-action to begin a session

### `/session` — Session Page
A progressive 3-step survey followed by an immersive audio player:
1. **Step 1 — Mood Selection**: 8 mood cards with icons, descriptions, and color coding
2. **Step 2 — Intention Selection**: 8 intention pills with contextual guidance and recommended tags from Radiant Rest
3. **Step 3 — Protocol Configuration**: Path recommendation (Vedic vs Bio-Hacker), duration selector, pre-practice checklist, and AI generation
4. **Player**: Pulsing avatar, countdown timer, music/voice toggles, session benefits card

### `/philosophies` — Philosophy Hub
Deep exploration of both philosophical frameworks with:
- Tabbed interface switching between Vedic and Bio-Hacker world-views
- Key principles, visual models, and terminology for each path
- Side-by-side bridge table mapping concepts across traditions

### `/tracker` — Sankalpa Tracker
Practice dashboard featuring:
- Active Sankalpa with 40-day progress
- Weekly frequency spectrum chart
- Total sessions and streak counters
- Primary intention tags
- Chronological journey log

### `/blog/*` — Blog Articles
Individual long-form articles with premium typography and neuroscience-backed content.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes | Google Gemini API key for AI script generation |
| `DEEPGRAM_API_KEY` | Yes | Deepgram API key for text-to-speech narration |

---

## Future Roadmap

### 🤖 AI-Powered Dynamic Scripts & Music Generation
Currently, sessions use pre-composed ambient music tracks. In the future, both the meditation scripts and the accompanying music will be **dynamically generated by AI** in real-time, creating a fully unique and deeply personalized experience for every single session — no two sessions will ever sound the same.

### 🌍 Expanding Philosophical Frameworks
Kosha currently offers two philosophical lenses (Vedic Sage and Bio-Hacker). The vision is to **add more philosophical traditions** over time — such as Buddhist mindfulness, Sufi contemplation, Stoic introspection, and Indigenous wisdom traditions. When a user selects their philosophy, the **entire website theme, color palette, typography, and narrative tone will transform dynamically** to reflect that tradition's visual and cultural identity.

### 🔐 Backend System, User Authentication & Session Persistence
A full backend with database integration is planned to support:
- **User accounts and authentication** — login/signup for a personalized experience
- **Cloud session storage** — save and sync session history, Sankalpa progress, and preferences across devices
- **Session analytics** — detailed breakdowns of practice patterns, duration trends, and mood-intention correlations

### 📱 Wearable & Health App Integration
Integration with health and wearable platforms (Apple Health, Google Fit, Fitbit, Oura Ring) to:
- **Track biometrics** — sleep quality, heart rate, HRV (Heart Rate Variability), and resting heart rate
- **Data-driven recommendations** — use real physiological data to suggest the optimal Yoga Nidra session type, duration, and philosophy based on the user's current biological state
- **Track progress over time** — correlate meditation practice with measurable health improvements

### 📊 Data-Driven Tracker Dashboard
The Sankalpa Tracker will evolve into a **comprehensive wellness dashboard**, powered by real data from wearable integrations and session history:
- Sleep quality trends and correlations with Yoga Nidra sessions
- Heart rate and HRV improvements over time
- Mood pattern analysis and transformation tracking
- Personalized insights and milestone celebrations

### 💬 AI Health & Wellness Chatbot
An integrated **AI-powered chatbot** that serves as a personal wellness companion:
- **Teaching**: Educate users about Yoga Nidra, the Koshas, brainwave states, and the science of rest
- **Guidance**: Provide personalized recommendations based on the user's practice history and health data
- **Q&A**: Answer questions about meditation techniques, breathing exercises, and mental health practices
- **Conversational**: Natural, warm interactions that feel like talking to a knowledgeable guide

### 🐱 Enhanced Leochi Interactivity
Expand the use of **Leochi character assets** (GIFs, videos, animations) throughout the platform to create a more interactive and engaging experience:
- Animated Leochi reactions during sessions (breathing along with the user, celebrating streaks)
- Leochi-guided onboarding flows with animated transitions
- Page-specific Leochi states that reflect the current context (meditating on the session page, reading on the blog, etc.)
- Video walkthroughs and tutorials featuring Leochi as the narrator
