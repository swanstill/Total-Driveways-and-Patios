"use client";

import { motion } from "framer-motion";

const projects = [
  { image: "/resin-gallery-1.jpg", title: "Resin Driveway Finish", location: "Barnsley" },
  { image: "/resin-gallery-2.jpg", title: "Resin-Bound Pathway", location: "Barnsley" },
  { image: "/resin-gallery-3.jpg", title: "Decorative Resin Patio", location: "Barnsley" },
  { image: "/resin-gallery-4.jpg", title: "Resin & Block Combination", location: "Barnsley" },
];

export default function ResinGallery() {
  return (
    <section id="gallery" className="py-[120px]" style={{ background: "var(--svc-section)" }}>
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
            — Our Recent Work
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Project Gallery
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[17px]"
            style={{ color: "var(--svc-body)" }}
          >
            Take a look at some of the resin driveway and patio projects we&apos;ve completed
            recently for homeowners across Barnsley and South Yorkshire.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.1, ease: [0.25, 0.1, 0.25, 1] as const } }) }}
              className="group rounded-[16px] overflow-hidden cursor-pointer"
              style={{ boxShadow: "0 8px 24px -8px rgba(15,39,71,0.08)" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={p.image}
                  alt={`${p.title} - Total Driveways and Patios`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="text-white text-[14px] font-bold">Resin Driveway Barnsley</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
