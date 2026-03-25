import data from "../../data/portfolio.json";

const navItems = ["projects", "experience", "about", "contact"];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t-2 border-border">
      <div className="mx-auto max-w-[1300px] px-6 py-12">
        <div className="grid grid-cols-2 gap-8 tablet:grid-cols-4">
          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-sm text-text-secondary underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em]">
              Projects
            </h4>
            <ul className="space-y-2">
              {data.projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-text-secondary underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em]">
              Social
            </h4>
            <ul className="space-y-2">
              {data.socials
                .filter((s) => s.title !== "Resume")
                .map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.link}
                      target={social.link.startsWith("mailto:") ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="text-sm text-text-secondary underline underline-offset-2 transition-colors hover:text-foreground"
                    >
                      {social.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em]">
              Contact
            </h4>
            <p className="text-sm text-text-secondary">
              {data.headerTaglineFour}
            </p>
            <a
              href={data.socials.find((s) => s.title === "Email")?.link}
              className="mt-2 inline-block text-sm text-accent underline underline-offset-2"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-border pt-6">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            {data.resume.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
