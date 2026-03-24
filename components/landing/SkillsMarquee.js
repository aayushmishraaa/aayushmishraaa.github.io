import data from "../../data/portfolio.json";

export default function SkillsMarquee() {
  const skills = [
    ...data.resume.languages,
    ...data.resume.frameworks,
    ...data.resume.others,
  ];

  const doubled = [...skills, ...skills];

  return (
    <section className="group relative overflow-hidden border-y-2 border-border">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee-scroll flex w-max items-center gap-4 px-4 py-4 group-hover:[animation-play-state:paused]">
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex shrink-0 border-2 border-border bg-card px-4 py-2 font-mono text-sm shadow-brutal-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
