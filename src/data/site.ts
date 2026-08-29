export type NavItem = { label: string; to: string };

export const site = {
  name: "Hill Addis Guest House",
  shortName: "HILL ADDIS",
  tagline: "A quiet stay in the heart of Addis",
  description:
    "A warm and comfortable guesthouse experience designed for travelers discovering Addis Ababa.",
  phone: "+251 964 796 906",
  phoneHref: "tel:+251964796906",
  city: "Addis Ababa",
  country: "Ethiopia",
  location: "Addis Ababa, Ethiopia",
  mapsUrl:
    "https://www.google.com/maps/place/Hill+Addis+Guest+House/@9.0239187,38.8016131,882m/",
  currency: "ETB",
  /** Social links are intentionally empty until real accounts are provided. */
  socials: [] as { label: string; href: string }[],
};

export const primaryNav: NavItem[] = [
  { label: "Stay", to: "/rooms" },
  { label: "Experience", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "Journal", to: "/journal" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerNav = {
  explore: [
    { label: "Home", to: "/" },
    { label: "Rooms", to: "/rooms" },
    { label: "Gallery", to: "/gallery" },
    { label: "Experiences", to: "/experiences" },
    { label: "Journal", to: "/journal" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ] satisfies NavItem[],
  stay: [
    { label: "Rooms", to: "/rooms" },
    { label: "Booking", to: "/booking" },
    { label: "Contact", to: "/contact" },
  ] satisfies NavItem[],
};
