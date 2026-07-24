"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Site Survey",
    desc: "We visit your property, measure the area and discuss your requirements, preferences and budget.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    num: "02",
    title: "Design & Quote",
    desc: "We prepare a detailed design, material selection and a transparent no-obligation quotation.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    num: "03",
    title: "Ground Prep",
    desc: "We excavate and prepare the sub-base, ensuring proper drainage, compaction and a stable foundation.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    num: "04",
    title: "Block Installation",
    desc: "Skilled craftsmen lay your chosen blocks in the selected pattern with precision and care.",
    icon: "M3 3h18v18H3V3z M9 3v18 M15 3v18 M3 9h18 M3 15h18",
  },
  {
    num: "05",
    title: "Finishing Touches",
    desc: "We compact, edge, seal and clean everything — leaving you with a stunning, ready-to-use driveway.",
    icon: "M5 13l4 4L19 7",
  },
];

export default function ServiceTimeline() {
  return (
    <section className="py-[120px]" style={{ background: "var(--svc-deep-navy, #08213F)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[680px] mx-auto mb-20"
        >
          <motion.span
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            — Our Process
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5 !text-white"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            How We Work
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[17px]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            A proven five-step process that delivers exceptional results every time — from the first
            conversation to your finished driveway.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.15, ease: [0.25, 0.1, 0.25, 1] } }) }}
              className="relative text-center lg:text-left"
            >
              {/* Desktop connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[26px] left-[60%] w-[80%] h-[1px]"
                  style={{ background: "linear-gradient(to right, rgba(200,155,74,0.4), transparent)" }}
                />
              )}

              {/* Number circle */}
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-5 text-[17px] font-bold border-2"
                style={{ borderColor: "var(--svc-gold)", color: "var(--svc-gold)", background: "rgba(200,155,74,0.08)" }}
              >
                {step.num}
              </div>

              <h3 className="text-[18px] font-bold mb-2.5 !text-white">{step.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
