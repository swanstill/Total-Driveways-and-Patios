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

const quickLinks = [
  { label: "Block Paving Options", href: "#options" },
  { label: "Installation Process", href: "#process" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Get a Quote", href: "#quote" },
];

const areas = [
  "Barnsley", "Sheffield", "Rotherham", "Doncaster",
  "Wakefield", "Leeds", "Bradford", "Huddersfield",
  "Chesterfield", "Worksop", "Pontefract", "Penistone",
];

const reviews = [
  { text: "From the first visit to the final clean-up, communication was excellent and the finish is exactly what we wanted.", name: "David E.", meta: "Block paving · Google" },
  { text: "Really pleased with our new patio. The team turned up when they said they would and left the garden spotless.", name: "Sarah L.", meta: "Patio · Google" },
  { text: "Honest advice from the start — no upselling, just a clear explanation of what our driveway actually needed.", name: "Mark P.", meta: "Resin driveway · Google" },
];

export default function ServiceContent() {
  return (
    <section className="svc-section" style={{ background: "var(--svc-white)" }}>
      <div className="svc-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* ─── MAIN ARTICLE ─── */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Breadcrumb */}
            <motion.nav custom={0} variants={fadeUp} className="flex items-center gap-2 text-[13px] mb-6" style={{ color: "var(--svc-body)" }}>
              <Link href="/" className="hover:underline" style={{ color: "var(--svc-gold)" }}>Home</Link>
              <span>/</span>
              <span>Services</span>
              <span>/</span>
              <span className="font-semibold" style={{ color: "var(--svc-heading)" }}>Block Paving</span>
            </motion.nav>

            <motion.h2 custom={1} variants={fadeUp} style={{ color: "var(--svc-heading)" }}>
              What Is Block Paving?
            </motion.h2>
            <motion.div custom={2} variants={fadeUp} className="gold-line mt-4 mb-6" />

            <motion.p custom={3} variants={fadeUp} className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              Block paving is one of the most popular driveway surfaces in the UK, and it&apos;s easy to
              see why. Individual concrete or clay blocks are laid in decorative patterns over a
              well-prepared sub-base, creating a surface that is both incredibly durable and visually
              appealing.
            </motion.p>

            <motion.p custom={4} variants={fadeUp} className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--svc-body)" }}>
              Unlike poured surfaces, block paving allows for individual blocks to be removed and
              reinstated — making access to underground utilities straightforward without leaving
              visible patches. This practical advantage, combined with the wide choice of colours,
              patterns and finishes, makes block paving a smart long-term investment for your property.
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              className="rounded-[20px] overflow-hidden mb-8 shadow-[0_16px_40px_-12px_rgba(15,39,71,0.12)]"
              style={{ aspectRatio: "16/9" }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/gallery-1.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>

            <motion.h3 custom={6} variants={fadeUp} className="mb-4 mt-10" style={{ color: "var(--svc-heading)" }}>
              Why Choose Block Paving for Your Driveway?
            </motion.h3>
            <motion.p custom={7} variants={fadeUp} className="text-[17px] leading-relaxed mb-4" style={{ color: "var(--svc-body)" }}>
              Block paving offers a unique combination of aesthetics, strength and practicality that
              few other surfacing materials can match.
            </motion.p>

            <motion.ul custom={8} variants={fadeUp} className="space-y-4 mb-8">
              {[
                "Exceptional load-bearing capacity — suitable for all domestic vehicles",
                "Wide range of colours, patterns and finishes to suit any property style",
                "Individual blocks can be lifted and replaced for utility access",
                "Permeable options available that comply with SUDS regulations",
                "Low maintenance — occasional jet washing keeps it looking fresh",
                "Increases property value with instant kerb appeal",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--svc-body)" }}>
                  <svg
                    fill="none"
                    stroke="var(--svc-gold)"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-[18px] h-[18px] mt-[3px] flex-shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.h3 custom={9} variants={fadeUp} className="mb-4 mt-10" style={{ color: "var(--svc-heading)" }}>
              Block Paving Patterns
            </motion.h3>
            <motion.p custom={10} variants={fadeUp} className="text-[17px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              The pattern you choose dramatically affects the overall look of your driveway. The most
              popular options include:
            </motion.p>

            <motion.div custom={11} variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { p: "Herringbone", d: "The classic 45° or 90° interlocking pattern, ideal for driveways carrying vehicles." },
                { p: "Stretcher Bond", d: "A clean, linear layout that works beautifully on patios and pathways." },
                { p: "Basket Weave", d: "A square-block pattern that creates a subtle textured, woven appearance." },
                { p: "Random Mix", d: "Multiple block sizes in a single layout for a distinctive, bespoke look." },
              ].map(({ p, d }) => (
                <div
                  key={p}
                  className="p-5 rounded-[16px]"
                  style={{ background: "var(--svc-section)", border: "1px solid var(--svc-border)" }}
                >
                  <h4 className="font-bold text-[15px] mb-1" style={{ color: "var(--svc-heading)" }}>{p}</h4>
                  <p className="text-[14px]" style={{ color: "var(--svc-body)" }}>{d}</p>
                </div>
              ))}
            </motion.div>

            <motion.p custom={12} variants={fadeUp} className="text-[17px] leading-relaxed mb-8" style={{ color: "var(--svc-body)" }}>
              During your free site visit, we&apos;ll discuss which pattern and colour combination will
              work best for your property, taking into account the style of your home, the size and
              shape of the area, and your personal taste.
            </motion.p>

            <motion.div custom={13} variants={fadeUp}>
              <Link href="#quote" className="btn-svc btn-svc-primary">
                Request Your Free Quote
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[17px] h-[17px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          </motion.article>

          {/* ─── SIDEBAR ─── */}
          <aside className="relative">
            <div className="lg:sticky lg:top-6 space-y-6 sidebar-scroll" style={{ maxHeight: "calc(100vh - 48px)", overflowY: "auto" }}>
              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true }}
                className="svc-card p-6"
              >
                <h4 className="text-[17px] font-bold mb-2" style={{ color: "var(--svc-heading)" }}>Get a Free Quote</h4>
                <p className="text-[14px] mb-5" style={{ color: "var(--svc-body)" }}>
                  No obligation. Just honest advice and a clear price.
                </p>
                <Link href="#quote" className="btn-svc btn-svc-primary w-full justify-center text-[14px] !px-4 mb-3">
                  Request Free Quote
                </Link>
                <Link href="tel:07722151231" className="flex items-center justify-center gap-2 text-[14px] font-semibold w-full py-3 rounded-[12px] transition-colors" style={{ color: "var(--svc-navy)", background: "var(--svc-section)" }}>
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[16px] h-[16px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
                  </svg>
                  Call 07722 151231
                </Link>
              </motion.div>

              {/* Areas Covered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="svc-card p-6"
              >
                <h4 className="text-[16px] font-bold mb-4" style={{ color: "var(--svc-heading)" }}>Areas We Cover</h4>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <span
                      key={a}
                      className="text-[12.5px] font-medium px-3 py-1.5 rounded-[8px]"
                      style={{ background: "var(--svc-section)", color: "var(--svc-body)", border: "1px solid var(--svc-border)" }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="svc-card p-6"
              >
                <h4 className="text-[16px] font-bold mb-4" style={{ color: "var(--svc-heading)" }}>Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="flex items-center gap-2 text-[14px] font-medium transition-colors"
                        style={{ color: "var(--svc-body)" }}
                      >
                        <svg fill="none" stroke="var(--svc-gold)" strokeWidth="2" viewBox="0 0 24 24" className="w-[14px] h-[14px]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="hover:underline">{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="svc-card p-6"
              >
                <h4 className="text-[16px] font-bold mb-4" style={{ color: "var(--svc-heading)" }}>What Our Customers Say</h4>
                <div className="space-y-4">
                  {reviews.map((r) => (
                    <div key={r.name} className="pb-4" style={{ borderBottom: "1px solid var(--svc-border)" }}>
                      <div className="flex gap-[2px] mb-2" style={{ color: "var(--svc-gold)" }}>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[14px] h-[14px]">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[13px] leading-relaxed mb-2" style={{ color: "var(--svc-body)" }}>&ldquo;{r.text}&rdquo;</p>
                      <div className="text-[12px] font-semibold" style={{ color: "var(--svc-heading)" }}>
                        {r.name} <span style={{ color: "var(--svc-body)", fontWeight: 400 }}>· {r.meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Opening Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="svc-card p-6"
              >
                <h4 className="text-[16px] font-bold mb-3" style={{ color: "var(--svc-heading)" }}>Opening Hours</h4>
                <div className="space-y-2 text-[14px]" style={{ color: "var(--svc-body)" }}>
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold" style={{ color: "var(--svc-heading)" }}>8am – 5pm</span></div>
                  <div className="flex justify-between" style={{ borderTop: "1px solid var(--svc-border)", paddingTop: 8 }}><span>Saturday</span><span className="font-semibold" style={{ color: "var(--svc-heading)" }}>9am – 1pm</span></div>
                  <div className="flex justify-between" style={{ borderTop: "1px solid var(--svc-border)", paddingTop: 8 }}><span>Sunday</span><span className="font-semibold" style={{ color: "var(--svc-body)" }}>Closed</span></div>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
