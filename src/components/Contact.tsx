'use client';

import React from 'react';
import { Send, Mail, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { downloadResume } from '@/utils/downloadResume';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="backdrop-blur-xl bg-slate-900/80 rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8 text-center relative shadow-2xl">
        
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            <Send className="w-3.5 h-3.5" /> Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Get In Touch</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Open to discussions around Next.js application architecture, multi-tenant SaaS challenges, real-time GraphQL systems, or engineering roles.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
          
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            id="contact-email-link"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all flex flex-col items-center gap-2.5 group"
          >
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform shadow-md">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Email</span>
            <span className="text-xs font-bold text-white tracking-wide truncate max-w-full">
              {personalInfo.email}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin-link"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all flex flex-col items-center gap-2.5 group"
          >
            <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform shadow-md">
              <LinkedInIcon className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-medium">LinkedIn</span>
            <span className="text-xs font-bold text-white tracking-wide">/in/uzair-zahoor</span>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-github-link"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all flex flex-col items-center gap-2.5 group"
          >
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform shadow-md">
              <GitHubIcon className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-medium">GitHub</span>
            <span className="text-xs font-bold text-white tracking-wide">@uzair-zahoor</span>
          </a>

          {/* Resume Download */}
          <button
            onClick={downloadResume}
            id="contact-resume-btn"
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all flex flex-col items-center gap-2.5 group text-left w-full active:scale-98"
          >
            <div className="p-3 rounded-xl bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Resume</span>
            <span className="text-xs font-bold text-white tracking-wide">Download Profile</span>
          </button>

        </div>

      </div>
    </section>
  );
}
