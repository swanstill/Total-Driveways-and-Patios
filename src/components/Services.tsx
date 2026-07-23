const services = [
  {
    title: "Block Paving",
    description:
      "A timeless, versatile choice with a wide range of colours, patterns and finishes, arranged in herringbone or bordered layouts to suit your home.",
    image: "/block-paving.jpg",
  },
  {
    title: "Resin Driveways",
    description:
      "Smooth, permeable and low-maintenance, resin-bound surfaces combine decorative aggregate with clear resin for a comfortable, contemporary finish.",
    image: "/resin-driveway.jpg",
  },
  {
    title: "Tarmac Driveways",
    description:
      "A durable, cost-effective solution installed to a high standard, ideal for larger areas or a clean, smart finish at a sensible price.",
    image: "/tarmac.jpg",
  },
  {
    title: "Patios",
    description:
      "Beautifully designed patios in porcelain, sandstone or natural stone, creating the perfect space for relaxing and entertaining outdoors.",
    image: "/patios.jpg",
  },
  {
    title: "Landscaping",
    description:
      "Complete landscaping solutions bringing paving, turf, fencing and planting together as one coordinated project that adds value to your property.",
    image: "/landscaping.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="!bg-white">
      <div className="wrap">
        <div className="mb-14">
          <span className="eyebrow">Our services</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-[clamp(28px,3.2vw,40px)]">
              Choose the right surface for your home<span className="dot">.</span>
            </h2>
            <p className="max-w-[52ch] lg:ml-auto">Different properties, budgets and styles call for different materials. The best option isn&apos;t automatically the most expensive one — it&apos;s the surface that suits your home, your traffic, and the finish you want.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-[22px]">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-[20px] overflow-hidden shadow-card flex flex-col transition-all duration-[180ms] hover:-translate-y-[6px] hover:shadow-card-hover"
            >
              <div className="h-[150px] relative overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
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
