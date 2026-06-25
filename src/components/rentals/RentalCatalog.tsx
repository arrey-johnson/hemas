"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  RENTAL_CATEGORIES,
  RENTAL_ITEMS,
  type RentalCategory,
} from "@/lib/rentals";
import { RentalCard } from "./RentalCard";

export function RentalCatalog() {
  const [activeCategory, setActiveCategory] = useState<
    RentalCategory | "all"
  >("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return RENTAL_ITEMS;
    return RENTAL_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {RENTAL_CATEGORIES.map((cat) => (
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

      <p className="mt-6 text-center text-sm text-plum-600/60">
        Showing {filteredItems.length} item
        {filteredItems.length !== 1 ? "s" : ""}
      </p>

      <AnimatePresence mode="wait">
        <div
          key={activeCategory}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <RentalCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </AnimatePresence>

      {filteredItems.length === 0 && (
        <p className="mt-12 text-center text-plum-600/60">
          No items found in this category.
        </p>
      )}
    </div>
  );
}
