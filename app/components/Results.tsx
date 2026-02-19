export default function Results() {
  const testimonials = [
    {
      name: 'Adam Pagas',
      business: 'CEO, Grounded Law Group',
      quote: 'The automation Zach built saved us 12 hours a week. It paid for itself in the first month.',
      metric: '12 hrs/week saved',
      image: '/images/testimonial-1.jpg',
      rating: 5
    },
    {
      name: 'Maria Santos',
      business: 'Owner, Luxe Beauty Salon',
      quote: 'No more missed appointments or forgotten follow-ups. Everything just runs now.',
      metric: '40% more bookings',
      image: '/images/testimonial-2.jpg',
      rating: 5
    },
    {
      name: 'Chris Thompson',
      business: 'Founder, Peak Performance Gym',
      quote: 'Our review score went from 4.2 to 4.8 in just two months. Game changer.',
      metric: '4.8★ rating achieved',
      image: '/images/testimonial-3.jpg',
      rating: 5
    }
  ];

  return (
    <section id="results" className="bg-white py-20">
      <div className="container">
        <p className="eyebrow text-center">CLIENT RESULTS</p>
        <h2 className="h2 text-center text-[#0F2240] mb-12">
          Real businesses. Real numbers.
        </h2>

        <div className="bg-[#0F2240] rounded-2xl p-8 mb-12">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#D4920A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white text-xl italic mb-4">
            "The automation Zach built saved us 12 hours a week. It paid for itself in the first month."
          </p>
          <div>
            <p className="text-white font-semibold">Adam Pagas</p>
            <p className="text-gray-400 text-sm">CEO, Grounded Law Group</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden card-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4920A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="mb-3">
                  <p className="font-semibold text-[#0F2240]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
                <p className="text-[#D4920A] font-bold">{testimonial.metric}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4">
            Get Results Like These →
          </button>
        </div>
      </div>
    </section>
  );
}