import { useState } from "react";
import SiteNav from "../components/SiteNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#collections", label: "Collections" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Consult" },
];

type Props = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export default function SiteNav({
  menuOpen,
  setMenuOpen,
}: Props) {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 py-8 md:py-10 mix-blend-difference"
    >
      {/* Logo */}
      <a
        href="/"
        className="font-display text-2xl tracking-tight italic text-white"
      >
        Saradhi Interiors
      </a>

      {/* Right Side */}
      <div className="flex items-center gap-8 md:gap-12">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/70">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#b6925b] transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="size-6 flex flex-col justify-between items-end group"
        >
          <span
            className={`h-px bg-white transition-all duration-300 ${
              menuOpen
                ? "w-6 translate-y-[3px] rotate-45"
                : "w-7"
            }`}
          />

          <span
            className={`h-px bg-white transition-all duration-300 ${
              menuOpen
                ? "w-6 -translate-y-[3px] -rotate-45"
                : "w-4 group-hover:w-7"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}