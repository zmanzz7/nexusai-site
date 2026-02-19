"use client";
import { scrollToElement } from '../lib/scroll';
import { Button } from './ui/button';

export function FounderSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0" style={{ backgroundColor: '#0F2240', opacity: 0.05 }}></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="/images/zach-headshot.jpg"
              alt="Zach Aronwald"
              className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="uppercase tracking-wider font-semibold text-sm" style={{ color: '#D4920A' }}>
              THE PERSON BEHIND FLOWAI
            </div>
            <h2 className="text-5xl font-bold" style={{ color: '#0F2240' }}>
              Hi, I'm Zach.
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: '#1A1A2E' }}>
              I build systems that handle the repetitive stuff permanently. Not demos. Systems that work.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#1A1A2E' }}>
              After years of seeing small businesses struggle with the same time-consuming tasks, I decided to do something about it. I don't sell templates or one-size-fits-all solutions. Every business I work with gets a custom-built system designed specifically for their unique needs.
            </p>
            <div className="border-l-4 pl-6 py-4 my-8" style={{ borderColor: '#D4920A' }}>
              <p className="text-2xl font-bold italic" style={{ color: '#0F2240' }}>
                "Every business gets a custom system. Because yours isn't a template."
              </p>
            </div>
            <Button
              onClick={() => scrollToElement('hero-form')}
              className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#D4920A', color: 'white' }}
            >
              See how I work →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
