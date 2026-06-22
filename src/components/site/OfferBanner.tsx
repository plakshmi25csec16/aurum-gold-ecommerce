import { ArrowRight } from "lucide-react";

export function OfferBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-ink via-card to-onyx p-8 sm:p-12 lg:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold-deep/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-onyx">Limited Offer</span>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Up to <span className="text-gold-gradient">40% Off</span><br /> Festive Collection
            </h2>
            <p className="max-w-md text-muted-foreground">Celebrate the season with our limited-edition pieces. Free shipping on all orders above $500.</p>
            <button className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-onyx shadow-gold-glow transition-transform hover:scale-105">
              Shop the Sale <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["12","08","45"].map((n, i) => (
              <div key={i} className="rounded-2xl border border-gold/20 bg-background/50 p-4 text-center backdrop-blur">
                <div className="font-display text-3xl font-bold text-gold sm:text-4xl">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{["Days","Hours","Mins"][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
