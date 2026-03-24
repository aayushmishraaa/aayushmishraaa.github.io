import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/animations";
import SectionHeading from "../shared/SectionHeading";
import data from "../../data/portfolio.json";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 tablet:py-28">
      <motion.div
        className="mx-auto max-w-[1300px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
        />

        <motion.div
          className="grid grid-cols-1 gap-5"
          variants={staggerContainer}
        >
          {data.resume.experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              variants={fadeUp}
              custom={i}
              className="brutal-shift border-2 border-border bg-card p-6 shadow-brutal-sm"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="border-2 border-accent bg-[rgba(240,112,48,0.1)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {exp.type}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted">
                  {exp.dates}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {exp.position}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {exp.bullets}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
