"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { FieldError } from "react-hook-form";

const inputClass =
  "w-full h-[56px] px-4 rounded-[14px] border-2 bg-white text-navy-primary text-[16px] font-medium placeholder:text-dark-text/30 outline-none transition-all duration-200 focus:border-deep-blue focus:shadow-[0_0_0_3px_rgba(24,79,134,0.08)]";

export default function StepPostcode({
  value,
  onChange,
  onBlur,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: FieldError;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-text/30">
          <MapPin className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder="e.g. CF10 1AA"
          autoComplete="postal-code"
          autoFocus
          className={`${inputClass} pl-12 uppercase tracking-[0.5px]`}
          aria-label="Postcode"
        />
      </div>
      {error && (
        <p className="text-red-500 text-[12.5px] mt-2 font-medium flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {error.message}
        </p>
      )}
      <p className="text-[12.5px] text-dark-text/40 mt-2">
        We&apos;ll use this to check availability in your area.
      </p>
    </motion.div>
  );
}
