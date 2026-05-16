"use client";

import { useEffect, useState } from "react";

import { nav, site, social } from "~/data/portfolio";

export function Sidebar() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24 lg:pr-16">
      <div>
        <p className="font-mono text-xs tracking-[0.35em] text-funky-lime uppercase">
          Portfolio v1
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="gradient-text">{site.name}</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
          {site.title}
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
          {site.tagline}
        </p>

        <nav className="mt-10 hidden lg:block" aria-label="In-page">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center gap-4 py-2 text-xs font-semibold tracking-widest uppercase"
                  onClick={() => setActive(item.id)}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === item.id
                        ? "w-16 bg-funky-cyan"
                        : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-funky-magenta"
                    }`}
                  />
                  <span
                    className={
                      active === item.id
                        ? "text-funky-cyan"
                        : "text-slate-400 group-hover:text-funky-magenta"
                    }
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-0">
        <ul className="flex flex-wrap gap-4 text-sm font-medium">
          {social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="link-funky group"
              >
                <span>{link.label}</span>
                <ArrowIcon />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="link-funky group mt-6 inline-flex text-sm font-medium"
        >
          <span>View Full Résumé</span>
          <ArrowIcon />
        </a>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="inline h-4 w-4 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v6.19a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h6.19l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
