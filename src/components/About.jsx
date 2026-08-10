import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlightPoints = [
    'Full-stack web development',
    'Web & mobile applications',
    'Backend systems & REST APIs',
    'Relational & NoSQL databases',
    'Algorithmic problem solving',
    'Modern software architecture'
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
              Passionate about creating modern, robust software systems.
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {portfolioData.personal.aboutIntro}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              With a strong grounding in Computer Science fundamentals, I focus on transforming complex ideas into clean, efficient code. I enjoy designing intuitive interfaces on the client side while building robust, reliable server architectures and database schemas.
            </p>

            {/* Core Domain Tags Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlightPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-300 font-medium p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80"
                >
                  <div className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Check size={13} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3 Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Degree</span>
                  <h4 className="text-lg font-bold text-slate-100 mt-0.5">Education</h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">Computer Science & Engineering</p>
                  <p className="text-xs text-slate-400 mt-1">KIIT University (2022 - 2026)</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                  <Code2 size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Specialization</span>
                  <h4 className="text-lg font-bold text-slate-100 mt-0.5">Focus</h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">Full-Stack Development</p>
                  <p className="text-xs text-slate-400 mt-1">React, Node.js, REST APIs, & Cloud Databases</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono text-pink-400 uppercase tracking-wider">Domains</span>
                  <h4 className="text-lg font-bold text-slate-100 mt-0.5">Interests</h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">Web • Mobile • Backend • AI</p>
                  <p className="text-xs text-slate-400 mt-1">Machine Learning microservices & scalable apps</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
