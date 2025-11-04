import React from 'react';
import Hero from './components/Hero';
import GuildOverview from './components/GuildOverview';
import QuestBoard from './components/QuestBoard';
import Leaderboard from './components/Leaderboard';
import ShopShowcase from './components/ShopShowcase';
import { Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] selection:bg-amber-400/30 selection:text-amber-100">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-amber-300" />
            <span className="text-sm font-semibold tracking-wide text-white">Guild of Programmers</span>
          </div>
          <nav className="hidden gap-6 text-sm text-amber-100/80 md:flex">
            <a href="#guild" className="hover:text-white">Guild</a>
            <a href="#quests" className="hover:text-white">Quests</a>
            <a href="#leaderboard" className="hover:text-white">Leaderboard</a>
            <a href="#shop" className="hover:text-white">Shop</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15">
              Sign In
            </button>
            <button className="rounded-md bg-amber-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-amber-400">
              Join the Guild
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <GuildOverview />
        <QuestBoard />
        <div id="leaderboard">
          <Leaderboard />
        </div>
        <div id="shop">
          <ShopShowcase />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-amber-100/70">
          <p>
            “May your commits be clean, your tests steadfast, and your quests victorious.”
          </p>
          <p className="mt-1 text-amber-100/50">© {new Date().getFullYear()} Guild of Programmers</p>
        </div>
      </footer>
    </div>
  );
}
