'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: "Full setup takes 2-3 weeks. We map your processes in week 1, build in week 2, and test/refine in week 3. You'll start seeing results immediately after launch."
    },
    {
      question: 'Do I need to be technical?',
      answer: 'Not at all. I handle all the technical setup. You just tell me how you want things to work, and I build it. No coding, no complexity on your end.'
    },
    {
      question: "What if it doesn't work for my business?",
      answer: "Every business is different, which is why we start with a free audit. If automation won't help your specific situation, I'll tell you upfront. No sales pitch."
    },
    {
      question: 'How much does it cost?',
      answer: 'Investment starts at $497/month after the build. Most businesses save 10-15 hours per week, which typically covers the cost in the first week of each month.'
    },
    {
      question: 'How is this different from hiring a VA?',
      answer: 'A VA costs $2,000-4,000/month, takes sick days, needs training, and can quit. My system runs 24/7, never calls in sick, and scales infinitely without additional cost.'
    },
    {
      question: 'What happens after the audit?',
      answer: "After the audit, you'll get a custom automation plan showing exactly what I'd build for you. If you like it, we move forward. If not, you keep the plan with zero obligation."
    }
  ];

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container">
        <h2 className="h2 text-center text-[#0F2240] mb-12">
          Everything you're wondering.
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-[#0F2240]">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-[#D4920A] font-semibold hover:underline">
            Still Have Questions? →
          </button>
        </div>
      </div>
    </section>
  );
}