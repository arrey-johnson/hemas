import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gallery",
  description:
    "View past event decoration work from Hemas Decor — weddings, balloon arches, floral backdrops, birthdays, and catering in Jacksonville, FL.",
  path: "/gallery",
  keywords: [
    "event decor portfolio Jacksonville",
    "wedding decoration photos",
    "balloon arch gallery",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Recent weddings, birthdays, balloon displays, and catered events."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
      />
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
