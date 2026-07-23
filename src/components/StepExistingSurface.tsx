"use client";

import { motion } from "framer-motion";

const options = [
  { value: "old-block-paving", label: "Old block paving" },
  { value: "concrete", label: "Concrete" },
  { value: "tarmac", label: "Tarmac" },
  { value: "gravel", label: "Gravel" },
  { value: "grass", label: "Grass or soil" },
  { value: "existing-patio", label: "Existing patio" },
  { value: "other", label: "Other" },
  { value: "not-sure", label: "Not sure" },
];

export default function StepExistingSurface({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[13px] text-dark-text/50 -mt-3 mb-3">This helps us understand the likely preparation.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <motion.button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              whileHover={{ y: -2 }}
              className={`
                p-3.5 rounded-[14px] border-2 text-center cursor-pointer transition-all duration-200 bg-white
                ${selected
                  ? "border-warm-gold bg-warm-gold/[0.04] shadow-sm"
                  : "border-light-border hover:border-deep-blue/40"
                }
              `}
              aria-pressed={selected}
            >
              {selected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-4 h-4 rounded-full bg-warm-gold flex items-center justify-center mx-auto mb-1.5"
                >
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </motion.div>
              )}
              <span className={`font-bold text-[13px] leading-tight transition-colors duration-200 ${selected ? "text-navy-primary" : "text-dark-text/70"}`}>
                {opt.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
