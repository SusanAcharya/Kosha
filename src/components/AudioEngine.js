'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * AudioEngine — Deepgram TTS with sequential block playback.
 * 
 * Parses script into text blocks and pause blocks, then plays them
 * one by one: speaks a block via Deepgram, waits for it to finish,
 * then waits the silence duration, then speaks the next block.
 *
 * Props:
 *  - script: string — the Yoga Nidra script text
 *  - onEnd: () => void
 *  - autoPlay: boolean — start playing immediately
 */
export default function AudioEngine({ script, onEnd, autoPlay, isMuted = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(-1);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const [error, setError] = useState(null);

  const audioRef = useRef(null);
  const blocksRef = useRef([]);
  const blockIndexRef = useRef(0);
  const isPlayingRef = useRef(false);
  const pauseTimerRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Parse script into blocks on mount
  useEffect(() => {
    if (!script) return;
    const parsed = parseScript(script);
    blocksRef.current = parsed;
    setTotalBlocks(parsed.length);
  }, [script]);

  // Auto-play
  useEffect(() => {
    if (autoPlay && script && blocksRef.current.length > 0) {
      const timer = setTimeout(() => play(), 600);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, script]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, []);

  // Update muted state if it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  function parseScript(text) {
    const blocks = [];
    let currentText = '';

    function flushText() {
      if (!currentText.trim()) return;

      // Split into sentences to allow explicit longer pauses between them.
      // Match sentence-ending punctuation followed by a space and a capital letter or quote.
      const sentences = currentText.trim().replace(/([.?!])\s+(?=[A-Z"'])/g, "$1|SPLIT|").split("|SPLIT|");

      for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].trim();
        if (sentence) {
          blocks.push({ type: 'text', content: sentence });
          // Add a longer explicitly controlled pause after each sentence
          if (i < sentences.length - 1) {
            blocks.push({ type: 'pause', durationMS: 4500 });
          }
        }
      }
      currentText = '';
    }

    const lines = text.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();

      // Stage headers — not spoken, create a pause
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        flushText();
        blocks.push({ type: 'pause', durationMS: 3000 });
        continue;
      }

      // Silence markers
      if (trimmed.startsWith('...') && trimmed.endsWith('...')) {
        flushText();
        let durationMs = 30000;
        if (trimmed.includes('5 seconds')) durationMs = 5000;
        else if (trimmed.includes('10 seconds')) durationMs = 10000;
        else if (trimmed.includes('15 seconds')) durationMs = 15000;
        else if (trimmed.includes('20 seconds')) durationMs = 20000;
        else if (trimmed.includes('30 seconds')) durationMs = 30000;
        else if (trimmed.includes('45 seconds')) durationMs = 45000;
        else if (trimmed.includes('1 minute')) durationMs = 60000;
        else if (trimmed.includes('2 minutes')) durationMs = 2 * 60 * 1000;
        else if (trimmed.includes('3 minutes')) durationMs = 3 * 60 * 1000;
        else if (trimmed.includes('5 minutes')) durationMs = 5 * 60 * 1000;
        else if (trimmed.includes('Extended silence')) durationMs = 2 * 60 * 1000;
        blocks.push({ type: 'pause', durationMS: durationMs });
        continue;
      }

      // Empty line — paragraph break (natural pause)
      if (trimmed === '') {
        if (currentText.trim()) {
          flushText();
          blocks.push({ type: 'pause', durationMS: 6000 });
        }
        continue;
      }

      // Regular text — accumulate
      currentText += trimmed + ' ';
    }

    flushText();

    return blocks;
  }

  async function fetchTTSAudio(text) {
    abortControllerRef.current = new AbortController();

    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
      signal: abortControllerRef.current.signal,
    });

    if (!res.ok) {
      throw new Error(`TTS API error: ${res.status}`);
    }

    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  function playAudioUrl(url) {
    return new Promise((resolve, reject) => {
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }
      const audio = audioRef.current;
      audio.src = url;
      audio.muted = isMuted;
      audio.defaultPlaybackRate = 0.75;
      audio.playbackRate = 0.75; // Slow down TTS by 25%
      audio.onended = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      audio.onerror = (e) => {
        URL.revokeObjectURL(url);
        reject(new Error('Audio playback failed'));
      };
      audio.play().catch(reject);
    });
  }

  function waitMs(ms) {
    return new Promise((resolve) => {
      pauseTimerRef.current = setTimeout(resolve, ms);
    });
  }

  const play = useCallback(async () => {
    if (isPlayingRef.current) return;

    setIsPlaying(true);
    setError(null);
    isPlayingRef.current = true;
    blockIndexRef.current = 0;

    const blocks = blocksRef.current;

    for (let i = 0; i < blocks.length; i++) {
      if (!isPlayingRef.current) break;

      blockIndexRef.current = i;
      setCurrentBlockIndex(i);
      const block = blocks[i];

      try {
        if (block.type === 'text') {
          const audioUrl = await fetchTTSAudio(block.content);
          if (!isPlayingRef.current) {
            URL.revokeObjectURL(audioUrl);
            break;
          }
          await playAudioUrl(audioUrl);
        } else if (block.type === 'pause') {
          await waitMs(block.durationMS);
        }
      } catch (err) {
        if (err.name === 'AbortError') break;
        console.error('AudioEngine block error:', err);
        setError(err.message);
        // Continue to next block on error
      }
    }

    setIsPlaying(false);
    isPlayingRef.current = false;
    setCurrentBlockIndex(-1);
    onEnd?.();
  }, [onEnd]);

  const stopAll = useCallback(() => {
    isPlayingRef.current = false;
    clearTimeout(pauseTimerRef.current);
    abortControllerRef.current?.abort();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setIsPlaying(false);
    setCurrentBlockIndex(-1);
  }, []);

  // This component is rendered hidden (display: none) by the session page
  // It just manages audio playback, no visible UI
  return null;
}
