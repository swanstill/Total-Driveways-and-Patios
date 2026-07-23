"use client";

import { Home, Droplets, Mountain, Trees, Palette, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const options = [
  { value: "block-paving", label: "Block paving driveway", icon: Home },
  { value: "resin", label: "Resin driveway", icon: Droplets },
  { value: "tarmac", label: "Tarmac driveway", icon: Mountain },
  { value: "patio", label: "Patio or garden paving", icon: Palette },
  { value: "landscaping", label: "Landscaping", icon: Trees },
  { value: "not-sure", label: "Not sure yet", icon: HelpCircle },
];

export default function StepHelpWith({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <motion.button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            whileHover={{ y: -3 }}
            className={`
              flex flex-col items-center text-center gap-2.5 p-4 sm:p-5 rounded-[18px] border-2 cursor-pointer
              transition-all duration-200 bg-white
              ${selected
                ? "border-warm-gold shadow-[0_8px_24px_-8px_rgba(207,164,71,0.18)]"
                : "border-light-border hover:border-deep-blue/40 shadow-[0_4px_16px_rgba(15,39,71,0.04)] hover:shadow-[0_12px_32px_-12px_rgba(15,39,71,0.12)]"
              }
            `}
            aria-pressed={selected}
            aria-label={`Select ${opt.label}`}
          >
            {selected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-warm-gold flex items-center justify-center"
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </motion.div>
            )}
            <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200 ${selected ? "bg-warm-gold/10" : "bg-warm-cream"}`}>
              <opt.icon className={`w-[20px] h-[20px] transition-colors duration-200 ${selected ? "text-warm-gold" : "text-navy-primary/60"}`} />
            </div>
            <span className={`font-bold text-[13px] sm:text-[14px] leading-tight transition-colors duration-200 ${selected ? "text-navy-primary" : "text-dark-text/70"}`}>
              {opt.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
