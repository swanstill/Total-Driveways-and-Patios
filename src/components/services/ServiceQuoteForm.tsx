"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  message: string;
}

export default function ServiceQuoteForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-[120px]" style={{ background: "var(--svc-section)" }} id="quote">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(200,155,74,0.1)" }}
            >
              <svg fill="none" stroke="var(--svc-gold)" strokeWidth="2" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-[32px] font-bold mb-4" style={{ color: "var(--svc-heading)" }}>Thank You!</h2>
            <p className="text-[17px] max-w-[500px] mx-auto" style={{ color: "var(--svc-body)" }}>
              We&apos;ve received your enquiry and will be in touch within 24 hours to discuss your block
              paving project.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[120px]" style={{ background: "var(--svc-section)" }} id="quote">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[680px] mx-auto mb-14"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            — Get Your Free Quote
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Ready to Transform Your Driveway?
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-[17px]"
            style={{ color: "var(--svc-body)" }}
          >
            Fill in the form below and we&apos;ll get back to you within 24 hours with a free,
            no-obligation quote for your block paving project.
          </motion.p>
        </motion.div>

        <div className="max-w-[680px] mx-auto">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-[24px] p-8 md:p-10"
            style={{ boxShadow: "0 16px 48px -12px rgba(15,39,71,0.08)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div custom={0} variants={fadeUp} className="md:col-span-2">
                <label className="block text-[14px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] text-[15px] outline-none transition-all"
                  style={{ border: "1px solid rgba(15,39,71,0.1)", background: "#fff", color: "var(--svc-heading)" }}
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div custom={1} variants={fadeUp}>
                <label className="block text-[14px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] text-[15px] outline-none transition-all"
                  style={{ border: "1px solid rgba(15,39,71,0.1)", background: "#fff", color: "var(--svc-heading)" }}
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div custom={2} variants={fadeUp}>
                <label className="block text-[14px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] text-[15px] outline-none transition-all"
                  style={{ border: "1px solid rgba(15,39,71,0.1)", background: "#fff", color: "var(--svc-heading)" }}
                  placeholder="07700 000 000"
                />
              </motion.div>

              <motion.div custom={3} variants={fadeUp} className="md:col-span-2">
                <label className="block text-[14px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>
                  Postcode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={form.postcode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[12px] text-[15px] outline-none transition-all"
                  style={{ border: "1px solid rgba(15,39,71,0.1)", background: "#fff", color: "var(--svc-heading)" }}
                  placeholder="e.g. S70 1AB"
                />
              </motion.div>

              <motion.div custom={4} variants={fadeUp} className="md:col-span-2">
                <label className="block text-[14px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-[12px] text-[15px] outline-none transition-all resize-none"
                  style={{ border: "1px solid rgba(15,39,71,0.1)", background: "#fff", color: "var(--svc-heading)" }}
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.div custom={5} variants={fadeUp} className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full font-bold text-[16px] px-8 py-4 rounded-[12px] transition-all"
                  style={{ background: "var(--svc-gold)", color: "#fff", boxShadow: "0 8px 28px -6px rgba(200,155,74,0.45)" }}
                >
                  Request Free Quote
                </button>
                <p className="text-[12px] mt-3 text-center" style={{ color: "rgba(15,39,71,0.4)" }}>
                  No obligation. We&apos;ll respond within 24 hours.
                </p>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
