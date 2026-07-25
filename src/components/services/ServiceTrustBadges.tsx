"use client";

import { motion } from "framer-motion";

const badges = [
  {
    label: "Free Quotes",
    desc: "No obligation, no pressure",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "15 Years Experience",
    desc: "Family-run since 1990",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Fully Insured",
    desc: "Public liability covered",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    label: "5 Year Warranty",
    desc: "Guaranteed workmanship",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ServiceTrustBadges() {
  return (
    <section className="relative z-20 -mt-14 pb-0">
      {/* Main ribbon */}
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative rounded-[24px] overflow-hidden"
          style={{
            background: "var(--svc-navy, #0F2747)",
            boxShadow: "0 20px 60px -16px rgba(15,39,71,0.35)",
          }}
        >
          {/* Herringbone pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(255,255,255,0.08) 24px, rgba(255,255,255,0.08) 25px),
                repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(255,255,255,0.08) 24px, rgba(255,255,255,0.08) 25px)
              `,
              backgroundSize: "35px 35px",
            }}
          />

          {/* Top gold accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--svc-gold) 20%, var(--svc-gold) 80%, transparent 100%)",
            }}
          />

          {/* Decorative corner brackets */}
          <div
            className="absolute top-4 left-4 w-6 h-6 opacity-[0.15]"
            style={{
              borderTop: "1.5px solid var(--svc-gold)",
              borderLeft: "1.5px solid var(--svc-gold)",
            }}
          />
          <div
            className="absolute top-4 right-4 w-6 h-6 opacity-[0.15]"
            style={{
              borderTop: "1.5px solid var(--svc-gold)",
              borderRight: "1.5px solid var(--svc-gold)",
            }}
          />
          <div
            className="absolute bottom-4 left-4 w-6 h-6 opacity-[0.15]"
            style={{
              borderBottom: "1.5px solid var(--svc-gold)",
              borderLeft: "1.5px solid var(--svc-gold)",
            }}
          />
          <div
            className="absolute bottom-4 right-4 w-6 h-6 opacity-[0.15]"
            style={{
              borderBottom: "1.5px solid var(--svc-gold)",
              borderRight: "1.5px solid var(--svc-gold)",
            }}
          />

          {/* Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
            {badges.map((b) => (
              <motion.div
                key={b.label}
                variants={itemVariants}
                className="flex flex-col items-center text-center px-5 py-8 lg:py-10 group cursor-default"
              >
                {/* Icon circle */}
                <div
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center mb-4 transition-all duration-500"
                  style={{
                    background: "rgba(200,155,74,0.1)",
                    border: "1.5px solid rgba(200,155,74,0.2)",
                  }}
                >
                  <svg
                    fill="none"
                    stroke="var(--svc-gold)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-[20px] h-[20px]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>

                {/* Label */}
                <div
                  className="font-extrabold text-[15px] leading-tight mb-1"
                  style={{ color: "#fff" }}
                >
                  {b.label}
                </div>

                {/* Description */}
                <div
                  className="text-[12.5px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {b.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
