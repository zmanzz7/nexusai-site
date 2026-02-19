export default function Solution() {
  const solutions = [
    {
      icon: '📞',
      title: 'Customer Responses',
      description: '24/7 instant replies to every customer question, no waiting.'
    },
    {
      icon: '⭐',
      title: 'Review Management',
      description: 'Auto-request reviews after appointments and respond professionally.'
    },
    {
      icon: '📧',
      title: 'Lead Follow-Up',
      description: 'Contact every lead within 60 seconds, never miss another opportunity.'
    },
    {
      icon: '📅',
      title: 'Scheduling',
      description: 'Self-booking for customers with automatic reminders sent.'
    },
    {
      icon: '💬',
      title: 'Re-engagement',
      description: 'Win back dormant customers with personalized outreach campaigns.'
    },
    {
      icon: '📊',
      title: 'Reporting',
      description: 'Auto-compiled weekly reports delivered straight to your inbox.'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container">
        <p className="eyebrow text-center">THE SOLUTION</p>
        <h2 className="h2 text-center text-[#0F2240] mb-12">
          Everything on autopilot.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start">
              <div className="w-12 h-12 bg-[#D4920A]/10 rounded-lg flex items-center justify-center text-xl mr-4 flex-shrink-0">
                {solution.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#0F2240] mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4">
            See What I'd Automate →
          </button>
        </div>
      </div>
    </section>
  );
}