export default function Gallery() {
  return (
    <section id="gallery" className="!bg-white">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Recent projects</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Real work, done properly<span className="dot">.</span>
          </h2>
          <p>A balanced mix of completed driveways, patios and garden transformations across Barnsley and South Yorkshire.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-[18px]">
          {/* Large item */}
          <div className="relative md:row-span-2 md:col-span-1 rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-1.jpeg" alt="Newly laid patio" className="w-full h-full min-h-[300px] md:min-h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Newly laid patio with natural stone flags and a clean, level finish.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-2.jpeg" alt="Paved walkway with steps" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Paved walkway with coordinated steps, creating a welcoming entrance to the garden.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-3.jpeg" alt="Resin patio" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Resin patio surface with a smooth, modern finish.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-4.jpeg" alt="Patio and garden landscaping" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Patio and garden transformation with new paving and planting areas.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-5.jpeg" alt="Resin-bound driveway" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Resin-bound driveway with a durable, low-maintenance finish.
            </div>
          </div>
        </div>

        <div className="text-center mt-11">
          <a href="#gallery" className="btn btn-outline">
            View full gallery
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
