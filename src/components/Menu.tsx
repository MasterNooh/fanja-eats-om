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
  items: Item[];
};

const sections: Section[] = [
  {
    title: "Signature Shuwa",
    arabic: "الشواء",
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

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-sand/40 border border-brass/30 p-8 md:p-10 shadow-warm"
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {section.title}
                </h3>
                <span className="font-arabic text-xl text-spice">
                  {section.arabic}
                </span>
              </div>
              <div className="ornament-divider mt-5 mb-7" />

              <ul className="space-y-6">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] gap-4 items-baseline"
                  >
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-display text-lg md:text-xl text-ink">
                          {item.name}
                        </h4>
                        {item.signature && (
                          <span className="text-[10px] uppercase tracking-[0.2em] bg-burgundy text-sand px-2 py-0.5">
                            Signature
                          </span>
                        )}
                      </div>
                      <span className="font-arabic text-sm text-muted-foreground block mt-0.5">
                        {item.arabic}
                      </span>
                      <p className="mt-1.5 text-foreground/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="font-display text-xl text-spice tabular-nums">
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
