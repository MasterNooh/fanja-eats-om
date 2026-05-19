import { Star, Quote } from "lucide-react";
import Ornament from "./Ornament";

const reviews = [
  {
    name: "Ahmed Al-Balushi",
    location: "Muscat, Oman",
    rating: 5,
    text: "The Shuwa here is unmatched. Truly the taste of authentic Omani tradition. Worth every minute of the drive from Muscat — we come every month.",
  },
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "We stopped here on a road trip through the mountains and were treated like family. The lamb was extraordinary, the dates and coffee a perfect ending.",
  },
  {
    name: "Khalid Al-Hinai",
    location: "Nizwa",
    rating: 4,
    text: "A real piece of Oman. The private dining room was perfect for our family gathering — generous portions, warm hospitality, fair prices.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-sand-deep arabesque-bg">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-spice uppercase text-xs tracking-[0.3em]">
            What Guests Say · آراء الضيوف
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-ink text-balance">
            <span className="text-spice italic">4.1</span> stars · 1,300+ reviews
          </h2>
          <p className="mt-3 font-arabic text-xl text-spice" dir="rtl">
            تقييم 4.1 نجمة · أكثر من 1,300 رأي
          </p>
          <Ornament className="mt-8" />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-card p-8 md:p-10 shadow-soft border border-border/60 relative"
            >
              <Quote
                className="absolute -top-4 left-8 text-brass bg-card px-1"
                size={32}
                strokeWidth={1.5}
              />
              <div className="flex items-center gap-1 text-brass">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 font-display text-xl md:text-[22px] text-ink leading-snug italic">
                "{r.text}"
              </p>
              <footer className="mt-6 pt-5 border-t border-border">
                <div className="text-ink font-medium">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.location}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
