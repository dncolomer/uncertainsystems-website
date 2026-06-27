import { ExternalLink } from "lucide-react";

const PROGRAM_ID = "GSxEFVkssh6trQ97WZBsMGs1iahdJ6Z2fSPjQ617nKLN";
const CA = "Dza3Bey5tvyYiPgcGRKoXKU6rNrdoNrWNVmjqePcpump";

export default function InvestorsPage() {
  return (
    <div className="min-h-[calc(100vh-72px)]">
      {/* Hero CTA */}
      <section className="image-section roadmap-bg investor-page-hero">
        <div className="page-container">
          <div className="text-center mb-10">
            <span className="eyebrow">Investors</span>
            <h1>
              Participate in the Uncertain Systems ecosystem
            </h1>
            <p className="text-lg text-marble-white/60 max-w-2xl mx-auto">
              $UNSYS connects staking, revenue sharing, referrals, and data-provider incentives around the learning automation stack.
            </p>
          </div>

          <div className="investor-hero-actions neutral-actions">
            <a href="https://staking.uncertain.systems" target="_blank" rel="noopener" className="btn-gold">
              <ExternalLink size={18} />
              Open staking program
            </a>
            <a href={`https://pump.fun/${CA}`} target="_blank" rel="noopener" className="btn-primary">
              <ExternalLink size={18} />
              Buy $UNSYS
            </a>
            <a href="https://github.com/dncolomer/unsys_staking" target="_blank" rel="noopener" className="btn-secondary">
              View contract
            </a>
          </div>

          <div className="investor-addresses">
            <div>
              <span>Token CA</span>
              <code>{CA}</code>
            </div>
            <div>
              <span>Program</span>
              <code>{PROGRAM_ID}</code>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        {/* Tokenomics Overview — single source of truth for programs */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Tokenomics & Rewards</h2>

          <div className="overflow-x-auto bg-black/40 border border-marble-white/15 p-4 mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {["Program", "Stake Required", "You Earn", "Lock / Effort"].map((h) => (
                    <th key={h} className="bg-black/50 text-marble-white/70 font-semibold text-xs uppercase tracking-wider p-3 border-b-2 border-marble-white/20 text-left">
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
                  <tr key={i} className="hover:bg-marble-white/5 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 border-b border-marble-white/10 ${j === 0 ? "text-marble-white font-medium" : "text-marble-white/70"}`}>
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

      </div>
    </div>
  );
}
