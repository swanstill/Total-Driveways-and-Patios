"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy text-[#EDE7D8] text-[13.5px]">
        <div className="wrap flex justify-between items-center py-[15px] gap-4 flex-wrap">
          <a href="tel:07722151231" className="flex items-center gap-2 font-semibold">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[15px] h-[15px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
            </svg>
            07722 151231
          </a>
          <span className="flex items-center gap-2 text-[#D9CBAE] max-md:hidden">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[15px] h-[15px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Family-run since 1990 · Rated 5.0 on Google
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
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-[12px] shadow-[0_12px_40px_-8px_rgba(15,39,71,0.2)] border border-border py-2 min-w-[200px]">
                  <a href="/services/block-paving" className="block px-5 py-2.5 hover:bg-cream transition-colors">Block Paving</a>
                  <a href="/services/resin-driveways" className="block px-5 py-2.5 hover:bg-cream transition-colors">Resin Driveways</a>
                  <a href="/services/tarmac-driveways" className="block px-5 py-2.5 hover:bg-cream transition-colors">Tarmac Driveways</a>
                  <a href="/services/patios" className="block px-5 py-2.5 hover:bg-cream transition-colors">Patios</a>
                  <a href="/services/landscaping" className="block px-5 py-2.5 hover:bg-cream transition-colors">Landscaping</a>
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
            <a href="#services" onClick={() => setDrawerOpen(false)}>Services ▸</a>
            <a href="/services/block-paving" onClick={() => setDrawerOpen(false)} className="pl-6 text-[14px] opacity-75">— Block Paving</a>
            <a href="/services/resin-driveways" onClick={() => setDrawerOpen(false)} className="pl-6 text-[14px] opacity-75">— Resin Driveways</a>
            <a href="/services/tarmac-driveways" onClick={() => setDrawerOpen(false)} className="pl-6 text-[14px] opacity-75">— Tarmac Driveways</a>
            <a href="/services/patios" onClick={() => setDrawerOpen(false)} className="pl-6 text-[14px] opacity-75">— Patios</a>
            <a href="/services/landscaping" onClick={() => setDrawerOpen(false)} className="pl-6 text-[14px] opacity-75">— Landscaping</a>
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
