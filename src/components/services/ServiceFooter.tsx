"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceFooter() {
  return (
    <footer
      className="py-[60px]"
      style={{ background: "var(--svc-deep-navy, #08213F)", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Col 1: About */}
          <motion.div
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }) }}
          >
            <h3 className="text-[17px] font-bold !text-white mb-4">Total Driveways &amp; Patios</h3>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Barnsley&apos;s trusted driveway and patio specialists. Expert installation of block paving,
              resin, tarmac and more across South Yorkshire.
            </p>
          </motion.div>

          {/* Col 2: Services */}
          <motion.div
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }) }}
          >
            <h3 className="text-[17px] font-bold !text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {["Block Paving", "Resin Driveways", "Tarmac", "Patios", "Flagging"].map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="text-[13.5px] transition-all duration-200 hover:pl-1"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Contact */}
          <motion.div
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }) }}
          >
            <h3 className="text-[17px] font-bold !text-white mb-4">Contact</h3>
            <ul className="space-y-2.5 text-[13.5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              <li>
                <Link href="tel:07722151231" className="transition-all hover:text-white">07722 151231</Link>
              </li>
              <li>
                <span>Serving Barnsley &amp;<br />South Yorkshire</span>
              </li>
              <li>
                <Link href="mailto:info@totaldriveways.co.uk" className="transition-all hover:text-white">info@totaldriveways.co.uk</Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Hours */}
          <motion.div
            custom={3}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }) }}
          >
            <h3 className="text-[17px] font-bold !text-white mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-[13.5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span>8:00 – 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 – 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>Closed</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 pt-8 text-center text-[13px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)" }}
        >
          &copy; {new Date().getFullYear()} Total Driveways &amp; Patios. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
