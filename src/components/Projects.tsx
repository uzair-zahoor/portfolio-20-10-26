'use client';

import React from 'react';
import { Code2, Truck, Users, Check, ExternalLink } from 'lucide-react';
import { projectsData } from '@/data/portfolioData';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const allotrac = projectsData.allotrac;
  const hrms = projectsData.hrms;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 tracking-wider uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          <Code2 className="w-3.5 h-3.5" /> Featured Work
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Production Projects</h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Architectures engineered for scale, tenant security, and real-time operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1: Allotrac */}
        <div className="backdrop-blur-xl bg-slate-900/80 hover:bg-slate-900/95 hover:border-blue-500/40 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between border border-white/10 group shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shadow-md">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                {allotrac.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {allotrac.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {allotrac.description}
            </p>

            <ul className="space-y-2 text-xs text-slate-400">
              {allotrac.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 space-y-4 border-t border-white/10 mt-6">
            <div className="flex flex-wrap gap-1.5">
              {allotrac.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => onSelectProject(allotrac.id)}
              id="view-allotrac-details-btn"
              className="w-full py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-98 shadow-md"
            >
              View Architecture Breakdown <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project 2: HRMS */}
        <div className="backdrop-blur-xl bg-slate-900/80 hover:bg-slate-900/95 hover:border-emerald-500/40 transition-all duration-300 rounded-3xl p-8 flex flex-col justify-between border border-white/10 group shadow-xl hover:-translate-y-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {hrms.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {hrms.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {hrms.description}
            </p>

            <ul className="space-y-2 text-xs text-slate-400">
              {hrms.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 space-y-4 border-t border-white/10 mt-6">
            <div className="flex flex-wrap gap-1.5">
              {hrms.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => onSelectProject(hrms.id)}
              id="view-hrms-details-btn"
              className="w-full py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-98 shadow-md"
            >
              View Architecture Breakdown <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
