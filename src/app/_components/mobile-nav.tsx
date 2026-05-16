"use client";

import { nav } from "~/data/portfolio";

export function MobileNav() {
  return (
    <nav
      className="sticky top-0 z-20 -mx-6 mb-8 flex gap-1 overflow-x-auto border-b border-white/5 bg-[#0a0a12]/80 px-6 py-3 backdrop-blur-md lg:hidden"
      aria-label="Mobile"
    >
      {nav.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-wider text-slate-400 uppercase transition-colors hover:border-funky-cyan/50 hover:text-funky-cyan"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
