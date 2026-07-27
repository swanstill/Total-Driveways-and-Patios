export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-white pb-[60px] lg:pb-0">
      <div className="wrap">
        <div className="bg-navy rounded-[28px] py-[72px] px-10 text-center relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(199,154,60,0.18),transparent_55%)]" />

          <h2 className="text-[clamp(30px,3.8vw,46px)] mb-4 relative font-extrabold z-10" style={{color:"#FFFFFF"}}>
            Ready to improve your driveway, patio or garden<span className="dot" style={{color:"#C79A3C"}}>?</span>
          </h2>
          <p className="text-[#D6D9E2] max-w-[56ch] mx-auto mb-8 relative leading-relaxed z-10">
            Tell Total Driveways and Patios what you&apos;d like to change. We&apos;ll arrange a site visit, discuss suitable materials and provide a clear, no-obligation quotation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap relative mb-[22px] z-10">
            <a href="#quote" className="btn btn-primary">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
              </svg>
              Get a free quote
            </a>
            <a href="tel:07722151231" className="btn btn-ghost-white">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
              </svg>
              Call 07722 151231
            </a>
          </div>
          <p className="text-[#9AA2B5] text-[13.5px] relative z-10">
            No pressure. No obligation. Just practical advice based on your property and the work involved.
          </p>
        </div>
      </div>
    </section>
  );
}
