export default function PainPoints() {
  const painPoints = [
    'Cold lead chasing',
    'Manual follow-ups',
    'Repetitive questions',
    'Begging for reviews',
    'Phone-tag scheduling',
    'Appointment reminders',
    'Lost inquiries',
    'Data copying',
    'Weekly reports'
  ];

  return (
    <section className="bg-[#0F2240] py-20">
      <div className="container">
        <h2 className="h2 text-center text-white mb-12">
          Still doing this manually?
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-[#0A1829] rounded-lg p-6 flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">{point}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4">
            Stop Doing This Manually →
          </button>
        </div>
      </div>
    </section>
  );
}