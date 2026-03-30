'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ModeCard from '@/components/ModeCard';
import AudioEngine from '@/components/AudioEngine';
import { Flame, Tornado, Snowflake, Zap, CloudRain, Scale, Sparkles, Activity, Sun, Moon, Lightbulb, Heart, Shield, Target, Eye, RefreshCw } from 'lucide-react';
import { saveSession } from '@/lib/storage';

/* ──── Survey Data ──── */
const MOODS = [
  { id: 'burnt-out', icon: Flame, color: '#ef4444', label: 'Burnt Out', desc: 'System overload. Need cooling and restoration.' },
  { id: 'anxious', icon: Tornado, color: '#f59e0b', label: 'Anxious', desc: 'High frequency static. Seeking grounding.' },
  { id: 'stuck', icon: Snowflake, color: '#3b82f6', label: 'Stuck', desc: 'Mental gridlock. Need a shift in perspective.' },
  { id: 'scattered', icon: Zap, color: '#8b5cf6', label: 'Scattered', desc: 'Fragmented attention. Seeking center.' },
  { id: 'sad', icon: CloudRain, color: '#64748b', label: 'Low', desc: 'Diminished energy. Gentle rising required.' },
  { id: 'neutral', icon: Scale, color: '#10b981', label: 'Neutral', desc: 'Balanced baseline. Ready for optimization.' },
  { id: 'curious', icon: Sparkles, color: '#ec4899', label: 'Curious', desc: 'Open systems. Ready to explore new depths.' },
  { id: 'restless', icon: Activity, color: '#f43f5e', label: 'Restless', desc: 'Excessive kinetic energy. Redirecting focus.' },
];

const INTENTIONS = [
  { id: 'clarity', label: 'Mental Clarity', icon: Sun },
  { id: 'sleep', label: 'Deep Sleep', icon: Moon },
  { id: 'creativity', label: 'Creative Breakthrough', icon: Lightbulb },
  { id: 'healing', label: 'Emotional Healing', icon: Heart },
  { id: 'confidence', label: 'Inner Strength', icon: Shield },
  { id: 'focus', label: 'Laser Focus', icon: Target },
  { id: 'presence', label: 'Deep Presence', icon: Eye },
  { id: 'transformation', label: 'Total Transformation', icon: RefreshCw },
];

const DURATIONS = [
  { value: 15, label: '15 min' },
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
];

/* ──── Mood → Guidance Mapping (sourced from Radiant Rest) ──── */
const MOOD_GUIDANCE = {
  'burnt-out': {
    recommended: ['sleep', 'healing'],
    tip: 'Start with body release stretches. Use props — bolster under knees, blanket for warmth. Your nervous system needs maximum support.',
    duration: 45,
    insight: 'Burnout depletes the parasympathetic nervous system. A longer session allows your body\'s "rest and digest" response to fully activate and begin restoration.',
  },
  'anxious': {
    recommended: ['presence', 'healing'],
    tip: 'Begin with 5 minutes of diaphragmatic breathing before starting. This anchors your awareness and calms the sympathetic "fight or flight" response.',
    duration: 30,
    insight: 'Anxiety creates high-frequency mental static. Body scanning systematically diffuses tension from each region, quieting the nervous system.',
  },
  'stuck': {
    recommended: ['creativity', 'transformation'],
    tip: 'Set a strong Sankalpa (intention) focused on openness. Visualization stages will help your subconscious break through mental gridlock.',
    duration: 30,
    insight: 'Feeling stuck often means the conscious mind is overworking. Yoga Nidra accesses the subconscious where creative breakthroughs emerge.',
  },
  'scattered': {
    recommended: ['focus', 'clarity'],
    tip: 'Use alternate nostril breathing (Nadi Shodhana) beforehand. During the session, bring attention back to body sensations whenever the mind drifts.',
    duration: 30,
    insight: 'Scattered attention fragments your energy. The systematic body rotation in Yoga Nidra collects and concentrates awareness into a single focused stream.',
  },
  'sad': {
    recommended: ['healing', 'confidence'],
    tip: 'Be gentle with yourself. Choose a warm, comfortable space. Let emotions arise during the practice without judgment — this is part of the healing.',
    duration: 45,
    insight: 'Low energy states benefit from the nurturing quality of longer practices. Yoga Nidra creates a safe sanctuary for emotional processing and gentle restoration.',
  },
  'neutral': {
    recommended: ['clarity', 'transformation'],
    tip: 'A neutral state is ideal for deeper exploration. Use this balanced baseline to set ambitious intentions — your mind is optimally receptive.',
    duration: 30,
    insight: 'A balanced baseline means your system is ready for optimization. This is the perfect state to plant deep Sankalpa seeds for personal growth.',
  },
  'curious': {
    recommended: ['transformation', 'creativity'],
    tip: 'Lean into the visualization stages. Your open mental state allows deeper exploration of the subconscious layers (Koshas) during practice.',
    duration: 45,
    insight: 'Curiosity opens the gateway to profound self-discovery. Longer sessions allow you to journey through all five Koshas — from physical body to bliss body.',
  },
  'restless': {
    recommended: ['presence', 'focus'],
    tip: 'Do 10 minutes of gentle stretching first to discharge excess kinetic energy. Progressive muscle relaxation before the session helps the body settle.',
    duration: 15,
    insight: 'Restlessness is excess kinetic energy seeking an outlet. A shorter, focused session redirects this energy inward through systematic body relaxation.',
  },
};

/* ──── Session Benefits by Mood + Intention ──── */
const BENEFITS_MAP = {
  'burnt-out': ['Activates parasympathetic recovery', 'Reduces muscle tension & blood pressure', 'Restores depleted energy reserves'],
  'anxious': ['Calms sympathetic nervous system', 'Reduces anxiety markers by up to 50%', 'Anchors awareness to the present'],
  'stuck': ['Unlocks subconscious creativity', 'Breaks repetitive thought patterns', 'Cultivates new mental pathways'],
  'scattered': ['Consolidates fragmented attention', 'Enhances focus and memory retention', 'Builds sustained concentration'],
  'sad': ['Processes and releases stored emotions', 'Fosters inner resilience and warmth', 'Gently elevates energy levels'],
  'neutral': ['Optimizes cognitive performance', 'Deepens self-awareness and insight', 'Plants seeds for transformation'],
  'curious': ['Explores deeper consciousness layers', 'Enhances creative problem-solving', 'Expands awareness beyond the ordinary'],
  'restless': ['Redirects kinetic energy inward', 'Establishes calm physical stillness', 'Sharpens mental clarity'],
};

const INTENTION_BENEFITS = {
  'clarity': ['Clears mental fog and fatigue', 'Enhances decision-making ability'],
  'sleep': ['Improves sleep quality & duration', '20 min ≈ 2-3 hours of deep sleep'],
  'creativity': ['Accesses hypnagogic creative state', 'Dissolves creative blocks'],
  'healing': ['Supports emotional processing', 'Reduces PTSD and trauma symptoms'],
  'confidence': ['Strengthens inner resolve (Sankalpa)', 'Builds embodied self-trust'],
  'focus': ['Trains sustained attention networks', 'Reduces default mode wandering'],
  'presence': ['Cultivates witness consciousness', 'Deepens body-mind connection'],
  'transformation': ['Rewrites subconscious patterns', 'Facilitates lasting behavioral change'],
};

/* ──── The 4 Phases of Practice ──── */
const SESSION_PHASES = [
  { icon: '◎', name: 'Sankalpa', desc: 'Set a clear intention — a short, positive statement that guides your subconscious.' },
  { icon: '◈', name: 'Body Scan', desc: 'Systematic rotation of consciousness through body regions, releasing tension layer by layer.' },
  { icon: '◉', name: 'Breath Awareness', desc: 'Controlled breathing activates your parasympathetic nervous system for deep calm.' },
  { icon: '✧', name: 'Visualization', desc: 'Guided imagery accesses deeper consciousness layers, enabling transformation.' },
];

/* ──── Pre-Practice Checklist ──── */
const PREP_CHECKLIST = [
  'Find a quiet, comfortable space free from distractions',
  'Lie down in Savasana — use a bolster or blanket if available',
  'Set room to comfortable temperature, dim the lights',
  'Silence your devices and inform others of your practice time',
  'Have water nearby for after your session',
];

/* ──── Recommendation Engine ──── */
function getRecommendation(moodId, intentionId) {
  const mood = MOODS.find((m) => m.id === moodId);
  const intention = INTENTIONS.find((i) => i.id === intentionId);
  if (!mood || !intention) return null;

  const bioIntentions = ['clarity', 'focus', 'creativity', 'confidence'];
  const vedicIntentions = ['healing', 'presence', 'sleep', 'transformation'];
  const bioMoods = ['burnt-out', 'scattered', 'restless'];

  let score = 0;
  if (bioIntentions.includes(intentionId)) score += 2;
  if (vedicIntentions.includes(intentionId)) score -= 2;
  if (bioMoods.includes(moodId)) score += 1;

  const recommended = score > 0 ? 'biohacker' : 'vedic';
  const prompt = `I'm currently feeling ${mood.label.toLowerCase()} — ${mood.desc.toLowerCase()}. My intention for this session is ${intention.label.toLowerCase()}.`;

  return { recommended, prompt, mood, intention };
}

function extractSankalpa(script, prompt) {
  const lines = script.split('\n');
  const idx = lines.findIndex(
    (l) => l.toLowerCase().includes('sankalpa') || l.toLowerCase().includes('resolve') || l.toLowerCase().includes('ras programming')
  );
  if (idx >= 0) {
    for (let i = idx + 1; i < Math.min(idx + 8, lines.length); i++) {
      const line = lines[i].trim();
      if (line.length > 20 && line.length < 200 && !line.startsWith('[') && !line.startsWith('---')) return line;
    }
  }
  return prompt.slice(0, 150);
}

/* ──── Page Component ──── */
export default function SessionPage() {
  const router = useRouter();

  // Check for existing session data
  const [sessionData, setSessionData] = useState(null);
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdownNumber, setCountdownNumber] = useState(3);
  const [musicOn, setMusicOn] = useState(true);
  const [voiceOn, setVoiceOn] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const audioEngineRef = useRef(null);

  // Survey state — progressive steps
  const [surveyStep, setSurveyStep] = useState(1); // 1=mood, 2=intention, 3=protocol
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedIntention, setSelectedIntention] = useState(null);
  const [mode, setMode] = useState(null);
  const [duration, setDuration] = useState(30);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  const rec = useMemo(
    () => getRecommendation(selectedMood, selectedIntention),
    [selectedMood, selectedIntention]
  );

  const effectiveMode = mode || rec?.recommended || null;
  const effectivePrompt = rec?.prompt || '';
  const canGenerate = effectiveMode && rec;

  useEffect(() => {
    setMounted(true);
    try {
      const data = sessionStorage.getItem('kosha_current_session');
      if (data) setSessionData(JSON.parse(data));
    } catch { }
  }, []);

  // Auto-save on first load of session
  useEffect(() => {
    if (sessionData && !saved) {
      const sankalpa = extractSankalpa(sessionData.script, sessionData.prompt);
      saveSession({ sankalpa, mode: sessionData.mode, duration: sessionData.duration, prompt: sessionData.prompt, script: sessionData.script });
      setSaved(true);
    }
  }, [sessionData, saved]);

  function handleMoodSelect(id) {
    setSelectedMood(id);
    const guidance = MOOD_GUIDANCE[id];
    if (guidance) setDuration(guidance.duration);
    setTimeout(() => setSurveyStep(2), 300);
  }

  function handleIntentionSelect(id) {
    setSelectedIntention(id);
    setMode(null);
    setTimeout(() => setSurveyStep(3), 300);
  }

  function handleBack() {
    if (surveyStep === 2) {
      setSurveyStep(1);
    } else if (surveyStep === 3) {
      setSurveyStep(2);
    }
  }

  function handleNewSession() {
    sessionStorage.removeItem('kosha_current_session');
    setSessionData(null);
    setSaved(false);
    setSelectedMood(null);
    setSelectedIntention(null);
    setMode(null);
    setDuration(30);
    setError('');
    setHasStartedAudio(false);
    setIsCountingDown(false);
    setCountdownNumber(3);
    setMusicOn(true);
    setVoiceOn(true);
    setTimeLeft(0);
    clearInterval(timerRef.current);
    setSurveyStep(1);
  }

  async function handleGenerate() {
    if (!canGenerate || isGenerating) return;
    setIsGenerating(true);
    setError('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: effectivePrompt, mode: effectiveMode, duration }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Generation failed');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let script = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        script += decoder.decode(value, { stream: true });
      }

      const newSession = {
        script,
        prompt: effectivePrompt,
        mode: effectiveMode,
        duration,
        mood: selectedMood,
        intention: selectedIntention,
        timestamp: Date.now(),
      };
      sessionStorage.setItem('kosha_current_session', JSON.stringify(newSession));
      setSessionData(newSession);
      setSaved(false);
      setIsGenerating(false);
      setHasStartedAudio(false);
      setIsCountingDown(false);
      setCountdownNumber(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err.message);
      setIsGenerating(false);
    }
  }

  const handleStartAudio = useCallback(() => {
    setHasStartedAudio(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error(e));
    }
  }, []);

  // Pre-session countdown effect
  useEffect(() => {
    if (!isCountingDown) return;
    if (countdownNumber > 0) {
      const t = setTimeout(() => setCountdownNumber(prev => prev - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setIsCountingDown(false);
      handleStartAudio();
    }
  }, [isCountingDown, countdownNumber, handleStartAudio]);

  // Timer countdown effect
  useEffect(() => {
    if (hasStartedAudio && sessionData) {
      setTimeLeft(sessionData.duration * 60);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [hasStartedAudio, sessionData]);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (musicOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setMusicOn(prev => !prev);
  }, [musicOn]);

  const toggleVoice = useCallback(() => {
    setVoiceOn(prev => !prev);
  }, []);

  if (!mounted) {
    return <div className="sp-loading"><div className="pulse-loader"><span /><span /><span /></div></div>;
  }

  // ──── PLAYER VIEW ────
  if (sessionData) {
    const formatTime = (seconds) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const pathLabel = sessionData.mode === 'vedic' ? 'Vedic Sage' : 'Bio-Hacker';
    const sessionTitle = sessionData.mode === 'vedic' ? 'Vedic Stillness' : 'Digital Detox Nidra';
    const sessionQuote = sessionData.mode === 'vedic' ? 'Deep Resonance Healing' : 'Deep Theta Synchronization';
    const stages = [];
    let currentStage = null;
    sessionData.script.split('\n').forEach((line) => {
      if (line.startsWith('[') && line.includes(']')) {
        currentStage = { heading: line, lines: [] };
        stages.push(currentStage);
      } else if (line.startsWith('---')) {
        // skip divider
      } else if (line.trim()) {
        if (currentStage) currentStage.lines.push(line);
        else { if (!stages.length) stages.push({ heading: null, lines: [] }); stages[0].lines.push(line); }
      }
    });

    const handlePreStart = () => {
      setIsCountingDown(true);
      setCountdownNumber(3);
    };

    return (
      <div className="sp-page">
        <div className="sp-center">
          {/* Player Section */}
          <div className="sp-player-card">
            <span className="sp-path-chip">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              {pathLabel} · {sessionData.duration} min
            </span>

            {/* Countdown Timer */}
            <div className="sp-countdown">
              <span className="sp-countdown-time">
                {hasStartedAudio ? formatTime(timeLeft) : `${sessionData.duration}:00`}
              </span>
            </div>

            {/* Pulsing Avatar */}
            <div className={`sp-avatar-container ${hasStartedAudio ? 'sp-avatar-pulse' : ''}`}>
              <div className="sp-avatar-glow" />
              <img
                src="/avatar/pose2.png"
                alt="Meditation pose"
                className="sp-avatar-img"
              />
            </div>

            <h2 className="sp-session-title">{sessionTitle}</h2>
            <p className="sp-session-quote">{sessionQuote}</p>

            {/* Hidden audio element for music */}
            <audio
              ref={audioRef}
              loop
              src={`/music/${sessionData.duration}mins.mp3`}
              style={{ display: 'none' }}
            />

            {!hasStartedAudio ? (
              isCountingDown ? (
                <div className="sp-pre-countdown" style={{ margin: 'var(--space-xl) auto', textAlign: 'center' }}>
                  <div className="sp-pre-countdown-number" style={{ fontSize: '3rem', fontWeight: '300', color: 'var(--text-1)' }}>
                    {countdownNumber}
                  </div>
                  <div className="sp-pre-countdown-text" style={{ fontSize: '1rem', color: 'var(--text-2)' }}>
                    Preparing space...
                  </div>
                </div>
              ) : (
                <button
                  className="sp-generate-btn"
                  onClick={handlePreStart}
                  style={{ maxWidth: '300px', margin: 'var(--space-xl) auto' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  Start Session
                </button>
              )
            ) : (
              <div className="sp-toggles-row">
                {/* Music Toggle */}
                <button
                  className={`sp-toggle-btn ${musicOn ? 'active' : ''}`}
                  onClick={toggleMusic}
                  id="toggle-music-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                  <span className="sp-toggle-label">Music</span>
                  <span className={`sp-toggle-indicator ${musicOn ? 'on' : 'off'}`}>{musicOn ? 'ON' : 'OFF'}</span>
                </button>

                {/* Voice Toggle */}
                <button
                  className={`sp-toggle-btn ${voiceOn ? 'active' : ''}`}
                  onClick={toggleVoice}
                  id="toggle-voice-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                  <span className="sp-toggle-label">Voice</span>
                  <span className={`sp-toggle-indicator ${voiceOn ? 'on' : 'off'}`}>{voiceOn ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            )}

            {/* AudioEngine — Deepgram TTS, plays sequentially */}
            {hasStartedAudio && voiceOn && (
              <AudioEngine script={sessionData.script} onEnd={() => { }} autoPlay={true} />
            )}

            <div className="sp-player-actions">
              <button className="sp-action-pill" onClick={handleNewSession}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                New Session
              </button>
            </div>
          </div>

          {/* Session Benefits Card */}
          {sessionData.mood && (
            <div className="sp-benefits-card">
              <h3 className="sp-benefits-title">What This Session Targets</h3>
              <p className="sp-benefits-subtitle">Based on your state and intention — sourced from clinical research.</p>
              <div className="sp-benefits-grid">
                {(BENEFITS_MAP[sessionData.mood] || []).map((b, i) => (
                  <div key={i} className="sp-benefit-item">
                    <span className="sp-benefit-check">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
                {sessionData.intention && (INTENTION_BENEFITS[sessionData.intention] || []).map((b, i) => (
                  <div key={`int-${i}`} className="sp-benefit-item">
                    <span className="sp-benefit-check">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          .sp-page { padding: var(--space-lg) 0 var(--space-4xl); min-height: 100vh; }
          .sp-loading { display: flex; align-items: center; justify-content: center; min-height: 60vh; }
          .sp-center { max-width: 640px; margin: 0 auto; padding: 0 var(--space-lg); }

          /* Player Card */
          .sp-player-card { text-align: center; padding: var(--space-2xl) var(--space-xl); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); margin-bottom: var(--space-xl); }
          .sp-path-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: var(--radius-full); background: var(--bg-glass); border: 1px solid var(--border); font-size: 0.6875rem; font-weight: 700; color: var(--gold); letter-spacing: 0.04em; margin-bottom: var(--space-xl); }

          /* Countdown Timer */
          .sp-countdown { margin-bottom: var(--space-lg); }
          .sp-countdown-time { font-family: var(--font-heading); font-size: 3rem; font-weight: 300; color: var(--text-1); letter-spacing: 0.04em; }

          /* Avatar */
          .sp-avatar-container {
            position: relative;
            width: 240px; height: 240px;
            margin: 0 auto var(--space-xl);
            display: flex; align-items: center; justify-content: center;
            border-radius: 50%;
          }
          .sp-avatar-ring {
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 2px solid rgba(184,132,92,0.2);
            pointer-events: none;
          }
          .sp-avatar-glow {
            position: absolute;
            inset: -30px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(184,132,92,0.15) 0%, rgba(107,143,113,0.08) 40%, transparent 70%);
            pointer-events: none;
          }
          .sp-avatar-img {
            position: relative;
            z-index: 1;
            width: 200px; height: 200px;
            object-fit: contain;
            filter: drop-shadow(0 8px 32px rgba(0,0,0,0.18));
            border-radius: 50%;
          }

          /* Heartbeat pulse animation */
          .sp-avatar-pulse .sp-avatar-img {
            animation: heartbeat 2.4s ease-in-out infinite;
          }
          .sp-avatar-pulse .sp-avatar-glow {
            animation: glowPulse 2.4s ease-in-out infinite;
          }
        

          @keyframes heartbeat {
            0%   { transform: scale(1); }
            14%  { transform: scale(1.08); }
            28%  { transform: scale(1); }
            42%  { transform: scale(1.05); }
            56%  { transform: scale(1); }
            100% { transform: scale(1); }
          }

          @keyframes glowPulse {
            0%   { opacity: 0.5; transform: scale(1); }
            14%  { opacity: 1; transform: scale(1.12); }
            28%  { opacity: 0.5; transform: scale(1); }
            42%  { opacity: 0.8; transform: scale(1.08); }
            56%  { opacity: 0.5; transform: scale(1); }
            100% { opacity: 0.5; transform: scale(1); }
          }

          @keyframes ringPulse {
            0%   { border-color: rgba(184,132,92,0.2); transform: scale(1); }
            14%  { border-color: rgba(184,132,92,0.5); transform: scale(1.06); }
            28%  { border-color: rgba(184,132,92,0.2); transform: scale(1); }
            42%  { border-color: rgba(184,132,92,0.4); transform: scale(1.04); }
            56%  { border-color: rgba(184,132,92,0.2); transform: scale(1); }
            100% { border-color: rgba(184,132,92,0.2); transform: scale(1); }
          }

          .sp-session-title { font-size: 1.375rem; font-weight: 700; color: var(--text-1); margin-bottom: 4px; }
          .sp-session-quote { font-size: 0.875rem; color: var(--text-2); margin-bottom: var(--space-xl); }

          /* Toggle Buttons Row */
          .sp-toggles-row { display: flex; gap: var(--space-md); justify-content: center; margin-bottom: var(--space-xl); }
          .sp-toggle-btn {
            display: flex; align-items: center; gap: 10px;
            padding: 12px 22px; border-radius: var(--radius-full);
            background: var(--bg-raised); border: 1px solid var(--border);
            font-size: 0.875rem; font-weight: 600; color: var(--text-3);
            cursor: pointer; transition: all 300ms ease;
          }
          .sp-toggle-btn.active {
            background: rgba(107,143,113,0.1); border-color: var(--steel);
            color: var(--text-1);
          }
          .sp-toggle-btn.active svg { color: var(--steel); }
          .sp-toggle-label { font-size: 0.875rem; }
          .sp-toggle-indicator {
            font-size: 0.625rem; font-weight: 800; letter-spacing: 0.06em;
            padding: 2px 8px; border-radius: var(--radius-full);
          }
          .sp-toggle-indicator.on {
            background: rgba(107,143,113,0.15); color: var(--steel);
          }
          .sp-toggle-indicator.off {
            background: var(--bg-surface); color: var(--text-3);
          }

          .sp-player-actions { display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-sm); }
          .sp-action-pill { display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px; border-radius: var(--radius-full); background: var(--bg-glass); border: 1px solid var(--border); font-size: 0.8125rem; font-weight: 600; color: var(--text-2); cursor: pointer; }
          .sp-action-pill:disabled { opacity: 0.5; cursor: not-allowed; }

          /* Script Card */
          .sp-script-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: var(--space-xl); }
          .sp-script-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-xl); }
          .sp-script-header h3 { font-size: 1.0625rem; font-weight: 700; }
          .sp-live-tag { font-size: 0.5625rem; font-weight: 700; color: var(--steel); letter-spacing: 0.08em; padding: 3px 10px; border: 1px solid var(--steel-glow); border-radius: var(--radius-full); }
          .sp-script-body { max-height: 500px; overflow-y: auto; }
          .sp-script-stage { margin-bottom: var(--space-xl); }
          .sp-stage-label { display: flex; align-items: center; gap: var(--space-sm); margin-bottom: var(--space-md); padding-bottom: var(--space-sm); border-bottom: 1px solid var(--border); }
          .sp-stage-time { font-size: 0.6875rem; font-weight: 600; color: var(--gold); }
          .sp-stage-sep { color: var(--text-3); font-size: 0.75rem; }
          .sp-stage-name { font-size: 0.6875rem; font-weight: 700; color: var(--gold); letter-spacing: 0.06em; }
          .sp-script-line { font-size: 0.9375rem; color: var(--text-2); line-height: 1.8; margin-bottom: var(--space-sm); }

          /* Benefits Card */
          .sp-benefits-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: var(--space-xl); margin-top: var(--space-xl); }
          .sp-benefits-title { font-size: 1.0625rem; font-weight: 700; margin-bottom: 4px; }
          .sp-benefits-subtitle { font-size: 0.8125rem; color: var(--text-3); margin-bottom: var(--space-lg); line-height: 1.5; }
          .sp-benefits-grid { display: flex; flex-direction: column; gap: var(--space-sm); }
          .sp-benefit-item { display: flex; align-items: flex-start; gap: var(--space-sm); font-size: 0.875rem; color: var(--text-2); line-height: 1.5; }
          .sp-benefit-check { color: var(--gold); font-weight: 700; flex-shrink: 0; margin-top: 1px; }

          @media (max-width: 768px) {
            .sp-avatar-container { width: 200px; height: 200px; }
            .sp-avatar-img { width: 170px; height: 170px; }
            .sp-countdown-time { font-size: 2.5rem; }
            .sp-player-actions { flex-direction: column; align-items: stretch; }
            .sp-action-pill { justify-content: center; }
            .sp-toggles-row { flex-direction: column; align-items: stretch; }
            .sp-toggle-btn { justify-content: center; }
          }
        `}</style>
      </div>
    );
  }

  // ──── SURVEY VIEW — Progressive Steps ────
  const selectedMoodObj = MOODS.find(m => m.id === selectedMood);
  const selectedIntentionObj = INTENTIONS.find(i => i.id === selectedIntention);

  return (
    <div className="sp-page">
      <div className="sp-center">
        {/* Progress Bar */}
        <div className="sp-progress">
          {[1, 2, 3].map(s => (
            <div key={s} className={`sp-progress-dot ${surveyStep >= s ? 'active' : ''} ${surveyStep === s ? 'current' : ''}`} />
          ))}
        </div>

        {/* Back Button */}
        {surveyStep > 1 && (
          <button className="sp-back" onClick={handleBack}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><polyline points="12 19 5 12 12 5" /></svg>
            Back
          </button>
        )}

        {/* ──── STEP 1: Mood ──── */}
        {surveyStep === 1 && (
          <div className="sp-step">
            <div className="sp-step-header">
              <span className="sp-step-label">STEP 1 OF 3</span>
              <h1 className="sp-step-title">How are you feeling?</h1>
              <p className="sp-step-desc">Honesty is the first step to alignment. Select your current state.</p>
            </div>
            <div className="sp-mood-grid">
              {MOODS.map((m) => (
                <button
                  key={m.id}
                  className={`sp-mood-card ${selectedMood === m.id ? 'selected' : ''}`}
                  onClick={() => handleMoodSelect(m.id)}
                  type="button"
                  id={`mood-${m.id}`}
                >
                  <span className="sp-mood-emoji" style={{ color: m.color, backgroundColor: `${m.color}15` }}>
                    <m.icon size={26} strokeWidth={1.5} />
                  </span>
                  <div className="sp-mood-text">
                    <h4 className="sp-mood-name">{m.label}</h4>
                    <p className="sp-mood-desc">{m.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* What to Expect */}
            <div className="sp-info-section">
              <button className="sp-info-toggle" onClick={() => setShowInfo(!showInfo)} type="button">
                <span className="sp-info-toggle-icon">{showInfo ? '▾' : '▸'}</span>
                <span>What happens in a session?</span>
              </button>
              {showInfo && (
                <div className="sp-info-content">
                  <p className="sp-info-intro">Every Yoga Nidra session guides you through four transformative phases, each designed to take you deeper into conscious rest.</p>
                  <div className="sp-phases-grid">
                    {SESSION_PHASES.map((phase, i) => (
                      <div key={i} className="sp-phase-card">
                        <span className="sp-phase-icon">{phase.icon}</span>
                        <h5 className="sp-phase-name">{phase.name}</h5>
                        <p className="sp-phase-desc">{phase.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="sp-info-note">Even 10-minute sessions create cumulative benefits. Consistency matters more than duration.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ──── STEP 2: Intention ──── */}
        {surveyStep === 2 && (
          <div className="sp-step">
            <div className="sp-step-header">
              <span className="sp-step-label">STEP 2 OF 3</span>
              <h1 className="sp-step-title">Set your intention</h1>
              <p className="sp-step-desc">Where do you want this session to take you?</p>
            </div>

            {/* Selected mood recap */}
            {selectedMoodObj && (
              <div className="sp-recap">
                <span className="sp-recap-icon" style={{ color: selectedMoodObj.color }}>
                  <selectedMoodObj.icon size={18} strokeWidth={1.5} />
                </span>
                <span className="sp-recap-text">Feeling <strong>{selectedMoodObj.label}</strong></span>
              </div>
            )}

            {/* Mood-Aware Guidance */}
            {selectedMood && MOOD_GUIDANCE[selectedMood] && (
              <div className="sp-guidance-card">
                <div className="sp-guidance-header">
                  <span className="sp-guidance-icon">💡</span>
                  <span className="sp-guidance-title">Guidance for your state</span>
                </div>
                <p className="sp-guidance-tip">{MOOD_GUIDANCE[selectedMood].tip}</p>
                <p className="sp-guidance-insight">{MOOD_GUIDANCE[selectedMood].insight}</p>
              </div>
            )}

            <div className="sp-intention-grid">
              {INTENTIONS.map((i) => {
                const isRecommended = selectedMood && MOOD_GUIDANCE[selectedMood]?.recommended.includes(i.id);
                return (
                  <button
                    key={i.id}
                    className={`sp-intention-pill ${selectedIntention === i.id ? 'selected' : ''} ${isRecommended ? 'recommended' : ''}`}
                    onClick={() => handleIntentionSelect(i.id)}
                    type="button"
                    id={`intention-${i.id}`}
                  >
                    <span className="sp-intention-icon"><i.icon size={22} strokeWidth={1.5} /></span>
                    <span className="sp-intention-label-wrap">
                      {i.label}
                      {isRecommended && <span className="sp-rec-badge">Recommended</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ──── STEP 3: Protocol ──── */}
        {surveyStep === 3 && (
          <div className="sp-step">
            <div className="sp-step-header">
              <span className="sp-step-label">STEP 3 OF 3</span>
              <h1 className="sp-step-title">Choose your protocol</h1>
              <p className="sp-step-desc">Our engine has analyzed your inputs. Select your methodology and duration.</p>
            </div>

            {/* Recap */}
            {selectedMoodObj && selectedIntentionObj && (
              <div className="sp-recap">
                <span className="sp-recap-icon" style={{ color: selectedMoodObj.color }}>
                  <selectedMoodObj.icon size={16} strokeWidth={1.5} />
                </span>
                <span className="sp-recap-text">{selectedMoodObj.label}</span>
                <span className="sp-recap-arrow">→</span>
                <span className="sp-recap-icon" style={{ color: 'var(--text-1)' }}>
                  <selectedIntentionObj.icon size={16} strokeWidth={1.5} />
                </span>
                <span className="sp-recap-text">{selectedIntentionObj.label}</span>
              </div>
            )}

            {/* Duration Selector */}
            <div className="sp-dur-section">
              <span className="sp-dur-label">Select duration</span>
              <div className="sp-dur-row">
                {DURATIONS.map((d) => (
                  <button
                    key={d.value}
                    className={`sp-dur-pill ${duration === d.value ? 'active' : ''}`}
                    onClick={() => setDuration(d.value)}
                    type="button"
                    id={`duration-${d.value}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Cards */}
            <div className="sp-mode-section">
              <span className="sp-dur-label">Select methodology</span>
              <div className="sp-mode-grid">
                <ModeCard mode="vedic" selected={effectiveMode === 'vedic'} onSelect={(m) => setMode(m)} recommended={rec?.recommended === 'vedic'} />
                <ModeCard mode="biohacker" selected={effectiveMode === 'biohacker'} onSelect={(m) => setMode(m)} recommended={rec?.recommended === 'biohacker'} />
              </div>
            </div>

            {/* Pre-Practice Checklist */}
            <div className="sp-info-section">
              <button className="sp-info-toggle" onClick={() => setShowChecklist(!showChecklist)} type="button">
                <span className="sp-info-toggle-icon">{showChecklist ? '▾' : '▸'}</span>
                <span>Pre-practice checklist</span>
              </button>
              {showChecklist && (
                <div className="sp-info-content">
                  <ul className="sp-checklist">
                    {PREP_CHECKLIST.map((item, i) => (
                      <li key={i} className="sp-checklist-item">
                        <span className="sp-check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Error */}
            {error && <div className="sp-error">⚠️ {error}</div>}

            {/* Generate CTA */}
            <button className="sp-generate-btn" onClick={handleGenerate} disabled={!canGenerate || isGenerating} id="generate-session-btn">
              {isGenerating ? (
                <><div className="pulse-loader"><span /><span /><span /></div>Generating…</>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  Begin Practice
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .sp-page { padding: var(--space-xl) 0 var(--space-4xl); min-height: 100vh; }
        .sp-loading { display: flex; align-items: center; justify-content: center; min-height: 60vh; }
        .sp-center { max-width: 720px; margin: 0 auto; padding: 0 var(--space-lg); }

        /* Progress dots */
        .sp-progress { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: var(--space-2xl); }
        .sp-progress-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border); transition: all 400ms ease; }
        .sp-progress-dot.active { background: var(--gold); }
        .sp-progress-dot.current { width: 28px; border-radius: 4px; }

        /* Back */
        .sp-back { display: inline-flex; align-items: center; gap: 6px; padding: 0; margin-bottom: var(--space-xl); font-size: 0.875rem; font-weight: 500; color: var(--text-2); background: none; border: none; cursor: pointer; }

        /* Step container */
        .sp-step { animation: sp-fade-in 400ms ease; }
        @keyframes sp-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        /* Step header */
        .sp-step-header { text-align: center; margin-bottom: var(--space-2xl); }
        .sp-step-label { display: block; font-size: 0.6875rem; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: var(--space-sm); }
        .sp-step-title { font-size: 2.25rem; font-weight: 800; line-height: 1.15; color: var(--text-1); margin-bottom: var(--space-sm); }
        .sp-step-desc { font-size: 0.9375rem; color: var(--text-2); line-height: 1.6; }

        /* Recap chip */
        .sp-recap { display: flex; align-items: center; justify-content: center; gap: var(--space-sm); padding: 10px var(--space-lg); margin-bottom: var(--space-xl); background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--radius-full); }
        .sp-recap-icon { display: flex; align-items: center; justify-content: center; }
        .sp-recap-text { font-size: 0.8125rem; color: var(--text-2); }
        .sp-recap-text strong { color: var(--text-1); }
        .sp-recap-arrow { color: var(--text-3); font-size: 0.75rem; }

        /* ——— MOOD GRID ——— */
        .sp-mood-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .sp-mood-card { text-align: left; padding: var(--space-md) var(--space-lg); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); cursor: pointer; transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: row; align-items: center; gap: var(--space-md); }
        .sp-mood-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); border-color: rgba(123,167,194,0.3); }
        .sp-mood-card.selected { border-color: var(--steel); background: var(--bg-raised); box-shadow: 0 0 0 2px var(--steel-glow), 0 12px 24px rgba(0,0,0,0.08); transform: translateY(-3px); }
        .sp-mood-emoji { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0; transition: transform 300ms ease; }
        .sp-mood-card:hover .sp-mood-emoji, .sp-mood-card.selected .sp-mood-emoji { transform: scale(1.08); }
        .sp-mood-text { display: flex; flex-direction: column; flex: 1; justify-content: center; }
        .sp-mood-name { font-size: 1.0625rem; font-weight: 700; color: var(--text-1); margin-bottom: 2px; }
        .sp-mood-desc { font-size: 0.8125rem; color: var(--text-3); line-height: 1.4; }

        /* ——— INTENTION GRID ——— */
        .sp-intention-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .sp-intention-pill { display: flex; align-items: center; gap: var(--space-md); text-align: left; padding: var(--space-md) var(--space-lg); font-size: 0.9375rem; font-weight: 600; color: var(--text-2); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-xl); cursor: pointer; transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1); min-height: 68px; }
        .sp-intention-pill:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.05); color: var(--text-1); border-color: rgba(123,167,194,0.3); }
        .sp-intention-pill.selected { color: var(--text-1); border-color: var(--steel); background: var(--bg-raised); box-shadow: 0 0 0 2px var(--steel-glow), 0 8px 16px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .sp-intention-pill.recommended { border-color: rgba(184,134,11,0.3); }
        .sp-intention-icon { opacity: 0.6; flex-shrink: 0; transition: color 300ms ease, opacity 300ms ease; }
        .sp-intention-pill:hover .sp-intention-icon, .sp-intention-pill.selected .sp-intention-icon { color: var(--steel); opacity: 1; }
        .sp-intention-label-wrap { display: flex; flex-direction: column; gap: 2px; }
        .sp-rec-badge { font-size: 0.625rem; font-weight: 700; color: var(--gold); letter-spacing: 0.04em; text-transform: uppercase; }

        /* ——— GUIDANCE CARD ——— */
        .sp-guidance-card { background: rgba(184,134,11,0.04); border: 1px solid rgba(184,134,11,0.15); border-radius: var(--radius-lg); padding: var(--space-lg); margin-bottom: var(--space-xl); }
        .sp-guidance-header { display: flex; align-items: center; gap: var(--space-sm); margin-bottom: var(--space-md); }
        .sp-guidance-icon { font-size: 1.125rem; }
        .sp-guidance-title { font-size: 0.75rem; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.06em; }
        .sp-guidance-tip { font-size: 0.875rem; color: var(--text-1); line-height: 1.6; margin-bottom: var(--space-sm); font-weight: 500; }
        .sp-guidance-insight { font-size: 0.8125rem; color: var(--text-3); line-height: 1.6; font-style: italic; }

        /* ——— INFO SECTION (expandable) ——— */
        .sp-info-section { margin-top: var(--space-xl); border-top: 1px solid var(--border); padding-top: var(--space-lg); }
        .sp-info-toggle { display: flex; align-items: center; gap: var(--space-sm); background: none; border: none; padding: 0; font-size: 0.875rem; font-weight: 600; color: var(--text-2); cursor: pointer; width: 100%; text-align: left; }
        .sp-info-toggle-icon { font-size: 0.75rem; color: var(--text-3); }
        .sp-info-content { margin-top: var(--space-lg); animation: sp-fade-in 300ms ease; }
        .sp-info-intro { font-size: 0.875rem; color: var(--text-2); line-height: 1.6; margin-bottom: var(--space-lg); }
        .sp-info-note { font-size: 0.8125rem; color: var(--text-3); line-height: 1.5; margin-top: var(--space-lg); font-style: italic; text-align: center; }

        /* ——— PHASES GRID ——— */
        .sp-phases-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
        .sp-phase-card { padding: var(--space-lg); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); }
        .sp-phase-icon { font-size: 1.25rem; display: block; margin-bottom: var(--space-sm); }
        .sp-phase-name { font-size: 0.8125rem; font-weight: 700; color: var(--text-1); margin-bottom: 4px; }
        .sp-phase-desc { font-size: 0.75rem; color: var(--text-3); line-height: 1.5; }

        /* ——— CHECKLIST ——— */
        .sp-checklist { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-sm); }
        .sp-checklist-item { display: flex; align-items: flex-start; gap: var(--space-sm); font-size: 0.875rem; color: var(--text-2); line-height: 1.5; }
        .sp-check-icon { color: var(--gold); font-weight: 700; flex-shrink: 0; margin-top: 1px; }

        /* ——— DURATION ——— */
        .sp-dur-section { margin-bottom: var(--space-xl); }
        .sp-dur-label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: var(--space-md); }
        .sp-dur-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); }
        .sp-dur-pill { padding: 14px var(--space-lg); border-radius: var(--radius-lg); font-size: 1rem; font-weight: 600; color: var(--text-2); border: 1px solid var(--border); background: var(--bg-card); cursor: pointer; text-align: center; transition: all 300ms ease; }
        .sp-dur-pill.active { background: var(--gold); border-color: var(--gold); color: white; }

        /* ——— MODE ——— */
        .sp-mode-section { margin-bottom: var(--space-xl); }
        .sp-mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }

        /* ——— ERROR ——— */
        .sp-error { padding: var(--space-sm) var(--space-md); background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.25); border-radius: var(--radius-md); color: #ef4444; font-size: 0.8125rem; margin-bottom: var(--space-md); text-align: center; }

        /* ——— GENERATE CTA ——— */
        .sp-generate-btn { display: flex; align-items: center; justify-content: center; gap: var(--space-sm); width: 100%; padding: 18px var(--space-xl); border-radius: var(--radius-xl); font-weight: 700; font-size: 1.0625rem; background: linear-gradient(135deg, var(--gold), var(--gold-dark, #b8860b)); color: white; cursor: pointer; transition: all 300ms ease; border: none; box-shadow: 0 4px 24px rgba(184,134,11,0.2); letter-spacing: 0.01em; }
        .sp-generate-btn:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }

        @media (max-width: 640px) {
          .sp-step-title { font-size: 1.5rem; }
          .sp-mood-grid { grid-template-columns: 1fr; gap: var(--space-sm); }
          .sp-intention-grid { grid-template-columns: 1fr; gap: var(--space-sm); }
          .sp-mode-grid { grid-template-columns: 1fr; }
          .sp-phases-grid { grid-template-columns: 1fr; }
          .sp-guidance-card { padding: var(--space-md); }
        }
      `}</style>
    </div>
  );
}
