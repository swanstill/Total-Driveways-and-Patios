"use client";

import { motion } from "framer-motion";

const options = [
  {
    title: "Patios & Seating Areas",
    desc: "Create defined areas for dining, relaxing or entertaining using porcelain, sandstone, block paving or other suitable materials that suit your home.",
    image: "/gallery-2.jpeg",
  },
  {
    title: "Paths & Access Routes",
    desc: "Connect doors, gates, sheds and seating areas with stable, practical routes that remain usable in wet weather and coordinate with the wider garden.",
    image: "/gallery-1.jpeg",
  },
  {
    title: "Turf & Lawn Areas",
    desc: "Replace worn or uneven ground with prepared turf, or discuss low-maintenance alternatives where natural lawn is not appropriate for the space.",
    image: "/gallery-4.jpeg",
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

export default function LandscapingOptions() {
  return (
    <section className="py-[120px]" style={{ background: "var(--svc-section)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <motion.span custom={0} variants={fadeUp} className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--svc-gold)" }}>
            — Our Services
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="mt-5 mb-5" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Landscaping Services & Design Elements
          </motion.h2>
          <motion.div custom={2} variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, delay: 0.3 } } }} className="w-[48px] h-[3px] mx-auto" style={{ background: "var(--svc-gold)" }} />
          <motion.p custom={3} variants={fadeUp} className="mt-6 text-[17px]" style={{ color: "var(--svc-body)" }}>
            The final scope is tailored to the property — from patios and paths to fencing, walls
            and drainage — all coordinated within a single landscape plan.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.1, ease: [0.25, 0.1, 0.25, 1] as const } }) }}
              className="bg-white rounded-[20px] overflow-hidden group cursor-default transition-all duration-500 hover:-translate-y-2.5"
              style={{ boxShadow: "0 12px 40px -12px rgba(15,39,71,0.1)" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${opt.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7">
                <div className="w-8 h-[2px] mb-3 transition-all duration-500 group-hover:w-12" style={{ background: "var(--svc-gold)" }} />
                <h3 className="font-bold mb-2" style={{ color: "var(--svc-heading)", fontSize: "17px" }}>{opt.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--svc-body)" }}>{opt.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: "var(--svc-gold)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
