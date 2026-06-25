import type { Metadata } from "next";
import { SITE } from "./constants";

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80";

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title,
    description,
    keywords: [
      "event decorator Jacksonville FL",
      "Hemas Decor",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
