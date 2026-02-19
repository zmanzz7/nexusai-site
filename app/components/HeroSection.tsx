"use client";
import { scrollToElement } from '../lib/scroll';
import { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMsg, setSubmitMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitState('success');
        setSubmitMsg(data.message || 'Check your email for next steps!');
      } else {
        setSubmitState('error');
        setSubmitMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitState('error');
      setSubmitMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F2240] opacity-55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <div className="uppercase tracking-wider font-semibold" style={{ color: '#D4920A', fontSize: '14px' }}>
              AI AUTOMATION FOR SMALL BUSINESS
            </div>
            <h1 className="font-bold leading-tight" style={{ fontSize: '72px', lineHeight: '1.1' }}>
              Your business shouldn't run you.
            </h1>
            <h2 className="font-bold" style={{ fontSize: '48px', color: '#D4920A' }}>
              Now it won't.
            </h2>
            <p className="text-xl leading-relaxed text-white/90">
              I build AI systems handling follow-ups, reviews, scheduling, and responses automatically. Set up once. Runs forever.
            </p>
            <div className="pt-4">
              <Button
                onClick={() => scrollToElement('hero-form')}
                className="px-8 py-6 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center gap-2"
                style={{ backgroundColor: '#D4920A', color: 'white' }}
              >
                Get My Free Audit <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-sm text-white/70 mt-3">No pitch. No obligation. 30 minutes.</p>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <img
                src="/images/zach-headshot.jpg"
                alt="Zach Aronwald"
                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
              />
              <p className="text-sm text-white/90">Built by Zach Aronwald.</p>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div id="hero-form" className="bg-white rounded-xl shadow-2xl p-8">
            {submitState === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#0F2240' }}>Check your inbox!</h3>
                <p className="text-gray-600 text-lg">{submitMsg}</p>
                <p className="text-gray-400 text-sm mt-3">The link in your email will take you to a short questionnaire.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0F2240' }}>
                  Get Your Free Audit
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium" style={{ color: '#1A1A2E' }}>
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-1 w-full border-gray-300 focus:border-[#D4920A] focus:ring-[#D4920A]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium" style={{ color: '#1A1A2E' }}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 w-full border-gray-300 focus:border-[#D4920A] focus:ring-[#D4920A]"
                      placeholder="you@example.com"
                    />
                  </div>
                  {submitState === 'error' && (
                    <p className="text-red-500 text-sm">{submitMsg}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={submitState === 'loading'}
                    className="w-full py-6 rounded-lg font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ backgroundColor: '#D4920A', color: 'white' }}
                  >
                    {submitState === 'loading' ? 'Sending...' : (<>SEND MY REQUEST <ArrowRight className="w-5 h-5" /></>)}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>Free. No spam. Ever.</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
