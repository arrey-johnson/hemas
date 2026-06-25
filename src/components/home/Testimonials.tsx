"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-wine py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-rose/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow text-champagne-light">
            Testimonials
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ivory-50 sm:text-4xl">
            What Clients Say
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-plum-700/40 bg-plum-900/40 p-8 backdrop-blur-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-champagne/15" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-champagne text-champagne"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed text-ivory-200/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-plum-700/40 pt-6">
                <cite className="not-italic">
                  <p className="font-semibold text-ivory-50">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-rose-light">
                    {testimonial.event}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
