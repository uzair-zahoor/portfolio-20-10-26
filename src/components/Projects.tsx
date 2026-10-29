'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Truck, 
  Users, 
  Check, 
  Radio, 
  Receipt, 
  Sparkles, 
  Kanban,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

type FilterCategory = 'all' | 'saas' | 'realtime' | 'ai' | 'analytics';

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const { t, data, language } = useLanguage();

  const allProjects = Object.values(data.projectsData);

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.categoryTag === activeFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'allotrac':
        return <Truck className="w-5 h-5" />;
      case 'telematics':
        return <Radio className="w-5 h-5" />;
      case 'xero-sync':
        return <Receipt className="w-5 h-5" />;
      case 'hrms':
        return <Users className="w-5 h-5" />;
      case 'genai-docs':
        return <Sparkles className="w-5 h-5" />;
      case 'dispatch-board':
        return <Kanban className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const filterOptions: { label: string; value: FilterCategory; count: number }[] = [
    { label: t.filterAll, value: 'all', count: allProjects.length },
    { label: t.filterSaas, value: 'saas', count: allProjects.filter(p => p.categoryTag === 'saas').length },
    { label: t.filterRealtime, value: 'realtime', count: allProjects.filter(p => p.categoryTag === 'realtime').length },
    { label: t.filterAi, value: 'ai', count: allProjects.filter(p => p.categoryTag === 'ai').length },
    { label: t.filterAnalytics, value: 'analytics', count: allProjects.filter(p => p.categoryTag === 'analytics').length }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 tracking-wider uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20 shadow-inner">
          <Code2 className="w-3.5 h-3.5" /> {t.projectsBadge}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t.projectsTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          {t.projectsSubtitle}
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 cursor-pointer ${
                activeFilter === opt.value
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/40 shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{opt.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                activeFilter === opt.value ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {opt.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="backdrop-blur-xl bg-slate-900/80 hover:bg-slate-900/95 transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-blue-500/40 group shadow-xl hover:-translate-y-1.5 relative overflow-hidden"
          >
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-32 h-32 bg-blue-500/5 group-hover:bg-blue-500/15 rounded-full blur-2xl transition-colors pointer-events-none" />

            <div className="space-y-4 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {getProjectIcon(project.id)}
                </div>
                <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className="text-[11px] font-mono text-slate-400 block truncate">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Key Metric Highlights */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5 font-mono">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center p-1.5 rounded-lg bg-slate-950/60 border border-white/5">
                      <div className="text-xs font-black text-cyan-400">{m.value}</div>
                      <div className="text-[9px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Bullet Points */}
              <ul className="space-y-1.5 text-xs text-slate-400">
                {project.keyPoints.slice(0, 2).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions & Tech Pills */}
            <div className="pt-5 space-y-3 border-t border-white/10 mt-5 relative z-10">
              <div className="flex flex-wrap gap-1.5 force-ltr">
                {project.tech.slice(0, 4).map((tName, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                  >
                    {tName}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-800/50 border border-slate-700/40 text-[10px] font-mono text-slate-400">
                    +{project.tech.length - 4} {language === 'ur' ? 'مزید' : 'more'}
                  </span>
                )}
              </div>

              <button
                onClick={() => onSelectProject(project.id)}
                id={`view-${project.id}-details-btn`}
                className="w-full py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-98 shadow-md group/btn cursor-pointer"
              >
                <span>{language === 'ur' ? 'آرکیٹیکچر اور کیس اسٹڈی دیکھیں' : 'View Architecture & Case Study'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:group-hover/btn:-translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
