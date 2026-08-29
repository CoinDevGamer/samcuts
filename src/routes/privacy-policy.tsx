import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sam's Cuts Burnley" },
      {
        name: "description",
        content:
          "Privacy Policy for Sam's Cuts Burnley, covering contact details, enquiries, analytics data, retention, sharing, lawful basis, and UK GDPR rights.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <Layout>
      <section className="section-orbit px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Privacy Policy</span>
          </div>
          <h1 className="font-display text-5xl leading-tight md:text-7xl">
            Privacy <span className="gradient-gold-text italic">Policy</span>
          </h1>

          <div className="policy-content premium-panel mt-10 p-7 md:p-10">
            <p>Last updated: 29 August 2026</p>

            <h2>Who We Are</h2>
            <p>
              This website is operated for Sam's Cuts, 286 Colne Rd, Burnley BB10 1DZ. For privacy
              questions, contact us by phone on 07413 536353 or by visiting the shop.
            </p>

            <h2>Personal Data We Collect</h2>
            <p>
              We may collect personal data when you contact us, including your name, phone number,
              message details, appointment or enquiry information, and any information you choose to
              provide by phone, in person, through Facebook, or through any contact form added to
              this website.
            </p>
            <p>
              If you accept analytics cookies, Google Analytics may collect usage data such as pages
              viewed, device/browser information, approximate location, referral source, session
              information, and interactions with the website.
            </p>

            <h2>Lawful Basis</h2>
            <p>
              We process enquiry and booking information because it is necessary to respond to your
              request or take steps before providing a service. We may keep limited records where we
              have a legitimate interest in managing appointments, customer service, and business
              administration.
            </p>
            <p>
              Optional analytics cookies are only used with your consent. You can withdraw that
              consent at any time from the <Link to="/cookie-settings">Cookie Settings</Link> page.
            </p>

            <h2>Retention</h2>
            <p>
              Enquiry and booking information is kept only for as long as needed to respond, manage
              the service, resolve issues, and meet any legal or accounting requirements. Analytics
              data is retained according to Google Analytics settings and is not kept longer than
              needed for website performance review.
            </p>

            <h2>Who We Share Data With</h2>
            <p>
              We may share data with service providers that help operate the website, phone,
              booking, messaging, analytics, map, and hosting services. If you click links to Google
              Maps, Google Reviews, or Facebook, those providers process your data under their own
              privacy terms.
            </p>

            <h2>International Transfers</h2>
            <p>
              Some providers, including Google and Meta/Facebook, may process data outside the UK.
              Where required, they are responsible for applying appropriate transfer safeguards.
            </p>

            <h2>Your Rights</h2>
            <p>
              Under UK GDPR, you may have the right to access, correct, erase, restrict, object to
              processing, request portability, and withdraw consent. You also have the right to
              complain to the Information Commissioner's Office at ico.org.uk.
            </p>

            <h2>Cookies</h2>
            <p>
              Read the <Link to="/cookie-policy">Cookie Policy</Link> for details of essential and
              analytics cookies, including how to change your choice.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
