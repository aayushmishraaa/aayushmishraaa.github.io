import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import data from "../../data/portfolio.json";

const navItems = ["projects", "experience", "about", "contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const githubUrl = data.socials.find((s) => s.title === "Github")?.link;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-lg font-semibold tracking-tight"
        >
          {data.name}
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 tablet:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-2 text-[13px] font-bold uppercase tracking-[0.05em] text-text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 tablet:flex">
          <ThemeToggle />
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="brutal-shift flex items-center gap-2 border-2 border-border bg-accent px-4 py-2 text-[13px] font-bold uppercase tracking-[0.05em] text-white shadow-brutal-sm"
            >
              <Github className="h-4 w-4" />
              Github
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 tablet:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-7 w-7 items-center justify-center border-2 border-border"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t-2 border-border bg-background px-6 pb-4 tablet:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full py-3 text-left text-[13px] font-bold uppercase tracking-[0.05em] text-text-muted transition-colors hover:text-foreground"
            >
              {item}
            </button>
          ))}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="brutal-shift mt-2 inline-flex items-center gap-2 border-2 border-border bg-accent px-4 py-2 text-[13px] font-bold uppercase tracking-[0.05em] text-white shadow-brutal-sm"
            >
              <Github className="h-4 w-4" />
              Github
            </a>
          )}
        </div>
      )}
    </header>
  );
}
