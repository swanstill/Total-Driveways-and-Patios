"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Enhanced Kerb Appeal",
    desc: "A beautifully laid block paving driveway instantly transforms the look of your property, creating a lasting first impression for visitors and potential buyers alike.",
    icon: "M14 5l7 7m0 0l-7 7m7-7H3",
  },
  {
    title: "Exceptional Durability",
    desc: "Designed to withstand the weight of vehicles, freeze-thaw cycles and daily use. Our driveways are built with a structural sub-base that prevents sinking and cracking.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Low Maintenance",
    desc: "A simple jet wash once or twice a year keeps your block paving looking like new. Individual blocks can be lifted and replaced if needed — no digging or relaying required.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Design Flexibility",
    desc: "Choose from herringbone, basket-weave, stretcher-bond, or random layouts in a wide spectrum of colours — from warm reds and buffs to contemporary charcoals and greys.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Permeable Options",
    desc: "Our SUDS-compliant permeable block paving systems manage surface water effectively, reducing flood risk and meeting modern planning requirements for new driveways.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Increased Home Value",
    desc: "A quality block paving driveway can add up to 10% to your property value. It's one of the most cost-effective home improvements with the highest return on investment.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export default function ServiceBenefits() {
  return (
    <section className="py-[120px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[680px] mx-auto mb-16"
        >
          <motion.span
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            — Why Block Paving?
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Benefits of Block Paving
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[17px]"
            style={{ color: "var(--svc-body)" }}
          >
            Discover why block paving remains the UK&apos;s number one choice for driveways —
            combining timeless aesthetics with practical, long-lasting performance.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.08, ease: [0.25, 0.1, 0.25, 1] } }) }}
              className="p-8 rounded-[20px] group hover:-translate-y-1.5 transition-all duration-300"
              style={{ boxShadow: "0 8px 30px -10px rgba(15,39,71,0.06)", border: "1px solid rgba(15,39,71,0.04)" }}
            >
              <div
                className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center mb-5"
                style={{ background: "rgba(200,155,74,0.1)" }}
              >
                <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold mb-2.5" style={{ color: "var(--svc-heading)" }}>{b.title}</h3>
              <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--svc-body)" }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
