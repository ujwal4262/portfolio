import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GithubSection from '../components/GithubSection';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <Contact />
    </div>
  );
}
