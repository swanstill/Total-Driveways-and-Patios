"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation & Priorities",
    desc: "Discuss how the garden is used, what currently causes problems, the desired style and the realistic budget.",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  },
  {
    num: "02",
    title: "Survey & Outline Plan",
    desc: "Measure the area, assess access, levels, drainage and retained features, then agree the main zones and material palette.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    num: "03",
    title: "Clearance & Groundwork",
    desc: "Remove unwanted surfaces or features, complete excavation, drainage, foundations and retaining work in the correct sequence.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    num: "04",
    title: "Hard Landscaping",
    desc: "Install patios, paths, walls, steps, edging and fences with coordinated levels and consistent detailing throughout.",
    icon: "M3 3h18v18H3V3z M9 3v18 M15 3v18 M3 9h18 M3 15h18",
  },
  {
    num: "05",
    title: "Soft Finishes & Handover",
    desc: "Prepare turf or planting areas where included, finish the clean-up and explain any aftercare or staged next steps.",
    icon: "M5 13l4 4L19 7",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function LandscapingTimeline() {
  return (
    <section className="relative py-[120px]" style={{ background: "var(--svc-section)" }}>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <motion.span custom={0} variants={fadeUp} className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--svc-gold)" }}>
            — Our Process
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="mt-5" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            How We Plan & Build Landscaping
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.12, ease: [0.25, 0.1, 0.25, 1] as const } }) }}
              className="relative group cursor-default"
            >
              <div className="relative bg-white rounded-none p-0 h-full transition-all duration-500 hover:-translate-y-1" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div className="h-[3px] w-full transition-all duration-500 group-hover:h-[4px]" style={{ background: "var(--svc-gold)" }} />
                <div className="p-7 lg:p-8">
                  <div className="mb-5 overflow-hidden">
                    <span className="text-[64px] font-bold leading-none block transition-all duration-500 group-hover:scale-105 origin-left" style={{ color: "rgba(200,155,74,0.1)", fontFamily: "var(--font-manrope), sans-serif", lineHeight: 0.85 }}>
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold mb-3 uppercase tracking-[0.05em] leading-tight" style={{ color: "var(--svc-heading)", fontSize: "clamp(13px, 1.1vw, 15px)" }}>
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--svc-body)" }}>{step.desc}</p>
                </div>
                <div className="absolute top-0 right-0 w-[2px] h-0 group-hover:h-full transition-all duration-500" style={{ background: "var(--svc-gold)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
