"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ServiceFooter() {
  return (
    <footer
      className="relative"
      style={{
        background: "linear-gradient(160deg, var(--svc-deep-navy) 0%, #060F1E 100%)",
      }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="svc-container relative z-10 pt-20 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Col 1: Brand */}
          <motion.div custom={0} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center font-bold text-sm" style={{ background: "var(--svc-gold)", color: "#fff" }}>
                TDP
              </div>
              <div>
                <div className="font-bold text-[16px] text-white">Total Driveways</div>
                <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>&amp; Patios</div>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Family-run driveway, patio and landscaping specialists serving Barnsley and South Yorkshire since 1990.
            </p>
            <div className="flex gap-3">
              {[
                { name: "Facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center transition-all hover:translate-y[-2px]"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  aria-label={s.name}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-[16px] h-[16px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Services */}
          <motion.div custom={1} variants={fadeUp}>
            <h5 className="text-white text-[14px] font-bold tracking-[0.06em] uppercase mb-6">Services</h5>
            <ul className="space-y-3">
              {["Block Paving", "Resin Driveways", "Tarmac Driveways", "Patios", "Landscaping"].map((s) => (
                <li key={s}>
                  <Link
                    href={s === "Block Paving" ? "/services/block-paving" : `/services/${s.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[14px] transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Areas */}
          <motion.div custom={2} variants={fadeUp}>
            <h5 className="text-white text-[14px] font-bold tracking-[0.06em] uppercase mb-6">Areas Covered</h5>
            <ul className="space-y-3">
              {["Barnsley", "Sheffield", "Rotherham", "Doncaster", "Wakefield", "Leeds", "Huddersfield", "Chesterfield"].map((a) => (
                <li key={a}>
                  <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div custom={3} variants={fadeUp}>
            <h5 className="text-white text-[14px] font-bold tracking-[0.06em] uppercase mb-6">Contact</h5>
            <ul className="space-y-4">
              <li>
                <Link href="tel:07722151231" className="flex items-center gap-3 text-[14px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
                  </svg>
                  07722 151231
                </Link>
              </li>
              <li className="flex items-center gap-3 text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Barnsley &amp; South Yorkshire
              </li>
              <li className="flex items-center gap-3 text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon–Fri 8am–5pm · Sat 9am–1pm
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span>&copy; {new Date().getFullYear()} Total Driveways and Patios. All rights reserved.</span>
          <span>Family-run since 1990 · Rated 4.8 on Google</span>
        </div>
      </div>
    </footer>
  );
}
