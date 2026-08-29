/**
 * PHASE 1 mock data. Shape mirrors the future `rooms` table so the UI can be
 * swapped to a remote data source without touching components.
 */
export type Room = {
  id: string;
  slug: string;
  name: string;
  roomType: string;
  shortDescription: string;
  description: string;
  /** Placeholder nightly rate — replace with real rates before launch. */
  price: number;
  currency: string;
  capacity: number;
  size: string;
  bedType: string;
  view: string;
  featured: boolean;
  amenities: string[];
  images: { src: string; alt: string }[];
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const rooms: Room[] = [
  {
    id: "room-deluxe",
    slug: "deluxe-room",
    name: "Deluxe Room",
    roomType: "Double",
    shortDescription:
      "A calm, light-filled room with a comfortable queen bed and a quiet corner to work or read.",
    description:
      "The Deluxe Room is made for travelers who want an easy place to land at the end of the day. Soft natural light through the morning, a comfortable queen bed, and enough space to unpack properly rather than living out of a suitcase. Textiles and finishes are kept warm and simple, so the room feels restful rather than styled.",
    price: 4200,
    currency: "ETB",
    capacity: 2,
    size: "24 m²",
    bedType: "Queen bed",
    view: "Garden side",
    featured: true,
    amenities: [
      "Free Wi-Fi",
      "Private bathroom",
      "Hot water",
      "Desk & chair",
      "Daily housekeeping",
      "Tea & coffee",
    ],
    images: [
      { src: img("photo-1611892440504-42a792e24d32"), alt: "Deluxe Room with a made queen bed and warm morning light" },
      { src: img("photo-1595576508898-0ad5c879a061"), alt: "Reading corner with an armchair beside the window" },
      { src: img("photo-1584132967334-10e028bd69f7"), alt: "Private bathroom with a walk-in shower" },
    ],
  },
  {
    id: "room-executive",
    slug: "executive-room",
    name: "Executive Room",
    roomType: "Double",
    shortDescription:
      "A larger room with a dedicated work area, ideal for longer stays and working visits.",
    description:
      "The Executive Room gives you a little more room to spread out. A separate work area with a proper desk, a seating chair for slower evenings, and a king bed with layered bedding. It suits guests staying a week or more, or anyone in Addis for work who would rather not spend the evening in a lobby.",
    price: 5600,
    currency: "ETB",
    capacity: 2,
    size: "32 m²",
    bedType: "King bed",
    view: "City side",
    featured: true,
    amenities: [
      "Free Wi-Fi",
      "Work desk",
      "Private bathroom",
      "Hot water",
      "Wardrobe",
      "Daily housekeeping",
      "Tea & coffee",
    ],
    images: [
      { src: img("photo-1591088398332-8a7791972843"), alt: "Executive Room with a king bed and a dedicated desk area" },
      { src: img("photo-1618773928121-c32242e63f39"), alt: "Seating area with an armchair and side table" },
      { src: img("photo-1552858725-2758b5fb1286"), alt: "Desk with a lamp and natural light from the window" },
    ],
  },
  {
    id: "room-family-suite",
    slug: "family-suite",
    name: "Family Suite",
    roomType: "Suite",
    shortDescription:
      "Two connected sleeping areas and a shared sitting space for families travelling together.",
    description:
      "The Family Suite is arranged around a shared sitting space, with two sleeping areas either side. It works well for families with children, or for two couples travelling together who want to stay close without sharing a room. Extra storage and a larger bathroom make longer stays practical.",
    price: 8400,
    currency: "ETB",
    capacity: 4,
    size: "48 m²",
    bedType: "King bed + two singles",
    view: "Garden side",
    featured: true,
    amenities: [
      "Free Wi-Fi",
      "Sitting area",
      "Two sleeping areas",
      "Private bathroom",
      "Hot water",
      "Extra storage",
      "Daily housekeeping",
    ],
    images: [
      { src: img("photo-1566665797739-1674de7a421a"), alt: "Family Suite sitting area with sofa and soft lighting" },
      { src: img("photo-1560448204-e02f11c3d0e2"), alt: "Second sleeping area with two single beds" },
      { src: img("photo-1631049307264-da0ec9d70304"), alt: "Main bedroom of the Family Suite with a king bed" },
    ],
  },
  {
    id: "room-twin",
    slug: "twin-room",
    name: "Twin Room",
    roomType: "Twin",
    shortDescription:
      "Two single beds, simple and well-kept — a practical choice for friends or colleagues.",
    description:
      "A straightforward, well-kept room with two single beds, good storage and the same care given to every room in the house. Popular with colleagues travelling together and with friends who would rather share the cost than the bed.",
    price: 3900,
    currency: "ETB",
    capacity: 2,
    size: "22 m²",
    bedType: "Two single beds",
    view: "Courtyard",
    featured: false,
    amenities: ["Free Wi-Fi", "Private bathroom", "Hot water", "Wardrobe", "Daily housekeeping"],
    images: [
      { src: img("photo-1590490360182-c33d57733427"), alt: "Twin Room with two neatly made single beds" },
      { src: img("photo-1505693416388-ac5ce068fe85"), alt: "Bedside table with a lamp and folded linen" },
    ],
  },
  {
    id: "room-garden-studio",
    slug: "garden-studio",
    name: "Garden Studio",
    roomType: "Studio",
    shortDescription:
      "A ground-floor studio opening onto the garden, with a small kitchenette for longer stays.",
    description:
      "A quiet ground-floor studio with its own entrance and a door onto the garden. A compact kitchenette means you can make breakfast at your own pace, which makes it a good fit for guests staying several weeks.",
    price: 6300,
    currency: "ETB",
    capacity: 2,
    size: "36 m²",
    bedType: "Queen bed",
    view: "Direct garden access",
    featured: false,
    amenities: [
      "Free Wi-Fi",
      "Kitchenette",
      "Private entrance",
      "Private bathroom",
      "Hot water",
      "Weekly housekeeping",
    ],
    images: [
      { src: img("photo-1522708323590-d24dbb6b0267"), alt: "Garden Studio interior with a queen bed and garden doors" },
      { src: img("photo-1493809842364-78817add7ffb"), alt: "Small kitchenette with counter and shelves" },
    ],
  },
];

export const getRoomBySlug = (slug: string) => rooms.find((r) => r.slug === slug);
export const featuredRooms = rooms.filter((r) => r.featured);

export const formatPrice = (price: number, currency: string) =>
  `${currency} ${price.toLocaleString("en-US")}`;
