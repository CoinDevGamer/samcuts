import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ConsentRequiredPanel } from "@/components/ConsentRequiredPanel";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/lib/cookieConsent";
import {
  ArrowRight,
  Phone,
  Scissors,
  Sparkles,
  Award,
  MapPin,
  Star,
  MessageSquareText,
  ExternalLink,
} from "lucide-react";
import hairImage8721 from "../../Hair Images/IMG_8721.jpg";
import hairImage8722 from "../../Hair Images/IMG_8722.jpg";
import hairImage8724 from "../../Hair Images/IMG_8724.jpg";
import hairImage8725 from "../../Hair Images/IMG_8725.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sam's Cuts | Best Barbers in Burnley | Men's Haircuts & Fades" },
      {
        name: "description",
        content:
          "Looking for the best barbers in Burnley? Sam's Cuts offers clean fades, sharp haircuts, beard work, walk-ins, and phone pre-bookings with a £5 charge.",
      },
      { property: "og:title", content: "Sam's Cuts | Best Barbers in Burnley" },
      {
        property: "og:description",
        content:
          "Premium men's haircuts, skin fades and beard trims in Burnley. Walk in or call to pre-book over phone for an extra £5.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://samcutsburnley.uk/" },
      {
        name: "keywords",
        content:
          "best barbers Burnley, barber in Burnley, best barber Burnley, men's haircut Burnley, skin fade Burnley, beard trim Burnley, barbers near me Burnley",
      },
    ],
    links: [{ rel: "canonical", href: "https://samcutsburnley.uk/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Sam's Cuts",
          image: "https://samcutsburnley.uk/favicon.png",
          logo: "https://samcutsburnley.uk/favicon.png",
          "@id": "https://samcutsburnley.uk/#barbershop",
          url: "https://samcutsburnley.uk/",
          telephone: "+447413536353",
          priceRange: "£",
          sameAs: ["https://www.facebook.com/p/Sams-Cuts-61552116857669/"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "286 Colne Rd",
            addressLocality: "Burnley",
            postalCode: "BB10 1DZ",
            addressCountry: "GB",
          },
          geo: { "@type": "GeoCoordinates", latitude: 53.7997, longitude: -2.2304 },
          areaServed: "Burnley",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skin Fade" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Normal Fade" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beard Trim" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shave" } },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const servicePreview = [
  {
    t: "Normal Fades",
    d: "Clean everyday fades from £9, finished sharp and tidy.",
    icon: Scissors,
    accent: "From £9",
    number: "01",
  },
  {
    t: "Skin Fades",
    d: "Close skin fades from £10, with a shave or beard add-on for £5 extra.",
    icon: Sparkles,
    accent: "From £10",
    number: "02",
  },
  {
    t: "Beard & Shave",
    d: "Beard shaping and shave services from £10 for a clean finish.",
    icon: Award,
    accent: "From £10",
    number: "03",
  },
  {
    t: "Facial, Colour & Threading",
    d: "Facials from £20, colouring from £15 and threading from £5.",
    icon: Sparkles,
    accent: "From £5",
    number: "04",
  },
] as const;

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Sam%27s%20Cuts%2C%20286%20Colne%20Rd%2C%20Burnley%20BB10%201DZ";

const googleMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.127547685189!2d-2.2367981233591347!3d53.80501407242583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b91cdb1ee6387%3A0x702784a60de6bc67!2sSam%27s%20Cuts!5e0!3m2!1sen!2suk!4v1778667628398!5m2!1sen!2suk";

const googleReviews = [
  {
    name: "Izhan Bhatti",
    initial: "I",
    text: "Overall, a great place for a quality haircut at a good price.",
  },
  {
    name: "M. Ahmed",
    initial: "M",
    text: "Nice haircut, blended fade and perfect amount of hair cut off.",
  },
  {
    name: "J. Khan",
    initial: "J",
    text: "An expert barber in town who works with precision and attention to detail.",
  },
] as const;

const homeImages = {
  hero: {
    src: hairImage8724,
    alt: "Fresh haircut finished at Sam's Cuts barber shop in Burnley",
  },
  about: {
    src: hairImage8725,
    alt: "Detailed haircut and fade work by Sam's Cuts Burnley",
  },
  detailOne: {
    src: hairImage8721,
    alt: "Clean fade haircut from Sam's Cuts barber in Burnley",
  },
  detailTwo: {
    src: hairImage8722,
    alt: "Finished men's haircut by Sam's Cuts Burnley",
  },
} as const;

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background grain">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,color-mix(in_oklab,var(--gold)_11%,transparent),transparent_30%),radial-gradient(circle_at_82%_10%,color-mix(in_oklab,var(--charcoal)_18%,transparent),transparent_34%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
              <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
                Established 2024 · Burnley
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-balance font-display text-6xl leading-[0.92] md:text-7xl lg:text-[5.6rem]"
            >
              Premium cuts,
              <br />
              proper service,
              <br />
              <span className="gradient-gold-text italic">right in Burnley.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Sharp fades, clean beard work, and a calm shop experience with proper attention to the
              final finish.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+447413536353"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-background shadow-gold transition-colors hover:bg-gold-bright"
              >
                Call To Book
                <Phone size={16} />
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="#location"
                  className="inline-flex items-center gap-3 rounded-full border border-gold/80 bg-background/55 px-8 py-4 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-background"
                >
                  Walk In Today
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-border border-y border-border/80 bg-background/55 backdrop-blur"
            >
              {[
                { k: "Tue - Fri", v: "9-6" },
                { k: "Saturday", v: "9-5" },
                { k: "Phone", v: "07413 536353" },
              ].map((item) => (
                <div key={item.k} className="px-4 py-4">
                  <div className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                    {item.k}
                  </div>
                  <div className="mt-2 font-display text-xl leading-none text-foreground md:text-2xl">
                    {item.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            <figure className="photo-depth relative min-h-[520px] overflow-hidden border border-gold/20 bg-card shadow-soft lg:min-h-[680px]">
              <img
                src={homeImages.hero.src}
                alt={homeImages.hero.alt}
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute left-5 top-5 z-10 border border-gold/25 bg-background/86 px-5 py-4 backdrop-blur md:left-8 md:top-8">
                <div className="text-[10px] uppercase tracking-[0.34em] text-gold">House Style</div>
                <p className="mt-3 font-display text-2xl leading-[1.08] text-foreground md:text-3xl">
                  Clean lines.
                  <br />
                  Calm service.
                  <br />
                  No rushed finish.
                </p>
              </div>
              <figcaption className="absolute bottom-5 left-5 right-5 z-10 border border-border/80 bg-background/82 px-5 py-4 backdrop-blur md:bottom-8 md:left-8 md:right-8">
                <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.28em] text-gold">
                  <span>Walk-ins welcome</span>
                  <span className="text-muted-foreground">/</span>
                  <span>Phone pre-bookings +£5</span>
                  <span className="text-muted-foreground">/</span>
                  <span>Burnley</span>
                </div>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      <section className="statement-band px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-[11px] uppercase tracking-[0.42em] text-gold">
          {[
            "No rushed cuts",
            "Clean fades",
            "Proper beard work",
            "Burnley based",
            "Walk-ins welcome",
            "Phone pre-bookings +£5",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-10">
        <div className="mx-auto max-w-7xl grid gap-4 lg:grid-cols-[0.9fr_1.4fr_0.7fr]">
          <div className="pole-badge pl-9 pr-6 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Signature</div>
            <p className="mt-4 font-display text-3xl leading-[1.08] text-foreground">
              The chair,
              <br />
              the craft,
              <br />
              the finish.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">
              What Makes It Different
            </div>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              This is a local barbershop with a point of view. Less conveyor-belt energy, more
              intention in the mirror, on the neckline, and in the way the whole appointment feels.
            </p>
          </div>
          <div className="premium-panel px-8 py-6">
            <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Mood</div>
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.28em] text-foreground">
              <span className="rounded-full bg-background/60 px-3 py-2 border border-border">
                Quiet confidence
              </span>
              <span className="rounded-full bg-background/60 px-3 py-2 border border-border">
                Sharp detail
              </span>
              <span className="rounded-full bg-background/60 px-3 py-2 border border-border">
                No fuss
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-orbit py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            <HomeImageFrame
              src={homeImages.about.src}
              alt={homeImages.about.alt}
              label="Fresh Work"
              className="h-[520px] w-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 hidden md:block premium-panel px-6 py-6 max-w-[220px]"
            >
              <div className="font-display text-3xl text-gold">Est. 2024</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em]">
                Trusted in Burnley
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  Your Local <span className="gradient-gold-text italic">Barber</span> in Burnley
                </>
              }
            ></SectionHeading>
            <div className="space-y-5 text-muted-foreground leading-relaxed mt-6">
              <p>
                At Sam's Cuts, we're known for delivering high-quality men's haircuts in Burnley
                with precision and consistency. Whether it's a sharp skin fade or a clean trim,
                every cut is done with attention to detail.
              </p>
              <p>
                We've built a strong reputation as a trusted barber in Burnley by focusing on
                quality, professionalism, and making sure every client leaves looking their best.
              </p>
            </div>
            <div className="premium-panel mt-8 px-7 py-7">
              <p className="editorial-quote font-display text-2xl leading-[1.2] text-foreground">
                A sharper kind of local barbershop. Traditional standards, modern finish, no lazy
                details.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="rounded-full border border-gold/25 bg-gold/6 px-4 py-2">
                  Detail First
                </span>
                <span className="rounded-full border border-gold/25 bg-gold/6 px-4 py-2">
                  Consistent Service
                </span>
                <span className="rounded-full border border-gold/25 bg-gold/6 px-4 py-2">
                  No Fuss
                </span>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="pole-badge pl-9 pr-6 py-6">
                <div className="text-[10px] uppercase tracking-[0.34em] text-gold">
                  Local Rhythm
                </div>
                <p className="mt-4 font-display text-2xl leading-[1.1] text-foreground">
                  Burnley pace.
                  <br />
                  Strong standards.
                </p>
              </div>
              <div className="premium-panel px-6 py-6">
                <div className="text-[10px] uppercase tracking-[0.34em] text-gold">Approach</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Every cut is handled like the final mirror check matters. Because it does.
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-gold text-xs uppercase tracking-[0.25em] hover:gap-4 transition-all"
            >
              Our Story <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES preview */}
      <section className="section-orbit py-28 px-6 lg:px-10 bg-charcoal/30 grain relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              eyebrow="Craft"
              title={
                <>
                  Barber Services in <span className="gradient-gold-text italic">Burnley</span>
                </>
              }
              align="center"
            >
              From skin fades and normal fades to beard work, shaves, colouring, threading and
              facials. Every service is finished with the same standard of care.
            </SectionHeading>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {servicePreview.map((s, index) => (
              <motion.div
                key={s.t}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group premium-panel relative p-8 hover:border-gold transition-colors ${
                  index === 0 || index === 3 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="barber-stripe absolute inset-y-0 right-0 w-3 opacity-80" />
                <div className="mb-4 font-display text-4xl text-gold/25">{s.number}</div>
                <div className="mb-5 text-[10px] uppercase tracking-[0.34em] text-gold">
                  {s.accent}
                </div>
                <s.icon className="text-gold mb-6" size={28} strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="absolute top-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-background transition-colors"
            >
              All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-orbit py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              eyebrow="Why Sam's Cuts"
              title={
                <>
                  The detail is what{" "}
                  <span className="gradient-gold-text italic">sets us apart</span>
                </>
              }
            />
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 space-y-5 premium-panel px-8 py-8"
            >
              {[
                "Experienced barbers with a steady hand",
                "Consistent results, visit after visit",
                "Clean, modern shop in central Burnley",
                "Obsessive attention to detail",
                "Trusted by clients across Burnley",
              ].map((p, i) => (
                <motion.li key={p} variants={fadeUp} className="flex items-start gap-5 group">
                  <span className="font-display text-gold text-sm mt-1 w-6">0{i + 1}</span>
                  <span className="flex-1 border-b border-border pb-5 group-last:border-0 text-foreground">
                    {p}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="pole-badge mt-6 pl-10 pr-8 py-8"
            >
              <div className="text-[10px] uppercase tracking-[0.38em] text-gold">House View</div>
              <p className="editorial-quote mt-5 font-display text-3xl leading-[1.12] text-foreground">
                If it does not leave the chair looking sharp from every angle, it is not finished.
              </p>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <HomeImageFrame
                src={homeImages.detailOne.src}
                alt={homeImages.detailOne.alt}
                label="Fade Detail"
                className="h-72 w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-10"
            >
              <HomeImageFrame
                src={homeImages.detailTwo.src}
                alt={homeImages.detailTwo.alt}
                label="Finished Cut"
                className="h-72 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-orbit overflow-hidden px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <SectionHeading
              eyebrow="Google Reviews"
              title={
                <>
                  Loved your cut? Help more people{" "}
                  <span className="gradient-gold-text italic">find Sam's Cuts</span>
                </>
              }
            >
              Sam's Cuts is rated 5.0 on Google. If your trim, fade, or beard work came out sharp, a
              quick review helps the next Burnley customer choose with confidence.
            </SectionHeading>

            <div className="premium-panel p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-2xl font-semibold tracking-tight text-foreground">
                      Google
                    </span>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-gold">
                      Excellent
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="font-display text-5xl leading-none text-foreground">5.0</span>
                    <span className="flex text-gold" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={22} fill="currentColor" strokeWidth={1.4} />
                      ))}
                    </span>
                    <span className="text-sm text-muted-foreground">11 Google reviews</span>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gold px-6 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-background shadow-gold transition-colors hover:bg-gold-bright"
                >
                  Write A Google Review
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {googleReviews.map((review) => (
              <motion.article
                key={review.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="premium-panel p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/12 font-display text-xl text-gold">
                      {review.initial}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-foreground">
                        {review.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">Google review</p>
                    </div>
                  </div>
                  <MessageSquareText className="text-gold/70" size={22} strokeWidth={1.4} />
                </div>

                <div className="mt-6 flex text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" strokeWidth={1.3} />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="pole-badge pl-9 pr-7 py-7">
              <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Quick Ask</div>
              <p className="mt-4 font-display text-3xl leading-[1.08] text-foreground">
                Fresh cut?
                <br />
                Leave five stars.
              </p>
            </div>
            <div className="premium-panel px-8 py-7">
              <p className="text-base leading-relaxed text-muted-foreground">
                Reviews only take a minute and make a real difference for a local Burnley barber.
                Tap the button, find Sam's Cuts on Google, and share what you liked about your cut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-28 px-6 lg:px-10 bg-charcoal/30 grain">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Find Us"
            title={
              <>
                Visit Our Barber Shop in <span className="gradient-gold-text italic">Burnley</span>
              </>
            }
            align="center"
          >
            Conveniently located on Colne Road in Burnley, Sam's Cuts is your go-to destination for
            professional barbering.
          </SectionHeading>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-3 gap-6 mt-16"
          >
            <motion.div variants={fadeUp} className="premium-panel p-8">
              <MapPin className="text-gold mb-4" size={24} />
              <h3 className="font-display text-xl mb-2">Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                286 Colne Rd
                <br />
                Burnley
                <br />
                BB10 1DZ
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="premium-panel p-8">
              <Scissors className="text-gold mb-4" size={24} />
              <h3 className="font-display text-xl mb-2">Hours</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li className="flex justify-between">
                  <span>Tue to Fri</span>
                  <span>9 to 6</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9 to 5</span>
                </li>
                <li className="flex justify-between">
                  <span>Sun &amp; Mon</span>
                  <span className="text-gold/80">Closed</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="premium-panel p-8">
              <Sparkles className="text-gold mb-4" size={24} />
              <h3 className="font-display text-xl mb-2">Walk-Ins & Bookings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Walk in any time, or call ahead to pre-book over phone for an extra £5.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-10 overflow-hidden border border-gold/20 bg-background shadow-soft"
          >
            <div className="relative min-h-[460px]">
              <ConsentAwareMap />
              <div className="absolute left-5 top-5 max-w-sm border border-gold/25 bg-background/90 px-6 py-5 shadow-soft backdrop-blur-md md:left-8 md:top-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-gold/35 bg-gold/10 text-gold">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.34em] text-gold">Find Us</div>
                    <div className="mt-1 font-display text-2xl leading-none text-foreground">
                      Colne Road
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Sam's Cuts, 286 Colne Rd, Burnley BB10 1DZ. Walk in, or call ahead to pre-book
                  over phone for an extra £5.
                </p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3 md:bottom-8 md:left-8">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-background transition-colors hover:bg-gold-bright"
                >
                  Open Map
                  <ArrowRight size={14} />
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Sam%27s%20Cuts%2C%20286%20Colne%20Rd%2C%20Burnley%20BB10%201DZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-gold/80 bg-background/80 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur transition-colors hover:bg-gold hover:text-background"
                >
                  Directions
                  <MapPin size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="premium-panel px-8 py-8">
              <div className="text-[10px] uppercase tracking-[0.36em] text-gold">
                Before You Arrive
              </div>
              <div className="mt-5 grid gap-6 md:grid-cols-3">
                {[
                  {
                    k: "01",
                    t: "Walk in",
                    d: "Drop by during opening hours for the next available chair.",
                  },
                  {
                    k: "02",
                    t: "Call ahead",
                    d: "Use the phone line if you want to check the wait or pre-book. Phone pre-bookings add £5.",
                  },
                  {
                    k: "03",
                    t: "Get sorted",
                    d: "Clear service, sharp finish, no overcomplication.",
                  },
                ].map((item) => (
                  <div key={item.k}>
                    <div className="font-display text-3xl text-gold">{item.k}</div>
                    <div className="mt-3 font-display text-xl text-foreground">{item.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-panel px-8 py-8">
              <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Call</div>
              <a
                href="tel:+447413536353"
                className="mt-5 block font-display text-4xl leading-none text-foreground hover:text-gold transition-colors"
              >
                07413 536353
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Walk-ins are welcome. Phone pre-bookings are available with an extra £5 charge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ConsentAwareMap() {
  const [canLoadMap, setCanLoadMap] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setCanLoadMap(getCookieConsent() === "accepted");
    };

    updateConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    };
  }, []);

  if (!canLoadMap) {
    return <ConsentRequiredPanel />;
  }

  return (
    <>
      <iframe
        title="Sam's Cuts Burnley location map"
        src={googleMapEmbedUrl}
        width="100%"
        height="460"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0, filter: "saturate(0.85) contrast(1.08) brightness(0.88)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_75%,transparent)_28%,transparent_62%),linear-gradient(0deg,var(--background)_0%,transparent_34%)]" />
    </>
  );
}

function HomeImageFrame({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure
      className={[
        "luxury-ring photo-depth relative overflow-hidden border border-border bg-card shadow-soft",
        className ?? "",
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
      <figcaption className="absolute bottom-5 left-5">
        <span className="bg-background/80 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-gold backdrop-blur">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}
