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
           text-[12px]
md:text-[13px]
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
           gap-6
md:gap-12
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
                rounded-none

border
border-black

bg-black

px-8
py-5

sm:px-10
sm:py-5

md:px-10
md:py-5

transition-all
duration-500

hover:bg-white
hover:text-black
              "
            >
             <div
  className="
    relative
    z-10

    flex
    items-center
    justify-between
  "
>

        <span
  className="
    font-mono
    uppercase

    text-[15px]
    sm:text-[16px]

    tracking-[0.45em]

    text-white

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
  className="
w-6
h-6
text-white

transition-all
duration-500

group-hover:text-black
group-hover:translate-x-1
"
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
             
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}