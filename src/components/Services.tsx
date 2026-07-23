const services = [
  {
    title: "Block Paving",
    description:
      "A timeless, versatile choice with a wide range of colours, patterns and finishes, arranged in herringbone or bordered layouts to suit your home.",
    swatch: "swatch-block",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-navy">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Resin Driveways",
    description:
      "Smooth, permeable and low-maintenance, resin-bound surfaces combine decorative aggregate with clear resin for a comfortable, contemporary finish.",
    swatch: "swatch-resin",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-navy">
        <circle cx="6" cy="6" r="1.4" />
        <circle cx="12" cy="8" r="1.4" />
        <circle cx="18" cy="6" r="1.4" />
        <circle cx="9" cy="14" r="1.4" />
        <circle cx="15" cy="15" r="1.4" />
        <circle cx="6" cy="18" r="1.4" />
        <circle cx="18" cy="18" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Tarmac Driveways",
    description:
      "A durable, cost-effective solution installed to a high standard, ideal for larger areas or a clean, smart finish at a sensible price.",
    swatch: "swatch-tarmac",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l6-16h4l6 16M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Patios",
    description:
      "Beautifully designed patios in porcelain, sandstone or natural stone, creating the perfect space for relaxing and entertaining outdoors.",
    swatch: "swatch-patio",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z M4 10h16M10 10v10" />
      </svg>
    ),
  },
  {
    title: "Landscaping",
    description:
      "Complete landscaping solutions bringing paving, turf, fencing and planting together as one coordinated project that adds value to your property.",
    swatch: "swatch-landscape",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-navy">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9zM12 12v9M8 21h8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="!bg-white">
      <div className="wrap">
        <div className="max-w-[640px] mb-14">
          <span className="eyebrow">Our services</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Choose the right surface for your home<span className="dot">.</span>
          </h2>
          <p>Different properties, budgets and styles call for different materials. The best option isn&apos;t automatically the most expensive one — it&apos;s the surface that suits your home, your traffic, and the finish you want.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-[22px]">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-[20px] overflow-hidden shadow-card flex flex-col transition-all duration-[180ms] hover:-translate-y-[6px] hover:shadow-card-hover"
            >
              <div className={`h-[150px] relative ${s.swatch}`}>
                <div className="absolute left-5 -bottom-6 w-[52px] h-[52px] rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-[0_6px_14px_-4px_rgba(0,0,0,.2)]">
                  {s.icon}
                </div>
              </div>
              <div className="pt-[38px] px-[22px] pb-6 flex-1 flex flex-col">
                <h3 className="text-lg mb-[10px]">{s.title}</h3>
                <p className="text-[14.5px] flex-1 leading-relaxed">{s.description}</p>
                <a
                  href="#quote"
                  className="mt-4 text-gold-dark font-bold text-sm inline-flex items-center gap-[6px] group"
                >
                  Explore {s.title.toLowerCase()}{" "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-[15px] h-[15px] transition-transform duration-150 group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-11">
          <a href="#quote" className="btn btn-outline">
            View all services
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
