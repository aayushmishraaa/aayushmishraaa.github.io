import { useRef } from "react";
import Head from "next/head";
import data from "../data/portfolio.json";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";

const sectionItems = ["projects", "experience", "about", "contact"];

export default function Home() {
  const heroEyebrow = useRef();
  const heroTitle = useRef();
  const heroSubtitle = useRef();
  const heroActions = useRef();
  const projectCards = useRef([]);
  const experienceCards = useRef([]);
  const serviceCards = useRef([]);

  useIsomorphicLayoutEffect(() => {
    const heroTargets = [
      heroEyebrow.current,
      heroTitle.current,
      heroSubtitle.current,
      heroActions.current,
    ].filter(Boolean);

    if (heroTargets.length) {
      stagger(
        heroTargets,
        { y: 40, x: -8, transform: "scale(0.98)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }

    const projectTargets = projectCards.current.filter(Boolean);
    if (projectTargets.length) {
      stagger(projectTargets, { y: 28, x: -6 }, { y: 0, x: 0 });
    }

    const experienceTargets = experienceCards.current.filter(Boolean);
    if (experienceTargets.length) {
      stagger(experienceTargets, { y: 28, x: 6 }, { y: 0, x: 0 });
    }

    const serviceTargets = serviceCards.current.filter(Boolean);
    if (serviceTargets.length) {
      stagger(serviceTargets, { y: 24 }, { y: 0 });
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skillTicker = [
    ...data.resume.languages,
    ...data.resume.frameworks,
    ...data.resume.others,
  ];

  const tickerItems = [...skillTicker, ...skillTicker];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05060a] text-slate-100">
      <Head>
        <title>Aayush Mishra | AI Systems Engineer</title>
        <meta
          name="description"
          content="One-page portfolio of Aayush Mishra featuring Ryvos, MistEngine, AlgoAce, and production AI engineering experience."
        />
      </Head>

      <div className="mesh-grid" />
      <div className="hero-orb hero-orb-top" />
      <div className="hero-orb hero-orb-bottom" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 tablet:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="link rounded-full border border-white/20 px-4 py-1 text-sm font-semibold tracking-wide text-white/90 transition hover:border-fuchsia-400/70 hover:text-white"
          >
            {data.name}
          </button>
          <div className="hidden items-center gap-2 tablet:flex">
            {sectionItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="link rounded-full px-4 py-2 text-sm uppercase tracking-widest text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href={data.socials.find((social) => social.title === "Github")?.link}
            target="_blank"
            rel="noreferrer"
            className="link rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black transition hover:scale-[1.04]"
          >
            Github
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 tablet:px-8">
        <section
          id="home"
          className="relative flex min-h-[78vh] flex-col justify-center py-16"
        >
          <p
            ref={heroEyebrow}
            className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-200"
          >
            Inspired by Ryvos-style product storytelling
          </p>

          <h1
            ref={heroTitle}
            className="mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white tablet:text-6xl"
          >
            {data.headerTaglineOne}
            <br />
            <span className="gradient-text">{data.headerTaglineTwo}</span>
            <br />
            <span className="text-white/80">{data.headerTaglineThree}</span>
          </h1>

          <p
            ref={heroSubtitle}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {data.headerTaglineFour} I focus on secure-by-default architecture,
            practical AI deployments, and polished developer experiences.
          </p>

          <div
            ref={heroActions}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="link rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:scale-[1.03]"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="link rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white/90 transition hover:border-fuchsia-400/70 hover:text-white"
            >
              Contact
            </button>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="marquee-track">
            {tickerItems.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="mx-2 inline-flex shrink-0 rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="pt-24">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white tablet:text-4xl">
              Selected Projects
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              one page portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
            {data.projects.map((project, index) => (
              <article
                key={project.id}
                ref={(element) => {
                  projectCards.current[index] = element;
                }}
                className="link glass-card group rounded-3xl p-5"
              >
                <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={project.imageSrc}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-[#05060a]/40 to-transparent" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90 transition hover:border-fuchsia-400/70 hover:text-white"
                >
                  Open Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="pt-24">
          <h2 className="text-3xl font-semibold text-white tablet:text-4xl">
            Experience
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5">
            {data.resume.experiences.map((experience, index) => (
              <article
                key={experience.id}
                ref={(element) => {
                  experienceCards.current[index] = element;
                }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs uppercase tracking-widest text-fuchsia-200">
                    {experience.type}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {experience.dates}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {experience.position}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  {experience.bullets}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="pt-24">
          <h2 className="text-3xl font-semibold text-white tablet:text-4xl">
            About & Capabilities
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
            {data.aboutpara}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 tablet:grid-cols-2">
            {data.services.map((service, index) => (
              <article
                key={service.id}
                ref={(element) => {
                  serviceCards.current[index] = element;
                }}
                className="glass-card rounded-3xl p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-white/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 tablet:p-12">
            <h2 className="text-3xl font-semibold text-white tablet:text-4xl">
              Let&apos;s build something exceptional.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Available for AI systems engineering, product builds, and
              full-stack collaboration.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target={social.link.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="link rounded-full border border-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white/90 transition hover:border-fuchsia-400/70 hover:text-white"
                >
                  {social.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
