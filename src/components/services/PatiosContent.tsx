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

export default function PatiosContent() {
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
              <span style={{ color: "var(--svc-gold)" }}>Patio Installation</span>
            </motion.h2>

            {/* LEDE */}
            <motion.div custom={2} variants={fadeUp} className="relative pl-6 mb-8" style={{ borderLeft: "3px solid var(--svc-gold)" }}>
              <p className="text-[17.5px] leading-relaxed font-medium" style={{ color: "var(--svc-heading)" }}>
                A patio is most successful when it feels like part of the home rather than a
                paved rectangle placed in the garden. The size should suit the furniture and
                the number of people who will use it. The position should consider sunlight,
                shade, privacy and access from the house. The material should complement the
                property while being practical to clean and safe to walk on.
              </p>
            </motion.div>

            {/* SECOND PARAGRAPH */}
            <motion.p custom={3} variants={fadeUp} className="text-[16px] leading-relaxed mb-8" style={{ color: "var(--svc-body)" }}>
              Some gardens need one main entertaining area. Others work better with a dining
              patio near the back door, a smaller seating area in a sunny corner and connecting
              paths between them. Steps, retaining walls, raised beds and planting can make
              changes of level feel intentional rather than awkward.
            </motion.p>

            {/* PREPARATION NOTE */}
            <motion.p custom={4} variants={fadeUp} className="text-[16px] leading-relaxed mb-8" style={{ color: "var(--svc-body)" }}>
              Beneath the paving, correct preparation and drainage are essential. Poorly
              supported slabs can rock or crack, while unsuitable levels can send rainwater
              towards the building. The aim is a stable, well-drained space with neat joints
              and carefully finished edges.
            </motion.p>

            {/* MATERIALS SECTION */}
            <motion.div custom={5} variants={fadeUp} className="relative p-8 rounded-[20px] mb-8" style={{ background: "#FBF9F4", border: "1px solid rgba(200,155,74,0.1)" }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(200,155,74,0.12)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold mb-1" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}>
                    Patio Materials and Finishes
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                    The material influences colour, texture, maintenance, joint width and the
                    overall character of the garden. Samples should be viewed outdoors and the
                    slip resistance and intended use should be considered.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Porcelain Paving",
                    desc: "Clean, consistent finish with accurately sized slabs and low water absorption. Available in stone, concrete and timber-effect designs.",
                  },
                  {
                    title: "Indian Sandstone",
                    desc: "Natural variation, warm mixed tones and traditional texture. Every slab is slightly different, giving the finished patio genuine character.",
                  },
                  {
                    title: "Slate & Dark Stone",
                    desc: "Deep blue-grey or charcoal appearance with distinctive texture. Dark paving creates visual strength — surrounding walls and planting should be considered.",
                  },
                  {
                    title: "Block-Paved Patios",
                    desc: "Hard-wearing with smaller modular units, useful for curves, paths and coordinated driveway-and-garden schemes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 text-[14px]" style={{ color: "var(--svc-body)" }}>
                    <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-2" style={{ background: "var(--svc-gold)" }} />
                    <div>
                      <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>{item.title}</strong>
                      <br />
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* PLANNING SIZE & POSITION */}
            <motion.p custom={6} variants={fadeUp} className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Planning size, position and furniture.</strong>{" "}
              Before choosing paving, establish how the patio will be used. Dining furniture
              needs space for chairs to move without falling off the edge. Barbecues and
              outdoor kitchens require safe circulation. Doors, gates, sheds and paths should
              remain easy to access. The layout can be marked out during the site visit so
              the customer can understand the scale.
            </motion.p>

            {/* GROUND PREPARATION */}
            <motion.p custom={7} variants={fadeUp} className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Ground preparation and stable bedding.</strong>{" "}
              The area is excavated to allow for the sub-base, bedding layer and paving
              thickness. Soft ground, roots and unsuitable fill are removed. A compacted
              sub-base distributes loads and reduces movement. The paving is then installed
              using a method suitable for the material — natural stone and porcelain have
              different preparation and bonding requirements.
            </motion.p>

            {/* LEVELS & DRAINAGE */}
            <motion.div custom={8} variants={fadeUp} className="relative p-8 rounded-[20px] mb-8" style={{ background: "var(--svc-deep-navy, #08213F)", boxShadow: "0 16px 48px -12px rgba(8,33,63,0.25)" }}>
              <div className="relative">
                <div className="absolute -top-[80px] -right-[60px] w-[200px] h-[200px] rounded-full opacity-[0.06] pointer-events-none" style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }} />
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,155,74,0.15)" }}>
                    <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold !text-white" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                    Levels, Thresholds and Drainage
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  The patio must sit at safe levels relative to doors, damp-proof courses, air
                  bricks and garden boundaries. Falls should move water away from the property
                  without making furniture feel noticeably tilted. Channels, linear drains or
                  permeable areas may be used where natural discharge is limited. The detail at
                  doors and steps deserves particular care because it affects both appearance and
                  water management.
                </p>
              </div>
            </motion.div>

            {/* JOINTS & POINTING */}
            <motion.p custom={9} variants={fadeUp} className="text-[16px] leading-relaxed mb-6" style={{ color: "var(--svc-body)" }}>
              <strong className="font-bold" style={{ color: "var(--svc-heading)" }}>Joints, pointing and edge finishing.</strong>{" "}
              Jointing keeps water and debris out of the gaps and contributes to the finished
              look. The joint width and product depend on the paving type. Natural stone may
              use a wider joint that accepts variation, while porcelain typically suits a more
              consistent narrow joint. Edges can be restrained with kerbs, setts, walls or
              concealed construction — exposed mortar edges should not be left as the final
              detail.
            </motion.p>

            {/* MAINTENANCE */}
            <motion.div custom={10} variants={fadeUp} className="relative p-8 rounded-[20px] mb-8" style={{ background: "#FBF9F4", border: "1px solid rgba(200,155,74,0.1)" }}>
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
                    Regular sweeping and occasional washing prevent soil and organic debris
                    building up. Leaves, planters and furniture should be moved periodically so
                    moisture and marks do not remain trapped. Cleaning products must be compatible
                    with the paving — acidic cleaners can damage some natural stones.
                  </p>
                  <p className="text-[14px] leading-relaxed mt-3" style={{ color: "var(--svc-body)" }}>
                    Jointing should be inspected and repaired if it becomes loose. Small amounts
                    of movement may indicate a local bedding or drainage issue that should be
                    corrected before the problem spreads. Sealing is optional for many materials
                    and can alter colour and slip characteristics.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* QUALITY CARD */}
            <motion.div custom={11} variants={fadeUp} className="relative p-8 rounded-[20px]" style={{ background: "#fff", border: "1px solid rgba(15,39,71,0.06)", boxShadow: "0 8px 30px -12px rgba(15,39,71,0.08)" }}>
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
                Every patio project we undertake follows a rigorous process: detailed site
                assessment, correct sub-base preparation, suitable bedding for the chosen
                material, accurate cuts and joints, proper falls for drainage, and full
                finishing before handover. We stand behind our work and provide a full
                guarantee on every installation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Thorough site assessment & garden survey",
                  "Correct sub-base & bedding preparation",
                  "Material-appropriate installation methods",
                  "Accurate levels, cuts & joints",
                  "Proper falls for drainage",
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

          {/* SIDEBAR */}
          <div className="flex flex-col gap-5 self-start sticky top-[90px]">
            {/* Quote card */}
            <div className="rounded-[20px] p-8 overflow-hidden relative" style={{ background: "var(--svc-deep-navy, #08213F)" }}>
              <div className="absolute -bottom-[80px] -right-[80px] w-[240px] h-[240px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }} />
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--svc-gold)" }} />
              <div className="relative">
                <h3 className="text-[18px] font-bold !text-white mb-2">Get a Free Patios Quote</h3>
                <p className="text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Arrange a site visit to discuss the area, suitable materials, groundwork and
                  the finish you would like to achieve. You will receive a clear quotation based
                  on the actual project.
                </p>
                <Link href="#quote" className="block w-full text-center font-bold text-[15px] px-6 py-3.5 rounded-[12px] transition-all hover:brightness-110 mb-3" style={{ background: "var(--svc-gold)", color: "#fff" }}>
                  Request a Free Quote
                </Link>
                <Link href="tel:07722151231" className="block w-full text-center font-semibold text-[14px] px-6 py-3 rounded-[12px] transition-all" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                  Call 07722 151231
                </Link>
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

            {/* Benefits */}
            <div className="rounded-[16px] p-5 relative flex flex-col" style={{ background: "#FBF9F4", border: "1px solid rgba(200,155,74,0.1)", height: "560px" }}>
              <div className="flex items-center gap-2.5 mb-3 flex-shrink-0">
                <span className="inline-block w-4 h-[2px]" style={{ background: "var(--svc-gold)" }} />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--svc-gold)" }}>Benefits</span>
              </div>
              <h3 className="text-[16px] font-bold mb-1 leading-snug flex-shrink-0" style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif" }}>
                Benefits of Patios
              </h3>
              <p className="text-[12.5px] leading-relaxed mb-4 flex-shrink-0" style={{ color: "var(--svc-body)" }}>
                Why a professionally installed patio transforms the way you enjoy your garden.
              </p>
              <div className="flex flex-col gap-2 overflow-y-auto pr-1 flex-1 min-h-0 sidebar-scroll">
                {[
                  "Creates a Clean, Stable Outdoor Area",
                  "Makes Dining & Entertaining Comfortable",
                  "Wide Choice of Materials & Finishes",
                  "Can Include Steps, Borders & Raised Beds",
                  "Links Indoor & Outdoor Spaces",
                  "Easier Than Uneven Ground in Wet Weather",
                  "Coordinates with Driveway & Landscaping",
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
