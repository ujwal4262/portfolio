import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden group"
          >
            {/* Background Glow Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-indigo-600/20 transition-all duration-500" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Degree Info */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
                  <Award size={13} />
                  <span>{edu.qualification}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  {edu.degree}
                </h3>

                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center space-x-2 font-semibold text-slate-200">
                    <GraduationCap size={18} className="text-indigo-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1">
                      <MapPin size={13} className="text-slate-500" />
                      <span>{edu.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={13} className="text-slate-500" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-800">
                  Rigorous academic curriculum covering software lifecycle principles, algorithmic analysis, network architectures, and modern web application development.
                </p>
              </div>

              {/* Right Column: Coursework Tags */}
              <div className="md:col-span-5 space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
                <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  <BookOpen size={14} />
                  <span>Relevant Coursework & Studies</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
