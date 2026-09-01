import { createFileRoute } from "@tanstack/react-router";

import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Hill Addis Guest House" },
      {
        name: "description",
        content:
          "How Hill Addis Guest House handles the information you share when enquiring about a stay in Addis Ababa.",
      },
      { property: "og:title", content: "Privacy Policy | Hill Addis Guest House" },
      {
        property: "og:description",
        content: "How we handle the information you share with us.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="shell max-w-3xl py-32 md:py-40">
      <p className="eyebrow rule-line mb-5 text-accent">Legal</p>
      <h1 className="font-serif text-4xl sm:text-5xl">Privacy Policy</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
        <p>
          This is a placeholder privacy policy for {site.name}. It will be replaced with a
          reviewed policy before launch.
        </p>
        <h2 className="font-serif text-2xl text-foreground">What we collect</h2>
        <p>
          When you contact us or request a stay, we collect the details you choose to share — your
          name, contact details, dates of travel and any notes about your stay. We use them only to
          respond to you and to prepare your booking.
        </p>
        <h2 className="font-serif text-2xl text-foreground">What we do not do</h2>
        <p>
          We do not sell your information, and we do not share it with third parties except where
          it is necessary to provide the service you asked for.
        </p>
        <h2 className="font-serif text-2xl text-foreground">Questions</h2>
        <p>
          For anything relating to your information, call us on {site.phone} and we will help.
        </p>
      </div>
    </main>
  );
}
