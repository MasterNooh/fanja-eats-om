import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ink text-sand/70 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-sand">Arab World</span>
              <span className="font-arabic text-base text-brass-bright">
                مطعم العالم العربي
              </span>
            </div>
            <p className="mt-2 text-sm">Authentic Omani cuisine · Fanja, Oman</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-brass-bright transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-brass-bright transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sand/10 flex flex-col md:flex-row justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Arab World Restaurant Fanja. All rights reserved.</span>
          <span className="font-arabic text-brass-bright/80">شكراً لزيارتكم</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
