"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const benefits = [
  "Wide range of colours, patterns and finishes to suit any home",
  "Exceptional durability for vehicle and pedestrian traffic",
  "Low maintenance — simple jet washing keeps it looking fresh",
  "Individual blocks can be lifted and replaced for utility access",
  "Permeable options available for SUDS compliance",
  "Increases property value and kerb appeal",
];

export default function ServiceWhyChooseUs() {
  return (
    <section className="py-[120px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ color: "var(--svc-gold)" }}
            >
              — Why Choose Block Paving?
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="mt-5 mb-5"
              style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Timeless Beauty, Built to Last
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-[17px] leading-relaxed mb-6"
              style={{ color: "var(--svc-body)" }}
            >
              Block paving has been the UK&apos;s favourite driveway surface for decades — and for good reason.
              It combines exceptional durability with design flexibility, allowing you to create a unique
              pattern and colour scheme that complements your property perfectly.
            </motion.p>
            <motion.ul custom={3} variants={fadeUp} className="space-y-3.5 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[16px]" style={{ color: "var(--svc-body)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="2" viewBox="0 0 24 24" className="w-[20px] h-[20px] mt-[2px] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {b}
                </li>
              ))}
            </motion.ul>
            <motion.div custom={4} variants={fadeUp}>
              <Link
                href="#quote"
                className="inline-flex items-center gap-2.5 font-bold text-[16px] px-8 py-4 rounded-[12px] transition-all"
                style={{ background: "var(--svc-gold)", color: "#fff", boxShadow: "0 8px 28px -6px rgba(200,155,74,0.45)" }}
              >
                Get Your Free Quote
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="rounded-[20px] overflow-hidden" style={{ aspectRatio: "4/3.6", boxShadow: "0 24px 64px -16px rgba(15,39,71,0.15)" }}>
              <div
                className="w-full h-full hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: "url('/gallery-4.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
