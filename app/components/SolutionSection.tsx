"use client";
import { scrollToElement } from '../lib/scroll';
import { MessageCircle, Star, Zap, Calendar, RefreshCw, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

export function SolutionSection() {
  const solutions = [
    {
      icon: MessageCircle,
      title: 'Customer Responses',
      description: '24/7 instant replies to every customer question, no waiting.',
    },
    {
      icon: Star,
      title: 'Review Management',
      description: 'Auto-request reviews after appointments and respond professionally.',
    },
    {
      icon: Zap,
      title: 'Lead Follow-Up',
      description: 'Contact every lead within 60 seconds. Never lose another opportunity.',
    },
    {
      icon: Calendar,
      title: 'Scheduling',
      description: 'Self-booking for customers with automatic reminders sent.',
    },
    {
      icon: RefreshCw,
      title: 'Re-engagement',
      description: 'Win back dormant customers with personalized outreach campaigns.',
    },
    {
      icon: BarChart3,
      title: 'Reporting',
      description: 'Auto-compiled weekly reports delivered straight to your inbox.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="uppercase tracking-wider font-semibold text-sm" style={{ color: '#D4920A' }}>
            THE SOLUTION
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#0F2240' }}>
          Everything on autopilot.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className="mb-6 inline-block p-4 rounded-lg" style={{ backgroundColor: '#D4920A20' }}>
                <solution.icon className="w-8 h-8" style={{ color: '#D4920A' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0F2240' }}>
                {solution.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#1A1A2E' }}>
                {solution.description}
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
            See What I'd Automate →
          </Button>
        </div>
      </div>
    </section>
  );
}
