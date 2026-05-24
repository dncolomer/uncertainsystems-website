import { Database, TrendingUp, Users, ExternalLink, CheckCircle, ArrowRight, Coins } from "lucide-react";

export default function DataProvidersPage() {
  return (
    <div className="min-h-[calc(100vh-72px)]">
      {/* Hero Section */}
      <section className="image-section science-bg investor-page-hero">
        <div className="page-container">
          <div className="text-center mb-8">
            <span className="eyebrow">Data Providers</span>
            <h1>
              Turn high-quality cognition data into an investable asset
            </h1>
            <p className="text-lg text-marble-white/60 max-w-2xl mx-auto">
              The Data Provider Program rewards vetted contributors who help build the Grounded Human Cognition dataset.
            </p>
          </div>

          <div className="investor-hero-actions neutral-actions">
            <a
              href="https://dataprovider-staking.uncertain.systems/"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              <ExternalLink size={18} />
              Open staking program
              <ArrowRight size={18} />
            </a>
            <a href="#requirements" className="btn-secondary">
              See requirements
            </a>
            <a href="#how-it-works" className="btn-secondary">
              How it works
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        <div className="mb-16 glass p-8">
          <h2 className="text-2xl text-marble-white mb-4 text-center">Program overview</h2>
          <p className="text-marble-white/65 text-center max-w-3xl mx-auto">
            Uncertain Systems vets data providers, sponsors provider-token launches, attributes submitted datasets, and routes revenue back to the people funding and producing useful data.
          </p>
        </div>

        {/* How It Works */}
        <div id="how-it-works" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Understanding the Data Provider Program</h2>
          <p className="text-marble-white/70 text-center max-w-3xl mx-auto mb-12">
            At Uncertain Systems, we are building the highest-quality, fully attributable dataset for AI through the GHC dataset. The Data Provider Program is a new way to scale real, verifiable data contribution while creating aligned incentives across the ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Step 1 */}
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="step-number">1</div>
                <h3 className="text-lg text-marble-white">Sponsored Data Providers</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                Anyone can participate as a data provider (5M $UNSYS stake needed). For those selected, Uncertain Systems personally vets, confirms, and KYC&apos;s each provider behind the scenes. This gives the community strong assurance that every provider token launched under the program is legitimate and backed by our institutional-grade framework — no public doxxing required.
              </p>
              <p className="text-sm text-marble-white/70 leading-relaxed mt-4">
                We fully sponsor the launch of a dedicated token for each approved provider. This token is a <code className="text-xs bg-black/30 px-1.5 py-0.5 rounded text-marble-white/80">pump.fun</code> token launched by the Unsys team on the Data Provider&apos;s behalf.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="step-number">2</div>
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
                <div className="step-number">3</div>
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
                <div className="step-number">4</div>
                <h3 className="text-lg text-marble-white">Built-In Alignment</h3>
              </div>
              <p className="text-sm text-marble-white/70 leading-relaxed">
                The economics are designed to reward everyone involved. This creates a clean flywheel: more high-quality data, increased usage and revenue, stronger funding for providers, and organic $UNSYS buybacks.
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Distribution */}
        <div id="requirements" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Revenue Distribution</h2>
          <div className="glass p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-marble-white mb-2">80%</div>
                <p className="text-marble-white/70">of creator fees go directly to the data provider to fund and grow their operations</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-marble-white mb-2">20%</div>
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
              { icon: Database, label: "High-Quality Data" },
              { icon: TrendingUp, label: "Increased Usage & Revenue" },
              { icon: Coins, label: "Stronger Provider Funding" },
              { icon: Users, label: "Organic $UNSYS Buybacks" },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="glass p-4 flex flex-col items-center gap-2 min-w-[160px]">
                  <step.icon size={24} className="text-marble-white/70" />
                  <span className="text-sm text-marble-white/70">{step.label}</span>
                </div>
                {i < 3 && <ArrowRight size={20} className="text-marble-white/35 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl text-marble-white mb-8 text-center">Requirements & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8">
              <h3 className="text-lg text-marble-white mb-4">Requirements</h3>
              <ul className="space-y-3">
                {[
                  "5,000,000 $UNSYS staked",
                  "Submit high-quality, attributable data",
                  "Pass Uncertain Systems vetting process",
                  "Data must contribute to the GHC dataset",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-marble-white/70">
                    <CheckCircle size={16} className="text-marble-white/60 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8">
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
                    <CheckCircle size={16} className="text-marble-white/60 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
