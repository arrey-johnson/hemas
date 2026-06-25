import { Cake, Heart, PartyPopper, UtensilsCrossed } from "lucide-react";

export const ABOUT_HIGHLIGHTS = [
  {
    icon: Heart,
    title: "Event Decoration",
    description:
      "Backdrops, balloon displays, table styling, and full venue setup for weddings, showers, and parties.",
  },
  {
    icon: PartyPopper,
    title: "Rentals",
    description:
      "Chairs, tables, linens, plates, and custom arches — delivered and picked up for your event date.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    description:
      "Meals, specialty cakes, and treats for your guest list, booked on its own or with decor.",
  },
  {
    icon: Cake,
    title: "All Ages & Occasions",
    description:
      "Adult, kids, toddler, and teen birthdays, plus graduations, receptions, and corporate events.",
  },
] as const;

export const ABOUT_STEPS = [
  {
    step: "01",
    title: "Tell us your plans",
    description: "Share your date, venue, guest count, and what you need — decor, rentals, or catering.",
  },
  {
    step: "02",
    title: "We build your quote",
    description: "We confirm availability, walk through layout and colors, and send clear pricing.",
  },
  {
    step: "03",
    title: "We handle setup",
    description: "Our team arrives on schedule, sets up, and breaks down when the event is over.",
  },
] as const;
