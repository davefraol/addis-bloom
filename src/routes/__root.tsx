import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-28">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-accent">Error 404</p>
        <h1 className="mt-5 text-balance font-serif text-4xl leading-tight sm:text-5xl">
          This Page Took a Different Route
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          The page you're looking for doesn't seem to be here. It may have moved, or the link may
          have a small typo in it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/" variant="dark">
            Return Home
          </ButtonLink>
          <ButtonLink to="/rooms" variant="outline">
            Explore Rooms
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center border border-accent bg-accent px-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex h-11 items-center border border-border-strong px-6 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hill Addis Guest House | Stay in Addis Ababa, Ethiopia" },
      {
        name: "description",
        content:
          "Discover Hill Addis Guest House in Addis Ababa. Explore comfortable rooms, local experiences and plan your stay in Ethiopia.",
      },
      { property: "og:site_name", content: "Hill Addis Guest House" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F6F3EE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Karla:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: site.name,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressCountry: "ET",
          },
          hasMap: site.mapsUrl,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = pathname === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ink focus:px-4 focus:py-3 focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <Navbar overlay={overlay} />
      <main id="main" className={overlay ? "" : "pt-18 md:pt-20"}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
