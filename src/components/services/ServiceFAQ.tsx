"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "How long does a block paving driveway installation take?",
    a: "Most driveway installations take between 5 and 10 working days, depending on the size, complexity and weather conditions. We'll give you a clear timeline during your free site survey and quote.",
  },
  {
    q: "Do I need planning permission for a block paving driveway?",
    a: "Permeable block paving that allows water to drain through generally does not require planning permission. Non-permeable driveways larger than 5m² may need permission. We'll advise you on the requirements during your free survey.",
  },
  {
    q: "How long will my block paving driveway last?",
    a: "With proper installation and basic maintenance, a high-quality block paving driveway can last 20 to 30 years. If individual blocks become damaged, they can be lifted and replaced without relaying the whole driveway.",
  },
  {
    q: "What maintenance does block paving need?",
    a: "Block paving is very low maintenance. An annual jet wash and re-sanding of the joints every few years is generally all that's needed. We apply a sealant after installation to protect the blocks and make cleaning even easier.",
  },
  {
    q: "What colours and patterns can I choose from?",
    a: "We offer a wide range of colours including red, buff, charcoal, grey, brindle and multi blends. Popular patterns include herringbone, basket-weave, stretcher-bond and random layouts. Our design team will help you find the perfect combination.",
  },
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[120px]" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              custom={0}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ color: "var(--svc-gold)" }}
            >
              — FAQ
            </motion.span>
            <motion.h2
              custom={1}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
              className="mt-5 mb-5"
              style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              custom={2}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
              className="text-[17px]"
              style={{ color: "var(--svc-body)" }}
            >
              Got a question about block paving? We&apos;ve answered the most common ones below.
              If you can&apos;t find what you&apos;re looking for, feel free to get in touch.
            </motion.p>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-[16px] overflow-hidden transition-all duration-300"
                style={{
                  background: openIndex === i ? "var(--svc-section)" : "transparent",
                  border: "1px solid",
                  borderColor: openIndex === i ? "rgba(200,155,74,0.15)" : "rgba(15,39,71,0.06)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-left"
                >
                  <span className="text-[16px] font-bold pr-4" style={{ color: "var(--svc-heading)" }}>
                    {faq.q}
                  </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-[18px] h-[18px] flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: "var(--svc-gold)",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-[15px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
