export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="section-heading scroll-mt-24 font-mono text-sm font-semibold tracking-widest text-slate-200 uppercase"
    >
      {children}
    </h2>
  );
}
