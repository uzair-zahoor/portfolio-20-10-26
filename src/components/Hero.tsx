'use client';

import React from 'react';
import { 
  Briefcase, 
  Download, 
  Sparkles, 
  Network, 
  Terminal, 
  MapPin
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { downloadResume } from '@/utils/downloadResume';

export default function Hero() {
  const { t, data, language, isRTL } = useLanguage();

  return (
    <section id="hero" className="min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Availability & Location Status Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/85 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-xl shadow-emerald-950/30 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{t.heroAvailable}</span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1 text-slate-300 font-mono text-[11px]">
            <MapPin className="w-3 h-3 text-emerald-400" /> {t.heroLocation}
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15]">
            {t.heroHeadline1}{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              {t.heroHeadlineHighlight}
            </span>
            <br />
            {t.heroHeadline2}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {language === 'ur' ? (
              <>
                میں <strong className="text-white font-semibold">{data.personalInfo.name}</strong> ہوں، <strong className="text-white font-semibold">{data.personalInfo.company}</strong> میں {data.personalInfo.role}، جن کے پاس پروڈکشن گریڈ ری ایکٹ/نیکسٹ جے ایس ساس، گراف کیو ایل مائیکرو سروسز اور ریئل ٹائم ریڈس پب/سب بیک بون تیار کرنے کا {data.personalInfo.experienceYears} کا تجربہ ہے۔
              </>
            ) : (
              <>
                I&apos;m <strong className="text-white font-semibold">{data.personalInfo.name}</strong>, a {data.personalInfo.role} at <strong className="text-white font-semibold">{data.personalInfo.company}</strong> with {data.personalInfo.experienceYears} of experience engineering production-grade React/Next.js SaaS, GraphQL microservices, and real-time Redis Pub/Sub backbones.
              </>
            )}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-300 pt-1">
          {data.heroBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                badge.includes('AI') || badge.includes('اے آئی')
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 flex items-center gap-1.5'
                  : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
              }`}
            >
              {(badge.includes('AI') || badge.includes('اے آئی')) && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <a
            href="#projects"
            id="hero-view-work-cta"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 text-xs sm:text-sm"
          >
            <Briefcase className="w-4 h-4" /> {t.heroViewWork}
          </a>
          <a
            href="#architecture"
            id="hero-architecture-cta"
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-blue-500/40 hover:border-blue-400 text-blue-200 hover:text-white font-bold hover:bg-blue-900/20 active:scale-95 transition-all flex items-center gap-2 text-xs sm:text-sm backdrop-blur-md shadow-lg"
          >
            <Network className="w-4 h-4 text-blue-400" /> {t.heroBlueprints}
          </a>
          <a
            href="#playground"
            id="hero-playground-cta"
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-200 hover:text-white font-bold hover:bg-cyan-900/20 active:scale-95 transition-all flex items-center gap-2 text-xs sm:text-sm backdrop-blur-md shadow-lg"
          >
            <Terminal className="w-4 h-4 text-cyan-400" /> {t.heroSystemsLab}
          </a>
          <button
            onClick={downloadResume}
            id="hero-resume-cta"
            className="px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white active:scale-95 transition-all flex items-center gap-2 text-xs sm:text-sm backdrop-blur-md cursor-pointer"
          >
            <Download className="w-4 h-4 text-indigo-400" /> {t.heroDownloadResume}
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto">
          {data.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-slate-900/70 hover:bg-slate-900/90 p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-center shadow-lg hover:-translate-y-0.5"
            >
              <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color} font-mono`}>{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
