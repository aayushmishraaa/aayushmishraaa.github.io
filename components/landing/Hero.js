import { motion } from "framer-motion";
import { fadeUp, staggerContainer, ease } from "../../lib/animations";
import { ArrowRight } from "lucide-react";
import data from "../../data/portfolio.json";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="px-6 pb-20 pt-16 tablet:pt-24">
      <motion.div
        className="mx-auto max-w-[1300px]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-accent"
        >
          {data.headerTaglineOne}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em]"
        >
          {data.headerTaglineTwo}
          <br />
          <span className="text-text-secondary">
            {data.headerTaglineThree}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
        >
          I focus on secure-by-default architecture, practical AI deployments,
          and polished developer experiences.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="brutal-shift flex items-center gap-2 border-2 border-border bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] text-white shadow-brutal-sm"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href={data.socials.find((s) => s.title === "Resume")?.link}
            target="_blank"
            rel="noreferrer"
            className="brutal-shift border-2 border-border px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] shadow-brutal-sm"
          >
            Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="brutal-shift border-2 border-border px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] shadow-brutal-sm"
          >
            Contact
          </button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-sm text-text-muted"
        >
          {data.headerTaglineFour} Available for AI systems engineering &amp;
          full-stack collaboration.
        </motion.p>
      </motion.div>
    </section>
  );
}
