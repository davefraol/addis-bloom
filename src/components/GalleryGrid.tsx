import { Expand } from "lucide-react";

import type { GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

const spanFor = (o: GalleryImage["orientation"]) =>
  o === "portrait" ? "row-span-2 aspect-2/3" : o === "square" ? "aspect-square" : "aspect-3/2";

export function GalleryGrid({
  images,
  onOpen,
}: {
  images: GalleryImage[];
  onOpen: (index: number) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {images.map((image, i) => (
        <Reveal
          as="li"
          key={image.id}
          delay={Math.min(i, 5) * 0.05}
          className={cn(i % 5 === 0 && "sm:col-span-2")}
        >
          <button
            type="button"
            onClick={() => onOpen(i)}
            className="group relative block w-full overflow-hidden bg-secondary"
            aria-label={`Open image: ${image.alt}`}
          >
            <div className={cn("w-full", i % 5 === 0 ? "aspect-3/2" : spanFor(image.orientation))}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
            <span className="pointer-events-none absolute inset-0 flex items-end justify-between gap-3 bg-ink/0 p-4 opacity-0 transition-all duration-500 group-hover:bg-ink/35 group-hover:opacity-100 group-focus-visible:bg-ink/35 group-focus-visible:opacity-100">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-foreground">
                {image.category}
              </span>
              <Expand className="size-4 text-ink-foreground" aria-hidden="true" />
            </span>
          </button>
        </Reveal>
      ))}
    </ul>
  );
}
