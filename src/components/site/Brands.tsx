import { SectionHeading } from "./SectionHeading";

const brands = ["CARTIER", "TIFFANY", "BVLGARI", "HARRY W.", "CHOPARD", "GRAFF"];

export function Brands() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="As Featured" title="Trusted Partner Brands" />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((b) => (
          <div key={b} className="group grid h-20 place-items-center rounded-xl border border-border/60 bg-card transition-all hover:border-gold/40">
            <span className="font-display text-lg font-semibold tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-gold">{b}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
