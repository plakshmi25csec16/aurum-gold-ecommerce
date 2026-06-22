import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  { name: "Sophia Laurent", role: "Verified Buyer", text: "The craftsmanship is unmatched. My necklace arrived in stunning packaging — it feels like an heirloom.", rating: 5 },
  { name: "Aarav Mehta", role: "Verified Buyer", text: "Bought a ring for my proposal. The detail is breathtaking and she said yes. Aurum made the moment perfect.", rating: 5 },
  { name: "Emma Chen", role: "Verified Buyer", text: "I've ordered three pieces and every single one exceeded expectations. The gold sheen is the real deal.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="border-y border-border/60 bg-ink/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" subtitle="Stories from people who chose Aurum for their most precious moments." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-gold/40">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-2 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient font-display font-bold text-onyx">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
