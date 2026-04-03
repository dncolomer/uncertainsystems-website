"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-4xl text-gold mb-4">◇</div>
            <h1 className="text-2xl text-marble-white mb-2">Join the Ecosystem</h1>
            <p className="text-sm text-marble-white/60">Create your account</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-xs text-marble-white/60 uppercase tracking-wider mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="your_username"
              />
            </div>

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
                minLength={6}
                className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-gold w-full justify-center !py-3">
              {loading ? "Creating account..." : (
                <>
                  <UserPlus size={16} />
                  Create Account
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-marble-white/50 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-gold hover:text-marble-white transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
