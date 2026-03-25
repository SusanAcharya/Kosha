'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * AudioEngine — handles Web Speech API TTS and Web Audio API binaural beats.
 * 
 * Props:
 *  - script: string — the Yoga Nidra script text to narrate
 *  - onProgress: (fraction: number) => void
 *  - onEnd: () => void
 */
export default function AudioEngine({ script, onProgress, onEnd }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [binauralOn, setBinauralOn] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [speechSupported, setSpeechSupported] = useState(true);

  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const osc1Ref = useRef(null);
  const osc2Ref = useRef(null);
  const utteranceRef = useRef(null);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const estimatedDurRef = useRef(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.speechSynthesis) {
      setSpeechSupported(false);
    }
    return () => {
      stopAll();
    };
  }, []);

  const startBinauralBeats = useCallback(() => {
    if (!binauralOn) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      audioCtxRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.value = volume * 0.15;
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      // Left ear: 200Hz, Right ear: 206Hz → 6Hz theta binaural beat
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 200;
      const panL = ctx.createStereoPanner();
      panL.pan.value = -1;
      osc1.connect(panL).connect(gain);
      osc1.start();
      osc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.value = 206;
      const panR = ctx.createStereoPanner();
      panR.pan.value = 1;
      osc2.connect(panR).connect(gain);
      osc2.start();
      osc2Ref.current = osc2;
    } catch (e) {
      console.warn('Binaural beats not supported:', e);
    }
  }, [binauralOn, volume]);

  const stopBinaural = useCallback(() => {
    try {
      osc1Ref.current?.stop();
      osc2Ref.current?.stop();
      audioCtxRef.current?.close();
    } catch (e) { /* ignore */ }
    osc1Ref.current = null;
    osc2Ref.current = null;
    audioCtxRef.current = null;
    gainNodeRef.current = null;
  }, []);

  const stopAll = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    stopBinaural();
    cancelAnimationFrame(animFrameRef.current);
    setIsPlaying(false);
    setIsPaused(false);
  }, [stopBinaural]);

  const updateProgress = useCallback(() => {
    if (!startTimeRef.current || !estimatedDurRef.current) return;
    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const frac = Math.min(elapsed / estimatedDurRef.current, 1);
    setProgress(frac);
    onProgress?.(frac);
    if (frac < 1) {
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [onProgress]);

  const play = useCallback(() => {
    if (!script || !speechSupported) return;

    // Cancel any existing
    window.speechSynthesis.cancel();
    stopBinaural();

    const utterance = new SpeechSynthesisUtterance(script);
    utterance.rate = 0.85;
    utterance.pitch = 0.9;
    utterance.volume = 1;

    // Try to find a good voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        v.name.includes('Samantha') ||
        v.name.includes('Karen') ||
        v.name.includes('Daniel') ||
        v.name.includes('Google UK English Female')
    );
    if (preferred) utterance.voice = preferred;

    // Estimate duration: ~140 words per minute at 0.85 rate
    const wordCount = script.split(/\s+/).length;
    estimatedDurRef.current = (wordCount / (140 * 0.85)) * 60;
    startTimeRef.current = Date.now();

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(1);
      stopBinaural();
      onEnd?.();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    startBinauralBeats();

    setIsPlaying(true);
    setIsPaused(false);
    updateProgress();
  }, [script, speechSupported, startBinauralBeats, stopBinaural, updateProgress, onEnd]);

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.pause();
    }
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.resume();
    }
    setIsPaused(false);
  }, []);

  const stop = useCallback(() => {
    stopAll();
    setProgress(0);
  }, [stopAll]);

  const toggleBinaural = useCallback(() => {
    if (binauralOn) {
      stopBinaural();
    } else if (isPlaying) {
      startBinauralBeats();
    }
    setBinauralOn(!binauralOn);
  }, [binauralOn, isPlaying, startBinauralBeats, stopBinaural]);

  const handleVolumeChange = useCallback((e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = val * 0.15;
    }
  }, []);

  const progressPercent = Math.round(progress * 100);
  const elapsed = estimatedDurRef.current
    ? Math.round((progress * estimatedDurRef.current) / 60)
    : 0;
  const total = estimatedDurRef.current
    ? Math.round(estimatedDurRef.current / 60)
    : 0;

  return (
    <div className="audio-engine">
      {!speechSupported && (
        <div className="audio-unsupported">
          Your browser does not support speech synthesis. Please try Chrome or Safari.
        </div>
      )}

      {/* Progress bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
      <div className="progress-time">
        <span>{elapsed} min</span>
        <span>{total} min</span>
      </div>

      {/* Controls */}
      <div className="audio-controls">
        {!isPlaying ? (
          <button className="ctrl-btn ctrl-play" onClick={play} disabled={!script || !speechSupported} id="audio-play-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        ) : isPaused ? (
          <button className="ctrl-btn ctrl-play" onClick={resume} id="audio-resume-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        ) : (
          <button className="ctrl-btn ctrl-pause" onClick={pause} id="audio-pause-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          </button>
        )}

        <button className="ctrl-btn ctrl-stop" onClick={stop} disabled={!isPlaying} id="audio-stop-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="6" width="12" height="12" rx="2" />
          </svg>
        </button>

        <div className="ctrl-divider" />

        <button
          className={`ctrl-btn ctrl-binaural ${binauralOn ? 'active' : ''}`}
          onClick={toggleBinaural}
          title="Toggle binaural beats"
          id="binaural-toggle-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 12c0-3.5 3-6.5 6-8m8 0c3 1.5 6 4.5 6 8s-3 6.5-6 8m-8 0c-3-1.5-6-4.5-6-8" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
          <span className="ctrl-label">Theta</span>
        </button>

        <div className="volume-control">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="volume-icon">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            id="volume-slider"
          />
        </div>
      </div>

      <style jsx>{`
        .audio-engine {
          width: 100%;
        }

        .audio-unsupported {
          padding: var(--space-md);
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--radius-md);
          color: #ef4444;
          font-size: 0.875rem;
          margin-bottom: var(--space-md);
          text-align: center;
        }

        .progress-track {
          width: 100%;
          height: 4px;
          background: var(--color-bg-glass);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: var(--space-sm);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
          border-radius: 2px;
          transition: width 0.5s linear;
        }

        .progress-time {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-md);
        }

        .audio-controls {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .ctrl-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: var(--space-sm);
          border-radius: var(--radius-full);
          background: var(--color-bg-glass);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          transition: all var(--transition-base);
          cursor: pointer;
        }

        .ctrl-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .ctrl-play {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--steel), var(--steel-dim));
          border: none;
          color: white;
        }

        .ctrl-binaural {
          padding: var(--space-sm) var(--space-md);
        }

        .ctrl-binaural.active {
          background: rgba(201, 168, 76, 0.15);
          border-color: var(--color-accent-secondary);
          color: var(--color-accent-secondary);
        }

        .ctrl-label {
          font-size: 0.75rem;
          font-weight: 600;
        }

        .ctrl-divider {
          width: 1px;
          height: 24px;
          background: var(--color-border);
          margin: 0 var(--space-xs);
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-left: auto;
        }

        .volume-icon {
          color: var(--color-text-muted);
          flex-shrink: 0;
        }

        .volume-slider {
          -webkit-appearance: none;
          width: 80px;
          height: 4px;
          background: var(--color-bg-glass);
          border-radius: 2px;
          outline: none;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--color-accent-primary);
          cursor: pointer;
          border: 2px solid var(--color-bg-deep);
        }

        @media (max-width: 768px) {
          .audio-controls {
            flex-wrap: wrap;
          }
          .volume-control {
            width: 100%;
            margin-left: 0;
            margin-top: var(--space-sm);
          }
          .volume-slider {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
}
