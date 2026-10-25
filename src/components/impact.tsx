"use client";

import { motion } from "framer-motion";
import { impact } from "@/data/profile";

export function Impact() {
  return (
    <section className="px-6 py-16">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {impact.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <dd className="font-mono text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-none tracking-[-0.04em] text-foreground tabular-nums">
              {m.value}
            </dd>
            <dt className="mt-3 text-[15px] text-text-secondary">{m.label}</dt>
            <dd className="mt-1 font-mono text-[11px] text-text-muted">{m.note}</dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
