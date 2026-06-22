import { SectionHeading } from "./SectionHeading";

const cats = [
  { name: "Rings", count: 124, emoji: "💍" },
  { name: "Necklaces", count: 87, emoji: "📿" },
  { name: "Earrings", count: 96, emoji: "✨" },
  { name: "Bracelets", count: 64, emoji: "🔗" },
  { name: "Watches", count: 32, emoji: "⌚" },
  { name: "Pendants", count: 51, emoji: "💎" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Browse" title="Shop by Category" subtitle="Find the perfect piece across our curated collections." />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {cats.map((c) => (
          <a key={c.name} href="#" className="group flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold-glow">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-2xl">{c.emoji}</div>
            <div className="text-center">
              <div className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-gold">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.count} items</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
