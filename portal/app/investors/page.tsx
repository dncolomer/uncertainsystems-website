import { Shield, Coins, Users, ExternalLink } from "lucide-react";
import { StakingDashboard } from "./components/StakingDashboard";

const PROGRAM_ID = "GSxEFVkssh6trQ97WZBsMGs1iahdJ6Z2fSPjQ617nKLN";
const CA = "Dza3Bey5tvyYiPgcGRKoXKU6rNrdoNrWNVmjqePcpump";

export default function InvestorsPage() {
  return (
    <div className="min-h-[calc(100vh-72px)]">
      {/* Hero CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-indigo via-sea-indigo/60 to-deep-indigo" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.12),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="section-label">Investors</span>
            <h1 className="text-3xl md:text-5xl text-marble-white mb-4">
              UNSYS Staking Program
            </h1>
            <p className="text-lg text-marble-white/60 max-w-2xl mx-auto">
              Stake $UNSYS on Solana to earn USDC dividends, lifetime referral revenue, and more.
            </p>
          </div>

          {/* Prominent Buy CTA */}
          <div className="max-w-lg mx-auto glass p-8 text-center bg-gradient-to-br from-gold/10 to-transparent !border-gold/30">
            <p className="text-sm text-marble-white/60 mb-4 uppercase tracking-wider">Get $UNSYS</p>
            <a
              href={`https://pump.fun/${CA}`}
              target="_blank"
              rel="noopener"
              className="btn-gold !text-base !py-4 !px-10 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
            >
              <ExternalLink size={18} />
              Buy on pump.fun
            </a>
            <div className="mt-4">
              <span className="text-xs text-gold/70 uppercase tracking-widest">CA:</span>
              <code className="block mt-1 text-xs text-marble-white/50 bg-black/30 px-4 py-2 rounded break-all">
                {CA}
              </code>
            </div>
          </div>

          <div className="mt-6 text-center">
            <code className="text-xs text-marble-white/30 bg-black/20 px-3 py-1.5 rounded">
              Program: {PROGRAM_ID}
            </code>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        {/* Tokenomics Overview — single source of truth for programs */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Tokenomics & Rewards</h2>

          <div className="overflow-x-auto bg-black/40 border border-gold/30 rounded-lg p-4 mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {["Program", "Stake Required", "You Earn", "Lock / Effort"].map((h) => (
                    <th key={h} className="bg-black/50 text-gold font-semibold text-xs uppercase tracking-wider p-3 border-b-2 border-gold text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Passive Dividends", "Any amount", "Pro-rata USDC each epoch", "3mo (1.1x) / 6mo (1.25x) / 12mo (1.5x)"],
                  ["Referral Partner T1", "1,000,000 UNSYS", "10% lifetime rev-share", "Refer users to earn"],
                  ["Referral Partner T2", "2,000,000 UNSYS", "30% lifetime rev-share", "Refer users to earn"],
                  ["Referral Partner T3", "5,000,000 UNSYS", "50% lifetime rev-share", "Refer users to earn"],
                  ["Data Provider", "5,000,000 UNSYS + data", "80% of own token fees", "Requires admin validation"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gold/10 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 border-b border-gold/10 ${j === 0 ? "text-marble-white font-medium" : "text-marble-white/70"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-marble-white/50 text-center">
            Legacy OMEGA holders receive 10B virtual dividend shares + partnership at admin-assigned tier with no tokens locked (cap: 500 holders).
          </p>
        </div>

        {/* Revenue Distribution — how the money flows */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Revenue Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <Coins size={24} className="text-gold" />
                <h3 className="text-lg text-marble-white">Dividends</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                Admin deposits USDC via <code className="text-xs bg-black/30 px-1.5 py-0.5 rounded">deposit_revenue</code>.
                100% goes to the dividend pool. Each deposit increments an epoch.
                Stakers claim their proportional share once per epoch based on
                <code className="text-xs bg-black/30 px-1.5 py-0.5 rounded ml-1">user_shares / total_shares</code>.
                Unclaimed funds roll forward.
              </p>
            </div>
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-gold" />
                <h3 className="text-lg text-marble-white">Referrals</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                Off-chain tools track revenue per partner&apos;s referred users.
                Admin deposits the calculated share per-partner via
                <code className="text-xs bg-black/30 px-1.5 py-0.5 rounded ml-1">deposit_referral_revenue</code>.
                Partners claim their full balance anytime — no epoch gating.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture — technical detail */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "UNSYS", desc: "Utility / governance token for staking", color: "text-gold" },
              { label: "OMEGA", desc: "Legacy token for migration benefits", color: "text-neon-cyan" },
              { label: "USDC", desc: "Revenue distribution token", color: "text-forest-green" },
            ].map((t) => (
              <div key={t.label} className="glass p-6 text-center">
                <span className={`font-[family-name:var(--font-display)] text-lg font-bold ${t.color}`}>
                  {t.label}
                </span>
                <p className="text-sm text-marble-white/60 mt-2">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto bg-black/30 border border-gold/20 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Account", "PDA Seed", "Description"].map((h) => (
                    <th key={h} className="text-left p-4 text-gold text-xs uppercase tracking-wider border-b-2 border-gold/30 bg-black/40">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["GlobalConfig", '"global_config_v3"', "Mints, vaults, admin, dividend epoch, pause state"],
                  ["DividendStake", '"dividend_stake" + user', "Lock period, share multiplier, epoch tracking"],
                  ["PartnershipStake", '"partnership_stake" + user', "Tier (1/2/3), optional referrer, referral balance"],
                  ["DataProviderStake", '"data_provider_stake" + user', "Registration status (requires admin activation)"],
                  ["LegacyOmegaStake", '"legacy_omega" + holder', "Admin-assigned tier for past OMEGA holders"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gold/5 transition-colors">
                    <td className="p-4 border-b border-gold/10 text-marble-white font-medium">{row[0]}</td>
                    <td className="p-4 border-b border-gold/10 text-marble-white/60 font-mono text-xs">{row[1]}</td>
                    <td className="p-4 border-b border-gold/10 text-marble-white/70">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Security</h2>
          <div className="glass p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Snapshot-based dividend claims (no early-claimer advantage)",
                "Per-partner referral balances (no global pool sharing)",
                "init prevents re-initialization attacks",
                "Emergency pause/unpause + two-step admin transfer",
                "Checked arithmetic everywhere (overflow-safe)",
                "1M UNSYS minimum for partnerships (anti-spam)",
                "Full unstake only for partnerships (prevents tier manipulation)",
                "Vault mint & ATA validation on all operations",
                "49 integration tests, all passing",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Shield size={14} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-marble-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Staking Dashboard */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Staking Dashboard</h2>
          <StakingDashboard />
        </div>

        {/* Footer link */}
        <div className="text-center">
          <a
            href="https://github.com/dncolomer/unsys_staking"
            target="_blank"
            rel="noopener"
            className="btn-outline"
          >
            View Smart Contract on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
