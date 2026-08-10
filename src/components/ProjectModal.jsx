import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, AlertCircle, Lightbulb, Rocket, Network } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-panel border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto z-10 bg-[#0d0e14]/95 text-slate-100"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-[#0d0e14]/95 border-b border-slate-800 flex items-center justify-between backdrop-blur-md">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Tagline & Links Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-slate-300 font-medium text-sm sm:text-base">
                {project.tagline}
              </p>
              
              <div className="flex items-center space-x-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-md shadow-indigo-600/30 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Flow (If Available) */}
            {project.architectureDiagram && (
              <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/30 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 uppercase">
                  <Network size={14} />
                  <span>Microservice Architecture Flow</span>
                </div>
                <div className="font-mono text-xs text-indigo-200 bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-center">
                  {project.architectureDiagram}
                </div>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                <div className="flex items-center space-x-2 text-rose-400 font-semibold text-sm">
                  <AlertCircle size={18} />
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                  <Lightbulb size={18} />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-tight flex items-center space-x-2">
                <Cpu size={16} className="text-indigo-400" />
                <span>Key Features Implemented</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 size={15} className="text-indigo-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Breakdown */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white tracking-tight">
                System Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details.architecture}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white tracking-tight">
                Technical Challenges & Optimization
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details.challenges}
              </p>
            </div>

            {/* Future Roadmap */}
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-purple-400 font-semibold text-sm">
                <Rocket size={16} />
                <span>Future Improvements & Roadmap</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details.futureImprovements}
              </p>
            </div>

          </div>

          {/* Footer Close Button */}
          <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
