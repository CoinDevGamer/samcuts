import { Link } from "@tanstack/react-router";
import { MapPin, ShieldCheck } from "lucide-react";
import { setCookieConsent } from "@/lib/cookieConsent";

export function ConsentRequiredPanel() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-background px-6 text-center">
      <div className="max-w-xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-gold/30 bg-gold/10 text-gold">
          <MapPin size={24} />
        </div>
        <h3 className="font-display text-3xl leading-tight text-foreground">
          Google Map blocked until consent
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The map is provided by Google and may set analytics or preference cookies. Accept
          analytics cookies to load it, or use the directions button without loading the embed.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-background shadow-gold transition-colors hover:bg-gold-bright"
          >
            <ShieldCheck size={14} />
            Accept Analytics
          </button>
          <Link
            to="/cookie-settings"
            className="inline-flex items-center rounded-full border border-gold/80 bg-background px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-background"
          >
            Cookie Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
