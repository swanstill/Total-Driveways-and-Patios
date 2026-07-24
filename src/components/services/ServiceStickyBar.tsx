"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceStickyBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] hidden lg:block"
      style={{ background: "rgba(15, 39, 71, 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[52px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-[14px]">Block Paving Specialists</span>
          <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>|</span>
          <div className="flex gap-[2px]" style={{ color: "var(--svc-gold)" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[14px] h-[14px]">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-[12px] ml-1 font-medium">4.8</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#quote"
            className="text-[13px] font-bold px-5 py-1.5 rounded-[8px] transition-all"
            style={{ background: "var(--svc-gold)", color: "#fff" }}
          >
            Request Quote
          </Link>
          <Link
            href="tel:07722151231"
            className="text-[13px] font-semibold px-5 py-1.5 rounded-[8px] transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)" }}
          >
            Call 07722 151231
          </Link>
        </div>
      </div>
    </div>
  );
}
