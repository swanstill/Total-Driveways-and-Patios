"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  CheckCircle,
  Phone,
  ArrowRight,
  Award,
  Navigation,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────

const LOCATIONS = [
  { name: "Cardiff", x: 300, y: 260, isPrimary: true },
  { name: "Penarth", x: 258, y: 298 },
  { name: "Barry", x: 200, y: 338 },
  { name: "Newport", x: 415, y: 250 },
  { name: "Bridgend", x: 140, y: 310 },
  { name: "Pontypridd", x: 230, y: 190 },
  { name: "Caerphilly", x: 330, y: 200 },
  { name: "Llantrisant", x: 218, y: 228 },
];

const AREA_NAMES = [
  "Cardiff",
  "Barry",
  "Penarth",
  "Newport",
  "Bridgend",
  "Pontypridd",
  "Caerphilly",
  "Llantrisant",
  "Cowbridge",
  "Llantwit Major",
  "Merthyr Tydfil",
  "Abergavenny",
];

const STATS = [
  { icon: "award", value: "20+", label: "Areas Covered" },
  { icon: "map-pin", value: "25+", label: "Years Experience" },
  { icon: "check-circle", value: "1500+", label: "Projects Completed" },
];

// ─── Illustrated Map ──────────────────────────────────────────────────────

function IllustratedMap() {
  const cx = 300;
  const cy = 260; // Cardiff centre

  return (
    <div className="relative w-full h-full min-h-[320px] md:min-h-[360px] lg:min-h-[420px] rounded-[12px] overflow-hidden shadow-[0_12px_32px_-12px_rgba(27,42,74,0.10)] bg-[#EDE7DA]">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Illustrated map of South Wales showing our coverage area with eight marked locations"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#D8D2C2"
              strokeWidth="0.5"
            />
          </pattern>
          <filter id="mapShadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="4"
              floodColor="#1B2A4A"
              floodOpacity="0.10"
            />
          </filter>
        </defs>

        {/* ── Base ── */}
        <rect width="600" height="500" fill="#EDE7DA" />
        <rect width="600" height="500" fill="url(#grid)" />

        {/* ── Bristol Channel water ── */}
        <path
          d="M 0 420 Q 100 390, 200 405 Q 300 415, 400 395 Q 500 375, 600 380 L 600 500 L 0 500 Z"
          fill="#BFD9E8"
          opacity="0.55"
        />

        {/* ── Coastline ── */}
        <path
          d="M 0 420 Q 100 390, 200 405 Q 300 415, 400 395 Q 500 375, 600 380"
          fill="none"
          stroke="#A8C4D8"
          strokeWidth="2"
          opacity="0.65"
        />

        {/* ── County outline ── */}
        <path
          d="M 80 380 C 100 370, 150 365, 180 370 C 210 375, 240 385, 270 380 C 300 375, 340 370, 380 365 C 420 360, 460 350, 500 330 C 520 320, 540 300, 550 270 C 555 250, 550 220, 540 190 C 530 160, 510 140, 480 125 C 450 110, 410 105, 370 110 C 330 115, 290 120, 250 125 C 210 130, 170 140, 140 160 C 110 180, 90 210, 75 250 C 60 290, 55 330, 65 360 Z"
          fill="none"
          stroke="#C9BFA8"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.7"
        />

        {/* ── Dashed concentric radius circles (Cardiff) ── */}
        {[60, 120, 180].map((r, i) => (
          <circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#C9975A"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity={0.45 - i * 0.12}
          />
        ))}

        {/* ── Rivers ── */}
        <path
          d="M 230 140 Q 260 180, 280 220 Q 290 250, 295 280 Q 300 320, 290 370"
          fill="none"
          stroke="#BFD9E8"
          strokeWidth="3"
          opacity="0.45"
        />
        <path
          d="M 290 370 Q 295 390, 300 410"
          fill="none"
          stroke="#BFD9E8"
          strokeWidth="2"
          opacity="0.35"
        />

        {/* ── Major roads ── */}
        <g opacity="0.45">
          <path
            d="M 140 310 Q 200 300, 300 260 Q 400 250, 415 250"
            fill="none"
            stroke="#C9BFA8"
            strokeWidth="2"
          />
          <path
            d="M 230 190 Q 260 220, 300 260"
            fill="none"
            stroke="#C9BFA8"
            strokeWidth="1.5"
          />
          <path
            d="M 300 260 Q 320 220, 330 200"
            fill="none"
            stroke="#C9BFA8"
            strokeWidth="1.5"
          />
          <path
            d="M 300 260 Q 280 290, 258 298"
            fill="none"
            stroke="#C9BFA8"
            strokeWidth="1.5"
          />
          <path
            d="M 200 338 Q 220 320, 258 298"
            fill="none"
            stroke="#C9BFA8"
            strokeWidth="1.5"
          />
          <path
            d="M 218 228 Q 240 240, 300 260"
            fill="none"
            stroke="#C9BFA8"
            strokeWidth="1.5"
          />
        </g>

        {/* ── Bristol Channel label ── */}
        <text
          x="300"
          y="455"
          textAnchor="middle"
          fill="#A8B8A0"
          fontSize="11"
          fontWeight="500"
          fontFamily="var(--font-inter), Inter, sans-serif"
          letterSpacing="0.1em"
        >
          BRISTOL CHANNEL
        </text>

        {/* ── Location markers ── */}
        {LOCATIONS.map((loc, i) => (
          <g key={loc.name}>
            {/* Pulse ring (primary only) */}
            {loc.isPrimary && (
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r={16}
                fill="none"
                stroke="#C9975A"
                strokeWidth="1.5"
                initial={{ opacity: 0.4, scale: 1 }}
                animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.8, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
            {/* Pin dot */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isPrimary ? 8 : 5}
              fill={loc.isPrimary ? "#C9975A" : "#1B2A4A"}
              stroke="#fff"
              strokeWidth="2.5"
              filter="url(#mapShadow)"
            />
            {loc.isPrimary && (
              <circle cx={loc.x} cy={loc.y} r={2.5} fill="#fff" opacity="0.9" />
            )}
            {/* Label */}
            <text
              x={loc.x + (loc.isPrimary ? 14 : 10)}
              y={loc.y + 4}
              fontSize={loc.isPrimary ? "12" : "10"}
              fontWeight={loc.isPrimary ? "700" : "600"}
              fill="#1B2A4A"
              fontFamily="var(--font-inter), Inter, sans-serif"
              dominantBaseline="middle"
            >
              {loc.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────

const STAT_ICONS: Record<string, React.ElementType> = {
  award: Award,
  "map-pin": MapPin,
  "check-circle": CheckCircle,
};

function StatCard({
  icon,
  value,
  label,
  isInView,
}: {
  icon: string;
  value: string;
  label: string;
  isInView: boolean;
}) {
  const Icon = STAT_ICONS[icon] ?? CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-2"
    >
      <div className="w-9 h-9 rounded-full border-2 border-[#C9975A]/30 flex items-center justify-center">
        <Icon className="w-[18px] h-[18px] text-[#C9975A]" strokeWidth={1.5} />
      </div>
      <div className="font-bold text-[#1B2A4A] text-[clamp(17px,1.3vw,22px)] leading-none">
        {value}
      </div>
      <div className="text-[#6B7280] text-[10.5px] font-medium leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function CoverageAreaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F6EFE4] py-16 md:py-20 lg:py-24"
      aria-labelledby="coverage-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* ── 4-column grid (25% each) ── */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 xl:gap-8 items-start">
          {/* ════════════ Col 1 · Text + Stats ════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0, ease }}
            className="lg:col-span-1 mb-10 lg:mb-0"
          >
            {/* Eyebrow */}
            <span className="block text-[#C9975A] text-[12.5px] font-bold tracking-[0.2em] uppercase mb-4">
              Local Coverage
            </span>

            {/* Two-tone H2 — serif display */}
            <h2
              id="coverage-heading"
              className="font-[var(--font-playfair-display)] text-[#1B2A4A] text-[clamp(22px,2.2vw,32px)] font-bold leading-[1.2] tracking-[-0.01em]"
            >
              Trusted Driveway &amp; Patio Services
              <br />
              <span className="text-[#C9975A]">Across South Wales</span>
            </h2>

            {/* Gold divider */}
            <div className="w-8 h-[3px] bg-[#C9975A] mt-4 mb-3" />

            {/* Paragraph */}
            <p className="text-[#6B7280] text-[clamp(13px,0.85vw,14.5px)] leading-relaxed mb-6">
              Total Driveways and Patios provides professional driveway, patio
              and landscaping services throughout Cardiff and nearby locations.
            </p>

            {/* 3-up stat cards (flat, on background) */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <StatCard
                  key={stat.label}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* ════════════ Col 2 · Illustrated Map ════════════ */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.95, opacity: 0 }
            }
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-1 mb-8 lg:mb-0"
          >
            <IllustratedMap />
          </motion.div>

          {/* ════════════ Col 3 · Areas We Cover ════════════ */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="lg:col-span-1 mb-6 lg:mb-0"
          >
            <div className="bg-white rounded-[12px] shadow-[0_8px_24px_-8px_rgba(27,42,74,0.10)] p-5 h-full">
              <h3 className="font-semibold text-[#1B2A4A] text-[18px] mb-4">
                Areas We Cover
              </h3>
              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                {AREA_NAMES.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin
                        className="w-[13px] h-[13px] text-[#C9975A] shrink-0"
                        strokeWidth={1.5}
                      />
                      <span className="text-[#1B2A4A] text-[13px] font-medium">
                        {name}
                      </span>
                    </div>
                    <CheckCircle
                      className="w-[14px] h-[14px] text-[#C9975A] shrink-0 opacity-60"
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-3.5 pt-3 border-t border-[#EDE7DA] w-full text-left text-[#C9975A] text-[13px] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                <Navigation className="w-[13px] h-[13px]" strokeWidth={1.5} />
                + More Surrounding Areas
              </button>
            </div>
          </motion.div>

          {/* ════════════ Col 4 · CTA ════════════ */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-[12px] shadow-[0_8px_24px_-8px_rgba(27,42,74,0.10)] overflow-hidden">
              {/* Gold accent bar (top) */}
              <div className="h-[5px] bg-[#C9975A] w-full" />

              <div className="p-5">
                <h3 className="font-semibold text-[#1B2A4A] text-[18px] leading-snug mb-1.5">
                  Not sure we cover your area?
                </h3>
                <p className="text-[#6B7280] text-[13px] mb-4">
                  Enter your postcode and we&apos;ll confirm availability.
                </p>

                {/* Postcode input */}
                <div className="relative mb-3">
                  <MapPin
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#B0A89B] pointer-events-none"
                    strokeWidth={1.5}
                  />
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    className="w-full h-[44px] pl-9 pr-4 rounded-[10px] border border-[#E0DCD0] bg-white text-[#1B2A4A] text-[13px] font-medium placeholder:text-[#B0A89B] outline-none transition-all duration-200 focus:border-[#C9975A] focus:ring-2 focus:ring-[#C9975A]/20"
                    autoComplete="postal-code"
                  />
                </div>

                {/* Primary CTA button (navy fill) */}
                <button
                  type="submit"
                  className="w-full h-[44px] inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#1B2A4A] text-white text-[13px] font-semibold transition-all duration-200 hover:bg-[#283A5A] shadow-[0_4px_12px_-4px_rgba(27,42,74,0.30)] mb-2.5"
                >
                  Check Coverage
                  <ArrowRight
                    className="w-[15px] h-[15px]"
                    strokeWidth={1.5}
                  />
                </button>

                {/* Secondary phone button (outlined) */}
                <a
                  href="tel:07722151231"
                  className="w-full h-[44px] inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-[#1B2A4A] text-[#1B2A4A] text-[13px] font-semibold transition-all duration-200 hover:bg-[#1B2A4A] hover:text-white"
                >
                  <Phone
                    className="w-[15px] h-[15px]"
                    strokeWidth={1.5}
                  />
                  Call 07722 151231
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
