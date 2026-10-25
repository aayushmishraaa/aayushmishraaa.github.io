// Single source of truth for the site. Keep in sync with resume.pdf.

export const profile = {
  name: "Aayush Mishra",
  role: "AI Engineer",
  focus: ["agents", "LLM infra", "voice AI", "edge CV", "Rust"],
  location: "Bengaluru, India",
  email: "aayushmishra169@gmail.com",
  links: {
    github: "https://github.com/aayushmishraaa",
    linkedin: "https://linkedin.com/in/aayushmishraa17",
    ryvos: "https://ryvos.dev",
    resume: "/resume.pdf",
  },
  summary:
    "Multi-agent runtimes, retrieval layers, real-time voice agents and edge vision — shipped end to end and measured in latency, tokens, recall and RAM.",
};

export const impact = [
  { value: "30×", label: "smaller agent context", note: "93K → 3.1K tokens" },
  { value: "300–400 ms", label: "voice agent response", note: "streaming STT → LLM → TTS" },
  { value: "24", label: "production agents", note: "zero new runtime code" },
  { value: "50+", label: "buses running my CV", note: "NPU edge inference" },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    company: "Zenalyst.ai",
    title: "AI Engineer",
    period: "Jun 2026 — Present",
    location: "Bengaluru",
    current: true,
    points: [
      "Cut agent context 30× (≈93K → 3.1K tokens) with 100% recall on a 28-question benchmark over 9.9M rows by building ZenContext — a retrieval layer with a compact Data Map, hybrid BM25 + vector search and sub-ms lookups, served to agents over MCP.",
      "Shipped 24 production agents with zero new runtime code via a manifest-driven multi-agent framework (LLM planner + ReAct runtime, parallel sub-agent fan-out) where routing, prompts, model tier and 31 tools live in one YAML file.",
      "Brought in-call voice latency to 300–400 ms for 8 outbound voice agents by building a streaming VAD → STT → LLM → TTS pipeline on LiveKit with barge-in and mid-call tool calls, in English and Hindi.",
      "Blocked hallucinated financial figures with an LLM-as-a-judge eval harness (RAGAS-style faithfulness gated at 0.90 in CI) and enforced RLS-scoped read-only agent tokens, SQL guardrails and PII masking.",
      "Delivered a Legal AI workbench — contract review, bilingual title due diligence, multimodal deed reconciliation — with server-validated citations on every LLM output.",
    ],
    stack: ["Python", "FastAPI", "LiveKit", "MCP", "Postgres", "Spring Boot", "Docker"],
  },
  {
    company: "Aeoru",
    title: "Software Engineer — AI",
    period: "Jan 2026 — May 2026",
    location: "Delhi",
    points: [
      "Raised ANPR accuracy 20% on real-world telemetry by retraining plate recognition on domain data and adding VLM verification for low-visibility frames.",
      "Deployed in-bus camera analytics on 50+ buses (headcount, drowsiness, cabin events) with real-time NPU inference on Radxa / NanoPi edge devices.",
      "Improved multi-camera alert quality by fine-tuning LLM/VLM components for event interpretation.",
    ],
    stack: ["PyTorch", "OpenCV", "ONNX", "TFLite", "VLMs", "Edge NPU"],
  },
];

export interface Work {
  slug: string;
  name: string;
  kicker: string;
  metric: string;
  body: string;
  stack: string[];
  href?: string;
}

export const work: Work[] = [
  {
    slug: "ryvos",
    name: "Ryvos",
    kicker: "open source · founder",
    metric: "86+ tools · 18 providers · <6 ms start",
    body: "An always-on autonomous agent runtime in Rust: goal-driven runs with a Judge, Director DAG orchestration, tiered memory, constitutional safety and checkpoint/resume — one binary.",
    stack: ["Rust", "Tokio", "Axum", "SQLite", "MCP"],
    href: "https://ryvos.dev",
  },
  {
    slug: "rinn",
    name: "Rinn",
    kicker: "game · Ryvos Interactive",
    metric: "free demo out · solo-built",
    body: "A narrative adventure in Unity set in a Kumaoni village across 2,000 years: shift eras with one key, solve puzzles whose cause is in one age and answer in the other. Art, animation, music and code by me.",
    stack: ["Unity 6", "C#", "URP", "Blender"],
    href: "https://interactive.ryvos.dev",
  },
  {
    slug: "zencontext",
    name: "ZenContext",
    kicker: "context layer · Zenalyst",
    metric: "30× fewer tokens · 28/28 recall",
    body: "Tells agents where data lives and what it means, then fetches only the exact rows. Data Map at ~1% of source size, incremental re-indexing, MCP over HTTP.",
    stack: ["Python", "Postgres", "BM25 + vectors", "MCP"],
  },
  {
    slug: "zenvoice",
    name: "ZenVoice",
    kicker: "real-time voice · Zenalyst",
    metric: "300–400 ms turn latency",
    body: "Outbound voice agents that hold Hindi/English phone calls, handle barge-in and call tools mid-conversation. Operators design flows on a visual canvas.",
    stack: ["LiveKit", "Sarvam", "Deepgram", "Groq", "SIP"],
  },
  {
    slug: "edge-cv",
    name: "Edge CV fleet",
    kicker: "computer vision · Aeoru",
    metric: "50+ buses · +20% ANPR",
    body: "Headcount, drowsiness and cabin-event detection running on NPUs inside moving buses, with VLM verification for the hard frames.",
    stack: ["PyTorch", "ONNX", "TFLite", "RKNN"],
  },
  {
    slug: "mistengine",
    name: "MistEngine",
    kicker: "engine · Ryvos Interactive",
    metric: "60+ FPS · 100k+ polygons",
    body: "A modular C++17 / OpenGL 4.6 engine: ECS core, PBR renderer with clustered lighting and SSR, Bullet physics, ImGui editor, Lua scripting and hot-loadable plugins.",
    stack: ["C++", "OpenGL", "GLSL"],
    href: "https://github.com/aayushmishraaa/MistEngine",
  },
];

export const education = [
  { school: "University of Birmingham", degree: "MSc Advanced Computer Science", period: "2024 — 2025" },
  { school: "UIET, Maharishi Dayanand University", degree: "BTech Computer Science", period: "2020 — 2024" },
];

export const skills = {
  "AI / ML": ["PyTorch", "CUDA", "LLM agents", "RAG", "LLM evals", "MCP", "Fine-tuning", "VLMs", "Speech (STT/TTS)", "Quantization", "Edge inference"],
  Languages: ["Python", "Rust", "C++", "Go", "Java", "TypeScript", "SQL"],
  Infra: ["FastAPI", "Postgres", "Redis", "Docker", "AWS", "GCP", "LiveKit"],
};
