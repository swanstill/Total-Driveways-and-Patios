const areas = [
  "Barnsley",
  "Sheffield",
  "Rotherham",
  "Doncaster",
  "Wakefield",
  "Leeds",
  "Huddersfield",
  "Chesterfield",
];

export default function Coverage() {
  return (
    <section className="!bg-white">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Coverage area</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Covering Barnsley and surrounding areas<span className="dot">.</span>
          </h2>
          <p>Total Driveways and Patios serves homeowners across Barnsley and selected surrounding locations within a 40-mile radius. If you&apos;re near the edge of our usual area, get in touch — we&apos;ll confirm availability based on your project.</p>
          <div className="flex flex-wrap gap-[10px] my-[22px] mb-[26px]">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-border px-4 py-2 rounded-full text-[13.5px] font-semibold text-navy"
              >
                {area}
              </span>
            ))}
          </div>
          <a href="#quote" className="btn btn-primary">
            Check my postcode
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="bg-white rounded-[20px] shadow-card p-8">
          <svg viewBox="0 0 320 260" width="100%" height="100%">
            <rect width="320" height="260" rx="16" fill="#F6F3EC" />
            <path d="M60 80 L160 50 L240 70 L280 110 L260 180 L180 210 L110 190 L50 140 Z" fill="#E7E2D6" stroke="#C79A3C" strokeWidth="2" strokeDasharray="6 5" />
            <circle cx="160" cy="130" r="7" fill="#C79A3C" />
            <circle cx="160" cy="130" r="14" fill="none" stroke="#C79A3C" strokeWidth="2" opacity="0.5" />
            <circle cx="120" cy="90" r="4" fill="#162447" />
            <circle cx="210" cy="110" r="4" fill="#162447" />
            <circle cx="150" cy="170" r="4" fill="#162447" />
            <circle cx="200" cy="160" r="4" fill="#162447" />
          </svg>
        </div>
      </div>
    </section>
  );
}
