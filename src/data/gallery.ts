export type GalleryCategory =
  | "Rooms"
  | "Interiors"
  | "Dining"
  | "Addis Ababa"
  | "Experiences";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Layout hint used by the editorial grid. */
  orientation: "portrait" | "landscape" | "square";
};

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryCategories: GalleryCategory[] = [
  "Rooms",
  "Interiors",
  "Dining",
  "Addis Ababa",
  "Experiences",
];

export const gallery: GalleryImage[] = [
  { id: "g1", src: img("photo-1611892440504-42a792e24d32"), alt: "Guest room with a made bed and morning light through linen curtains", category: "Rooms", orientation: "landscape" },
  { id: "g2", src: img("photo-1631049307264-da0ec9d70304"), alt: "Corner of a guest room with a wooden chair and folded blanket", category: "Rooms", orientation: "portrait" },
  { id: "g3", src: img("photo-1590490360182-c33d57733427"), alt: "Twin beds with warm bedside lamps", category: "Rooms", orientation: "landscape" },
  { id: "g4", src: img("photo-1584132967334-10e028bd69f7"), alt: "Bathroom detail with tiled walls and a shower", category: "Rooms", orientation: "portrait" },
  { id: "g5", src: img("photo-1600210492486-724fe5c67fb0"), alt: "Sitting room with soft seating and natural textiles", category: "Interiors", orientation: "landscape" },
  { id: "g6", src: img("photo-1505691938895-1758d7feb511"), alt: "Quiet reading nook beside a tall window", category: "Interiors", orientation: "portrait" },
  { id: "g7", src: img("photo-1616486338812-3dadae4b4ace"), alt: "Hallway with warm wood floors and framed artwork", category: "Interiors", orientation: "landscape" },
  { id: "g8", src: img("photo-1533777857889-4be7c70b33f7"), alt: "Breakfast table set with fresh bread and fruit", category: "Dining", orientation: "landscape" },
  { id: "g9", src: img("photo-1447933601403-0c6688de566e"), alt: "Cup of Ethiopian coffee on a wooden table", category: "Dining", orientation: "portrait" },
  { id: "g10", src: img("photo-1414235077428-338989a2e8c0"), alt: "Warmly lit dining space in the evening", category: "Dining", orientation: "landscape" },
  { id: "g11", src: img("photo-1523805009345-7448845a9e53"), alt: "City lights across Addis Ababa at dusk", category: "Addis Ababa", orientation: "landscape" },
  { id: "g12", src: img("photo-1547471080-7cc2caa01a7e"), alt: "Spices displayed in an Addis Ababa market", category: "Addis Ababa", orientation: "portrait" },
  { id: "g13", src: img("photo-1519996529931-28324d5a630e"), alt: "Market stall with baskets and textiles", category: "Addis Ababa", orientation: "landscape" },
  { id: "g14", src: img("photo-1509042239860-f550ce710b93"), alt: "Coffee being poured during a traditional ceremony", category: "Experiences", orientation: "portrait" },
  { id: "g15", src: img("photo-1442512595331-e89e73853f31"), alt: "Roasted coffee beans cooling in a pan", category: "Experiences", orientation: "landscape" },
  { id: "g16", src: img("photo-1502920917128-1aa500764cbd"), alt: "Highland landscape on the edge of the city", category: "Experiences", orientation: "landscape" },
];
