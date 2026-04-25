import shuwa from "@/assets/dish-shuwa.jpg";
import grill from "@/assets/dish-grill.jpg";
import majboos from "@/assets/dish-majboos.jpg";
import halwa from "@/assets/dish-halwa.jpg";
import Ornament from "./Ornament";

type Item = {
  name: string;
  arabic: string;
  desc: string;
  price: string;
  signature?: boolean;
};

type Section = {
  title: string;
  arabic: string;
  image: string;
  items: Item[];
};

const sections: Section[] = [
  {
    title: "Signature Shuwa",
    arabic: "الشواء",
    image: shuwa,
    items: [
      {
        name: "Fresh Lamb Shuwa",
        arabic: "شواء لحم طازج",
        desc: "Marinated overnight in our family spice blend, slow-roasted underground for 24 hours over saffron rice.",
        price: "4.000",
        signature: true,
      },
      {
        name: "Fresh Chicken Shuwa",
        arabic: "شواء دجاج",
        desc: "Tender free-range chicken, infused with cardamom, dried lime and Omani saffron.",
        price: "3.000",
        signature: true,
      },
      {
        name: "Camel Meat Shuwa",
        arabic: "شواء لحم جمل",
        desc: "A bedouin tradition — succulent camel meat slow-cooked with date molasses.",
        price: "4.500",
      },
    ],
  },
  {
    title: "From the Grill",
    arabic: "المشاوي",
    image: grill,
    items: [
      {
        name: "Mixed Grill Platter",
        arabic: "مشاوي مشكلة",
        desc: "Lamb kebabs, chicken tikka, kofta and grilled fish, served with hummus and khubz.",
        price: "3.500",
      },
      {
        name: "Grilled Hammour Fish",
        arabic: "هامور مشوي",
        desc: "Whole fish from the Omani coast, grilled with garlic, lemon and chermoula.",
        price: "3.000",
      },
      {
        name: "Lamb Mandi",
        arabic: "مندي لحم",
        desc: "Yemeni-style smoked lamb served on aromatic basmati with toasted nuts.",
        price: "3.200",
      },
    ],
  },
  {
    title: "Rice & Tradition",
    arabic: "الأرز والتقاليد",
    image: majboos,
    items: [
      {
        name: "Camel Majboos",
        arabic: "مجبوس جمل",
        desc: "Fragrant spiced rice with slow-cooked camel meat and caramelised onions.",
        price: "3.500",
      },
      {
        name: "Chicken Kabsa",
        arabic: "كبسة دجاج",
        desc: "Aromatic basmati with whole chicken, tomato and our house seven-spice mix.",
        price: "2.500",
      },
      {
        name: "Vegetable Biryani",
        arabic: "برياني نباتي",
        desc: "Saffron rice layered with seasonal vegetables, raisins and fried onions.",
        price: "2.000",
      },
    ],
  },
  {
    title: "Sweets & Coffee",
    arabic: "الحلويات والقهوة",
    image: halwa,
    items: [
      {
        name: "Omani Halwa",
        arabic: "حلوى عمانية",
        desc: "Rosewater, saffron and cardamom halwa topped with toasted pistachios.",
        price: "1.000",
      },
      {
        name: "Arabic Coffee & Dates",
        arabic: "قهوة عربية وتمر",
        desc: "Cardamom-spiced kahwa served with fresh Khalas dates from our own farm.",
        price: "0.800",
      },
      {
        name: "Luqaimat",
        arabic: "لقيمات",
        desc: "Crispy sweet dumplings drizzled with date syrup and sesame seeds.",
        price: "1.200",
      },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-gradient-warm">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-spice uppercase text-xs tracking-[0.3em]">
            The Menu
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-ink text-balance">
            Recipes passed down,
            <span className="block italic text-spice">plate by plate.</span>
          </h2>
          <Ornament className="mt-8" />
          <p className="mt-6 text-foreground/70 text-lg">
            All prices in Omani Rial. Vegan options available on request.
          </p>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-5 [direction:ltr]">
                <div className="aspect-square overflow-hidden shadow-warm">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>

              <div className="lg:col-span-7 [direction:ltr]">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-display text-3xl md:text-4xl text-ink">
                    {section.title}
                  </h3>
                  <span className="font-arabic text-2xl text-spice">
                    {section.arabic}
                  </span>
                </div>
                <div className="ornament-divider mt-6 mb-8 max-w-xs" />

                <ul className="space-y-7">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-[1fr_auto] gap-6 items-baseline"
                    >
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h4 className="font-display text-xl md:text-2xl text-ink">
                            {item.name}
                          </h4>
                          {item.signature && (
                            <span className="text-[10px] uppercase tracking-[0.2em] bg-burgundy text-sand px-2 py-0.5">
                              Signature
                            </span>
                          )}
                          <span className="font-arabic text-base text-muted-foreground">
                            {item.arabic}
                          </span>
                        </div>
                        <p className="mt-1.5 text-foreground/70 text-[15px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="font-display text-2xl text-spice tabular-nums">
                        {item.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
