"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

export default function ResinBeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="py-[120px]" style={{ background: "var(--svc-section)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[680px] mx-auto mb-16"
        >
          <motion.span
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--svc-gold)" }}
          >
            — Before & After
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            See the Difference We Make
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[17px]"
            style={{ color: "var(--svc-body)" }}
          >
            Drag the slider to compare the before and after of a recent resin driveway project in Barnsley.
          </motion.p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="max-w-[900px] mx-auto select-none"
        >
          <div
            ref={containerRef}
            className="relative rounded-[20px] overflow-hidden cursor-ew-resize"
            style={{ aspectRatio: "16/9", boxShadow: "0 20px 60px -16px rgba(15,39,71,0.18)" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After (full image) */}
            <div className="absolute inset-0" style={{ background: "url('/resin-after.jpg') center/cover no-repeat" }} />

            {/* Before (clipped) */}
            <div
              className="absolute inset-0"
              style={{
                background: "url('/resin-before.jpg') center/cover no-repeat",
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            />

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-[3px] z-10 pointer-events-none"
              style={{ left: `${sliderPos}%`, background: "var(--svc-gold)" }}
            />
            <div
              className="absolute z-10 w-[44px] h-[44px] rounded-full pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${sliderPos}%`,
                top: "50%",
                background: "var(--svc-gold)",
                boxShadow: "0 4px 16px rgba(200,155,74,0.4)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 z-10 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-[8px]" style={{ background: "rgba(8,33,63,0.8)", color: "rgba(255,255,255,0.85)" }}>
              Before
            </div>
            <div className="absolute bottom-4 right-4 z-10 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-[8px]" style={{ background: "rgba(8,33,63,0.8)", color: "rgba(255,255,255,0.85)" }}>
              After
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
