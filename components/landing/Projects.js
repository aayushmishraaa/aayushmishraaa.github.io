import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import data from "../../data/portfolio.json";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface px-6 py-20 tablet:py-28">
      <motion.div
        className="mx-auto max-w-[1300px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <SectionHeading eyebrow="Projects" title="Selected Projects" />

        <motion.div
          className="grid grid-cols-1 gap-5 tablet:grid-cols-2"
          variants={staggerContainer}
        >
          {data.projects.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              custom={i}
              className="brutal-shift border-2 border-border bg-card p-5 shadow-brutal-sm"
            >
              <div className="relative h-48 overflow-hidden border-2 border-border">
                <img
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  className={`h-full w-full transition duration-500 hover:scale-105 ${
                    project.title === "Ryvos"
                      ? "bg-[#08090A] object-contain p-8"
                      : "object-cover"
                  }`}
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
              >
                View Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
