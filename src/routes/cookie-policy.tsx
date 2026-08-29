import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Sam's Cuts Burnley" },
      {
        name: "description",
        content:
          "Cookie Policy for Sam's Cuts Burnley, explaining essential cookies, analytics cookies, Google Analytics, Google Maps, and how to manage consent.",
      },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <Layout>
      <PolicyPage eyebrow="Cookie Policy" title="Cookie Policy">
        <p>Last updated: 29 August 2026</p>

        <h2>Summary</h2>
        <p>
          Sam's Cuts uses essential storage to remember your cookie choice. We only load Google
          Analytics and the embedded Google Map after you actively accept analytics cookies.
        </p>

        <h2>Essential Cookies and Storage</h2>
        <p>
          Essential storage is needed for basic site features, including remembering whether you
          accepted or rejected analytics cookies. These are not used for advertising or profiling.
          The consent cookie is called samscuts_cookie_consent and is kept for up to one year unless
          you change your choice sooner.
        </p>

        <h2>Analytics Cookies</h2>
        <p>
          Analytics cookies are optional. If you accept them, Google Analytics may collect
          information such as pages visited, approximate location, device/browser information,
          referral source, and time spent on the site. IP anonymisation is enabled where supported.
        </p>

        <h2>Google Maps</h2>
        <p>
          The embedded Google Map is blocked until analytics consent is accepted because it is
          served by Google and may set cookies or collect usage information. You can still use plain
          Google Maps links for directions without loading the embedded map on this site.
        </p>

        <h2>Third Parties</h2>
        <p>
          If analytics consent is accepted, data may be shared with Google for analytics and map
          services. Facebook and Google links only load when you choose to open them.
        </p>

        <h2>Changing Your Choice</h2>
        <p>
          You can accept, reject, or withdraw analytics consent at any time from the{" "}
          <Link to="/cookie-settings">Cookie Settings</Link> page.
        </p>
      </PolicyPage>
    </Layout>
  );
}

function PolicyPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section-orbit px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">{eyebrow}</span>
        </div>
        <h1 className="font-display text-5xl leading-tight md:text-7xl">
          {title.replace(" Policy", "")} <span className="gradient-gold-text italic">Policy</span>
        </h1>
        <div className="policy-content premium-panel mt-10 p-7 md:p-10">{children}</div>
      </div>
    </section>
  );
}
