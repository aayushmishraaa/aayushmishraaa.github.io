import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 text-[13px] font-bold uppercase tracking-[0.1em] text-accent"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-[clamp(2rem,4vw,3rem)] font-normal tracking-[-0.02em]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-3 max-w-2xl text-text-secondary"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
