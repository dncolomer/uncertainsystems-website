import { Wallet } from "lucide-react";

export function StakingDashboard() {
  return (
    <div className="glass p-12 text-center">
      <Wallet size={48} className="text-gold/50 mx-auto mb-4" />
      <h3 className="text-xl text-marble-white mb-2">Staking Dashboard</h3>
      <p className="text-sm text-marble-white/60 mb-6">
        Access the staking dashboard to manage your UNSYS stakes and rewards.
      </p>
      <a
        href="https://staking.uncertain.systems"
        target="_blank"
        rel="noopener"
        className="btn-gold"
      >
        Login
      </a>
    </div>
  );
}


