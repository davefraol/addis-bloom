import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const mapImage =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80";

export function LocationSection() {
  return (
    <section className="shell py-20 md:py-28" aria-labelledby="location-heading">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="eyebrow rule-line mb-5 text-accent">Finding Us</p>
          <h2 id="location-heading" className="font-serif text-3xl leading-tight sm:text-4xl">
            Hill Addis Guest House
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{site.location}</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            We are happy to help you plan your arrival, arrange a ride from the airport with a
            trusted driver, or point you towards the nearest coffee on your first morning. Call us
            and we will talk it through.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
            >
              <Phone className="size-4 text-accent" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {site.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonAnchor href={site.mapsUrl} target="_blank" rel="noreferrer" variant="dark">
              Get Directions
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </ButtonAnchor>
            <ButtonLink to="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-4/3 overflow-hidden border border-border"
            aria-label="Open Hill Addis Guest House on Google Maps"
          >
            <img
              src={mapImage}
              alt="Aerial view of streets and rooftops in Addis Ababa"
              loading="lazy"
              decoding="async"
              className="size-full object-cover grayscale-[0.35] transition-transform duration-[1400ms] group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/25" aria-hidden="true" />
            <span className="absolute bottom-5 left-5 flex items-center gap-2 bg-background px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              View on Google Maps
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function CTASection({
  eyebrow = "Reservations",
  title = "Rooms are limited, and mornings here are worth waking up for.",
  intro = "Tell us your dates and we will find you the right room. If you would rather talk it through, call us — someone will pick up.",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink py-20 text-ink-foreground md:py-28">
      <div className="shell">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/booking" variant="accent" size="lg">
            Book Your Stay
          </ButtonLink>
          <ButtonAnchor href={site.phoneHref} variant="ghostLight" size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </ButtonAnchor>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-ink pt-24 md:min-h-[62vh]">
      <img
        src={image}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25"
        aria-hidden="true"
      />
      <div className="shell relative w-full pb-14 md:pb-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow rule-line mb-5 text-accent-soft">{eyebrow}</p>
          <h1 className="text-balance font-serif text-4xl leading-[1.08] text-ink-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/75">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
