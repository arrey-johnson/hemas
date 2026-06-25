"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { EVENT_THEMES, SERVICE_PACKAGES } from "@/lib/service-packages";

const tierStyles = {
  essential: "border-champagne-300 bg-ivory-50",
  premium: "border-rose bg-white ring-2 ring-rose/20 shadow-glow",
  luxury: "border-champagne-dark bg-gradient-to-b from-champagne-50 to-ivory-100",
};

const tierBadge = {
  essential: "bg-champagne-100 text-champagne-800",
  premium: "bg-btn-primary text-white",
  luxury: "bg-wine text-champagne-light",
};

export function ServicePackages() {
  return (
    <div className="space-y-24">
      <section>
        <div className="text-center">
          <span className="section-eyebrow">Packages</span>
          <h2 className="section-title mt-3">Event Decoration Packages</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-plum-700/80">
            Choose the package that fits your event size and budget. All packages
            include setup and breakdown.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border-2 p-8 shadow-soft ${tierStyles[pkg.tier]}`}
            >
              {pkg.tier === "premium" && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-btn-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
                  Most Popular
                </span>
              )}
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${tierBadge[pkg.tier]}`}
              >
                {pkg.name}
              </span>
              <p className="mt-4 font-serif text-3xl font-bold text-plum-900">
                {pkg.price}
              </p>
              <p className="mt-2 text-sm text-plum-700/70">{pkg.description}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-rose-dark">
                Ideal for: {pkg.idealFor}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-plum-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  pkg.tier === "premium"
                    ? "bg-btn-primary text-white hover:bg-btn-primary-hover"
                    : "border-2 border-rose text-rose-dark hover:bg-btn-primary hover:border-transparent hover:text-white"
                }`}
              >
                Get a Quote
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center">
          <span className="section-eyebrow">Themes</span>
          <h2 className="section-title mt-3">Popular Event Themes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-plum-700/80">
            Sample color palettes and decor styles we set up regularly.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_THEMES.map((theme, index) => (
            <motion.article
              key={theme.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-champagne-200/40 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-champagne-dark" />
                  <h3 className="font-serif text-xl font-semibold text-plum-900">
                    {theme.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-plum-700/70">
                  {theme.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {theme.eventTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full bg-ivory-200 px-3 py-1 text-xs font-medium text-plum-700"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-wine px-8 py-12 text-center sm:px-12">
        <h2 className="font-serif text-2xl font-bold text-ivory-50 sm:text-3xl">
          Also Available: Rentals & Catering
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ivory-300/80">
          Need chairs, tables, backdrops, or tableware? Browse our rental
          catalog. Planning a menu? Ask about our event catering, specialty
          cakes, and treats.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/rentals"
            className="rounded-full border-2 border-ivory-200/30 px-8 py-3 text-sm font-semibold text-ivory-50 transition-all hover:border-champagne-light hover:bg-ivory-50/10"
          >
            View Rentals
          </Link>
          <Link
            href="/contact"
            className="btn-primary !px-8 !py-3 !text-sm"
          >
            Discuss Catering
          </Link>
        </div>
      </section>
    </div>
  );
}
