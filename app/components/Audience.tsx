export default function Audience() {
  const audiences = [
    {
      icon: '🏢',
      title: 'Local Service',
      description: 'Restaurants, gyms, salons, HVAC, landscaping businesses drowning in daily admin work.',
      link: 'Learn more →'
    },
    {
      icon: '👨‍💼',
      title: 'Professional',
      description: 'Dental practices, law firms, real estate agencies needing systems, not more staff.',
      link: 'Learn more →'
    },
    {
      icon: '📈',
      title: 'Growth-Stage',
      description: '$500K+ revenue businesses losing hours every week to manual, repetitive tasks.',
      link: 'Learn more →'
    }
  ];

  return (
    <section id="services" className="bg-[#F5F0E8] py-20">
      <div className="container">
        <h2 className="h2 text-center text-[#0F2240] mb-12">
          Built for businesses like yours.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-[#D4920A]/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F2240] mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {audience.description}
              </p>
              <button className="text-[#D4920A] font-semibold hover:underline">
                {audience.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}