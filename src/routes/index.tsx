import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import heroImg from "../assets/hero.jpg";
import tvUnitsImg from "../assets/tv-units.jpg";
import wallMuralsImg from "../assets/wall-murals.jpg";
import poojaImg from "../assets/pooja.jpg";
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

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
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
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 text-center px-6 animate-fade-up">
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-6 text-accent">
        </p>

        <h1
  id="hero-title"
  className="
    font-display
    italic
    font-bold
    text-[4rem]
    md:text-[6rem]
    lg:text-[8rem]
    leading-[0.95]
    tracking-[-0.06em]
    text-[#f5efe8]
  "
>
  Elegant Living
  <span className="block ml-10 md:ml-20 mt-2">
    Solutions
  </span>
</h1>

        <p
  className="
    mt-10
    text-[16px]
    md:text-[1.2rem]
    leading-[1.85]
    text-white/60
    max-w-4xl
    mx-auto
    text-center
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
            gap-6
            text-[11px]
            uppercase
            tracking-[0.4em]
            text-white
            mt-7
            mb-4
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
          bottom-16
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
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
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
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 items-center"
    >
      <div className="md:col-span-7 h-[60vh] md:h-screen relative overflow-hidden group">
        <img
  src={tvUnitsImg}
  alt="Close detail of textured dark walnut joinery with warm integrated lighting"
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    scale-105
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-out
    group-hover:scale-110
  "
/>
        <div className="absolute inset-0 bg-background/10" />
      </div>
      <div className="md:col-span-5 px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
          Volume I — Joinery
        </span>
        <h2
          id="tv-units-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          TV Unit
          <span className="block">Collections</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Sculptural monoliths that anchor the living space, merging technical
          precision with raw materiality.
        </p>
    <Link
  to="/collections/tv-units"
  onClick={(e) => {
    e.currentTarget.blur();
    window.scrollTo(0, 0);
  }}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    mt-16
    text-[11px]
    uppercase
    tracking-[0.4em]
    text-white
    transition-colors
    duration-500
    hover:text-[#b6925b]
    focus:outline-none
    active:outline-none
  "
>
  Discover

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-500 group-hover:translate-x-1"
  >
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>

  <span
    className="
      absolute
      -bottom-2
      left-0
      h-px
      w-full
      bg-[#b6925b]
      origin-right
      scale-x-0
      transition-transform
      duration-500
      group-hover:origin-left
      group-hover:scale-x-100
    "
  />
</Link>
</div>
</section>
  );
}




function Kitchens() {
  return (
    <section
      id="kitchens"
      aria-labelledby="pooja-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Volume II — Sanctuary
        </span>
        <h2
          id="pooja-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Kitchen
          <span className="block">Collections</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
         Refined culinary spaces crafted for effortless living, where elegant finishes meet intelligent functionality.
        </p>
   <Link
  to="/collections/kitchens"
  onClick={(e) => {
    e.currentTarget.blur();
    window.scrollTo(0, 0);
  }}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    mt-16
    text-[11px]
    uppercase
    tracking-[0.4em]
    text-white
    transition-colors
    duration-500
    hover:text-[#b6925b]
    focus:outline-none
    active:outline-none
  "
>
  Discover

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-500 group-hover:translate-x-1"
  >
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>

  <span
    className="
      absolute
      -bottom-2
      left-0
      h-px
      w-[130px]
      bg-[#b6925b]
      origin-right
      scale-x-0
      transition-transform
      duration-500
      group-hover:origin-left
      group-hover:scale-x-100
    "
  />
</Link>
      </div>
      <div className="order-1 md:order-2 h-[60vh] md:h-screen relative">
        <img
  src={poojaImg}
  alt="Close detail of textured dark walnut joinery with warm integrated lighting"
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    scale-105
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-out
    group-hover:scale-110
  "
/>
      </div>
    </section>
  );
}

function Living() {
  return (
    <section
      id="living"
      aria-labelledby="tv-units-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 items-center"
    >
      <div className="md:col-span-7 h-[60vh] md:h-screen relative overflow-hidden group">
        <img
  src={tvUnitsImg}
  alt="Close detail of textured dark walnut joinery with warm integrated lighting"
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    scale-105
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-out
    group-hover:scale-110
  "
/>
        <div className="absolute inset-0 bg-background/10" />
      </div>
      <div className="md:col-span-5 px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
          Volume III — Joinery
        </span>
        <h2
          id="tv-units-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Living
          <span className="block">Collections</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Thoughtfully composed living spaces that balance comfort, sophistication, and timeless contemporary design.
        </p>
      <Link
  to="/collections/living"
  onClick={(e) => {
    e.currentTarget.blur();
    window.scrollTo(0, 0);
  }}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    mt-16
    text-[11px]
    uppercase
    tracking-[0.4em]
    text-white
    transition-colors
    duration-500
    hover:text-[#b6925b]
    focus:outline-none
    active:outline-none
  "
>
  Discover

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-500 group-hover:translate-x-1"
  >
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>

  <span
    className="
      absolute
      -bottom-2
      left-0
      h-px
      w-full
      bg-[#b6925b]
      origin-right
      scale-x-0
      transition-transform
      duration-500
      group-hover:origin-left
      group-hover:scale-x-100
    "
  />
</Link>
      </div>
    </section>
  );
}

function Bedrooms() {
  return (
    <section
      id="bedrooms"
      aria-labelledby="pooja-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Volume IV — Sanctuary
        </span>
        <h2
          id="pooja-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Bed Room
          <span className="block">Collections</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Private sanctuaries designed with warmth and tranquility, creating an atmosphere of refined everyday luxury.
        </p>
<Link
  to="/collections/bedrooms"
  onClick={(e) => {
    e.currentTarget.blur();
    window.scrollTo(0, 0);
  }}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    mt-16
    text-[11px]
    uppercase
    tracking-[0.4em]
    text-white
    transition-colors
    duration-500
    hover:text-[#b6925b]
    focus:outline-none
    active:outline-none
  "
>
  Discover

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-500 group-hover:translate-x-1"
  >
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>

  <span
    className="
      absolute
      -bottom-2
      left-0
      h-px
      w-[130px]
      bg-[#b6925b]
      origin-right
      scale-x-0
      transition-transform
      duration-500
      group-hover:origin-left
      group-hover:scale-x-100
    "
  />
</Link>
      </div>
      <div className="order-1 md:order-2 h-[60vh] md:h-screen relative">
        <img
  src={poojaImg}
  alt="Close detail of textured dark walnut joinery with warm integrated lighting"
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    scale-105
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-out
    group-hover:scale-110
  "
/>
      </div>
    </section>
  );
}


function Wardrobes() {
  return (
    <section
      id="wardrobes"
      aria-labelledby="tv-units-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 items-center"
    >
      <div className="md:col-span-7 h-[60vh] md:h-screen relative overflow-hidden group">
        <img
  src={tvUnitsImg}
  alt="Close detail of textured dark walnut joinery with warm integrated lighting"
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    scale-105
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-out
    group-hover:scale-110
  "
/>
        <div className="absolute inset-0 bg-background/10" />
      </div>
      <div className="md:col-span-5 px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
          Volume V — Joinery
        </span>
        <h2
          id="tv-units-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Wardrobe
          <span className="block">Collections</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Tailor-made storage solutions blending meticulous craftsmanship with seamless organization and elegance.
        </p>
      <Link
  to="/collections/wardrobes"
  onClick={(e) => {
    e.currentTarget.blur();
    window.scrollTo(0, 0);
  }}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    mt-16
    text-[11px]
    uppercase
    tracking-[0.4em]
    text-white
    transition-colors
    duration-500
    hover:text-[#b6925b]
    focus:outline-none
    active:outline-none
  "
>
  Discover

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-500 group-hover:translate-x-1"
  >
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>

  <span
    className="
      absolute
      -bottom-2
      left-0
      h-px
      w-full
      bg-[#b6925b]
      origin-right
      scale-x-0
      transition-transform
      duration-500
      group-hover:origin-left
      group-hover:scale-x-100
    "
  />
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
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Volume VI — Sanctuary
        </span>
        <h2
          id="pooja-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Pooja Room
          <span className="block"></span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Sanctuaries of silence, crafted from sacred geometry, hand-carved
          rosewood, and quarried marble.
        </p>
      <Link
  to="/collections/pooja"
  onClick={(e) => {
    e.currentTarget.blur();
    window.scrollTo(0, 0);
  }}
  className="
    group
    relative
    inline-flex
    items-center
    gap-4
    mt-16
    text-[11px]
    uppercase
    tracking-[0.4em]
    text-white
    transition-colors
    duration-500
    hover:text-[#b6925b]
    focus:outline-none
    active:outline-none
  "
>
  Discover

  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform duration-500 group-hover:translate-x-1"
  >
    <path
      d="M1 7h12M8 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>

  <span
    className="
      absolute
      -bottom-2
      left-0
      h-px
      w-[130px]
      bg-[#b6925b]
      origin-right
      scale-x-0
      transition-transform
      duration-500
      group-hover:origin-left
      group-hover:scale-x-100
    "
  />
</Link>
      </div>
      <div className="order-1 md:order-2 h-[60vh] md:h-screen relative">
        <img
  src={poojaImg}
  alt="Close detail of textured dark walnut joinery with warm integrated lighting"
  width={1200}
  height={1080}
  loading="lazy"
  className="
    w-full
    h-full
    object-cover
    scale-105
    animate-floatingImage
    transition-transform
    duration-[2000ms]
    ease-out
    group-hover:scale-110
  "
/>
      </div>
    </section>
  );
}


function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative min-h-screen flex items-center overflow-hidden"
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
      <div className="relative z-10 max-w-3xl px-8 md:px-16 lg:px-24 py-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">
          Our Story
        </p>
        <h2
          id="about-title"
          className="font-display text-4xl md:text-6xl italic mb-10 leading-tight text-balance"
        >
          “Design is not what we create. It is the way you experience your home”
        </h2>
        <p className="text-foreground/75 text-base md:text-lg font-light leading-relaxed max-w-2xl">
         At Saradhi Interiors, we create timeless spaces through experience, craftsmanship, and thoughtful design.
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
      className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">
          By Appointment
        </span>
        <h2
          id="contact-title"
          className="font-display text-5xl md:text-6xl italic mb-12 tracking-tight"
        >
          Book a
          <span className="block">Consultation</span>
        </h2>
        <form className="space-y-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
          <Field label="Full Name" placeholder="Naira Krishnan" name="name" />
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
            className="group w-full py-5 border border-foreground/15 hover:bg-foreground hover:text-background transition-all duration-500 text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3"
          >
            Submit Inquiry
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden
            >
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </form>

        <div className="mt-16 grid grid-cols-2 gap-8 max-w-md text-sm">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Studio
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Shanthi Srinagar Colony,
              <br />
              Ameenpur,Hyderabad,
              <br />
              Telangana-502 033
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Contact
            </p>
            <p className="text-foreground/80 leading-relaxed">
              saradhiinteriors81@gmail.com
              <br />
              +91 9133410488
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-[60vh] md:h-auto overflow-hidden">
        <img
          src={studioImg}
          alt="Designer sketching architectural plans in a sunlit studio"
          width={1000}
          height={1200}
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-125 opacity-70"
        />
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
    <div className="border-b border-foreground/15 focus-within:border-accent transition-colors pb-2">
      <label
        htmlFor={name}
        className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none pt-2 pb-1 text-sm text-foreground placeholder:text-foreground/30"
      />
    </div>
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
