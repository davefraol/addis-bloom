import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { ButtonAnchor } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { site } from "@/data/site";

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hill Addis Guest House | Addis Ababa" },
      {
        name: "description",
        content: `Contact Hill Addis Guest House in Addis Ababa. Call ${site.phone} or send us a message about your stay.`,
      },
      { property: "og:title", content: "Contact Hill Addis Guest House" },
      {
        property: "og:description",
        content: "Get in touch about availability, arrival times and anything else you need.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Us"
        intro="Questions about availability, arrival times or how to get here from the airport — we are happy to help."
        image={heroImage}
        alt="Warmly lit dining space in the evening"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="contact-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow rule-line mb-5 text-accent">Get in touch</p>
              <h2 id="contact-heading" className="font-serif text-3xl leading-tight sm:text-4xl">
                We answer the phone
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The quickest way to reach us is by phone. If it is out of hours, leave a message
                below and we will come back to you.
              </p>

              <dl className="mt-10 space-y-7 border-t border-border pt-8 text-sm">
                <div className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a href={site.phoneHref} className="transition-colors hover:text-accent">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Address
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {site.name}
                      <br />
                      {site.location}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Reception
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      Someone is on site around the clock. Let us know if you are arriving late.
                    </dd>
                  </div>
                </div>
              </dl>

              <ButtonAnchor
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="mt-9"
              >
                Open in Google Maps
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonAnchor>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative block h-[45vh] min-h-[280px] overflow-hidden"
          aria-label="Open Hill Addis Guest House on Google Maps"
        >
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80"
            alt="Aerial view of streets and rooftops in Addis Ababa"
            loading="lazy"
            decoding="async"
            className="size-full object-cover grayscale-[0.35] transition-transform duration-[1600ms] group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-ink/25" aria-hidden="true" />
          <span className="absolute bottom-6 left-6 flex items-center gap-2 bg-background px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            View on Google Maps
          </span>
        </a>
      </section>
    </>
  );
}
