"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Margaret Thompson",
    location: "Barnsley",
    text: "From start to finish the team were professional, courteous and hardworking. The block paving driveway has completely transformed the front of our home. We've had so many compliments from neighbours. Highly recommend.",
    rating: 5,
  },
  {
    name: "Robert & Sarah Clarke",
    location: "Barnsley",
    text: "Absolutely delighted with our new block paving driveway. The attention to detail is second to none — the patterns, the edges, the finish. They cleaned up every single day before leaving and the project was completed on time and on budget.",
    rating: 5,
  },
  {
    name: "David Mitchell",
    location: "Barnsley",
    text: "This is the second time I've used Total Driveways and they've done it again. A beautiful block paved driveway that's transformed my property. Fair pricing, excellent workmanship and great communication throughout.",
    rating: 5,
  },
];

export default function ServiceTestimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-[120px]" style={{ background: "#fff" }}>
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
            — What Our Customers Say
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-5"
            style={{ color: "var(--svc-heading)", fontFamily: "var(--font-manrope), sans-serif", fontSize: "clamp(28px, 2.8vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Real Reviews From Real Customers
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
          className="max-w-[720px] mx-auto text-center"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1.5 mb-6" style={{ color: "var(--svc-gold)" }}>
            {[...Array(testimonials[active].rating)].map((_, i) => (
              <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-[22px] h-[22px]">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote text */}
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[18px] leading-relaxed italic mb-8"
            style={{ color: "var(--svc-body)" }}
          >
            &ldquo;{testimonials[active].text}&rdquo;
          </motion.p>

          {/* Author */}
          <div className="text-[15px] font-bold mb-8" style={{ color: "var(--svc-heading)" }}>
            {testimonials[active].name}
            <span className="font-normal" style={{ color: "var(--svc-body)" }}> — {testimonials[active].location}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button onClick={prev} className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all" style={{ border: "1px solid rgba(15,39,71,0.12)", color: "var(--svc-heading)" }}>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-[8px] h-[8px] rounded-full transition-all"
                  style={{
                    background: i === active ? "var(--svc-gold)" : "rgba(15,39,71,0.12)",
                    width: i === active ? "28px" : "8px",
                  }}
                />
              ))}
            </div>

            <button onClick={next} className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all" style={{ border: "1px solid rgba(15,39,71,0.12)", color: "var(--svc-heading)" }}>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
