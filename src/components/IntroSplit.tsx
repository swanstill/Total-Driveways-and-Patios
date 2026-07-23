export default function IntroSplit() {
  return (
    <section>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Driveways, patios and landscaping</span>
          <h2 className="text-[clamp(28px,3vw,38px)] mb-[18px]">
            For your property, not just any property<span className="dot">.</span>
          </h2>
          <p>The outside of your property has to do more than look good in a photograph. A driveway must carry vehicles without sinking or shifting. A patio needs stable levels and drainage so it remains useful after heavy rain. A landscaped garden has to balance appearance with access, maintenance and the way your family actually uses the space.</p>
          <p className="mt-4">Total Driveways and Patios provides a complete range of driveway, paving and landscaping services for homeowners in Cardiff and South Wales. Rather than treating the visible surface as the whole job, we look at the condition of the existing ground, access, levels, drainage, edging and the relationship between the new work and the rest of the property.</p>
        </div>
        <div className="visual aspect-[4/3.4] rounded-[20px] overflow-hidden shadow-card relative">
          <div className="swatch-tarmac w-full h-full" />
          <div className="absolute left-5 bottom-5 bg-white py-[14px] px-[18px] rounded-[14px] text-[13.5px] font-semibold text-navy max-w-[260px] shadow-[0_10px_20px_-8px_rgba(0,0,0,.18)]">
            &ldquo;The quality of the finished surface starts with the preparation underneath.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
