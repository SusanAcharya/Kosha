"use client";

import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if we are on iOS
    const isIosDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIosDevice);

    // Check if the app is already installed/standalone
    const isAppStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone || document.referrer.includes('android-app://');
    setIsStandalone(isAppStandalone);

    // Listen for the beforeinstallprompt event (Android / Desktop Chrome)
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      if (!isAppStandalone) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Also manually show prompt for iOS if not standalone (optional, here we wait a few seconds)
    if (isIosDevice && !isAppStandalone) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 5000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
      // We've used the prompt, and can't use it again, throw it away
      setDeferredPrompt(null);
    } else if (isIOS) {
      // For iOS, tell user how to install
      alert('To install the app on iOS, tap the "Share" icon and then "Add to Home Screen".');
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt || isStandalone) return null;

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .mobile-only-prompt {
            display: none !important;
          }
        }
      `}</style>
      <div 
        className="glass-card fade-in mobile-only-prompt" 
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '16px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 10px',
          width: 'calc(100% - 32px)',
          maxWidth: '260px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            background: 'var(--steel-glow)', 
            padding: '6px', 
            borderRadius: 'var(--radius-md)', 
            color: 'var(--steel)' 
          }}>
            <Download size={16} strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-1)', marginBottom: '1px', letterSpacing: '-0.01em' }}>
              Install Kosha
            </p>
            <p style={{ fontSize: '0.65rem', color: 'var(--text-2)', lineHeight: 1.1 }}>
              {isIOS ? "Share > Add to Home" : "Add to home screen"}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
          <button 
            onClick={handleInstallClick} 
            className="btn-primary"
            style={{ 
              padding: '4px 10px', 
              fontSize: '0.7rem',
              width: 'auto',
              minWidth: '50px',
              whiteSpace: 'nowrap',
              borderRadius: 'var(--radius-full)'
            }}
          >
            Install
          </button>
          <button 
            onClick={handleDismiss} 
            style={{ 
              padding: '2px', 
              color: 'var(--text-3)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'color 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-1)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-3)'}
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </>
  );
}
