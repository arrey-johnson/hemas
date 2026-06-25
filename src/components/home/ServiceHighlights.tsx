"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cake, Gift, Heart, UtensilsCrossed } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  heart: Heart,
  cake: Cake,
  gift: Gift,
  utensils: UtensilsCrossed,
} as const;

export function ServiceHighlights() {
  return (
    <section className="bg-ivory-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title mt-3">Services & Highlights</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-plum-700/80">
            Decor, rentals, and catering for private events in Jacksonville.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-champagne-200/40 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory-50/95 text-rose-dark shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-plum-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-700/70">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border-2 border-rose px-8 py-3 text-sm font-semibold text-rose-dark transition-all hover:bg-btn-primary hover:border-transparent hover:text-white"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
