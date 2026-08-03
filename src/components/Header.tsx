"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy text-[#EDE7D8] text-[13.5px]">
        <div className="wrap flex justify-between items-center py-[15px] gap-4 flex-wrap">
          <a href="tel:08009949855" className="flex items-center gap-2 font-semibold">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[15px] h-[15px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
            </svg>
            0800 994 9855
          </a>
          <span className="flex items-center gap-2 text-[#D9CBAE] max-md:hidden">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[15px] h-[15px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Family-run established 2026 · Rated 5.0 on Google
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <nav className="wrap flex items-center justify-between py-[5px] gap-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Total Driveways and Patios"
              width={200}
              height={200}
              className="w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] object-contain -my-[35px] sm:-my-[55px]"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[34px] font-semibold text-[15px] text-navy">
            <a href="/" className="active-link">Home</a>
            <div className="relative group">
              <a href="#services" className="cursor-pointer">Services ▾</a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-[16px] shadow-[0_20px_60px_-16px_rgba(15,39,71,0.25)] border border-border p-6 w-[500px]">
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/services/block-paving" className="flex items-start gap-3 p-3.5 rounded-[12px] hover:bg-cream transition-colors group/link">
                      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: "rgba(15,39,71,0.06)"}}>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px] text-navy">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[15px] text-navy group-hover/link:text-gold transition-colors">Block Paving</div>
                        <div className="text-[12px] leading-snug text-slate/70 mt-0.5">Clay or concrete blocks in a range of colours, patterns and finishes for driveways and patios.</div>
                      </div>
                    </a>
                    <a href="/services/resin-driveways" className="flex items-start gap-3 p-3.5 rounded-[12px] hover:bg-cream transition-colors group/link">
                      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: "rgba(15,39,71,0.06)"}}>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px] text-navy">
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[15px] text-navy group-hover/link:text-gold transition-colors">Resin Driveways</div>
                        <div className="text-[12px] leading-snug text-slate/70 mt-0.5">Permeable bound surfacing that resists weeds and puddles, available in natural aggregate tones.</div>
                      </div>
                    </a>
                    <a href="/services/tarmac-driveways" className="flex items-start gap-3 p-3.5 rounded-[12px] hover:bg-cream transition-colors group/link">
                      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: "rgba(15,39,71,0.06)"}}>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px] text-navy">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l2-5 3 10 3-7 2 4h5" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[15px] text-navy group-hover/link:text-gold transition-colors">Tarmac Driveways</div>
                        <div className="text-[12px] leading-snug text-slate/70 mt-0.5">Cost-effective and durable asphalt surfacing, laid in one day with a smooth, dark finish.</div>
                      </div>
                    </a>
                    <a href="/services/patios" className="flex items-start gap-3 p-3.5 rounded-[12px] hover:bg-cream transition-colors group/link">
                      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: "rgba(15,39,71,0.06)"}}>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px] text-navy">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h6v12H4zM14 4h6v16h-6z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[15px] text-navy group-hover/link:text-gold transition-colors">Patios</div>
                        <div className="text-[12px] leading-snug text-slate/70 mt-0.5">Porcelain, sandstone or Indian stone paving for gardens, seating areas and pathways.</div>
                      </div>
                    </a>
                    <a href="/services/landscaping" className="flex items-start gap-3 p-3.5 rounded-[12px] hover:bg-cream transition-colors group/link">
                      <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: "rgba(15,39,71,0.06)"}}>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px] text-navy">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-3 3m3-3l3 3" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[15px] text-navy group-hover/link:text-gold transition-colors">Landscaping</div>
                        <div className="text-[12px] leading-snug text-slate/70 mt-0.5">Full garden design and construction — turf, planting, beds, steps, walls and drainage coordinated in one plan.</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="flex items-center gap-[14px]">
            <a href="#quote" className="btn btn-primary max-sm:hidden !py-[12px] !px-[18px] !text-sm !rounded-md">Get a free quote</a>
            <button
              className="md:hidden bg-none border-none cursor-pointer"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[26px] h-[26px] text-navy">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="mobile-drawer open" onClick={(e) => { if (e.target === e.currentTarget) setDrawerOpen(false); }}>
          <div className="panel">
            <button className="self-end bg-none border-none cursor-pointer" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <a href="/" onClick={() => setDrawerOpen(false)}>Home</a>
            <button
              className="flex items-center justify-between w-full bg-none border-none cursor-pointer font-bold text-navy text-[17px] py-1"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`w-[18px] h-[18px] transition-transform duration-200 ${servicesOpen ? "rotate-90" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-2 pl-6 border-l-2" style={{ borderColor: "rgba(200,155,74,0.3)" }}>
                <a href="/services/block-paving" onClick={() => setDrawerOpen(false)} className="text-[14px] opacity-80 hover:opacity-100 transition-opacity">Block Paving</a>
                <a href="/services/resin-driveways" onClick={() => setDrawerOpen(false)} className="text-[14px] opacity-80 hover:opacity-100 transition-opacity">Resin Driveways</a>
                <a href="/services/tarmac-driveways" onClick={() => setDrawerOpen(false)} className="text-[14px] opacity-80 hover:opacity-100 transition-opacity">Tarmac Driveways</a>
                <a href="/services/patios" onClick={() => setDrawerOpen(false)} className="text-[14px] opacity-80 hover:opacity-100 transition-opacity">Patios</a>
                <a href="/services/landscaping" onClick={() => setDrawerOpen(false)} className="text-[14px] opacity-80 hover:opacity-100 transition-opacity">Landscaping</a>
              </div>
            )}
            <a href="#gallery" onClick={() => setDrawerOpen(false)}>Gallery</a>
            <a href="#reviews" onClick={() => setDrawerOpen(false)}>Reviews</a>
            <a href="/contact" onClick={() => setDrawerOpen(false)}>Contact</a>
            <a href="#quote" className="btn btn-primary !justify-center" onClick={() => setDrawerOpen(false)}>Get a free quote</a>
          </div>
        </div>
      )}
    </>
  );
}
