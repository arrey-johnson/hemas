import { PageHero } from "@/components/ui/PageHero";
import { RentalCatalog } from "@/components/rentals/RentalCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Rentals Catalog",
  description:
    "Browse chairs, tables, backdrops, and tableware rentals from Hemas Decor in Jacksonville, FL. Chiavari chairs, round tables, balloon arches, and more.",
  path: "/rentals",
  keywords: [
    "party rental Jacksonville",
    "chair rental Jacksonville FL",
    "table rental events",
    "balloon arch rental",
    "wedding backdrop rental",
  ],
});

export default function RentalsPage() {
  return (
    <>
      <PageHero
        title="Rentals Catalog"
        subtitle="Chairs, tables, backdrops, and tableware available to rent."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
      />
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalCatalog />
        </div>
      </section>
    </>
  );
}
