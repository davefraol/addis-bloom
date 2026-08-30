import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { CTASection, PageHero } from "@/components/Sections";
import { rooms } from "@/data/rooms";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/rooms/")({
  head: () => ({
    meta: [
      { title: "Rooms at Hill Addis Guest House | Addis Ababa" },
      {
        name: "description",
        content:
          "Browse rooms at Hill Addis Guest House in Addis Ababa — doubles, twins, a family suite and a garden studio for longer stays.",
      },
      { property: "og:title", content: "Rooms at Hill Addis Guest House | Addis Ababa" },
      {
        property: "og:description",
        content: "Browse room options and find the right stay for your trip to Addis Ababa.",
      },
      { property: "og:url", content: "/rooms" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const guestFilters = [
  { label: "Any", value: 0 },
  { label: "1–2", value: 2 },
  { label: "3+", value: 3 },
];

function RoomsPage() {
  const [type, setType] = useState<string>("All");
  const [minGuests, setMinGuests] = useState(0);

  const types = useMemo(() => ["All", ...new Set(rooms.map((r) => r.roomType))], []);

  const filtered = rooms.filter(
    (r) => (type === "All" || r.roomType === type) && r.capacity >= minGuests,
  );

  return (
    <>
      <PageHero
        eyebrow="Accommodation"
        title="Find Your Stay"
        intro="Explore our accommodation options. Every room is kept simple, quiet and well looked after — the difference is how much space you need."
        image={heroImage}
        alt="Guest room with a large bed and warm evening lighting"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="room-list-heading">
        <h2 id="room-list-heading" className="sr-only">
          Available rooms
        </h2>

        <Reveal className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-5">
            <Filter label="Room type">
              {types.map((t) => (
                <Chip key={t} active={type === t} onClick={() => setType(t)}>
                  {t}
                </Chip>
              ))}
            </Filter>
            <Filter label="Guests">
              {guestFilters.map((g) => (
                <Chip
                  key={g.label}
                  active={minGuests === g.value}
                  onClick={() => setMinGuests(g.value)}
                >
                  {g.label}
                </Chip>
              ))}
            </Filter>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "room" : "rooms"}
          </p>
        </Reveal>

        {filtered.length > 0 ? (
          <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filtered.map((room, i) => (
              <Reveal as="li" key={room.id} delay={Math.min(i, 4) * 0.07}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">
            No rooms match that combination. Try widening your filters.
          </p>
        )}

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Room names, photography, rates and amenities shown here are placeholder information used
          while the property listing is finalised. Please call us to confirm current availability
          and rates.
        </p>
      </section>

      <CTASection
        eyebrow="Not sure which room?"
        title="Tell us about your trip and we will suggest one."
        intro="How long you are staying, who you are travelling with, and whether you need a desk — that is usually enough for us to point you to the right room."
      />
    </>
  );
}

function Filter({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-9 rounded-xs border px-4 text-xs uppercase tracking-[0.12em] transition-colors",
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border-strong text-muted-foreground hover:border-accent hover:text-accent",
      )}
    >
      {children}
    </button>
  );
}
