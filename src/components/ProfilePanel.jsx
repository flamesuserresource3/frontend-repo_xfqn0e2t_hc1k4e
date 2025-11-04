import React from 'react';
import { User, Shield, Crown, Coins } from 'lucide-react';

export default function ProfilePanel() {
  // Demo profile; replace with real data from backend later
  const profile = {
    displayName: 'Aria the Swift',
    level: 12,
    rank: 'Silver III',
    coins: 1420,
    class: 'Rogue',
    inventory: [
      { name: 'Refactor Dagger', rarity: 'Rare' },
      { name: 'CI/CD Cloak', rarity: 'Epic' },
      { name: 'Linting Lamp', rarity: 'Uncommon' },
    ],
  };

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white shadow-xl backdrop-blur">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700">
          <User className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{profile.displayName}</h3>
          <p className="text-sm text-white/70">Class: {profile.class}</p>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
          <div className="mx-auto mb-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20">
            <Shield className="h-4 w-4 text-sky-300" />
          </div>
          <div className="text-xs text-white/60">Level</div>
          <div className="text-lg font-semibold">{profile.level}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
          <div className="mx-auto mb-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
            <Crown className="h-4 w-4 text-amber-300" />
          </div>
          <div className="text-xs text-white/60">Rank</div>
          <div className="text-lg font-semibold">{profile.rank}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
          <div className="mx-auto mb-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <Coins className="h-4 w-4 text-emerald-300" />
          </div>
          <div className="text-xs text-white/60">Coins</div>
          <div className="text-lg font-semibold">{profile.coins}</div>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium text-white/80">Inventory</h4>
        <ul className="space-y-2">
          {profile.inventory.map((item, idx) => (
            <li key={`${item.name}-${idx}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span>{item.name}</span>
              <span className="text-xs text-white/60">{item.rarity}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
