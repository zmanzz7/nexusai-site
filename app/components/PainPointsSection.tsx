"use client";
import { scrollToElement } from '../lib/scroll';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function PainPointsSection() {
  const painPoints = [
    'Cold lead chasing',
    'Manual follow-ups',
    'Repetitive questions',
    'Begging for reviews',
    'Phone-tag scheduling',
    'Appointment reminders',
    'Lost inquiries',
    'Data copying',
    'Weekly reports',
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#0F2240' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Still doing this manually?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-start gap-3 border border-white/20"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
              <span className="text-white font-medium">{point}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            onClick={() => scrollToElement('hero-form')}
            className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#D4920A', color: 'white' }}
          >
            Stop Doing This Manually →
          </Button>
        </div>
      </div>
    </section>
  );
}
