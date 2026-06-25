export const SITE = {
  name: "Hemas Decor",
  subtitle: "Decor · Rentals · Catering",
  description:
    "Event decoration, rentals, and catering in Jacksonville, FL. Weddings, birthdays, showers, graduations, and receptions.",
  url: "https://hemasdecor.com",
} as const;

export const CONTACT = {
  address: "11111 San Jose Blvd Suite 56 #1374",
  city: "Jacksonville, FL 32223",
  phones: ["(904) 235-7122", "(904) 553-4384"],
  email: "info@hemasdecor.com",
  serviceArea: "Greater Jacksonville, FL",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rentals", label: "Rentals" },
  { href: "/services", label: "Events & Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Book an Event" },
] as const;

export const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", platform: "facebook" as const },
  { href: "#", label: "Instagram", platform: "instagram" as const },
] as const;

export const SERVICES = [
  {
    title: "Weddings",
    description:
      "Ceremony and reception styling — arches, table settings, linens, and full venue layout.",
    icon: "heart" as const,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    title: "Birthdays",
    description:
      "Party decor for all ages, from toddlers to adults. Custom themes, balloon work, and backdrops.",
    icon: "cake" as const,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  },
  {
    title: "Showers",
    description:
      "Baby and bridal shower setups with table decor, centerpieces, and coordinated color schemes.",
    icon: "gift" as const,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    title: "Catering",
    description:
      "Event meals, specialty cakes, and desserts. Available as a standalone service or with decor.",
    icon: "utensils" as const,
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "They handled our wedding decor from start to finish. Setup was on time and everything looked exactly how we discussed.",
    author: "Sarah & Michael",
    event: "Wedding Reception",
  },
  {
    quote:
      "The balloon arch was the hit of the party. Several guests asked who did the decor.",
    author: "Jennifer R.",
    event: "Sweet 16 Birthday",
  },
  {
    quote:
      "Easy to work with and responsive over text. The baby shower setup came together quickly.",
    author: "Amanda T.",
    event: "Baby Shower",
  },
] as const;
