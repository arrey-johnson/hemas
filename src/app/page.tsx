import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { CTABanner } from "@/components/home/CTABanner";
import { Hero } from "@/components/home/Hero";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { Testimonials } from "@/components/home/Testimonials";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Event Decorator Jacksonville FL",
  description:
    "Hemas Decor — event decoration, rentals, and catering in Jacksonville, FL. Weddings, birthdays, showers, and graduations.",
  path: "/",
  keywords: [
    "event decorator Jacksonville FL",
    "party planner Jacksonville",
    "wedding decor Florida",
    "event catering Jacksonville",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServiceHighlights />
      <Testimonials />
      <CTABanner />
    </>
  );
}
