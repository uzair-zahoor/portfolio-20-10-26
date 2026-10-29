'use client';

import React from 'react';
import { User, ShieldCheck, Server, TrendingUp, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, data, language } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Visual Profile Card */}
        <div className="lg:col-span-5 relative">
          <div className="backdrop-blur-xl bg-slate-900/80 p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden shadow-2xl">
            {/* Ambient Glows */}
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-blue-500/30">
                {data.personalInfo.initials}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{data.personalInfo.name}</h3>
                <p className="text-sm text-blue-400 font-mono">{data.personalInfo.role} @ Pixako</p>
                <p className="text-xs text-slate-400">{data.personalInfo.location}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-sm text-slate-300 border-t border-white/10 relative z-10">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">{t.aboutRoleLabel}</span>
                <span className="font-medium text-white">{data.personalInfo.role}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">{t.aboutDomainLabel}</span>
                <span className="font-medium text-white">{t.aboutDomainValue}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">{t.aboutStackLabel}</span>
                <span className="font-medium text-white force-ltr text-xs sm:text-sm">{t.aboutStackValue}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">{t.aboutEducationLabel}</span>
                <span className="font-medium text-white">
                  {data.personalInfo.education.degree} ({data.personalInfo.education.year})
                </span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-xl bg-slate-950/80 font-mono text-xs border border-slate-800 text-slate-300 relative z-10">
              <div className="flex items-center gap-1.5 mb-2 text-slate-500">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="ml-2 rtl:mr-2 text-[10px] text-slate-400">summary.ts</span>
              </div>
              <p className="text-emerald-400 leading-relaxed font-sans">
                {t.aboutQuote}
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            <User className="w-3.5 h-3.5" /> {t.aboutBadge}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.aboutTitle}
          </h2>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              {language === 'ur' ? (
                <>
                  میں ایک <strong className="text-white">سافٹ ویئر انجینئر</strong> ہوں جس کے پاس پروڈکشن گریڈ ویب ایپلی کیشنز اور ملٹی ٹیننٹ ساس (SaaS) پلیٹ فارمز تیار کرنے کا {data.personalInfo.experienceYears} کا پیشہ ورانہ تجربہ ہے۔
                </>
              ) : (
                <>
                  I am a <strong className="text-white">{data.personalInfo.role}</strong> with over {data.personalInfo.experienceYears} of professional experience building production-grade web applications and multi-tenant SaaS platforms.
                </>
              )}
            </p>
            <p>
              {t.aboutP2Text}
            </p>
            <p>
              {t.aboutP3Text}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-0.5 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{t.aboutRbacTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{t.aboutRbacDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{t.aboutRealtimeTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{t.aboutRealtimeDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{t.aboutFinTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{t.aboutFinDesc}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mt-0.5 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{t.aiLabTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">{t.aboutQueryDesc}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
