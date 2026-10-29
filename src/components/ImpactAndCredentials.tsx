'use client';

import React, { useState } from 'react';
import { 
  Award, 
  GraduationCap, 
  Quote, 
  CheckCircle2, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CredentialItem } from '@/types/portfolio';

export default function ImpactAndCredentials() {
  const [activeEndorsementIdx, setActiveEndorsementIdx] = useState<number>(0);
  const { t, data, language } = useLanguage();

  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* 1. Impact Metrics Strip */}
      <div className="space-y-4 mb-20">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
            <TrendingUp className="w-3.5 h-3.5" /> {t.impactBadge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.impactTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t.impactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-slate-900/80 hover:bg-slate-900/95 transition-all p-6 rounded-3xl border border-white/10 group shadow-xl relative overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.03] rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
              <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.accentColor} bg-clip-text text-transparent font-mono`}>
                {stat.value}
              </div>
              <h3 className="font-bold text-white text-base mt-2">{stat.label}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Credentials & Degree Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 tracking-wider uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
            <GraduationCap className="w-4 h-4" /> {t.credBadge}
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {t.credTitle}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'ur'
              ? 'بی ایس سافٹ ویئر انجینئرنگ کی ڈگری، مع ڈسٹری بیوٹڈ سسٹمز، نیکسٹ جے ایس سرور کمپوننٹس اور اسٹریمنگ ٹیلی میٹری پائپ لائنز کی تیاری کا مسلسل عملی تجربہ۔'
              : 'Graduated with a Bachelor of Science in Software Engineering, supplemented by continuous deep dives into distributed architectures, Next.js server components, and streaming telemetry pipelines.'}
          </p>

          <div className="p-6 rounded-3xl bg-slate-900/70 border border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {language === 'ur' ? 'فل اسٹیک ساس ماہر' : 'Full-Stack SaaS Specialist'}
                </h4>
                <p className="text-xs text-slate-400">
                  {language === 'ur' ? 'پکساکو ٹیکنالوجیز کور ٹیم' : 'Pixako Technologies Core Team'}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
              {language === 'ur'
                ? 'سینکڑوں ڈسپیچرز اور ڈرائیورز کے زیر استعمال مشن کریٹیکل لاجسٹک ساس سسٹم کی مسلسل نگہداشت اور اسکیلنگ۔'
                : 'Continuously designing and scaling mission-critical fleet software serving hundreds of transport dispatchers and mobile drivers.'}
            </p>
          </div>
        </div>

        {/* Credentials List */}
        <div className="lg:col-span-7 space-y-4">
          {data.credentialsData.map((cred: CredentialItem, idx: number) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-slate-900/75 hover:bg-slate-900/90 transition-all p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 space-y-3 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-extrabold text-white">{cred.title}</h4>
                  <p className="text-xs text-purple-400 font-medium">{cred.issuer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {cred.period}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold">
                    {cred.badge}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cred.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 force-ltr">
                {cred.skills.map((skill: string, sIdx: number) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded-md bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Engineering Endorsements & Peer Testimonials */}
      <div className="backdrop-blur-xl bg-slate-900/80 rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 tracking-wider uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              <Users className="w-3.5 h-3.5" /> {t.endorseBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {t.endorseTitle}
            </h3>
          </div>

          {/* Endorsement Selector Pills */}
          <div className="flex gap-2">
            {data.endorsementsData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveEndorsementIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  activeEndorsementIdx === idx
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                    : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {item.role.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Quote Card */}
        {(() => {
          const endorsement = data.endorsementsData[activeEndorsementIdx];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <Quote className="w-8 h-8 text-indigo-400/80" />
                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                  &ldquo;{endorsement.quote}&rdquo;
                </blockquote>
                <div className="pt-2 text-xs text-slate-400 font-mono">
                  {language === 'ur' ? 'سیاق و سباق: ' : 'Context: '}{endorsement.context}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                    {endorsement.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{endorsement.name}</h4>
                    <p className="text-xs text-indigo-400">{endorsement.role}</p>
                    <p className="text-[11px] text-slate-500">{endorsement.organization}</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {language === 'ur' ? 'تصدیق شدہ ساتھی' : 'Verified Colleague'}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    {endorsement.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })()}

      </div>

    </section>
  );
}
