import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { ButtonLink } from "@/components/Button";
import { JournalCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/Sections";
import { formatDate, getPostBySlug, journal } from "@/data/journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Hill Addis Guest House" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Hill Addis Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/journal/${params.slug}` },
        { property: "og:image", content: post.image.src },
        { name: "twitter:image", content: post.image.src },
      ],
      links: [{ rel: "canonical", href: `/journal/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.image.src,
            author: { "@type": "Organization", name: "Hill Addis Guest House" },
          }),
        },
      ],
    };
  },
  component: JournalPostPage,
  errorComponent: PostError,
  notFoundComponent: PostNotFound,
});

function JournalPostPage() {
  const { post } = Route.useLoaderData();
  const related = journal.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-ink pt-24">
        <div className="relative h-[44vh] min-h-[300px] overflow-hidden md:h-[58vh]">
          <img
            src={post.image.src}
            alt={post.image.alt}
            fetchPriority="high"
            decoding="async"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/88 to-ink/10" aria-hidden="true" />
          <div className="shell absolute inset-x-0 bottom-0 pb-10">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-foreground/70 transition-colors hover:text-accent-soft"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Journal
            </Link>
            <p className="eyebrow mt-5 text-accent-soft">{post.category}</p>
            <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl leading-[1.1] text-ink-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-foreground/60">
              {formatDate(post.date)} · {post.readingTime}
            </p>
          </div>
        </div>
      </section>

      <article className="shell py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-serif text-2xl leading-snug text-foreground">{post.excerpt}</p>
          <div className="mt-10 space-y-10">
            {post.body.map((block, i) => (
              <section key={i}>
                {block.heading ? (
                  <h2 className="font-serif text-2xl">{block.heading}</h2>
                ) : null}
                <div className={block.heading ? "mt-4 space-y-5" : "space-y-5"}>
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Reveal>
      </article>

      <section className="border-t border-border bg-secondary/45 py-16 md:py-24">
        <div className="shell">
          <h2 className="font-serif text-3xl">Keep reading</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:gap-8">
            {related.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 0.08}>
                <JournalCard post={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function PostNotFound() {
  return (
    <Fallback
      title="We couldn't find that article"
      body="The article may have been moved or renamed."
    />
  );
}

function PostError() {
  return (
    <Fallback
      title="This article didn't load"
      body="Something went wrong on our end. Try again, or browse the journal."
    />
  );
}

function Fallback({ title, body }: { title: string; body: string }) {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="font-serif text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-muted-foreground">{body}</p>
      <ButtonLink to="/journal" variant="accent" className="mt-8">
        Back to the journal
      </ButtonLink>
    </section>
  );
}
