"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#catering", label: "Catering" },
  { href: "#hours", label: "Hours" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[color:var(--line)] bg-[#fffaf3]/97 shadow-[0_8px_30px_rgba(26,18,16,0.12)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`text-center text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px] ${
          overHero
            ? "bg-black/70 text-white backdrop-blur-sm"
            : "bg-[color:var(--brand-primary)] text-white"
        }`}
        role="note"
      >
        <p className="section-shell py-2">
          Demo concept · Not the official restaurant website ·{" "}
          {restaurant.shortName}
        </p>
      </div>

      <nav
        className="section-shell flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]"
        aria-label="Primary"
      >
        <a
          href="#top"
          className={`font-display text-xl font-bold tracking-[0.06em] uppercase sm:text-2xl ${
            overHero ? "text-white" : "text-[color:var(--ink)]"
          }`}
        >
          {restaurant.shortName}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.18em] transition ${
                  overHero
                    ? "text-white hover:text-[#ffb089]"
                    : "text-[color:var(--ink)] hover:text-[color:var(--brand-accent)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Order Online
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 backdrop-blur-sm md:hidden ${
            overHero
              ? "border-white bg-black/50 text-white"
              : "border-[color:var(--ink)] bg-[#fffaf3] text-[color:var(--ink)]"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-[color:var(--line)] bg-[#fffaf3] md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-sm px-3 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--ink)] hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={restaurant.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full"
              onClick={() => setOpen(false)}
            >
              Order Online
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
