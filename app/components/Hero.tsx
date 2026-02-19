'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmParams = {
        utm_source: localStorage.getItem('utm_source') || '',
        utm_medium: localStorage.getItem('utm_medium') || '',
        utm_campaign: localStorage.getItem('utm_campaign') || '',
        utm_term: localStorage.getItem('utm_term') || '',
        utm_content: localStorage.getItem('utm_content') || ''
      };

      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, ...utmParams })
      });

      if (response.ok) {
        window.location.href = 'https://calendly.com/zaronwald/ai-automation-strategy-call';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/restaurant-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          <div className="text-white">
            <p className="eyebrow">AUTOMATION FOR SMART BUSINESS</p>
            <h1 className="h1 mb-4">
              Your business shouldn't run you.
            </h1>
            <p className="h1 text-[#D4920A] italic font-bold mb-6">
              Now it won't.
            </p>
            <p className="text-xl mb-8 opacity-90">
              I build AI systems handling follow-ups, reviews, scheduling, and responses automatically. Set up once. Runs forever.
            </p>
            <button
              onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Get My Free Audit →
            </button>
            <p className="text-sm mt-4 opacity-75">
              No pitch. No obligation. 30 minutes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow" id="audit-form">
            <h3 className="text-2xl font-bold text-[#0F2240] mb-6">Get Your Free Audit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4920A] focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4920A] focus:border-transparent"
                  placeholder="you@business.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4920A] focus:border-transparent"
                  placeholder="e.g., Restaurant, Gym, Salon..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4920A] text-white py-4 rounded-lg font-semibold hover:bg-[#B87F09] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MY REQUEST →'}
              </button>

              <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Free. No spam. Ever.
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center mt-12 text-white">
          <Image
            src="/images/zach-headshot.jpg"
            alt="Zach Aronwald"
            width={64}
            height={64}
            className="rounded-full mr-3"
          />
          <p className="text-sm">Built by Zach Aronwald.</p>
        </div>
      </div>
    </section>
  );
}