import React from 'react';
import { Calendar, CheckCircle2, XCircle, Coins, Clock } from 'lucide-react';

const DifficultyBadge = ({ tier }) => {
  const map = {
    F: 'bg-gray-500/20 text-gray-200 border-gray-400/30',
    E: 'bg-green-500/20 text-green-100 border-green-400/30',
    D: 'bg-emerald-500/20 text-emerald-100 border-emerald-400/30',
    C: 'bg-blue-500/20 text-blue-100 border-blue-400/30',
    B: 'bg-indigo-500/20 text-indigo-100 border-indigo-400/30',
    A: 'bg-purple-500/20 text-purple-100 border-purple-400/30',
    S: 'bg-pink-500/20 text-pink-100 border-pink-400/30',
    SS: 'bg-rose-500/20 text-rose-100 border-rose-400/30',
    SSS: 'bg-amber-500/20 text-amber-100 border-amber-400/30',
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${map[tier] || map.F}`}>
      {tier}
    </span>
  );
};

const QuestCard = ({ name, desc, reward, deadline, tier }) => (
  <div className="group rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 transition hover:border-amber-400/30">
    <div className="flex items-start justify-between gap-3">
      <h4 className="text-lg font-semibold text-white">{name}</h4>
      <DifficultyBadge tier={tier} />
    </div>
    <p className="mt-2 text-sm leading-relaxed text-amber-100/80">{desc}</p>
    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-amber-100/90">
      <span className="inline-flex items-center gap-1">
        <Coins className="h-4 w-4 text-amber-300" /> {reward}
      </span>
      <span className="inline-flex items-center gap-1">
        <Calendar className="h-4 w-4 text-amber-300" /> {deadline}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-4 w-4 text-amber-300" /> Timeboxed
      </span>
    </div>
    <div className="mt-4 flex gap-2">
      <button className="inline-flex items-center gap-1 rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-black hover:bg-emerald-400">
        <CheckCircle2 className="h-4 w-4" /> Mark Complete
      </button>
      <button className="inline-flex items-center gap-1 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15">
        <XCircle className="h-4 w-4" /> Fail Quest
      </button>
    </div>
  </div>
);

export default function QuestBoard() {
  const quests = [
    {
      name: 'Slay the Legacy Bug',
      desc: 'Track down a critical regression haunting the production realm and restore stability.',
      reward: '+250 XP · 120 Copper',
      deadline: 'Due: Fri',
      tier: 'B',
    },
    {
      name: 'Forge CI Pipeline',
      desc: 'Construct a sacred pipeline to test and deploy artifacts with unwavering discipline.',
      reward: '+300 XP · 2 Silver',
      deadline: 'Due: Today',
      tier: 'A',
    },
    {
      name: 'Map the API Codex',
      desc: 'Document endpoints with sigils and runes to guide future adventurers.',
      reward: '+180 XP · 80 Copper',
      deadline: 'Due: Mon',
      tier: 'C',
    },
  ];

  return (
    <section id="quests" className="relative py-12">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Quest Board</h2>
            <p className="mt-1 text-amber-100/80">Real tasks, elevated to valorous deeds.</p>
          </div>
          <button className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-400">
            New Quest
          </button>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {quests.map((q) => (
            <QuestCard key={q.name} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}
