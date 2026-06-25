"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-800 via-plum-900 to-wine py-20">
      <div className="absolute inset-0">
        <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-champagne/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold text-ivory-50 sm:text-4xl">
            Ready to Book Your Event?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ivory-200/85">
            Send us your date, guest count, and what you need — decor, rentals,
            or catering — and we&apos;ll follow up with availability and pricing.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ivory-50 px-8 py-4 text-base font-semibold text-plum-900 shadow-card transition-all hover:bg-champagne-100 hover:shadow-glow"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
