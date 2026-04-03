import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-deep-indigo border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-gold">◇</span>
            <span className="font-[family-name:var(--font-display)] text-lg font-medium tracking-wider text-marble-white">
              Uncertain Systems
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/tools" className="text-sm text-marble-white/70 hover:text-gold transition-colors">
              Tools
            </Link>
            <Link href="/investors" className="text-sm text-marble-white/70 hover:text-gold transition-colors">
              Investors
            </Link>
            <Link href="/socials" className="text-sm text-marble-white/70 hover:text-gold transition-colors">
              Socials
            </Link>
            <Link href="/blog" className="text-sm text-marble-white/70 hover:text-gold transition-colors">
              Blog
            </Link>
            <a
              href="https://github.com/dncolomer"
              target="_blank"
              rel="noopener"
              className="text-sm text-marble-white/70 hover:text-gold transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="flex flex-wrap justify-center gap-4 py-4 border-b border-gold/10">
          <Link href="/privacy" className="text-xs text-marble-white/50 hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-marble-white/50 hover:text-gold transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/cookies" className="text-xs text-marble-white/50 hover:text-gold transition-colors">
            Cookies
          </Link>
          <Link href="/legal" className="text-xs text-marble-white/50 hover:text-gold transition-colors">
            Legal Notice
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center">
          <p className="text-xs text-marble-white/40 mb-1">
            &copy; {new Date().getFullYear()} Uncertain Systems (Daniel Colomer). All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.15em] text-marble-white/30">
            Accelerating Human Educational Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
