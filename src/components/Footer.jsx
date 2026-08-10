import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, FileText, ExternalLink, Code2, Sparkles, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-slate-900 text-slate-400 text-sm relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 space-y-12">
        
        {/* Top Header / Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-800/80">
          
          <div className="lg:col-span-6 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                {portfolioData.personal.initials}
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                {portfolioData.personal.name}
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Computer Science &amp; Engineering graduate passionate about building full-stack web applications, mobile software, scalable APIs, and intuitive UI/UX design systems.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center lg:justify-end gap-3">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-medium transition-colors"
            >
              <Github size={16} />
              <span>github.com/ujwal4262</span>
              <ExternalLink size={13} className="text-slate-500" />
            </a>

            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-medium transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.social.email}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 text-xs font-medium transition-colors"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </a>
          </div>

        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Me &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-400 hover:text-white transition-colors">
                  Technical Toolkit
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-400 hover:text-white transition-colors">
                  Development Track
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-slate-400 hover:text-white transition-colors">
                  Education &amp; Credentials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Featured Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
              Featured Work
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Budget Tracking App
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Clothes Shopping Store
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  AI Career Assistant
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Heart Disease Predictor
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Figma Design System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Technologies */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Core Tech Stack
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li className="text-slate-400">React.js &amp; React Native</li>
              <li className="text-slate-400">Node.js &amp; Express.js</li>
              <li className="text-slate-400">Python &amp; Flask ML</li>
              <li className="text-slate-400">MongoDB &amp; MySQL</li>
              <li className="text-slate-400">Figma UI/UX Prototyping</li>
              <li className="text-slate-400">Tailwind CSS &amp; Framer Motion</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
              Connect
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="https://github.com/ujwal4262"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github size={15} />
                <span>ujwal4262</span>
              </a>

              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={15} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={portfolioData.personal.social.email}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={15} />
                <span>ujwalyadav.dev@gmail.com</span>
              </a>

              <a
                href={portfolioData.personal.social.resume}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 text-xs font-semibold transition-colors mt-2"
              >
                <FileText size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; 2026 {portfolioData.personal.name}. All rights reserved.
          </p>

          <p className="flex items-center space-x-1">
            <span>Built with React.js &amp; JavaScript</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
