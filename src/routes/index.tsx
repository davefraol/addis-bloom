import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

import { BookingBar } from "@/components/BookingBar";
import { ButtonLink } from "@/components/Button";
import { JournalCard, TestimonialCard } from "@/components/Cards";
import { ImageReveal, Reveal } from "@/components/Reveal";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection, LocationSection } from "@/components/Sections";
import { featuredExperiences } from "@/data/experiences";
import { journal } from "@/data/journal";
import { featuredRooms } from "@/data/rooms";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80";
const introImage =
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80";
const detailImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hill Addis Guest House | Stay in Addis Ababa, Ethiopia" },
      {
        name: "description",
        content:
          "Discover Hill Addis Guest House in Addis Ababa. Explore comfortable rooms, local experiences and plan your stay in Ethiopia.",
      },
      { property: "og:title", content: "Hill Addis Guest House | Stay in Addis Ababa" },
      {
        property: "og:description",
        content:
          "A warm and comfortable guesthouse experience designed for travelers discovering Addis Ababa.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt="Guest room at Hill Addis Guest House with soft morning light across the bed"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/45 to-ink/35"
          aria-hidden="true"
        />

        <div className="shell relative pb-14 pt-32 md:pb-20">
          <motion.div
            className="max-w-2xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="eyebrow rule-line text-accent-soft">Welcome to Hill Addis</p>
            <h1 className="mt-6 text-balance font-serif text-[2.6rem] leading-[1.05] text-ink-foreground sm:text-6xl lg:text-[4.25rem]">
              A Quiet Stay in the Heart of Addis
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
              {site.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink to="/booking" size="lg">
                Book Your Stay
              </ButtonLink>
              <ButtonLink to="/rooms" variant="ghostLight" size="lg">
                Explore Rooms
              </ButtonLink>
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-foreground/60">
              <MapPin className="size-4 text-accent-soft" aria-hidden="true" />
              {site.location}
            </p>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-6 right-6 hidden items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-ink-foreground/50 lg:flex"
          aria-hidden="true"
        >
          Scroll
          <ChevronDown className="size-4 animate-bounce" />
        </div>
      </section>

      {/* BOOKING BAR */}
      <div className="shell relative z-10 -mt-8 md:-mt-10">
        <BookingBar />
      </div>

      {/* INTRODUCTION */}
      <section className="shell py-20 md:py-28" aria-labelledby="intro-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <ImageReveal
              src={introImage}
              alt="Corner of a guest room with a wooden chair, folded blanket and open window"
              ratio="aspect-4/5"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow rule-line mb-5 text-accent">The Hill Addis Experience</p>
              <h2 id="intro-heading" className="font-serif text-3xl leading-tight sm:text-4xl">
                Stay Somewhere That Feels Like Home
              </h2>
              <div className="mt-6 space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
                <p>
                  Hill Addis is a small guesthouse, and we like it that way. There is no marble
                  lobby and no queue at reception — just a handful of well-kept rooms, someone who
                  knows your name by the second morning, and coffee when you want it.
                </p>
                <p>
                  Guests come to us for different reasons. Some are in Addis for work and stay a
                  month. Some arrive at midnight from a long flight and sleep until noon. Others are
                  passing through on the way north. What they share is wanting somewhere calm to
                  come back to at the end of the day.
                </p>
                <p>
                  We keep things simple and we keep them clean: hot water, steady Wi-Fi, quiet
                  rooms, and honest answers when you ask us where to eat.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <p className="font-serif text-3xl text-accent">Quiet</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Residential setting
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-accent">Local</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="border-y border-border bg-secondary/45 py-20 md:py-28" aria-labelledby="rooms-heading">
        <div className="shell">
          <SectionHeading
            eyebrow="Accommodation"
            title={<span id="rooms-heading">Stay Your Way</span>}
            intro="A few different rooms for a few different kinds of trip — from a single quiet night to a month of working from the desk by the window."
            action={
              <ButtonLink to="/rooms" variant="outline">
                View All Rooms
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            }
          />
          <ul className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredRooms.map((room, i) => (
              <Reveal as="li" key={room.id} delay={i * 0.08}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-xs text-muted-foreground">
            Room details and rates shown are placeholder information while the property listing is
            finalised.
          </p>
        </div>
      </section>

      {/* EXPERIENCES — editorial split */}
      <section className="shell py-20 md:py-28" aria-labelledby="explore-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow rule-line mb-5 text-accent">Around the City</p>
              <h2 id="explore-heading" className="font-serif text-3xl leading-tight sm:text-4xl">
                Things to Explore Around Addis Ababa
              </h2>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-muted-foreground">
                Suggestions from people who live here. These are independent places and activities
                around the city, not tours we run — ask us and we will help you get there.
              </p>
              <ButtonLink to="/experiences" variant="outline" className="mt-8">
                See All Experiences
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <div className="mt-10 hidden lg:block">
                <ImageReveal
                  src={detailImage}
                  alt="Quiet reading nook beside a tall window"
                  ratio="aspect-4/3"
                />
              </div>
            </Reveal>
          </div>
          <ul className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:gap-8">
            {featuredExperiences.map((exp, i) => (
              <Reveal as="li" key={exp.id} delay={i * 0.08} className="sm:first:col-span-2">
                <article className="group">
                  <ImageReveal
                    src={exp.image.src}
                    alt={exp.image.alt}
                    ratio={i === 0 ? "aspect-16/9" : "aspect-4/3"}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <p className="eyebrow mt-5 text-accent">{exp.category}</p>
                  <h3 className="mt-2 font-serif text-2xl">{exp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-20 text-ink-foreground md:py-28" aria-labelledby="reviews-heading">
        <div className="shell">
          <SectionHeading
            tone="dark"
            eyebrow="Guest Words"
            title={<span id="reviews-heading">What Guests Say</span>}
            intro="We are collecting reviews from recent guests. Verified reviews will be published here — the cards below are placeholders while we gather them."
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.id} delay={i * 0.08}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="shell py-20 md:py-28" aria-labelledby="journal-heading">
        <SectionHeading
          eyebrow="Journal"
          title={<span id="journal-heading">Notes on Addis Ababa</span>}
          intro="Practical writing for travelers: what to expect, where to go and how to make the most of a few days in the city."
          action={
            <ButtonLink to="/journal" variant="outline">
              Read the Journal
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          }
        />
        <ul className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-8">
          {journal.slice(0, 3).map((post, i) => (
            <Reveal as="li" key={post.id} delay={i * 0.08}>
              <JournalCard post={post} />
            </Reveal>
          ))}
        </ul>
      </section>

      <LocationSection />
      <CTASection />
    </>
  );
}
