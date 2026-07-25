"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const statCallout = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ResinContent() {
  return (
    <section className="relative py-[120px]" style={{ background: "#fff" }}>
      {/* Subtle diagonal grain pattern */}
      <div
        className="absolute inset-0 opacity-[0.008] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #0F2747 0 1px, transparent 1px 22px)`,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Decorative gold glow — top right */}
      <div
        className="absolute -top-[160px] -right-[120px] w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
          {/* ===== MAIN CONTENT ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Eyebrow with gold line */}
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-4 mb-5">
              <span className="inline-block w-8 h-[2px]" style={{ background: "var(--svc-gold)" }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--svc-gold)" }}>
                Everything You Need to Know
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="mb-8 leading-[1.12]"
              style={{
                color: "var(--svc-heading)",
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(28px, 2.8vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              A Complete Guide to{" "}
              <span style={{ color: "var(--svc-gold)" }}>Resin Driveways</span>
            </motion.h2>

            {/* === LEDE === */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="relative pl-6 mb-8"
              style={{ borderLeft: "3px solid var(--svc-gold)" }}
            >
              <p
                className="text-[17.5px] leading-relaxed font-medium"
                style={{ color: "var(--svc-heading)" }}
              >
                A clean, contemporary driveway with a practical, durable surface — that&apos;s
                what resin can deliver. Unlike traditional paving, resin-bound surfacing creates
                a smooth, seamless finish that resists weeds, standing water and staining, while
                offering a wide choice of natural aggregate colours and textures to complement
                any home.
              </p>
            </motion.div>

            {/* === SECOND PARAGRAPH: Resin colours, aggregates and design options === */}
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-[16px] leading-relaxed mb-8"
              style={{ color: "var(--svc-body)" }}
            >
              One of the biggest advantages of resin is the sheer range of looks you can achieve.
              Natural aggregates — from rich ochres and warm ambers to cool greys and deep
              charcoal — are mixed with clear or tinted UV-stable resin to create a surface that
              matches your property&apos;s style. You can also introduce borders, banding, or
              contrasting colour blends for a truly bespoke design.
            </motion.p>

            {/* === THIRD PARAGRAPH: Resin-bound vs resin-bonded === */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="relative p-8 rounded-[20px] mb-8"
              style={{
                background: "#FBF9F4",
                border: "1px solid rgba(200,155,74,0.1)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(200,155,74,0.12)" }}
                >
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-[20px] font-bold mb-1"
                    style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    Resin-Bound vs Resin-Bonded — What&apos;s the Difference?
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                    <strong>Resin-bound</strong> (or resin-bonded) surfacing mixes aggregates into the resin before
                    trowelling — creating a smooth, porous, SUDS-compliant surface ideal for
                    driveways. <strong>Resin-bonded</strong> uses a scatter-coat technique where
                    loose aggregate is sprinkled onto a resin base layer, giving a textured,
                    gravel-like finish. Your choice depends on the look you want, the planned
                    use, and whether permeability is a requirement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* === PARAGRAPH: Assessing the existing base === */}
            <motion.p
              custom={5}
              variants={fadeUp}
              className="text-[16px] leading-relaxed mb-6"
              style={{ color: "var(--svc-body)" }}
            >
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Assessing the existing base.</strong>{" "}
              Every resin installation starts with a thorough site assessment. We check the
              condition of any existing base — whether concrete, tarmac, or stone — to determine
              whether it can be overlaid or needs to be removed. We also evaluate drainage
              falls, edge restraints and the height of adjoining thresholds to plan the build-up.
            </motion.p>

            {/* === PARAGRAPH: New-base construction === */}
            <motion.p
              custom={6}
              variants={fadeUp}
              className="text-[16px] leading-relaxed mb-6"
              style={{ color: "var(--svc-body)" }}
            >
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>New-base construction and preparation.</strong>{" "}
              Where a new base is needed, we excavate to the required depth and install a
              geotextile membrane, compacted Type 1 MOT hardcore and a tarmac or concrete
              binder course. This substructure provides the stability needed to prevent
              cracking or sinking over time, and ensures the correct falls for surface water
              drainage.
            </motion.p>

            {/* === PARAGRAPH: Permeability and drainage === */}
            <motion.div
              custom={7}
              variants={fadeUp}
              className="relative p-8 rounded-[20px] mb-8"
              style={{
                background: "var(--svc-deep-navy, #08213F)",
                boxShadow: "0 16px 48px -12px rgba(8,33,63,0.25)",
              }}
            >
              <div className="relative">
                <div
                  className="absolute -top-[80px] -right-[60px] w-[200px] h-[200px] rounded-full opacity-[0.06] pointer-events-none"
                  style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
                />
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(200,155,74,0.15)" }}
                  >
                    <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3
                    className="text-[20px] font-bold !text-white"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    Permeability and Drainage
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Resin-bound surfacing is naturally porous, allowing rainwater to drain through
                  the surface and into the sub-base below. This makes it SUDS-compliant and can
                  eliminate the need for additional drainage channels or soakaways — an important
                  consideration on many driveway projects where planning permission requires
                  permeable surfacing.
                </p>
              </div>
            </motion.div>

            {/* === PARAGRAPH: Mixing, laying and finishing === */}
            <motion.p
              custom={8}
              variants={fadeUp}
              className="text-[16px] leading-relaxed mb-6"
              style={{ color: "var(--svc-body)" }}
            >
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Mixing, laying and finishing.</strong>{" "}
              We use forced-action mixers to blend the aggregate and resin evenly, ensuring a
              consistent colour and texture. The mix is poured, screeded and trowelled to a
              smooth finish, with careful attention to edges, drainage channels and any
              design features. The resin cures to full hardness within hours, meaning your
              driveway is ready to use the same day or the following morning.
            </motion.p>

            {/* === KNOWLEDGE CARD: Our Approach to Quality === */}
            <motion.div
              custom={9}
              variants={fadeUp}
              className="relative p-8 rounded-[20px]"
              style={{
                background: "#fff",
                border: "1px solid rgba(15,39,71,0.06)",
                boxShadow: "0 8px 30px -12px rgba(15,39,71,0.08)",
              }}
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[3px] rounded-b-[2px]" style={{ background: "var(--svc-gold)" }} />

              <div className="flex items-start gap-4 mb-5 mt-2">
                {/* Icon */}
                <div
                  className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(200,155,74,0.12)" }}
                >
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3
                  className="text-[20px] font-bold"
                  style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Our Approach to Quality
                </h3>
              </div>

              <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
                Every resin project we undertake follows a rigorous process: detailed site
                assessment, correct sub-base preparation, use of UV-stable resins and graded
                kiln-dried aggregates, precise mixing ratios, careful application and full
                curing before handover. We stand behind our work and provide a full guarantee
                on every installation.
              </p>

              {/* Process steps mini-list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Thorough site assessment & base check",
                  "Correct sub-base preparation",
                  "UV-stable resin & graded aggregates",
                  "Forced-action mixing for consistency",
                  "Professional screeding & trowelling",
                  "Full guarantee on every installation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px]" style={{ color: "var(--svc-body)" }}>
                    <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--svc-gold)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ===== SIDEBAR ===== */}
          <div className="flex flex-col gap-5 self-start sticky top-[90px]">
            {/* Quote card */}
            <div
              className="rounded-[20px] p-8 overflow-hidden relative"
              style={{ background: "var(--svc-deep-navy, #08213F)" }}
            >
              {/* Subtle gold glow */}
              <div
                className="absolute -bottom-[80px] -right-[80px] w-[240px] h-[240px] rounded-full opacity-[0.05] pointer-events-none"
                style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
              />

              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--svc-gold)" }} />

              <div className="relative">
                <h3 className="text-[18px] font-bold !text-white mb-2">Get a Free Quote</h3>
                <p className="text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Ready to transform your driveway? Request a free, no-obligation quote and one of
                  our team will be in touch within 24 hours.
                </p>
                <Link
                  href="#quote"
                  className="block w-full text-center font-bold text-[15px] px-6 py-3.5 rounded-[12px] transition-all hover:brightness-110 mb-3"
                  style={{ background: "var(--svc-gold)", color: "#fff" }}
                >
                  Request Free Quote
                </Link>
                <Link
                  href="tel:07722151231"
                  className="block w-full text-center font-semibold text-[14px] px-6 py-3 rounded-[12px] transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
                >
                  Call 07722 151231
                </Link>

                {/* Rating */}
                <div className="mt-6 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex justify-center gap-[2px] mb-2" style={{ color: "var(--svc-gold)" }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[14px] h-[14px]">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[12px] font-medium !text-white">Rated 4.8 / 5 on Google</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>50+ verified reviews</div>
                </div>
              </div>
            </div>

            {/* ===== BENEFITS SECTION ===== */}
            <div
              className="rounded-[16px] p-5 relative flex flex-col"
              style={{
                background: "#FBF9F4",
                border: "1px solid rgba(200,155,74,0.1)",
                height: "560px",
              }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3 flex-shrink-0">
                <span className="inline-block w-4 h-[2px]" style={{ background: "var(--svc-gold)" }} />
                <span
                  className="text-[9px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "var(--svc-gold)" }}
                >
                  Benefits
                </span>
              </div>

              <h3
                className="text-[16px] font-bold mb-1 leading-snug flex-shrink-0"
                style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Benefits of Resin Driveways
              </h3>
              <p
                className="text-[12.5px] leading-relaxed mb-4 flex-shrink-0"
                style={{ color: "var(--svc-body)" }}
              >
                Why resin is becoming one of the most popular driveway choices across Barnsley and South Yorkshire.
              </p>

              {/* Cards — scrollable */}
              <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1 min-h-0 sidebar-scroll">
                {[
                  "Smooth, Seamless Finish",
                  "SUDS-Compliant Permeability",
                  "UV-Stable & Colourfast",
                  "Low Maintenance & Easy Clean",
                  "Wide Aggregate & Colour Range",
                  "Weed & Stain Resistant",
                  "Adds Property Value",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-[10px] transition-all duration-200 hover:-translate-y-[1px]"
                    style={{
                      background: "#fff",
                      boxShadow: "0 1px 4px -1px rgba(15,39,71,0.04)",
                    }}
                  >
                    {/* Gold dot */}
                    <span
                      className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                      style={{ background: "var(--svc-gold)" }}
                    />
                    <span
                      className="text-[13px] font-semibold leading-snug"
                      style={{ color: "var(--svc-heading)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
