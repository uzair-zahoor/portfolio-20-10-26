'use client';

import React from 'react';
import { User, ShieldCheck, Server } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function About() {
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
                {personalInfo.initials}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-sm text-blue-400 font-mono">{personalInfo.role} @ Pixako</p>
                <p className="text-xs text-slate-400">{personalInfo.location}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-sm text-slate-300 border-t border-white/10 relative z-10">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Current Role</span>
                <span className="font-medium text-white">{personalInfo.role}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Primary Domain</span>
                <span className="font-medium text-white">Multi-Tenant Transport SaaS</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Core Stack</span>
                <span className="font-medium text-white">Next.js, React, Node, GraphQL, MongoDB</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Education</span>
                <span className="font-medium text-white">
                  {personalInfo.education.degree} ({personalInfo.education.year})
                </span>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-xl bg-slate-950/80 font-mono text-xs border border-slate-800 text-slate-300 relative z-10">
              <div className="flex items-center gap-1.5 mb-2 text-slate-500">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-[10px] text-slate-400">summary.ts</span>
              </div>
              <p className="text-emerald-400 leading-relaxed">
                &ldquo;Designing resilient backend workflows, tenant-isolated data architectures, and dynamic React user experiences.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            <User className="w-3.5 h-3.5" /> Professional Overview
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Software Engineer specializing in multi-tenant SaaS and modern Next.js systems.
          </h2>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              I am a <strong className="text-white">Software Engineer</strong> with over {personalInfo.experienceYears} of professional experience building production-grade web applications and multi-tenant SaaS platforms.
            </p>
            <p>
              Currently at <strong className="text-white">Pixako Technologies</strong>, I contribute to the core full-stack architecture for <strong>Allotrac</strong>—a high-throughput multi-tenant transport management SaaS platform. My day-to-day work centers on designing tenant-isolated data access patterns, building GraphQL resolvers and subscriptions, implementing real-time WebSockets with Redis Pub/Sub, and optimizing database queries using DataLoader.
            </p>
            <p>
              Holding a {personalInfo.education.degree} from {personalInfo.education.institution}, I maintain a deep commitment to clean architecture, role-based security systems (RBAC), third-party integrations (such as Xero API), and reactive frontend interfaces.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-0.5 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Tenant Isolation & RBAC</h3>
                <p className="text-xs text-slate-400 mt-1">Multi-tenant schemas, cross-tenant resource sharing, and permission controls.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-0.5 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Real-Time & Performance</h3>
                <p className="text-xs text-slate-400 mt-1">WebSockets, Redis Pub/Sub, DataLoader N+1 batching, and query optimization.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
