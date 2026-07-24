"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "Free Quotes", desc: "No obligation", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "25 Years", desc: "Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Fully Insured", desc: "Public liability", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { label: "5 Year Warranty", desc: "On all work", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

export default function ServiceTrustBadges() {
  return (
    <section className="relative z-20 -mt-14 pb-0">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.1, ease: [0.25, 0.1, 0.25, 1] } }),
              }}
              className="bg-white rounded-[20px] p-6 text-center group cursor-default transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: "0 12px 40px -12px rgba(15,39,71,0.1)" }}
            >
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-opacity-20"
                style={{ background: "rgba(200,155,74,0.1)" }}
              >
                <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[22px] h-[22px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
              </div>
              <div className="font-bold text-[17px]" style={{ color: "var(--svc-heading)" }}>{b.label}</div>
              <div className="text-[13px] mt-0.5" style={{ color: "var(--svc-body)" }}>{b.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
