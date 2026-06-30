type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const items = [
    { label: "TV Units", href: "/#tv-units" },
    { label: "Kitchen", href: "/#kitchens" },
    { label: "Living", href: "/#living" },
    { label: "Bedrooms", href: "/#bedrooms" },
    { label: "Wardrobes", href: "/#wardrobes" },
    { label: "Pooja", href: "/#pooja" },
  ];

  return (
    <div
      className="
        fixed
        inset-0
        z-40
        bg-[#0f0f0f]/95
        backdrop-blur-2xl
        flex
        items-center
        justify-center
        px-6
        py-10
        animate-fade-in
      "
    >
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <p
          className="
            text-center
            uppercase
            tracking-[0.55em]
            text-[11px]
            text-[#b6925b]
            mb-10
          "
        >
          Collections
        </p>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                onClose();
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#2d2418]
                bg-white/[0.03]
                backdrop-blur-xl
                px-8
                py-7
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
                    text-2xl
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
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    text-white
                    transition-all
                    duration-500
                    group-hover:text-[#b6925b]
                    group-hover:translate-x-2
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

              {/* Gold underline */}
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