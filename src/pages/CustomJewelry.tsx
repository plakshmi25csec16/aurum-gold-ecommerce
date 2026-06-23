import { useState } from "react";
import { MessageSquare, Layers, Sparkles, Upload, Send, CheckCircle2 } from "lucide-react";

export default function CustomJewelry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jewelryType: "ring",
    budget: "$1,000 - $3,000",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.description) {
      setSubmitted(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.62_0.13_70/0.1),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Bespoke Services
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Bespoke <span className="text-gold-gradient italic">Jewelry</span> Design
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Bring your unique vision to life. Collaborate directly with our master designers to craft a one-of-a-kind gold heirloom that tells your personal story.
          </p>
        </div>
      </section>

      {/* 3-Step Custom Design Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Journey</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            The Bespoke Creation Process
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            From the initial spark of inspiration to the finished masterpiece, we guide you through every step.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              step: "01",
              icon: MessageSquare,
              title: "Consultation & Sketching",
              desc: "Share your ideas, references, and preferences. Our lead designer will create initial hand-drawn sketches to capture the perfect silhouette, size, and details.",
            },
            {
              step: "02",
              icon: Layers,
              title: "3D CAD & Wax Modeling",
              desc: "We translate approved sketches into highly precise 3D CAD renders. Once refined, we print a physical wax model of your jewelry so you can verify its scale and feel.",
            },
            {
              step: "03",
              icon: Sparkles,
              title: "Craftsmanship & Setting",
              desc: "Our master goldsmiths cast the design in certified 24K gold, hand-finish the details, and set any selected diamonds or gemstones with heirloom-grade precision.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-gold/30"
            >
              <span className="font-display text-5xl font-extrabold text-gold/10 absolute top-6 right-6">
                {s.step}
              </span>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold mb-6">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="border-t border-border/60 bg-ink/40 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Start Your Design</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Bespoke Inquiry Form
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              Provide some details about your concept below. Our design consultant will review your request and get in touch within 24 hours.
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-gold-glow backdrop-blur-sm lg:p-12">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10 animate-fade-in">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold mb-6">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">Inquiry Received</h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  Thank you, <span className="text-gold font-medium">{formData.name}</span>. Your design request for a custom <span className="text-gold font-medium">{formData.jewelryType}</span> has been submitted to our lead designer. We will contact you at <span className="text-gold font-medium">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", jewelryType: "ring", budget: "$1,000 - $3,000", description: "" });
                    setFile(null);
                  }}
                  className="mt-8 rounded-full border border-border px-6 py-2.5 text-xs font-semibold hover:border-gold hover:text-gold transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Victoria Sterling"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-gold"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. victoria@email.com"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Jewelry Type</label>
                    <select
                      value={formData.jewelryType}
                      onChange={(e) => setFormData({ ...formData, jewelryType: e.target.value })}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-gold text-foreground appearance-none"
                    >
                      <option value="ring">Ring</option>
                      <option value="necklace">Necklace</option>
                      <option value="earrings">Earrings</option>
                      <option value="bracelet">Bracelet</option>
                      <option value="pendant">Pendant</option>
                      <option value="other">Other / Set</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estimated Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-gold text-foreground"
                    >
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+ (Investment Grade)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Describe Your Concept</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your design inspiration, preferred shape, dimensions, gemstone requirements, engraving text, or specific gold textures..."
                    className="rounded-xl border border-border bg-background px-4 py-3 text-xs outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upload Reference Images (Optional)</label>
                  <div className="relative border border-dashed border-border/80 rounded-xl bg-background/50 hover:bg-background transition-colors p-6 flex flex-col items-center justify-center text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="h-6 w-6 text-gold/60 mb-2" />
                    <span className="text-xs font-semibold text-foreground">
                      {file ? file.name : "Drag & drop file or click to browse"}
                    </span>
                    <span className="text-[10px] text-muted-foreground mt-1">
                      PDF, JPG, PNG up to 10MB
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-gold-gradient py-3.5 text-xs font-bold uppercase tracking-wider text-onyx shadow-gold-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  Send Bespoke Inquiry
                  <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Elegant CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Prefer a Private Consultation?
          </h2>
          <p className="max-w-md text-xs text-muted-foreground">
            Schedule a virtual video session or a face-to-face appointment at our private design studio to explore options with our head artisan.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="rounded-full bg-gold-gradient px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-onyx shadow-gold-glow hover:scale-105 transition-transform">
              Book Studio Appointment
            </button>
            <button className="rounded-full border border-border px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-colors">
              Call Designer Direct
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
