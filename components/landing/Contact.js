import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/animations";
import data from "../../data/portfolio.json";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 tablet:py-28">
      <motion.div
        className="mx-auto max-w-[1300px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          variants={fadeUp}
          className="border-2 border-border bg-surface p-8 shadow-brutal tablet:p-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2rem,4vw,3rem)] font-normal tracking-[-0.02em]"
          >
            Let&apos;s build something exceptional.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-text-secondary"
          >
            Available for AI systems engineering, product builds, and
            full-stack collaboration.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-8 flex flex-wrap gap-3"
          >
            {data.socials.map((social, i) => (
              <motion.a
                key={social.id}
                variants={fadeUp}
                custom={i}
                href={social.link}
                target={social.link.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer"
                className="brutal-shift border-2 border-border px-5 py-2.5 text-sm font-bold uppercase tracking-wider shadow-brutal-sm transition-colors hover:bg-accent hover:text-white"
              >
                {social.title}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
