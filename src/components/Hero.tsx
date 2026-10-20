'use client';

import React from 'react';
import { Briefcase, Mail, Download, Sparkles } from 'lucide-react';
import { personalInfo, heroStats, heroBadges } from '@/data/portfolioData';
import { downloadResume } from '@/utils/downloadResume';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-green-500/30 text-xs font-semibold text-green-400 shadow-lg shadow-green-900/20 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span>{personalInfo.role} @ {personalInfo.company}</span>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Building{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Scalable Next.js SaaS.
            </span>
            <br />
            Solving Complex Systems.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            I&apos;m <strong className="text-slate-100 font-semibold">{personalInfo.name}</strong>, a {personalInfo.role} with {personalInfo.experienceYears} of experience engineering production-grade React/Next.js web applications, multi-tenant transport SaaS platforms, and GraphQL microservices.
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-300 pt-2">
          {heroBadges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                badge.includes('AI')
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 flex items-center gap-1.5'
                  : 'bg-white/5 border-white/10 hover:border-white/25'
              }`}
            >
              {badge.includes('AI') && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            id="hero-view-work-cta"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <Briefcase className="w-5 h-5" /> View Featured Work
          </a>
          <a
            href="#contact"
            id="hero-contact-cta"
            className="px-8 py-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-white/30 text-white font-bold hover:bg-white/10 active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base backdrop-blur-md"
          >
            <Mail className="w-5 h-5 text-blue-400" /> Contact Me
          </a>
          <button
            onClick={downloadResume}
            id="hero-resume-cta"
            className="px-6 py-4 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white active:scale-95 transition-all flex items-center gap-2 text-sm sm:text-base backdrop-blur-md"
          >
            <Download className="w-5 h-5 text-indigo-400" /> Download Resume
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-slate-900/60 hover:bg-slate-900/80 p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-center shadow-lg"
            >
              <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
