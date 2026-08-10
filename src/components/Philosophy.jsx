import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Code, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Philosophy() {
  const stepIcons = [
    <Lightbulb size={24} className="text-amber-400" />,
    <Compass size={24} className="text-indigo-400" />,
    <Code size={24} className="text-emerald-400" />,
    <RefreshCw size={24} className="text-purple-400" />
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Development Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            How I Build
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A structured, disciplined approach to turning abstract software problems into working systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline (Horizontal Desktop / Vertical Mobile) */}
        <div className="relative">
          
          {/* Connecting Line Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-indigo-500/20 -translate-y-6 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.philosophy.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-indigo-500/40 group-hover:text-indigo-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                      {stepIcons[index]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>STAGE {item.step}</span>
                  <span className="text-indigo-400">DISCIPLINE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
