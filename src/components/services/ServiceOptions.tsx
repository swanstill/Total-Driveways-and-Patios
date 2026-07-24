"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const benefits = [
  "Wide range of colours, patterns and finishes",
  "Excellent durability for vehicle and pedestrian traffic",
  "Low maintenance — simple jet washing keeps it fresh",
  "Individual blocks can be lifted and replaced for utility access",
  "Permeable options available for SUDS compliance",
  "Increases property value and kerb appeal",
];

const options = [
  {
    title: "Traditional Block Paving",
    desc: "Classic herringbone and stretcher-bond patterns in warm clay, charcoal and buff tones. Perfect for period properties and traditional homes.",
    image: "/gallery-1.jpeg",
  },
  {
    title: "Modern Block Paving",
    desc: "Large-format concrete blocks with clean rectilinear lines and contemporary grey, graphite and basalt finishes for a sleek appearance.",
    image: "/gallery-2.jpeg",
  },
  {
    title: "Permeable Block Paving",
    desc: "SUDS-compliant porous paving with integrated drainage. Ideal for driveways where water management is a priority.",
    image: "/gallery-5.jpeg",
  },
];

export default function ServiceOptions() {
  return (
    <>
      {/* ─── WHY CHOOSE BLOCK PAVING ─── */}
      <section className="svc-section" style={{ background: "var(--svc-white)" }}>
        <div className="svc-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                custom={0}
                variants={fadeUp}
                className="text-[12px] font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--svc-gold)" }}
              >
                Why Choose Block Paving?
              </motion.span>

              <motion.h2
                custom={1}
                variants={fadeUp}
                className="mt-4 mb-5"
                style={{ color: "var(--svc-heading)" }}
              >
                Timeless Beauty, Built to Last
              </motion.h2>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-[17px] leading-relaxed mb-6"
                style={{ color: "var(--svc-body)" }}
              >
                Block paving has been the UK&apos;s favourite driveway surface for decades — and for good
                reason. It combines exceptional durability with design flexibility, allowing you to
                create a unique pattern and colour scheme that complements your property.
              </motion.p>

              <motion.ul custom={3} variants={fadeUp} className="space-y-4 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--svc-body)" }}>
                    <svg
                      fill="none"
                      stroke="var(--svc-gold)"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px] mt-[3px] flex-shrink-0"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {b}
                  </li>
                ))}
              </motion.ul>

              <motion.div custom={4} variants={fadeUp}>
                <Link href="#quote" className="btn-svc btn-svc-primary">
                  Get Your Free Quote
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div
                className="rounded-[20px] overflow-hidden shadow-[0_24px_64px_-16px_rgba(15,39,71,0.15)]"
                style={{ aspectRatio: "4/3.6" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/gallery-4.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              {/* Gold accent */}
              <div
                className="absolute -bottom-4 -right-4 w-[120px] h-[120px] rounded-[20px] -z-10"
                style={{ background: "linear-gradient(135deg, var(--svc-gold), var(--svc-gold-hover))", opacity: 0.15 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK PAVING OPTIONS ─── */}
      <section className="svc-section" style={{ background: "var(--svc-section)" }}>
        <div className="svc-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-[12px] font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--svc-gold)" }}
            >
              Our Range
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="mt-4"
              style={{ color: "var(--svc-heading)" }}
            >
              Block Paving Options
            </motion.h2>
            <motion.div custom={2} variants={fadeUp} className="gold-line mx-auto mt-5" />
            <motion.p
              custom={3}
              variants={fadeUp}
              className="mt-5 text-[17px]"
              style={{ color: "var(--svc-body)" }}
            >
              Choose from three premium block paving styles, each offering a distinct look and
              performance characteristics tailored to your property.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="svc-card overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
                  <div
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                    style={{
                      backgroundImage: `url('${opt.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-[20px] mb-3" style={{ color: "var(--svc-heading)" }}>
                    {opt.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                    {opt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
