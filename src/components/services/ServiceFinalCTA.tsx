"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceFinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--svc-deep-navy)" }}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 30%, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="svc-container relative z-10 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[750px] mx-auto"
        >
          <motion.h2
            custom={0}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
            }}
            className="!text-white leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Ready to Transform Your Block Paving Driveway?
          </motion.h2>

          <motion.p
            custom={1}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
            }}
            className="text-[17px] mb-10"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Get in touch today for a free, no-obligation site visit and quotation. We&apos;ll discuss
            your project, show you samples and provide a clear price — no pressure, no hidden extras.
          </motion.p>

          <motion.div
            custom={2}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="#quote" className="btn-svc btn-svc-primary text-[16px] !px-8 !py-4">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
              </svg>
              Get Free Quote
            </Link>
            <Link href="tel:07722151231" className="btn-svc btn-svc-secondary text-[16px] !px-8 !py-4">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
              </svg>
              Call 07722 151231
            </Link>
          </motion.div>

          <motion.p
            custom={3}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }),
            }}
            className="mt-8 text-[14px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            No obligation · Free site visit · Clear pricing · 5-year guarantee
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
