"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function ContactSiteVisit() {
  return (
    <section className="relative py-[100px]" style={{ background: "#fff" }}>
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, #0F2747 0 1px, transparent 1px 22px)`, backgroundSize: "22px 22px" }} />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* Left: Content */}
          <div>
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-4 mb-5">
              <span className="inline-block w-10 h-[2px]" style={{ background: "var(--color-warm-gold)" }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "rgba(207,164,71,0.8)" }}>
                Free Site Visit
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="mb-5 leading-[1.1]"
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "clamp(28px, 2.8vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--color-navy-primary, #0F2747)",
              }}
            >
              Request a Free{" "}
              <span style={{ color: "var(--color-warm-gold)" }}>Site Visit &amp; Quotation</span>
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} className="text-[16.5px] leading-relaxed mb-6" style={{ color: "var(--color-slate, #5B6270)" }}>
              Every property and project is different. A site visit allows Total Driveways
              and Patios to measure the area, inspect the existing surface, review access
              and drainage, and discuss the materials and finish.
            </motion.p>

            <motion.p custom={3} variants={fadeUp} className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-slate, #5B6270)" }}>
              To help the team respond efficiently, provide the service you are interested
              in, the property postcode, a rough idea of the area and when you would like
              the work completed. Photographs can be requested after the initial enquiry
              where useful.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              className="relative pl-6 py-5 px-6 rounded-[16px]"
              style={{
                background: "#F7F4EE",
                borderLeft: "3px solid var(--color-warm-gold)",
              }}
            >
              <p className="text-[14px] font-medium" style={{ color: "var(--color-navy-primary, #0F2747)" }}>
                There is no obligation to proceed after receiving a quotation. The purpose
                of the visit is to understand the work properly and give you a clear next step.
              </p>
            </motion.div>
          </div>

          {/* Right: Tips / Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative"
          >
            <div className="relative p-8 lg:p-10 rounded-[20px]" style={{ background: "var(--color-navy-primary, #0F2747)", boxShadow: "0 16px 48px -12px rgba(8,33,63,0.25)" }}>
              <div className="absolute -top-[80px] -right-[60px] w-[200px] h-[200px] rounded-full opacity-[0.06] pointer-events-none" style={{ background: "radial-gradient(circle, var(--color-warm-gold) 0%, transparent 65%)" }} />
              <div className="relative">
                <h3 className="text-[18px] font-bold !text-white mb-6 flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full" style={{ background: "var(--color-warm-gold)" }} />
                  Have This Information Ready
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Service you are interested in" },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Property postcode" },
                    { icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4", label: "Rough idea of the area size" },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Ideal timeframe for completion" },
                    { icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", label: "Current surface type & condition" },
                    { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z", label: "Access or drainage notes" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(207,164,71,0.12)" }}>
                        <svg fill="none" stroke="var(--color-warm-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[16px] h-[16px]">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <span className="text-[14px] leading-snug pt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
