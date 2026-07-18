function Footer() {
  return (
    <footer
      className="
        px-5
        sm:px-8
        md:px-16
        lg:px-24
        py-14
        sm:py-16
        md:py-20
        border-t
        border-border
        bg-black
      "
    >
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:justify-between
          lg:items-start
          gap-12
          lg:gap-24
        "
      >
        {/* Brand */}
        <div className="max-w-sm">
          <h2
            className="
              font-display
              text-white

              text-[2rem]
              sm:text-[2.4rem]
              md:text-5xl

              font-medium
              leading-[0.92]
              tracking-[-0.04em]

              mb-5
            "
          >
            Saradhi Interiors
          </h2>

          <p
            className="
              text-[13px]
              sm:text-sm
              text-white/60
              leading-7
            "
          >
            Timeless interiors, crafted with experience.
          </p>
        </div>

        {/* Footer Links */}
        <div
          className="
            grid
            grid-cols-2
            gap-10
            sm:gap-14
            md:gap-20
          "
        >
          {/* Social */}
          <div
            className="
              flex
              flex-col
              gap-4
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white
                font-medium
                mb-1
              "
            >
              Social
            </span>

            <a
              href="#"
              className="
                text-white/60
                hover:text-white
                transition-colors
                duration-500
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                text-white/60
                hover:text-white
                transition-colors
                duration-500
              "
            >
              Facebook
            </a>

            <a
              href="#"
              className="
                text-white/60
                hover:text-white
                transition-colors
                duration-500
              "
            >
              YouTube
            </a>
          </div>

          {/* Legal */}
          <div
            className="
              flex
              flex-col
              gap-4
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white
                font-medium
                mb-1
              "
            >
              Legal
            </span>

            <a
              href="#"
              className="
                text-white/60
                hover:text-white
                transition-colors
                duration-500
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                text-white/60
                hover:text-white
                transition-colors
                duration-500
              "
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="
          mt-12
          sm:mt-16
          pt-6
          sm:pt-8

          border-t
          border-white/10

          flex
          flex-col
          md:flex-row
          md:justify-between

          gap-4

          font-mono
          text-[9px]
          uppercase
          tracking-[0.3em]

          text-white/45
        "
      >
        <span className="leading-relaxed">
          © 2026 Saradhi Interiors. All rights reserved.
        </span>

        <span className="leading-relaxed">
          Ameenpur · Hyderabad · India
        </span>
      </div>
    </footer>
  );
}

export default Footer;