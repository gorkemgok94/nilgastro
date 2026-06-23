import React from 'react';
import useCookieConsent from '../hooks/useCookieConsent';

export default function CookieConsentBanner() {
  const {
    consent,
    hasConsent,
    hasDeclined,
    acceptExternalContent,
    declineExternalContent,
  } = useCookieConsent();

  if (hasConsent || hasDeclined) {
    return null;
  }

  return (
    <div style={bannerStyles.wrapper} role="dialog" aria-live="polite">
      <div style={bannerStyles.content}>
        <p style={bannerStyles.message}>
          Wir verwenden externe Inhalte wie Google Maps. Zur Anzeige der Karte ist Ihre Einwilligung erforderlich.
        </p>
        <div style={bannerStyles.actions}>
          <button style={bannerStyles.buttonSecondary} onClick={declineExternalContent}>
            Nein, danke
          </button>
          <button style={bannerStyles.buttonPrimary} onClick={acceptExternalContent}>
            Ja, Google Maps laden
          </button>
        </div>
      </div>
    </div>
  );
}

const bannerStyles = {
  wrapper: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(15, 23, 42, 0.95)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
  },
  content: {
    width: '100%',
    maxWidth: '1024px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  message: {
    margin: 0,
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  buttonPrimary: {
    background: '#2563eb',
    border: 'none',
    color: '#fff',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  buttonSecondary: {
    background: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
};
