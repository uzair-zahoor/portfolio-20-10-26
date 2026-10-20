'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { ChatMessage } from '@/types/portfolio';
import { personalInfo } from '@/data/portfolioData';

interface AiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiModal({ isOpen, onClose }: AiModalProps) {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial',
      sender: 'bot',
      text: `Hi! I'm Uzair's AI representative. Feel free to ask about his engineering experience at Pixako Technologies, Allotrac, multi-tenant GraphQL architectures, or contact details!`
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || chatInput).trim();
    if (!query || isTyping) return;

    const userMsgId = Date.now().toString();
    setMessages((prev) => [...prev, { id: userMsgId, sender: 'user', text: query }]);
    if (!textToSend) setChatInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query })
      });

      if (!res.ok) throw new Error('API response failed');

      const data = await res.json();
      const botText = data.reply || `I'm here to help with questions about Uzair's engineering work. Feel free to email him directly at ${personalInfo.email}.`;

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', text: botText }
      ]);
    } catch (err) {
      console.error('Chat request error:', err);
      // Seamless intelligent client-side fallback
      let fallbackText = `Uzair is a Software Engineer specializing in Next.js, GraphQL, and multi-tenant SaaS systems. Feel free to reach out to him directly at ${personalInfo.email}!`;
      const q = query.toLowerCase();
      if (q.includes('allotrac') || q.includes('pixako')) {
        fallbackText = `At Pixako Technologies, Uzair is a core engineer on Allotrac—a high-throughput multi-tenant transport management SaaS platform. He engineered multi-tenant isolation schemas, GraphQL subscriptions, WebSockets with Redis Pub/Sub, and Xero API integrations.`;
      } else if (q.includes('skill') || q.includes('stack')) {
        fallbackText = `Uzair's core stack includes Next.js, React.js, TypeScript, Node.js, GraphQL (Apollo Server), DataLoader, MongoDB, Redis Pub/Sub, and AG Grid.`;
      } else if (q.includes('contact') || q.includes('email') || q.includes('phone')) {
        fallbackText = `You can email Uzair at ${personalInfo.email} or call +92 311 5762092. LinkedIn: ${personalInfo.linkedin}`;
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'bot', text: fallbackText }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickPrompts = [
    { label: 'Pixako & Allotrac', prompt: "Tell me about Uzair's work at Pixako Technologies" },
    { label: 'Technical Skills', prompt: 'What are his primary Next.js & backend technical skills?' },
    { label: 'Architecture Breakdown', prompt: "Tell me about Allotrac's multi-tenant architecture" },
    { label: 'Contact Info', prompt: 'How can I contact Uzair?' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="backdrop-blur-xl bg-slate-900 border border-purple-500/30 max-w-xl w-full h-[620px] rounded-3xl flex flex-col overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">{personalInfo.name}&apos;s AI Assistant</h3>
              <p className="text-[11px] text-purple-300 font-mono">Next.js & Gemini API</p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-ai-modal-btn"
            aria-label="Close AI assistant"
            className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm font-sans">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800/80 border border-white/10 text-slate-200'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/10 text-slate-400 italic text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></span>
                <span>Thinking...</span>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 border-t border-white/5 bg-slate-950/50 flex gap-2 overflow-x-auto text-[11px] no-scrollbar">
          {quickPrompts.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(item.prompt)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white whitespace-nowrap transition-colors active:scale-95"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-white/10 bg-slate-950/90 flex gap-2">
          <input
            type="text"
            id="ai-chat-input"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask anything about Uzair's Next.js & GraphQL experience..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={() => handleSendMessage()}
            id="ai-send-message-btn"
            aria-label="Send message"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center transition-all shadow-md active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
