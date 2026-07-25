"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Send Your Enquiry",
    desc: "Complete the form or give us a call with your details. The enquiry is sent directly to the team for review.",
  },
  {
    num: "2",
    title: "We Contact You",
    desc: "John contacts you to clarify the work, discuss your requirements and arrange a convenient time for a site visit.",
  },
  {
    num: "3",
    title: "Site Visit & Assessment",
    desc: "The area is measured and the materials, access, groundwork and drainage are discussed in full.",
  },
  {
    num: "4",
    title: "Receive Your Quote",
    desc: "You receive a clear quotation with no obligation to proceed. The decision is yours, with no pressure.",
  },
];

export default function ContactProcess() {
  return (
    <section className="relative py-[100px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[600px] mx-auto mb-16"
        >
          <motion.span
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "rgba(207,164,71,0.8)" }}
          >
            — What Happens Next
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontSize: "clamp(28px, 2.8vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--color-navy-primary, #0F2747)",
            }}
          >
            From Enquiry to Quote
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-[44px] left-[30px] right-[30px] h-[2px] hidden lg:block"
            style={{ background: "repeating-linear-gradient(90deg, rgba(207,164,71,0.25) 0px, rgba(207,164,71,0.25) 8px, transparent 8px, transparent 16px)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.15, ease: [0.25, 0.1, 0.25, 1] as const } }) }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:scale-105"
                  style={{
                    background: "var(--color-navy-primary, #0F2747)",
                    boxShadow: "0 8px 32px -8px rgba(15,39,71,0.2)",
                  }}
                >
                  <span
                    className="text-[28px] font-extrabold"
                    style={{ color: "var(--color-warm-gold)" }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="font-bold text-[16px] mb-3"
                  style={{ color: "var(--color-navy-primary, #0F2747)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed max-w-[260px]"
                  style={{ color: "var(--color-slate, #5B6270)" }}
                >
                  {step.desc}
                </p>

                {/* Arrow between steps (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden mt-4 mb-2 w-[2px] h-[24px] opacity-[0.25]"
                    style={{ background: "var(--color-warm-gold)" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
