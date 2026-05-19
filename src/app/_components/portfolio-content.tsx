import {
  about,
  education,
  experience,
  hobbies,
  industryProjects,
  kaggleProfile,
  kaggleWork,
  personalProjects,
  site,
  skills,
  social,
} from "~/data/portfolio";

import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function PortfolioContent() {
  return (
    <div className="pb-24 lg:py-24">
      <section id="about" className="scroll-mt-24">
        <SectionHeading id="about-heading">About</SectionHeading>
        <div className="mt-6 space-y-4 text-slate-300">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10" aria-labelledby="hobbies-heading">
          <h3
            id="hobbies-heading"
            className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase"
          >
            Off the clock
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {hobbies.map((hobby) => (
              <li
                key={hobby.title}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-funky-coral/30 hover:bg-funky-coral/[0.03]"
              >
                <h4 className="font-medium text-funky-coral">{hobby.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {hobby.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="mt-24 scroll-mt-24">
        <SectionHeading id="experience-heading">Experience</SectionHeading>
        <ol className="mt-8">
          {experience.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="experience-card group relative -mx-4 rounded-lg px-4 py-6 sm:-mx-6 sm:px-6"
            >
              <div className="absolute top-6 left-0 hidden font-mono text-xs text-funky-magenta/60 sm:block">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <p className="font-mono text-xs font-medium tracking-wide text-slate-500 uppercase sm:pt-1">
                  {job.period}
                </p>
                <div>
                  <h3 className="font-medium text-slate-100">
                    <span className="transition-colors group-hover:text-funky-cyan">
                      {job.title}
                    </span>
                    <span className="text-slate-500"> · </span>
                    <span className="text-funky-lime">{job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400">
                    {job.description.map((item) => (
                      <li key={item.slice(0, 48)} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-funky-magenta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-funky-cyan/20 bg-funky-cyan/5 px-2.5 py-1 font-mono text-[11px] text-funky-cyan"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] p-6">
          <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
            Education
          </p>
          <p className="mt-2 font-mono text-xs text-funky-lime">{education.period}</p>
          <h3 className="mt-2 font-medium text-slate-100">{education.degree}</h3>
          <p className="text-funky-cyan">{education.school}</p>
          <p className="mt-1 text-sm text-slate-500">{education.location}</p>
          <p className="mt-3 text-sm text-slate-400">{education.note}</p>
        </div>
      </section>

      <section id="projects" className="mt-24 scroll-mt-24">
        <SectionHeading id="projects-heading">Projects</SectionHeading>

        <div className="mt-10">
          <h3
            id="personal-projects-heading"
            className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase"
          >
            Personal Projects
          </h3>
          <ul className="mt-6 space-y-4" aria-labelledby="personal-projects-heading">
            {personalProjects.map((project) => (
              <li key={project.title}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h3
            id="industry-projects-heading"
            className="font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase"
          >
            Industry Projects
          </h3>
          <ul className="mt-6 space-y-4" aria-labelledby="industry-projects-heading">
            {industryProjects.map((project) => (
              <li key={project.title}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="kaggle" className="mt-24 scroll-mt-24">
        <SectionHeading id="kaggle-heading">Kaggle</SectionHeading>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-300">
          {kaggleProfile.summary}{" "}
          <a
            href={kaggleProfile.href}
            target="_blank"
            rel="noreferrer"
            className="link-funky text-funky-magenta"
          >
            View profile →
          </a>
        </p>
        <ul className="mt-8 space-y-4" aria-labelledby="kaggle-heading">
          {kaggleWork.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mt-24 scroll-mt-24">
        <SectionHeading id="contact-heading">Contact</SectionHeading>
        <div className="mt-6 max-w-lg text-slate-300">
          <p className="leading-relaxed">
            Open to interesting engineering roles, freelance collaborations, and
            conversations about backend systems, SaaS, or developer tooling.
          </p>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="link-funky group text-funky-cyan">
              <span>{site.email}</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {site.phone} · {site.location}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 lg:hidden">
          {social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="link-funky text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-24 border-t border-white/5 pt-8">
        <SectionHeading id="skills-heading">Skills</SectionHeading>
        <ul className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="skill-pill rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-funky-lime/40 hover:text-funky-lime"
            >
              {skill}
            </li>
          ))}
        </ul>
        <footer className="mt-16 text-center text-xs text-slate-600">
          <p>
            Inspired by{" "}
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-funky-cyan"
            >
              brittanychiang.com
            </a>
            . Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </section>
    </div>
  );
}
