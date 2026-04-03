"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { LogIn } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-4xl text-gold mb-4">◇</div>
            <h1 className="text-2xl text-marble-white mb-2">Welcome Back</h1>
            <p className="text-sm text-marble-white/60">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs text-marble-white/60 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs text-marble-white/60 uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-gold w-full justify-center !py-3">
              {loading ? "Signing in..." : (
                <>
                  <LogIn size={16} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-marble-white/50 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-gold hover:text-marble-white transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-72px)] flex items-center justify-center"><div className="text-marble-white/50">Loading...</div></div>}>
      <LoginForm />
    </Suspense>
  );
}
