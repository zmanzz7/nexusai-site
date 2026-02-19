"use client";
import { scrollToElement } from '../lib/scroll';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-bold text-2xl tracking-tight" style={{ color: '#0F2240' }}>
            FlowAI
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToElement('services')} className="text-[#1A1A2E] hover:text-[#D4920A] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToElement('results')} className="text-[#1A1A2E] hover:text-[#D4920A] transition-colors">
              Results
            </button>
            <button onClick={() => scrollToElement('process')} className="text-[#1A1A2E] hover:text-[#D4920A] transition-colors">
              Process
            </button>
            <button onClick={() => scrollToElement('faq')} className="text-[#1A1A2E] hover:text-[#D4920A] transition-colors">
              FAQ
            </button>
          </div>
        </div>
        <Button
          onClick={() => scrollToElement('hero-form')}
          className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          style={{ backgroundColor: '#D4920A', color: 'white' }}
        >
          Get My Free Audit
        </Button>
      </div>
    </nav>
  );
}
