"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-sm z-[60] animate-fade-up">
      <div className="bg-charcoal border border-gold/20 p-6 shadow-2xl shadow-black/40">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-base text-cream tracking-wide">
              Installer l&apos;application
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-sm text-cream-muted mt-1">
              Accédez à Le Sur Mesure directement depuis votre écran d&apos;accueil.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-cream-muted hover:text-cream transition-colors shrink-0 mt-0.5"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <button
          onClick={handleInstall}
          className="btn-gold w-full py-3 bg-gold text-background font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
        >
          Installer
        </button>
      </div>
    </div>
  );
}
