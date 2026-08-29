import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
};

/** Restrained fade-up used across the site. Disabled under prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) return <Comp className={className}>{children}</Comp>;

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
};

/** Image in a fixed-ratio frame with a subtle scale-in on hover. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-4/3",
  priority = false,
  sizes,
}: ImageRevealProps) {
  return (
    <div className={cn("group/img relative overflow-hidden bg-secondary", ratio, className)}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "size-full object-cover transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.04]",
          imgClassName,
        )}
      />
    </div>
  );
}
