import { useState } from "react";
import { Sparkles, Shield, Droplets, Info, ChevronDown, ChevronUp } from "lucide-react";

export default function JewelryCare() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const careTips = [
    {
      icon: Droplets,
      title: "Avoid Chemicals",
      desc: "Remove jewelry before applying perfumes, hairsprays, lotions, or sanitizers. Exposure to harsh household cleaning products, chlorine, and sweat can dull the natural luster of gold over time."
    },
    {
      icon: Shield,
      title: "Remove During Activity",
      desc: "Take off precious pieces before heavy exercise, swimming, gardening, or cleaning. Physical impacts can scratch the soft surface of 24K pure gold or loosen delicate gemstone settings."
    },
    {
      icon: Sparkles,
      title: "Gently Clean Regularly",
      desc: "Wipe down your jewelry with a soft, dry lint-free cloth after each wear. This removes natural skin oils and dust buildup that can diminish the gold's brilliant light reflection."
    }
  ];

  const storageTips = [
    { title: "Individual Compartments", desc: "Store each piece of jewelry in its own soft pouch or lined compartment within a jewelry box. This prevents pieces from rubbing against each other, which can lead to scratching." },
    { title: "Dry Climate", desc: "Keep jewelry stored in a dry, temperate environment. Excessive humidity and direct sunlight can affect alloys and gemstone colors over time." },
    { title: "Secure Clasps", desc: "Fasten necklaces and bracelets before storing them, and lay them flat. This prevents chains from tangling or developing bends and kinks." }
  ];

  const careFaqs = [
    { q: "Does 24K gold tarnish?", a: "Pure gold (24K) does not tarnish because it does not react with oxygen. However, minor surface buildup of oils, lotion, and cosmetics can make the gold look dull. A simple wash resolves this immediately." },
    { q: "How often should I clean my gold jewelry?", a: "For daily wear items, a light wipe with a microfiber cloth is recommended every night. A deeper clean with warm soapy water should be done once every 1–2 months, depending on use." },
    { q: "Can I use ultrasonic cleaners on my jewelry?", a: "Ultrasonic cleaners are excellent for solid 24K gold chains, but can be highly dangerous for pieces featuring fragile, cracked, or porous gemstones (like emeralds, pearls, or opals), as the vibrations can loosen or shatter stones." },
    { q: "How should I handle minor scratches?", a: "Because 24K gold is soft, minor surface scratches are natural and give the jewelry a rich patina over time. If you prefer a mirror polish, bring your piece to a professional jeweler for light buffing once a year." }
  ];

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,oklch(0.62_0.13_70/0.1),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Maintenance Guide
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Preserving Your <span className="text-gold-gradient italic">Legacy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            A piece of Aurum jewelry is designed to last forever. Follow our professional care, cleaning, and storage guide to keep your investment shining for generations.
          </p>
        </div>
      </section>

      {/* Daily Care Checklist */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Daily Rituals</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Daily Care Guidelines
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Simple, mindful habits that prevent damage and keep your gold jewelry looking brand new.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {careTips.map((tip) => (
            <div
              key={tip.title}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-gold/30"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold">
                <tip.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{tip.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Cleaning Instructions */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Home Cleaning</span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                How to Clean Gold at Home
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                You do not need special chemicals to restore your gold's radiant sheen. Follow this simple, safe method.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {[
                  { step: "01", title: "Warm Soak", desc: "Soak your gold jewelry in a bowl of warm water mixed with a few drops of mild dish detergent. Let it sit for 10-15 minutes to loosen oils and grime." },
                  { step: "02", title: "Gentle Polish", desc: "Use a clean, extra-soft-bristled baby toothbrush to gently scrub intricate filigree, settings, or crevices. Do not scrub hard." },
                  { step: "03", title: "Rinse & Dry", desc: "Rinse the jewelry thoroughly under warm running water. Pat dry with a soft, lint-free microfiber cloth. Avoid using paper towels as they can scratch the metal." }
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="font-display text-2xl font-bold text-gold shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-foreground">{s.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.62_0.13_70/0.05),transparent_40%)]" />
              <div className="flex h-10 w-10 place-items-center justify-center rounded-xl bg-gold/15 text-gold mb-6">
                <Info className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Gemstone Exception</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Certain gemstones (like pearls, opals, turquoise, and emeralds) are highly porous and sensitive. Never soak these stones in water or use brushes. Clean them exclusively with a damp, soft cloth or consult a professional.
              </p>
              <div className="mt-6 border-t border-border/60 pt-6">
                <span className="text-xs font-semibold text-gold">Need Professional Care?</span>
                <p className="text-[10px] text-muted-foreground mt-1">We offer complimentary lifetime inspection and professional cleaning services for all jewelry purchased at Aurum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Recommendations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Storage</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Storage Best Practices
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            How and where you rest your jewelry is critical to preventing tarnishing, tangling, and scratching.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {storageTips.map((tip) => (
            <div
              key={tip.title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-gold/30"
            >
              <h3 className="font-display text-lg font-semibold text-gold">{tip.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care FAQ Accordion */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Care FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Jewelry Care Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {careFaqs.map((faq, idx) => (
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
    </div>
  );
}
