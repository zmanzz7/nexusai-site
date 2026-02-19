"use client";
import { scrollToElement } from '../lib/scroll';
import { useState } from 'react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

export function ROICalculator() {
  const [industry, setIndustry] = useState('restaurant');
  const [hours, setHours] = useState(15);

  const industries = [
    { value: 'restaurant', label: 'Restaurant', hourlyValue: 35 },
    { value: 'gym', label: 'Gym/Fitness', hourlyValue: 40 },
    { value: 'dental', label: 'Dental', hourlyValue: 75 },
    { value: 'salon', label: 'Salon/Spa', hourlyValue: 30 },
    { value: 'law', label: 'Law Firm', hourlyValue: 150 },
    { value: 'hvac', label: 'HVAC', hourlyValue: 45 },
    { value: 'landscaping', label: 'Landscaping', hourlyValue: 35 },
    { value: 'realestate', label: 'Real Estate', hourlyValue: 50 },
  ];

  const selectedIndustry = industries.find(i => i.value === industry) || industries[0];
  const yearlyLoss = Math.round(hours * selectedIndustry.hourlyValue * 52);
  const weeksToROI = Math.ceil(3000 / (hours * selectedIndustry.hourlyValue));

  return (
    <section className="py-24" style={{ backgroundColor: '#0F2240' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          What is this costing you?
        </h2>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-8">
            {/* Industry Selector */}
            <div>
              <label className="block text-lg font-semibold mb-4" style={{ color: '#0F2240' }}>
                Your Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-4 border-2 rounded-lg text-lg"
                style={{ borderColor: '#D4920A', color: '#1A1A2E' }}
              >
                {industries.map((ind) => (
                  <option key={ind.value} value={ind.value}>
                    {ind.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Hours Slider */}
            <div>
              <label className="block text-lg font-semibold mb-4" style={{ color: '#0F2240' }}>
                Hours spent on manual tasks per week: <span style={{ color: '#D4920A' }}>{hours}</span>
              </label>
              <Slider
                value={[hours]}
                onValueChange={(value) => setHours(value[0])}
                min={1}
                max={40}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm mt-2" style={{ color: '#1A1A2E' }}>
                <span>1 hour</span>
                <span>40 hours</span>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-[#0F2240] to-[#1a3454] rounded-xl p-8 text-white">
              <p className="text-xl mb-4">You're losing</p>
              <p className="text-5xl font-bold mb-6" style={{ color: '#D4920A' }}>
                ${yearlyLoss.toLocaleString()}/year
              </p>
              <p className="text-lg mb-2">FlowAI pays for itself in</p>
              <p className="text-3xl font-bold" style={{ color: '#D4920A' }}>
                {weeksToROI} weeks
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={() => scrollToElement('hero-form')}
                className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105 w-full md:w-auto"
                style={{ backgroundColor: '#D4920A', color: 'white' }}
              >
                Get My Custom Calculation →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
