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
       bg-white
backdrop-blur-xl
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
    gap-[14px]

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
  text-black/60
  transition-colors
  duration-300
 hover:text-black
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
  text-black/60
  transition-colors
  duration-300
  hover:text-black
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
  text-black/60
  transition-colors
  duration-300
  hover:text-black
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
  text-black/60
  transition-colors
  duration-300
  hover:text-black
"
          >
            CONSULT
          </button>
        </div>

        {/* Divider - Mobile Only */}
        <div className="md:hidden w-full h-px bg-black/10 mb-8" />

        {/* Heading */}
        <p
          className="
            mt-10
            md:mt-24
            mb-10
            text-center
            uppercase
           text-[10px]
md:text-[11px]
tracking-[0.55em]
text-black/55
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
              border-black/10
                bg-[#fafafa] 
                backdrop-blur-xl

                px-5
                py-4

                sm:px-6
                sm:py-5

                md:px-8
                md:py-7

                transition-all
                duration-700

                hover:border-black
hover:bg-white
hover:-translate-y-2
hover:shadow-xl
              "
            >
             <div className="relative z-10 flex items-center justify-between">

                <span
  className="
    font-display
    font-medium
    tracking-[-0.03em]

    text-[1.45rem]
    sm:text-[1.7rem]
    md:text-3xl

    text-black

    transition-colors
    duration-500

    group-hover:text-black
  "
>
  {item.label}
</span>

               <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    className="w-5 h-5 text-black flex-shrink-0"
    fill="none"
>
    <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
    />
    <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
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
    bg-black
    origin-left
    scale-x-0
    transition-transform
    duration-700
    group-hover:scale-x-100
    z-0
  "
/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}