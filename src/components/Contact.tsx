'use client';

import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  FileText, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
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
  const { t, data, language, isRTL } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isWorkingHours, setIsWorkingHours] = useState<boolean>(true);

  // Form State
  const topics = language === 'ur' ? [
    'ملازمت / فل ٹائم رول',
    'ساس آرکیٹیکچر مشاورت',
    'تکنیکی گفتگو',
    'فری لانس پروجیکٹ'
  ] : [
    'Full-Time Role / Hiring',
    'SaaS Architecture Consulting',
    'Technical Discussion',
    'Freelance Project'
  ];

  const [topic, setTopic] = useState<string>(topics[0]);
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync default topic when language switches
  useEffect(() => {
    setTopic(topics[0]);
  }, [language]);

  // Live Islamabad Time Clock (PKT = UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeStr);

      const hourNumber = parseInt(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          hour12: false
        }),
        10
      );
      setIsWorkingHours(hourNumber >= 9 && hourNumber < 20);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(data.personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="backdrop-blur-xl bg-slate-900/85 rounded-3xl p-6 sm:p-12 border border-white/10 space-y-12 relative shadow-2xl overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 shadow-inner">
            <Send className="w-3.5 h-3.5" /> {t.contactBadge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>

          {/* Live Timezone & Availability Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-2xl bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-300 mt-2">
            <span className="flex items-center gap-1.5 text-blue-400">
              <MapPin className="w-3.5 h-3.5" /> {data.personalInfo.location} (PKT UTC+5)
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300 force-ltr">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {currentTime ? `${currentTime} PKT` : 'UTC+5'}
            </span>
            <span className="text-slate-600">•</span>
            <span className={`flex items-center gap-1 font-semibold ${isWorkingHours ? 'text-emerald-400' : 'text-amber-400'}`}>
              <span className={`w-2 h-2 rounded-full ${isWorkingHours ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              {isWorkingHours 
                ? (language === 'ur' ? 'دفتر کے فعال اوقات' : 'Active Working Hours') 
                : (language === 'ur' ? 'اوقات کے بعد / لچکدار دستیابی' : 'Standby / Flexible Notice')}
            </span>
          </div>
        </div>

        {/* Main Contact Grid: Interactive Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column: Quick Inquiry Form */}
          <div className="lg:col-span-7 backdrop-blur-md bg-slate-950/60 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                {language === 'ur' ? 'فوری پیغام کی ترسیل' : 'Quick Inquiry Dispatch'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'ur' ? 'براہ راست پیغام بھیجیں یا مطلوبہ موضوع منتخب کریں۔' : 'Send a structured message directly or select your collaboration topic.'}
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {language === 'ur' ? 'پیغام موصول ہو گیا!' : 'Inquiry Received!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  {language === 'ur' ? (
                    <>
                      شکریہ! عزیر آپ کے پیغام کا جائزہ لے کر جلد <strong className="text-emerald-400">{data.personalInfo.email}</strong> کے ذریعے جواب دیں گے۔
                    </>
                  ) : (
                    <>
                      Thank you for reaching out. Uzair will review your inquiry and follow up shortly at <strong className="text-emerald-400">{data.personalInfo.email}</strong>.
                    </>
                  )}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  {language === 'ur' ? 'ایک اور پیغام بھیجیں' : 'Send Another Note'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                {/* Topic Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-400 block">
                    {t.contactTopicLabel}:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((tItem) => (
                      <button
                        type="button"
                        key={tItem}
                        onClick={() => setTopic(tItem)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                          topic === tItem
                            ? 'bg-blue-600/30 border-blue-500 text-white shadow-md'
                            : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {tItem}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 block">{t.contactNameLabel}</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder={t.contactNamePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 block">{t.contactEmailLabel}</label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder={t.contactEmailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400 block">{t.contactMsgLabel}</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactMsgPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4 rtl:rotate-180" />
                  <span>{isSubmitting ? t.contactSendingBtn : t.contactSendBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Instant Copy */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">
                      {language === 'ur' ? 'براہ راست ای میل' : 'Direct Email'}
                    </span>
                    <span className="text-sm font-bold text-white block force-ltr">{data.personalInfo.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <a
                  href={`mailto:${data.personalInfo.email}`}
                  className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold text-center transition-colors"
                >
                  {language === 'ur' ? 'ای میل ایپ کھولیں' : 'Open Mail App'}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.contactCopiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contactCopyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={data.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">
                    {language === 'ur' ? 'لنکڈ اِن پروفائل' : 'LinkedIn Profile'}
                  </span>
                  <span className="text-sm font-bold text-white block force-ltr">/in/uzair-zahoor-1a46a0194</span>
                </div>
              </div>
              <span className="text-xs font-mono text-indigo-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                {language === 'ur' ? '← رابطہ کریں' : 'Connect →'}
              </span>
            </a>

            {/* GitHub */}
            <a
              href={data.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">
                    {language === 'ur' ? 'گٹ ہب ریپوزیٹریز' : 'GitHub Repositories'}
                  </span>
                  <span className="text-sm font-bold text-white block force-ltr">@uzair-zahoor</span>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                {language === 'ur' ? '← وزٹ کریں' : 'Explore →'}
              </span>
            </a>

            {/* Resume Download */}
            <button
              onClick={downloadResume}
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all flex items-center justify-between group text-left rtl:text-right cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">
                    {language === 'ur' ? 'مکمل انجینئرنگ پروفائل' : 'Full Profile Dossier'}
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {language === 'ur' ? 'مکمل ریزیومے ڈاؤنلوڈ کریں' : 'Download Complete Resume'}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                {language === 'ur' ? '← ڈاؤنلوڈ' : 'Download →'}
              </span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
