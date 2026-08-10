import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Cpu,
  Database,
  Wrench,
  Brain,
  CheckCircle2,
  FileCode2,
  Coffee,
  Smartphone,
  Layout,
  Palette,
  Atom,
  Layers,
  Server,
  Network,
  KeyRound,
  ShieldCheck,
  DatabaseZap,
  Flame,
  HardDrive,
  GitBranch
} from 'lucide-react';
import { Github, FigmaIcon as Figma } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Coffee: <Coffee className="text-amber-400" size={18} />,
    FileCode2: <FileCode2 className="text-yellow-400" size={18} />,
    Terminal: <Terminal className="text-blue-400" size={18} />,
    Smartphone: <Smartphone className="text-purple-400" size={18} />,
    Layout: <Layout className="text-orange-400" size={18} />,
    Palette: <Palette className="text-sky-400" size={18} />,
    Atom: <Atom className="text-cyan-400" size={18} />,
    Layers: <Layers className="text-teal-400" size={18} />,
    Server: <Server className="text-emerald-400" size={18} />,
    Cpu: <Cpu className="text-indigo-400" size={18} />,
    Network: <Network className="text-purple-400" size={18} />,
    KeyRound: <KeyRound className="text-amber-400" size={18} />,
    ShieldCheck: <ShieldCheck className="text-emerald-400" size={18} />,
    Database: <Database className="text-emerald-400" size={18} />,
    DatabaseZap: <DatabaseZap className="text-blue-400" size={18} />,
    Flame: <Flame className="text-amber-500" size={18} />,
    HardDrive: <HardDrive className="text-slate-400" size={18} />,
    GitBranch: <GitBranch className="text-orange-500" size={18} />,
    Github: <Github className="text-slate-200" size={18} />,
    Figma: <Figma className="text-pink-400" size={18} />,
    Code: <Code className="text-blue-400" size={18} />
  };

  const categories = [
    { id: 'languages', title: 'Programming Languages', icon: <Code size={18} />, items: portfolioData.skills.programming },
    { id: 'frontend', title: 'Frontend', icon: <Atom size={18} />, items: portfolioData.skills.frontend },
    { id: 'backend', title: 'Backend', icon: <Server size={18} />, items: portfolioData.skills.backend },
    { id: 'databases', title: 'Databases', icon: <Database size={18} />, items: portfolioData.skills.databases },
    { id: 'tools', title: 'Tools & IDEs', icon: <Wrench size={18} />, items: portfolioData.skills.tools }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern tools, languages, and frameworks I use to bring software products to life.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-indigo-400 border border-slate-800 group-hover:bg-indigo-500/10 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium hover:border-indigo-500/40 hover:text-white hover:bg-slate-800/80 hover:scale-[1.03] transition-all duration-200"
                    >
                      {tech.icon && iconMap[tech.icon]}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Development Concepts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 md:col-span-2 lg:col-span-1 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-900 text-purple-400 border border-slate-800 group-hover:bg-purple-500/10 transition-colors">
                  <Brain size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                  Development Concepts
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.concepts.map((concept) => (
                  <div
                    key={concept.name}
                    className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium hover:bg-indigo-500/20 transition-colors"
                  >
                    <CheckCircle2 size={13} className="text-indigo-400 shrink-0" />
                    <span>{concept.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
