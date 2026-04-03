import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-deep-indigo border-t border-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gold">◇</span>
          <span className="text-xs text-marble-white/40">
            &copy; {new Date().getFullYear()} Uncertain Systems
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {[
            { href: "/tools", label: "Tools" },
            { href: "/investors", label: "Investors" },
            { href: "/blog", label: "Blog" },
            { href: "/socials", label: "Socials" },
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
            { href: "/legal", label: "Legal" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-xs text-marble-white/40 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="https://github.com/dncolomer" target="_blank" rel="noopener" className="text-xs text-marble-white/40 hover:text-gold transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
