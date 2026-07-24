"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Consultation",
    desc: "We visit your property, discuss your requirements, measure the area and assess access, levels and drainage. No obligation to proceed.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Design",
    desc: "We create a tailored layout plan showing the pattern, colour scheme, edging and any special features to match your home.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Preparation",
    desc: "We excavate to the required depth, install a hardcore sub-base, compact thoroughly and set edgings and drainage channels.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Installation",
    desc: "We lay the blocks to your chosen pattern, compact them with a plate vibrator, apply kiln-dried sand and complete the edges.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Final Inspection",
    desc: "We carry out a full quality check, clean the entire area and walk you through the finished driveway with aftercare advice.",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServiceTimeline() {
  return (
    <section
      className="svc-section relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, var(--svc-deep-navy) 0%, var(--svc-navy) 100%)" }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #fff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="svc-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <motion.span
            custom={0}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
            }}
            className="text-[12px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            Our Process
          </motion.span>
          <motion.h2
            custom={1}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
            }}
            className="!text-white mt-4"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            How We Install Your Block Paving
          </motion.h2>
          <motion.div
            custom={2}
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, delay: 0.3 } },
            }}
            className="gold-line mx-auto mt-5"
          />
          <motion.p
            custom={3}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
            }}
            className="mt-5 text-[16px]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Every block paving project follows our proven five-stage process, ensuring a
            professional finish that lasts for decades.
          </motion.p>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-[44px] left-[8%] right-[8%] h-[2px]"
            style={{ background: "rgba(200, 155, 74, 0.2)" }}
          />
          {/* Filled line (animated) */}
          <motion.div
            initial={{ width: "0%" }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-[44px] left-[8%] h-[2px]"
            style={{ background: "var(--svc-gold)" }}
          />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 transition-shadow duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,155,74,0.15) 0%, rgba(200,155,74,0.05) 100%)",
                    border: "2px solid rgba(200,155,74,0.3)",
                    color: "var(--svc-gold)",
                  }}
                >
                  {s.icon}
                  {/* Step number */}
                  <div
                    className="absolute -top-1 -right-1 w-[26px] h-[26px] rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{
                      background: "var(--svc-gold)",
                      color: "#fff",
                    }}
                  >
                    {s.step}
                  </div>
                </motion.div>

                <h4 className="text-white text-[16px] font-bold mb-2">{s.title}</h4>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-[34px] top-0 bottom-0 w-[2px]"
            style={{ background: "rgba(200, 155, 74, 0.2)" }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative pb-12 last:pb-0"
            >
              {/* Circle */}
              <div
                className="absolute left-[-42px] top-0 w-[60px] h-[60px] rounded-full flex items-center justify-center z-10"
                style={{
                  background: "rgba(200,155,74,0.1)",
                  border: "2px solid rgba(200,155,74,0.3)",
                  color: "var(--svc-gold)",
                }}
              >
                <div className="scale-[0.7]">{s.icon}</div>
                <div
                  className="absolute -top-1 -right-1 w-[22px] h-[22px] rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: "var(--svc-gold)", color: "#fff" }}
                >
                  {s.step}
                </div>
              </div>

              <div>
                <h4 className="text-white text-[16px] font-bold mb-1">{s.title}</h4>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
