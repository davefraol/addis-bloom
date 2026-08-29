import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { footerNav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="font-serif text-xl tracking-[0.22em]">HILL ADDIS</p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-accent-soft">
            Guest House
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
            A small guesthouse in Addis Ababa built around quiet rooms, warm hospitality and an easy
            base for travelers exploring the city.
          </p>
        </div>

        <nav aria-label="Explore" className="lg:col-span-3">
          <h2 className="eyebrow text-accent-soft">Explore</h2>
          <ul className="mt-5 space-y-3">
            {footerNav.explore.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline text-sm text-ink-foreground/70 hover:text-ink-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Stay" className="lg:col-span-2">
          <h2 className="eyebrow text-accent-soft">Stay</h2>
          <ul className="mt-5 space-y-3">
            {footerNav.stay.map((item) => (
              <li key={`stay-${item.to}`}>
                <Link
                  to={item.to}
                  className="link-underline text-sm text-ink-foreground/70 hover:text-ink-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-accent-soft">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            <li>
              <a href={site.phoneHref} className="flex items-start gap-2 hover:text-ink-foreground">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-ink-foreground"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-soft" aria-hidden="true" />
                {site.location}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Hill Addis Guest House</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-ink-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-ink-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
