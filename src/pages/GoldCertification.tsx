import { useState } from "react";
import { Award, ShieldCheck, Truck, ChevronDown, ChevronUp, Check } from "lucide-react";

export default function GoldCertification() {
  const [activeTab, setActiveTab] = useState<"24k" | "22k" | "18k">("24k");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const purityData = {
    "24k": {
      title: "24 Karat Pure Gold",
      percentage: "99.9% Pure",
      color: "Rich deep golden yellow",
      hardness: "Soft & highly malleable",
      usage: "Investment coins, bullion, and ultra-premium fine jewelry designed with structural reinforcement.",
      description: "24K gold is the highest karat rating possible. It represents absolute purity and contains zero alloyed metals. At Aurum, we have perfected techniques to craft stunning, durable luxury pieces using this most precious form of gold, ensuring both aesthetic beauty and high financial value retention."
    },
    "22k": {
      title: "22 Karat Gold",
      percentage: "91.6% Pure",
      color: "Warm golden yellow",
      hardness: "Medium durability",
      usage: "Daily wear necklaces, heavy bangles, and stone-less rings.",
      description: "22K gold consists of 22 parts gold and 2 parts alloy metals (such as silver, copper, or zinc). While highly valuable and rich in color, it is slightly harder than 24K gold, making it suitable for intricate, daily-use gold-only jewelry pieces."
    },
    "18k": {
      title: "18 Karat Gold",
      percentage: "75.0% Pure",
      color: "Subtle gold yellow",
      hardness: "High durability",
      usage: "Diamond settings, engagement rings, and complex gemstone jewelry.",
      description: "18K gold contains 75% gold blended with 25% alloy metals. This blend makes the metal significantly harder and more scratch-resistant, which is ideal for securing diamonds and precious gemstones in delicate, high-friction settings like engagement rings."
    }
  };

  const hallmarks = [
    { label: "Purity Grade Mark", detail: "Stamped '999' for 24K gold, certifying 99.9% pure content. Other gold items bear '916' (22K) or '750' (18K)." },
    { label: "Assaying Center Mark", detail: "The unique logo of the government-approved assaying laboratory that independently tested and verified the metal's purity." },
    { label: "Aurum Hallmark License", detail: "Our exclusive sponsor/jeweler stamp, identifying the piece as an authentic, master-crafted creation from Aurum." }
  ];

  const faqs = [
    { q: "What does 'Hallmarked Gold' actually mean?", a: "Hallmarking is the official certification of the gold content in jewelry, verified by an independent, government-approved laboratory. It protects consumers from under-caratage and ensures that when we label a piece as 24K, it is verified to be 99.9% pure." },
    { q: "How can I verify the authenticity of my Aurum jewelry?", a: "Each Aurum creation comes with a physical Certificate of Authenticity and contains laser-etched hallmark stamps on the inside of the band or clasp. You can verify these markings with a standard jeweler's loupe." },
    { q: "Is 24K gold too soft for daily jewelry?", a: "Traditionally, pure gold is softer than alloyed gold. However, Aurum uses advanced metallurgy and cold-working techniques to densify the metal, allowing us to create durable, structurally sound designs that can be worn regularly while maintaining 24K purity." },
    { q: "What is the Aurum Buyback Guarantee?", a: "We guarantee a 100% value buyback on the pure gold content of all our certified jewelry based on prevailing market rates, providing you with a liquid investment that holds its value forever." }
  ];

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.13_70/0.1),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Certified Excellence
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            The Standard of <span className="text-gold-gradient italic">Purity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            At Aurum, authenticity isn't just promised—it's certified. Explore how our gold meets the highest global benchmarks of purity and craftsmanship.
          </p>
        </div>
      </section>

      {/* 24K Gold Explanation & Karat comparison */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Understanding Gold</span>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Karat & Composition
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Gold purity is measured in karats, with 24 Karat representing 100% pure gold. Select a karat level below to compare specifications and understand how we use each type.
            </p>
            <div className="flex flex-col gap-3">
              {(["24k", "22k", "18k"] as const).map((karat) => (
                <button
                  key={karat}
                  onClick={() => setActiveTab(karat)}
                  className={`flex items-center justify-between rounded-xl border px-6 py-4 text-left transition-all ${
                    activeTab === karat
                      ? "border-gold bg-gold/5 text-gold"
                      : "border-border/60 bg-card/40 text-muted-foreground hover:border-gold/30 hover:text-foreground"
                  }`}
                >
                  <span className="font-display text-lg font-semibold">{karat.toUpperCase()} Gold</span>
                  <span className="text-xs font-semibold tracking-wider">
                    {purityData[karat].percentage}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/60 p-8 shadow-gold-glow backdrop-blur-sm lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-gold">{purityData[activeTab].title}</h3>
            <div className="mt-2 h-0.5 w-12 bg-gold-gradient" />
            
            <p className="mt-6 text-sm leading-relaxed text-foreground/90">
              {purityData[activeTab].description}
            </p>

            <div className="mt-8 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">Purity Level</div>
                <div className="mt-1 text-sm text-muted-foreground">{purityData[activeTab].percentage} Gold Content</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">Visual Color</div>
                <div className="mt-1 text-sm text-muted-foreground">{purityData[activeTab].color}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">Material Properties</div>
                <div className="mt-1 text-sm text-muted-foreground">{purityData[activeTab].hardness}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">Primary Use Cases</div>
                <div className="mt-1 text-sm text-muted-foreground">{purityData[activeTab].usage}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hallmark Certification Details */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Security & Authentication</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              How to Read Your Hallmark
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Every authentic Aurum piece is laser-etched with official verification stamps. These hallmarks are proof of independent laboratory authentication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {hallmarks.map((h, i) => (
              <div
                key={h.label}
                className="relative rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-gold/40"
              >
                <div className="absolute right-6 top-6 font-display text-4xl font-extrabold text-gold/10">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-gold">{h.label}</h3>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Aurum Promise</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Lifetime Guarantee & Support
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Your investment is fully protected. We stand by the purity of our gold and the quality of our craftsmanship for a lifetime.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Lifetime Purity Guarantee",
                  desc: "We guarantee that the karat level stamped on your jewelry will never degrade or change, or we replace the piece free of charge.",
                },
                {
                  icon: Award,
                  title: "Official Certification Card",
                  desc: "Every purchase is accompanied by a holographic Certificate of Authenticity specifying weight, purity, and artisan registry number.",
                },
                {
                  icon: Truck,
                  title: "Insured Transit",
                  desc: "All products are shipped in tamper-evident security boxes via armored, fully insured transport directly to your doorstep.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.62_0.13_70/0.05),transparent_40%)]" />
            <h3 className="font-display text-2xl font-semibold text-foreground">Certificate Verification</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Already own an Aurum piece? Verify your physical certificate online using your registry ID.
            </p>

            <form className="mt-6 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Registry ID (e.g. AU-2026-XXXX)"
                className="w-full rounded-full border border-border bg-background px-5 py-3 text-xs outline-none focus:border-gold"
              />
              <button className="rounded-full bg-gold-gradient py-3 text-xs font-bold text-onyx shadow-gold-glow hover:scale-[1.02] transition-transform">
                Verify Authenticity
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Common Queries</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-card transition-colors hover:border-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-gold" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="border-t border-border/60 px-6 py-4">
                    <p className="text-xs leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to Invest in Pure Luxury?
          </h2>
          <p className="max-w-md text-xs text-muted-foreground">
            Explore our hallmark-certified 24K gold jewelry collections, handcrafted to be worn today and treasured forever.
          </p>
          <a
            href="#home"
            className="rounded-full bg-gold-gradient px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-onyx shadow-gold-glow hover:scale-105 transition-transform"
          >
            Shop Certified Gold
          </a>
        </div>
      </section>
    </div>
  );
}
