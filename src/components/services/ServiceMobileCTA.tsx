"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ServiceMobileCTA() {
  return (
    <>
      {/* Sticky Mobile CTA */}
      <div className="svc-sticky-cta">
        <Link href="#quote" className="btn-svc btn-svc-primary text-[14px] !py-3">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[16px] h-[16px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
          </svg>
          Get Free Quote
        </Link>
        <Link href="tel:07722151231" className="btn-svc" style={{ background: "var(--svc-section)", color: "var(--svc-navy)", flex: 1, justifyContent: "center", padding: "14px 16px", fontSize: 15, borderRadius: 12 }}>
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[16px] h-[16px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
          </svg>
          Call Now
        </Link>
      </div>
    </>
  );
}
