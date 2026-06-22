/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        border: "hsl(var(--border))",
        gold: { DEFAULT: "hsl(var(--gold))", soft: "hsl(var(--gold-soft))", deep: "hsl(var(--gold-deep))" },
        onyx: "hsl(var(--onyx))",
        ink: "hsl(var(--ink))",
      },
      fontFamily: { display: ["Playfair Display", "serif"], sans: ["Inter", "sans-serif"] },
      boxShadow: { "gold-glow": "0 10px 40px -10px hsl(var(--gold-deep) / 0.4)" },
      backgroundImage: { "gold-gradient": "linear-gradient(135deg, hsl(var(--gold-soft)), hsl(var(--gold-deep)), hsl(var(--gold-soft)))" },
    },
  },
  plugins: [],
};
