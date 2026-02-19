"use client";
export function TrustStrip() {
  return (
    <section className="bg-white py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold" style={{ color: '#0F2240' }}>
            500+ Hours saved this month.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="text-center">
            <p className="text-4xl font-bold" style={{ color: '#D4920A' }}>80%</p>
            <p className="text-sm mt-2" style={{ color: '#1A1A2E' }}>less admin</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold" style={{ color: '#D4920A' }}>15 hrs</p>
            <p className="text-sm mt-2" style={{ color: '#1A1A2E' }}>saved per week</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold" style={{ color: '#D4920A' }}>30-day</p>
            <p className="text-sm mt-2" style={{ color: '#1A1A2E' }}>ROI</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold" style={{ color: '#D4920A' }}>100%</p>
            <p className="text-sm mt-2" style={{ color: '#1A1A2E' }}>custom</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap opacity-40">
          <div className="text-sm font-semibold" style={{ color: '#1A1A2E' }}>AS SEEN IN</div>
          <div className="text-xs font-medium tracking-wider" style={{ color: '#1A1A2E' }}>ENTREPRENEUR</div>
          <div className="text-xs font-medium tracking-wider" style={{ color: '#1A1A2E' }}>BUSINESS INSIDER</div>
          <div className="text-xs font-medium tracking-wider" style={{ color: '#1A1A2E' }}>FORBES</div>
          <div className="text-xs font-medium tracking-wider" style={{ color: '#1A1A2E' }}>TECH CRUNCH</div>
        </div>
      </div>
    </section>
  );
}
