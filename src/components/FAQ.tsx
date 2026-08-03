"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does a new driveway or patio cost?",
    a: "Every project is priced individually because the cost depends on the area, existing surface, excavation, access, material, drainage, edging and any additional landscaping. A site visit allows the business to measure properly and provide a clear quotation rather than a misleading one-size-fits-all figure.",
  },
  {
    q: "Which driveway surface is best?",
    a: "There is no single best surface for every property. Block paving offers design flexibility and straightforward local repairs. Resin provides a smooth decorative finish. Tarmac is practical and often cost-effective for larger areas. The right choice depends on appearance, budget, traffic, maintenance and the condition of the base.",
  },
  {
    q: "Do you remove the existing driveway or patio?",
    a: "Where removal is needed, it should be included within the agreed scope. The quotation should explain what is being excavated, how spoil will be removed and whether any existing base can safely be retained.",
  },
  {
    q: "How long does installation take?",
    a: "Timescales vary with the size, access, preparation, complexity and weather. A straightforward domestic project may take several working days, while larger landscaping schemes take longer. The customer should receive a realistic programme with the quotation.",
  },
  {
    q: "How do you deal with drainage?",
    a: "The site visit should consider existing falls, thresholds and where rainwater can discharge. Depending on the property and surface, the solution may involve adjusted levels, permeable construction or channels connected to a suitable drainage point.",
  },
  {
    q: "Can you help with colours and design?",
    a: "Yes. Customers can compare materials, aggregate blends, paving sizes, borders and layouts. Advice should consider the colour of the property, neighbouring surfaces, the size of the area and how decorative the customer wants the finish to be.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes, the intended offer is a free, no-obligation site visit and quotation. Confirm this with the client before publishing if the policy changes.",
  },
  {
    q: "What areas do you cover?",
    a: "The confirmed primary area is [PRIMARY AREA], with surrounding coverage to be listed as [SURROUNDING AREAS]. Customers can submit their postcode or call 0800 994 9855 to check availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="!bg-cream">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto text-center mb-14">
          <span className="eyebrow">Frequently asked questions</span>
          <h2 className="text-[clamp(28px,3.2vw,40px)] mb-4">
            Good to know<span className="dot">.</span>
          </h2>
        </div>
        <div className="max-w-[820px] mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-[22px] px-1 font-bold text-navy text-base text-left cursor-pointer bg-transparent border-none"
              >
                {faq.q}
                <span className="w-[22px] h-[22px] flex-shrink-0 relative">
                  <span className="absolute w-[14px] h-[2px] bg-gold-dark rounded top-[10px] left-[4px]" />
                  <span
                    className={`absolute w-[2px] h-[14px] bg-gold-dark rounded left-[10px] top-[4px] transition-transform duration-200 ${
                      openIndex === i ? "rotate-90" : ""
                    }`}
                  />
                </span>
              </button>
              {openIndex === i && (
                <div className="px-1 pb-[22px] text-[14.5px] max-w-[70ch] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
