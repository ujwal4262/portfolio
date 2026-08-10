import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.roles;
  const currentRole = roles[roleIndex];

  // Typing animation effect
  useEffect(() => {
    let timeout;
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, currentRole, roles]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{portfolioData.personal.smallIntro}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Computer Science Graduate &{' '}
              <span className="gradient-text block mt-1">Full-Stack Developer</span>
            </h1>

            {/* Animated Role Text */}
            <div className="flex items-center space-x-2 text-lg sm:text-xl text-slate-400 font-mono h-8">
              <span className="text-indigo-400 font-semibold">&gt;</span>
              <span>{displayText}</span>
              <span className="w-2 h-5 bg-indigo-500 inline-block animate-pulse" />
            </div>

            {/* Supporting Text */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {portfolioData.personal.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={portfolioData.personal.social.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-slate-600 text-sm font-medium transition-all duration-200"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 flex items-center space-x-4 text-slate-400 border-t border-slate-800/60 max-w-lg">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-indigo-400 hover:bg-slate-800/50 transition-colors"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg hover:text-indigo-400 hover:bg-slate-800/50 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.personal.social.email}
                className="p-2 rounded-lg hover:text-indigo-400 hover:bg-slate-800/50 transition-colors"
                title="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Code Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Code Editor Card Container */}
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/60 shadow-2xl shadow-indigo-950/40">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                  <Code2 size={13} className="text-indigo-400" />
                  <span>{portfolioData.personal.heroCodeVisual.filename}</span>
                </div>
                <div className="text-xs font-mono text-slate-600">UTF-8</div>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0a0b0e]/90 overflow-x-auto">
                <pre className="space-y-1">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-indigo-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"Ujwal Yadav"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">"Full-Stack Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">technologies:</span> [
                  </div>
                  <div className="pl-8 text-amber-300">
                    "React", "Node.js", "Python", "MongoDB"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-400">passion:</span>{' '}
                    <span className="text-emerald-300">"Building useful products"</span>
                  </div>
                  <div>&#125;;</div>
                </pre>

                {/* Editor Footer / Status */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>0 errors, 0 warnings</span>
                  </span>
                  <span>ES6 + JS</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium shadow-lg hidden sm:flex items-center space-x-1.5"
            >
              <Sparkles size={12} className="text-indigo-400" />
              <span>React</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-4 px-3 py-1.5 rounded-lg glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono font-medium shadow-lg hidden sm:flex items-center space-x-1.5"
            >
              <Terminal size={12} className="text-purple-400" />
              <span>Node.js & Python</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
