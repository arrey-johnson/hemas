export type GalleryCategory =
  | "weddings"
  | "birthdays"
  | "balloons"
  | "showers"
  | "catering";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  height: "short" | "medium" | "tall";
}

export const GALLERY_CATEGORIES: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "weddings", label: "Weddings" },
  { value: "birthdays", label: "Birthdays" },
  { value: "balloons", label: "Balloon Arches" },
  { value: "showers", label: "Showers" },
  { value: "catering", label: "Catering" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "wedding-1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Elegant wedding reception with floral centerpieces and gold chiavari chairs",
    category: "weddings",
    height: "tall",
  },
  {
    id: "wedding-2",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Outdoor wedding ceremony with romantic lighting",
    category: "weddings",
    height: "medium",
  },
  {
    id: "balloon-1",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    alt: "Colorful balloon arch display for birthday celebration",
    category: "balloons",
    height: "short",
  },
  {
    id: "birthday-1",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    alt: "Kids birthday party with themed decorations",
    category: "birthdays",
    height: "medium",
  },
  {
    id: "shower-1",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    alt: "Beautifully styled baby shower with pastel decor",
    category: "showers",
    height: "tall",
  },
  {
    id: "wedding-3",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Wedding floral arch backdrop with greenery",
    category: "weddings",
    height: "medium",
  },
  {
    id: "balloon-2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Organic balloon garland in blush and gold tones",
    category: "balloons",
    height: "tall",
  },
  {
    id: "catering-1",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    alt: "Elegant catered buffet spread for reception",
    category: "catering",
    height: "short",
  },
  {
    id: "birthday-2",
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Sweet sixteen party with modern decor",
    category: "birthdays",
    height: "medium",
  },
  {
    id: "shower-2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Bridal shower tablescape with floral arrangements",
    category: "showers",
    height: "short",
  },
  {
    id: "catering-2",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80",
    alt: "Specialty tiered cake with elegant frosting",
    category: "catering",
    height: "tall",
  },
  {
    id: "balloon-3",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Grand balloon display at event entrance",
    category: "balloons",
    height: "medium",
  },
];
