export type JournalPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  image: { src: string; alt: string };
  /** Paragraph blocks — replaced by rich text from the CMS in a later phase. */
  body: { heading?: string; paragraphs: string[] }[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const journal: JournalPost[] = [
  {
    id: "post-first-time",
    slug: "first-time-guide-to-addis-ababa",
    title: "A First-Time Guide to Addis Ababa",
    category: "Guides",
    excerpt:
      "Altitude, weather, getting around and the few things worth knowing before your first morning in the city.",
    date: "2026-07-18",
    readingTime: "6 min read",
    image: { src: img("photo-1523805009345-7448845a9e53"), alt: "Rooftops and hills of Addis Ababa at golden hour" },
    body: [
      {
        paragraphs: [
          "Addis Ababa sits above 2,300 metres. That single fact shapes most of your first day: the light is sharp, the evenings are cool, and stairs are harder than you expect. Drink more water than usual and plan a slow first morning.",
          "The city is large and spread out, so distances that look walkable on a map often are not. Ride-hailing apps work well and are the simplest way to move between neighbourhoods.",
        ],
      },
      {
        heading: "What to pack",
        paragraphs: [
          "A light jacket for the evenings, comfortable shoes for uneven pavements, and sunscreen — the altitude makes the sun stronger than the temperature suggests.",
        ],
      },
      {
        heading: "Money and language",
        paragraphs: [
          "Cash is still useful for markets and small cafés, though cards are accepted in larger places. Amharic is the working language of the city, and English is widely spoken in hospitality and business.",
        ],
      },
    ],
  },
  {
    id: "post-things-to-see",
    slug: "things-to-see-in-addis-ababa",
    title: "Things to See in Addis Ababa",
    category: "City",
    excerpt:
      "Museums, viewpoints, markets and a few quieter corners that rarely make the shortlists.",
    date: "2026-06-30",
    readingTime: "5 min read",
    image: { src: img("photo-1578321272176-b7bbc0679853"), alt: "Interior of a museum gallery with artwork on display" },
    body: [
      {
        paragraphs: [
          "Most first visits start with the national collections, and they are worth the time. But the city opens up when you leave the obvious list behind — a neighbourhood café, an afternoon in a gallery, an hour on a hillside looking back at the sprawl.",
        ],
      },
      {
        heading: "Give yourself an unplanned afternoon",
        paragraphs: [
          "Addis rewards wandering. Pick a neighbourhood, walk until you find somewhere to sit, and let the day take its own shape.",
        ],
      },
    ],
  },
  {
    id: "post-coffee",
    slug: "ethiopian-coffee-culture",
    title: "Ethiopian Coffee Culture, Explained",
    category: "Food & Drink",
    excerpt:
      "Coffee here is not a takeaway habit. It is a ceremony, and it takes as long as it takes.",
    date: "2026-06-12",
    readingTime: "4 min read",
    image: { src: img("photo-1509042239860-f550ce710b93"), alt: "Coffee poured from a traditional clay jebena into small cups" },
    body: [
      {
        paragraphs: [
          "Green beans are washed, roasted over coals, ground by hand and brewed in a clay jebena. The whole thing takes the better part of an hour, and skipping steps rather defeats the purpose.",
          "Three rounds are traditionally served. Staying for all three is a small courtesy that says you are in no hurry.",
        ],
      },
    ],
  },
  {
    id: "post-megenagna",
    slug: "where-to-explore-around-megenagna",
    title: "Where to Explore Around Megenagna",
    category: "Neighbourhood",
    excerpt:
      "A busy, useful corner of the city — and a good base for getting anywhere else in Addis.",
    date: "2026-05-24",
    readingTime: "4 min read",
    image: { src: img("photo-1519996529931-28324d5a630e"), alt: "Busy street market with stalls and shoppers" },
    body: [
      {
        paragraphs: [
          "Megenagna is a transport hub before it is a destination, which is exactly what makes it practical. Roads run out in every direction, and you are rarely far from a café, a bakery or a place to buy what you forgot to pack.",
        ],
      },
    ],
  },
  {
    id: "post-weekend",
    slug: "a-weekend-in-addis-ababa",
    title: "A Weekend in Addis Ababa",
    category: "Itineraries",
    excerpt: "Two days, no rushing: an itinerary built around meals, walks and one long coffee.",
    date: "2026-05-02",
    readingTime: "7 min read",
    image: { src: img("photo-1502920917128-1aa500764cbd"), alt: "Hills and open sky on the outskirts of Addis Ababa" },
    body: [
      {
        heading: "Saturday",
        paragraphs: [
          "Start slowly with breakfast, then spend the morning in the museums before the afternoon heat. Lunch shared from one plate, then a long coffee somewhere with a view of the street.",
        ],
      },
      {
        heading: "Sunday",
        paragraphs: [
          "Head for the hills early, be back in the city by mid-afternoon, and finish with live music. It is enough for two days, and better than trying to fit in six things you will not remember.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => journal.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
