import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Settings2, ShieldCheck } from "lucide-react";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  setCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookieConsent";

export function CookieConsentBanner() {
  const [choice, setChoice] = useState<CookieConsentChoice | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setChoice(getCookieConsent());

    const handleConsentChange = () => {
      setChoice(getCookieConsent());
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  if (choice || pathname === "/cookie-settings") return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-5xl border border-gold/25 bg-background/96 p-4 shadow-soft backdrop-blur-xl sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex gap-4">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 bg-gold/10 text-gold">
            <ShieldCheck size={18} />
          </span>
          <div>
            <h2 className="font-display text-2xl leading-tight text-foreground">Cookie Choices</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We use essential storage to remember your choices. Google Analytics and the embedded
              Google Map only load if you accept analytics cookies.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <Link to="/cookie-policy" className="text-gold underline-offset-4 hover:underline">
                Cookie Policy
              </Link>
              <Link to="/privacy-policy" className="text-gold underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[470px]">
          <button
            type="button"
            onClick={() => setCookieConsent("rejected")}
            className="inline-flex items-center justify-center rounded-full border border-gold/70 bg-background px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-background"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-background shadow-gold transition-colors hover:bg-gold-bright"
          >
            Accept
          </button>
          <Link
            to="/cookie-settings"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <Settings2 size={14} />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
