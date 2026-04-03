import { ExternalLink, GitFork, MessageCircle, Sparkles, Brain, BarChart3, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ToolLink {
  label: string;
  href: string;
  icon: LucideIcon;
  primary?: boolean;
}

interface Tool {
  abbr: string;
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  borderGlow: string;
  links: ToolLink[];
  comingSoon?: string;
  featured?: boolean;
}

const TOOLS: Tool[] = [
  {
    abbr: "oL",
    name: "openLesson",
    description:
      "Educational harness for LLMs. Turns any model into an optimal Socratic tutor — custom lessons, adaptive progress, real-time feedback.",
    icon: Sparkles,
    gradient: "from-gold/20 via-bronze/10 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    links: [
      { label: "Open", href: "https://openlesson.academy", icon: ExternalLink, primary: true },
      { label: "GitHub", href: "https://github.com/dncolomer/openlesson", icon: GitFork },
      { label: "Discord", href: "https://discord.gg/pKv9dDTyC", icon: MessageCircle },
    ],
    featured: true,
  },
  {
    abbr: "GHC",
    name: "Human Cognition Dataset",
    description:
      "Large open collection of real human thinking — people solving problems and explaining their reasoning out loud.",
    icon: Brain,
    gradient: "from-neon-cyan/15 via-neon-cyan/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]",
    links: [
      { label: "HuggingFace", href: "https://huggingface.co/datasets/unsys/ghc", icon: ExternalLink, primary: true },
      { label: "Pipeline", href: "https://github.com/dncolomer/quest-pipeline", icon: GitFork },
    ],
  },
  {
    abbr: "GHC",
    name: "GHC Benchmark",
    description:
      "Measures how closely AI Chain of Thought matches real human thinking patterns. Detects fake or overly artificial responses.",
    icon: BarChart3,
    gradient: "from-forest-green/15 via-forest-green/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_rgba(34,139,34,0.1)]",
    links: [
      { label: "GitHub", href: "https://github.com/dncolomer/ghc-benchmark", icon: GitFork, primary: true },
    ],
    comingSoon: "Benchmark Results",
  },
  {
    abbr: "CR",
    name: "Classroom",
    description:
      "Simulator to train Student and Tutor Models. A controlled environment for testing and improving educational AI agents.",
    icon: GraduationCap,
    gradient: "from-marble-white/10 via-marble-white/5 to-transparent",
    borderGlow: "hover:shadow-[0_0_30px_rgba(245,245,245,0.05)]",
    links: [],
    comingSoon: "Coming Soon",
  },
];

export default function ToolsPage() {
  const featured = TOOLS.find((t) => t.featured);
  const rest = TOOLS.filter((t) => !t.featured);

  return (
    <div className="min-h-[calc(100vh-72px)]">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-indigo via-sea-indigo/40 to-deep-indigo" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,175,55,0.08),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(0,255,255,0.06),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-6">
            <span className="section-label">The Stack</span>
            <h1 className="text-3xl md:text-5xl text-marble-white mb-4">
              Open Tools for edu/acc
            </h1>
            <p className="text-lg text-marble-white/50 max-w-2xl mx-auto">
              Each tool feeds into the next — a flywheel of human cognition data and AI improvement.
            </p>
          </div>

          {/* Flow indicator */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-10 mb-4">
            {TOOLS.map((t, i) => (
              <div key={t.name} className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-black/30 border border-gold/20 rounded-full px-4 py-1.5">
                  <t.icon size={14} className="text-gold" />
                  <span className="text-xs text-marble-white/60 font-medium">{t.name}</span>
                </div>
                {i < TOOLS.length - 1 && (
                  <svg width="20" height="10" viewBox="0 0 20 10" className="text-gold/30">
                    <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-24 -mt-8 relative z-10">
        {/* Featured tool — full width */}
        {featured && (
          <div
            className={`group relative glass p-8 md:p-10 mb-6 bg-gradient-to-br ${featured.gradient} ${featured.borderGlow} !border-gold/25 hover:!border-gold/40 transition-all duration-500 hover:translate-y-[-2px]`}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-[80px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: icon + badge */}
              <div className="flex flex-col items-center md:items-start gap-3 flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/10 border border-gold/40 group-hover:scale-110 transition-transform duration-500">
                  <featured.icon size={28} className="text-gold" />
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/60 bg-gold/10 px-2.5 py-1 rounded-full">
                  Flagship
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl md:text-3xl text-marble-white group-hover:text-gold transition-colors duration-300">
                    {featured.name}
                  </h2>
                  <span className="hidden md:inline font-[family-name:var(--font-display)] text-xs font-bold tracking-wider text-gold/50 bg-gold/5 border border-gold/15 px-2 py-0.5 rounded">
                    {featured.abbr}
                  </span>
                </div>
                <p className="text-marble-white/65 leading-relaxed mb-6 max-w-2xl">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {featured.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      className={
                        link.primary
                          ? "btn-gold !text-sm"
                          : "btn-outline !text-sm"
                      }
                    >
                      <link.icon size={15} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of remaining tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((tool) => (
            <div
              key={tool.name}
              className={`group relative glass p-6 bg-gradient-to-br ${tool.gradient} ${tool.borderGlow} hover:translate-y-[-4px] transition-all duration-500 flex flex-col`}
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-marble-white/10 to-marble-white/5 border border-marble-white/10 group-hover:border-gold/30 group-hover:scale-110 transition-all duration-500">
                  <tool.icon size={22} className="text-gold/80 group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <h2 className="text-lg text-marble-white group-hover:text-gold transition-colors duration-300">
                    {tool.name}
                  </h2>
                  <span className="font-[family-name:var(--font-display)] text-[0.6rem] font-bold tracking-wider text-marble-white/30">
                    {tool.abbr}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-marble-white/55 leading-relaxed mb-5 flex-1">
                {tool.description}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {tool.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className={
                      link.primary
                        ? "btn-gold !py-2 !px-4 !text-xs"
                        : "btn-outline !py-2 !px-4 !text-xs"
                    }
                  >
                    <link.icon size={13} />
                    {link.label}
                  </a>
                ))}
                {tool.comingSoon && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-neon-cyan/70 bg-neon-cyan/8 border border-neon-cyan/15 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50 animate-pulse" />
                    {tool.comingSoon}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
