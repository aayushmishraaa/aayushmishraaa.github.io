"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

interface Action {
  label: string;
  hint: string;
  run: () => void;
}

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// ⌘K / Ctrl+K palette: jump to sections, open links, copy email, flip theme.
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");
  const { resolvedTheme, setTheme } = useTheme();
  const input = useRef<HTMLInputElement>(null);

  const actions = useMemo<Action[]>(
    () => [
      { label: "Experience", hint: "section", run: () => go("experience") },
      { label: "Selected work", hint: "section", run: () => go("work") },
      { label: "Contact", hint: "section", run: () => go("contact") },
      { label: "Open résumé (PDF)", hint: "link", run: () => window.open(profile.links.resume, "_blank") },
      { label: "Copy email", hint: profile.email, run: () => { navigator.clipboard.writeText(profile.email); setToast("Email copied"); } },
      { label: "GitHub", hint: "link", run: () => window.open(profile.links.github, "_blank") },
      { label: "LinkedIn", hint: "link", run: () => window.open(profile.links.linkedin, "_blank") },
      { label: "Ryvos", hint: "ryvos.dev", run: () => window.open(profile.links.ryvos, "_blank") },
      { label: "Toggle theme", hint: "dark / paper", run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark") },
    ],
    [resolvedTheme, setTheme],
  );

  const results = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setTimeout(() => input.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1600);
    return () => clearTimeout(t);
  }, [toast]);

  const choose = (a?: Action) => {
    if (!a) return;
    setOpen(false);
    a.run();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-[18vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-label="Command palette"
              initial={{ y: 8, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface-raised shadow-2xl"
            >
              <input
                ref={input}
                value={query}
                onChange={(e) => { setQuery(e.target.value); setIndex(0); }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setIndex((i) => Math.min(i + 1, results.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
                  if (e.key === "Enter") choose(results[index]);
                }}
                placeholder="Type a command…"
                className="w-full border-b border-border bg-transparent px-5 py-4 font-mono text-[14px] text-foreground outline-none placeholder:text-text-muted"
              />
              <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
                {results.map((a, i) => (
                  <li key={a.label} role="option" aria-selected={i === index}>
                    <button
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => choose(a)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[14px] ${i === index ? "bg-foreground/[0.06] text-foreground" : "text-text-secondary"}`}
                    >
                      <span>{a.label}</span>
                      <span className="font-mono text-[11px] text-text-muted">{a.hint}</span>
                    </button>
                  </li>
                ))}
                {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-text-muted">No matches</li>}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 rounded-full bg-foreground px-4 py-2 font-mono text-[12px] text-background"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
