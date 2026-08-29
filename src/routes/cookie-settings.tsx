import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  setCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookieConsent";

export const Route = createFileRoute("/cookie-settings")({
  head: () => ({
    meta: [
      { title: "Cookie Settings | Sam's Cuts Burnley" },
      {
        name: "description",
        content:
          "Manage cookie consent for Sam's Cuts Burnley. Accept, reject, or withdraw analytics cookie consent.",
      },
    ],
  }),
  component: CookieSettingsPage,
});

function CookieSettingsPage() {
  const [choice, setChoice] = useState<CookieConsentChoice | null>(null);

  const saveChoice = (nextChoice: CookieConsentChoice) => {
    setCookieConsent(nextChoice);
    setChoice(nextChoice);
  };

  useEffect(() => {
    const updateChoice = () => {
      setChoice(getCookieConsent());
    };

    updateChoice();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateChoice);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, updateChoice);
    };
  }, []);

  return (
    <Layout>
      <section className="section-orbit px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Privacy Control
            </span>
          </div>
          <h1 className="font-display text-5xl leading-tight md:text-7xl">
            Cookie <span className="gradient-gold-text italic">Settings</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            You can accept or reject analytics cookies at any time. Rejecting analytics does not
            stop essential site features from working.
          </p>

          <div className="mt-12 grid gap-5">
            <section className="premium-panel p-7">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-3xl text-foreground">Essential Cookies</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Required to remember your cookie choice and display the site correctly. These
                    cannot be switched off through this panel.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                  <Check size={14} />
                  Always On
                </span>
              </div>
            </section>

            <section className="premium-panel p-7">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-3xl text-foreground">Analytics Cookies</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Used only if you accept. These allow Google Analytics and the embedded Google
                    Map to load so we can understand site visits and show the shop location.
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-gold">
                    Current choice: {choice === "accepted" ? "Accepted" : "Rejected or not set"}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 md:min-w-[290px]">
                  <button
                    type="button"
                    onClick={() => saveChoice("rejected")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-background shadow-soft transition-colors hover:bg-foreground/88"
                  >
                    <X size={14} />
                    Reject Analytics
                  </button>
                  <button
                    type="button"
                    onClick={() => saveChoice("accepted")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-background shadow-gold transition-colors hover:bg-gold-bright"
                  >
                    <Check size={14} />
                    Accept Analytics
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/cookie-policy" className="text-gold underline-offset-4 hover:underline">
              Read the Cookie Policy
            </Link>
            <Link to="/privacy-policy" className="text-gold underline-offset-4 hover:underline">
              Read the Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
