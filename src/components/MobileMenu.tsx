type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const items = [
    { label: "TV Units", href: "/#tv-units" },
    { label: "Kitchen", href: "/#kitchens" },
    { label: "Living", href: "/#living" },
    { label: "BedRooms", href: "/#bedrooms" },
    { label: "Wardrobes", href: "/#wardrobes" },
    { label: "Pooja", href: "/#pooja" },
    { label: "Our Story", href: "/#about" },
    { label: "Consult", href: "/#contact" },
  ];

  return (
    <div
    className="
fixed
inset-0
z-40
bg-[#0f0f0f]/95
backdrop-blur-xl
flex
items-center
justify-center
overflow-y-auto
px-6
py-6
animate-fade-in
"
    >
     <ul className="flex flex-col items-center justify-center gap-1 md:gap-5">
  {items.map((i) => (
    <li key={i.href} className="m-0 p-0">
      <a
        href={i.href}
        onClick={onClose}
        className="
          font-display
          font-semibold
          tracking-tight
          text-[1.7rem]
          sm:text-[2rem]
          md:text-[4rem]
          leading-none
          text-white
          hover:text-[#b6925b]
          transition-all
          duration-500
          py-1
        "
      >
        {i.label}
      </a>
    </li>
  ))}
</ul>
    </div>
  );
}