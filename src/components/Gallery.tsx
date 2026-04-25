import shuwa from "@/assets/dish-shuwa.jpg";
import grill from "@/assets/dish-grill.jpg";
import majboos from "@/assets/dish-majboos.jpg";
import halwa from "@/assets/dish-halwa.jpg";
import hero from "@/assets/hero-interior.jpg";
import about from "@/assets/about-exterior.jpg";
import Ornament from "./Ornament";

const photos = [
  { src: shuwa, alt: "Shuwa lamb on saffron rice", span: "md:col-span-2 md:row-span-2" },
  { src: hero, alt: "Majlis interior" },
  { src: halwa, alt: "Omani halwa with coffee" },
  { src: about, alt: "Restaurant exterior at sunset", span: "md:col-span-2" },
  { src: majboos, alt: "Camel meat majboos" },
  { src: grill, alt: "Mixed grill platter" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-ink">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-brass-bright uppercase text-xs tracking-[0.3em]">
            Photos
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-sand text-balance">
            Step inside.
          </h2>
          <Ornament className="mt-8" />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
