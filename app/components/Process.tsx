export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Free Audit',
      description: 'We map every time-costing task in your business. Zero commitment.',
      icon: '🔍'
    },
    {
      number: '2',
      title: 'Custom Build (2-3 weeks)',
      description: 'I build your custom AI system. Not a template. Built for your business.',
      icon: '🔧'
    },
    {
      number: '3',
      title: 'Runs Forever',
      description: '24/7 automation with zero daily effort from you or your team.',
      icon: '✅'
    }
  ];

  return (
    <section id="process" className="bg-[#F5F0E8] py-20">
      <div className="container">
        <p className="eyebrow text-center">HOW IT WORKS</p>
        <h2 className="h2 text-center text-[#0F2240] mb-16">
          Automated in 3 steps.
        </h2>

        <div className="relative">
          <div className="absolute top-20 left-1/4 right-1/4 h-0.5 bg-[#D4920A] hidden lg:block"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex justify-center mb-4">
                  <div className="text-4xl">{step.icon}</div>
                </div>
                <div className="w-12 h-12 bg-[#D4920A] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#0F2240] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Start With a Free Audit →
          </button>
        </div>
      </div>
    </section>
  );
}