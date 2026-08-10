import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, GitFork, Star, Terminal } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  return (
    <section className="py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl"
        >
          {/* Background Glow Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center space-x-2 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 mb-6">
            <Github size={28} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Explore My Code
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            I believe the best way to understand a developer is to look at what they build.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-sm shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Github size={18} />
              <span>View GitHub Profile</span>
              <ExternalLink size={15} />
            </a>

            <div className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl glass-panel border border-slate-800 text-slate-400 text-xs font-mono">
              <Terminal size={14} className="text-indigo-400" />
              <span>github.com/ujwal4262</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
