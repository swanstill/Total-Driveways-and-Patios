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
          <div className="flex gap-6 flex-wrap items-center text-sm font-semibold text-navy-soft">
            <div className="flex items-center gap-[9px]">
              <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] flex-shrink-0" fill="#A67C2E">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>15 Years Experience</span>
            </div>
            <div className="flex items-center gap-[9px]">
              <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] flex-shrink-0" fill="#A67C2E">
                <circle cx="12" cy="8" r="5" />
                <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
              </svg>
              <span>10 Year Guarantee</span>
            </div>
            <div className="flex items-center gap-[9px]">
              <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] flex-shrink-0" fill="#A67C2E">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Rated 4.8 on Google</span>
            </div>
          </div>
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
