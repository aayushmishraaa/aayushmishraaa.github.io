import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { GraduationCap } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import data from "../../data/portfolio.json";

export default function About() {
  const { education } = data.resume;

  return (
    <section id="about" className="bg-surface px-6 py-20 tablet:py-28">
      <motion.div
        className="mx-auto max-w-[1300px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <SectionHeading
          eyebrow="About"
          title="About & Capabilities"
        />

        <motion.p
          variants={fadeUp}
          className="max-w-4xl text-lg leading-relaxed text-text-secondary"
        >
          {data.aboutpara}
        </motion.p>

        {/* Services */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 tablet:grid-cols-2"
          variants={staggerContainer}
        >
          {data.services.map((service, i) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              custom={i}
              className="brutal-shift border-2 border-border bg-card p-8 shadow-brutal-sm"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeUp}
          className="mt-8 border-2 border-border bg-card p-6 shadow-brutal-sm"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold">
              {education.universityName}
            </h3>
          </div>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-text-muted">
            {education.universityDate}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {education.universityPara}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
