"use client";
import { scrollToElement } from '../lib/scroll';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="py-16" style={{ backgroundColor: '#0F2240' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl mb-4 text-white">FlowAI</h3>
            <p className="text-white/80 mb-6">
              AI automation for small businesses. Built custom, runs forever.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Get weekly tips"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button
                type="submit"
                style={{ backgroundColor: '#D4920A', color: 'white' }}
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToElement('services')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('results')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('process')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement('faq')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="https://calendly.com/zaronwald/ai-automation-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2026 FlowAI by Zach Aronwald. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
