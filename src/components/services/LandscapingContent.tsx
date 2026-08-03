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

export default function LandscapingContent() {
  return (
    <section className="relative py-[120px]" style={{ background: "#fff" }}>
      {/* Subtle diagonal grain pattern */}
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, #0F2747 0 1px, transparent 1px 22px)`, backgroundSize: "22px 22px" }} />

      {/* Decorative gold glow */}
      <div className="absolute -top-[160px] -right-[120px] w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
          {/* MAIN CONTENT */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
            {/* Eyebrow */}
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-4 mb-5">
              <span className="inline-block w-8 h-[2px]" style={{ background: "var(--svc-gold)" }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "var(--svc-gold)" }}>
                Everything You Need to Know
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={fadeUp} className="mb-8 leading-[1.12]" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              A Complete Guide to{" "}
              <span style={{ color: "var(--svc-gold)" }}>Garden Landscaping</span>
            </motion.h2>

            {/* LEDE */}
            <motion.div custom={2} variants={fadeUp} className="relative pl-6 mb-8" style={{ borderLeft: "3px solid var(--svc-gold)" }}>
              <p className="text-[17.5px] leading-relaxed font-medium" style={{ color: "var(--svc-heading)" }}>
                A garden makeover is rarely only about adding one attractive feature. A new patio
                may need a path to the gate. A lawn may need retaining at one side. Fencing, steps
                and planting areas can affect the levels and access. Treating each item as a separate
                decision may lead to repeated excavation, mismatched materials and awkward transitions.
              </p>
            </motion.div>

            {/* COORDINATED PLANNING */}
            <motion.p custom={3} variants={fadeUp} className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Landscaping planned as one complete space.</strong>{" "}
              A coordinated landscaping plan starts with the practical questions. How will people
              move from the house to the garden? Where is the sun at the time the patio is likely
              to be used? Does the customer need play space, low-maintenance planting, secure
              boundaries, storage access or room for pets? Which existing trees, walls or surfaces
              are worth retaining?
            </motion.p>

            <motion.p custom={4} variants={fadeUp} className="text-[16px] leading-relaxed mb-8" style={{ color: "var(--svc-body)" }}>
              The design does not have to be complicated. Clear zones, sensible paths and a
              restrained material palette often create a stronger result than filling the garden
              with too many features.
            </motion.p>

            {/* DESIGN ZONES */}
            <motion.div custom={5} variants={fadeUp} className="relative p-8 rounded-[20px] mb-8" style={{ background: "#FBF9F4", border: "1px solid rgba(200,155,74,0.1)" }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(200,155,74,0.12)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold mb-1" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}>
                    Designing Zones Around Real Use
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                    A useful garden normally includes distinct but connected zones. The area closest
                    to the house is often best for dining and everyday access. A sunny or sheltered
                    corner can become a smaller seating space. Lawns or open areas can remain available
                    for children and pets, while bins, sheds and utilities need practical routes that
                    do not cut through the main relaxation space.
                  </p>
                  <p className="text-[14px] leading-relaxed mt-3" style={{ color: "var(--svc-body)" }}>
                    The designer should avoid copying a fashionable layout that does not fit the
                    customer&apos;s routine. The final plan should make movement feel natural and keep
                    maintenance at a level the household is comfortable with.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SLOPING GARDENS */}
            <motion.p custom={6} variants={fadeUp} className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Working with sloping or awkward gardens.</strong>{" "}
              Changes of level can be handled through steps, terraces, retaining structures and
              graded paths. The solution must be safe, properly founded and capable of managing
              water. Retaining work may require specialist structural design depending on height
              and site conditions. A slope can become an asset when terraces create separate spaces
              and better views, but it should not be hidden behind weak decorative edging.
            </motion.p>

            {/* MATERIAL COORDINATION */}
            <motion.div custom={7} variants={fadeUp} className="relative p-8 rounded-[20px] mb-8" style={{ background: "var(--svc-deep-navy, #08213F)", boxShadow: "0 16px 48px -12px rgba(8,33,63,0.25)" }}>
              <div className="relative">
                <div className="absolute -top-[80px] -right-[60px] w-[200px] h-[200px] rounded-full opacity-[0.06] pointer-events-none" style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }} />
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,155,74,0.15)" }}>
                    <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold !text-white" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                    Material Coordination
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Using too many unrelated products can make a small garden feel fragmented. A limited
                  palette — such as one main paving material, one contrasting edge and a consistent
                  wall or fence tone — creates a calmer design. Materials can also connect the front
                  and back of the property. The same border block, for example, may frame a driveway,
                  path and patio without every surface being identical.
                </p>
              </div>
            </motion.div>

            {/* PREPARATION & CONSTRUCTION */}
            <motion.p custom={8} variants={fadeUp} className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Preparation, waste and construction sequence.</strong>{" "}
              Landscaping often involves significant excavation and waste removal. Access for
              machinery, protection of the house and neighbouring property, storage of materials
              and the order of construction should be planned before work begins. Heavy groundwork
              and walls are completed before delicate paving, turf and final planting areas. This
              prevents completed finishes being damaged by later stages.
            </motion.p>

            {/* MAINTENANCE */}
            <motion.div custom={9} variants={fadeUp} className="relative p-8 rounded-[20px] mb-8" style={{ background: "#FBF9F4", border: "1px solid rgba(200,155,74,0.1)" }}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,155,74,0.12)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold mb-1" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}>
                    Maintenance, Durability and Repairs
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                    Maintenance should be discussed during design rather than after the garden is
                    finished. Large paved areas need sweeping and occasional cleaning. Turf requires
                    mowing, feeding and watering during establishment. Timber fencing and features
                    may require treatment, while planted beds need a realistic approach to weeding
                    and pruning.
                  </p>
                  <p className="text-[14px] leading-relaxed mt-3" style={{ color: "var(--svc-body)" }}>
                    Choosing materials purely because they are described as low-maintenance can be
                    misleading. Every garden needs some care. The aim is to design a space whose
                    maintenance matches the customer&apos;s time and expectations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* QUALITY CARD */}
            <motion.div custom={10} variants={fadeUp} className="relative p-8 rounded-[20px]" style={{ background: "#fff", border: "1px solid rgba(15,39,71,0.06)", boxShadow: "0 8px 30px -12px rgba(15,39,71,0.08)" }}>
              <div className="absolute top-0 left-8 right-8 h-[3px] rounded-b-[2px]" style={{ background: "var(--svc-gold)" }} />
              <div className="flex items-start gap-4 mb-5 mt-2">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(200,155,74,0.12)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}>
                  Our Approach to Quality
                </h3>
              </div>
              <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
                Every landscaping project we undertake follows a thorough process: detailed site
                assessment, coordinated planning, proper groundwork and drainage, quality installation
                of hard and soft elements, and full finishing before handover. We stand behind our
                work and provide a full guarantee on every installation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Detailed site assessment & garden survey",
                  "Coordinated planning & material selection",
                  "Proper groundwork, drainage & retaining",
                  "Quality installation of hard & soft elements",
                  "Full finishing, clean-up & handover",
                  "Guarantee on every project",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14px]" style={{ color: "var(--svc-body)" }}>
                    <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--svc-gold)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-5 self-start sticky top-[90px]">
            {/* Quote card */}
            <div className="rounded-[20px] p-8 overflow-hidden relative" style={{ background: "var(--svc-deep-navy, #08213F)" }}>
              <div className="absolute -bottom-[80px] -right-[80px] w-[240px] h-[240px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--svc-gold)" }} />
              <div className="relative">
                <h3 className="text-[18px] font-bold !text-white mb-2">Get a Free Landscaping Quote</h3>
                <p className="text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Arrange a site visit to discuss the area, suitable materials, groundwork and
                  the finish you would like to achieve. You will receive a clear quotation based
                  on the actual project.
                </p>
                <Link href="#quote" className="block w-full text-center font-bold text-[15px] px-6 py-3.5 rounded-[12px] transition-all hover:brightness-110 mb-3" style={{ background: "var(--svc-gold)", color: "#fff" }}>
                  Request a Free Quote
                </Link>
                <Link href="tel:08009949855" className="block w-full text-center font-semibold text-[14px] px-6 py-3 rounded-[12px] transition-all" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                  Call 0800 994 9855
                </Link>
                <div className="mt-6 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex justify-center gap-[2px] mb-2" style={{ color: "var(--svc-gold)" }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[14px] h-[14px]">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[12px] font-medium !text-white">Rated 5.0 / 5 on Google</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>50+ verified reviews</div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-[16px] p-5 relative flex flex-col" style={{ background: "#FBF9F4", border: "1px solid rgba(200,155,74,0.1)", height: "560px" }}>
              <div className="flex items-center gap-2.5 mb-3 flex-shrink-0">
                <span className="inline-block w-4 h-[2px]" style={{ background: "var(--svc-gold)" }} />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--svc-gold)" }}>Benefits</span>
              </div>
              <h3 className="text-[16px] font-bold mb-1 leading-snug flex-shrink-0" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}>
                Benefits of Landscaping
              </h3>
              <p className="text-[12.5px] leading-relaxed mb-4 flex-shrink-0" style={{ color: "var(--svc-body)" }}>
                Why professional landscaping transforms the way you use your garden.
              </p>
              <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1 min-h-0 sidebar-scroll">
                {[
                  "Creates a Coherent Plan Rather Than Separate Jobs",
                  "Improves Circulation & Garden Access",
                  "Reduces Mud, Uneven Ground & Difficult Maintenance",
                  "Coordinates Patios, Paths & Boundaries",
                  "Makes Better Use of Small or Awkward Spaces",
                  "Increases Privacy & Provides Clear Boundaries",
                  "Supports Phased Improvements Over Time",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 px-3.5 py-3 rounded-[10px] transition-all duration-200 hover:-translate-y-[1px]" style={{ background: "#fff", boxShadow: "0 1px 4px -1px rgba(15,39,71,0.04)" }}>
                    <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: "var(--svc-gold)" }} />
                    <span className="text-[13px] font-semibold leading-snug" style={{ color: "var(--svc-heading)" }}>{item}</span>
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
