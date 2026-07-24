"use client";

import { useState } from "react";
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

const reasons = [
  "25 years of experience in driveway and patio installation",
  "Family-run business — personal service from start to finish",
  "Fully insured with full public liability cover",
  "Clear, detailed quotations with no hidden costs",
  "5-year workmanship guarantee on all installations",
  "Free, no-obligation site visit and quotation",
];

export default function ServiceQuoteForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", postcode: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.postcode.trim()) errs.postcode = "Postcode is required";
    if (!form.service) errs.service = "Please select a service";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="svc-section" style={{ background: "var(--svc-section)" }}>
        <div className="svc-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="svc-card p-12 max-w-[600px] mx-auto"
          >
            <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(48, 182, 106, 0.1)" }}>
              <svg fill="none" stroke="var(--svc-success)" strokeWidth="2" viewBox="0 0 24 24" className="w-[28px] h-[28px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-3" style={{ color: "var(--svc-heading)" }}>Thank You!</h3>
            <p className="text-[16px] mb-6" style={{ color: "var(--svc-body)" }}>We&apos;ve received your enquiry and will be in touch within 24 hours to arrange your free site visit.</p>
            <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", postcode: "", service: "", message: "" }); }} className="btn-svc btn-svc-primary">Submit Another</button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="svc-section" style={{ background: "var(--svc-section)" }}>
      <div className="svc-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <motion.span custom={0} variants={fadeUp} className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--svc-gold)" }}>
            Get Started
          </motion.span>
          <motion.h2 custom={1} variants={fadeUp} className="mt-4" style={{ color: "var(--svc-heading)" }}>
            Request Your Free Block Paving Quote
          </motion.h2>
          <motion.div custom={2} variants={fadeUp} className="gold-line mx-auto mt-5" />
          <motion.p custom={3} variants={fadeUp} className="mt-5 text-[17px]" style={{ color: "var(--svc-body)" }}>
            Fill in the form and we&apos;ll get back to you within 24 hours to arrange a free site visit.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[1100px] mx-auto">
          {/* Left: Reasons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 custom={0} variants={fadeUp} className="mb-6" style={{ color: "var(--svc-heading)" }}>
              Why Choose Total Driveways &amp; Patios?
            </motion.h3>

            <motion.ul custom={1} variants={fadeUp} className="space-y-4 mb-8">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--svc-body)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px] mt-[2px] flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {r}
                </li>
              ))}
            </motion.ul>

            <motion.div custom={2} variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center" style={{ background: "rgba(200,155,74,0.1)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[14px]" style={{ color: "var(--svc-heading)" }}>Call Us</div>
                  <Link href="tel:07722151231" className="text-[15px]" style={{ color: "var(--svc-gold)" }}>07722 151231</Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center" style={{ background: "rgba(200,155,74,0.1)" }}>
                  <svg fill="none" stroke="var(--svc-gold)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[20px] h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[14px]" style={{ color: "var(--svc-heading)" }}>Email Us</div>
                  <Link href="mailto:info@totaldriveways.co.uk" className="text-[15px]" style={{ color: "var(--svc-gold)" }}>info@totaldriveways.co.uk</Link>
                </div>
              </div>
            </motion.div>

            {/* Response time badge */}
            <motion.div custom={3} variants={fadeUp} className="mt-8 p-5 rounded-[16px] flex items-center gap-4" style={{ background: "rgba(48, 182, 106, 0.06)", border: "1px solid rgba(48, 182, 106, 0.15)" }}>
              <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(48, 182, 106, 0.12)" }}>
                <svg fill="none" stroke="var(--svc-success)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[22px] h-[22px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[14px]" style={{ color: "var(--svc-success)" }}>Fast Response</div>
                <div className="text-[13.5px]" style={{ color: "var(--svc-body)" }}>We typically respond within 2 hours during business hours</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="svc-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="svc-input w-full h-[48px] px-4 rounded-[12px] text-[14px] outline-none transition-all"
                    style={{ border: `1.5px solid ${errors.name ? "var(--svc-success)" : "var(--svc-border)"}`, background: "var(--svc-section)", color: "var(--svc-heading)" }}
                    placeholder="Your name"
                  />
                  {errors.name && <span className="text-[12px] mt-1" style={{ color: "var(--svc-success)" }}>{errors.name}</span>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>Phone Number *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="svc-input w-full h-[48px] px-4 rounded-[12px] text-[14px] outline-none transition-all"
                    style={{ border: `1.5px solid ${errors.phone ? "var(--svc-success)" : "var(--svc-border)"}`, background: "var(--svc-section)", color: "var(--svc-heading)" }}
                    placeholder="07XXX XXXXXX"
                  />
                  {errors.phone && <span className="text-[12px] mt-1" style={{ color: "var(--svc-success)" }}>{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>Email (optional)</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="svc-input w-full h-[48px] px-4 rounded-[12px] text-[14px] outline-none transition-all"
                    style={{ border: "1.5px solid var(--svc-border)", background: "var(--svc-section)", color: "var(--svc-heading)" }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>Postcode *</label>
                  <input
                    type="text"
                    value={form.postcode}
                    onChange={(e) => setForm({ ...form, postcode: e.target.value })}
                    className="svc-input w-full h-[48px] px-4 rounded-[12px] text-[14px] outline-none transition-all"
                    style={{ border: `1.5px solid ${errors.postcode ? "var(--svc-success)" : "var(--svc-border)"}`, background: "var(--svc-section)", color: "var(--svc-heading)" }}
                    placeholder="e.g. S70 1AB"
                  />
                  {errors.postcode && <span className="text-[12px] mt-1" style={{ color: "var(--svc-success)" }}>{errors.postcode}</span>}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>Service Required *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="svc-input w-full h-[48px] px-4 rounded-[12px] text-[14px] outline-none transition-all appearance-none"
                  style={{ border: `1.5px solid ${errors.service ? "var(--svc-success)" : "var(--svc-border)"}`, background: "var(--svc-section)", color: form.service ? "var(--svc-heading)" : "var(--svc-body)" }}
                >
                  <option value="">Select a service</option>
                  <option value="block-paving">Block Paving Driveway</option>
                  <option value="resin">Resin Driveway</option>
                  <option value="tarmac">Tarmac Driveway</option>
                  <option value="patio">Patio</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <span className="text-[12px] mt-1" style={{ color: "var(--svc-success)" }}>{errors.service}</span>}
              </div>

              <div>
                <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "var(--svc-heading)" }}>Project Details (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="svc-input w-full px-4 py-3 rounded-[12px] text-[14px] outline-none transition-all resize-none"
                  style={{ border: "1.5px solid var(--svc-border)", background: "var(--svc-section)", color: "var(--svc-heading)", minHeight: 100 }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="btn-svc btn-svc-primary w-full justify-center text-[15px]">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h1M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
                </svg>
                Get Free Quote
              </button>

              <p className="text-[12.5px] text-center" style={{ color: "var(--svc-body)" }}>
                Your information is safe and will never be shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
