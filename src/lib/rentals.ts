export type RentalCategory = "chairs" | "tables" | "backdrops" | "tableware";

export interface RentalItem {
  id: string;
  name: string;
  category: RentalCategory;
  description: string;
  image: string;
  priceNote?: string;
}

export const RENTAL_CATEGORIES: { value: RentalCategory | "all"; label: string }[] = [
  { value: "all", label: "All Items" },
  { value: "chairs", label: "Chairs" },
  { value: "tables", label: "Tables" },
  { value: "backdrops", label: "Backdrops" },
  { value: "tableware", label: "Tableware" },
];

export const RENTAL_ITEMS: RentalItem[] = [
  {
    id: "chiavari-gold",
    name: "Gold Chiavari Chairs",
    category: "chairs",
    description: "Elegant gold chiavari chairs with optional ivory cushions — perfect for weddings and formal receptions.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    priceNote: "From $8/chair",
  },
  {
    id: "chiavari-silver",
    name: "Silver Chiavari Chairs",
    category: "chairs",
    description: "Classic silver chiavari seating that complements any color palette and venue style.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    priceNote: "From $8/chair",
  },
  {
    id: "folding-white",
    name: "White Folding Chairs",
    category: "chairs",
    description: "Clean, versatile white folding chairs ideal for outdoor events, graduations, and casual gatherings.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    priceNote: "From $4/chair",
  },
  {
    id: "kids-party-chairs",
    name: "Kids Party Chairs",
    category: "chairs",
    description: "Colorful, child-sized seating for toddler and kids birthday parties.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    priceNote: "From $3/chair",
  },
  {
    id: "round-60",
    name: '60" Round Tables',
    category: "tables",
    description: "Seats 8–10 guests comfortably. Linens and centerpieces pair beautifully with these classics.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
    priceNote: "From $12/table",
  },
  {
    id: "round-72",
    name: '72" Round Tables',
    category: "tables",
    description: "Spacious round tables for larger guest counts — ideal for wedding receptions and banquets.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    priceNote: "From $15/table",
  },
  {
    id: "rectangular-8ft",
    name: "8ft Rectangular Tables",
    category: "tables",
    description: "Versatile banquet tables for buffet setups, head tables, and family-style dining.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
    priceNote: "From $10/table",
  },
  {
    id: "cocktail-highboy",
    name: "Cocktail Highboy Tables",
    category: "tables",
    description: "Standing-height tables for cocktail hours, receptions, and mingling areas.",
    image: "https://images.unsplash.com/photo-1415201361474-6ed8d86fc06b?w=600&q=80",
    priceNote: "From $14/table",
  },
  {
    id: "floral-arch",
    name: "Floral Arch Backdrop",
    category: "backdrops",
    description: "Floral arch for ceremony backdrops, photo areas, and head tables.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    priceNote: "Custom quote",
  },
  {
    id: "balloon-arch",
    name: "Balloon Arch Display",
    category: "backdrops",
    description: "Custom balloon arches in your theme colors — a show-stopping entrance or photo backdrop.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    priceNote: "From $250",
  },
  {
    id: "sequin-wall",
    name: "Sequin Wall Backdrop",
    category: "backdrops",
    description: "Glamorous sequin panel backdrop available in gold, silver, or rose gold for photo moments.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    priceNote: "From $175",
  },
  {
    id: "ring-arch",
    name: "Modern Ring Arch",
    category: "backdrops",
    description: "Contemporary circular arch with greenery and florals — a trending wedding favorite.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    priceNote: "Custom quote",
  },
  {
    id: "tablecloth-ivory",
    name: "Ivory Table Linens",
    category: "tableware",
    description: "Premium ivory tablecloths in multiple sizes to fit round and rectangular tables.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
    priceNote: "From $8/linen",
  },
  {
    id: "charger-plates",
    name: "Gold Charger Plates",
    category: "tableware",
    description: "Elegant gold charger plates that elevate any place setting for formal events.",
    image: "https://images.unsplash.com/photo-1415201361474-6ed8d86fc06b?w=600&q=80",
    priceNote: "From $2/plate",
  },
  {
    id: "dinnerware-set",
    name: "Premium Dinnerware Set",
    category: "tableware",
    description: "Complete place settings including plates, napkins, and flatware for up to 100 guests.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80",
    priceNote: "From $5/guest",
  },
  {
    id: "glassware-set",
    name: "Glassware Collection",
    category: "tableware",
    description: "Wine glasses, champagne flutes, and water goblets for elegant tablescapes.",
    image: "https://images.unsplash.com/photo-1415201361474-6ed8d86fc06b?w=600&q=80",
    priceNote: "From $3/guest",
  },
];
