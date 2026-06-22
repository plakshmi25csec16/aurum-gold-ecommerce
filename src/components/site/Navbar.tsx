import { useState } from "react";
import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react";

const links = ["Home", "Shop", "Collections", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient font-display text-lg font-bold text-onyx">A</span>
          <span className="font-display text-xl font-semibold tracking-wide text-gold-gradient">AURUM</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-gold"><Search className="h-4 w-4" /></button>
          <button className="hidden h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-gold sm:grid"><Heart className="h-4 w-4" /></button>
          <button className="hidden h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-gold sm:grid"><User className="h-4 w-4" /></button>
          <button className="relative grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-gold">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-gold-gradient text-[10px] font-bold text-onyx">3</span>
          </button>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground hover:text-gold lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a key={l} href="#" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-gold">{l}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
