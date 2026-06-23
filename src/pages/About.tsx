import { ShieldCheck, Award, Heart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gold.jpg";

interface AboutProps {
  onNavigate: (hash: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.13_70/0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Our Legacy
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[1.1] sm:text-6xl lg:text-7xl">
            Crafted for <span className="text-gold-gradient italic">Timeless</span> Elegance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl">
            Aurum represents the ultimate convergence of master craftsmanship, pure 24K gold, and modern luxury. Every piece is an enduring symbol of sophistication designed to transcend generations.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Journey</span>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              An Uncompromising Commitment to Perfection
            </h2>
            <div className="h-0.5 w-16 bg-gold-gradient" />
            <p className="text-base leading-relaxed text-muted-foreground">
              Founded under the vision of creating jewelry that carries both intrinsic value and timeless aesthetic, Aurum works exclusively with certified 24K gold. Our story is written in the fiery glow of the kiln and the meticulous touch of our master goldsmiths.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We believe that luxury shouldn't be hurried. We spend months refining a single design concept, ensuring that its proportions, weight, and light reflection achieve absolute harmony. It is this devotion to the finer details that makes an Aurum piece instantly recognizable.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gold/10 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-gold-glow">
              <img
                src={heroImage}
                alt="Master artisan at work"
                className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Philosophy</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              The Pillars of Aurum
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              We hold ourselves to standard-setting benchmarks, ensuring that each experience is as pure as the gold we shape.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Authenticity",
                desc: "Every gram of gold we use is ethically sourced, conflict-free, and independently certified for 24K purity. We offer complete transparency from mine to box.",
              },
              {
                icon: Award,
                title: "Craftsmanship",
                desc: "Our jewelry is handcrafted by master artisans who have inherited centuries-old techniques. We celebrate the unique marks of true manual artistry.",
              },
              {
                icon: Heart,
                title: "Trust",
                desc: "With lifetime warranties, free insured shipping, and a transparent buyback commitment, we build relationships that are as enduring as our gold.",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-onyx shadow-md">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="border-b border-border/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-6">
            {[
              { label: "Happy Customers", value: "10,000+" },
              { label: "Jewelry Designs", value: "500+" },
              { label: "Satisfaction Rate", value: "99%" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="text-gold-gradient font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {s.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card px-8 py-16 text-center shadow-gold-glow sm:px-16 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,oklch(0.62_0.13_70/0.08),transparent_50%)]" />
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Begin Your <span className="text-gold-gradient italic">Aurum</span> Story
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            Explore our signature collections or design a bespoke heirloom that represents your unique legacy.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate("#home")}
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-onyx shadow-gold-glow transition-transform hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
