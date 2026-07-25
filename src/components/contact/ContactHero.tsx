"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[680px] lg:min-h-[750px] flex items-center"
      style={{ background: "#F6F3EC" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(15,39,71,0.08) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient glow — top right */}
      <div
        className="absolute -top-[250px] -right-[150px] w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, var(--color-warm-gold) 0%, transparent 65%)" }}
      />

      {/* Subtle glow — bottom left */}
      <div
        className="absolute -bottom-[180px] -left-[120px] w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--color-warm-gold) 0%, transparent 65%)" }}
      />

      {/* Vertical gold accent line */}
      <div
        className="absolute top-0 left-[42%] lg:left-[50%] w-[1px] h-0 animate-grow-line opacity-[0.25]"
        style={{ background: "linear-gradient(to bottom, var(--color-warm-gold), transparent)" }}
      />

      {/* Corner brackets */}
      <div
        className="absolute top-8 right-8 w-[60px] h-[60px] opacity-[0.2] hidden lg:block"
        style={{
          borderTop: "2px solid var(--color-warm-gold)",
          borderRight: "2px solid var(--color-warm-gold)",
        }}
      />
      <div
        className="absolute bottom-8 left-8 w-[60px] h-[60px] opacity-[0.2] hidden lg:block"
        style={{
          borderBottom: "2px solid var(--color-warm-gold)",
          borderLeft: "2px solid var(--color-warm-gold)",
        }}
      />

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10 py-[30px] lg:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 items-center"
        >
          {/* Left: Copy */}
          <div className="max-w-[600px]">
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span
                className="inline-block w-10 h-[2px]"
                style={{ background: "var(--color-warm-gold)" }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "rgba(207,164,71,0.8)" }}
              >
                Get in Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="leading-[1.08] mb-6"
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "clamp(34px, 3.8vw, 60px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "var(--color-navy-primary, #0F2747)",
              }}
            >
              <span className="block">Contact</span>
              <span className="block">Total Driveways</span>
              <span className="block">and Patios</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[17px] leading-relaxed mb-8 max-w-[54ch]"
              style={{ color: "var(--color-slate, #5B6270)", fontWeight: 400 }}
            >
              Tell us what you would like to improve and we will help you arrange the next
              step. You can call, message on WhatsApp or complete the enquiry form with your
              postcode and the service you are considering.
            </motion.p>

            {/* Phone & Email Row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mb-10">
              <a
                href="tel:07722151231"
                className="flex items-center gap-3 text-[16px] font-bold transition-all hover:opacity-80"
                style={{ color: "var(--color-navy-primary, #0F2747)" }}
              >
                <span
                  className="w-[40px] h-[40px] rounded-[12px] flex items-center justify-center"
                  style={{ background: "rgba(207,164,71,0.12)" }}
                >
                  <svg
                    fill="none"
                    stroke="var(--color-warm-gold)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-[18px] h-[18px]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
                  </svg>
                </span>
                07722 151231
              </a>
              <a
                href="mailto:info@totaldriveways.co.uk"
                className="flex items-center gap-3 text-[16px] font-bold transition-all hover:opacity-80"
                style={{ color: "var(--color-navy-primary, #0F2747)" }}
              >
                <span
                  className="w-[40px] h-[40px] rounded-[12px] flex items-center justify-center"
                  style={{ background: "rgba(207,164,71,0.12)" }}
                >
                  <svg
                    fill="none"
                    stroke="var(--color-warm-gold)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-[18px] h-[18px]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                info@totaldriveways.co.uk
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2.5 font-bold text-[14px] px-[18px] py-3 rounded-[6px] transition-all hover:brightness-110"
                style={{
                  background: "var(--color-warm-gold)",
                  color: "#fff",
                  boxShadow: "0 8px 28px -6px rgba(207,164,71,0.45)",
                }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
                  />
                </svg>
                Request a Free Quote
              </Link>
              <a
                href="https://wa.me/4407722151231"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-bold text-[14px] px-[18px] py-3 rounded-[6px] transition-all hover:bg-navy/5"
                style={{ border: "2px solid rgba(15,39,71,0.2)", color: "var(--color-navy-primary, #0F2747)" }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[17px] h-[17px]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-x-8 gap-y-3 pt-8"
              style={{ borderTop: "1px solid rgba(15,39,71,0.08)" }}
            >
              {[
                { label: "Free Site Visits" },
                { label: "No-Obligation Quotes" },
                { label: "Local Service" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span
                    className="text-[13px] leading-tight font-medium"
                    style={{ color: "rgba(15,39,71,0.5)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
              {/* Stars */}
              <div
                className="flex items-center gap-[3px] ml-2"
                style={{ color: "var(--color-warm-gold)" }}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-[15px] h-[15px]"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[13px] font-bold ml-1" style={{ color: "rgba(15,39,71,0.5)" }}>
                  5.0 Google Rating
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Image + Floating Elements */}
          <motion.div variants={fadeIn} className="relative">
            <div className="relative pl-8">
              {/* Decorative line behind image */}
              <div
                className="absolute top-8 bottom-8 left-0 w-[3px] rounded-full opacity-[0.2]"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-warm-gold) 0%, transparent 100%)",
                }}
              />

              {/* Main image */}
              <div
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(15,39,71,0.08)",
                }}
              >
                <div
                  className="w-full h-[280px] lg:h-[540px]"
                  style={{
                    backgroundImage: "url('/hero-image.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(8,33,63,0.3) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating contact card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="absolute -bottom-4 -left-2 flex items-center gap-3 px-5 py-3.5 rounded-[14px]"
                style={{
                  background: "var(--color-navy-primary, #0F2747)",
                  boxShadow: "0 12px 40px -8px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center"
                  style={{ background: "rgba(207,164,71,0.15)" }}
                >
                  <svg
                    fill="none"
                    stroke="var(--color-warm-gold)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-[16px] h-[16px]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <span className="text-white text-[13px] font-bold block" style={{ letterSpacing: "-0.01em" }}>
                    Family-Run Since 1990
                  </span>
                  <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Rated 5.0 on Google
                  </span>
                </div>
              </motion.div>

              {/* Top-right decorative emblem */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center opacity-[0.25]"
                style={{
                  border: "2px solid var(--color-warm-gold)",
                  background: "rgba(207,164,71,0.1)",
                }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="var(--color-warm-gold)">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
