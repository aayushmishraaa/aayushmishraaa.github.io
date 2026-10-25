"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/profile";

// Big hoverable index of projects; the active one expands in place.
export function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="label-mono">{"// 02 — selected work"}</p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
          Things I&apos;ve built.
          <span className="text-text-muted"> With numbers.</span>
        </h2>

        <ul className="mt-14">
          {work.map((w, i) => {
            const open = i === active;
            const Tag = w.href ? "a" : "div";
            return (
              <li key={w.slug} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className="border-t border-border-soft last:border-b">
                <Tag
                  {...(w.href ? { href: w.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  tabIndex={0}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-7 outline-none"
                >
                  <span className={`font-mono text-[12px] ${open ? "text-accent" : "text-text-muted"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className={`block text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-none tracking-[-0.04em] transition-colors ${open ? "text-foreground" : "text-text-muted"}`}>
                      {w.name}
                      {w.href && <ArrowUpRight className="ml-2 inline h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />}
                    </span>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.span
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="block overflow-hidden"
                        >
                          <span className="block max-w-2xl pt-4 leading-relaxed text-text-secondary">{w.body}</span>
                          <span className="block pt-3 font-mono text-[12px] text-text-muted">{w.stack.join("  /  ")}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  <span className="hidden text-right sm:block">
                    <span className="block font-mono text-[12px] text-text-muted">{w.kicker}</span>
                    <span className={`mt-1 block font-mono text-[13px] ${open ? "text-accent" : "text-text-secondary"}`}>{w.metric}</span>
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
