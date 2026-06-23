import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: [
      { name: "Rings", hash: "#home" },
      { name: "Necklaces", hash: "#home" },
      { name: "Earrings", hash: "#home" },
      { name: "Bracelets", hash: "#home" },
      { name: "Watches", hash: "#home" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", hash: "#about" },
      { name: "Purity & Certification", hash: "#certification" },
      { name: "Bespoke Jewelry", hash: "#custom" },
      { name: "Gift Guide", hash: "#gift-guide" },
      { name: "Jewelry Care", hash: "#care" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Book Consultation", hash: "#custom" },
      { name: "Purity Check", hash: "#certification" },
      { name: "Insured Shipping", hash: "#certification" },
      { name: "Care Guide", hash: "#care" },
      { name: "FAQs", hash: "#certification" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-onyx">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient font-display font-bold text-onyx">A</span>
              <span className="font-display text-xl font-semibold text-gold-gradient">AURUM</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">Timeless 24K gold jewelry crafted by master artisans for the modern collector.</p>
            <div className="mt-2 flex gap-2">
              {[Instagram, Facebook, Twitter, Youtube].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">{c.title}</h4>
              <ul className="flex flex-col gap-2">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <a href={l.hash} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gold">Newsletter</h4>
            <p className="mb-3 text-sm text-muted-foreground">Get 10% off your first order plus early access to new drops.</p>
            <form className="flex overflow-hidden rounded-full border border-border bg-background focus-within:border-gold" onSubmit={(e) => e.preventDefault()}>
              <div className="grid place-items-center pl-4 text-muted-foreground"><Mail className="h-4 w-4" /></div>
              <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground" />
              <button type="submit" className="bg-gold-gradient px-5 text-xs font-bold text-onyx">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Aurum Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
