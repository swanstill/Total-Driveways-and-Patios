export default function WhyChooseUs() {
  return (
    <section>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Why choose us</span>
          <h2 className="text-[clamp(28px,3vw,38px)] mb-[18px]">
            A trusted driveway and patio company<span className="dot">.</span>
          </h2>
          <div className="mt-7 space-y-[30px]">
            {[
              {
                icon: (
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gold-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Professional workmanship",
                desc: "Skilled installation with attention to detail from groundwork to finish.",
              },
              {
                icon: (
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gold-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l6-6m0 0l4-10 6 6-10 4z" />
                  </svg>
                ),
                title: "Reliable and tidy",
                desc: "Clear communication, organised work and a clean site on completion.",
              },
              {
                icon: (
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gold-dark">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <path strokeLinecap="round" d="M10 6.5h4M6.5 10v4" />
                  </svg>
                ),
                title: "Driveways, patios and landscaping",
                desc: "One team for complete outdoor improvement projects.",
              },
              {
                icon: (
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gold-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h5M21 12a9 9 0 11-4.3-7.7L21 5l-1 4z" />
                  </svg>
                ),
                title: "Free quotes and honest advice",
                desc: "Straightforward recommendations tailored to the property and budget.",
              },
              {
                icon: (
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gold-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6.5l4 4M9 15l-3 3m9-13l-6 6-2 5 5-2 6-6-3-3z" />
                  </svg>
                ),
                title: "Built to last",
                desc: "A strong focus on preparation, drainage and long-term performance.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-[18px]">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-white border border-border flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[16.5px] mb-1">{item.title}</h4>
                  <p className="text-[14.5px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#quote" className="btn btn-primary mt-8">
            Get a free quote
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <p>At Total Driveways and Patios, we take pride in delivering dependable workmanship, tidy installations and honest advice to create outdoor spaces you&apos;ll enjoy for years to come.</p>
          <div className="aspect-[4/3.6] rounded-[20px] overflow-hidden shadow-card relative">
          <img src="/why-choose-us.jpg" alt="Why Choose Total Driveways and Patios" className="w-full h-full object-cover" />
          <div className="absolute left-5 bottom-5 bg-white py-[14px] px-[18px] rounded-[14px] shadow-[0_10px_20px_-8px_rgba(0,0,0,.18)] flex items-center gap-3">
            <svg className="w-[26px] h-[26px] text-gold-dark flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9zM12 12v9M8 21h8" />
            </svg>
            <div>
              <span className="font-semibold text-[13.5px] text-navy">Quality finish</span>
              <br />
              <span className="text-[13.5px] text-slate font-normal">Driveways · Patios · Landscaping</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
