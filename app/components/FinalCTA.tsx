"use client";
import { scrollToElement } from '../lib/scroll';
import { Button } from './ui/button';

export function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta-bg.jpg"
          alt="Business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2240] opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Ready to get your time back?
        </h2>
        <p className="text-2xl mb-8 text-white/90">
          30 minutes. Free. No pitch.
        </p>
        <Button
          onClick={() => scrollToElement('hero-form')}
          className="px-12 py-8 rounded-lg font-bold text-xl transition-all hover:scale-105 mb-6"
          style={{ backgroundColor: '#D4920A', color: 'white' }}
        >
          CLAIM MY FREE AUDIT →
        </Button>
        <div className="mt-6">
          <a
            href="https://calendly.com/zaronwald/ai-automation-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline hover:text-white transition-colors"
          >
            Or book a 15-min call →
          </a>
        </div>
      </div>
    </section>
  );
}
