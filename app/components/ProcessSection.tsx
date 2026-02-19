"use client";
import { scrollToElement } from '../lib/scroll';
import { Search, Wrench, Rocket } from 'lucide-react';
import { Button } from './ui/button';

export function ProcessSection() {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Free Audit',
      description: 'We map every time-costing task in your business. Zero commitment.',
    },
    {
      number: '2',
      icon: Wrench,
      title: 'Custom Build (2-3 weeks)',
      description: 'I build your custom AI system. Not a template. Built for your business.',
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Runs Forever',
      description: '24/7 automation with zero daily effort from you or your team.',
    },
  ];

  return (
    <section id="process" className="py-24" style={{ backgroundColor: '#F5F5F3' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="uppercase tracking-wider font-semibold text-sm" style={{ color: '#D4920A' }}>
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#0F2240' }}>
          Automated in 3 steps.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-1 bg-gradient-to-r from-[#D4920A] to-transparent"></div>
              )}
              
              {/* Step Number Circle */}
              <div className="relative inline-block mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: '#D4920A' }}
                >
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 inline-block p-4 rounded-lg" style={{ backgroundColor: '#D4920A20' }}>
                <step.icon className="w-8 h-8 mx-auto" style={{ color: '#D4920A' }} />
              </div>

              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F2240' }}>
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#1A1A2E' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => scrollToElement('hero-form')}
            className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#D4920A', color: 'white' }}
          >
            Start With a Free Audit →
          </Button>
        </div>
      </div>
    </section>
  );
}
