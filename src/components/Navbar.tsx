import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Photos" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand/95 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span
            className={`font-display text-2xl tracking-tight leading-none ${
              scrolled ? "text-ink" : "text-sand"
            }`}
          >
            Arab World
          </span>
          <span
            className={`hidden sm:inline font-arabic text-base ${
              scrolled ? "text-spice" : "text-brass-bright"
            }`}
          >
            مطعم العالم العربي
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  scrolled
                    ? "text-ink/80 hover:text-spice"
                    : "text-sand/90 hover:text-brass-bright"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className={`hidden md:inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] border transition-all ${
            scrolled
              ? "border-ink/80 text-ink hover:bg-ink hover:text-sand"
              : "border-sand/80 text-sand hover:bg-sand hover:text-ink"
          }`}
        >
          Reserve
        </a>

        <button
          className={`md:hidden p-2 ${scrolled ? "text-ink" : "text-sand"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-sand border-t border-border">
          <ul className="container flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink/80 uppercase text-sm tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full justify-center items-center px-5 py-3 border border-ink text-ink uppercase tracking-[0.2em] text-xs"
              >
                Reserve
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
