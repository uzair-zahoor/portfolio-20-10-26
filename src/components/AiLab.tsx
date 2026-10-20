'use client';

import React from 'react';
import { Bot, Sparkles, CheckCircle2, Terminal } from 'lucide-react';

interface AiLabProps {
  onOpenAiModal: () => void;
}

export default function AiLab({ onOpenAiModal }: AiLabProps) {
  return (
    <section id="ai-lab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="backdrop-blur-xl bg-gradient-to-b from-amber-500/10 via-slate-900/90 to-slate-950 rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden shadow-2xl">
        
        {/* Ambient Amber Glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              <Bot className="w-4 h-4" /> AI Systems Engineering
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              AI Systems & Autonomous Workflows
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Beyond full-stack web applications, I actively research and build <strong className="text-white">AI Integrations</strong>, <strong className="text-white">RAG Vector Workflows</strong>, and <strong className="text-white">LLM Agent Tools</strong> in Next.js environments to automate intelligent business workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 text-amber-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>RAG Vector Search</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 text-amber-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Agent Tool-Calling</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 text-amber-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gemini & LLM APIs</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 text-amber-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Prompt Architecture</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAiModal}
                id="ai-lab-chat-cta"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4" /> Chat With My AI Representative
              </button>
            </div>
          </div>

          {/* Code Snippet Display */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-950 p-5 border border-slate-800 font-mono text-xs space-y-3 shadow-2xl">
              <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  api/uzair-assistant.ts
                </span>
                <span className="text-slate-500">Next.js App Router</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto p-3.5 bg-slate-900/80 rounded-lg text-xs leading-relaxed">
                <code>
                  <span className="text-purple-400">export async function</span>{' '}
                  <span className="text-blue-400">POST</span>(req: Request) &#123;{'\n'}
                  {'  '}<span className="text-purple-400">const</span> &#123; prompt &#125; ={' '}
                  <span className="text-purple-400">await</span> req.json();{'\n'}
                  {'  '}<span className="text-purple-400">const</span> response ={' '}
                  <span className="text-purple-400">await</span> fetch(geminiUrl, &#123;{'\n'}
                  {'    '}method: <span className="text-emerald-300">&apos;POST&apos;</span>,{'\n'}
                  {'    '}body: JSON.stringify(&#123;{'\n'}
                  {'      '}contents: [&#123; parts: [&#123; text: prompt &#125;] &#125;],{'\n'}
                  {'      '}systemInstruction: &#123; text:{' '}
                  <span className="text-emerald-300">&quot;Uzair Zahoor Profile Agent&quot;</span> &#125;{'\n'}
                  {'    '}&#125;){'\n'}
                  {'  '}&#125;);{'\n'}
                  {'  '}<span className="text-purple-400">return</span> Response.json(
                  <span className="text-purple-400">await</span> response.json());{'\n'}
                  &#125;
                </code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
