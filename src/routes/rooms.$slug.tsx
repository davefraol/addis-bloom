import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, BedDouble, Check, Eye, Maximize, Phone, Users } from "lucide-react";

import { ButtonAnchor, ButtonLink, buttonStyles } from "@/components/Button";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { CTASection } from "@/components/Sections";
import type { GalleryImage } from "@/data/gallery";
import { getRoomBySlug, rooms } from "@/data/rooms";
import { site } from "@/data/site";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = getRoomBySlug(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Room not found | Hill Addis Guest House" }, { name: "robots", content: "noindex" }],
      };
    }
    const { room } = loaderData;
    const title = `${room.name} | Hill Addis Guest House`;
    return {
      meta: [
        { title },
        { name: "description", content: room.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: room.shortDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/rooms/${params.slug}` },
        { property: "og:image", content: room.images[0]?.src ?? "" },
        { name: "twitter:image", content: room.images[0]?.src ?? "" },
      ],
      links: [{ rel: "canonical", href: `/rooms/${params.slug}` }],
    };
  },
  component: RoomDetail,
  errorComponent: RoomError,
  notFoundComponent: RoomNotFound,
});

function RoomDetail() {
  const { room } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const lightboxImages: GalleryImage[] = room.images.map((image, i) => ({
    id: `${room.id}-${i}`,
    src: image.src,
    alt: image.alt,
    category: "Rooms",
    orientation: "landscape",
  }));

  const others = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);
  const facts = [
    { icon: Users, label: "Sleeps", value: `${room.capacity} guests` },
    { icon: BedDouble, label: "Bed", value: room.bedType },
    { icon: Maximize, label: "Size", value: room.size },
    { icon: Eye, label: "Outlook", value: room.view },
  ];

  return (
    <>
      <section className="relative bg-ink pt-24">
        <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden md:h-[62vh]">
          <img
            src={room.images[0]?.src}
            alt={room.images[0]?.alt ?? room.name}
            fetchPriority="high"
            decoding="async"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-ink/10" aria-hidden="true" />
          <div className="shell absolute inset-x-0 bottom-0 pb-10">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-foreground/70 transition-colors hover:text-accent-soft"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All rooms
            </Link>
            <p className="eyebrow mt-5 text-accent-soft">{room.roomType}</p>
            <h1 className="mt-3 font-serif text-4xl text-ink-foreground sm:text-5xl lg:text-6xl">
              {room.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {room.shortDescription}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{room.description}</p>

              <ul className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
                {facts.map(({ icon: Icon, label, value }) => (
                  <li key={label}>
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                    <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-serif text-2xl">In this room</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 font-serif text-2xl">Photographs</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {room.images.map((image, i) => (
                  <li key={image.src} className={i === 0 ? "sm:col-span-2" : undefined}>
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`Open image: ${image.alt}`}
                      className="group block w-full overflow-hidden bg-secondary"
                    >
                      <span className={i === 0 ? "block aspect-3/2" : "block aspect-4/3"}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="border border-border bg-card p-7 shadow-soft">
                <p className="eyebrow text-accent">From</p>
                <p className="mt-3 font-serif text-4xl">
                  {room.price.toLocaleString("en-US")}{" "}
                  <span className="text-lg text-muted-foreground">{room.currency}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">per night, placeholder rate</p>

                <div className="mt-7 flex flex-col gap-3">
                  <Link
                    to="/booking"
                    search={{ room: room.slug, guests: room.capacity }}
                    className={buttonStyles({ variant: "accent", size: "lg" })}
                  >
                    Request this room
                  </Link>
                  <ButtonAnchor href={site.phoneHref} variant="outline" size="lg">
                    <Phone className="size-4" aria-hidden="true" />
                    {site.phone}
                  </ButtonAnchor>
                </div>

                <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                  Rates and availability shown are placeholders. We confirm every booking by phone
                  or message before it is final.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/45 py-16 md:py-24">
        <div className="shell">
          <h2 className="font-serif text-3xl">Other rooms</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:gap-8">
            {others.map((r, i) => (
              <Reveal as="li" key={r.id} delay={i * 0.08}>
                <RoomCard room={r} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />

      <Lightbox
        images={lightboxImages}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onChange={setLightbox}
      />
    </>
  );
}

function RoomNotFound() {
  return (
    <FallbackPanel
      title="We couldn't find that room"
      body="The room you are looking for may have been renamed or removed."
    />
  );
}

function RoomError() {
  return (
    <FallbackPanel
      title="This room didn't load"
      body="Something went wrong on our end. Try again, or browse all of our rooms."
    />
  );
}

function FallbackPanel({ title, body }: { title: string; body: string }) {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="font-serif text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-muted-foreground">{body}</p>
      <ButtonLink to="/rooms" variant="accent" className="mt-8">
        View all rooms
      </ButtonLink>
    </section>
  );
}
