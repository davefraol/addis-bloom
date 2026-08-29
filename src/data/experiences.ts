/**
 * Things to explore around Addis Ababa. These are not services operated by
 * Hill Addis Guest House — they are local suggestions for guests.
 */
export type Experience = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string;
  image: { src: string; alt: string };
  featured: boolean;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const experiences: Experience[] = [
  {
    id: "exp-city",
    slug: "discover-addis-ababa",
    title: "Discover Addis Ababa",
    category: "City",
    summary:
      "Ethiopia's capital sits high in the hills, and it rewards travelers who take it slowly.",
    body: "Addis Ababa spreads across the hills at more than 2,300 metres, which means cool mornings, bright afternoons and evenings that call for a jacket. Start with a walk, take a taxi when the hills get steep, and give yourself more time than the map suggests.",
    image: { src: img("photo-1523805009345-7448845a9e53"), alt: "View across Addis Ababa in the evening light" },
    featured: true,
  },
  {
    id: "exp-coffee",
    slug: "local-food-and-coffee",
    title: "Local Food & Coffee",
    category: "Food",
    summary:
      "Injera shared from one plate, and coffee roasted in front of you rather than behind a counter.",
    body: "Eating in Addis is usually a shared affair. Order a combination platter and try a little of everything. Afterwards, find a coffee house where the beans are roasted, ground and brewed at your table — it takes time, and that is the point.",
    image: { src: img("photo-1509042239860-f550ce710b93"), alt: "Traditional Ethiopian coffee being poured from a jebena" },
    featured: true,
  },
  {
    id: "exp-culture",
    slug: "city-culture",
    title: "City Culture",
    category: "Culture",
    summary: "Museums, galleries and live music that show the city as it is today.",
    body: "Between the national collections and the smaller independent galleries, Addis has a cultural life that is easy to miss if you only pass through. Evenings bring live music in venues across the city, from jazz clubs to neighbourhood bars.",
    image: { src: img("photo-1578321272176-b7bbc0679853"), alt: "Gallery interior with framed artwork on the wall" },
    featured: true,
  },
  {
    id: "exp-markets",
    slug: "markets-and-shopping",
    title: "Markets & Shopping",
    category: "Shopping",
    summary: "Spices, coffee, handwoven cotton and baskets, bought where they are made.",
    body: "Markets are the fastest way to understand a city. Bring small notes, expect to talk before you buy, and leave space in your bag for coffee and handwoven scarves.",
    image: { src: img("photo-1547471080-7cc2caa01a7e"), alt: "Colourful spices on display at a market stall" },
    featured: false,
  },
  {
    id: "exp-heritage",
    slug: "ethiopian-heritage",
    title: "Ethiopian Heritage",
    category: "Heritage",
    summary: "A long history, still very present in daily life across the country.",
    body: "Ethiopia keeps its own calendar, its own clock and one of the oldest written scripts in continuous use. Spend an afternoon with that history before travelling north or south, and the rest of the trip makes more sense.",
    image: { src: img("photo-1526481280693-3bfa7568e0f3"), alt: "Historic stone architecture detail in Ethiopia" },
    featured: false,
  },
  {
    id: "exp-nearby",
    slug: "nearby-attractions",
    title: "Nearby Attractions",
    category: "Day trips",
    summary: "Forest, viewpoints and quiet roads within an easy drive of the city.",
    body: "When the city gets loud, the hills around it are close. A short drive brings eucalyptus forest, cool air and views back over Addis — an easy half day out and back.",
    image: { src: img("photo-1502920917128-1aa500764cbd"), alt: "Green highland landscape near Addis Ababa" },
    featured: false,
  },
];

export const featuredExperiences = experiences.filter((e) => e.featured);
