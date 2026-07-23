import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#FBF9F4] to-cream pt-[72px] pb-20 overflow-hidden">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] gap-14 items-center">
        <div>
          <span className="eyebrow">Driveways, patios &amp; paving specialists</span>
          <h1 className="text-[clamp(34px,4.2vw,52px)] mb-[22px]">
            Driveways, Patios &amp; Landscaping Done Properly<span className="dot">.</span>
          </h1>
          <p className="text-lg max-w-[52ch] mb-8">
            Improve the way your property looks, feels and works with a professionally installed driveway, patio or landscaped garden. We design and build practical outdoor spaces around your home, your budget and the way you use the area — with careful preparation beneath the surface and a clean finish above it.
          </p>
          <div className="flex gap-4 flex-wrap mb-[34px]">
            <a href="#quote" className="btn btn-primary !py-[12px] !px-[18px] !text-sm !rounded-md">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
              </svg>
              Get a free quote
            </a>
            <a href="tel:07722151231" className="btn btn-outline !py-[12px] !px-[18px] !text-sm !rounded-md">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
              </svg>
              Call 07722 151231
            </a>
          </div>
          <ul className="flex gap-7 flex-wrap text-sm font-semibold text-navy-soft">
            <li className="flex items-center gap-[9px]">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[19px] h-[19px] text-gold-dark flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free, no-obligation quotes
            </li>
            <li className="flex items-center gap-[9px]">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[19px] h-[19px] text-gold-dark flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Local service across Cardiff &amp; South Wales
            </li>
            <li className="flex items-center gap-[9px]">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[19px] h-[19px] text-gold-dark flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Clear advice, no pressure
            </li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3.4] lg:order-none order-first relative">
          <Image
            src="/hero-image.jpg"
            alt="Driveway and patio project by Total Driveways and Patios"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
