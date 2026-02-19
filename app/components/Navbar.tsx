'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#0F2240]">
            FlowAI
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#D4920A] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-[#D4920A] transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-[#D4920A] transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#D4920A] transition-colors"
            >
              FAQ
            </button>
          </div>

          <button
            onClick={() => scrollToSection('hero')}
            className="bg-[#D4920A] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#B87F09] transition-colors"
          >
            Get My Free Audit
          </button>
        </div>
      </div>
    </nav>
  );
}