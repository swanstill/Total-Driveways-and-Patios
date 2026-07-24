"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ServiceHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: "650px",
        background: "linear-gradient(135deg, #08213F 0%, #0F2747 45%, #1A3A5C 100%)",
        marginTop: "52px",
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 40%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px, 64px 64px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left */}
          <div className="max-w-[580px] pt-24 lg:pt-0">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "rgba(200,155,74,0.8)" }}
            >
              — Block Paving Specialists
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="!text-white leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(36px, 3.6vw, 58px)", fontWeight: 800, letterSpacing: "-0.025em" }}
            >
              Block Paving Driveways{" "}
              <span style={{ color: "var(--svc-gold)" }}>Barnsley &amp; South Yorkshire</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[18px] leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400 }}
            >
              Expert block paving installation across Barnsley and South Yorkshire. From
              traditional herringbone to contemporary basket-weave — we design and install
              durable, beautiful driveways that stand the test of time.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="#quote"
                className="inline-flex items-center gap-2.5 font-bold text-[16px] px-8 py-4 rounded-[12px] transition-all"
                style={{ background: "var(--svc-gold)", color: "#fff", boxShadow: "0 8px 28px -6px rgba(200,155,74,0.45)" }}
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
                </svg>
                Request Free Quote
              </Link>
              <Link
                href="tel:07722151231"
                className="inline-flex items-center gap-2.5 font-bold text-[16px] px-8 py-4 rounded-[12px] transition-all"
                style={{ border: "2px solid rgba(255,255,255,0.25)", color: "#fff" }}
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
                </svg>
                Call 07722 151231
              </Link>
            </motion.div>

            {/* Rating */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <div className="flex gap-[2px]" style={{ color: "var(--svc-gold)" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[17px] h-[17px]">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[15px] font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
                4.8 Google Rating
              </span>
              <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                · 50+ verified reviews
              </span>
            </motion.div>
          </div>

          {/* Right: Premium image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block relative h-[520px] rounded-[20px] overflow-hidden"
            style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)" }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/gallery-1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(8,33,63,0.25) 0%, transparent 50%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
