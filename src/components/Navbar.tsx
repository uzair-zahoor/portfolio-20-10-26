'use client';

import React, { useState } from 'react';
import { Bot, Sparkles, X, Menu } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

interface NavbarProps {
  onOpenAiModal: () => void;
}

export default function Navbar({ onOpenAiModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-slate-900/75 border border-white/10 rounded-2xl px-6 h-20 flex items-center justify-between shadow-2xl transition-all">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group" id="brand-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {personalInfo.initials}
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-white block">
              {personalInfo.name}
            </span>
            <span className="text-xs text-blue-400 font-mono block -mt-1">
              {personalInfo.role}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ai-lab"
            className="px-4 py-2 text-sm font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 rounded-xl transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" /> AI Research
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAiModal}
            id="nav-ask-ai-btn"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/30 text-purple-200 hover:border-purple-400 hover:bg-purple-600/40 transition-all shadow-lg shadow-purple-900/20 active:scale-95"
          >
            <Bot className="w-4 h-4 text-purple-400" />
            Ask AI Assistant
          </button>

          <a
            href="#contact"
            id="nav-contact-btn"
            className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Contact Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl text-slate-300 hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="backdrop-blur-xl bg-slate-900/95 rounded-2xl p-4 flex flex-col space-y-2 border border-white/10 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ai-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-amber-400 hover:bg-white/5 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-4 h-4" /> AI Research
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiModal();
              }}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-purple-300 hover:bg-purple-900/20 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Bot className="w-4 h-4" /> Ask AI Assistant
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
