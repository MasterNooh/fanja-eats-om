import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Arab World Restaurant Fanja",
            image: "https://lovable.dev/opengraph-image-p98pqg.png",
            servesCuisine: ["Omani", "Arabic"],
            priceRange: "OMR 2–4",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Fanja",
              addressRegion: "Ad Dakhiliyah",
              addressCountry: "OM",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.1",
              reviewCount: "1300",
            },
            openingHours: "Sa-We 11:00-02:00, Th-Fr 11:00-03:00",
          }),
        }}
      />
    </main>
  );
};

export default Index;
