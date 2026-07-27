"use client";

import { useRef, useState, useCallback } from "react";

const slides = [
  { before: "/before-block-paving.jpeg", after: "/after-block-paving.jpeg", label: "Block Paving" },
  { before: "/tarmac-before.jpg", after: "/tarmac-after.jpg", label: "Tarmac Driveways" },
  { before: "/patios-before.jpg", after: "/patios-after.jpg", label: "Patios" },
  { before: "/resin-before.jpg", after: "/resin-after.jpg", label: "Resin Driveways" },
  { before: "/landscaping-after.jpg", after: "/landscaping-before.jpg", label: "Landscaping" },
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
        {/* Heading */}
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Recent projects</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Real work, done properly<span className="dot">.</span>
          </h2>
          <p>A balanced mix of completed driveways, patios and garden transformations across Barnsley and South Yorkshire.</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-[1fr_1fr] gap-[18px] mb-[50px]">
          {/* Large item */}
          <div className="relative md:row-span-2 md:col-span-1 rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-1.jpeg" alt="Newly laid patio" className="w-full h-full min-h-[300px] md:min-h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Newly laid patio with natural stone flags and a clean, level finish.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-2.jpeg" alt="Paved walkway with steps" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Paved walkway with coordinated steps, creating a welcoming entrance to the garden.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-3.jpeg" alt="Resin patio" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Resin patio surface with a smooth, modern finish.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-4.jpeg" alt="Patio and garden landscaping" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Patio and garden transformation with new paving and planting areas.
            </div>
          </div>
          <div className="relative rounded-[16px] overflow-hidden shadow-card aspect-[16/9] md:aspect-auto">
            <img src="/gallery-5.jpeg" alt="Resin-bound driveway" className="w-full h-full object-cover" />
            <div className="absolute left-0 right-0 bottom-0 p-4 text-sm font-semibold text-white bg-gradient-to-t from-[rgba(16,24,48,.82)] to-[rgba(16,24,48,0)]">
              Resin-bound driveway with a durable, low-maintenance finish.
            </div>
          </div>
        </div>

        {/* Before/After Sliders */}

        {/* Row 1 — 3 sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-[18px]">
          {slides.slice(0, 3).map((s) => (
            <BeforeAfterSlider key={s.label} {...s} />
          ))}
        </div>

        {/* Row 2 — 2 sliders + CTA card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {slides.slice(3).map((s) => (
            <BeforeAfterSlider key={s.label} {...s} />
          ))}
          <a
            href="#quote"
            className="relative rounded-[16px] overflow-hidden shadow-card w-full flex flex-col items-center justify-center text-center p-6 group"
            style={{ aspectRatio: "16/10", background: "linear-gradient(135deg, #0F2747 0%, #1A3A5C 100%)" }}
          >
            {/* Decorative gold accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-gold, #C79A3C), transparent)" }}
            />
            <div className="relative z-10">
              <svg fill="none" stroke="var(--color-gold, #C79A3C)" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[36px] h-[36px] mx-auto mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12" />
              </svg>
              <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--color-gold, #C79A3C)" }}>
                Start Your Project
              </span>
              <p className="text-white/70 text-[13px] mt-2 max-w-[20ch] leading-relaxed mx-auto">
                Ready for your own transformation? Get a free quote today.
              </p>
              <span className="inline-block mt-4 text-[12px] font-bold text-white bg-gold px-4 py-2 rounded-[6px] group-hover:brightness-110 transition-all">
                Get a free quote →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
