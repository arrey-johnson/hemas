import { PageHero } from "@/components/ui/PageHero";
import { ServicePackages } from "@/components/services/ServicePackages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Events & Services",
  description:
    "Explore event decoration packages and themes from Hemas Decor — weddings, birthdays, showers, graduations, and receptions in Jacksonville, FL.",
  path: "/services",
  keywords: [
    "wedding decoration packages Jacksonville",
    "birthday party decor",
    "event themes Florida",
    "bridal shower styling",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Events & Services"
        subtitle="Decoration packages and themes for weddings, birthdays, showers, and more."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
      />
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicePackages />
        </div>
      </section>
    </>
  );
}
