import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";

import { useEffect, useState } from "react";

import heroImg from "@/assets/hero.jpg";
import tvUnitsImg from "@/assets/tv-units.jpg";
import wallMuralsImg from "@/assets/wall-murals.jpg";
import poojaImg from "@/assets/pooja.jpg";
import aboutImg from "@/assets/about.jpg";
import studioImg from "@/assets/studio.png";





export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saradhi Interiors — Elegant Living Solutions" },
      {
        name: "description",
        content:
          "Bespoke luxury interiors: sculptural TV units, hand-painted wall murals, and sacred pooja room designs for private residences.",
      },
      { property: "og:title", content: "Aesthetica — Elegant Living Solutions" },
      {
        property: "og:description",
        content:
          "Bespoke luxury interiors crafted at the intersection of master joinery and contemporary architecture.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});


const NAV_LINKS = [
  { label: "Collections", href: "#tv-units" },
  { label: "Bespoke", href: "#about" },
  { label: "Consult", href: "#contact" },
];



function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <PoojaRooms />
        <TVUnits1 />
        <PoojaRooms1 />
        <TVUnits2 />
        <PoojaRooms2 />
        <WallMurals />
        <About />
        <Contact />
        <Footer />
      </main>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}

function SiteNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 py-8 md:py-10 mix-blend-difference"
    >
      <a
        href="#main"
        className="font-display text-2xl tracking-tight italic text-foreground"
      >
        Saradhi Interiors
      </a>
      <div className="flex items-center gap-8 md:gap-12">
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="size-6 flex flex-col justify-between items-end group"
        >
          <span
            className={`h-px bg-foreground transition-all duration-300 ${
              menuOpen ? "w-6 translate-y-[3px] rotate-45" : "w-7"
            }`}
          />
          <span
            className={`h-px bg-foreground transition-all duration-300 ${
              menuOpen
                ? "w-6 -translate-y-[3px] -rotate-45"
                : "w-4 group-hover:w-7"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const items = [
    { label: "Home", href: "#main" },
    { label: "TV Units", href: "#tv-units" },
    { label: "Wall Murals", href: "#wall-murals" },
    { label: "Pooja Rooms", href: "#pooja" },
    { label: "Our Story", href: "#about" },
    { label: "Featured", href: "#featured" },
    { label: "Consult", href: "#contact" },
  ];
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center animate-fade-in"
    >
      <ul className="flex flex-col items-center gap-6 md:gap-8">
        {items.map((i) => (
          <li key={i.href}>
            <a
              href={i.href}
              onClick={onClose}
              className="font-display italic text-4xl md:text-6xl tracking-tight hover:text-accent transition-colors duration-500"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Ameenpur / Hyderabad / India
      </div>
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
      <img
        src={heroImg}
        alt="Sculptural walnut TV unit in a moody contemporary living room"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

      <div className="relative z-10 text-center px-6 animate-fade-up">
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-6 text-accent">
    
        </p>
        <h1
          id="hero-title"
          className="font-display text-6xl md:text-8xl lg:text-9xl italic text-balance mb-10 tracking-tight leading-[0.95]"
        >
          Elegant Living
          <span className="block">Solutions.</span>
        </h1>
        <p className="max-w-md mx-auto text-sm md:text-base text-foreground/70 mb-12 leading-relaxed">
         Crafting timeless interiors through experience,
creativity, and a passion for exceptional living.
        </p>
        <a
          href="#tv-units"
          className="group relative inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] pb-3"
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
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="absolute bottom-0 left-0 w-full h-px bg-accent origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
        </a>
      </div>

      <a
        href="#tv-units"
        aria-label="Scroll to first collection"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="block w-px h-12 bg-foreground/40 animate-scroll-hint origin-top" />
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
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
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
  to="/collections"
  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]"
>
  Discover →
</Link>
      </div>
    </section>
  );
}


function PoojaRooms() {
  return (
    <section
      id="pooja"
      aria-labelledby="pooja-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Volume III — Sanctuary
        </span>
        <h2
          id="pooja-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Pooja Room
          <span className="block">Designs</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Sanctuaries of silence, crafted from sacred geometry, hand-carved
          rosewood, and quarried marble.
        </p>
        <CategoryLink>Learn More</CategoryLink>
      </div>
      <div className="order-1 md:order-2 h-[60vh] md:h-screen relative">
        <img
          src={poojaImg}
          alt="Atmospheric pooja room with candlelight reflected on marble and carved wood"
          width={1080}
          height={1920}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

function TVUnits1() {
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
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
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
        <CategoryLink>Discover</CategoryLink>
      </div>
    </section>
  );
}

function PoojaRooms1() {
  return (
    <section
      id="pooja"
      aria-labelledby="pooja-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Volume III — Sanctuary
        </span>
        <h2
          id="pooja-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Pooja Room
          <span className="block">Designs</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Sanctuaries of silence, crafted from sacred geometry, hand-carved
          rosewood, and quarried marble.
        </p>
        <CategoryLink>Learn More</CategoryLink>
      </div>
      <div className="order-1 md:order-2 h-[60vh] md:h-screen relative">
        <img
          src={poojaImg}
          alt="Atmospheric pooja room with candlelight reflected on marble and carved wood"
          width={1080}
          height={1920}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}


function TVUnits2() {
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
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
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
        <CategoryLink>Discover</CategoryLink>
      </div>
    </section>
  );
}

function PoojaRooms2() {
  return (
    <section
      id="pooja"
      aria-labelledby="pooja-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-surface">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
          Volume III — Sanctuary
        </span>
        <h2
          id="pooja-title"
          className="font-display text-5xl md:text-6xl italic mb-8 tracking-tight"
        >
          Pooja Room
          <span className="block">Designs</span>
        </h2>
        <p className="text-foreground/70 text-base max-w-sm leading-relaxed mb-12">
          Sanctuaries of silence, crafted from sacred geometry, hand-carved
          rosewood, and quarried marble.
        </p>
        <CategoryLink>Learn More</CategoryLink>
      </div>
      <div className="order-1 md:order-2 h-[60vh] md:h-screen relative">
        <img
          src={poojaImg}
          alt="Atmospheric pooja room with candlelight reflected on marble and carved wood"
          width={1080}
          height={1920}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

function WallMurals() {
  return (
    <section
      id="tv-units"
      aria-labelledby="tv-units-title"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 items-center"
    >
      <div className="md:col-span-7 h-[60vh] md:h-screen relative overflow-hidden group">
        <img
          src={wallMuralsImg}
          alt="Close detail of textured dark walnut joinery with warm integrated lighting"
          width={1200}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
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
        <CategoryLink>Discover</CategoryLink>
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

function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-16 border-t border-border">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        <div>
          <div className="font-display text-3xl italic mb-4">Saradhi Interiors</div>
          <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
            Timeless interiors, crafted with experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-foreground/80 font-bold">Social</span>
            <a href="#" className="hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Youtube
            </a>
          </div>
          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-foreground/80 font-bold">Legal</span>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
           
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60">
        <span>© 2024 Saradhi Interiors. All rights reserved.</span>
        <span>Ameenpur · Hyderabad · India</span>
      </div>
    </footer>
  );
}
