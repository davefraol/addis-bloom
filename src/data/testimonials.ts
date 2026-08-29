/**
 * PLACEHOLDER testimonials for layout purposes only.
 * These are not real guest reviews and must be replaced with verified reviews
 * before the site goes live.
 */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  origin: string;
  placeholder: true;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Placeholder review copy. This space is reserved for a verified guest review once real feedback is collected.",
    author: "Guest review",
    origin: "Pending verification",
    placeholder: true,
  },
  {
    id: "t2",
    quote:
      "Placeholder review copy. Reviews will be published here exactly as guests wrote them, with no edits.",
    author: "Guest review",
    origin: "Pending verification",
    placeholder: true,
  },
  {
    id: "t3",
    quote:
      "Placeholder review copy. Until then, we would rather leave this blank than invent something.",
    author: "Guest review",
    origin: "Pending verification",
    placeholder: true,
  },
];
