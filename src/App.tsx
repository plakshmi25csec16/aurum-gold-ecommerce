import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { OfferBanner } from "@/components/site/OfferBanner";
import { Reviews } from "@/components/site/Reviews";
import { Brands } from "@/components/site/Brands";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <OfferBanner />
        <Reviews />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
