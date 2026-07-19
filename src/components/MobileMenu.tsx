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
    z-50

    flex

    bg-black/25
    backdrop-blur-md

    animate-fade-in
  "
>
  {/* Left Side */}
<div
  className="
    hidden
    lg:block

    w-1/2
    h-full
  "
/>
     


     <div
  className="
    ml-auto

    w-full
    lg:w-[38%]

    h-full

    bg-white

    overflow-y-auto

    px-8
    sm:px-12
    lg:px-24

    py-10

    shadow-2xl
    animate-[slideIn_.6s_cubic-bezier(.22,1,.36,1)]
  "
>
  {/* Close Button */}
  <div className="flex justify-end">
    <button
      onClick={onClose}
      className="
        w-12
        h-12
        rounded-full
        bg-black
        text-white

        flex
        items-center
        justify-center

        transition-transform
        duration-500

        hover:rotate-90
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  </div>




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
  <div className="mt-8">
    <p
      className="
        font-mono
        uppercase
        tracking-[0.45em]
        text-[11px]
        text-black/45
        mb-6
      "
    >
      Collections
    </p>

    {/* Menu Items */}
    <div className="flex flex-col">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => goToSection(item.href.replace("/#", ""))}
          className="
            group
            flex
            items-center
            justify-between

            w-full

            py-5

            border-b
            border-black/15

            cursor-pointer

            transition-all
            duration-500

            hover:border-black
          "
        >
          <span
            className="
  font-display
 text-[1.75rem]
sm:text-[2rem]
lg:text-[2.35rem]

  font-medium
  tracking-[-0.03em]

  text-black

  transition-all
  duration-500

  group-hover:translate-x-3
"
          >
            {item.label}
          </span>

          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="
              
  opacity-100
  translate-x-0

  transition-all
  duration-500

  group-hover:translate-x-2
"
          >
            <path
              d="M5 12H19"
              stroke="black"
              strokeWidth="1.5"
            />
            <path
              d="M13 6L19 12L13 18"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      ))}
    </div>
  </div>
</div>
    </div>
  );
}