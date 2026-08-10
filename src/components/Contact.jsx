import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Client-side simulation ready for EmailJS / Formspree / custom backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            I'm always interested in discussing software projects, development opportunities, and ideas worth building.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                Direct Contact
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you have a question, job opportunity, or just want to connect, feel free to reach out via email or social platforms.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={portfolioData.personal.social.email}
                  className="flex items-center space-x-4 p-4 rounded-2xl glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Me</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      ujwalyadav.dev@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">LinkedIn</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl glass-panel border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">GitHub</span>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      Explore Repositories
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 text-xs text-slate-400 flex items-center space-x-2">
              <Sparkles size={16} className="text-indigo-400 shrink-0" />
              <span>Available for Full-Time Software Engineering & Development Roles.</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-100 mb-6 tracking-tight">
                Send a Message
              </h3>

              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-center space-x-3.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle size={18} className="shrink-0 text-rose-400" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-slate-100 text-sm focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-slate-100 text-sm focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Ujwal, I'd like to talk about a full-stack project..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-slate-100 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
