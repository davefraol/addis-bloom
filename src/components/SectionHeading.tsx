import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  action,
}: Props) {
  return (
    <Reveal
      className={cn(
        "flex w-full flex-col gap-5",
        align === "center" && "items-center text-center",
        action && "md:flex-row md:items-end md:justify-between md:gap-10",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow rule-line mb-5",
              tone === "dark" ? "text-accent-soft" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-balance font-serif text-3xl leading-[1.12] sm:text-4xl lg:text-[2.9rem]",
            tone === "dark" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.975rem] leading-relaxed",
              align === "center" && "mx-auto",
              tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
