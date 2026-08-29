import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock3, Facebook, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="footer-stage mt-24 relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1.3fr_0.95fr_0.75fr] gap-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-panel px-8 py-8 md:px-10 md:py-10"
        >
          <img src={logo} alt="Sam's Cuts logo" className="h-14 w-auto mb-5" />
          <div className="mb-4 text-[10px] uppercase tracking-[0.38em] text-gold">
            Burnley Barber Shop
          </div>
          <h3 className="font-display text-4xl leading-[0.98] text-foreground max-w-lg">
            Built for sharp finishes, calm service, and proper local standards.
          </h3>
          <p className="mt-5 text-sm text-muted-foreground max-w-xl leading-relaxed">
            Sam&apos;s Cuts is a Burnley barbershop focused on clean fades, strong shapes, and a
            better chair-side experience. Walk in when it suits you or call ahead to pre-book over
            phone. Phone pre-bookings add £5.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.3em] text-gold">
            <span className="rounded-full border border-gold/25 bg-gold/6 px-4 py-2">
              Walk-Ins Welcome
            </span>
            <span className="rounded-full border border-gold/25 bg-gold/6 px-4 py-2">
              Phone Bookings
            </span>
            <span className="rounded-full border border-gold/25 bg-gold/6 px-4 py-2">
              Burnley Based
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+447413536353"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-background transition-colors hover:bg-gold-bright"
            >
              Call Now
              <Phone size={14} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-gold/80 bg-background/55 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-background"
            >
              Visit Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="footer-panel px-7 py-7"
        >
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Visit & Hours</h4>
          <ul className="space-y-5 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-1 text-gold shrink-0" />
              <span>
                286 Colne Rd
                <br />
                Burnley BB10 1DZ
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-gold shrink-0" />
              <a href="tel:+447413536353" className="hover:text-gold transition-colors">
                07413 536353
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 size={15} className="mt-1 text-gold shrink-0" />
              <div className="space-y-1">
                <div className="flex justify-between gap-4">
                  <span>Tue to Fri</span>
                  <span>9 to 6</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span>9 to 5</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sun &amp; Mon</span>
                  <span className="text-gold/80">Closed</span>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Facebook size={15} className="text-gold shrink-0" />
              <a
                href="https://www.facebook.com/p/Sams-Cuts-61552116857669/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Sam&apos;s Cuts on Facebook
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="footer-panel px-7 py-7"
        >
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Explore</h4>
          <ul className="space-y-4 text-sm">
            {[
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                >
                  <span className="h-px w-5 bg-gold/40" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-border/80 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Sam's Cuts Burnley. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/cookie-settings" className="hover:text-gold transition-colors">
              Cookie Settings
            </Link>
            <Link to="/cookie-policy" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
