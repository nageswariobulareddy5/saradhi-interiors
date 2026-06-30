import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#tv-units", label: "Collections" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Consult" },
];

type Props = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  showLinks?: boolean;
};

export default function SiteNav({
  menuOpen,
  setMenuOpen,
  showLinks = true,
}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-[#b6925b]/20 shadow-xl"
            : "bg-transparent mix-blend-difference"
        }
      `}
    >
      <div
        className={`
          mx-auto
          max-w-[1700px]
          flex
          justify-between
          items-center
          px-6
          md:px-12
          ${
            scrolled
              ? "py-6 md:py-6"
              : "py-9 md:py-11"
          }
          transition-all
          duration-500
        `}
      >
        {/* Logo */}
        <a
          href="/"
          className="font-display text-[1.8rem] tracking-tight italic text-white"
        >
          Saradhi Interiors
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-8 md:gap-12">

     {showLinks && (
  <div
    className="
      hidden
      md:flex
      items-center
      gap-8
      text-[10px]
      uppercase
      tracking-[0.3em]
      text-white/70
    "
  >
    {NAV_LINKS.map((link) => (
  <a
    key={link.href}
    href={link.href}
    onClick={(e) => {
      // Close the mobile menu
      setMenuOpen(false);

      const hash = link.href.split("#")[1];

      if (window.location.pathname === "/" && hash) {
        e.preventDefault();

        document
          .getElementById(hash)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    }}
    className="
      hover:text-[#b6925b]
      transition-colors
      duration-500
    "
  >
    {link.label}
  </a>
))}
  </div>
)}

          {/* Hamburger */}
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
      </div>
    </nav>
  );
}