import { createFileRoute } from "@tanstack/react-router";

import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Stay | Hill Addis Guest House" },
      {
        name: "description",
        content:
          "House rules, booking terms and cancellation notes for stays at Hill Addis Guest House in Addis Ababa.",
      },
      { property: "og:title", content: "Terms of Stay | Hill Addis Guest House" },
      { property: "og:description", content: "Booking terms and house rules for your stay." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="shell max-w-3xl py-32 md:py-40">
      <p className="eyebrow rule-line mb-5 text-accent">Legal</p>
      <h1 className="font-serif text-4xl sm:text-5xl">Terms of Stay</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
        <p>
          These are placeholder terms for {site.name}. Final booking terms, rates and cancellation
          conditions will be confirmed before launch.
        </p>
        <h2 className="font-serif text-2xl text-foreground">Bookings</h2>
        <p>
          Requests made through this website are enquiries, not confirmed reservations. A booking
          is confirmed only once we have spoken with you directly and agreed the dates and rate.
        </p>
        <h2 className="font-serif text-2xl text-foreground">Rates</h2>
        <p>
          Rates shown on this website are indicative placeholders and may change. The rate we
          confirm with you at the time of booking is the rate that applies.
        </p>
        <h2 className="font-serif text-2xl text-foreground">House</h2>
        <p>
          We ask guests to keep noise down after 10pm out of respect for other rooms and our
          neighbours. Tell us in advance about late arrivals or early departures and we will make
          arrangements.
        </p>
        <h2 className="font-serif text-2xl text-foreground">Questions</h2>
        <p>Call us on {site.phone} and we will talk it through.</p>
      </div>
    </main>
  );
}
