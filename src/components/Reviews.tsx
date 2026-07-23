const reviews = [
  {
    text: "From the first visit to the final clean-up, communication was excellent and the finish is exactly what we wanted. Highly recommend.",
    initials: "DE",
    name: "David E.",
    meta: "Block paving driveway · Google",
  },
  {
    text: "Really pleased with our new patio. The team turned up when they said they would and left the garden spotless.",
    initials: "SL",
    name: "Sarah L.",
    meta: "Porcelain patio · Google",
  },
  {
    text: "Honest advice from the start — no upselling, just a clear explanation of what our driveway actually needed.",
    initials: "MP",
    name: "Mark P.",
    meta: "Resin driveway · Google",
  },
];

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Customer reviews</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            What our customers say<span className="dot">.</span>
          </h2>
          <p>Verified reviews from customers across Cardiff and South Wales.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-[20px] p-7 shadow-card">
              <div className="flex gap-[3px] mb-4 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14.5px] text-navy-soft mb-[18px] leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-full bg-cream flex items-center justify-center font-heading font-bold text-navy text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">{r.name}</div>
                  <div className="text-[12.5px] text-slate">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
