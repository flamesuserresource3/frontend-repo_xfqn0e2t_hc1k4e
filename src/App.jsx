import React from 'react';
import Hero from './components/Hero';
import AuthPanel from './components/AuthPanel';
import ProfilePanel from './components/ProfilePanel';
import QuestBattleDemo from './components/QuestBattleDemo';
import ApiStatus from './components/ApiStatus';
import { Shield, Trophy, Store } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-500/20"><Shield className="h-4 w-4 text-sky-300" /></span>
            <span className="text-sm font-semibold tracking-wide">Guild of Programmers</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#auth" className="hover:text-white">Access</a>
            <a href="#profile" className="hover:text-white">Profile</a>
            <a href="#quest-demo" className="hover:text-white">Battle</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">
            <Trophy className="h-4 w-4 text-amber-300" /> Leaderboard
          </button>
        </div>
      </header>

      {/* Hero with Spline */}
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
        <Hero />

        {/* Connectivity banner */}
        <ApiStatus />

        {/* Auth + Profile */}
        <section id="profile" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AuthPanel />
          <ProfilePanel />
        </section>

        {/* Battle demo */}
        <QuestBattleDemo />

        {/* Placeholder section showing future shop area link */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white/80">
          <div className="flex items-center gap-2 text-white">
            <Store className="h-5 w-5 text-emerald-300" />
            <h3 className="text-base font-semibold">Upcoming: Guild Shop & Cosmetics</h3>
          </div>
          <p className="mt-1 text-sm">Purchase cosmetic items and boosts with your earned coins. Checkout flow will wire to the backend soon.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Guild of Programmers. Forge boldly.</p>
      </footer>
    </div>
  );
}
