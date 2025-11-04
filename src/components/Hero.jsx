import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Crown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient + grid overlay - never block pointer events to Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <Shield className="h-4 w-4 text-sky-300" />
          <span>Guild of Programmers</span>
          <Crown className="h-4 w-4 text-amber-300" />
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          Forge Your Legend in Code
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80">
          A fantasy RPG that turns real-world programming tasks into epic quests. Level up, earn loot, and climb the leaderboard.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#auth" className="inline-flex items-center rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-sky-600">
            Begin Your Journey
          </a>
          <a href="#quest-demo" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Try a Demo Quest
          </a>
        </div>
      </div>
    </section>
  );
}
