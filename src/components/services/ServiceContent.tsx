"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ServiceContent() {
  return (
    <section className="py-[120px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
          {/* Main content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span custom={0} variants={fadeUp} className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--svc-gold)" }}>
              — Everything You Need to Know
            </motion.span>
            <motion.h2 custom={1} variants={fadeUp} className="mt-5 mb-6" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              A Complete Guide to Block Paving Driveways
            </motion.h2>

            <motion.div custom={2} variants={fadeUp} className="prose max-w-none space-y-5" style={{ color: "var(--svc-body)", fontSize: "16.5px", lineHeight: "1.8" }}>
              <p>
                A block paving driveway is more than just a place to park your car — it&apos;s a defining
                feature of your home&apos;s kerb appeal. Whether you prefer the timeless elegance of a
                classic herringbone pattern or the clean, contemporary lines of a modern large-format
                design, block paving offers a versatile, durable solution that enhances both the look
                and value of your property.
              </p>
              <p>
                At Total Driveways &amp; Patios, we design and install block paving driveways with
                uncompromising attention to detail. Using high-quality materials from trusted UK
                manufacturers, we ensure every project is built to last — with a solid sub-base,
                accurate edge restraints, and precise laying that creates a flat, stable surface
                your family and vehicles will enjoy for decades.
              </p>
              <h3 className="text-[24px] font-bold mt-10 mb-4" style={{ color: "var(--svc-heading)" }}>Why Barnsley Homeowners Choose Block Paving</h3>
              <p>
                Our area has a mix of traditional stone-built homes and new-build developments, and
                block paving suits them all. It offers the perfect balance of practicality and
                appearance, giving you a hard-wearing surface that resists cracking, fading and
                weathering. With the right installation — which is exactly what we provide —
                your block paving will remain beautiful for 20 years or more with minimal upkeep.
              </p>
              <h3 className="text-[24px] font-bold mt-10 mb-4" style={{ color: "var(--svc-heading)" }}>Our Approach to Quality</h3>
              <p>
                Every Total Driveways project follows a structured process: thorough ground
                preparation with Type 1 MOT sub-base, accurate falls for drainage, compacted
                laying-course sand, and skilled block installation. We finish with kiln-dried
                sand brushing and two-stage compaction for a professional result that meets (and
                often exceeds) industry standards.
              </p>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              className="rounded-[20px] p-8 sticky top-[90px]"
              style={{ background: "var(--svc-deep-navy, #08213F)" }}
            >
              <h3 className="text-[18px] font-bold !text-white mb-6">Get a Free Quote</h3>
              <p className="text-[14px] mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Ready to transform your driveway? Request a free, no-obligation quote and one of
                our team will be in touch within 24 hours.
              </p>
              <Link
                href="#quote"
                className="block w-full text-center font-bold text-[15px] px-6 py-3.5 rounded-[10px] transition-all mb-4"
                style={{ background: "var(--svc-gold)", color: "#fff" }}
              >
                Request Free Quote
              </Link>
              <Link
                href="tel:07722151231"
                className="block w-full text-center font-semibold text-[14px] px-6 py-3 rounded-[10px] transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
              >
                Call 07722 151231
              </Link>
              <div className="mt-6 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex justify-center gap-[2px] mb-2" style={{ color: "var(--svc-gold)" }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[15px] h-[15px]">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-[12px] font-medium !text-white">Rated 4.8 / 5 on Google</div>
                <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>50+ verified reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
