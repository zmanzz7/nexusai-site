"use client";
import { ArrowRight, Store, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export function AudienceSection() {
  const audiences = [
    {
      icon: Store,
      title: 'Local Service',
      description: 'Restaurants, gyms, salons, HVAC, landscaping businesses drowning in daily admin work.',
    },
    {
      icon: Briefcase,
      title: 'Professional',
      description: 'Dental practices, law firms, real estate agencies needing systems, not more staff.',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Stage',
      description: '$500K+ revenue businesses losing hours every week to manual, repetitive tasks.',
    },
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: '#F5F5F3' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#0F2240' }}>
          Built for businesses like yours.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="mb-6 inline-block p-4 rounded-lg" style={{ backgroundColor: '#D4920A20' }}>
                <audience.icon className="w-8 h-8" style={{ color: '#D4920A' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F2240' }}>
                {audience.title}
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: '#1A1A2E' }}>
                {audience.description}
              </p>
              <button className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all" style={{ color: '#D4920A' }}>
                Learn more <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
