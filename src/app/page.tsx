'use client';

import React, { useState } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import AiLab from '@/components/AiLab';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import AiModal from '@/components/AiModal';

export default function Home() {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Interactive Three.js particle canvas background */}
      <ThreeBackground />

      {/* Fixed Navigation Header */}
      <Navbar onOpenAiModal={() => setAiModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-28">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(id) => setActiveProjectModal(id)} />
        <AiLab onOpenAiModal={() => setAiModalOpen(true)} />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        projectId={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />

      {/* Interactive AI Assistant Modal */}
      <AiModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />
    </div>
  );
}
