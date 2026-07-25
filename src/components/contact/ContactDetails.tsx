"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "07722 151231",
    href: "tel:07722151231",
    highlight: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/4407722151231",
    highlight: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@totaldriveways.co.uk",
    href: "mailto:info@totaldriveways.co.uk",
    highlight: false,
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon–Fri, 8am–5pm",
    href: null,
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Barnsley & South Yorkshire",
    href: null,
    highlight: false,
  },
];

export default function ContactDetails() {
  return (
    <section className="relative py-[100px]" style={{ background: "#F7F4EE" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-[600px] mx-auto mb-14"
        >
          <motion.span
            custom={0}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "rgba(207,164,71,0.8)" }}
          >
            — Contact Details
          </motion.span>
          <motion.h2
            custom={1}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="mt-5 mb-4"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontSize: "clamp(28px, 2.8vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--color-navy-primary, #0F2747)",
            }}
          >
            How to Reach Us
          </motion.h2>
          <motion.p
            custom={2}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }) }}
            className="text-[16px]"
            style={{ color: "var(--color-slate, #5B6270)" }}
          >
            Call, message or email — we&apos;re here to help with your project.
          </motion.p>
        </motion.div>

        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: (j) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: j * 0.1, ease: [0.25, 0.1, 0.25, 1] as const } }) }}
                  className={`relative p-6 lg:p-7 rounded-[16px] transition-all duration-300 h-full ${item.href ? "hover:-translate-y-1 cursor-pointer" : ""}`}
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 20px -8px rgba(15,39,71,0.08)",
                    border: item.highlight ? "1px solid var(--color-warm-gold)" : "1px solid rgba(15,39,71,0.04)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                      style={{ background: item.highlight ? "rgba(207,164,71,0.12)" : "rgba(15,39,71,0.04)" }}
                    >
                      <Icon
                        className="w-[18px] h-[18px]"
                        style={{ color: item.highlight ? "var(--color-warm-gold)" : "var(--color-navy-primary)" }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold uppercase tracking-[0.06em] mb-1" style={{ color: "rgba(15,39,71,0.4)" }}>
                        {item.label}
                      </div>
                      <div
                        className="font-bold text-[15px] leading-snug break-words"
                        style={{ color: item.highlight ? "var(--color-warm-gold)" : "var(--color-navy-primary)" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                  {item.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px]" style={{ background: "var(--color-warm-gold)" }} />
                  )}
                </motion.div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
