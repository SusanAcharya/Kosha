# AuraSync — The OS for Consciousness

> A generative AI platform that creates personalized Yoga Nidra sessions, letting users choose between Ancient Wisdom (Vedic Sage) or Modern Neuroscience (Bio-Hacker) narrative paths.

---

## Overview

AuraSync uses Google's Gemini AI to generate custom Yoga Nidra scripts based on the user's emotional state and personal intention. Each session follows a proven 8-stage consciousness architecture and is delivered through text-to-speech with optional binaural theta beats.

---

## Core User Flow

```
 ┌─────────────────┐     ┌──────────────────┐     ┌───────────────────────┐
 │  1. Your State   │ ──▶ │  2. Your Goal     │ ──▶ │  3. Your Session      │
 │  (Mood Selection)│     │  (Intention Pick) │     │  (AI Recommendation)  │
 └─────────────────┘     └──────────────────┘     └───────────────────────┘
```

### Step 1 — How are you feeling?
Users select from 8 mood states:
| Mood | Description |
|---|---|
| 🔥 Burnt Out | Exhausted & drained |
| 🌀 Anxious | Restless, overthinking |
| 🧊 Stuck | No motivation, foggy |
| 💨 Scattered | Can't focus, distracted |
| 🌧️ Low | Feeling heavy, down |
| ⚖️ Neutral | Fine, just want more |
| ✨ Curious | Open, ready to explore |
| ⚡ Restless | Too wired to sleep |

### Step 2 — What do you want to achieve?
Users choose from 8 transformational intentions:
| Intention | Description |
|---|---|
| 💎 Mental Clarity | Cut through brain fog |
| 🌙 Deep Sleep | Reset & restore tonight |
| 🎨 Creative Breakthrough | Unlock new ideas |
| 🌿 Emotional Healing | Release & let go |
| 🏔️ Inner Strength | Build unshakeable confidence |
| 🎯 Laser Focus | Sharpen concentration |
| 🧘 Deep Presence | Be here fully, now |
| 🦋 Total Transformation | Reprogram everything |

### Step 3 — AI-Powered Recommendation
Based on mood + intention, the system:
1. Recommends either **Vedic Sage** or **Bio-Hacker** path
2. Generates a personalized prompt automatically
3. Allows the user to override the recommendation
4. Lets the user select session duration (10 / 20 / 45 min)

---

## The Two Paths

### 🕉️ The Vedic Sage (Ancient Wisdom)
Uses Sanskrit terminology, spiritual archetypes, and cosmic energy metaphors. Features:
- Pratyahara & Marma Point awareness
- Prana & Chakra alignment
- Sacred visualization techniques
- Sankalpa (intention-setting as sacred resolve)

### 🧬 The Bio-Hacker (Modern Neuroscience)
Uses terms from neuroscience, performance science, and futurism. Features:
- RAS (Reticular Activating System) programming
- Vagal nerve stimulation techniques
- Neuroplasticity training protocols
- Cognitive future-casting

---

## The 8-Stage Journey Architecture

Every generated session follows this structure:

| Stage | Name | Vedic Equivalent | Bio-Hacker Equivalent |
|---|---|---|---|
| 01 | Internalization | Pratyahara | Disconnect from the Algorithm |
| 02 | Sankalpa | Plant the Sacred Seed | RAS Programming |
| 03 | Rotation | Marma Point Awareness | System Hardware Audit |
| 04 | Breath | Prana Balancing | Vagal Nerve Stimulation |
| 05 | Opposites | Dvandva — The Witness | Neuroplasticity Training |
| 06 | Visualization | Blue Lotus / Golden Egg | Cognitive Future-Casting |
| 07 | Resolve | Water the Seed | Firmware Update |
| 08 | Return | Samadhi into Waking | System Reboot |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | JavaScript |
| AI | Google Gemini API |
| Audio | Web Speech API (TTS) + Web Audio API (binaural beats) |
| Styling | Vanilla CSS with CSS Custom Properties |
| Fonts | Inter (body) + Outfit (headings) |
| Storage | `sessionStorage` (current session), `localStorage` (Sankalpa tracker) |

---

## Project Structure

```
meditate/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system (tokens, glass cards, breathing bg)
│   │   ├── layout.js            # Root layout with navigation + breathing background
│   │   ├── page.js              # Home page — 3-step guided survey
│   │   ├── session/page.js      # Session player (audio + script viewer)
│   │   ├── tracker/page.js      # Sankalpa practice tracker
│   │   └── api/generate/route.js # Gemini API route (streaming)
│   ├── components/
│   │   ├── AudioEngine.js       # TTS + binaural beat engine
│   │   ├── ModeCard.js          # Path selection cards
│   │   └── Navigation.js        # Top navigation bar
│   └── lib/
│       └── storage.js           # localStorage helpers for session history
├── .env.local                   # GEMINI_API_KEY (not committed)
└── package.json
```

---

## Design System

### Color Palette
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
- **Steel & gold gradient**: Used for titles, stage numbers, and logo

---

## Pages

### `/` — Home
3-step guided survey → generates a personalized session with mood + intention selection

### `/session` — Session Player
Audio player with TTS narration, binaural beat toggle, script viewer, and PDF export

### `/tracker` — Sankalpa Tracker
Practice log stored in localStorage tracking sessions over time

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes | Google Gemini API key for script generation |

---

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Add your GEMINI_API_KEY to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start generating sessions.
