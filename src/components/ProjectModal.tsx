'use client';

import React, { useEffect, useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Activity, 
  ArrowRight, 
  Check, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';
import { projectsData } from '@/data/portfolioData';

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');

  // Reset tab on project open
  useEffect(() => {
    setActiveTab('overview');
  }, [projectId]);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="backdrop-blur-xl bg-slate-900 border border-white/20 max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-project-modal-btn"
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-blue-400 block">{project.subtitle}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
              {project.badge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Metric Badges Strip */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-white/10">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center font-mono">
                <div className="text-base sm:text-lg font-black text-cyan-400">{m.value}</div>
                <div className="text-[11px] text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview & Solution
          </button>
          {project.architectureFlow && (
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Pipeline & Data Flow
            </button>
          )}
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'code'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Resolver Implementation
            </button>
          )}
        </div>

        {/* Tab Content 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Problem & Solution Callout */}
            {project.problemStatement && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-wider font-mono">
                    <AlertCircle className="w-3.5 h-3.5" /> Core Challenge
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Engineered Solution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.solutionOverview}
                  </p>
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
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

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono text-slate-400 block">Technology Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-xs font-mono text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Architecture Flow */}
        {activeTab === 'architecture' && project.architectureFlow && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              System Execution Flow:
            </h3>
            <div className="space-y-3">
              {project.architectureFlow.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 flex items-start gap-4"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 font-mono font-bold flex items-center justify-center shrink-0 border border-blue-500/40 text-xs">
                    0{step.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Code Snippet */}
        {activeTab === 'code' && project.codeSnippet && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{project.codeSnippet.title}</span>
              <span className="text-blue-400">{project.codeSnippet.language}</span>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}
