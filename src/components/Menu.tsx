import Ornament from "./Ornament";

type Item = {
  name: string;
  arabic: string;
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
    title: "Breakfast",
    arabic: "الإفطار",
    items: [
      { name: "Dry Meat", arabic: "لحم جاف", price: "1.000" },
      { name: "Hummus Meat", arabic: "حمص لحم", price: "1.000" },
      { name: "Beef Fry", arabic: "لحم بقر مقلي", price: "1.000" },
      { name: "Kidney", arabic: "كلاوي", price: "1.000" },
      { name: "Liver", arabic: "كبدة", price: "1.000" },
      { name: "Hummus Mix", arabic: "حمص مشكل", price: "1.000" },
      { name: "Egg Omelette", arabic: "عجة بيض", price: "0.700" },
      { name: "Egg Bullsai", arabic: "بيض عيون", price: "0.700" },
      { name: "Egg Tomato", arabic: "بيض بطماطم", price: "0.700" },
      { name: "Daal", arabic: "دال", price: "0.500" },
      { name: "Foul", arabic: "فول", price: "0.600" },
      { name: "Keema", arabic: "كيما", price: "0.600" },
      { name: "Vegetable", arabic: "خضار", price: "0.600" },
      { name: "Hummus", arabic: "حمص", price: "0.300" },
      { name: "Chips", arabic: "بطاطس", price: "0.300" },
      { name: "Salad", arabic: "سلطة", price: "0.300" },
      { name: "Tea", arabic: "شاي", price: "0.100" },
    ],
  },
  {
    title: "Lunch",
    arabic: "الغداء",
    items: [
      { name: "Fresh Mutton Shuwa — Family Pack", arabic: "شواء لحم طازج — عائلي", price: "10.500", signature: true },
      { name: "Mutton Shuwa + Rice", arabic: "شواء لحم + أرز", price: "2.200", signature: true },
      { name: "Chicken Shuwa + Rice", arabic: "شواء دجاج + أرز", price: "1.800" },
      { name: "Grill Chicken + Rice", arabic: "دجاج مشوي + أرز", price: "1.800" },
      { name: "Al Faham Chicken + Rice", arabic: "دجاج فحم + أرز", price: "1.800" },
      { name: "Chicken Fry + Rice", arabic: "دجاج مقلي + أرز", price: "1.800" },
      { name: "Chicken Masala + Rice", arabic: "دجاج مسالا + أرز", price: "1.800" },
      { name: "Chicken Veg Mix + Rice", arabic: "دجاج بالخضار + أرز", price: "1.800" },
      { name: "Meat Veg Mix + Rice", arabic: "لحم بالخضار + أرز", price: "1.800" },
      { name: "Tuna Biryani", arabic: "برياني تونة", price: "1.600" },
      { name: "Awal Biryani", arabic: "برياني أوال", price: "1.800" },
      { name: "Fish Biryani", arabic: "برياني سمك", price: "1.800" },
      { name: "Fish Curry + Rice", arabic: "كاري سمك + أرز", price: "1.800" },
      { name: "Mutton Shuwa + Hummus Bread", arabic: "شواء لحم + خبز حمص", price: "2.200" },
      { name: "Chicken Shuwa + Hummus Bread", arabic: "شواء دجاج + خبز حمص", price: "1.800" },
      { name: "Quarter Chicken + Rice", arabic: "ربع دجاج + أرز", price: "1.200" },
      { name: "Beef Biryani", arabic: "برياني لحم بقر", price: "1.500" },
      { name: "Dry Meat + Bread", arabic: "لحم جاف + خبز", price: "1.000" },
      { name: "Soup", arabic: "شوربة", price: "0.200" },
    ],
  },
  {
    title: "Dinner",
    arabic: "العشاء",
    items: [
      { name: "Fresh Mutton Shuwa — Family Pack", arabic: "شواء لحم طازج — عائلي", price: "10.500", signature: true },
      { name: "Mutton Tikka + Hummus Bread", arabic: "تكا لحم + خبز حمص", price: "1.800" },
      { name: "Kabab + Hummus Bread", arabic: "كباب + خبز حمص", price: "1.800" },
      { name: "Tikka Kabab + Hummus Bread", arabic: "تكا كباب + خبز حمص", price: "1.800" },
      { name: "Chicken Al Faham + Hummus Bread", arabic: "دجاج فحم + خبز حمص", price: "1.800" },
      { name: "Mix Grill + Hummus Bread", arabic: "مشاوي مشكلة + خبز حمص", price: "1.800" },
      { name: "Lamb Chops + Hummus Bread", arabic: "ريش غنم + خبز حمص", price: "1.900" },
      { name: "Mutton Shuwa Mandi / Biryani", arabic: "مندي/برياني شواء لحم", price: "2.200", signature: true },
      { name: "Chicken Alfaham Mandi / Biryani", arabic: "مندي/برياني دجاج فحم", price: "1.800" },
      { name: "Fish Fry Mandi / Biryani", arabic: "مندي/برياني سمك مقلي", price: "1.800" },
      { name: "Tuna Biryani", arabic: "برياني تونة", price: "1.600" },
      { name: "Hummus Meat", arabic: "حمص لحم", price: "1.000" },
      { name: "Hummus Chicken", arabic: "حمص دجاج", price: "1.000" },
      { name: "Chilly Chicken", arabic: "دجاج حار", price: "1.000" },
      { name: "Kidney Liver Mix", arabic: "كلاوي وكبدة", price: "1.000" },
      { name: "Dry Meat", arabic: "لحم جاف", price: "1.000" },
      { name: "Harees", arabic: "هريس", price: "0.500" },
      { name: "Chips", arabic: "بطاطس", price: "0.300" },
      { name: "Soup", arabic: "شوربة", price: "0.200" },
    ],
  },
  {
    title: "Chicken with Rice",
    arabic: "دجاج مع أرز",
    items: [
      { name: "½ Chicken with Rice", arabic: "نصف دجاجة مع أرز", price: "1.800" },
      { name: "Full Chicken with Rice", arabic: "دجاجة كاملة مع أرز", price: "3.600" },
      { name: "1 & Half Chicken with Rice", arabic: "دجاجة ونصف مع أرز", price: "5.400" },
      { name: "2 Full Chicken with Rice", arabic: "دجاجتان كاملتان مع أرز", price: "7.200" },
      { name: "2 & Half Chicken with Rice", arabic: "دجاجتان ونصف مع أرز", price: "9.000" },
    ],
  },
  {
    title: "Mixed Meat with Rice",
    arabic: "لحم مشكل مع أرز",
    items: [
      { name: "Full Chicken + 1KG Fresh Beef", arabic: "دجاجة كاملة + 1 كجم لحم بقر طازج", price: "8.600" },
      { name: "Full Chicken + 2 PCS Fresh Mutton", arabic: "دجاجة كاملة + قطعتان لحم غنم طازج", price: "9.200" },
      { name: "Full Chicken + 2 PCS Frozen Mutton", arabic: "دجاجة كاملة + قطعتان لحم غنم مجمد", price: "8.600" },
    ],
  },
  {
    title: "Fish with Rice",
    arabic: "سمك مع أرز",
    items: [
      { name: "Sharry with Rice", arabic: "شاري مع الأرز", price: "1.800" },
      { name: "Kedar (Tuna) with Rice", arabic: "كيدار (تونة) مع الأرز", price: "1.800" },
      { name: "Tuna Kabuli", arabic: "تونة كابولي", price: "1.800" },
      { name: "Awal Kabuli", arabic: "أوال كابولي", price: "1.800" },
    ],
  },
];

const Menu = () => {
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-gradient-warm">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-spice uppercase text-xs tracking-[0.3em]">
            The Menu · القائمة
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-ink text-balance">
            Authentic Yemeni cuisine,
            <span className="block italic text-spice">slow-cooked with love.</span>
          </h2>
          <p className="mt-4 font-arabic text-2xl text-spice" dir="rtl">
            مطبخ يمني أصيل، يُطهى ببطء وحب
          </p>
          <Ornament className="mt-8" />
          <p className="mt-6 text-foreground/70 text-lg">
            All prices in Omani Rial · جميع الأسعار بالريال العماني
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

              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] gap-4 items-baseline"
                  >
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-display text-base md:text-lg text-ink leading-tight">
                          {item.name}
                        </h4>
                        {item.signature && (
                          <span className="text-[10px] uppercase tracking-[0.2em] bg-burgundy text-sand px-2 py-0.5">
                            Signature
                          </span>
                        )}
                      </div>
                      <span className="font-arabic text-sm text-muted-foreground block mt-0.5" dir="rtl">
                        {item.arabic}
                      </span>
                    </div>
                    <div className="font-display text-lg text-spice tabular-nums">
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
