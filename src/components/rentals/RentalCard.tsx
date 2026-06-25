"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { RentalItem } from "@/lib/rentals";

interface RentalCardProps {
  item: RentalItem;
  index: number;
}

export function RentalCard({ item, index }: RentalCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-champagne-200/40 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.priceNote && (
          <span className="absolute right-3 top-3 rounded-full bg-ivory-50/95 px-3 py-1 text-xs font-semibold text-plum-800 backdrop-blur-sm">
            {item.priceNote}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-plum-900">
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-plum-700/70">
          {item.description}
        </p>
        <Link
          href={`/contact?item=${encodeURIComponent(item.name)}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-rose bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-dark transition-all hover:bg-btn-primary hover:border-transparent hover:text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Inquire for Availability
        </Link>
      </div>
    </motion.article>
  );
}
