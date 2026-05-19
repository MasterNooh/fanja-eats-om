import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Ornament from "./Ornament";

const hours = [
  { day: "Saturday – Wednesday", time: "11:00 AM – 2:00 AM" },
  { day: "Thursday – Friday", time: "11:00 AM – 3:00 AM" },
];

const Visit = () => {
  return (
    <section id="visit" className="py-24 md:py-32 bg-burgundy text-sand">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-brass-bright uppercase text-xs tracking-[0.3em]">
              Visit Us · زورونا
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-sand text-balance">
              Find your seat
              <span className="block italic text-brass-bright">in Fanja.</span>
            </h2>
            <p className="mt-3 font-arabic text-2xl text-brass-bright" dir="rtl">
              نرحب بكم في فنجاء
            </p>
            <Ornament className="my-8 justify-start [&>span:first-child]:hidden" />

            <p className="text-sand/80 text-lg leading-relaxed max-w-md">
              We're a 37-minute drive from Muscat, nestled in the historic village
              of Fanja. Walk-ins welcome — no reservations needed.
            </p>
            <p className="mt-2 font-arabic text-sand/80 text-base max-w-md" dir="rtl">
              نبعد 37 دقيقة عن مسقط في قرية فنجاء التاريخية. الدخول مباشر بدون حجز.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-brass-bright shrink-0 mt-1" size={22} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sand/60">Location · الموقع</div>
                  <div className="mt-1 font-display text-xl">
                    Fanja, Bidbid, Ad Dakhiliyah
                  </div>
                  <div className="font-arabic text-sand/90" dir="rtl">فنجاء، بدبد، الداخلية</div>
                  <div className="text-sand/70">Sultanate of Oman · Plus code 25 360097</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-brass-bright shrink-0 mt-1" size={22} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sand/60">Hours · أوقات العمل</div>
                  {hours.map((h) => (
                    <div key={h.day} className="mt-1 flex justify-between gap-8">
                      <span className="text-sand/90">{h.day}</span>
                      <span className="text-sand font-display text-lg">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-brass-bright shrink-0 mt-1" size={22} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sand/60">Contact · للتواصل</div>
                  <a href="tel:+96899312499" className="mt-1 font-display text-xl hover:text-brass-bright transition-colors block">
                    +968 9931 2499
                  </a>
                  <a href="tel:+96825360097" className="text-sand/80 hover:text-brass-bright transition-colors block">
                    +968 2536 0097
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/place/25+360097"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-brass text-ink uppercase tracking-[0.2em] text-xs font-medium hover:bg-brass-bright transition-colors"
              >
                <Navigation size={16} />
                Get Directions · الاتجاهات
              </a>
              <a
                href="tel:+96899312499"
                className="inline-flex items-center gap-2 px-7 py-4 border border-sand/60 text-sand uppercase tracking-[0.2em] text-xs hover:bg-sand hover:text-ink transition-colors"
              >
                Call Us · اتصل بنا
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px] overflow-hidden shadow-warm">
            <iframe
              title="Map of Arab World Restaurant Fanja"
              src="https://www.google.com/maps?q=Fanja+Oman&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
