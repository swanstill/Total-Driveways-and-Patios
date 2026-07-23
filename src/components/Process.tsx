const steps = [
  { num: "01", title: "Free site visit &amp; quotation", desc: "Discuss the project, measure the area, review access and levels, and talk through materials. No obligation to proceed." },
  { num: "02", title: "Preparation &amp; groundwork", desc: "Remove the existing surface where required, excavate to depth, and create a stable, compacted foundation." },
  { num: "03", title: "Installation &amp; detailing", desc: "Set the edging, drainage and levels before installing your chosen block paving, resin, tarmac, patio or landscaping." },
  { num: "04", title: "Final checks &amp; tidy-up", desc: "Complete the joints and finishing details, clear the site, and walk you through the finished project." },
];

export default function Process() {
  return (
    <section className="bg-white">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Our process</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            From first quote to finished project<span className="dot">.</span>
          </h2>
          <p>The process should feel simple for the customer, even when there&apos;s a great deal of technical work happening behind the scenes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="font-heading font-extrabold text-[34px] text-gold mb-[14px]">{step.num}</div>
              <h4 className="text-[17px] mb-2" dangerouslySetInnerHTML={{ __html: step.title }} />
              <p className="text-[14.5px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
