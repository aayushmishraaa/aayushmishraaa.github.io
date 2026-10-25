"use client";

import { motion } from "framer-motion";
import { education, experience, skills } from "@/data/profile";

// Sticky heading on the left, open timeline on the right (no cards).
export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label-mono">{"// 01 — experience"}</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
            Where I&apos;ve
            <br />
            <span className="text-text-muted">shipped.</span>
          </h2>

          <div className="mt-12 hidden space-y-6 lg:block">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="label-mono">{group}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {experience.map((r) => (
            <motion.article
              key={r.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[1.6rem] font-semibold tracking-[-0.03em]">
                  {r.title} <span className="text-text-muted">· {r.company}</span>
                </h3>
                <p className="font-mono text-[12px] text-text-muted">
                  {r.current && <span className="mr-2 text-accent">● now</span>}
                  {r.period}
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                {r.points.map((p) => (
                  <li key={p} className="relative pl-5 leading-relaxed text-text-secondary">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[12px] text-text-muted">{r.stack.join("  /  ")}</p>
            </motion.article>
          ))}

          <div>
            <p className="label-mono">education</p>
            {education.map((e) => (
              <div key={e.school} className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-foreground">
                  {e.degree} <span className="text-text-muted">· {e.school}</span>
                </p>
                <p className="font-mono text-[12px] text-text-muted">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
