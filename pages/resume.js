import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import data from "../data/portfolio.json";

export default function Resume() {
  const router = useRouter();

  if (!data.showResume) {
    if (typeof window !== "undefined") router.push("/");
    return null;
  }

  const { education, experiences, languages, frameworks, others, tagline, description } =
    data.resume;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Resume | {data.name}</title>
        <meta name="description" content={tagline} />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-[1300px] px-6 py-16 tablet:py-24">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
            Resume
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-normal tracking-[-0.02em]">
            {data.name}
          </h1>
          <p className="mt-2 text-lg text-text-secondary">{tagline}</p>
          <p className="mt-4 max-w-3xl text-text-secondary">{description}</p>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
            Experience
          </h2>
          <div className="grid grid-cols-1 gap-5">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="border-2 border-border bg-card p-6 shadow-brutal-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border-2 border-accent bg-[rgba(240,112,48,0.1)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                    {exp.type}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted">
                    {exp.dates}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{exp.position}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {exp.bullets}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
            Education
          </h2>
          <article className="border-2 border-border bg-card p-6 shadow-brutal-sm">
            <h3 className="text-lg font-semibold">{education.universityName}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-text-muted">
              {education.universityDate}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {education.universityPara}
            </p>
          </article>
        </section>

        {/* Skills */}
        <section>
          <h2 className="mb-6 text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-5 tablet:grid-cols-3">
            <div className="border-2 border-border bg-card p-6 shadow-brutal-sm">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="border-2 border-border px-3 py-1 font-mono text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-2 border-border bg-card p-6 shadow-brutal-sm">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((fw) => (
                  <span
                    key={fw}
                    className="border-2 border-border px-3 py-1 font-mono text-xs"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-2 border-border bg-card p-6 shadow-brutal-sm">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Tools & Infra
              </h3>
              <div className="flex flex-wrap gap-2">
                {others.map((tool) => (
                  <span
                    key={tool}
                    className="border-2 border-border px-3 py-1 font-mono text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
