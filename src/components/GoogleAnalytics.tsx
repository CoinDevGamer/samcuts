import { useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookieConsent";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (!measurementId || document.querySelector(`script[data-ga-id="${measurementId}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.gaId = measurementId;
  document.head.appendChild(script);
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (getCookieConsent() === "accepted") {
      loadGoogleAnalytics();
    }

    const handleConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<CookieConsentChoice>).detail;

      if (choice === "accepted") {
        loadGoogleAnalytics();
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  return null;
}
