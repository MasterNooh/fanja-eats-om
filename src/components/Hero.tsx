import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden bg-ink arabesque-bg"
    >
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative container pb-20 md:pb-32 pt-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-brass-bright mb-6 animate-fade-up">
            <span className="h-px w-10 bg-brass-bright" />
            <span className="font-arabic text-lg">فنجاء، عُمان</span>
            <span className="text-sand/80 text-xs uppercase tracking-[0.3em]">
              Fanja · Oman
            </span>
          </div>

          <h1 className="font-display text-sand text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-fade-up [animation-delay:120ms]">
            Authentic Yemeni
            <span className="block italic text-brass-bright">cuisine, slow-cooked.</span>
          </h1>

          <p className="mt-6 font-arabic text-2xl md:text-3xl text-brass-bright animate-fade-up [animation-delay:180ms]" dir="rtl">
            مطبخ يمني أصيل، يُطهى ببطء
          </p>

          <p className="mt-8 max-w-xl text-sand/85 text-lg leading-relaxed animate-fade-up [animation-delay:240ms]">
            Home of the legendary Shuwa, Mandi and Biryani — fresh meat, chicken
            and fish prepared the Yemeni way. Tucked between the date palms and
            Hajar mountains of Fanja.
          </p>
          <p className="mt-3 max-w-xl font-arabic text-sand/85 text-base leading-relaxed animate-fade-up [animation-delay:280ms]" dir="rtl">
            بيت الشواء والمندي والبرياني — لحم ودجاج وسمك طازج يُحضّر على الطريقة اليمنية الأصيلة في قرية فنجاء.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:360ms]">
            <a
              href="#menu"
              className="inline-flex items-center px-8 py-4 bg-brass text-ink uppercase tracking-[0.2em] text-xs font-medium hover:bg-brass-bright transition-colors"
            >
              View Menu · القائمة
            </a>
            <a
              href="#visit"
              className="inline-flex items-center px-8 py-4 border border-sand/70 text-sand uppercase tracking-[0.2em] text-xs hover:bg-sand hover:text-ink transition-colors"
            >
              Find Us · زورونا
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sand/85 animate-fade-up [animation-delay:480ms]">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} fill="hsl(var(--brass-bright))" className="text-brass-bright" />
              ))}
              <Star size={16} fill="hsl(var(--brass-bright))" className="text-brass-bright opacity-50" />
            </div>
            <div className="text-sm">
              <span className="text-sand font-medium">4.1</span>
              <span className="text-sand/60"> · 1,300+ reviews</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-sand/30" />
            <div className="hidden sm:block text-sm text-sand/70">
              Open today · Closes 2 AM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
