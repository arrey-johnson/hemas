import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-wine text-ivory-200">
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-champagne/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-ivory-50">
              {SITE.name}
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-light">
              {SITE.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory-300/80">
              Event decoration, rentals, and catering serving the greater
              Jacksonville area.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-plum-700/50 bg-plum-900/50 text-ivory-300 transition-all hover:border-rose/50 hover:bg-rose/20 hover:text-ivory-50"
                >
                  {social.platform === "facebook" ? (
                    <Facebook className="h-5 w-5" />
                  ) : (
                    <Instagram className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-champagne-light">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-300/80 transition-colors hover:text-rose-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-champagne-light">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ivory-300/80">
              <li>Event Decoration</li>
              <li>Chair & Table Rentals</li>
              <li>Custom Backdrops</li>
              <li>Balloon Displays</li>
              <li>Catering & Specialty Cakes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-champagne-light">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-light" />
                <span className="text-ivory-300/80">
                  {CONTACT.address}
                  <br />
                  {CONTACT.city}
                </span>
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-rose-light" />
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="text-ivory-300/80 transition-colors hover:text-champagne-light"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-rose-light" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-ivory-300/80 transition-colors hover:text-champagne-light"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ornament-line my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ivory-400/70">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-ivory-400/70">
            Serving {CONTACT.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}
