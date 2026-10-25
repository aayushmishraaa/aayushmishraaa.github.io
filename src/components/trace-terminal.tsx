"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero signature: replays traces shaped like the systems I've shipped.
 * Cycles ZenContext → ZenVoice → Ryvos; tabs let a visitor jump between them.
 */

interface Line {
  tag: string;
  text: string;
  ms?: string;
  tone?: "tool" | "eval" | "ok" | "dim";
}

const traces: { id: string; label: string; cmd: string; lines: Line[] }[] = [
  {
    id: "context",
    label: "zencontext",
    cmd: 'agent ask "Which vendors were overbilled on PO-4471?"',
    lines: [
      { tag: "plan", text: "planner → locate → fetch → reconcile → answer", tone: "dim" },
      { tag: "mcp", text: "locate(entity=PO-4471)  3 sections · 9.9M rows indexed", ms: "0.04 ms", tone: "tool" },
      { tag: "mcp", text: "fetch(ekpo, ekbe)  section-scoped SQL pushdown", ms: "11 ms", tone: "tool" },
      { tag: "ctx", text: "context 93,112 → 3,094 tokens  (30× smaller)", tone: "dim" },
      { tag: "eval", text: "faithfulness 0.96 ≥ 0.90 gate → pass", tone: "eval" },
      { tag: "done", text: "2 vendors overbilled · ₹4.2L · cited rows attached", tone: "ok" },
    ],
  },
  {
    id: "voice",
    label: "zenvoice",
    cmd: "call +91 •••• 4040  agent=collections lang=hi",
    lines: [
      { tag: "vad", text: "speech end detected", ms: "80 ms", tone: "dim" },
      { tag: "stt", text: '"kal tak payment kar dunga"  (streaming)', ms: "120 ms", tone: "tool" },
      { tag: "llm", text: "intent=promise_to_pay · tool record_ptp(date=+1d)", ms: "140 ms", tone: "tool" },
      { tag: "tts", text: "first audio byte to caller", ms: "90 ms", tone: "tool" },
      { tag: "turn", text: "end-to-end response  ≈ 380 ms", tone: "eval" },
      { tag: "done", text: "PTP logged · SMS link sent · barge-in ready", tone: "ok" },
    ],
  },
  {
    id: "ryvos",
    label: "ryvos",
    cmd: 'ryvos run "post the weekly eng report to #eng"',
    lines: [
      { tag: "plan", text: "director: 2 parallel branches → merge → judge", tone: "dim" },
      { tag: "tool", text: "github.pulls merged:7d  ·  linear.issues done:7d", ms: "260 ms", tone: "tool" },
      { tag: "judge", text: "missing release notes → RETRY", tone: "eval" },
      { tag: "tool", text: "github.releases latest", ms: "95 ms", tone: "tool" },
      { tag: "judge", text: "all criteria met → ACCEPT  0.92", tone: "eval" },
      { tag: "done", text: "posted to Slack · checkpoint #212 · 15 MB idle", tone: "ok" },
    ],
  },
];

const toneClass: Record<NonNullable<Line["tone"]>, string> = {
  tool: "text-[#D6D6DA]",
  eval: "text-[#C792EA]",
  ok: "text-accent",
  dim: "text-terminal-output",
};

export function TraceTerminal() {
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  const [shown, setShown] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const trace = traces[t];

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (reduce) {
      setShown(trace.lines.length);
      return;
    }
    setShown(0);
    trace.lines.forEach((_, i) => {
      timers.current.push(setTimeout(() => setShown(i + 1), 500 + i * 650));
    });
    // auto-advance to the next trace
    timers.current.push(setTimeout(() => setT((x) => (x + 1) % traces.length), 500 + trace.lines.length * 650 + 3200));
    return () => timers.current.forEach(clearTimeout);
  }, [t, reduce, trace.lines.length]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
      <div className="relative overflow-hidden rounded-xl border border-terminal-border bg-terminal-bg/90 backdrop-blur">
        <div className="flex gap-1 px-3 pt-3" role="tablist">
          {traces.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={i === t}
              onClick={() => setT(i)}
              className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${i === t ? "bg-white/[0.07] text-[#EDEDED]" : "text-terminal-output hover:text-[#EDEDED]"}`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <div className="h-[290px] px-4 pb-4 pt-3 font-mono text-[12.5px] leading-[1.75]">
          <p className="text-[#EDEDED]">
            <span className="text-terminal-prompt">❯ </span>
            {trace.cmd}
          </p>
          {trace.lines.slice(0, shown).map((l, i) => (
            <motion.div
              key={`${trace.id}-${i}`}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex gap-3"
            >
              <span className="w-10 shrink-0 text-terminal-output">{l.tag}</span>
              <span className={`flex-1 ${toneClass[l.tone ?? "tool"]}`}>{l.text}</span>
              {l.ms && <span className="shrink-0 tabular-nums text-amber">{l.ms}</span>}
            </motion.div>
          ))}
          {shown < trace.lines.length && <span className="mt-1 inline-block h-4 w-2 animate-pulse bg-terminal-prompt align-middle" />}
        </div>
      </div>
      <p className="relative mt-3 font-mono text-[11px] text-text-muted">
        traces modelled on systems I&apos;ve shipped · values illustrative
      </p>
    </div>
  );
}
