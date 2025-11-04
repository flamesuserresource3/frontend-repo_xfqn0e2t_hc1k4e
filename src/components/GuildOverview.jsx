import React from 'react';
import { Users, Shield, Trophy, MessageSquare } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="rounded-md bg-amber-500/10 p-2">
      <Icon className="h-5 w-5 text-amber-300" />
    </div>
    <div>
      <p className="text-sm text-amber-100/80">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  </div>
);

export default function GuildOverview() {
  return (
    <section id="guild" className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">The Guild Hall</h2>
          <p className="mt-1 text-amber-100/80">A sanctum for camaraderie, strategy, and triumphs.</p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Stat icon={Users} label="Members" value="3 / 4" />
          <Stat icon={Shield} label="Guild Rank" value="B" />
          <Stat icon={Trophy} label="Quests Completed" value="128" />
          <Stat icon={MessageSquare} label="New Posts" value="7" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5">
            <h3 className="text-lg font-semibold text-white">Charter</h3>
            <p className="mt-2 text-sm text-amber-100/80">
              We pledge to uphold honor in code and quest alike. Share knowledge, lift comrades, and
              face every ticket like a dragon to be bested.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5">
            <h3 className="text-lg font-semibold text-white">Recent Banter</h3>
            <ul className="mt-2 space-y-2 text-sm text-amber-100/90">
              <li>• Guild Master: Sprint begins at dawn. Sharpen your commits.</li>
              <li>• Ranger: Deployed hotfix. The bug has been banished.</li>
              <li>• Mage: New artifact added to the shop: Mystic Theme Pack.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5">
            <h3 className="text-lg font-semibold text-white">Guild Orders</h3>
            <p className="mt-2 text-sm text-amber-100/80">
              Assign quests, invite adventurers, and distribute rewards from this hall.
            </p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-md bg-amber-500 px-3 py-2 text-xs font-semibold text-black hover:bg-amber-400">
                Create Quest
              </button>
              <button className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15">
                Invite Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
