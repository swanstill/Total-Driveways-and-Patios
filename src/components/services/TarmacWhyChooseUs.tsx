"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const features = [
  {
    title: "Practical & Cost-Conscious",
    desc: "Tarmac offers a strong balance of cost, installation speed and practicality. It's an excellent choice for driveways, paths and access areas where straightforward surfacing is the priority.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Continuous Surface, No Loose Gravel",
    desc: "A seamless tarmac finish eliminates loose stones, making it ideal for driveways where vehicles turn regularly and foot traffic needs a clean, stable surface.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Good Grip for Sloped Drives",
    desc: "Tarmac's slightly textured surface provides useful grip in wet and cold conditions, making it a sensible choice for sloping driveways and access areas where traction matters.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Can Be Framed with Block Borders",
    desc: "Decorative block-paving borders can be added to frame the tarmac, protect edges and coordinate with paths, steps or the brickwork of your property.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

export default function TarmacWhyChooseUs() {
  return (
    <section className="relative py-[120px] overflow-hidden" style={{ background: "#FBF9F4" }}>
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(15,39,71,0.04) 14px, rgba(15,39,71,0.04) 15px),
            repeating-linear-gradient(-45deg, transparent, transparent 14px, rgba(15,39,71,0.04) 14px, rgba(15,39,71,0.04) 15px)
          `,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Decorative gold glow — top left */}
      <div
        className="absolute -top-[200px] -left-[150px] w-[450px] h-[450px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
        >
          {/* === Left: Content === */}
          <div>
            {/* Eyebrow with gold line */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-5">
              <span
                className="inline-block w-10 h-[2px]"
                style={{ background: "var(--svc-gold)" }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "rgba(200,155,74,0.8)" }}
              >
                Why Choose Tarmac Driveways?
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-5 leading-[1.1]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(28px, 2.8vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--svc-heading, #0F2747)",
              }}
            >
              Practical Surfacing,{" "}
              <span style={{ color: "var(--svc-gold)" }}>Built for Everyday Use</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[16.5px] leading-relaxed mb-10 max-w-[52ch]"
              style={{ color: "var(--svc-body, #616161)" }}
            >
              Tarmac driveways offer a durable, continuous surface that handles daily vehicle
              traffic with ease. Whether you need a straightforward driveway, a wider access
              area or a long drive, tarmac combines practicality with a clean, understated
              finish that works for almost any property.
            </motion.p>

            {/* Feature tiles */}
            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-5 rounded-[16px] transition-all duration-300"
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 20px -8px rgba(15,39,71,0.08)",
                    border: "1px solid rgba(15,39,71,0.04)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(200,155,74,0.1)" }}
                  >
                    <svg
                      fill="none"
                      stroke="var(--svc-gold)"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px]"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <div
                      className="font-bold text-[15px] mb-1"
                      style={{ color: "var(--svc-heading, #0F2747)" }}
                    >
                      {f.title}
                    </div>
                    <div
                      className="text-[14px] leading-relaxed"
                      style={{ color: "var(--svc-body, #616161)" }}
                    >
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href="#quote"
                className="inline-flex items-center gap-2.5 font-bold text-[14px] px-[18px] py-3 rounded-[6px] transition-all hover:brightness-110"
                style={{
                  background: "var(--svc-gold)",
                  color: "#fff",
                  boxShadow: "0 8px 28px -6px rgba(200,155,74,0.45)",
                }}
              >
                Get Your Free Quote
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* === Right: Image + Decorative Elements === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative"
          >
            {/* Gold accent line behind image */}
            <div
              className="absolute -top-6 -bottom-6 right-6 w-[2px] rounded-full opacity-[0.12] hidden lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, var(--svc-gold) 0%, transparent 100%)",
              }}
            />

            {/* Image container with decorative frame */}
            <div className="relative pl-0 lg:pl-6">
              {/* Top-left decorative bracket */}
              <div
                className="absolute top-0 left-6 w-8 h-8 opacity-[0.15] z-10 hidden lg:block"
                style={{
                  borderTop: "2px solid var(--svc-gold)",
                  borderLeft: "2px solid var(--svc-gold)",
                }}
              />

              {/* Main image */}
              <div
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  boxShadow: "0 24px 64px -16px rgba(15,39,71,0.18)",
                  border: "1px solid rgba(15,39,71,0.06)",
                }}
              >
                <div
                  className="w-full h-[520px] lg:h-[580px] hover:scale-[1.03] transition-transform duration-700"
                  style={{
                    backgroundImage: "url('/tarmac-why-choose-us.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Soft overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(8,33,63,0.2) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="absolute -bottom-4 right-8 flex items-center gap-3 px-5 py-3.5 rounded-[14px]"
                style={{
                  background: "var(--svc-navy, #0F2747)",
                  boxShadow: "0 12px 40px -8px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="text-[22px] font-extrabold leading-none"
                  style={{ color: "var(--svc-gold)" }}
                >
                  15+
                </span>
                <span
                  className="text-[12px] leading-tight"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Years<br />Experience
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
