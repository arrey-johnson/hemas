"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { CONTACT, SITE } from "@/lib/constants";

const stats = [
  { value: "500+", label: "Events Styled" },
  { value: "3", label: "Services Offered" },
  { value: "5★", label: "Google Rating" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-wine">
      {/* Background image — mobile full bleed */}
      <div className="absolute inset-0 lg:left-1/3">
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
          alt="Elegant wedding reception decoration with floral centerpieces"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-hero-shine" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine via-wine/80 to-transparent lg:from-wine lg:via-wine/60 lg:to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute right-[8%] top-28 hidden h-64 w-64 rounded-full bg-rose/20 blur-3xl lg:block" />
      <div className="pointer-events-none absolute bottom-32 left-[5%] hidden h-48 w-48 rounded-full bg-champagne/15 blur-3xl lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-28 pt-36 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne-light/30 bg-ivory-50/10 px-5 py-2.5 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-champagne-light" />
              <span className="text-sm font-medium tracking-wide text-ivory-100">
                {CONTACT.serviceArea}
              </span>
              <span className="text-ivory-300/50">·</span>
              <span className="text-sm font-medium text-ivory-200/90">
                {SITE.subtitle}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Event Decoration, Rentals &amp; Catering
            </h1>

            <div className="ornament-line my-8 max-w-xs" />

            <p className="max-w-lg text-lg leading-relaxed text-ivory-200/90 sm:text-xl">
              Full-service event styling for weddings, birthdays, showers, and
              corporate gatherings throughout Jacksonville.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary group">
                Book an Event
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/gallery" className="btn-outline-light">
                View Our Work
              </Link>
            </div>

            {/* Inline stats — desktop */}
            <div className="mt-14 hidden gap-8 border-t border-ivory-200/15 pt-8 sm:flex">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl font-bold text-champagne-light">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ivory-300/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — featured image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Ornate frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-champagne-light/40 via-rose/30 to-plum-600/40" />
              <div className="absolute -inset-1.5 rounded-2xl bg-wine/50" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/hero-jacksonville-client.png"
                  alt="40th birthday balloon arch and neon decor by Hemas Decor in Jacksonville, FL"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 0vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/50 via-transparent to-transparent" />
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-8 max-w-[220px] rounded-2xl border border-champagne-200/30 bg-ivory-50/95 p-5 shadow-card backdrop-blur-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-champagne-dark text-champagne-dark"
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-snug text-plum-800">
                  &ldquo;The balloon arch looked great and setup was right on schedule.&rdquo;
                </p>
                <p className="mt-2 text-xs font-semibold text-rose-dark">
                  — Jacksonville Client
                </p>
              </div>

              {/* Floating location badge */}
              <div className="absolute -right-4 -top-4 rounded-2xl border border-ivory-200/20 bg-plum-800/90 px-5 py-3 shadow-glow backdrop-blur-sm">
                <p className="font-serif text-sm font-semibold text-champagne-light">
                  Jacksonville, FL
                </p>
                <p className="text-xs text-ivory-300/80">40th Birthday Celebration</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile — Jacksonville client showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative lg:hidden"
          >
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-champagne-light/40 via-rose/30 to-plum-600/40" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-card">
              <Image
                src="/images/hero-jacksonville-client.png"
                alt="40th birthday balloon arch and neon decor by Hemas Decor in Jacksonville, FL"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-lg bg-plum-900/85 px-3 py-2 backdrop-blur-sm">
                <p className="text-xs font-semibold text-champagne-light">
                  Jacksonville, FL
                </p>
                <p className="text-[10px] text-ivory-300/80">
                  40th Birthday Celebration
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-ivory-200/15 bg-ivory-50/10 p-5 backdrop-blur-md sm:hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-xl font-bold text-champagne-light">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-ivory-300/70">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory-300/60">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-champagne-light/40 p-1">
            <div className="h-1.5 w-full rounded-full bg-champagne-light/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
