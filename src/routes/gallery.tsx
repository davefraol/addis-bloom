import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { GalleryGrid } from "@/components/GalleryGrid";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { CTASection, PageHero } from "@/components/Sections";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Hill Addis Guest House, Addis Ababa" },
      {
        name: "description",
        content:
          "Photographs of Hill Addis Guest House — rooms, interiors, breakfast and the city of Addis Ababa around us.",
      },
      { property: "og:title", content: "Gallery | Hill Addis Guest House" },
      {
        property: "og:description",
        content: "A visual look at the rooms, interiors and surroundings of Hill Addis Guest House.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Filter = GalleryCategory | "All";

function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);

  const images = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
  const filters: Filter[] = ["All", ...galleryCategories];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The House, in Pictures"
        intro="Rooms, quiet corners, breakfast on the table and the city just outside the gate."
        image={heroImage}
        alt="Sitting room with soft seating and natural textiles"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Photo gallery
        </h2>

        <Reveal className="flex flex-wrap gap-2 border-b border-border pb-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setIndex(null);
              }}
              aria-pressed={filter === f}
              className={cn(
                "h-9 rounded-xs border px-4 text-xs uppercase tracking-[0.12em] transition-colors",
                filter === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border-strong text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10">
          <GalleryGrid images={images} onOpen={setIndex} />
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Photography shown is placeholder imagery while the property's own photographs are
          prepared.
        </p>
      </section>

      <CTASection
        eyebrow="Come and see it"
        title="Photographs help, but the mornings are better in person."
      />

      <Lightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onChange={setIndex}
      />
    </>
  );
}
