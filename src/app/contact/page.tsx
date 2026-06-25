import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { BookingForm, ContactInfo } from "@/components/contact/BookingForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book an Event",
  description:
    "Contact Hemas Decor to book event decoration, rentals, or catering in Jacksonville, FL. Request a quote for weddings, birthdays, showers, and more.",
  path: "/contact",
  keywords: [
    "book event decorator Jacksonville",
    "event quote Jacksonville FL",
    "wedding decor booking",
  ],
});

function BookingFormFallback() {
  return (
    <div className="flex h-96 items-center justify-center rounded-2xl border border-champagne-200/40 bg-white shadow-card">
      <p className="text-plum-600/60">Loading form...</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Book an Event"
        subtitle="Share your event details and we'll confirm availability and pricing."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
      />
      <section className="bg-ivory-100 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-5 lg:gap-16 sm:px-6 lg:px-8">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <Suspense fallback={<BookingFormFallback />}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
