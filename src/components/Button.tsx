import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-xs border font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent:
          "border-accent bg-accent text-accent-foreground hover:bg-accent/88 hover:border-accent/88",
        dark: "border-ink bg-ink text-ink-foreground hover:bg-foreground hover:border-foreground",
        outline:
          "border-border-strong bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghostLight:
          "border-ink-foreground/50 bg-transparent text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground/10",
        quiet:
          "border-transparent bg-transparent text-foreground underline-offset-4 hover:text-accent",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8",
      },
    },
    defaultVariants: { variant: "accent", size: "md" },
  },
);

type Variants = VariantProps<typeof buttonStyles>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
