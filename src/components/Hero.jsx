import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Crown, Scroll, Sword } from 'lucide-react';

const StatPill = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 border border-white/20 shadow-sm">
    <Icon className="h-4 w-4 text-amber-300" />
    <span className="text-sm text-amber-100/90">{label}:</span>
    <span className="text-sm font-semibold text-white">{value}</span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ppI7eAudW7IbKhKs/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
            Guild of Programmers
          </h1>
          <p className="mt-4 text-base md:text-lg text-amber-100/90">
            Answer the call, Adventurer. Conquer real-world tasks as epic quests, rise through the
            ranks, and forge your legend within the Guild.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <StatPill icon={Shield} label="Rank" value="C" />
            <StatPill icon={Crown} label="Title" value="Adventurer" />
            <StatPill icon={Scroll} label="Quests" value="12 Active" />
            <StatPill icon={Sword} label="Class" value="Knight" />
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="#quests"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-black shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Begin a Quest
            </a>
            <a
              href="#guild"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Visit the Guild Hall
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
