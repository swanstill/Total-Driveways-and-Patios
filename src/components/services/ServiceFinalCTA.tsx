"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceFinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-[100px]"
      style={{ background: "linear-gradient(135deg, #08213F 0%, #0F2747 50%, #1A3A5C 100%)" }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[720px] mx-auto"
        >
          <motion.span
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            — Start Your Project
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5 !text-white"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Transform Your Driveway Today
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[17px] mb-10 max-w-[560px] mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Take the first step toward a stunning new driveway. Contact us today for a free,
            no-obligation quote and let&apos;s bring your vision to life.
          </motion.p>
          <motion.div
            custom={3}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#quote"
              className="inline-flex items-center gap-2.5 font-bold text-[16px] px-8 py-4 rounded-[12px] transition-all"
              style={{ background: "var(--svc-gold)", color: "#fff", boxShadow: "0 8px 28px -6px rgba(200,155,74,0.45)" }}
            >
              Get Free Quote
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
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
        </motion.div>
      </div>
    </section>
  );
}
