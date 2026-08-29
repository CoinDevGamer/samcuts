export type CookieConsentChoice = "accepted" | "rejected";

export const COOKIE_CONSENT_STORAGE_KEY = "samscuts-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "samscuts_cookie_consent";
export const COOKIE_CONSENT_EVENT = "samscuts-cookie-consent-change";

let memoryConsent: CookieConsentChoice | null = null;

function parseConsentCookie(): CookieConsentChoice | null {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_CONSENT_COOKIE_NAME}=`));

  const value = cookie?.split("=")[1];

  if (value === "accepted" || value === "rejected") {
    return value;
  }

  return null;
}

export function getCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;

  const cookieChoice = parseConsentCookie();

  if (cookieChoice) {
    memoryConsent = cookieChoice;
    return cookieChoice;
  }

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    if (stored === "accepted" || stored === "rejected") {
      memoryConsent = stored;
      return stored;
    }
  } catch {
    return memoryConsent;
  }

  return memoryConsent;
}

export function setCookieConsent(choice: CookieConsentChoice) {
  if (typeof window === "undefined") return;

  memoryConsent = choice;
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${choice}; Max-Age=31536000; Path=/; SameSite=Lax`;

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
  } catch {
    // Some privacy modes block storage. Keep the runtime choice for this session.
  }

  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }));
}

export function hasAnalyticsConsent() {
  return getCookieConsent() === "accepted";
}
