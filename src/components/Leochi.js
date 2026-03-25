'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/* ──── Tutorial Steps ──── */
const HOME_STEPS = [
  {
    target: '#heading-yoga-nidra',
    scroll: '#section-yoga-nidra',
    title: 'What is Yoga Nidra?',
    body: 'The ancient sleep-based meditation that Kosha is built on — rooted in Tantric tradition and practiced for over 4,000 years.',
    position: 'bottom',
  },
  {
    target: '#heading-preparation',
    scroll: '#section-preparation',
    title: 'Preparing for Practice',
    body: 'Four steps to set the stage for a transformative session — from sacred space to setting your Sankalpa (intention).',
    position: 'bottom',
  },
  {
    target: '#heading-two-lenses',
    scroll: '#section-two-lenses',
    title: 'The Two Lenses',
    body: 'Explore two philosophical frameworks — the ancient Vedic tradition and modern Bio-Hacker science. Try switching tabs!',
    position: 'bottom',
  },
  {
    target: '#heading-bridge',
    scroll: '#section-bridge',
    title: 'The Bridge',
    body: 'See how these two philosophies compare side by side. Different languages, same destination.',
    position: 'bottom',
  },
  {
    target: '#heading-8-stages',
    scroll: '#section-8-stages',
    title: '8 Stages of Reprogramming',
    body: 'Every session follows this proven 8-stage structure — from sense withdrawal to system reboot.',
    position: 'bottom',
  },
  {
    target: '#heading-how-it-works',
    scroll: '#section-how-it-works',
    title: 'How It Works',
    body: 'Three simple steps: tell us your state, choose your path, and listen to your personalized session.',
    position: 'bottom',
  },
  {
    target: '#heading-science',
    scroll: '#section-science',
    title: 'The Science of Rest',
    body: 'Research-backed benefits across body, emotions, and mind — from PTSD reduction to enhanced creativity.',
    position: 'bottom',
  },
  {
    target: '#heading-cta',
    scroll: '#section-cta',
    title: 'Begin Your Session!',
    body: 'Ready? Click this button to start your first personalized Yoga Nidra experience!',
    position: 'top',
    action: 'click',
  },
];

const SESSION_STEPS = [
  {
    target: '.sp-step-header',
    title: 'Step 1: Select your mood',
    body: 'Start by honestly selecting how you\'re feeling right now. This helps our engine calibrate your session.',
    position: 'bottom',
  },
  {
    target: '.sp-mood-grid',
    title: 'Mood Cards',
    body: 'Tap any card that matches your current state. The session will be tailored to where you are right now.',
    position: 'bottom',
    action: 'interact',
  },
];

export default function Leochi() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [tutorialActive, setTutorialActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  const isHomePage = pathname === '/';
  const isSessionPage = pathname === '/session';
  const steps = isHomePage ? HOME_STEPS : isSessionPage ? SESSION_STEPS : [];

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Dismiss bubble after 6 seconds
  useEffect(() => {
    if (showBubble && !tutorialActive) {
      const t = setTimeout(() => setShowBubble(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showBubble, tutorialActive]);

  // Scroll to the target heading on step change
  useEffect(() => {
    if (!tutorialActive || !steps[currentStep]) return;
    const scrollTarget = steps[currentStep]?.scroll || steps[currentStep]?.target;
    const el = document.querySelector(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [tutorialActive, currentStep, steps]);

  function startTutorial() {
    if (steps.length === 0) return;
    setTutorialActive(true);
    setCurrentStep(0);
    setShowBubble(false);
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      endTutorial();
    }
  }

  function prevStep() {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  }

  function endTutorial() {
    setTutorialActive(false);
    setCurrentStep(0);
  }

  function handleCTAClick() {
    endTutorial();
    router.push('/session');
  }

  if (!mounted) return null;

  const step = steps[currentStep];

  return (
    <>
      {/* ── Tutorial Tooltip (fixed near avatar) ── */}
      {tutorialActive && step && (
        <div className="leo-tooltip-fixed">
          <div className="leo-tooltip-avatar">
            <img src="/avatar/pose1.png" alt="Leochi" />
          </div>
          <div className="leo-tooltip-content">
            <div className="leo-tooltip-top">
              <span className="leo-tooltip-step">{currentStep + 1} / {steps.length}</span>
              <button className="leo-tooltip-close" onClick={endTutorial} aria-label="Close tutorial">✕</button>
            </div>
            <h4 className="leo-tooltip-title">{step?.title}</h4>
            <p className="leo-tooltip-body">{step?.body}</p>
            <div className="leo-tooltip-actions">
              {currentStep > 0 && (
                <button className="leo-btn-back" onClick={prevStep}>Back</button>
              )}
              {step?.action === 'click' ? (
                <button className="leo-btn-next leo-btn-cta" onClick={handleCTAClick}>
                  Begin Session →
                </button>
              ) : (
                <button className="leo-btn-next" onClick={nextStep}>
                  {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Avatar ── */}
      <div className={`leo-fab ${tutorialActive ? 'hidden' : ''}`}>
        {/* Speech Bubble */}
        {showBubble && !tutorialActive && (
          <div className="leo-bubble">
            <span>Leochi is here to help!</span>
            <div className="leo-bubble-tail" />
          </div>
        )}

        <button className="leo-avatar-btn" onClick={startTutorial} aria-label="Start tutorial with Leochi">
          <img src="/avatar/pose2.png" alt="Leochi — meditating" className="leo-img leo-img-default" />
          <img src="/avatar/pose1.png" alt="Leochi — ready" className="leo-img leo-img-hover" />
        </button>
      </div>

      <style jsx>{`
        /* ──── FLOATING AVATAR ──── */
        .leo-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9990;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .leo-fab.hidden { display: none; }

        .leo-avatar-btn {
          width: 100px;
          height: 100px;
          border-radius: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          overflow: visible;
          position: relative;
          padding: 0;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
          transition: filter 300ms ease, transform 300ms ease;
          animation: leo-pulse 3s ease-in-out infinite;
        }
        .leo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          inset: 0;
          transition: opacity 300ms ease;
        }
        .leo-img-default { opacity: 1; }
        .leo-img-hover { opacity: 0; }
        .leo-avatar-btn:hover .leo-img-default { opacity: 0; }
        .leo-avatar-btn:hover .leo-img-hover { opacity: 1; }
        .leo-avatar-btn:hover {
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.2));
          transform: scale(1.05);
        }

        /* ──── SPEECH BUBBLE ──── */
        .leo-bubble {
          background: white;
          color: var(--text-1);
          padding: 10px 16px;
          border-radius: 16px;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          position: relative;
          animation: leo-bubble-in 400ms ease;
          white-space: nowrap;
        }
        .leo-bubble-tail {
          position: absolute;
          bottom: -6px;
          right: 24px;
          width: 12px;
          height: 12px;
          background: white;
          transform: rotate(45deg);
          box-shadow: 2px 2px 4px rgba(0,0,0,0.05);
        }
        @keyframes leo-bubble-in {
          from { opacity: 0; transform: translateY(8px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes leo-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        /* ──── FIXED TOOLTIP ──── */
        .leo-tooltip-fixed {
          position: fixed;
          bottom: 136px;
          right: 24px;
          z-index: 10000;
          pointer-events: all;
          width: 360px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
          display: flex;
          gap: 14px;
          padding: 18px;
          animation: leo-tooltip-in 300ms ease;
        }
        @keyframes leo-tooltip-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .leo-tooltip-avatar {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--gold);
        }
        .leo-tooltip-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .leo-tooltip-content {
          flex: 1;
          min-width: 0;
        }
        .leo-tooltip-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .leo-tooltip-step {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.04em;
        }
        .leo-tooltip-close {
          background: none;
          border: none;
          font-size: 0.875rem;
          color: var(--text-3);
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 6px;
          line-height: 1;
        }
        .leo-tooltip-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-1);
          margin-bottom: 4px;
        }
        .leo-tooltip-body {
          font-size: 0.8125rem;
          color: var(--text-2);
          line-height: 1.55;
          margin-bottom: 12px;
        }

        .leo-tooltip-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .leo-btn-back {
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-2);
          background: var(--bg-glass);
          border: 1px solid var(--border);
          cursor: pointer;
        }
        .leo-btn-next {
          padding: 6px 18px;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 700;
          color: white;
          background: var(--gold);
          border: none;
          cursor: pointer;
        }
        .leo-btn-cta {
          background: linear-gradient(135deg, var(--gold), #b8860b);
          padding: 8px 20px;
        }

        /* ──── MOBILE ──── */
        @media (max-width: 640px) {
          .leo-fab { bottom: 12px; right: 12px; }
          .leo-avatar-btn { width: 80px; height: 80px; }
          .leo-bubble { font-size: 0.8125rem; padding: 8px 14px; }

          .leo-tooltip-fixed {
            width: calc(100vw - 32px);
            right: 16px;
            bottom: 104px;
            flex-direction: column;
            gap: 10px;
          }
          .leo-tooltip-avatar { width: 40px; height: 40px; }
        }
      `}</style>
    </>
  );
}
