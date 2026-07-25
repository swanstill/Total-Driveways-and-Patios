"use client";

import { motion } from "framer-motion";

export default function StepNotes({
  value,
  onChange,
  onBlur,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder="Include access, drainage, desired materials or anything you would like us to consider."
        rows={4}
        autoFocus
        className="w-full p-4 rounded-[14px] border-2 border-light-border bg-white text-navy-primary text-[15px] placeholder:text-dark-text/30 outline-none transition-all duration-200 focus:border-deep-blue focus:shadow-[0_0_0_3px_rgba(24,79,134,0.08)] resize-none"
        aria-label="Additional notes"
      />
      <p className="text-[12.5px] text-dark-text/40 mt-2">
        Optional — skip if you have nothing to add.
      </p>
    </motion.div>
  );
}
