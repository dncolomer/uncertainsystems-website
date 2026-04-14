"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Menu, X, LogIn, LogOut, User, Shield } from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const NAV_LINKS = [
  { href: "/tools", label: "Tools" },
  { href: "/investors", label: "Investors" },
  { href: "/data-providers", label: "Data Providers" },
  { href: "/socials", label: "Socials" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }: { data: { user: SupabaseUser | null } }) => {
      setUser(data.user);
      if (data.user) {
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
        setIsAdmin(data.user.email === adminEmail || data.user.user_metadata?.role === "admin");
      }
      setAuthLoading(false);
    }).catch(() => setAuthLoading(false));

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: string, session: { user: SupabaseUser } | null) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
          setIsAdmin(session.user.email === adminEmail || session.user.user_metadata?.role === "admin");
        } else {
          setIsAdmin(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    window.location.href = "/";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-indigo/95 backdrop-blur-xl border-b border-gold/20"
          : "bg-deep-indigo/70 backdrop-blur-md border-b border-gold/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all">
            ◇
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-medium tracking-wider text-marble-white">
            Uncertain Systems
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-marble-white/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/admin/blog"
              className="text-sm font-medium tracking-wide text-neon-cyan/80 hover:text-neon-cyan transition-all flex items-center gap-1"
            >
              <Shield size={14} />
              Admin
            </Link>
          )}
          {authLoading ? (
            <div className="w-16 h-8 bg-marble-white/5 rounded-full animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-marble-white/50 flex items-center gap-1">
                <User size={14} />
                {user.email?.split("@")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="btn-outline !py-2 !px-4 !text-xs flex items-center gap-1"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn-gold !py-2 !px-4 !text-xs flex items-center gap-1">
              <LogIn size={14} />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-marble-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-deep-indigo/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-xl font-medium tracking-wide transition-colors ${
                pathname === link.href ? "text-gold" : "text-marble-white/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/admin/blog"
              onClick={() => setMobileOpen(false)}
              className="text-xl font-medium tracking-wide text-neon-cyan/80 hover:text-neon-cyan flex items-center gap-2"
            >
              <Shield size={18} />
              Admin
            </Link>
          )}
          {authLoading ? null : user ? (
            <button onClick={handleLogout} className="btn-outline text-lg">
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <Link href="/login" onClick={() => setMobileOpen(false)} className="btn-gold text-lg">
              <LogIn size={18} />
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
