"use client";

import { motion } from "framer-motion";

const stepInfo = [
  { subtitle: "What would you like help with?", desc: "Choose the option that best describes your project." },
  { subtitle: "What is there at the moment?", desc: "This helps us understand the likely preparation required." },
  { subtitle: "Roughly how large is the area?", desc: "You do not need exact measurements — a rough idea is fine." },
  { subtitle: "When are you considering the work?", desc: "Research-stage enquiries are welcome." },
  { subtitle: "Where is the property?", desc: "Let us know the location so we can check availability." },
  { subtitle: "Tell us anything useful", desc: "Include access, drainage, desired materials or anything you would like us to consider." },
  { subtitle: "Your contact details", desc: "We&apos;ll use these to follow up on your enquiry." },
];

interface Props {
  step: number;
  total: number;
}

export default function StepHeading({ step, total }: Props) {
  const info = stepInfo[step];
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="text-warm-gold text-[11px] font-bold tracking-[1.5px] uppercase block mb-3">
        Step {step + 1} of {total}
      </span>
      <h3 className="text-navy-primary text-[20px] sm:text-[22px] font-bold leading-[1.2] mb-2">
        {info.subtitle}
      </h3>
      <p className="text-dark-text/55 text-[14px] sm:text-[15px] leading-relaxed mb-6">
        {info.desc}
      </p>
    </motion.div>
  );
}
