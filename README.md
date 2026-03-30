# Kosha — The OS for Consciousness

> A generative AI platform that creates personalized Yoga Nidra sessions, letting users choose between Ancient Wisdom (Vedic Sage) or Modern Neuroscience (Bio-Hacker) narrative paths.

## Overview

Kosha (formerly AuraSync) uses Google's Gemini AI to generate custom Yoga Nidra scripts based on your emotional state and personal intention. Each session follows a proven 8-stage consciousness architecture and is delivered through high-quality text-to-speech using Deepgram, with optional binaural theta beats.

---

## Core Features

- **Personalized Sessions**: Choose from 8 mood states and 8 transformational intentions.
- **Two Unique Paths**: 
  - **The Vedic Sage (Ancient Wisdom)**: Uses Sanskrit terminology, spiritual archetypes, and cosmic energy metaphors.
  - **The Bio-Hacker (Modern Neuroscience)**: Uses terms from neuroscience, performance science, and futurism.
- **High-Quality TTS**: Uses Deepgram Aura-2 model for highly realistic, soothing voice narration.
- **Binaural Beats**: Built-in Web Audio API generator for binaural theta wave entrainment.
- **Premium Design**: Modern, glassmorphism-based UI with breathing orb animations and a carefully curated earth-toned color palette.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript / React 19
- **AI Engine**: Google Gemini API (`@google/generative-ai`)
- **TTS Engine**: Deepgram API (`aura-asteria-en`)
- **Styling**: Vanilla CSS with customized design system
- **Storage**: `sessionStorage` and `localStorage`

---

## Getting Started

### Prerequisites

You will need API keys for the AI and TTS services:
1. **Google Gemini API Key**: Get one from [Google AI Studio](https://aistudio.google.com/).
2. **Deepgram API Key**: Get one from [Deepgram Console](https://console.deepgram.com/).

### Local Setup

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Open `.env.local` and add your API keys:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   DEEPGRAM_API_KEY=your_deepgram_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import your project into Vercel.
3. In the Vercel deployment settings, under **Environment Variables**, add:
   - `GEMINI_API_KEY` with your Google Gemini API key.
   - `DEEPGRAM_API_KEY` with your Deepgram API key.
4. Click **Deploy**. Vercel will automatically build and deploy your application.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
