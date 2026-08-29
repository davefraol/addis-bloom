import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { primaryNav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !overlay || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-border bg-background/95 backdrop-blur-sm"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-18 items-center justify-between gap-6 md:h-20"
        >
          <Link
            to="/"
            className={cn(
              "font-serif text-lg tracking-[0.28em] transition-colors duration-500",
              solid ? "text-foreground" : "text-ink-foreground",
            )}
            aria-label={`${site.name} — home`}
          >
            {site.shortName}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "link-underline py-1 text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                    solid
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-ink-foreground/85 hover:text-ink-foreground",
                  )}
                  activeProps={{
                    className: solid ? "!text-accent" : "!text-accent-soft",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className={cn(
                "hidden text-[0.78rem] tracking-[0.08em] transition-colors xl:inline-flex",
                solid
                  ? "text-muted-foreground hover:text-accent"
                  : "text-ink-foreground/85 hover:text-ink-foreground",
              )}
            >
              {site.phone}
            </a>
            <ButtonLink
              to="/booking"
              size="sm"
              variant={solid ? "accent" : "ghostLight"}
              className="hidden sm:inline-flex"
            >
              Book Your Stay
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-xs transition-colors lg:hidden",
                solid ? "text-foreground hover:text-accent" : "text-ink-foreground",
              )}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-60 flex flex-col bg-ink text-ink-foreground lg:hidden"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="shell flex h-18 shrink-0 items-center justify-between">
            <span className="font-serif text-lg tracking-[0.28em]">{site.shortName}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center text-ink-foreground/80 hover:text-ink-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="shell flex flex-1 flex-col justify-between overflow-y-auto pb-10">
            <ul className="mt-6 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
              {primaryNav.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="block py-5 font-serif text-3xl text-ink-foreground"
                    activeProps={{ className: "!text-accent-soft" }}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 space-y-6">
              <ButtonLink to="/booking" variant="accent" size="lg" className="w-full" onClick={onClose}>
                Book Your Stay
              </ButtonLink>
              <div className="space-y-3 text-sm text-ink-foreground/70">
                <a href={site.phoneHref} className="flex items-center gap-3 hover:text-ink-foreground">
                  <Phone className="size-4 text-accent-soft" aria-hidden="true" />
                  {site.phone}
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-ink-foreground"
                >
                  <MapPin className="size-4 text-accent-soft" aria-hidden="true" />
                  {site.location}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
