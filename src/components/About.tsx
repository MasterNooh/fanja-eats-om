import aboutImg from "@/assets/about-exterior.jpg";
import Ornament from "./Ornament";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 arabesque-bg">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden shadow-warm">
            <img
              src={aboutImg}
              alt="Exterior of Arab World Restaurant in Fanja, Oman at sunset"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-burgundy text-sand p-6 md:p-8 max-w-[260px] shadow-warm">
            <div className="font-display text-5xl text-brass-bright leading-none">25+</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-sand/80">
              Years serving Fanja
            </div>
            <div className="mt-1 font-arabic text-sand/90 text-base" dir="rtl">
              أكثر من 25 سنة في فنجاء
            </div>
          </div>
        </div>

        <div>
          <span className="text-spice uppercase text-xs tracking-[0.3em]">
            Our Story · قصتنا
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
            A taste of <em className="text-spice not-italic">authentic Yemen</em>,
            served at the foot of the Hajar.
          </h2>
          <p className="mt-4 font-arabic text-2xl text-spice" dir="rtl">
            نكهة اليمن الأصيلة عند سفح جبال الحجر
          </p>

          <Ornament className="my-8 justify-start [&>span:first-child]:hidden" />

          <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
            <p>
              For over two decades, <strong className="text-ink">Arab World Restaurant</strong>{" "}
              has welcomed travellers and locals alike to share in the warm,
              generous rhythm of Yemeni hospitality.
            </p>
            <p className="font-arabic text-base" dir="rtl">
              منذ أكثر من عقدين، يستقبل <strong className="text-ink">مطعم العالم العربي</strong> المسافرين والمقيمين ليتذوقوا كرم الضيافة اليمنية الأصيلة.
            </p>
            <p>
              Our signature <em>Shuwa, Mandi and Biryani</em> — meats marinated
              in family spice blends and slow-cooked to perfection — keep guests
              coming back. Alongside, fresh fish from the coast, hummus bread,
              kabab, lamb chops and harees.
            </p>
            <p className="font-arabic text-xl text-spice text-right" dir="rtl">
              "أهلاً وسهلاً بكم في فنجاء"
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Cuisine · المطبخ</dt>
              <dd className="mt-1 font-display text-xl text-ink">Yemeni · يمني</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Per person · للشخص</dt>
              <dd className="mt-1 font-display text-xl text-ink">OMR 2–4</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Seating · الجلوس</dt>
              <dd className="mt-1 font-display text-xl text-ink">Private rooms</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
