import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Engineering Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Development Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on technical implementation across web architectures, APIs, databases, and algorithm design.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-500/30 sm:hidden" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot Marker */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full glass-panel border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 z-10 bg-slate-900">
                    <Briefcase size={14} />
                  </div>

                  {/* Content Card Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl group">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium">
                          {exp.type}
                        </span>
                        <div className="flex items-center space-x-1 text-xs font-mono text-slate-400">
                          <Calendar size={13} className="text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                        {exp.highlights.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                            <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
