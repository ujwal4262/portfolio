import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Cards Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
            >
              <div className="flex items-start space-x-5">
                <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <ShieldCheck size={32} />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                      Verified
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                      <Calendar size={12} className="text-slate-500" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors tracking-tight">
                    {cert.name}
                  </h3>

                  <div className="flex items-center space-x-2 text-sm font-medium text-indigo-300">
                    <Award size={15} />
                    <span>{cert.organization}</span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm pt-1 leading-relaxed max-w-xl">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Credential Action */}
              <div className="shrink-0 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-800 hover:border-indigo-500 text-xs font-semibold transition-all duration-200 shadow-md"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
