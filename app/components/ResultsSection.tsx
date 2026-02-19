"use client";
import { scrollToElement } from '../lib/scroll';
import { Star } from 'lucide-react';
import { Button } from './ui/button';

export function ResultsSection() {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzcxNDcyNDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: "The automation Zach built saved us 12 hours a week. It paid for itself in the first month.",
      author: 'Adam Dayan',
      title: 'CEO, Consumer Law Group',
      metric: '12 hrs/week saved',
    },
    {
      image: 'https://images.unsplash.com/photo-1761839256840-7780a45b85dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzYWxvbnxlbnwxfHx8fDE3NzE0NzI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: "No more missed appointments or forgotten follow-ups. Everything just runs now.",
      author: 'Maria Santos',
      title: 'Owner, Luxe Beauty Salon',
      metric: '40% more bookings',
    },
    {
      image: 'https://images.unsplash.com/photo-1766031263281-43cdaa6e624a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDcyNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: "Our review score went from 4.2 to 4.8 in just two months. Game changer.",
      author: 'Chris Thompson',
      title: 'Founder, Peak Performance Gym',
      metric: '4.8★ rating achieved',
    },
  ];

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="uppercase tracking-wider font-semibold text-sm" style={{ color: '#D4920A' }}>
            CLIENT RESULTS
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#0F2240' }}>
          Real businesses. Real numbers.
        </h2>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-[#0F2240] to-[#1a3454] rounded-xl p-12 mb-12 text-white">
          <div className="flex gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#D4920A] text-[#D4920A]" />
            ))}
          </div>
          <p className="text-3xl font-bold mb-8 leading-relaxed">
            "{testimonials[0].quote}"
          </p>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-bold text-xl">{testimonials[0].author}</p>
              <p className="text-white/80">{testimonials[0].title}</p>
            </div>
          </div>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4920A] text-[#D4920A]" />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: '#1A1A2E' }}>
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold" style={{ color: '#0F2240' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm mb-2" style={{ color: '#1A1A2E' }}>
                    {testimonial.title}
                  </p>
                  <p className="font-bold text-lg" style={{ color: '#D4920A' }}>
                    {testimonial.metric}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => scrollToElement('hero-form')}
            className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#D4920A', color: 'white' }}
          >
            Get Results Like These →
          </Button>
        </div>
      </div>
    </section>
  );
}
