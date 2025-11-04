import React, { useState } from 'react';
import { User, Mail, Lock, LogIn, UserPlus } from 'lucide-react';

export default function AuthPanel() {
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    email: '',
    password: '',
    displayName: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      // Frontend-only UX for now. Wire to backend endpoints when ready.
      await new Promise((r) => setTimeout(r, 700));
      setMessage(
        mode === 'login' ? 'Logged in successfully (demo).' : 'Registered successfully (demo).'
      );
    } catch (err) {
      setMessage('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="auth" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white shadow-xl backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Adventurer Access</h2>
        <div className="inline-flex rounded-lg bg-white/5 p-1">
          <button
            onClick={() => setMode('login')}
            className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition ${
              mode === 'login' ? 'bg-sky-500 text-white' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <LogIn className="h-4 w-4" /> Login
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition ${
              mode === 'register' ? 'bg-sky-500 text-white' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <UserPlus className="h-4 w-4" /> Register
          </button>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {mode === 'register' && (
          <div className="relative">
            <label className="mb-1 block text-sm text-white/70">Display Name</label>
            <div className="flex items-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <span className="px-3 text-white/70"><User className="h-4 w-4" /></span>
              <input
                type="text"
                name="displayName"
                value={form.displayName}
                onChange={onChange}
                className="w-full bg-transparent px-3 py-2 outline-none placeholder:text-white/40"
                placeholder="e.g., Aria the Swift"
                required
              />
            </div>
          </div>
        )}
        <div className="relative">
          <label className="mb-1 block text-sm text-white/70">Email</label>
          <div className="flex items-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <span className="px-3 text-white/70"><Mail className="h-4 w-4" /></span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="w-full bg-transparent px-3 py-2 outline-none placeholder:text-white/40"
              placeholder="you@realm.dev"
              required
            />
          </div>
        </div>
        <div className="relative">
          <label className="mb-1 block text-sm text-white/70">Password</label>
          <div className="flex items-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <span className="px-3 text-white/70"><Lock className="h-4 w-4" /></span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              className="w-full bg-transparent px-3 py-2 outline-none placeholder:text-white/40"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-sky-500 px-4 py-2.5 font-medium text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Working…' : mode === 'login' ? 'Login' : 'Create Account'}
        </button>
        {message && (
          <p className="text-center text-sm text-emerald-300">{message}</p>
        )}
      </form>
    </section>
  );
}
