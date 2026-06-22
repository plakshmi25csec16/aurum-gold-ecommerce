import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero-gold.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.13_70/0.18),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
            <Sparkles className="h-3 w-3" /> New Collection 2026
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Timeless <span className="text-gold-gradient italic">Gold</span><br /> for Every Story
          </h1>
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            Handcrafted 24K fine jewelry designed to be worn, gifted, and remembered. Discover the new Aurum collection.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-onyx shadow-gold-glow transition-transform hover:scale-105">
              Shop Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold">
              Explore Lookbook
            </button>
          </div>
          <div className="mt-6 flex gap-8 border-t border-border/60 pt-6">
            {[["24K","Pure Gold"],["50K+","Happy Clients"],["15Y","Craftsmanship"]].map(([n,l])=>(
              <div key={l}>
                <div className="font-display text-2xl font-bold text-gold">{n}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gold/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-soft">
            <img src={hero} alt="Gold jewelry collection" width={1600} height={1100} className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]" />
            <div className="absolute bottom-4 left-4 rounded-2xl border border-gold/30 bg-background/80 px-4 py-3 backdrop-blur-md">
              <div className="text-xs text-muted-foreground">Featured</div>
              <div className="font-display text-lg font-semibold text-gold">Royal Heritage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
