import React from 'react';
import { Crown, Trophy, Coins } from 'lucide-react';

const Row = ({ place, name, rank, xp, coins }) => (
  <div className="grid grid-cols-5 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
    <div className="flex items-center gap-2">
      {place === 1 ? (
        <Crown className="h-5 w-5 text-amber-300" />
      ) : (
        <span className="text-amber-100/80">{place}</span>
      )}
    </div>
    <div className="truncate">{name}</div>
    <div className="text-center font-semibold">{rank}</div>
    <div className="flex items-center justify-center gap-1 text-amber-100/90">
      <Trophy className="h-4 w-4 text-amber-300" /> {xp}
    </div>
    <div className="flex items-center justify-end gap-1 text-amber-100/90">
      <Coins className="h-4 w-4 text-amber-300" /> {coins}
    </div>
  </div>
);

export default function Leaderboard() {
  const rows = [
    { place: 1, name: 'Ayla the Architect', rank: 'A', xp: '12,450', coins: '42 Gold' },
    { place: 2, name: 'Kade the Knight', rank: 'B', xp: '9,870', coins: '18 Gold' },
    { place: 3, name: 'Mira the Mage', rank: 'B', xp: '9,120', coins: '14 Gold' },
    { place: 4, name: 'Ryn the Ranger', rank: 'C', xp: '6,540', coins: '7 Gold' },
  ];

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Leaderboard</h2>
          <p className="mt-1 text-amber-100/80">Champions recognized by rank, glory, and coin.</p>
        </header>

        <div className="grid grid-cols-5 gap-2 rounded-md border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-4 py-3 text-xs font-semibold text-amber-100/70 uppercase tracking-wide">
          <div>#</div>
          <div>Adventurer</div>
          <div className="text-center">Rank</div>
          <div className="text-center">Total XP</div>
          <div className="text-right">Coins</div>
        </div>

        <div className="mt-2 space-y-2">
          {rows.map((r) => (
            <Row key={r.place} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
