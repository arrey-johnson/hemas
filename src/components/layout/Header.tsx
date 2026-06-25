"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = isHome && !scrolled && !mobileOpen;
  const mobileMenuOpen = mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top announcement bar */}
      <div
        className={`hidden border-b transition-colors duration-300 sm:block ${
          isTransparent
            ? "border-ivory-200/10 bg-wine/40 backdrop-blur-sm"
            : "border-plum-800/20 bg-plum-900"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-medium tracking-wide sm:px-6 lg:px-8">
          <span
            className={`flex items-center gap-1.5 ${isTransparent ? "text-ivory-200" : "text-champagne-light"}`}
          >
            <MapPin className="h-3.5 w-3.5" />
            Serving {CONTACT.serviceArea}
          </span>
          <a
            href={`tel:${CONTACT.phones[0].replace(/\D/g, "")}`}
            className={`flex items-center gap-1.5 transition-colors hover:text-rose-light ${isTransparent ? "text-ivory-100" : "text-ivory-200"}`}
          >
            <Phone className="h-3.5 w-3.5" />
            {CONTACT.phones[0]}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          isTransparent
            ? "border-b border-ivory-200/10 bg-transparent"
            : "border-b border-champagne-200/60 bg-ivory-50 shadow-soft"
        } ${mobileMenuOpen ? "!bg-ivory-50 !shadow-card" : ""}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span
              className={`font-serif text-xl font-semibold leading-tight tracking-tight transition-colors sm:text-2xl ${
                isTransparent && !mobileMenuOpen
                  ? "text-ivory-50 group-hover:text-champagne-light"
                  : "text-plum-900 group-hover:text-rose-dark"
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.18em] sm:text-xs ${
                isTransparent && !mobileMenuOpen
                  ? "text-champagne-light/90"
                  : "text-plum-600"
              }`}
            >
              {SITE.subtitle}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link rounded-lg px-4 py-2 ${
                    isActive
                      ? isTransparent
                        ? "text-champagne-light after:w-full"
                        : "text-rose-dark after:w-full"
                      : isTransparent
                        ? "text-ivory-100 hover:text-champagne-light"
                        : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${CONTACT.phones[1].replace(/\D/g, "")}`}
              className={`hidden items-center gap-2 text-sm font-medium transition-colors xl:flex ${
                isTransparent
                  ? "text-ivory-200 hover:text-champagne-light"
                  : "text-plum-600 hover:text-rose-dark"
              }`}
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phones[1]}
            </a>
            <Link href="/contact" className="btn-primary !px-6 !py-2.5 !text-sm">
              Book an Event
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`rounded-xl p-2.5 transition-colors lg:hidden ${
              isTransparent && !mobileMenuOpen
                ? "text-ivory-50 hover:bg-ivory-50/10"
                : "text-plum-900 hover:bg-champagne-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — solid panel for readability */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-0 z-40 bg-plum-900/50 lg:hidden"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-50 border-b border-champagne-200 bg-ivory-50 shadow-card lg:hidden">
            <nav className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center rounded-xl border px-4 py-3.5 text-base font-semibold transition-colors ${
                          isActive
                            ? "border-rose-200 bg-rose-50 text-rose-dark"
                            : "border-champagne-200/80 bg-white text-plum-900 hover:border-rose-200 hover:bg-rose-50/50"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 space-y-3 border-t border-champagne-200 pt-5">
                <p className="px-1 text-xs font-semibold uppercase tracking-wider text-plum-600">
                  Call us
                </p>
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-champagne-200/80 bg-white px-4 py-3 text-base font-semibold text-plum-900"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-rose-dark" />
                    {phone}
                  </a>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary mt-2 block w-full !py-4 text-center text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  Book an Event
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
