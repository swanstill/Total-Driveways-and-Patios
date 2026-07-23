"use client";

import { motion } from "framer-motion";

const options = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "3-6-months", label: "Within 3–6 months" },
  { value: "later-year", label: "Later this year" },
  { value: "researching", label: "I am researching options" },
];

export default function StepTimeline({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[13px] text-dark-text/50 -mt-3 mb-3">Research-stage enquiries are welcome.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <motion.button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              whileHover={{ y: -2 }}
              className={`
                flex items-center gap-3 p-3.5 rounded-[14px] border-2 text-left cursor-pointer transition-all duration-200 bg-white
                ${selected
                  ? "border-warm-gold bg-warm-gold/[0.04] shadow-sm"
                  : "border-light-border hover:border-deep-blue/40"
                }
              `}
              aria-pressed={selected}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selected ? "border-warm-gold" : "border-light-border"}`}>
                {selected && <div className="w-2.5 h-2.5 rounded-full bg-warm-gold" />}
              </div>
              <span className={`font-bold text-[14px] leading-tight ${selected ? "text-navy-primary" : "text-dark-text/70"}`}>
                {opt.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
