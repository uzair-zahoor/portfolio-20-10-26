'use client';

import React, { useState } from 'react';
import { 
  Network, 
  Layers, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  Play, 
  ArrowRight,
  ArrowLeft,
  Terminal,
  Activity
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ArchitectureBlueprint } from '@/types/portfolio';

export default function ArchitectureShowcase() {
  const { t, data, language, isRTL } = useLanguage();
  const [activeBlueprintId, setActiveBlueprintId] = useState<string>(data.architectureBlueprints[0].id);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationProgress, setSimulationProgress] = useState<number>(0);

  const currentBlueprint: ArchitectureBlueprint = 
    data.architectureBlueprints.find((b: ArchitectureBlueprint) => b.id === activeBlueprintId) || data.architectureBlueprints[0];

  const handleCopyCode = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(currentBlueprint.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationProgress(0);
    setActiveStep(0);

    const stepInterval = 700;
    currentBlueprint.diagramSteps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
        setSimulationProgress(((index + 1) / currentBlueprint.diagramSteps.length) * 100);
        if (index === currentBlueprint.diagramSteps.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
          }, 800);
        }
      }, (index + 1) * stepInterval);
    });
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 shadow-inner">
          <Network className="w-3.5 h-3.5" /> {t.archBadge}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t.archTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          {t.archSubtitle}
        </p>

        {/* Blueprint Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6 max-w-3xl mx-auto">
          {data.architectureBlueprints.map((bp) => {
            const isActive = bp.id === activeBlueprintId;
            return (
              <button
                key={bp.id}
                onClick={() => {
                  setActiveBlueprintId(bp.id);
                  setActiveStep(0);
                  setSimulationProgress(0);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20'
                }`}
              >
                {bp.id === 'multi-tenant-isolation' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                {bp.id === 'redis-pubsub-telemetry' && <Zap className="w-4 h-4 text-cyan-400" />}
                {bp.id === 'dataloader-n1-optimization' && <Layers className="w-4 h-4 text-purple-400" />}
                <span>{bp.title.split('Architecture')[0].split('آرکیٹیکچر')[0].split('&')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Blueprint Stage */}
      <div className="backdrop-blur-xl bg-slate-900/80 rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Blueprint Headline & Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 border-b border-white/10 pb-8">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">
              {currentBlueprint.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentBlueprint.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentBlueprint.summary}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
              >
                <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                {isSimulating 
                  ? (language === 'ur' ? 'ڈیٹا فلو کی سمیولیشن جاری ہے...' : 'Simulating Pipeline Flow...') 
                  : (language === 'ur' ? 'درخواست کے بہاؤ کی سمیولیشن چلائیں' : 'Simulate Request Flow')}
              </button>
              {isSimulating && (
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>
                    {language === 'ur' 
                      ? `مرحلہ ${activeStep + 1} از ${currentBlueprint.diagramSteps.length} کی جانچ جاری ہے...`
                      : `Evaluating step ${activeStep + 1} of ${currentBlueprint.diagramSteps.length}...`}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Benchmark Badges */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {currentBlueprint.benchmarks.map((bm, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-slate-400 font-medium">{bm.label}</div>
                  <div className="text-[11px] text-slate-500">{bm.subtext}</div>
                </div>
                <div className="text-lg font-black text-cyan-400 ml-4 rtl:ml-0 rtl:mr-4 font-mono">
                  {bm.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              {language === 'ur' ? 'انٹرایکٹو پائپ لائن فلو' : 'Interactive Pipeline Flow'}
            </h4>
            <span className="text-xs text-slate-400 font-mono">
              {language === 'ur' ? 'تفصیلات دیکھنے کے لیے کسی بھی مرحلے پر کلک کریں' : 'Click any stage to inspect details'}
            </span>
          </div>

          {/* Progress bar during simulation */}
          {isSimulating && (
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-300"
                style={{ width: `${simulationProgress}%` }}
              />
            </div>
          )}

          {/* Step Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentBlueprint.diagramSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left rtl:text-right p-5 rounded-2xl border transition-all duration-200 relative group flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500 shadow-xl shadow-blue-500/15 ring-1 ring-blue-400/40'
                      : 'bg-slate-950/60 border-white/5 hover:border-white/20 hover:bg-slate-950/90'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-300">
                        {language === 'ur' ? `مرحلہ ۰${idx + 1}` : `Step 0${idx + 1}`}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        isSelected 
                          ? 'bg-blue-500/20 border-blue-400/40 text-blue-300 font-semibold' 
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}>
                        {step.highlight}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      {isSelected ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-700" />
                      )}
                      {isSelected 
                        ? (language === 'ur' ? 'فعال مرحلہ' : 'Active Focus') 
                        : (language === 'ur' ? 'مرحلے کی تفصیل' : 'Stage Details')}
                    </span>
                    {isRTL ? (
                      <ArrowLeft className={`w-3 h-3 transition-transform ${isSelected ? '-translate-x-1 text-blue-400' : ''}`} />
                    ) : (
                      <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1 text-blue-400' : ''}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Code Implementation Preview */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl relative z-10">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/80 bg-slate-900/60 font-mono text-xs text-slate-300 force-ltr">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>{currentBlueprint.codeTitle}</span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-[11px] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">{language === 'ur' ? 'کاپی ہو گیا!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>{language === 'ur' ? 'کوڈ کاپی کریں' : 'Copy Code'}</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed bg-[#060911]/90 force-ltr">
            <code>{currentBlueprint.codeSnippet}</code>
          </pre>
        </div>

      </div>
    </section>
  );
}
