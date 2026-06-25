"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  GALLERY_CATEGORIES,
  GALLERY_IMAGES,
  type GalleryCategory,
} from "@/lib/gallery";

const heightClasses = {
  short: "aspect-[4/3]",
  medium: "aspect-[3/4]",
  tall: "aspect-[2/3]",
};

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<
    GalleryCategory | "all"
  >("all");

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActiveCategory(cat.value)}
            className={`filter-pill ${
              activeCategory === cat.value
                ? "filter-pill-active"
                : "filter-pill-inactive"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="mb-4 break-inside-avoid"
          >
            <div
              className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-champagne-200/40 ${heightClasses[image.height]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-sm font-medium text-ivory-50 transition-transform duration-300 group-hover:translate-y-0">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
