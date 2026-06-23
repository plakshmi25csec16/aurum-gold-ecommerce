import { useState } from "react";
import { Gift, Sparkles, Heart, Star, Check } from "lucide-react";
import ring from "@/assets/p-ring.jpg";
import necklace from "@/assets/p-necklace.jpg";
import earrings from "@/assets/p-earrings.jpg";
import bracelet from "@/assets/p-bracelet.jpg";
import watch from "@/assets/p-watch.jpg";
import pendant from "@/assets/p-pendant.jpg";

interface GiftProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  badge?: string;
  categories: string[];
}

const giftProducts: GiftProduct[] = [
  { id: "g1", name: "Solitaire Diamond Ring", price: 2499, image: ring, rating: 5, badge: "Best Seller", categories: ["anniversary", "wedding"] },
  { id: "g2", name: "Cuban Link Chain", price: 1899, image: necklace, rating: 4.5, badge: "Modern Icon", categories: ["anniversary", "birthday"] },
  { id: "g3", name: "Classic Gold Hoops", price: 649, image: earrings, rating: 5, categories: ["birthday"] },
  { id: "g4", name: "Filigree Bangle", price: 1299, image: bracelet, rating: 4.5, badge: "Handcrafted", categories: ["wedding", "anniversary"] },
  { id: "g5", name: "Heritage Gold Watch", price: 4599, image: watch, rating: 5, badge: "Premium", categories: ["anniversary", "wedding"] },
  { id: "g6", name: "Amethyst Pendant", price: 899, image: pendant, rating: 4.5, categories: ["birthday"] },
];

export default function GiftGuide() {
  const [selectedOccasion, setSelectedOccasion] = useState<"all" | "anniversary" | "wedding" | "birthday">("all");

  const filteredProducts = selectedOccasion === "all" 
    ? giftProducts 
    : giftProducts.filter(p => p.categories.includes(selectedOccasion));

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,oklch(0.62_0.13_70/0.1),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Curated Gifting
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            The Art of <span className="text-gold-gradient italic">Gifting</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Whether celebrating an anniversary, welcoming a wedding union, or marking a birthday, our curated guides point to the perfect 24K gold tokens of love.
          </p>
        </div>
      </section>

      {/* Occasion Guides / Filter Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Occasions</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Select Your Celebration
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { id: "all", label: "Show All Gifts" },
              { id: "anniversary", label: "Anniversary Gifts" },
              { id: "wedding", label: "Wedding Gifts" },
              { id: "birthday", label: "Birthday Gifts" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedOccasion(tab.id as any)}
                className={`rounded-full px-6 py-2.5 text-xs font-semibold tracking-wider transition-all ${
                  selectedOccasion === tab.id
                    ? "bg-gold-gradient text-onyx shadow-md"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-gold/30 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Gift Products */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold-glow"
            >
              <div className="relative aspect-square overflow-hidden bg-onyx">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-onyx">
                    {p.badge}
                  </span>
                )}
                <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-gold">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < Math.round(p.rating) ? "fill-gold" : "opacity-30"}`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">({p.rating})</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-lg font-bold text-gold">${p.price.toLocaleString()}</span>
                  <button className="text-xs font-semibold text-gold border-b border-gold/40 hover:border-gold pb-0.5 transition-colors">
                    Gift This Piece
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Signature Gifting Experience */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Signature Packaging</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Luxury Presentation is standard
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We understand that the presentation is just as important as the gift itself. Every Aurum piece is sent in our iconic custom-wrapped packaging, creating an unforgettable unboxing experience.
              </p>
              
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Iconic handmade black lacquer case",
                  "Certificate of authenticity sealed in gold-foil wax",
                  "Complimentary handwritten calligraphy note card",
                  "Soft protective micro-suede travel pouch"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-xs text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-8 text-center lg:p-12">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-onyx mx-auto mb-6">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Gift Concierge</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Unsure what to select? Speak with our styling expert who will help you find the jewelry that fits their size, style, and taste perfectly.
              </p>
              <button className="mt-8 rounded-full bg-gold-gradient px-8 py-3 text-xs font-bold uppercase tracking-wider text-onyx shadow-gold-glow hover:scale-105 transition-transform w-full sm:w-auto">
                Consult Gift Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Make the Moment Unforgettable
          </h2>
          <p className="max-w-md text-xs text-muted-foreground">
            Shop our gold jewelry collection with confidence. We offer extended holiday returns and complimentary insured delivery.
          </p>
          <a
            href="#home"
            className="rounded-full border border-gold/40 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold hover:text-onyx transition-all"
          >
            Explore Gifting Collection
          </a>
        </div>
      </section>
    </div>
  );
}
