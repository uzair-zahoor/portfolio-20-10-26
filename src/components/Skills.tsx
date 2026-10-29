'use client';

import React from 'react';
import { 
  Code, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  ShieldCheck, 
  GitBranch 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Skills() {
  const { t, data } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-6 h-6" />;
      case 'layout':
        return <Layout className="w-6 h-6" />;
      case 'server':
        return <Server className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6" />;
      case 'git':
        return <GitBranch className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          <Code className="w-3.5 h-3.5" /> {t.skillsBadge}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.skillsTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.skillsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skillsCategories.map((category, idx) => (
          <div
            key={idx}
            className={`backdrop-blur-xl bg-slate-900/70 hover:bg-slate-900/90 ${category.accentBorder} transition-all duration-300 p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl hover:-translate-y-1`}
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className={`p-3 rounded-2xl ${category.accentBg}`}>
                {getIcon(category.iconName)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{category.title}</h3>
                <p className="text-xs text-slate-400">{category.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 force-ltr">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    skill.colorClass
                      ? skill.colorClass
                      : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-slate-500'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
