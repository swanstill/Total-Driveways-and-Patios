"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function PatiosHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[680px] lg:min-h-[750px] flex items-center"
      style={{ background: "#F6F3EC" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(15,39,71,0.08) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient glow — top right */}
      <div
        className="absolute -top-[250px] -right-[150px] w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
      />

      {/* Subtle glow — bottom left */}
      <div
        className="absolute -bottom-[180px] -left-[120px] w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
      />

      {/* Vertical gold accent line */}
      <div
        className="absolute top-0 left-[42%] lg:left-[50%] w-[1px] h-0 animate-grow-line opacity-[0.25]"
        style={{ background: "linear-gradient(to bottom, var(--svc-gold), transparent)" }}
      />

      {/* Corner brackets */}
      <div
        className="absolute top-8 right-8 w-[60px] h-[60px] opacity-[0.2] hidden lg:block"
        style={{
          borderTop: "2px solid var(--svc-gold)",
          borderRight: "2px solid var(--svc-gold)",
        }}
      />
      <div
        className="absolute bottom-8 left-8 w-[60px] h-[60px] opacity-[0.2] hidden lg:block"
        style={{
          borderBottom: "2px solid var(--svc-gold)",
          borderLeft: "2px solid var(--svc-gold)",
        }}
      />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10 py-[30px] lg:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 items-center"
        >
          {/* Left: Copy */}
          <div className="max-w-[580px]">
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span
                className="inline-block w-10 h-[2px]"
                style={{ background: "var(--svc-gold)" }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "rgba(200,155,74,0.8)" }}
              >
                Patio Installers in Barnsley
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="leading-[1.08] mb-6"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(34px, 3.8vw, 60px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "var(--svc-heading, #0F2747)",
              }}
            >
              <span className="block">Patio Installation</span>
              <span className="block">in Barnsley</span>
              <span
                className="block mt-1"
                style={{ color: "var(--svc-gold)" }}
              >
                Designed for Outdoor Living
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[17px] leading-relaxed mb-10 max-w-[52ch]"
              style={{ color: "var(--svc-body, #616161)", fontWeight: 400 }}
            >
              Turn an underused garden into a defined space for sitting, dining and spending
              time outdoors. Total Driveways and Patios can help plan the layout, paving
              material, levels, drainage, steps and finishing details before installing a
              patio that works with the house and the rest of the garden.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2.5 font-bold text-[14px] px-[18px] py-3 rounded-[6px] transition-all hover:brightness-110"
                style={{
                  background: "var(--svc-gold)",
                  color: "#fff",
                  boxShadow: "0 8px 28px -6px rgba(200,155,74,0.45)",
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
                  />
                </svg>
                Get a Free Quote
              </Link>
              <Link
                href="tel:07722151231"
                className="inline-flex items-center gap-2.5 font-bold text-[14px] px-[18px] py-3 rounded-[6px] transition-all hover:bg-navy/5"
                style={{ border: "2px solid rgba(15,39,71,0.2)", color: "var(--svc-heading, #0F2747)" }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z"
                  />
                </svg>
                Call 07722 151231
              </Link>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-x-8 gap-y-3 pt-8"
              style={{ borderTop: "1px solid rgba(15,39,71,0.08)" }}
            >
              {[
                { label: "Free Site Visits", value: "" },
                { label: "No-Obligation Quotes", value: "" },
                { label: "Local Service", value: "" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  {s.value && (
                    <span
                      className="text-[22px] font-extrabold leading-none"
                      style={{ color: "var(--svc-gold)" }}
                    >
                      {s.value}
                    </span>
                  )}
                  <span
                    className="text-[13px] leading-tight"
                    style={{ color: "rgba(15,39,71,0.5)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
              {/* Stars */}
              <div
                className="flex items-center gap-[3px] ml-2"
                style={{ color: "var(--svc-gold)" }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-[15px] h-[15px]"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Image + Floating Elements */}
          <motion.div variants={fadeIn} className="relative">
            <div className="relative pl-8">
              {/* Decorative line behind image */}
              <div
                className="absolute top-8 bottom-8 left-0 w-[3px] rounded-full opacity-[0.2]"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--svc-gold) 0%, transparent 100%)",
                }}
              />

              {/* Main image */}
              <div
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(15,39,71,0.08)",
                }}
              >
                <div
                  className="w-full h-[280px] lg:h-[540px]"
                  style={{
                    backgroundImage: "url('/patios.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(8,33,63,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating rating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="absolute -bottom-4 -left-2 flex items-center gap-3 px-5 py-3.5 rounded-[14px]"
                style={{
                  background: "var(--svc-navy, #0F2747)",
                  boxShadow: "0 12px 40px -8px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex gap-[2px]" style={{ color: "var(--svc-gold)" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[15px] h-[15px]">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white text-[14px] font-bold" style={{ letterSpacing: "-0.01em" }}>
                  4.8 Google Rating
                </span>
              </motion.div>

              {/* Top-right decorative emblem */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center opacity-[0.25]"
                style={{
                  border: "2px solid var(--svc-gold)",
                  background: "rgba(200,155,74,0.1)",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="var(--svc-gold)">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
