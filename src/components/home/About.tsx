"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { ABOUT_HIGHLIGHTS, ABOUT_STEPS } from "@/lib/about";
import { CONTACT } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const eventTypes = [
  "Weddings & receptions",
  "Birthdays (all ages)",
  "Baby & bridal showers",
  "Graduations",
  "Corporate & private events",
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-ivory-100 py-20 sm:py-28">
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-champagne-200/40 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top — intro + images */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeInUp}>
            <span className="section-eyebrow">About Us</span>

            <h2 className="section-title mt-3">
              Jacksonville Event Decor You Can Plan Around
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-plum-700/85">
              Hemas Decor is a Jacksonville-based team that handles decoration,
              equipment rentals, and catering for events across the area. You get
              one point of contact for the look of the room, the tables and
              chairs, and the food — instead of juggling multiple vendors.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-plum-700/85">
              We work from your venue layout and budget. That means confirming
              chair counts, linen colors, backdrop placement, and catering head
              count before the day of — so setup runs on a clear schedule.
            </p>

            <ul className="mt-8 space-y-3">
              {eventTypes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-plum-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-dark">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary !px-6 !py-3 !text-sm">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${CONTACT.phones[0].replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-plum-700 transition-colors hover:text-rose-dark"
              >
                <Phone className="h-4 w-4" />
                {CONTACT.phones[0]}
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card sm:col-span-1">
                <Image
                  src="/images/hero-jacksonville-client.png"
                  alt="Balloon arch and birthday decor setup by Hemas Decor in Jacksonville"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                  alt="Wedding reception table styling and centerpieces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-champagne-200/50 bg-ivory-50/95 p-5 shadow-card backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose-dark" />
                <div>
                  <p className="font-semibold text-plum-900">{CONTACT.city}</p>
                  <p className="mt-1 text-sm leading-snug text-plum-600/75">
                    {CONTACT.address}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-rose-dark">
                    Serving {CONTACT.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What we do — cards */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-20 sm:mt-24"
        >
          <div className="text-center">
            <span className="section-eyebrow">What We Do</span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-plum-900 sm:text-3xl">
              Three services, one team
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-champagne-200/50 bg-ivory-50 p-6 shadow-soft"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-semibold text-plum-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-plum-700/75">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          {...fadeInUp}
          className="mt-20 rounded-3xl border border-champagne-200/40 bg-wine px-6 py-12 sm:px-10 sm:py-14"
        >
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-champagne-light">
              How It Works
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-ivory-50 sm:text-3xl">
              From first call to breakdown
            </h3>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {ABOUT_STEPS.map((item, index) => (
              <div key={item.step} className="relative text-center md:text-left">
                {index < ABOUT_STEPS.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full bg-ivory-200/15 md:left-[calc(50%+2rem)] md:block md:w-[calc(100%-4rem)]" />
                )}
                <p className="font-serif text-3xl font-bold text-champagne-light/40">
                  {item.step}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-ivory-50">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ivory-300/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
