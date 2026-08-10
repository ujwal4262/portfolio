import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Check, ArrowRight, Layers, Cpu, Sparkles, Activity } from 'lucide-react';
import { Github, FigmaIcon as Figma } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'budget-tracker':
        return <Layers className="text-emerald-400" size={24} />;
      case 'clothes-shopping':
        return <Cpu className="text-indigo-400" size={24} />;
      case 'ai-career-assistant':
        return <Sparkles className="text-purple-400" size={24} />;
      case 'heart-disease-prediction':
        return <Activity className="text-rose-400" size={24} />;
      case 'figma-uiux-design-system':
        return <Figma className="text-pink-400" size={24} />;
      default:
        return <Layers className="text-indigo-400" size={24} />;
    }
  };

  const getProjectGraphic = (id) => {
    switch (id) {
      case 'budget-tracker':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-950 p-4 font-mono text-xs text-emerald-400/90 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="text-[10px] text-emerald-300/60 uppercase">FINANCE_DASHBOARD • MONGODB</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="text-slate-400">Analytics aggregation pipeline</div>
              <div><span className="text-purple-400">const</span> totalIncome = <span className="text-emerald-300">$4,850.00</span>;</div>
              <div><span className="text-purple-400">const</span> totalExpenses = <span className="text-rose-400">$1,620.00</span>;</div>
              <div className="text-slate-400">Budget limit threshold: 70%</div>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-emerald-500/20">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[35%]" />
            </div>
          </div>
        );
      case 'clothes-shopping':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-950 p-4 font-mono text-xs text-indigo-300 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
              <span className="text-[10px] text-indigo-300/60 uppercase">E-COMMERCE • REACT + EXPRESS</span>
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-center">
                <div className="w-full h-8 rounded bg-indigo-500/10 mb-1" />
                <span className="text-[10px] text-slate-300">Apparel</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-center">
                <div className="w-full h-8 rounded bg-purple-500/10 mb-1" />
                <span className="text-[10px] text-slate-300">Footwear</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-center">
                <div className="w-full h-8 rounded bg-pink-500/10 mb-1" />
                <span className="text-[10px] text-slate-300">Cart (3)</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span>Auth: JWT</span>
              <span className="text-indigo-400 font-semibold">State: Synchronized</span>
            </div>
          </div>
        );
      case 'ai-career-assistant':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-950 p-4 font-mono text-xs text-purple-300 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
              <span className="text-[10px] text-purple-300/60 uppercase">AI NLP MICROSERVICE • FLASK</span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-200">
                &gt; "Analyze software engineering roadmap"
              </div>
              <div className="p-2 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 pl-4">
                &lt; Recommendation: React, Node.js, Systems Design
              </div>
            </div>
            <div className="text-[10px] text-purple-400/80 font-mono">
              Inter-service: Express REST &rarr; Flask Python ML
            </div>
          </div>
        );
      case 'heart-disease-prediction':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-rose-950/30 to-slate-950 p-4 font-mono text-xs text-rose-300 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
              <span className="text-[10px] text-rose-300/60 uppercase">ML MODEL • SCIKIT-LEARN</span>
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            </div>
            <div className="space-y-1 text-[11px]">
              <div>Model: <span className="text-amber-300">RandomForestClassifier</span></div>
              <div>Input features: <span className="text-slate-300">13 Clinical Indicators</span></div>
              <div>Preprocessing: <span className="text-emerald-300">StandardScaler Pipeline</span></div>
              <div className="text-emerald-400 font-semibold mt-1">Prediction: Low Risk (Confidence: 94%)</div>
            </div>
            <div className="text-[10px] text-rose-400/80 font-mono">
              Endpoint: /api/v1/predict-health
            </div>
          </div>
        );
      case 'figma-uiux-design-system':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-pink-950/30 to-slate-950 p-4 font-mono text-xs text-pink-300 flex flex-col justify-between select-none relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-pink-500/20 pb-2">
              <span className="text-[10px] text-pink-300/60 uppercase">FIGMA • PRODUCT DESIGN SYSTEM</span>
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded bg-slate-900/80 border border-pink-500/30">
                <div className="text-[10px] text-slate-400">Tokens &amp; Colors</div>
                <div className="flex space-x-1.5 mt-1">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-pink-500 inline-block" />
                </div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-purple-500/30">
                <div className="text-[10px] text-slate-400">Components</div>
                <div className="text-[11px] text-pink-300 font-semibold mt-0.5">Navbar, Cards, Inputs</div>
              </div>
            </div>
            <div className="text-[10px] text-pink-400/80 font-mono flex justify-between">
              <span>Auto-Layout: Flex &amp; Grid</span>
              <span>Handoff: Specs Ready</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Some of the things I've built while exploring software development and real-world problem solving.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl border border-slate-800 hover:border-indigo-500/40 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div>
                {/* Visual Header Schematic */}
                <div className="relative border-b border-slate-800 overflow-hidden">
                  {getProjectGraphic(project.id)}
                  
                  {/* Category Tag overlay */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md glass-panel border border-slate-700/80 text-[11px] font-mono font-medium text-slate-200">
                    {project.category}
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-indigo-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights list */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Key Features:</span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {project.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-400">
                          <Check size={12} className="text-indigo-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-3 flex flex-wrap gap-1.5 border-t border-slate-800/80">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 text-xs font-medium transition-colors"
                >
                  <Info size={14} />
                  <span>View Details</span>
                </button>

                <div className="flex items-center space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                    >
                      <span>Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
