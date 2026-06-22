import { SectionHeading } from "./SectionHeading";
import { ProductCard, type Product } from "./ProductCard";
import ring from "@/assets/p-ring.jpg";
import necklace from "@/assets/p-necklace.jpg";
import earrings from "@/assets/p-earrings.jpg";
import bracelet from "@/assets/p-bracelet.jpg";
import watch from "@/assets/p-watch.jpg";
import pendant from "@/assets/p-pendant.jpg";

const products: Product[] = [
  { id: "1", name: "Solitaire Diamond Ring", price: 2499, oldPrice: 2999, rating: 5, image: ring, badge: "Bestseller" },
  { id: "2", name: "Cuban Link Chain", price: 1899, rating: 4.5, image: necklace, badge: "New" },
  { id: "3", name: "Classic Gold Hoops", price: 649, oldPrice: 799, rating: 5, image: earrings },
  { id: "4", name: "Filigree Bangle", price: 1299, rating: 4.5, image: bracelet, badge: "Limited" },
  { id: "5", name: "Heritage Gold Watch", price: 4599, rating: 5, image: watch, badge: "Premium" },
  { id: "6", name: "Amethyst Pendant", price: 899, oldPrice: 1099, rating: 4.5, image: pendant },
];

export function Products() {
  return (
    <section className="border-y border-border/60 bg-ink/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured" title="Bestselling Pieces" subtitle="Loved by thousands. Crafted for the few." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="rounded-full border border-gold/40 px-8 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-onyx">View All Products</button>
        </div>
      </div>
    </section>
  );
}
