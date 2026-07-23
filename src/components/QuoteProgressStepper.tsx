"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const stepLabels = [
  "Project",
  "Surface",
  "Size",
  "Timing",
  "Location",
  "Notes",
  "Contact",
];

export default function QuoteProgressStepper({ current }: { current: number }) {
  const total = stepLabels.length;
  const progressPct = current === 0 ? 0 : (current / (total - 1)) * 100;

  const barStyle = useMemo(() => {
    // Leave ~16px margin on each side for the circles
    const marginPct = (16 / 560) * 100;
    return { width: `${100 - marginPct * 2}%`, left: `${marginPct}%` };
  }, []);

  return (
    <div className="relative flex items-center justify-between px-2">
      {/* Background track */}
      <div className="absolute top-[14px] left-0 right-0 h-[2px] bg-light-border -translate-y-1/2 rounded-full" />
      {/* Active fill */}
      <motion.div
        className="absolute top-[14px] h-[2px] bg-navy-primary -translate-y-1/2 rounded-full origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progressPct / 100 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={barStyle}
      />
      {stepLabels.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex flex-col items-center relative z-10">
            <motion.div
              animate={{
                backgroundColor: done || active ? "#0F2747" : "#F7F4EE",
                borderColor: done || active ? "#0F2747" : "#E8E5DF",
                color: done || active ? "#FFFFFF" : "#9CA3AF",
                scale: active ? 1.08 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[11px] font-bold border-2 shrink-0"
            >
              {done ? (
                <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                i + 1
              )}
            </motion.div>
            <span
              className={`text-[9px] font-bold mt-1 tracking-wider uppercase text-center leading-tight transition-colors duration-300 hidden sm:block ${
                done || active ? "text-navy-primary" : "text-dark-text/30"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
