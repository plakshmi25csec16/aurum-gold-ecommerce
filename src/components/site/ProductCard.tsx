import { Heart, Star } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  badge?: string;
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold-glow">
      <div className="relative aspect-square overflow-hidden bg-onyx">
        <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-onyx">{p.badge}</span>
        )}
        <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-gold">
          <Heart className="h-4 w-4" />
        </button>
        <button className="absolute inset-x-3 bottom-3 translate-y-12 rounded-full bg-gold-gradient py-2.5 text-xs font-bold uppercase tracking-wider text-onyx opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.round(p.rating) ? "fill-gold" : "opacity-30"}`} />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({p.rating})</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-gold">${p.price.toLocaleString()}</span>
          {p.oldPrice && <span className="text-sm text-muted-foreground line-through">${p.oldPrice.toLocaleString()}</span>}
        </div>
      </div>
    </article>
  );
}
