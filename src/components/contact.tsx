"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-16 pt-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_100%,var(--glow),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="label-mono">{"// 03 — contact"}</p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[1] tracking-[-0.05em]">
          Building something with agents?
          <span className="text-text-muted"> Let&apos;s talk.</span>
        </h2>
        <button
          onClick={() => {
            navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
          className="group mt-10 font-mono text-[clamp(1rem,2.4vw,1.4rem)] text-foreground"
        >
          {profile.email}
          <span className="ml-3 text-[13px] text-text-muted group-hover:text-accent">{copied ? "copied ✓" : "click to copy"}</span>
        </button>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border-soft pt-6 font-mono text-[12px] text-text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="flex gap-6">
            <a href={profile.links.github} className="hover:text-foreground">GitHub</a>
            <a href={profile.links.linkedin} className="hover:text-foreground">LinkedIn</a>
            <a href={profile.links.ryvos} className="hover:text-foreground">Ryvos</a>
            <a href={profile.links.resume} className="hover:text-foreground">Résumé</a>
          </span>
        </footer>
      </div>
    </section>
  );
}
