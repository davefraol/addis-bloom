import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Phone } from "lucide-react";

import { Button, ButtonAnchor, ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { rooms } from "@/data/rooms";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=80";

type BookingSearch = {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  room?: string;
};

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => {
    const guests = Number(search["guests"]);
    return {
      ...(typeof search["checkIn"] === "string" ? { checkIn: search["checkIn"] } : {}),
      ...(typeof search["checkOut"] === "string" ? { checkOut: search["checkOut"] } : {}),
      ...(Number.isFinite(guests) && guests > 0 ? { guests: Math.min(guests, 8) } : {}),
      ...(typeof search["room"] === "string" ? { room: search["room"] } : {}),
    };
  },
  head: () => ({
    meta: [
      { title: "Book a Room | Hill Addis Guest House, Addis Ababa" },
      {
        name: "description",
        content:
          "Request a stay at Hill Addis Guest House in Addis Ababa. Send your dates and we will confirm availability by phone.",
      },
      { property: "og:title", content: "Book a Room | Hill Addis Guest House" },
      {
        property: "og:description",
        content: "Send your dates and we will confirm availability for your stay in Addis Ababa.",
      },
      { property: "og:url", content: "/booking" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

const today = () => new Date().toISOString().slice(0, 10);
const inputClass =
  "h-12 w-full rounded-none border border-border-strong bg-background px-4 text-sm outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/25";

function BookingPage() {
  const search = Route.useSearch();

  const [checkIn, setCheckIn] = useState(search.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(search.checkOut ?? "");
  const [guests, setGuests] = useState(search.guests ?? 2);
  const [roomSlug, setRoomSlug] = useState(search.room ?? rooms[0]?.slug ?? "");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const selectedRoom = rooms.find((r) => r.slug === roomSlug);
  const nights =
    checkIn && checkOut && checkOut > checkIn
      ? Math.round(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86_400_000,
        )
      : 0;
  const estimate = selectedRoom && nights > 0 ? selectedRoom.price * nights : 0;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return setError("Please choose both dates.");
    if (checkOut <= checkIn) return setError("Check-out must be after check-in.");
    if (!name.trim()) return setError("Please tell us your name.");
    if (!contact.trim()) return setError("Please leave a phone number or email so we can reply.");
    setError(null);
    setDone(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Request Your Stay"
        intro="Send us your dates and we will confirm availability directly. Nothing is charged online."
        image={heroImage}
        alt="Twin beds with warm bedside lamps"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="booking-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {done ? (
              <div
                role="status"
                className="border border-border bg-card p-8 shadow-soft sm:p-10"
              >
                <Check className="size-8 text-accent" aria-hidden="true" />
                <h2 id="booking-heading" className="mt-5 font-serif text-3xl">
                  Request noted, {name.split(" ")[0]}
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  Online booking is not connected yet, so this request has not been sent anywhere.
                  Please call us to confirm your stay — we will hold the room while we talk it
                  through.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonAnchor href={site.phoneHref} variant="accent" size="lg">
                    <Phone className="size-4" aria-hidden="true" />
                    {site.phone}
                  </ButtonAnchor>
                  <Button variant="outline" size="lg" onClick={() => setDone(false)}>
                    Edit request
                  </Button>
                </div>
              </div>
            ) : (
              <Reveal>
                <h2 id="booking-heading" className="font-serif text-3xl">
                  Your details
                </h2>

                <form
                  onSubmit={onSubmit}
                  noValidate
                  aria-label="Booking request"
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                >
                  <Field label="Check-in" htmlFor="bk-in">
                    <input
                      id="bk-in"
                      type="date"
                      min={today()}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Check-out" htmlFor="bk-out">
                    <input
                      id="bk-out"
                      type="date"
                      min={checkIn || today()}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Guests" htmlFor="bk-guests">
                    <select
                      id="bk-guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Room" htmlFor="bk-room">
                    <select
                      id="bk-room"
                      value={roomSlug}
                      onChange={(e) => setRoomSlug(e.target.value)}
                      className={inputClass}
                    >
                      {rooms.map((r) => (
                        <option key={r.slug} value={r.slug}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Your name" htmlFor="bk-name">
                    <input
                      id="bk-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Phone or email" htmlFor="bk-contact">
                    <input
                      id="bk-contact"
                      autoComplete="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Anything we should know?" htmlFor="bk-notes">
                      <textarea
                        id="bk-notes"
                        rows={5}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Arrival time, airport pickup, quiet room preference…"
                        className="w-full rounded-none border border-border-strong bg-background p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/25"
                      />
                    </Field>
                  </div>

                  {error ? (
                    <p role="alert" className="text-sm text-destructive sm:col-span-2">
                      {error}
                    </p>
                  ) : null}

                  <div className="sm:col-span-2">
                    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                      Send request
                    </Button>
                  </div>
                </form>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="border border-border bg-card p-7 shadow-soft">
                <p className="eyebrow text-accent">Your stay</p>
                <h2 className="mt-3 font-serif text-2xl">
                  {selectedRoom?.name ?? "Select a room"}
                </h2>

                <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                  <Row label="Check-in" value={checkIn || "—"} />
                  <Row label="Check-out" value={checkOut || "—"} />
                  <Row label="Nights" value={nights > 0 ? String(nights) : "—"} />
                  <Row label="Guests" value={String(guests)} />
                </dl>

                <div className="mt-6 flex items-baseline justify-between border-t border-border pt-5">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    Estimate
                  </span>
                  <span className="font-serif text-2xl">
                    {estimate > 0
                      ? `${estimate.toLocaleString("en-US")} ${site.currency}`
                      : "—"}
                  </span>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Estimates use placeholder rates and exclude taxes. Nothing is charged here — we
                  confirm every booking with you directly before it is final.
                </p>

                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  <ButtonAnchor href={site.phoneHref} variant="dark">
                    <Phone className="size-4" aria-hidden="true" />
                    {site.phone}
                  </ButtonAnchor>
                  <ButtonLink to="/rooms" variant="outline">
                    Compare rooms
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
