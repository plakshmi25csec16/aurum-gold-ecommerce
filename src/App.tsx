import { useState, useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { OfferBanner } from "@/components/site/OfferBanner";
import { Reviews } from "@/components/site/Reviews";
import { Brands } from "@/components/site/Brands";
import { Footer } from "@/components/site/Footer";

// Page Components
import About from "./pages/About";
import GoldCertification from "./pages/GoldCertification";
import CustomJewelry from "./pages/CustomJewelry";
import GiftGuide from "./pages/GiftGuide";
import JewelryCare from "./pages/JewelryCare";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    // Set default hash if not present
    if (!window.location.hash) {
      window.location.hash = "#home";
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
  };

  const renderContent = () => {
    switch (currentHash) {
      case "#about":
        return <About onNavigate={navigateTo} />;
      case "#certification":
        return <GoldCertification />;
      case "#custom":
        return <CustomJewelry />;
      case "#gift-guide":
        return <GiftGuide />;
      case "#care":
        return <JewelryCare />;
      case "#home":
      default:
        return (
          <>
            <Hero />
            <Categories />
            <Products />
            <OfferBanner />
            <Reviews />
            <Brands />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-gold">
      <Navbar currentHash={currentHash} />
      <main className="min-h-[calc(100vh-20rem)]">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}
