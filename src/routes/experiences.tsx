import { createFileRoute } from "@tanstack/react-router";

import { ExperienceCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection, LocationSection, PageHero } from "@/components/Sections";
import { experiences } from "@/data/experiences";

const heroImage =
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Things to Do in Addis Ababa | Hill Addis Guest House" },
      {
        name: "description",
        content:
          "Local suggestions from Hill Addis Guest House — food, coffee, culture, markets and day trips around Addis Ababa.",
      },
      { property: "og:title", content: "Things to Do in Addis Ababa | Hill Addis Guest House" },
      {
        property: "og:description",
        content: "Local suggestions for exploring Addis Ababa during your stay.",
      },
      { property: "og:url", content: "/experiences" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const [lead, ...rest] = experiences;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Explore Addis Ababa"
        intro="Ideas for the hours between check-in and check-out — gathered from people who live here."
        image={heroImage}
        alt="View across Addis Ababa in the evening light"
      />

      <section className="shell py-16 md:py-24" aria-labelledby="experiences-heading">
        <SectionHeading
          eyebrow="Around the city"
          title={<span id="experiences-heading">Where to Go, What to Try</span>}
          intro="These are independent places and activities around Addis Ababa, not tours operated by the guest house. Ask at reception and we will help you plan the day or arrange a trusted driver."
        />

        {lead ? (
          <Reveal className="mt-14">
            <ExperienceCard experience={lead} large />
          </Reveal>
        ) : null}

        <ul className="mt-16 grid gap-14 md:grid-cols-2 lg:gap-x-10">
          {rest.map((exp, i) => (
            <Reveal as="li" key={exp.id} delay={Math.min(i, 4) * 0.07}>
              <ExperienceCard experience={exp} />
            </Reveal>
          ))}
        </ul>
      </section>

      <LocationSection />
      <CTASection
        eyebrow="Plan your days"
        title="Stay somewhere that knows the city."
        intro="Tell us what you would like to see and we will help you fit it into the time you have."
      />
    </>
  );
}
