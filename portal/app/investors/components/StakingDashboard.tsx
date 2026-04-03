"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Wallet, Lock, Unlock, Coins, AlertCircle, Users, Database } from "lucide-react";
import type { User } from "@supabase/supabase-js";

type Tab = "dividends" | "partnership" | "data-provider";

export function StakingDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("dividends");
  const [lockPeriod, setLockPeriod] = useState<3 | 6 | 12>(3);
  const [stakeAmount, setStakeAmount] = useState("");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }: { data: { user: User | null } }) => {
      setUser(data.user);
    });
  }, []);

  const connectWallet = async () => {
    try {
      const phantom = (window as unknown as { solana?: { isPhantom: boolean; connect: () => Promise<{ publicKey: { toString: () => string } }>; } }).solana;
      if (!phantom?.isPhantom) {
        window.open("https://phantom.app/", "_blank");
        return;
      }
      const resp = await phantom.connect();
      setWalletAddress(resp.publicKey.toString());
      setWalletConnected(true);
    } catch (err) {
      console.error("Wallet connection failed:", err);
    }
  };

  if (!user) {
    return (
      <div className="glass p-12 text-center">
        <Wallet size={48} className="text-gold/50 mx-auto mb-4" />
        <h3 className="text-xl text-marble-white mb-2">Login Required</h3>
        <p className="text-sm text-marble-white/60 mb-6">
          Sign in to your account to access the staking dashboard.
        </p>
        <a href="/login?redirect=/investors" className="btn-gold">
          Sign In
        </a>
      </div>
    );
  }

  if (!walletConnected) {
    return (
      <div className="glass p-12 text-center">
        <Wallet size={48} className="text-gold/30 mx-auto mb-4" />
        <h3 className="text-xl text-marble-white mb-2">Connect Your Wallet</h3>
        <p className="text-sm text-marble-white/60 mb-6">
          Connect a Solana wallet to interact with the staking program.
        </p>
        <button disabled className="btn-gold opacity-50 cursor-not-allowed">
          <Wallet size={16} />
          Connect Wallet
        </button>
        <span className="block mt-3 text-xs text-neon-cyan/60">Coming Soon</span>
      </div>
    );
  }

  return (
    <div className="glass p-6 md:p-8">
      {/* Wallet info */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold/20">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-forest-green rounded-full animate-pulse" />
          <span className="text-sm text-marble-white/70">Connected:</span>
          <code className="text-xs text-marble-white/50 bg-black/30 px-2 py-1 rounded">
            {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
          </code>
        </div>
        <button
          onClick={() => { setWalletConnected(false); setWalletAddress(null); }}
          className="text-xs text-marble-white/40 hover:text-red-400 transition-colors"
        >
          Disconnect
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-black/20 rounded-lg p-1">
        {([
          { key: "dividends" as Tab, label: "Dividends" },
          { key: "partnership" as Tab, label: "Partnership" },
          { key: "data-provider" as Tab, label: "Data Provider" },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.key
                ? "bg-gold/20 text-gold"
                : "text-marble-white/50 hover:text-marble-white/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "dividends" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Your Stake</p>
              <p className="text-2xl text-marble-white font-bold">0 UNSYS</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Your Shares</p>
              <p className="text-2xl text-gold font-bold">0</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Claimable USDC</p>
              <p className="text-2xl text-forest-green font-bold">$0.00</p>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-6">
            <h4 className="text-marble-white mb-4 flex items-center gap-2">
              <Lock size={16} className="text-gold" />
              Stake UNSYS for Dividends
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-marble-white/60 mb-2">Amount</label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="Enter UNSYS amount"
                  className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-marble-white/60 mb-2">Lock Period</label>
                <div className="grid grid-cols-3 gap-2">
                  {([3, 6, 12] as const).map((months) => (
                    <button
                      key={months}
                      onClick={() => setLockPeriod(months)}
                      className={`py-2 rounded-lg text-sm transition-all ${
                        lockPeriod === months
                          ? "bg-gold/20 text-gold border border-gold/40"
                          : "bg-black/20 text-marble-white/50 border border-gold/10 hover:border-gold/30"
                      }`}
                    >
                      {months}mo ({months === 3 ? "1.1x" : months === 6 ? "1.25x" : "1.5x"})
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button className="btn-gold flex-1 justify-center">
                  <Lock size={14} />
                  Stake
                </button>
                <button className="btn-outline flex-1 justify-center">
                  <Unlock size={14} />
                  Unstake
                </button>
                <button className="btn-outline flex-1 justify-center">
                  <Coins size={14} />
                  Claim
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-gold/5 rounded-lg p-4">
            <AlertCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
            <p className="text-xs text-marble-white/60">
              Staking transactions interact directly with the on-chain Anchor program.
              Make sure you have enough SOL for transaction fees.
              Unstaking is only available after the lock period expires.
            </p>
          </div>
        </div>
      )}

      {activeTab === "partnership" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Your Tier</p>
              <p className="text-2xl text-marble-white font-bold">None</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Staked</p>
              <p className="text-2xl text-gold font-bold">0 UNSYS</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Referral Balance</p>
              <p className="text-2xl text-forest-green font-bold">$0.00</p>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-6">
            <h4 className="text-marble-white mb-4 flex items-center gap-2">
              <Users size={16} className="text-gold" />
              Become a Partner
            </h4>
            <p className="text-sm text-marble-white/60 mb-4">
              Stake 1M+ UNSYS to auto-assign a tier. 1M = T1 (10%), 2M = T2 (30%), 5M = T3 (50%).
            </p>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Enter UNSYS amount (min 1,000,000)"
                className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <div className="flex gap-3">
                <button className="btn-gold flex-1 justify-center">
                  <Lock size={14} />
                  Stake Partnership
                </button>
                <button className="btn-outline flex-1 justify-center">
                  <Coins size={14} />
                  Claim Referrals
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "data-provider" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Status</p>
              <p className="text-2xl text-marble-white font-bold">Not Registered</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 text-center">
              <p className="text-xs text-marble-white/40 uppercase tracking-wider mb-1">Staked</p>
              <p className="text-2xl text-gold font-bold">0 UNSYS</p>
            </div>
          </div>

          <div className="bg-black/10 rounded-lg p-6">
            <h4 className="text-marble-white mb-4 flex items-center gap-2">
              <Database size={16} className="text-gold" />
              Register as Data Provider
            </h4>
            <p className="text-sm text-marble-white/60 mb-4">
              Stake 5M+ UNSYS to register. Your registration starts inactive and requires admin validation.
            </p>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Enter UNSYS amount (min 5,000,000)"
                className="w-full bg-black/30 border border-gold/20 rounded-lg px-4 py-3 text-marble-white placeholder-marble-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="btn-gold w-full justify-center">
                <Lock size={14} />
                Stake as Data Provider
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


