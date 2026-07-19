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
  forceLight?: boolean;
};

export default function SiteNav({
  menuOpen,
  setMenuOpen,
  showLinks = true,
  forceLight = false,
}: Props) {
  // Keep track of scrolling
  const [scrolled, setScrolled] = useState(false);

  // Decide whether navbar should be light
  const isLight = forceLight || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ease-in-out
        ${
          isLight
            ? "bg-white border-b border-black/10 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto
          max-w-[1700px]
          flex
          items-center
          justify-between
          px-5
          sm:px-6
          md:px-12
          transition-all
          duration-500
          ${
            isLight
              ? "py-4 sm:py-5 md:py-6"
              : "py-6 sm:py-7 md:py-11"
          }
        `}
      >
        {/* Logo */}
       {/* Logo */}
<a
  href="/"
  className={`
    font-display
    font-medium
    tracking-[-0.03em]
    whitespace-nowrap
    text-[1.35rem]
    sm:text-[1.55rem]
    md:text-[1.8rem]
    transition-colors
    duration-500
    ${
      isLight
        ? "text-black"
        : "text-white"
    }
  `}
>
  Saradhi Interiors
</a>

        <div className="flex items-center gap-5 sm:gap-8 md:gap-12">

          {showLinks && (
            <div
              className={`
                hidden
                md:flex
                items-center
                gap-8
                uppercase
                tracking-[0.30em]
                text-[10px]
                transition-opacity
                duration-300
                ${
                  menuOpen
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }
              `}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
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
                  className={`
                    whitespace-nowrap
                    font-semibold
                    transition-colors
                    duration-500
                    ${
                      isLight
                        ? "text-black/70 hover:text-black"
                        : "text-white/70 hover:text-white"
                    }
                  `}
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
            className="
              size-6
              flex
              flex-col
              justify-between
              items-end
              group
              shrink-0
            "
          >
            <span
  className={`
    h-px
    transition-all
    duration-300
    ${
      menuOpen
        ? "bg-black"
        : isLight
        ? "bg-black"
        : "bg-white"
    }
    ${
      menuOpen
        ? "w-6 translate-y-[3px] rotate-45"
        : "w-7"
    }
  `}
/>

           <span
  className={`
    h-px
    transition-all
    duration-300
    ${
      menuOpen
        ? "bg-black"
        : isLight
        ? "bg-black"
        : "bg-white"
    }
    ${
      menuOpen
        ? "w-6 -translate-y-[3px] -rotate-45"
        : "w-4 group-hover:w-7"
    }
  `}
/>
          </button>

        </div>
      </div>
    </nav>
  );
}