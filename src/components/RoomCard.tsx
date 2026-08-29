import { Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, Users } from "lucide-react";

import { ImageReveal } from "@/components/Reveal";
import { formatPrice, type Room } from "@/data/rooms";
import { cn } from "@/lib/utils";

export function RoomCard({ room, className }: { room: Room; className?: string }) {
  const cover = room.images[0];
  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <Link
        to="/rooms/$slug"
        params={{ slug: room.slug }}
        className="block focus-visible:outline-offset-4"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImageReveal
          src={cover?.src ?? ""}
          alt={cover?.alt ?? room.name}
          ratio="aspect-4/5 sm:aspect-3/4"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight">
            <Link
              to="/rooms/$slug"
              params={{ slug: room.slug }}
              className="transition-colors hover:text-accent"
            >
              {room.name}
            </Link>
          </h3>
          <p className="shrink-0 text-sm text-muted-foreground">
            <span className="text-foreground">{formatPrice(room.price, room.currency)}</span>
            <span className="ml-1 text-xs">/ night</span>
          </p>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {room.shortDescription}
        </p>

        <dl className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="size-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Capacity</dt>
            <dd>{room.capacity} guests</dd>
          </div>
          <div className="flex items-center gap-2">
            <BedDouble className="size-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Bed</dt>
            <dd>{room.bedType}</dd>
          </div>
        </dl>

        <Link
          to="/rooms/$slug"
          params={{ slug: room.slug }}
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent"
        >
          View Room
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="sr-only">— {room.name}</span>
        </Link>
      </div>
    </article>
  );
}
