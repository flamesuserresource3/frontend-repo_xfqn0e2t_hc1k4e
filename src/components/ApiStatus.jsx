import React from 'react';
import { Server, Link as LinkIcon } from 'lucide-react';

export default function ApiStatus() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || '';
  const configured = Boolean(backendUrl);

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white backdrop-blur">
      <div className="flex items-start gap-3">
        <div className={`mt-1 h-2 w-2 rounded-full ${configured ? 'bg-emerald-400' : 'bg-red-400'}`} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-white/80" />
            <h4 className="text-sm font-medium">Backend API</h4>
          </div>
          {configured ? (
            <p className="mt-1 text-xs text-white/70">Configured: <span className="font-mono">{backendUrl}</span>. Frontend is ready to call endpoints once available.</p>
          ) : (
            <p className="mt-1 text-xs text-white/70">No backend URL set. Add <span className="font-mono">VITE_BACKEND_URL</span> to connect the guild to its server.</p>
          )}
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 transition hover:bg-white/10"
          title="API Docs"
        >
          <LinkIcon className="h-3.5 w-3.5" /> Docs
        </a>
      </div>
    </section>
  );
}
