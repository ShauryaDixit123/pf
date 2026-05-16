import { MobileNav } from "~/app/_components/mobile-nav";
import { PortfolioContent } from "~/app/_components/portfolio-content";
import { Sidebar } from "~/app/_components/sidebar";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="focus:bg-funky-cyan sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:px-4 focus:py-2 focus:text-slate-900"
      >
        Skip to content
      </a>

      <div
        className="noise-overlay pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />

      <div className="glow-orb glow-orb-1" aria-hidden />
      <div className="glow-orb glow-orb-2" aria-hidden />

      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 sm:px-8 lg:px-12">
        <MobileNav />

        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main className="lg:w-[58%]">
            <PortfolioContent />
          </main>
        </div>
      </div>
    </>
  );
}
