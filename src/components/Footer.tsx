'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative z-10 border-t border-white/10 py-8 px-4 text-center text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {currentYear} {personalInfo.name}. Built with Next.js (App Router) & Tailwind CSS.
        </p>
        <p className="text-slate-400">
          {personalInfo.location} | {personalInfo.role} @ Pixako
        </p>
      </div>
    </footer>
  );
}
