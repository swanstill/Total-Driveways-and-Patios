"use client";

import { motion } from "framer-motion";

export default function ServiceVideo() {
  return (
    <section className="py-[120px]" style={{ background: "var(--svc-section)" }}>
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
            — See Us in Action
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Watch Our Work in Progress
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[17px]"
            style={{ color: "var(--svc-body)" }}
          >
            Get a behind-the-scenes look at how we transform driveways from start to finish.
          </motion.p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="max-w-[900px] mx-auto"
        >
          <div
            className="relative rounded-[20px] overflow-hidden group cursor-pointer"
            style={{
              aspectRatio: "16/9",
              boxShadow: "0 24px 64px -16px rgba(15,39,71,0.18)",
              backgroundImage: "url('/gallery-3.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(200,155,74,0.95)", boxShadow: "0 8px 32px rgba(200,155,74,0.4)" }}
              >
                <svg fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" className="w-[30px] h-[30px] ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <div className="text-white text-[15px] font-bold">Block Paving Driveway Installation — Barnsley</div>
              <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>Watch the full transformation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
