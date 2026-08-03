"use client";

import Link from "next/link";

export default function ServiceMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden"
      style={{
        background: "linear-gradient(to top, rgba(15,39,71,0.98), rgba(15,39,71,0.92))",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-stretch">
        <Link
          href="tel:08009949855"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[16px] h-[16px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
          </svg>
          Call Now
        </Link>
        <div className="w-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />
        <Link
          href="#quote"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[13px] font-bold"
          style={{ background: "var(--svc-gold)", color: "#fff" }}
        >
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[16px] h-[16px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
          </svg>
          Get Quote
        </Link>
      </div>
    </div>
  );
}
