import React, { useState } from 'react';
import { Sword, Trophy, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuestBattleDemo() {
  const [status, setStatus] = useState('idle'); // idle | battling | success

  const handleComplete = async () => {
    if (status !== 'idle') return;
    setStatus('battling');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    await new Promise((r) => setTimeout(r, 1600));
    setStatus('idle');
  };

  return (
    <section id="quest-demo" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white shadow-xl backdrop-blur">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Demo Quest: Fix the Broken Tests</h3>
          <p className="text-sm text-white/70">Resolve flaky CI tests and restore the build to green.</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-amber-300">Medium</span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-5">
        <div className="mb-4 flex items-center gap-3 text-sm text-white/80">
          <Trophy className="h-4 w-4 text-amber-300" />
          <span>Rewards: 250 XP • 120 Coins • +2 Reputation</span>
        </div>

        <button
          onClick={handleComplete}
          disabled={status !== 'idle'}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <CheckCircle className="h-5 w-5" />
          {status === 'idle' ? 'Complete Quest' : status === 'battling' ? 'Battling…' : 'Success!'}
        </button>

        {/* Battle animation layer */}
        <AnimatePresence>
          {status === 'battling' && (
            <motion.div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative h-40 w-40">
                <motion.div
                  className="absolute left-6 top-6"
                  initial={{ rotate: -30, x: -40, y: 20, scale: 0.8 }}
                  animate={{ rotate: -10, x: 0, y: 0, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                >
                  <Sword className="h-16 w-16 text-sky-300 drop-shadow" />
                </motion.div>
                <motion.div
                  className="absolute right-6 bottom-6"
                  initial={{ rotate: 30, x: 40, y: -20, scale: 0.8 }}
                  animate={{ rotate: 10, x: 0, y: 0, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 0.05 }}
                >
                  <Sword className="h-16 w-16 text-pink-300 drop-shadow" />
                </motion.div>
                {/* Impact pulse */}
                <motion.div
                  className="absolute inset-0 m-auto h-6 w-6 rounded-full bg-white/70"
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 8, opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', repeat: 2, repeatDelay: 0.2 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success burst */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-emerald-200 backdrop-blur"
              >
                <CheckCircle className="h-5 w-5" /> Quest Completed!
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
