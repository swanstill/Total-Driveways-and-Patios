export default function TrustStrip() {
  return (
    <div className="bg-navy py-9">
      <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-3 text-[#EDE7D8] text-[14.5px] font-semibold">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-gold flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Fully insured workmanship
        </div>
        <div className="flex items-center gap-3 text-[#EDE7D8] text-[14.5px] font-semibold">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-gold flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Realistic project timescales
        </div>
        <div className="flex items-center gap-3 text-[#EDE7D8] text-[14.5px] font-semibold">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-gold flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Family-run since 1990
        </div>
        <div className="flex items-center gap-3 text-[#EDE7D8] text-[14.5px] font-semibold">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-gold flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
          </svg>
          Free site visits &amp; quotes
        </div>
      </div>
    </div>
  );
}
