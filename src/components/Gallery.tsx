export default function Gallery() {
  return (
    <section id="gallery" className="!bg-white">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Recent projects</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Real work, done properly<span className="dot">.</span>
          </h2>
          <p>A balanced mix of completed driveways, patios and garden transformations across Cardiff and South Wales.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] grid-rows-[1fr_1fr] gap-[18px]">
          {/* Large item */}
          <div className="relative row-span-2 col-span-2 md:col-span-1 rounded-[16px] overflow-hidden shadow-card">
            <div className="swatch-block w-full h-full min-h-[300px] md:min-h-full" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              New block-paving driveway with a contrasting charcoal border and widened entrance.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[4/3] md:aspect-auto">
            <div className="swatch-resin w-full h-full" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Resin-bound driveway in a warm aggregate blend with block edging.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[4/3] md:aspect-auto">
            <div className="swatch-patio w-full h-full" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Porcelain patio with a clean seating area and step down to the garden.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[4/3] md:aspect-auto">
            <div className="swatch-tarmac w-full h-full" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Tarmac driveway with decorative block-paving border.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[4/3] md:aspect-auto">
            <div className="swatch-landscape w-full h-full" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Full garden landscaping with new turf, beds and paths.
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
