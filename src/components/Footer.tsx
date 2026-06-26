function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-16 border-t border-border">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">

        <div>
          <div className="font-display text-3xl italic mb-4">
            Saradhi Interiors
          </div>

          <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
            Timeless interiors, crafted with experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24">

          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-foreground/80 font-bold">
              Social
            </span>

            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
          </div>

          <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-foreground/80 font-bold">
              Legal
            </span>

            <a href="#">Privacy</a>
            <a href="#">Terms</a>
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


export default Footer;