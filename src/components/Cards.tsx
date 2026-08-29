import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ImageReveal } from "@/components/Reveal";
import type { Experience } from "@/data/experiences";
import { formatDate, type JournalPost } from "@/data/journal";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function ExperienceCard({
  experience,
  large = false,
}: {
  experience: Experience;
  large?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col">
      <ImageReveal
        src={experience.image.src}
        alt={experience.image.alt}
        ratio={large ? "aspect-3/2" : "aspect-4/3"}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="pt-6">
        <p className="eyebrow text-accent">{experience.category}</p>
        <h3
          className={cn(
            "mt-3 font-serif leading-tight",
            large ? "text-3xl sm:text-[2.1rem]" : "text-2xl",
          )}
        >
          {experience.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {experience.summary}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/85">
          {experience.body}
        </p>
      </div>
    </article>
  );
}

export function JournalCard({ post, large = false }: { post: JournalPost; large?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to="/journal/$slug"
        params={{ slug: post.slug }}
        tabIndex={-1}
        aria-hidden="true"
        className="block"
      >
        <ImageReveal
          src={post.image.src}
          alt={post.image.alt}
          ratio={large ? "aspect-16/10" : "aspect-4/3"}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-accent">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3 className={cn("mt-3 font-serif leading-tight", large ? "text-3xl" : "text-2xl")}>
          <Link
            to="/journal/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-accent"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/journal/$slug"
          params={{ slug: post.slug }}
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent"
        >
          Read Article
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
          <span className="sr-only">— {post.title}</span>
        </Link>
      </div>
    </article>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-ink-foreground/12 p-8">
      <blockquote className="flex-1 font-serif text-xl leading-relaxed text-ink-foreground/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-ink-foreground/12 pt-5 text-xs uppercase tracking-[0.16em] text-ink-foreground/55">
        {testimonial.author}
        <span className="mt-1 block normal-case tracking-normal text-ink-foreground/40">
          {testimonial.origin}
        </span>
      </figcaption>
    </figure>
  );
}
