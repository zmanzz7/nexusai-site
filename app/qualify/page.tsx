'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const BUSINESS_TYPES = [
  'Restaurant', 'Gym/Fitness', 'Dental', 'Salon/Spa', 'Law Firm',
  'HVAC', 'Landscaping', 'Real Estate', 'Other',
];

const PAIN_POINTS = [
  'Follow-ups', 'Scheduling', 'Review Management', 'Lead Response',
  'Customer Communications', 'Reporting & Analytics', 'Data Entry',
];

type Step = 'form' | 'submitting' | 'qualified' | 'disqualified' | 'error';

function QualifyForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [step, setStep] = useState<Step>('form');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  const questions = [
    {
      id: 'business_type',
      label: 'What type of business do you run?',
      type: 'select',
      options: BUSINESS_TYPES,
    },
    {
      id: 'business_type_other',
      label: 'Please describe your business:',
      type: 'text',
      placeholder: 'e.g. Pet grooming, tutoring, photography...',
      showIf: () => answers.business_type === 'Other',
    },
    {
      id: 'employees',
      label: 'How many employees do you have?',
      type: 'radio',
      options: ['1-5', '6-20', '21-50', '50+'],
    },
    {
      id: 'monthly_revenue',
      label: "What's your approximate monthly revenue?",
      type: 'radio',
      options: ['<$5K', '$5K-$20K', '$20K-$50K', '$50K-$100K', '$100K+'],
    },
    {
      id: 'manual_hours',
      label: 'How many hours per week does your team spend on manual/repetitive tasks?',
      type: 'radio',
      options: ['<5 hrs', '5-15 hrs', '15-30 hrs', '30+ hrs'],
    },
    {
      id: 'pain_points',
      label: "What's your biggest operational headache right now?",
      type: 'multiselect',
      options: PAIN_POINTS,
    },
    {
      id: 'automation_experience',
      label: 'Have you tried automating anything before?',
      type: 'radio',
      options: ['Never', 'Tried but it failed', 'Using basic tools (Zapier etc.)', 'Already have some automation'],
    },
    {
      id: 'decision_maker',
      label: 'Are you the decision maker for financial investments in your business?',
      type: 'radio',
      options: ['Yes, fully', 'Yes, jointly with a partner', 'No'],
    },
    {
      id: 'timeline',
      label: "What's your timeline for solving this problem?",
      type: 'radio',
      options: ['Just exploring', 'Within 1-3 months', 'ASAP'],
    },
    {
      id: 'budget',
      label: "What's your budget range for a custom automation solution?",
      type: 'radio',
      options: ['<$1K', '$1K-$3K', '$3K-$7K', '$7K-$15K', '$15K+'],
    },
    {
      id: 'success_vision',
      label: 'What does success look like for you in 90 days?',
      type: 'textarea',
      placeholder: 'e.g. Spending 10 fewer hours per week on follow-ups, never missing a lead...',
      required: false,
    },
  ];

  // Filter out conditional questions that shouldn't show
  const visibleQuestions = questions.filter(q => {
    if (q.showIf) return q.showIf();
    return true;
  });

  const current = visibleQuestions[currentQ];
  const isLast = currentQ === visibleQuestions.length - 1;
  const progress = Math.round(((currentQ + 1) / visibleQuestions.length) * 100);

  function handleAnswer(value: string) {
    setAnswers(prev => ({ ...prev, [current.id]: value }));
  }

  function togglePain(pain: string) {
    setSelectedPains(prev =>
      prev.includes(pain) ? prev.filter(p => p !== pain) : [...prev, pain]
    );
  }

  function canAdvance() {
    if (current.type === 'multiselect') return selectedPains.length > 0;
    if (current.required === false) return true;
    return !!answers[current.id];
  }

  async function handleNext() {
    if (current.type === 'multiselect') {
      setAnswers(prev => ({ ...prev, [current.id]: selectedPains.join(', ') }));
    }

    if (!isLast) {
      setCurrentQ(q => q + 1);
      return;
    }

    // Submit
    setStep('submitting');
    try {
      const finalAnswers = {
        ...answers,
        pain_points: selectedPains.join(', '),
      };

      const res = await fetch('/api/qualify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, answers: finalAnswers }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStep('error');
        return;
      }

      if (data.qualified) {
        // Redirect to Calendly
        window.location.href = data.calendlyUrl;
      } else {
        setStep('disqualified');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStep('error');
    }
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center p-8">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0F2240] mb-2">Invalid Link</h2>
          <p className="text-gray-500">This link is missing or invalid. Please use the link from your email.</p>
        </div>
      </div>
    );
  }

  if (step === 'submitting') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#D4920A] mx-auto mb-4" />
          <p className="text-lg text-[#0F2240] font-medium">Reviewing your answers...</p>
        </div>
      </div>
    );
  }

  if (step === 'qualified') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center max-w-md p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#0F2240] mb-3">You're a great fit!</h2>
          <p className="text-gray-600 mb-6">Redirecting you to schedule your free strategy call...</p>
          <div className="w-8 h-8 border-4 border-[#D4920A] border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  if (step === 'disqualified') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center max-w-lg p-8">
          <div className="w-20 h-20 bg-[#0F2240]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🙏</span>
          </div>
          <h2 className="text-3xl font-bold text-[#0F2240] mb-4">Thank you for your interest</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Unfortunately, we're not able to take on your request at this time. We appreciate you taking the time to complete the questionnaire.
          </p>
          <p className="text-gray-500">
            We're selective about who we work with to ensure we can deliver exceptional results for every client. Please check back with us at a later time — we'd love to connect when the fit is right.
          </p>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a href="/" className="text-[#D4920A] font-semibold hover:underline">← Back to FlowAI</a>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center max-w-md p-8">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0F2240] mb-2">Something went wrong</h2>
          <p className="text-gray-500 mb-6">{errorMsg}</p>
          <button
            onClick={() => setStep('form')}
            className="bg-[#D4920A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B87F09]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      {/* Header */}
      <header className="bg-[#0F2240] px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-white font-bold text-xl">FlowAI</span>
          <span className="text-white/60 text-sm">{currentQ + 1} of {visibleQuestions.length}</span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="h-1.5 bg-gray-200">
            <div
              className="h-full bg-[#D4920A] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-sm font-semibold text-[#D4920A] uppercase tracking-wider mb-3">
              Question {currentQ + 1}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2240] mb-8 leading-snug">
              {current.label}
            </h2>

            {/* Select */}
            {current.type === 'select' && (
              <select
                value={answers[current.id] || ''}
                onChange={e => handleAnswer(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-[#D4920A] focus:outline-none bg-white"
              >
                <option value="">Select one...</option>
                {current.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}

            {/* Text input */}
            {current.type === 'text' && (
              <input
                type="text"
                value={answers[current.id] || ''}
                onChange={e => handleAnswer(e.target.value)}
                placeholder={current.placeholder}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-[#D4920A] focus:outline-none"
              />
            )}

            {/* Radio */}
            {current.type === 'radio' && (
              <div className="space-y-3">
                {current.options?.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-lg transition-all ${
                      answers[current.id] === opt
                        ? 'border-[#D4920A] bg-[#D4920A]/10 text-[#0F2240]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Multiselect */}
            {current.type === 'multiselect' && (
              <div className="grid grid-cols-2 gap-3">
                {current.options?.map(opt => (
                  <button
                    key={opt}
                    onClick={() => togglePain(opt)}
                    className={`text-left px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                      selectedPains.includes(opt)
                        ? 'border-[#D4920A] bg-[#D4920A]/10 text-[#0F2240]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Textarea */}
            {current.type === 'textarea' && (
              <textarea
                value={answers[current.id] || ''}
                onChange={e => handleAnswer(e.target.value)}
                placeholder={current.placeholder}
                rows={4}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:border-[#D4920A] focus:outline-none resize-none"
              />
            )}

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setCurrentQ(q => Math.max(0, q - 1))}
                disabled={currentQ === 0}
                className="text-gray-400 hover:text-gray-600 disabled:opacity-0 font-medium"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canAdvance()}
                className="bg-[#0F2240] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#0F2240]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {isLast ? 'Submit →' : 'Next →'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function QualifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <Loader2 className="w-12 h-12 animate-spin text-[#D4920A]" />
      </div>
    }>
      <QualifyForm />
    </Suspense>
  );
}
