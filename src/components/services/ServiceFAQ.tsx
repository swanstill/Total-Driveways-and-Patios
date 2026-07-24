"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How much does a block paving driveway cost?",
    a: "The cost varies depending on the size of the area, the type of blocks you choose, the amount of preparation required, and whether any drainage work is needed. During our free site visit, we measure the area accurately and provide a detailed written quotation with no hidden costs.",
  },
  {
    q: "How long does a block paving installation take?",
    a: "A typical domestic driveway takes between 3 and 7 working days, depending on the size and complexity. This includes excavation, sub-base preparation, edging, laying the blocks, compacting, sanding and sealing. We'll give you a realistic timeline with your quotation.",
  },
  {
    q: "Do I need to seal my block paving?",
    a: "Sealing is optional but recommended. A good quality sealant protects the blocks from staining, reduces weed growth in the joints, and enhances the colour of the blocks. We can advise on whether sealing is right for your project.",
  },
  {
    q: "Can I still use my driveway during installation?",
    a: "Access will be restricted during the excavation and laying phases for safety. We'll discuss access arrangements during the quotation and keep disruption to a minimum. Most customers park on the road for a few days while work is carried out.",
  },
  {
    q: "What maintenance does block paving need?",
    a: "Block paving is very low maintenance. An occasional jet wash and re-sanding of the joints every few years is usually all that's needed. We provide full aftercare advice on completion.",
  },
  {
    q: "Do you remove the old driveway surface?",
    a: "Yes. Our quotation includes removal and disposal of the existing surface where required. We excavate to the necessary depth to install a proper sub-base, ensuring your new driveway remains stable for decades.",
  },
  {
    q: "What patterns are available for block paving?",
    a: "The most popular patterns are herringbone (45° or 90°), stretcher bond, basket weave and random mix. During your free consultation, we'll show you samples and discuss which pattern suits your property best.",
  },
  {
    q: "Do you offer a guarantee on block paving work?",
    a: "Yes. All our block paving installations come with a 5-year workmanship guarantee. We stand behind the quality of our preparation and installation, giving you complete peace of mind.",
  },
];

export default function ServiceFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="svc-section" style={{ background: "var(--svc-section)" }}>
      <div className="svc-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <motion.span
            custom={0}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
            }}
            className="text-[12px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            FAQ
          </motion.span>
          <motion.h2
            custom={1}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
            }}
            className="mt-4"
            style={{ color: "var(--svc-heading)" }}
          >
            Block Paving — Your Questions Answered
          </motion.h2>
          <motion.div
            custom={2}
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, delay: 0.3 } },
            }}
            className="gold-line mx-auto mt-5"
          />
        </motion.div>

        <div className="max-w-[820px] mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-[16px] overflow-hidden transition-colors duration-300 ${openIdx === i ? "svc-faq-open" : ""}`}
              style={{
                border: "1px solid var(--svc-border)",
                background: openIdx === i ? "var(--svc-section)" : "var(--svc-white)",
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIdx === i}
              >
                <span
                  className="text-[15px] font-bold pr-4"
                  style={{ color: "var(--svc-heading)" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: openIdx === i ? "var(--svc-gold)" : "var(--svc-section)" }}
                >
                  <svg
                    fill="none"
                    stroke={openIdx === i ? "#fff" : "var(--svc-gold)"}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-[14px] h-[14px]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-[14.5px] leading-relaxed" style={{ color: "var(--svc-body)" }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
