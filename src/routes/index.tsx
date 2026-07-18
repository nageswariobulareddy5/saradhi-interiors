import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import heroImg from "../assets/hero.webp";
import tvUnitsImg from "../assets/tv-units.jpg";
import poojaImg from "../assets/pooja.webp";
import aboutImg from "../assets/about.jpg";
import studioImg from "../assets/studio.png";
import Footer from "../components/Footer";
import SiteNav from "../components/SiteNav";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
const location = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [location.key]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

 useEffect(() => {
  const section =
    (location.state as { scrollTo?: string })?.scrollTo;

  if (!section) return;

  setTimeout(() => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}, [location]);

  return (
    <div className="min-h-[100svh]
md:min-h-screen bg-background text-foreground font-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>

      <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SectionIndex />

      <main id="main">
        <Hero />
        <TVUnits />
        < Kitchens />
        <Living />
        <Bedrooms />
        <Wardrobes />
        <Pooja />
        <About />
        <Contact />
        <Footer />
      </main>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}




function SectionIndex() {
  return (
    <div
      aria-hidden
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 font-mono text-[10px] text-foreground/30"
    >
      
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="
        relative
        min-h-[100svh]
        md:min-h-[100svh]
        md:min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-5
      "
    >
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Sculptural walnut TV unit in a moody contemporary living room"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] slow-zoom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          text-center
          px-6
          sm:px-8
          md:px-12
          max-w-6xl
          mx-auto
          animate-fade-up
        "
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-6 text-accent"></p>

        <h1
          id="hero-title"
          className="
            font-display
            font-medium

            text-[2.9rem]
            sm:text-[3.6rem]
            md:text-[6rem]
            lg:text-[8rem]

            leading-[0.95]
            tracking-[-0.05em]

            text-white
          "
        >
          Elegant Living

          <span
            className="
              block
              ml-0
              sm:ml-6
              md:ml-20
              mt-1
              md:mt-2
            "
          >
            Solutions
          </span>
        </h1>

        <p
          className="
            mt-8
            text-[15px]
            sm:text-[16px]
            md:text-[1.2rem]

            leading-7
            md:leading-[1.85]

            text-white/70

            max-w-xl
            md:max-w-4xl

            mx-auto
            text-center
            px-2
          "
        >
          Crafting timeless interiors through experience, creativity,
          <br className="hidden md:block" />
          and a passion for exceptional living.
        </p>

        <a
          href="#tv-units"
          className="
            group
            relative
            inline-flex
            items-center

            gap-3
            sm:gap-4
            md:gap-6

            mt-10
            mb-4

            font-medium
            text-[11px]
            uppercase
            tracking-[0.45em]

            text-white
          "
        >
          Explore Collections

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-500 group-hover:translate-x-1"
            aria-hidden
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

          <span className="absolute bottom-0 left-0 w-full h-px bg-accent origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#tv-units"
        aria-label="Scroll to first collection"
        className="
          absolute
          bottom-8
          md:bottom-16
          left-1/2
          -translate-x-1/2

          flex
          flex-col
          items-center
          gap-1

          text-white/60
          hover:text-white

          transition-colors
        "
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.45em]">
          Scroll
        </span>
      </a>
    </section>
  );
}



function TVUnits() {
  return (
    <section
      id="tv-units"
      aria-labelledby="tv-units-title"
      className="
        relative
        grid
        grid-cols-1
        md:grid-cols-12
        items-center
        min-h-screen
        bg-white
        overflow-hidden
      "
    >
      {/* Image */}
      <div
        className="
          md:col-span-7
          h-[48vh]
          sm:h-[58vh]
          md:h-screen
          overflow-hidden
          relative
          group
        "
      >
        <img
  src={tvUnitsImg} // or poojaImg, kitchenImg, etc.
  alt=""
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
   scale-105
animate-[slowZoom_12s_ease-in-out_infinite_alternate]
group-hover:scale-100
  "
/>

        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content */}
      <div
        className="
          md:col-span-5
          flex
          flex-col
          justify-center

          px-8
          sm:px-12
          md:px-20
          lg:px-24

          py-20
          md:py-0
        "
      >
        {/* Label */}
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/45
            mb-8
          "
        >
          Collection 01
        </span>

        {/* Heading */}
        <h2
          id="tv-units-title"
          className="
            font-display
            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.88]
            tracking-[-0.05em]

            font-medium
          "
        >
          TV Unit
          <span className="block">
            Collection
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-10
            max-w-md
            text-black/60
            text-[15px]
            leading-8
          "
        >
          Bespoke entertainment spaces crafted with timeless proportions,
          refined detailing and modern functionality.
        </p>

        {/* CTA */}
        <Link
          to="/collections/tv-units"
          state={{ returnTo: "tv-units" }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "instant" as ScrollBehavior,
            })
          }
          className="
            group
            inline-flex
            items-center
            gap-4

            mt-16

            uppercase
            tracking-[0.35em]
            text-[11px]

            text-black

            w-fit
          "
        >
          <span className="relative">
            Explore

            <span
              className="
                absolute
                left-0
                -bottom-2
                h-px
                w-full
                bg-black

                scale-x-0
                origin-right

                transition-transform
                duration-500

                group-hover:scale-x-100
                group-hover:origin-left
              "
            />
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            <path
              d="M1 8H15M10 3L15 8L10 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}



function Kitchens() {
  return (
    <section
      id="kitchens"
      aria-labelledby="kitchens-title"
      className="
        relative
        h-auto
        md:min-h-screen
        grid
        grid-cols-1
        md:grid-cols-2
        overflow-hidden
        bg-white
      "
    >
      {/* Content */}
      <div
        className="
          order-2
          md:order-1
          flex
          flex-col
          justify-center

          px-6
          sm:px-8
          md:px-16
          lg:px-24

          py-14
          sm:py-16
          md:py-0

          bg-white
        "
      >
        {/* Label */}
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/45
            mb-8
          "
        >
          Collection 02
        </span>

        {/* Heading */}
        <h2
          id="tv-units-title"
          className="
            font-display
            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.88]
            tracking-[-0.05em]

            font-medium
          "
        >
          Kitchen
          <span className="block">
            Collection
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-10
            max-w-md
            text-black/60
            text-[15px]
            leading-8
          "
        >
          Bespoke entertainment spaces crafted with timeless proportions,
          refined detailing and modern functionality.
        </p>

        {/* CTA */}
        <Link
          to="/collections/kitchens"
          state={{ returnTo: "kitchens" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant" as ScrollBehavior,
            });
          }}
          className="
            group
            inline-flex
            items-center
            gap-4

            mt-10
            sm:mt-12
            md:mt-16

            uppercase
            tracking-[0.35em]

            text-[11px]

            text-black

            w-fit
          "
        >
          <span className="relative inline-block">
            Explore

            <span
              className="
                absolute
                left-0
                -bottom-2

                h-px
                w-full

                bg-black

                scale-x-0
                origin-right

                transition-transform
                duration-500

                group-hover:scale-x-100
                group-hover:origin-left
              "
            />
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            <path
              d="M1 8H15M10 3L15 8L10 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div
        className="
          order-1
          md:order-2

          h-[45vh]
          sm:h-[55vh]
          md:h-screen

          relative
          overflow-hidden
          group
        "
      >
        <img
  src={poojaImg} // or poojaImg, kitchenImg, etc.
  alt=""
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
   scale-105
animate-[slowZoom_12s_ease-in-out_infinite_alternate]
group-hover:scale-100
  "
/>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
}

function Living() {
  return (
    <section
      id="living"
      aria-labelledby="living-title"
      className="
        relative
        h-auto
        md:min-h-screen
        grid
        grid-cols-1
        md:grid-cols-12
        items-center
        overflow-hidden
        bg-white
      "
    >
      {/* Image */}
      <div
        className="
          md:col-span-7
          h-[45vh]
          sm:h-[55vh]
          md:h-screen
          relative
          overflow-hidden
          group
        "
      >
       <img
  src={tvUnitsImg} // or poojaImg, kitchenImg, etc.
  alt=""
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
   scale-105
animate-[slowZoom_12s_ease-in-out_infinite_alternate]
group-hover:scale-100
  "
/>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content */}
      <div
        className="
          md:col-span-5
          flex
          flex-col
          justify-center

          px-6
          sm:px-8
          md:px-16
          lg:px-24

          py-14
          sm:py-16
          md:py-0

          bg-white
        "
      >
        {/* Label */}
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/45
            mb-8
          "
        >
          Collection 03
        </span>

        {/* Heading */}
        <h2
          id="tv-units-title"
          className="
            font-display
            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.88]
            tracking-[-0.05em]

            font-medium
          "
        >
          Living
          <span className="block">
            Collection
          </span>
        </h2>

        {/* Description */}
         <p
          className="
            mt-10
            max-w-md
            text-black/60
            text-[15px]
            leading-8
          "
        >
          Bespoke entertainment spaces crafted with timeless proportions,
          refined detailing and modern functionality.
        </p>

        {/* CTA */}
        <Link
          to="/collections/living"
          state={{ returnTo: "living" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant" as ScrollBehavior,
            });
          }}
          className="
            group
            inline-flex
            items-center
            gap-4

            mt-10
            sm:mt-12
            md:mt-16

            uppercase
            tracking-[0.35em]

            text-[11px]

            text-black

            w-fit
          "
        >
          <span className="relative inline-block">
            Explore

            <span
              className="
                absolute
                left-0
                -bottom-2

                h-px
                w-full

                bg-black

                scale-x-0
                origin-right

                transition-transform
                duration-500

                group-hover:scale-x-100
                group-hover:origin-left
              "
            />
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            <path
              d="M1 8H15M10 3L15 8L10 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}


function Bedrooms() {
  return (
    <section
      id="bedrooms"
      aria-labelledby="bedrooms-title"
      className="
        relative
        h-auto
        md:min-h-screen
        grid
        grid-cols-1
        md:grid-cols-2
        overflow-hidden
        bg-white
      "
    >
      {/* Content */}
      <div
        className="
          order-2
          md:order-1
          flex
          flex-col
          justify-center

          px-6
          sm:px-8
          md:px-16
          lg:px-24

          py-14
          sm:py-16
          md:py-0

          bg-white
        "
      >
        {/* Label */}
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/45
            mb-8
          "
        >
          Collection 04
        </span>

        {/* Heading */}
        <h2
          id="tv-units-title"
          className="
            font-display
            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.88]
            tracking-[-0.05em]

            font-medium
          "
        >
          Bed Room
          <span className="block">
            Collection
          </span>
        </h2>

        {/* Description */}
         <p
          className="
            mt-10
            max-w-md
            text-black/60
            text-[15px]
            leading-8
          "
        >
          Bespoke entertainment spaces crafted with timeless proportions,
          refined detailing and modern functionality.
        </p>

        {/* CTA */}
        <Link
          to="/collections/bedrooms"
          state={{ returnTo: "bedrooms" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant" as ScrollBehavior,
            });
          }}
          className="
            group
            inline-flex
            items-center
            gap-4

            mt-10
            sm:mt-12
            md:mt-16

            uppercase
            tracking-[0.35em]

            text-[11px]

            text-black

            w-fit
          "
        >
          <span className="relative inline-block">
            Explore

            <span
              className="
                absolute
                left-0
                -bottom-2

                h-px
                w-full

                bg-black

                scale-x-0
                origin-right

                transition-transform
                duration-500

                group-hover:scale-x-100
                group-hover:origin-left
              "
            />
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            <path
              d="M1 8H15M10 3L15 8L10 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div
        className="
          order-1
          md:order-2

          h-[45vh]
          sm:h-[55vh]
          md:h-screen

          relative
          overflow-hidden
          group
        "
      >
       <img
  src={poojaImg} // or poojaImg, kitchenImg, etc.
  alt=""
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
   scale-105
animate-[slowZoom_12s_ease-in-out_infinite_alternate]
group-hover:scale-100
  "
/>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
}

function Wardrobes() {
  return (
    <section
      id="wardrobes"
      aria-labelledby="wardrobes-title"
      className="
        relative
        h-auto
        md:min-h-screen
        grid
        grid-cols-1
        md:grid-cols-12
        items-center
        overflow-hidden
        bg-white
      "
    >
      {/* Image */}
      <div
        className="
          md:col-span-7
          h-[45vh]
          sm:h-[55vh]
          md:h-screen
          relative
          overflow-hidden
          group
        "
      >
        <img
  src={tvUnitsImg} // or poojaImg, kitchenImg, etc.
  alt=""
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
   scale-105
animate-[slowZoom_12s_ease-in-out_infinite_alternate]
group-hover:scale-100
  "
/>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content */}
      <div
        className="
          md:col-span-5
          flex
          flex-col
          justify-center

          px-6
          sm:px-8
          md:px-16
          lg:px-24

          py-14
          sm:py-16
          md:py-0

          bg-white
        "
      >
        {/* Label */}
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/45
            mb-8
          "
        >
          Collection 05
        </span>

        {/* Heading */}
        <h2
          id="tv-units-title"
          className="
            font-display
            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.88]
            tracking-[-0.05em]

            font-medium
          "
        >
          Wardrobe
          <span className="block">
            Collection
          </span>
        </h2>

        {/* Description */}
         <p
          className="
            mt-10
            max-w-md
            text-black/60
            text-[15px]
            leading-8
          "
        >
          Bespoke entertainment spaces crafted with timeless proportions,
          refined detailing and modern functionality.
        </p>

        {/* CTA */}
        <Link
          to="/collections/wardrobes"
          state={{ returnTo: "wardrobes" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant" as ScrollBehavior,
            });
          }}
          className="
            group
            inline-flex
            items-center
            gap-4

            mt-10
            sm:mt-12
            md:mt-16

            uppercase
            tracking-[0.35em]

            text-[11px]

            text-black

            w-fit
          "
        >
          <span className="relative inline-block">
            Explore

            <span
              className="
                absolute
                left-0
                -bottom-2

                h-px
                w-full

                bg-black

                scale-x-0
                origin-right

                transition-transform
                duration-500

                group-hover:scale-x-100
                group-hover:origin-left
              "
            />
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            <path
              d="M1 8H15M10 3L15 8L10 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}


function Pooja() {
  return (
    <section
      id="pooja"
      aria-labelledby="pooja-title"
      className="
        relative
        h-auto
        md:min-h-screen
        grid
        grid-cols-1
        md:grid-cols-2
        overflow-hidden
        bg-white
      "
    >
      {/* Content */}
      <div
        className="
          order-2
          md:order-1
          flex
          flex-col
          justify-center

          px-6
          sm:px-8
          md:px-16
          lg:px-24

          py-14
          sm:py-16
          md:py-0

          bg-white
        "
      >
        {/* Label */}
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/45
            mb-8
          "
        >
          Collection 06
        </span>

        {/* Heading */}
       <h2
          id="tv-units-title"
          className="
            font-display
            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.98]
            tracking-[-0.05em]

            font-medium
          "
        >
          Pooja Room
          <span className="block">
            Collection
          </span>
        </h2>

        {/* Description */}
         <p
          className="
            mt-10
            max-w-md
            text-black/60
            text-[15px]
            leading-8
          "
        >
          Bespoke entertainment spaces crafted with timeless proportions,
          refined detailing and modern functionality.
        </p>

        {/* CTA */}
        <Link
          to="/collections/pooja"
          state={{ returnTo: "pooja" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "instant" as ScrollBehavior,
            });
          }}
          className="
            group
            inline-flex
            items-center
            gap-4

            mt-10
            sm:mt-12
            md:mt-16

            uppercase
            tracking-[0.35em]

            text-[11px]

            text-black

            w-fit
          "
        >
          <span className="relative inline-block">
            Explore

            <span
              className="
                absolute
                left-0
                -bottom-2

                h-px
                w-full

                bg-black

                scale-x-0
                origin-right

                transition-transform
                duration-500

                group-hover:scale-x-100
                group-hover:origin-left
              "
            />
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            <path
              d="M1 8H15M10 3L15 8L10 13"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div
        className="
          order-1
          md:order-2

          h-[45vh]
          sm:h-[55vh]
          md:h-screen

          relative
          overflow-hidden
          group
        "
      >
        <img
  src={poojaImg} // or poojaImg, kitchenImg, etc.
  alt=""
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
   scale-105
animate-[slowZoom_12s_ease-in-out_infinite_alternate]
group-hover:scale-100
  "
/>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        relative
        min-h-[100svh]
        md:min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      <img
        src={aboutImg}
        alt="Master craftsman working at his atelier bench"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
      />

      <div className="absolute inset-0 bg-background/40" />

      <div
        className="
          relative
          z-10
          max-w-3xl
          px-6
          sm:px-8
          md:px-16
          lg:px-24
          py-20
          md:py-24
        "
      >
        <p
          className="
            font-mono
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-[0.4em]
            text-accent
            mb-8
          "
        >
          Our Story
        </p>

        <h2
          id="about-title"
          className="
            font-display
            text-[2.4rem]
            sm:text-[3rem]
            md:text-6xl

            font-medium
            tracking-[-0.03em]

            leading-tight
            mb-10
            text-balance
          "
        >
          “Design is not what we create. It is the way you experience your home”
        </h2>

        <p
          className="
            text-foreground/75
            text-[15px]
            sm:text-base
            md:text-lg
            leading-7
            font-light
            leading-relaxed
            max-w-2xl
          "
        >
          At Saradhi Interiors, we create timeless spaces through experience,
          craftsmanship, and thoughtful design.
        </p>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="
        relative
        grid
        grid-cols-1
        md:grid-cols-2
        min-h-[100svh]
        md:min-h-screen

        bg-white

        border-t
        border-black/10
      "
    >
      {/* Left Content */}

      <div
        className="
          p-6
          sm:p-8
          md:p-16
          lg:p-24

          flex
          flex-col
          justify-center

          bg-white
        "
      >
        <span
          className="
            font-mono
            uppercase
            tracking-[0.45em]
            text-[10px]

            text-black/45

            mb-8
          "
        >
          By Appointment
        </span>

        <h2
          id="contact-title"
          className="
            font-display

            text-black

            text-[3rem]
            sm:text-[4rem]
            md:text-[5rem]
            lg:text-[6rem]

            leading-[0.95]

            tracking-[-0.05em]

            font-medium

            mb-12
          "
        >
          Book a

          <span className="block">
            Consultation
          </span>
        </h2>

        <form
          className="
            space-y-8
            max-w-md
          "
          onSubmit={(e) => e.preventDefault()}
        >
          <Field
            label="Full Name"
            placeholder="Naira Krishnan"
            name="name"
          />

          <Field
            label="Email Address"
            placeholder="abc@gmail.com"
            type="email"
            name="email"
          />

          <Field
            label="Project Scope"
            placeholder="Ameya Pearl - Ameenpur"
            name="scope"
          />

          <button
            type="submit"
            className="
              group

              w-full

              py-5

              border
              border-black

              bg-black
              text-white

              hover:bg-white
              hover:text-black

              transition-all
              duration-500

              uppercase
              tracking-[0.35em]

              text-[11px]

              flex
              items-center
              justify-center
              gap-3
            "
          >
            Submit Inquiry

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              <path
                d="M1 8H15M10 3L15 8L10 13"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </button>
        </form>

        {/* Contact Details */}

        <div
          className="
            mt-14

            grid
            grid-cols-1
            sm:grid-cols-2

            gap-10

            max-w-md
          "
        >
          <div>
            <p
              className="
                font-mono
                uppercase

                tracking-[0.35em]

                text-[9px]

                text-black/45

                mb-4
              "
            >
              Studio
            </p>

            <p className="text-black/65 leading-8">
              Shanthi Srinagar Colony,
              <br />
              Ameenpur,
              <br />
              Hyderabad,
              <br />
              Telangana - 502033
            </p>
          </div>

          <div>
            <p
              className="
                font-mono
                uppercase

                tracking-[0.35em]

                text-[9px]

                text-black/45

                mb-4
              "
            >
              Contact
            </p>

            <p className="text-black/65 leading-8">
              saradhiinteriors81@gmail.com
              <br />
              +91 9133410488
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}

      <div
        className="
          relative

          h-[45vh]
          sm:h-[55vh]
          md:h-auto

          overflow-hidden

          group
        "
      >
        <img
          src={studioImg}
          alt="Designer sketching architectural plans"
          width={1000}
          height={1200}
          loading="lazy"
          className="
            w-full
            h-full

            object-cover

            transition-transform
            duration-[1800ms]
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:scale-[1.02]
          "
        />

        <div className="absolute inset-0 bg-black/5" />
      </div>
    </section>
  );
}


function Field({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}) {
  return (
    <label className="block">
      <span
        className="
          block
          mb-3

          font-mono
          uppercase
          tracking-[0.35em]

          text-[10px]

          text-black/45
        "
      >
        {label}
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="
          w-full

          bg-transparent

          border-0
          border-b
          border-black/20

          pb-4

          text-black

          placeholder:text-black/35

          outline-none

          transition-all
          duration-300

          focus:border-black
        "
      />
    </label>
  );
}

function CategoryLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] border-b border-accent/40 hover:border-accent pb-2 w-fit transition-colors"
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-500 group-hover:translate-x-1"
        aria-hidden
      >
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1" />
      </svg>
    </a>
  );
}



export default HomePage;
