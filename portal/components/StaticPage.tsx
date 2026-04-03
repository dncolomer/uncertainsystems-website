import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function StaticPage({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-72px)] py-24 bg-gradient-to-b from-deep-indigo to-sea-indigo">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-marble-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <article className="glass p-8 md:p-12">
          <header className="text-center mb-12 pb-8 border-b border-gold/20">
            <h1 className="text-3xl md:text-4xl text-metallic mb-3">{title}</h1>
            <p className="text-sm text-slate-gray">Last updated: {date}</p>
          </header>
          <div className="space-y-8">{children}</div>
        </article>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-[family-name:var(--font-display)] text-xl text-gold mb-4 pb-2 border-b border-gold/10">
        {title}
      </h2>
      <div className="space-y-4 text-marble-white/80 leading-relaxed text-[0.9375rem]">
        {children}
      </div>
    </section>
  );
}

export function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gold/5 border border-gold/20 rounded-lg p-6 text-marble-white/80 text-sm space-y-1">
      {children}
    </div>
  );
}
