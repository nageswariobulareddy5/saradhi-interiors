import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const navigate = useNavigate();

  const items = [
    { label: "TV Units", href: "/#tv-units" },
    { label: "Kitchen", href: "/#kitchens" },
    { label: "Living", href: "/#living" },
    { label: "Bedrooms", href: "/#bedrooms" },
    { label: "Wardrobes", href: "/#wardrobes" },
    { label: "Pooja", href: "/#pooja" },
  ];

  const goToSection = (id: string) => {
    onClose();

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-40
        bg-[#0f0f0f]/95
        backdrop-blur-2xl
        overflow-y-auto
        px-5
        py-20
        animate-fade-in
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ---------------- Mobile Navigation ---------------- */}
       <div
  
  className="
    flex
    md:hidden
    justify-center
    items-center
    gap-[10px]

    w-full

    mt-5
    mb-5
  "
>


          <button
            onClick={() => goToSection("home")}
          className="
  !text-[13px]
  !font-normal
  uppercase
  tracking-[0.03em]
  text-white/60
  transition-colors
  duration-300
  hover:text-[#b6925b]
"
          >
            HOME
          </button>

          <button
            onClick={() => goToSection("tv-units")}
          className="
  !text-[13px]
  !font-normal
  uppercase
  tracking-[0.03em]
  text-white/60
  transition-colors
  duration-300
  hover:text-[#b6925b]
"
          >
            COLLECTIONS
          </button>

          <button
            onClick={() => goToSection("about")}
          className="
  !text-[13px]
  !font-normal
  uppercase
  tracking-[0.03em]
  text-white/60
  transition-colors
  duration-300
  hover:text-[#b6925b]
"
          >
            ABOUT
          </button>

          <button
            onClick={() => goToSection("contact")}
          className="
  !text-[13px]
  !font-normal
  uppercase
  tracking-[0.03em]
  text-white/60
  transition-colors
  duration-300
  hover:text-[#b6925b]
"
          >
            CONSULT
          </button>
        </div>

        {/* Divider - Mobile Only */}
        <div className="md:hidden w-full h-px bg-[#b6925b]/25 mb-8" />

        {/* Heading */}
        <p
          className="
            mt-10
            md:mt-24
            mb-10
            text-center
            uppercase
            tracking-[0.55em]
            text-[10px]
            md:text-[11px]
            text-[#b6925b]
          "
        >
          Collections
        </p>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-4
            md:gap-6
          "
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                sm:rounded-2xl
                border
                border-[#2d2418]
                bg-white/[0.03]
                backdrop-blur-xl

                px-5
                py-4

                sm:px-6
                sm:py-5

                md:px-8
                md:py-7

                transition-all
                duration-700

                hover:border-[#b6925b]
                hover:bg-[#181410]
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(182,146,91,.18)]
              "
            >
              <div className="flex items-center justify-between">

                <span
                  className="
                    font-display
                    text-[1.45rem]
                    sm:text-[1.7rem]
                    md:text-3xl
                    text-white
                    transition-colors
                    duration-500
                    group-hover:text-[#b6925b]
                  "
                >
                  {item.label}
                </span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    text-white
                    transition-all
                    duration-500
                    group-hover:text-[#b6925b]
                    group-hover:translate-x-1
                  "
                >
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Gold Underline */}
              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  h-[2px]
                  w-full
                  bg-[#b6925b]
                  origin-left
                  scale-x-0
                  transition-transform
                  duration-700
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}