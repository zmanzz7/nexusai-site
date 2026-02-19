"use client";
import { scrollToElement } from '../lib/scroll';
import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: "Most systems are built and deployed within 2-3 weeks. During this time, I'll work closely with you to understand your business, map out the workflows, and build a custom AI system tailored specifically for your needs. Once it's live, it runs 24/7 with minimal maintenance.",
    },
    {
      question: 'Do I need to be technical?',
      answer: "Not at all. I handle all the technical complexity. You just need to be able to explain your current processes and what's taking up your time. I'll translate that into an automated system that works seamlessly in the background.",
    },
    {
      question: "What if it doesn't work for my business?",
      answer: "That's what the free audit is for. During the audit, we'll identify if AI automation is a good fit for your business. If I don't think I can deliver real value and time savings, I'll tell you upfront. No hard sell, no pressure.",
    },
    {
      question: 'How much does it cost?',
      answer: "Investment varies based on complexity and scope, typically ranging from $3,000-$15,000 for the initial build. Most clients see ROI within the first month through time savings alone. We'll discuss exact pricing during your free audit after I understand your specific needs.",
    },
    {
      question: 'How is this different from hiring a VA?',
      answer: "A VA costs $15-40/hour and can only work limited hours. FlowAI automation works 24/7, responds instantly, never takes time off, and becomes more valuable over time. Plus, it's a one-time investment that keeps working forever, not a recurring monthly cost.",
    },
    {
      question: 'What happens after the audit?',
      answer: "After the free 30-minute audit, you'll receive a custom automation roadmap showing exactly what I'd build for your business and the expected time/cost savings. Then you decide if you want to move forward. Zero pressure, zero obligation.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#0F2240' }}>
          Everything you're wondering.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <button
                className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 font-bold text-xl"
                style={{ color: '#0F2240' }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className="shrink-0 transition-transform duration-200"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    width: '24px',
                    height: '24px',
                    color: '#D4920A',
                  }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-lg leading-relaxed" style={{ color: '#1A1A2E' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToElement('hero-form')}
            className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#D4920A', color: 'white' }}
          >
            Still Have Questions? →
          </Button>
        </div>
      </div>
    </section>
  );
}
