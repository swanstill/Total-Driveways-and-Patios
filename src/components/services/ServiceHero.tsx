"use client";

import { useEffect, useRef } from "react";
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

const trustIcons = [
  { label: "Free Quotes", desc: "No obligation" },
  { label: "25 Years", desc: "Experience" },
  { label: "Fully Insured", desc: "Full public liability" },
  { label: "5 Year Warranty", desc: "On all work" },
];

export default function ServiceHero() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          height: "650px",
          background: "linear-gradient(135deg, #08213F 0%, #0F2747 40%, #163A5C 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 30%, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />

        <div className="svc-container h-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left: Content */}
            <div className="max-w-[620px] pt-20 lg:pt-0">
              <motion.span
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-block text-[12px] font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Block Paving Specialists
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="!text-white leading-[1.08] mb-6"
                style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                Block Paving Driveways{" "}
                <span style={{ color: "var(--svc-gold)" }}>Barnsley &amp; South Yorkshire</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-[17px] leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Expert block paving installation across Barnsley and South Yorkshire. From
                traditional herringbone to modern basket-weave patterns — we design and install
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
                <Link href="#quote" className="btn-svc btn-svc-primary">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
                  </svg>
                  Request Free Quote
                </Link>
                <Link href="tel:07722151231" className="btn-svc btn-svc-secondary">
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
                className="flex items-center gap-4 flex-wrap"
              >
                <div className="flex gap-[2px]" style={{ color: "var(--svc-gold)" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[18px] h-[18px]">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[15px] font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
                  4.8 Google Rating
                </span>
                <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  · 50+ verified reviews
                </span>
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:block relative h-[520px] rounded-[20px] overflow-hidden shadow-[0_24px_64px_-16px_rgba(0,0,0,0.4)]"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/gallery-1.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Gradient overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(8,33,63,0.2) 0%, transparent 50%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="relative z-20 -mt-16 pb-0">
        <div className="svc-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {trustIcons.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                className="svc-card !rounded-[16px] p-6 text-center"
              >
                <div
                  className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(200, 155, 74, 0.1)" }}
                >
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[22px] h-[22px]">
                    {i === 0 && (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </>
                    )}
                    {i === 1 && (
                      <><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></>
                    )}
                    {i === 2 && (
                      <><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>
                    )}
                    {i === 3 && (
                      <><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></>
                    )}
                  </svg>
                </div>
                <div className="font-bold text-[16px]" style={{ color: "var(--svc-heading)" }}>
                  {item.label}
                </div>
                <div className="text-[13px] mt-1" style={{ color: "var(--svc-body)" }}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
