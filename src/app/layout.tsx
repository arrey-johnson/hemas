import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CONTACT, SITE } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Event Decorator Jacksonville FL`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "event decorator Jacksonville FL",
    "wedding decor Jacksonville",
    "party rentals Jacksonville",
    "event catering Jacksonville",
    "balloon arches Jacksonville",
    "Hemas Decor",
    "birthday party decoration",
    "bridal shower decor",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE.name} | Event Decorator Jacksonville FL`,
    description: SITE.description,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    url: SITE.url,
    images: [
      {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hemas Decor — Event Decoration Jacksonville FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Event Decorator Jacksonville FL`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  category: "Event Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE.url}/#business`,
              name: SITE.name,
              description: SITE.description,
              url: SITE.url,
              email: CONTACT.email,
              telephone: CONTACT.phones,
              image:
                "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: CONTACT.address,
                addressLocality: "Jacksonville",
                addressRegion: "FL",
                postalCode: "32223",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.1897,
                longitude: -81.6301,
              },
              areaServed: {
                "@type": "City",
                name: CONTACT.serviceArea,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Event Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Event Decoration",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Party Rentals",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Event Catering",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
