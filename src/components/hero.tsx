"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { TraceTerminal } from "./trace-terminal";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.08 } }),
};

export function Hero() {
  // cursor-following spotlight via CSS vars
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <section id="top" onMouseMove={onMove} className="relative overflow-hidden px-6 pb-20 pt-20 sm:pt-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute inset-0" />

      <motion.div initial="hidden" animate="visible" className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <motion.p custom={0} variants={fadeUp} className="label-mono">
            <span className="text-accent">●</span> {profile.role} · Zenalyst.ai · {profile.location}
          </motion.p>
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="mt-6 text-[clamp(2.8rem,6.5vw,5rem)] font-semibold leading-[1] tracking-[-0.05em]"
          >
            Aayush Mishra
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="mt-5 text-[clamp(1.2rem,2.2vw,1.55rem)] leading-snug tracking-[-0.02em] text-text-secondary">
            I build AI systems that hold up in production —{" "}
            <span className="text-foreground">{profile.focus.join(", ")}</span>.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} className="mt-5 max-w-md leading-relaxed text-text-muted">
            {profile.summary}
          </motion.p>

          <motion.div custom={4} variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={profile.links.resume}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[14px] font-medium text-background transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Résumé
            </a>
            {[
              ["GitHub", profile.links.github],
              ["LinkedIn", profile.links.linkedin],
              ["Email", `mailto:${profile.email}`],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-[14px] font-medium text-text-secondary hover:text-foreground">
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            ))}
          </motion.div>
          <motion.p custom={5} variants={fadeUp} className="mt-8 font-mono text-[11px] text-text-muted">
            press <kbd className="rounded border border-border px-1">⌘K</kbd> to jump anywhere
          </motion.p>
        </div>

        <motion.div custom={2} variants={fadeUp}>
          <TraceTerminal />
        </motion.div>
      </motion.div>
    </section>
  );
}
