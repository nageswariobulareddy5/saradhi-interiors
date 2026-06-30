import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SiteNav from "../components/SiteNav";

import { Link, useParams, useNavigate } from "react-router-dom";
import { tvUnits } from "../data/tvUnits";
import { kitchens } from "../data/kitchens";
import { living } from "../data/living";
import { bedrooms } from "../data/bedrooms";
import { wardrobes } from "../data/wardrobes";
import { pooja } from "../data/pooja";

import MobileMenu from "../components/MobileMenu";




type GalleryItem = {
  type: "image" | "video";
  src: string;
  height: "small" | "medium" | "tall" | "large" | "xlarge";
};


function getHeight(height: GalleryItem["height"]) {
  switch (height) {
    case "small":
      return "h-[320px]";

    case "medium":
      return "h-[450px]";

    case "tall":
      return "h-[560px]";

    case "large":
      return "h-[680px]";

    case "xlarge":
      return "h-[820px]";

    default:
      return "h-[450px]";
  }
}

function CollectionsPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { category } = useParams();

  useEffect(() => {
  // Always open a collection page from the very top
  window.history.scrollRestoration = "manual";

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });
}, [category]);

let gallery: GalleryItem[] = [];

switch (category) {
  case "tv-units":
    gallery = tvUnits;
    break;

  case "kitchens":
    gallery = kitchens;
    break;

  case "living":
    gallery = living;
    break;

  case "bedrooms":
    gallery = bedrooms;
    break;

  case "wardrobes":
    gallery = wardrobes;
    break;

  case "pooja":
    gallery = pooja;
    break;

  default:
    gallery = tvUnits;
}


let title = "Collections";

switch (category) {
  case "tv-units":
    title = "TV Unit Collections";
    break;

  case "kitchens":
    title = "Kitchen Collections";
    break;

  case "living":
    title = "Living Collections";
    break;

  case "bedrooms":
    title = "Bedroom Collections";
    break;

  case "wardrobes":
    title = "Wardrobe Collections";
    break;

  case "pooja":
    title = "Pooja Collections";
    break;
}


 

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* Navbar */}
     <SiteNav
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
  showLinks={true}
/>

      {menuOpen && (
  <MobileMenu
    onClose={() => setMenuOpen(false)}
  />
)}

     {/* Hero */}
<section className="relative pt-24 md:pt-28 lg:pt-32 pb-20">
  <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-[#0f0f0f]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-14 lg:px-20">
    <p
      className="
        font-mono
        uppercase
        tracking-[0.55em]
        text-[10px]
        text-[#b6925b]
      "
    >
      COLLECTIONS
    </p>

    <h1
  className="
    mt-6
    font-display
    italic
    font-semibold
    text-[4rem]
    md:text-[6rem]
    lg:text-[8rem]
    leading-[0.9]
    tracking-[-0.05em]
    max-w-5xl
  "
>
  {title}
</h1>

    {/* Back Home */}

    <div className="mt-8 flex items-center gap-6">
      <Link
        to="/"
        className="
          font-mono
          uppercase
          tracking-[0.35em]
          text-[15px]
          text-white/70
          hover:text-[#b6925b]
          transition-colors
          duration-500
        "
      >
        ← Back Home
      </Link>

      <div className="h-px w-20 bg-[#b6925b]" />
    </div>

    <p
      className="
        mt-10
        max-w-xl
        text-[16px]
        leading-8
        text-white/55
      "
    >
    </p>
  </div>
</section>
      {/* Gallery */}
      <section className="pb-52">
        <div
          className="
            mx-auto
            max-w-[1800px]
            columns-1
            sm:columns-2
            lg:columns-3
            xl:columns-4
            gap-4
            px-5
            md:px-8
            lg:px-10
          "
        >
          {gallery.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="
                mb-4
                break-inside-avoid
                overflow-hidden
                rounded-2xl
                group
                cursor-pointer
                shadow-lg
                transition-all
                duration-1000
                ease-[cubic-bezier(.22,1,.36,1)]
                hover:-translate-y-2
                hover:shadow-2xl
                
              "
              
            >
              <div
                className={`
                  relative
                  overflow-hidden
                  ${getHeight(item.height)}
                `}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1800ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:scale-[1.04]
                    "
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1800ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:scale-[1.04]
                    "
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Gold Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#b6925b]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default CollectionsPage;