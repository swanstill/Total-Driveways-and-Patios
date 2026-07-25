"use client";

import { motion } from "framer-motion";

const options = [
  {
    title: "Resin-Bound Surfacing",
    desc: "A smooth, porous surface made by mixing natural aggregates with UV-stable resin and trowelling in place. Ideal for driveways, patios and pathways where a seamless, SUDS-compliant finish is desired.",
    image: "/gallery-5.jpeg",
  },
  {
    title: "Resin-Bonded Surfacing",
    desc: "Natural aggregates bonded onto a resin base layer using a scatter-coat technique. Perfect for decorative finishes on paths, drives and entrances where a textured, natural stone appearance is preferred.",
    image: "/gallery-1.jpeg",
  },
  {
    title: "Decorative Resin Designs",
    desc: "Custom patterns, borders, and colour blends using contrasting aggregates. Create a unique driveway that complements your home's architecture with bespoke resin features and edging details.",
    image: "/gallery-2.jpeg",
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

export default function ResinOptions() {
  return (
    <section className="py-[120px]" style={{ background: "var(--svc-section)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            — Our Range
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Resin Driveway Options
          </motion.h2>
          <motion.div
            custom={2}
            variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, delay: 0.3 } } }}
            className="w-[48px] h-[3px] mx-auto"
            style={{ background: "var(--svc-gold)" }}
          />
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 text-[17px]"
            style={{ color: "var(--svc-body)" }}
          >
            We offer three distinct resin surfacing options, each designed to suit different
            applications, aesthetic preferences and performance requirements.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.15, ease: [0.25, 0.1, 0.25, 1] as const } }) }}
              className="bg-white rounded-[20px] overflow-hidden group cursor-default transition-all duration-500 hover:-translate-y-2.5"
              style={{ boxShadow: "0 12px 40px -12px rgba(15,39,71,0.1)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
                <div
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('${opt.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Gold line */}
                <div
                  className="w-8 h-[2px] mb-4 transition-all duration-500 group-hover:w-12"
                  style={{ background: "var(--svc-gold)" }}
                />

                <h3 className="font-bold mb-3" style={{ color: "var(--svc-heading)", fontSize: "18px" }}>
                  {opt.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                  {opt.desc}
                </p>
              </div>

              {/* Hover bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: "var(--svc-gold)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
