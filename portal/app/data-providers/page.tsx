import { Database, TrendingUp, Users, ExternalLink, CheckCircle, ArrowRight, Coins } from "lucide-react";

export default function DataProvidersPage() {
  return (
    <div className="min-h-[calc(100vh-72px)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sea-indigo/40 via-deep-indigo to-deep-indigo" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,rgba(212,175,55,0.15),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-8">
            <span className="section-label">Data Providers</span>
            <h1 className="text-3xl md:text-5xl text-marble-white mb-4">
              Build Your Data Provider Business
            </h1>
            <p className="text-lg text-marble-white/60 max-w-2xl mx-auto">
              Join the Uncertain Systems ecosystem and turn high-quality data contribution into a fully tokenized, investable, and rewarded part of the AI economy.
            </p>
          </div>

          {/* External Frontend CTA */}
          <div className="max-w-lg mx-auto glass p-8 text-center bg-gradient-to-br from-gold/10 to-transparent !border-gold/30">
            <p className="text-sm text-marble-white/60 mb-4 uppercase tracking-wider">Data Provider Staking Program</p>
            <a
              href="https://dataprovider-staking.uncertain.systems/"
              target="_blank"
              rel="noopener"
              className="btn-gold !text-base !py-4 !px-10 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] inline-flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Data Provider Staking Program
              <ArrowRight size={18} />
            </a>
            <p className="mt-4 text-xs text-marble-white/40">
              Operate the Solana contract, submit data, and claim revenue
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Understanding the Data Provider Program</h2>
          <p className="text-marble-white/70 text-center max-w-3xl mx-auto mb-12">
            At Uncertain Systems, we are building the highest-quality, fully attributable dataset for AI through the GHC dataset. The Data Provider Program is a new way to scale real, verifiable data contribution while creating aligned incentives across the ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Step 1 */}
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">1</div>
                <h3 className="text-lg text-marble-white">Sponsored Data Providers</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                Anyone can participate as a data provider (5M $UNSYS stake needed). For those selected, Uncertain Systems personally vets, confirms, and KYC&apos;s each provider behind the scenes. This gives the community strong assurance that every provider token launched under the program is legitimate and backed by our institutional-grade framework — no public doxxing required.
              </p>
              <p className="text-sm text-marble-white/70 leading-relaxed mt-4">
                We fully sponsor the launch of a dedicated token for each approved provider. This token is a <code className="text-xs bg-black/30 px-1.5 py-0.5 rounded text-gold">pump.fun</code> token launched by the Unsys team on the Data Provider&apos;s behalf.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">2</div>
                <h3 className="text-lg text-marble-white">Investing in the Data</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                When people buy and hold a provider&apos;s token, they are effectively investing in the high-quality data that provider will contribute.
              </p>
              <p className="text-sm text-marble-white/70 leading-relaxed mt-4">
                Every dataset submitted is permanently added to the GHC dataset and flagged with the provider&apos;s identity. This creates full transparency and traceability.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">3</div>
                <h3 className="text-lg text-marble-white">Revenue Sharing Through Staking</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                All revenue generated from that specific data — whether from AI training licenses, dataset sales, or other usage — flows back and is directly attributed to the provider&apos;s identity.
              </p>
              <p className="text-sm text-marble-white/70 leading-relaxed mt-4">
                Token holders can stake their provider tokens in our Solana program. In return, they earn their proportional share of the revenues created by the data they backed.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">4</div>
                <h3 className="text-lg text-marble-white">Built-In Alignment</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                The economics are designed to reward everyone involved. This creates a clean flywheel: more high-quality data, increased usage and revenue, stronger funding for providers, and organic $UNSYS buybacks.
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Distribution */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Revenue Distribution</h2>
          <div className="glass p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-forest-green mb-2">80%</div>
                <p className="text-marble-white/70">of creator fees go directly to the data provider to fund and grow their operations</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gold mb-2">20%</div>
                <p className="text-marble-white/70">automatically directed back to the main $UNSYS token to be used fully and exclusively for buybacks</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Flywheel */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">The Flywheel</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-center">
            {[
              { icon: Database, label: "High-Quality Data", color: "text-neon-cyan" },
              { icon: TrendingUp, label: "Increased Usage & Revenue", color: "text-forest-green" },
              { icon: Coins, label: "Stronger Provider Funding", color: "text-gold" },
              { icon: Users, label: "Organic $UNSYS Buybacks", color: "text-gold" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="glass p-4 flex flex-col items-center gap-2 min-w-[160px]">
                  <step.icon size={24} className={step.color} />
                  <span className="text-sm text-marble-white/70">{step.label}</span>
                </div>
                {i < 3 && <ArrowRight size={20} className="text-gold/50 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Requirements & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 !border-neon-cyan/30">
              <h3 className="text-lg text-marble-white mb-4">Requirements</h3>
              <ul className="space-y-3">
                {[
                  "5,000,000 $UNSYS staked",
                  "Submit high-quality, attributable data",
                  "Pass Uncertain Systems vetting process",
                  "Data must contribute to the GHC dataset",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-marble-white/70">
                    <CheckCircle size={16} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 !border-gold/30">
              <h3 className="text-lg text-marble-white mb-4">Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Sponsored pump.fun token launch",
                  "Keep 80% of creator fees",
                  "Full transparency and traceability",
                  "Institutional-grade framework backing",
                  "No public doxxing required",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-marble-white/70">
                    <CheckCircle size={16} className="text-forest-green mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://dataprovider-staking.uncertain.systems/"
            target="_blank"
            rel="noopener"
            className="btn-gold inline-flex items-center gap-2"
          >
            <ExternalLink size={18} />
            Data Provider Staking Program
          </a>
        </div>
      </div>
    </div>
  );
}
