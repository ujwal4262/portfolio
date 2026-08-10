import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 glass-panel border-b shadow-lg shadow-black/5 dark:shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            {portfolioData.personal.initials}
          </div>
          <span className="font-semibold text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
            {portfolioData.personal.name}
          </span>
        </Link>

        {/* Desktop Router Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-900/40 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action Items */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolioData.personal.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-amber-400 dark:hover:text-indigo-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={portfolioData.personal.social.resume}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-indigo-400 rounded-lg"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                        : 'text-slate-300 hover:bg-slate-800/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-around">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-white text-xs py-2 px-3 rounded-lg hover:bg-slate-800"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-white text-xs py-2 px-3 rounded-lg hover:bg-slate-800"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.social.resume}
                  className="flex items-center space-x-1.5 text-indigo-400 text-xs font-semibold py-2 px-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                >
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
