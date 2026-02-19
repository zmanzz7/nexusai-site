import Image from 'next/image';

export default function Founder() {
  return (
    <section className="bg-[#F5F0E8] py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#0F2240] rounded-2xl p-4 flex items-center justify-center">
            <Image
              src="/images/zach-headshot.jpg"
              alt="Zach Aronwald"
              width={500}
              height={600}
              className="rounded-xl"
            />
          </div>

          <div>
            <p className="eyebrow">THE PERSON BEHIND FLOWAI</p>
            <h2 className="h2 text-[#0F2240] mb-6">
              Hi, I'm Zach.
            </h2>
            <p className="text-gray-700 mb-6">
              I build systems that handle the repetitive stuff permanently. Not demos. Systems that work.
            </p>
            <p className="text-gray-700 mb-6">
              After years of seeing small businesses struggle with the same time-consuming tasks, I decided to do something about it. I don't sell templates or one-size-fits-all solutions. Every business I work with gets a custom-built system designed specifically for their unique needs.
            </p>
            <div className="border-l-4 border-[#D4920A] pl-6 mb-8">
              <p className="text-lg font-semibold text-[#0F2240] italic">
                "Every business gets a custom system. Because yours isn't a template."
              </p>
            </div>
            <button className="text-[#D4920A] font-semibold hover:underline">
              See how I work →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}