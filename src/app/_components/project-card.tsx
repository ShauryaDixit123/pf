import type { Project } from "~/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.githubUrl ?? project.deployedUrl ?? project.kaggleUrl;

  return (
    <article className="project-card group relative -mx-4 rounded-xl px-4 py-5 sm:-mx-6 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-[1fr_7rem] sm:gap-8">
        <div>
          <h3 className="font-medium text-slate-100 transition-colors group-hover:text-funky-magenta">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
          {hasLinks ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.githubUrl ? (
                <ProjectLink href={project.githubUrl} label="GitHub" variant="github" />
              ) : null}
              {project.deployedUrl ? (
                <ProjectLink href={project.deployedUrl} label="Live Site" variant="deployed" />
              ) : null}
              {project.kaggleUrl ? (
                <ProjectLink href={project.kaggleUrl} label="Kaggle" variant="kaggle" />
              ) : null}
            </div>
          ) : null}
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className="font-mono text-[11px] text-slate-500">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="hidden aspect-square rounded-lg border border-dashed border-funky-magenta/30 bg-gradient-to-br from-funky-magenta/10 via-funky-cyan/5 to-funky-lime/10 sm:block"
          aria-hidden
        />
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "github" | "deployed" | "kaggle";
}) {
  const styles =
    variant === "github"
      ? "border-funky-cyan/30 bg-funky-cyan/5 text-funky-cyan hover:border-funky-cyan/60 hover:bg-funky-cyan/10"
      : variant === "kaggle"
        ? "border-funky-magenta/30 bg-funky-magenta/5 text-funky-magenta hover:border-funky-magenta/60 hover:bg-funky-magenta/10"
        : "border-funky-lime/30 bg-funky-lime/5 text-funky-lime hover:border-funky-lime/60 hover:bg-funky-lime/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium transition-colors ${styles}`}
    >
      <span>{label}</span>
      <ExternalIcon />
    </a>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-3 w-3"
      aria-hidden
    >
      <path d="M3.75 3.75a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 1 1.5 0v4.5A2.25 2.25 0 0 1 11.25 13h-7.5A2.25 2.25 0 0 1 1.75 10.75v-7.5A2.25 2.25 0 0 1 4 1.25h4.5a.75.75 0 0 1 0 1.5H4Z" />
      <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.69 4.69a.75.75 0 1 1-1.06 1.06L7.5 5.56 4.28 8.78a.75.75 0 0 1-1.06-1.06l3.22-3.22Z" />
      <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z" />
      <path d="M8.75 2.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5Z" />
    </svg>
  );
}
