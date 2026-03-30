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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#161821] border border-white/10 shadow-2xl rounded-2xl flex items-center justify-between p-4 px-5 text-white w-[90%] max-w-sm" style={{ backdropFilter: 'blur(12px)' }}>
      <div className="flex items-center gap-4">
        <div className="bg-white/10 p-2 rounded-xl text-white">
          <Download size={20} className="opacity-80"/>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium tracking-wide">Install Kosha App</p>
          <p className="text-xs text-white/50">{isIOS ? "Tap Share > Add to Home" : "Add to home screen"}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <button 
          onClick={handleInstallClick} 
          className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
        >
          {isIOS ? 'Show How' : 'Install'}
        </button>
        <button onClick={handleDismiss} className="text-white/50 hover:text-white transition-colors p-1">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
