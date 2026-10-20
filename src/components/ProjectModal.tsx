'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { projectsData } from '@/data/portfolioData';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!projectId || !projectsData[projectId]) return null;

  const project = projectsData[projectId];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="backdrop-blur-xl bg-slate-900 border border-white/20 max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          id="close-project-modal-btn"
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 pr-8">
          <span className="text-xs font-mono text-blue-400 block">{project.subtitle}</span>
          <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
          <p className="text-sm text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-xs font-mono text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-3 pt-4 border-t border-white/10">
          <h3 className="text-sm font-bold text-slate-200">
            Key Contributions & Engineering Highlights:
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {project.architectureHighlights.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
