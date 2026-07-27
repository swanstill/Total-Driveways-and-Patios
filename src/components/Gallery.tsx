"use client";

import { useRef, useState, useCallback } from "react";

const slides = [
  { before: "/before-block-paving.jpeg", after: "/after-block-paving.jpeg", label: "Block Paving" },
  { before: "/tarmac-before.jpg", after: "/tarmac-after.jpg", label: "Tarmac Driveways" },
  { before: "/patios-before.jpg", after: "/patios-after.jpg", label: "Patios" },
  { before: "/resin-before.jpg", after: "/resin-after.jpg", label: "Resin Driveways" },
  { before: "/landscaping-before.jpg", after: "/landscaping-after.jpg", label: "Landscaping" },
];

function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
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
    <div
      ref={containerRef}
      className="relative rounded-[16px] overflow-hidden cursor-ew-resize select-none shadow-card w-full"
      style={{ aspectRatio: "16/10" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After (full image) */}
      <div className="absolute inset-0" style={{ background: `url('${after}') center/cover no-repeat` }} />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{
          background: `url('${before}') center/cover no-repeat`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] z-10 pointer-events-none"
        style={{ left: `${sliderPos}%`, background: "var(--color-gold, #C79A3C)" }}
      />
      <div
        className="absolute z-10 w-[36px] h-[36px] rounded-full pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-md"
        style={{
          left: `${sliderPos}%`,
          top: "50%",
          background: "var(--color-gold, #C79A3C)",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-[16px] h-[16px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18M4 17l4 4m-4-4h16" />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px]" style={{ background: "rgba(8,33,63,0.8)", color: "rgba(255,255,255,0.85)" }}>
        Before
      </div>
      <div className="absolute bottom-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px]" style={{ background: "rgba(8,33,63,0.8)", color: "rgba(255,255,255,0.85)" }}>
        After
      </div>

      {/* Label */}
      <div className="absolute top-3 left-3 z-10 text-[11px] font-semibold px-3 py-1.5 rounded-[8px]" style={{ background: "var(--color-gold, #C79A3C)", color: "#fff" }}>
        {label}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="!bg-white">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Recent projects</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Before & after transformations<span className="dot">.</span>
          </h2>
          <p>Drag the slider on each image to compare the before and after of our recent projects across Barnsley and South Yorkshire.</p>
        </div>

        {/* Row 1 — 3 sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-[18px]">
          {slides.slice(0, 3).map((s) => (
            <BeforeAfterSlider key={s.label} {...s} />
          ))}
        </div>

        {/* Row 2 — 2 sliders, leave 3rd empty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {slides.slice(3).map((s) => (
            <BeforeAfterSlider key={s.label} {...s} />
          ))}
          <div />
        </div>
      </div>
    </section>
  );
}
