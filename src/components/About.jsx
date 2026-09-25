import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, Check, Briefcase, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlightPoints = [
    'Level 2 Network & Tech Support',
    'Full-stack web development',
    'Web & mobile applications',
    'Backend systems & REST APIs',
    'Network troubleshooting & routing',
    'Relational & NoSQL databases'
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
              Passionate about creating modern, robust software & network systems.
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {portfolioData.personal.aboutIntro}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              With a strong grounding in Computer Science fundamentals and practical experience in ISP network operations, I focus on transforming complex ideas into clean, efficient code. I enjoy designing intuitive client-side interfaces while building robust server architectures, database schemas, and dependable network communications.
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

          {/* Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-3.5"
          >
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/50 transition-colors group bg-gradient-to-r from-emerald-500/5 to-transparent">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                  <Briefcase size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Current Role</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mt-0.5">Level 2 Support Engineer</h4>
                  <p className="text-xs font-semibold text-slate-300 mt-1">WebSurfer Nepal Communication System</p>
                  <div className="flex items-center space-x-1 text-xs text-slate-400 mt-1">
                    <MapPin size={12} className="text-rose-400" />
                    <span>Dhumbarahi Height, Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">Degree</span>
                  <h4 className="text-base font-bold text-slate-100 mt-0.5">Education</h4>
                  <p className="text-xs font-semibold text-slate-300 mt-1">Computer Science & Engineering</p>
                  <p className="text-xs text-slate-400 mt-1">KIIT University (2022 - 2026)</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                  <Code2 size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">Specialization</span>
                  <h4 className="text-base font-bold text-slate-100 mt-0.5">Focus</h4>
                  <p className="text-xs font-semibold text-slate-300 mt-1">Full-Stack Development</p>
                  <p className="text-xs text-slate-400 mt-1">React, Node.js, REST APIs, & Cloud Databases</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-pink-400 uppercase tracking-wider">Domains</span>
                  <h4 className="text-base font-bold text-slate-100 mt-0.5">Interests</h4>
                  <p className="text-xs font-semibold text-slate-300 mt-1">Web • Mobile • Networks • AI</p>
                  <p className="text-xs text-slate-400 mt-1">Network resilience & scalable modern applications</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
