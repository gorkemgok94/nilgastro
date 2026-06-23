import { useEffect, useState } from 'react';

const STORAGE_KEY = 'nilgastroCookieConsent';
const DEFAULT_CONSENT = { externalContent: null };

function parseConsent(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export default function useCookieConsent() {
  const [consent, setConsent] = useState(DEFAULT_CONSENT);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = parseConsent(localStorage.getItem(STORAGE_KEY));
    if (stored && typeof stored.externalContent === 'boolean') {
      setConsent(stored);
    }
    setInitialized(true);
  }, []);

  const saveConsent = (externalContent) => {
    const nextConsent = { externalContent };
    setConsent(nextConsent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent));
  };

  const acceptExternalContent = () => saveConsent(true);
  const declineExternalContent = () => saveConsent(false);

  return {
    initialized,
    consent,
    hasConsent: consent.externalContent === true,
    hasDeclined: consent.externalContent === false,
    acceptExternalContent,
    declineExternalContent,
  };
}
