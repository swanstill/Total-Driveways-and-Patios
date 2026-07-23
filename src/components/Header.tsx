"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-navy text-[#EDE7D8] text-[13.5px]">
        <div className="wrap flex justify-between items-center py-[9px] gap-4 flex-wrap">
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
            Family-run since 1990 · Rated 4.8 on Google
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <nav className="wrap flex items-center justify-between py-[5px] gap-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Total Driveways and Patios"
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-contain -my-[55px]"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[34px] font-semibold text-[15px] text-navy">
            <a href="#" className="active-link">Home</a>
            <a href="#services">Services ▾</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
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
            <a href="#" onClick={() => setDrawerOpen(false)}>Home</a>
            <a href="#services" onClick={() => setDrawerOpen(false)}>Services</a>
            <a href="#gallery" onClick={() => setDrawerOpen(false)}>Gallery</a>
            <a href="#reviews" onClick={() => setDrawerOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setDrawerOpen(false)}>Contact</a>
            <a href="#quote" className="btn btn-primary !justify-center" onClick={() => setDrawerOpen(false)}>Get a free quote</a>
          </div>
        </div>
      )}
    </>
  );
}
