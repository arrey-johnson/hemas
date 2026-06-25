export interface ServicePackage {
  id: string;
  name: string;
  tier: "essential" | "premium" | "luxury";
  price: string;
  description: string;
  features: string[];
  idealFor: string;
}

export interface EventTheme {
  id: string;
  name: string;
  description: string;
  image: string;
  eventTypes: string[];
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "essential",
    name: "Essential",
    tier: "essential",
    price: "Starting at $499",
    description: "For smaller events with basic styling needs.",
    idealFor: "Showers, small birthdays, graduations",
    features: [
      "Basic table & chair styling",
      "1 accent backdrop or balloon cluster",
      "Table linens & simple centerpieces",
      "Setup and breakdown included",
      "Consultation & theme planning",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tier: "premium",
    price: "Starting at $1,299",
    description: "Full styling for mid-size events. Our most booked option.",
    idealFor: "Weddings, receptions, milestone birthdays",
    features: [
      "Full venue styling & layout design",
      "Custom arch or balloon display",
      "Premium linens, chargers & tableware",
      "Floral accents & coordinated color palette",
      "Rental coordination included",
      "Day-of setup & styling team",
    ],
  },
  {
    id: "luxury",
    name: "Luxury",
    tier: "luxury",
    price: "Custom Quote",
    description: "Large-scale events with full decor, rentals, and coordination.",
    idealFor: "Large weddings, receptions, corporate events",
    features: [
      "Complete venue transformation",
      "Custom floral arch & premium backdrops",
      "Full rental package (chairs, tables, linens)",
      "Catering coordination & specialty cake",
      "Lighting design & ambiance styling",
      "Dedicated event coordinator",
      "Teardown & venue restoration",
    ],
  },
];

export const EVENT_THEMES = [
  {
    id: "romantic-garden",
    name: "Romantic Garden",
    description: "Florals, greenery, and neutral tones for outdoor and indoor ceremonies.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    eventTypes: ["Weddings", "Bridal Showers", "Anniversaries"],
  },
  {
    id: "balloon-bliss",
    name: "Balloon Display",
    description: "Balloon arches, garlands, and columns in your chosen colors.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    eventTypes: ["Birthdays", "Baby Showers", "Graduations"],
  },
  {
    id: "gold-glamour",
    name: "Gold Glamour",
    description: "Gold accents, sequin panels, and formal table settings.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    eventTypes: ["Weddings", "Sweet 16", "Receptions"],
  },
  {
    id: "pastel-soft",
    name: "Pastel Soft",
    description: "Light pastel colors for kids parties, showers, and spring events.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    eventTypes: ["Baby Showers", "Kids Birthdays", "Toddler Parties"],
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean lines, neutral tones, and architectural backdrops for a contemporary feel.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    eventTypes: ["Graduations", "Adult Birthdays", "Corporate Events"],
  },
  {
    id: "tropical-celebration",
    name: "Tropical Celebration",
    description: "Bold colors and greenery for outdoor parties and receptions.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    eventTypes: ["Receptions", "Summer Birthdays", "Outdoor Weddings"],
  },
] as const satisfies EventTheme[];

export const EVENT_TYPES_LIST = [
  "Wedding",
  "Reception",
  "Adult Birthday",
  "Kids Birthday",
  "Toddler Birthday",
  "Teen Birthday",
  "Baby Shower",
  "Bridal Shower",
  "Graduation",
  "Other",
] as const;
