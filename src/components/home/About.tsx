"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export function About() {
  return (
    <section className="relative overflow-hidden bg-ivory-100 py-20 sm:py-28">
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-champagne-200/40 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeInUp}>
            <span className="section-eyebrow">About Us</span>

            <h2 className="section-title mt-3">
              Local Event Styling in Jacksonville
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-plum-700/80">
              Hemas Decor provides decoration, rental equipment, and catering
              for private and commercial events. We work with you on layout,
              color palette, and rentals so the venue is ready before guests
              arrive.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-plum-700/80">
              Our team handles weddings, receptions, birthday parties for all
              age groups, baby and bridal showers, graduations, and other
              celebrations across the greater Jacksonville area.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { value: "500+", label: "Events Completed" },
                { value: "All Ages", label: "Birthday Parties" },
                { value: "Full Service", label: "Decor & Catering" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-champagne-200/60 bg-ivory-50 p-4 text-center shadow-soft sm:text-left"
                >
                  <p className="font-serif text-2xl font-bold text-rose-dark sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-plum-600/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-champagne-light/50 to-rose-200/50" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                alt="Event reception with table settings and floral centerpieces"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-champagne-200/40 bg-ivory-50 p-6 shadow-card sm:-left-8">
              <p className="font-serif text-lg font-semibold text-plum-900">
                {CONTACT.city}
              </p>
              <p className="mt-1 text-sm text-plum-600/70">
                Serving {CONTACT.serviceArea}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
