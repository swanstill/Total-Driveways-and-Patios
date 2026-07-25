"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "100% Free",
    desc: "No-obligation quotation",
  },
  {
    icon: Clock,
    title: "Quick & Easy",
    desc: "Takes just 2–3 minutes",
  },
  {
    icon: Users,
    title: "Local & Trusted",
    desc: "5-star rated by homeowners",
  },
];

export default function QuoteMarketingPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="relative rounded-[28px] overflow-hidden min-h-[500px] lg:h-full flex flex-col"
    >
      {/* Solid background color */}
      <div className="absolute inset-0 bg-[#C79A3C]" />

      {/* Content */}
      <div className="relative z-10 p-10 lg:p-12 flex flex-col flex-1">
        {/* Eyebrow */}
        <span className="text-white/90 text-[13px] font-bold uppercase tracking-[2px] mb-6 block">
          Get your free quote
        </span>

        {/* Heading */}
        <h2 className="text-navy-primary font-extrabold leading-[1.1] text-[clamp(22px,2.5vw,32px)] max-w-[20ch]">
          Let&apos;s Create Your{" "}
          <span className="text-white">Perfect Outdoor Space</span>
        </h2>

        {/* Supporting paragraph */}
        <p className="text-dark-text/65 text-[16px] leading-relaxed mt-5 max-w-[380px]">
          Complete this quick multi-step form to receive a free, no-obligation
          quotation tailored to your project.
        </p>

        {/* Trust features */}
        <div className="mt-10 space-y-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_4px_14px_rgba(15,39,71,0.08)]">
                <item.icon className="w-5 h-5 text-navy-primary" />
              </div>
              <div>
                <span className="font-bold text-navy-primary text-[15px]">{item.title}</span>
                <p className="text-dark-text/55 text-[13.5px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
