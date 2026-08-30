import { createFileRoute } from "@tanstack/react-router";

import { JournalCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { CTASection, PageHero } from "@/components/Sections";
import { journal } from "@/data/journal";

const heroImage =
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal | Travel Notes on Addis Ababa" },
      {
        name: "description",
        content:
          "Travel notes from Hill Addis Guest House: guides, neighbourhood tips and practical advice for visiting Addis Ababa.",
      },
      { property: "og:title", content: "Journal | Travel Notes on Addis Ababa" },
      {
        property: "og:description",
        content: "Guides and practical advice for travelers visiting Addis Ababa.",
      },
      { property: "og:url", content: "/journal" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  const [lead, ...rest] = journal;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from Addis"
        intro="Writing about the city we live in — what to expect, where to go, and how to spend the time between plans."
        image={heroImage}
        alt="Hills and open sky on the outskirts of Addis Ababa"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="journal-heading">
        <h2 id="journal-heading" className="sr-only">
          Journal articles
        </h2>

        {lead ? (
          <Reveal>
            <JournalCard post={lead} large />
          </Reveal>
        ) : null}

        <ul className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {rest.map((post, i) => (
            <Reveal as="li" key={post.id} delay={Math.min(i, 4) * 0.07}>
              <JournalCard post={post} />
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection
        eyebrow="Visiting soon?"
        title="Read a little, then come and see it for yourself."
      />
    </>
  );
}
