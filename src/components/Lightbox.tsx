import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

import type { GalleryImage } from "@/data/gallery";

type Props = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null || images.length === 0) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  const current = index !== null ? images[index] : undefined;

  return (
    <AnimatePresence>
      {open && current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${index + 1} of ${images.length}: ${current.alt}`}
          className="fixed inset-0 z-70 flex flex-col bg-ink/97 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex shrink-0 items-center justify-between px-5 py-4 text-ink-foreground">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60">
              {current.category} — {index + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image viewer"
              className="inline-flex size-11 items-center justify-center text-ink-foreground/80 hover:text-ink-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 z-10 inline-flex size-12 items-center justify-center bg-ink/60 text-ink-foreground hover:bg-ink md:left-6"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <motion.img
              key={current.id}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="max-h-full max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 z-10 inline-flex size-12 items-center justify-center bg-ink/60 text-ink-foreground hover:bg-ink md:right-6"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          </div>

          <p className="shrink-0 px-6 pb-6 text-center text-sm text-ink-foreground/60">
            {current.alt}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
