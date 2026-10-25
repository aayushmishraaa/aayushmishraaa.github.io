"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-[13px] text-foreground">
          aayush<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden text-[13px] text-text-secondary transition-colors hover:text-foreground sm:block">
              {l.label}
            </a>
          ))}
          <a href={profile.links.resume} target="_blank" className="text-[13px] text-text-secondary transition-colors hover:text-foreground">
            Résumé
          </a>
          <button
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            className="hidden items-center gap-1 rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-text-muted hover:text-foreground sm:flex"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-text-muted transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="h-4 w-4 dark:hidden" />
          </button>
        </div>
      </nav>
    </header>
  );
}
