'use client';

import React from 'react';
import { Briefcase, Building2, Code, CheckCircle2, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { t, data } = useLanguage();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 tracking-wider uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          <Briefcase className="w-3.5 h-3.5" /> {t.expBadge}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">{t.expTitle}</h2>
        <p className="text-slate-400 text-sm sm:text-base">
          {t.expSubtitle}
        </p>
      </div>

      <div className="relative border-l-2 rtl:border-l-0 rtl:border-r-2 border-blue-500/30 ml-4 sm:ml-8 rtl:ml-0 rtl:mr-4 rtl:sm:mr-8 space-y-12">
        {data.experienceData.map((exp, idx) => (
          <div key={idx} className="relative pl-8 sm:pl-12 rtl:pl-0 rtl:pr-8 rtl:sm:pr-12 group">
            {/* Timeline Node */}
            <div className={`absolute -left-[17px] rtl:left-auto rtl:-right-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 flex items-center justify-center transition-all shadow-lg ${
              exp.type === 'work'
                ? 'border-blue-500 text-blue-400 group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white shadow-blue-500/30'
                : 'border-slate-600 text-slate-400 group-hover:scale-125 group-hover:border-indigo-500 group-hover:text-indigo-300 shadow-indigo-500/20'
            }`}>
              {exp.type === 'work' ? <Building2 className="w-4 h-4" /> : <Code className="w-4 h-4" />}
            </div>

            <div className="backdrop-blur-xl bg-slate-900/80 hover:bg-slate-900/95 transition-all p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white">{exp.role}</h3>
                  <p className={`text-sm font-semibold ${exp.type === 'work' ? 'text-blue-400' : 'text-slate-400'}`}>
                    {exp.company}
                  </p>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono self-start sm:self-auto border ${
                  exp.type === 'work'
                    ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}>
                  {exp.period}
                </span>
              </div>

              {exp.description && (
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              )}

              <ul className="space-y-2.5 text-sm text-slate-300 list-none">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    {exp.type === 'work' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    ) : (
                      <Check className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                    )}
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 force-ltr">
                  {exp.tech.map((tName, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300"
                    >
                      {tName}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
