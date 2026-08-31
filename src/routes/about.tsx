import { createFileRoute } from "@tanstack/react-router";
import { Coffee, HandHeart, Sparkles, Wifi } from "lucide-react";

import { ImageReveal, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection, LocationSection, PageHero } from "@/components/Sections";
import { site } from "@/data/site";

const heroImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hill Addis Guest House | Addis Ababa, Ethiopia" },
      {
        name: "description",
        content:
          "Hill Addis Guest House is a small, quiet guesthouse in Addis Ababa built around simple comfort and genuine hospitality.",
      },
      { property: "og:title", content: "About Hill Addis Guest House" },
      {
        property: "og:description",
        content: "A small, quiet guesthouse in Addis Ababa built around simple comfort.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HandHeart,
    title: "Hospitality first",
    body: "Being looked after should not feel like a service transaction. We remember names, we answer questions honestly, and we help where we can.",
  },
  {
    icon: Sparkles,
    title: "Kept properly clean",
    body: "Rooms are cleaned daily and checked between every stay. It is the least glamorous part of the job and the part guests notice most.",
  },
  {
    icon: Wifi,
    title: "Actually works",
    body: "Hot water in the morning, Wi-Fi that holds a call, and a desk you can work at. Small things, done reliably.",
  },
  {
    icon: Coffee,
    title: "Local by default",
    body: "Ethiopian coffee, Ethiopian breakfast, and directions to the places we go ourselves rather than the ones with the biggest signs.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Small House With a Long Memory"
        intro="Hill Addis was built around a simple idea: a guest should be able to arrive tired and feel settled within an hour."
        image={heroImage}
        alt="Hallway with warm wood floors and framed artwork"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="story-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow rule-line mb-5 text-accent">Who we are</p>
              <h2 id="story-heading" className="font-serif text-3xl leading-tight sm:text-4xl">
                Hospitality, without the performance
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  {site.name} is a guesthouse in {site.location} — small enough that the person who
                  checks you in is likely the person who will make your coffee in the morning. We
                  are not a hotel chain and we do not pretend to be one.
                </p>
                <p>
                  Most of our guests are travelling for work, visiting family, or spending a few
                  days in Addis before heading elsewhere in Ethiopia. Some stay one night, some
                  stay several weeks. Either way, the house works the same: quiet rooms, dependable
                  basics, and someone around when you need something.
                </p>
                <p>
                  We take the view that a good stay is mostly made of small reliable things. A bed
                  that is properly made. Water that runs hot the first time. A cup of coffee that
                  is not an afterthought. Advice that is honest rather than convenient.
                </p>
                <p>
                  If you are arriving late, tell us. If you are leaving before dawn, tell us that
                  too. We will make it work.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80"
                alt="Breakfast table set with fresh bread, fruit and coffee"
                ratio="aspect-4/5"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="border-y border-border bg-secondary/45 py-16 md:py-24"
        aria-labelledby="values-heading"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="What we care about"
            title={<span id="values-heading">Four Things We Do Not Compromise On</span>}
          />
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 0.07}>
                <Icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <LocationSection />
      <CTASection />
    </>
  );
}
