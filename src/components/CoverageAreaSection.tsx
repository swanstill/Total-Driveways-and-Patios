"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  CheckCircle,
  Phone,
  ArrowRight,
  Navigation,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────

interface Location {
  name: string;
  x: number;
  y: number;
  isPrimary?: boolean;
  services?: string[];
}

interface Statistic {
  value: string;
  label: string;
}

interface CoverageAreaSectionProps {
  className?: string;
  heading?: string;
  description?: string;
  locations?: Location[];
  statistics?: Statistic[];
  ctaTitle?: string;
  ctaDescription?: string;
  phoneNumber?: string;
  phoneLabel?: string;
  extraAreasLabel?: string;
  inputPlaceholder?: string;
  buttonText?: string;
}

// ─── Default Data ─────────────────────────────────────────────────────────

const DEFAULT_LOCATIONS: Location[] = [
  {
    name: "Cardiff",
    x: 300,
    y: 260,
    isPrimary: true,
    services: ["Driveways", "Patios", "Landscaping"],
  },
  { name: "Penarth", x: 258, y: 298 },
  { name: "Barry", x: 200, y: 338 },
  { name: "Newport", x: 415, y: 250 },
  { name: "Bridgend", x: 140, y: 310 },
  { name: "Pontypridd", x: 230, y: 190 },
  { name: "Caerphilly", x: 330, y: 200 },
  { name: "Llantrisant", x: 218, y: 228 },
];

const DEFAULT_STATISTICS: Statistic[] = [
  { value: "20+", label: "Areas Covered" },
  { value: "25+", label: "Years Experience" },
  { value: "1500+", label: "Projects Completed" },
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
];

// ─── Illustrated Map ──────────────────────────────────────────────────────

function IllustratedMap({
  locations,
  hoveredMarker,
  setHoveredMarker,
}: {
  locations: Location[];
  hoveredMarker: string | null;
  setHoveredMarker: (name: string | null) => void;
}) {
  const primary = locations.find((l) => l.isPrimary);

  return (
    <div className="relative w-full h-full min-h-[340px] md:min-h-[400px] lg:min-h-[540px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(15,39,71,0.08)] bg-[#F7F4EE]">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <svg
        viewBox="0 0 600 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Illustrated map of South Wales showing our coverage area with eight marked locations"
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="52%" r="50%">
            <stop offset="0%" stopColor="#CFA447" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#CFA447" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#CFA447" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#E5E0D4"
              strokeWidth="0.5"
            />
          </pattern>
          <filter id="mapShadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="4"
              floodColor="#0F2747"
              floodOpacity="0.1"
            />
          </filter>
        </defs>

        {/* ── Background ── */}
        <rect width="600" height="500" fill="#F7F4EE" />
        <rect width="600" height="500" fill="url(#grid)" />
        <ellipse cx="300" cy="260" rx="260" ry="200" fill="url(#mapGlow)" />

        {/* ── County outline (stylised South Wales) ── */}
        <path
          d="M 80 380 C 100 370, 150 365, 180 370 C 210 375, 240 385, 270 380 C 300 375, 340 370, 380 365 C 420 360, 460 350, 500 330 C 520 320, 540 300, 550 270 C 555 250, 550 220, 540 190 C 530 160, 510 140, 480 125 C 450 110, 410 105, 370 110 C 330 115, 290 120, 250 125 C 210 130, 170 140, 140 160 C 110 180, 90 210, 75 250 C 60 290, 55 330, 65 360 Z"
          fill="none"
          stroke="#D5CFC0"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.8"
        />

        {/* ── Coastline ── */}
        <path
          d="M 40 420 C 120 400, 200 410, 280 405 C 360 400, 440 390, 520 370 C 550 362, 570 350, 580 335"
          fill="none"
          stroke="#C5BFAE"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* ── Rivers ── */}
        <path
          d="M 230 140 Q 260 180, 280 220 Q 290 250, 295 280 Q 300 320, 290 370"
          fill="none"
          stroke="#C8DDE0"
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d="M 290 370 Q 295 390, 300 410"
          fill="none"
          stroke="#C8DDE0"
          strokeWidth="2"
          opacity="0.4"
        />
        <path
          d="M 180 280 Q 200 300, 220 320 Q 240 340, 250 365"
          fill="none"
          stroke="#C8DDE0"
          strokeWidth="2"
          opacity="0.45"
        />

        {/* ── Major roads ── */}
        <g opacity="0.6">
          <path
            d="M 140 310 Q 200 300, 300 260 Q 400 250, 415 250"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="2"
          />
          <path
            d="M 230 190 Q 260 220, 300 260"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="1.5"
          />
          <path
            d="M 300 260 Q 320 220, 330 200"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="1.5"
          />
          <path
            d="M 300 260 Q 280 290, 258 298"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="1.5"
          />
          <path
            d="M 200 338 Q 220 320, 258 298"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="1.5"
          />
          <path
            d="M 218 228 Q 240 240, 300 260"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="1.5"
          />
        </g>

        {/* ── Bristol Channel label ── */}
        <text
          x="300"
          y="455"
          textAnchor="middle"
          fill="#B0A89B"
          fontSize="11"
          fontWeight="500"
          fontFamily="var(--font-manrope), Manrope, sans-serif"
          letterSpacing="0.1em"
        >
          BRISTOL CHANNEL
        </text>

        {/* ── Location markers ── */}
        {locations.map((loc, i) => (
          <g
            key={loc.name}
            onMouseEnter={() => setHoveredMarker(loc.name)}
            onMouseLeave={() => setHoveredMarker(null)}
            style={{ cursor: "pointer" }}
          >
            {/* Pulse ring */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isPrimary ? 14 : 9}
              fill="none"
              stroke="#CFA447"
              strokeWidth="1.5"
              initial={{ opacity: 0.4, scale: 1 }}
              animate={
                loc.isPrimary
                  ? { opacity: [0.4, 0, 0.4], scale: [1, 1.6, 1] }
                  : { opacity: [0.3, 0, 0.3], scale: [1, 1.4, 1] }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            />
            {/* Marker dot */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isPrimary ? 8 : 5.5}
              fill={loc.isPrimary ? "#CFA447" : "#0F2747"}
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
              fontSize={loc.isPrimary ? "12" : "10.5"}
              fontWeight={loc.isPrimary ? "700" : "600"}
              fill={loc.isPrimary ? "#0F2747" : "#184F86"}
              fontFamily="var(--font-manrope), Manrope, sans-serif"
              dominantBaseline="middle"
            >
              {loc.name}
            </text>
          </g>
        ))}

        {/* ── Tooltip (Cardiff detail) ── */}
        {hoveredMarker === "Cardiff" && primary && (
          <foreignObject
            x={Math.min(Math.max(primary.x - 75, 10), 430)}
            y={Math.max(primary.y - 105, 10)}
            width="160"
            height="92"
          >
            <div className="bg-white rounded-xl px-3.5 py-3 shadow-lg shadow-[rgba(15,39,71,0.12)] border border-[#E6E2DB] text-[11px]">
              <div className="font-extrabold text-[#0F2747] text-[13px] leading-tight">
                Cardiff
              </div>
              <div className="text-[#CFA447] font-semibold text-[9px] tracking-[0.12em] uppercase mt-0.5">
                Primary Service Area
              </div>
              <div className="flex gap-1.5 mt-1.5 flex-wrap">
                {primary.services?.map((s) => (
                  <span
                    key={s}
                    className="bg-[#F7F4EE] text-[#0F2747] px-1.5 py-[2px] rounded text-[9px] font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </foreignObject>
        )}

        {/* ── Tooltip (other locations) ── */}
        {hoveredMarker &&
          hoveredMarker !== "Cardiff" &&
          locations.find((l) => l.name === hoveredMarker) && (
            <foreignObject
              x={
                Math.min(
                  Math.max(
                    (locations.find((l) => l.name === hoveredMarker)?.x ?? 300) -
                      55,
                    10,
                  ),
                  480,
                ) as number
              }
              y={
                Math.max(
                  (locations.find((l) => l.name === hoveredMarker)?.y ?? 200) -
                    48,
                  10,
                ) as number
              }
              width="120"
              height="36"
            >
              <div className="bg-white rounded-lg px-3 py-2 shadow-lg shadow-[rgba(15,39,71,0.1)] border border-[#E6E2DB] text-center">
                <div className="font-bold text-[#0F2747] text-[12px] leading-tight">
                  {hoveredMarker}
                </div>
                <div className="text-[#5B6270] text-[9px] font-medium">
                  Full coverage available
                </div>
              </div>
            </foreignObject>
          )}
      </svg>
    </div>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────

function AnimatedStat({ value, label, isInView }: { value: string; label: string; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,39,71,0.08)] p-4 text-center border-t-[3px] border-[#CFA447]"
    >
      <div className="font-[var(--font-manrope)] font-extrabold text-[#0F2747] text-[clamp(20px,1.6vw,28px)] leading-none mb-1">
        {value}
      </div>
      <div className="text-[#5B6270] text-[11px] font-semibold uppercase tracking-[0.06em]">
        {label}
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function CoverageAreaSection({
  className = "",
  heading = "Covering Cardiff\n& Surrounding Areas",
  description = "Total Driveways and Patios provides professional driveway, patio and landscaping services throughout Cardiff and nearby locations. If you're just outside our normal service area, contact us and we'll happily confirm availability.",
  locations = DEFAULT_LOCATIONS,
  statistics = DEFAULT_STATISTICS,
  ctaTitle = "Not Sure We Cover\nYour Area?",
  ctaDescription = "Enter your postcode and we'll confirm availability.",
  phoneNumber = "07722 151231",
  phoneLabel = "Call 07722 151231",
  extraAreasLabel = "+ More Surrounding Areas",
  inputPlaceholder = "Enter your postcode",
  buttonText = "Check Coverage",
}: CoverageAreaSectionProps) {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // Animation presets
  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  const fadeUp = (delay: number) => ({
    initial: { y: 30, opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-[#F7F4EE] py-24 md:py-28 ${className}`}
      aria-labelledby="coverage-heading"
    >
      {/* Paper texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA447' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* ── Section label ── */}
        <motion.span
          {...fadeUp(0)}
          className="block text-[#CFA447] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 lg:mb-6"
        >
          Local Coverage
        </motion.span>

        {/*
            Desktop (lg+): CSS Grid with 12 columns.
            On mobile the grid collapses and children stack in DOM order.
            DOM order = mobile order:
              1. heading + description
              2. map
              3. coverage list
              4. statistics
              5. CTA card
        */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* ── Heading + Description (mobile: 1st, desktop: right col row 1) ── */}
          <motion.div
            {...fadeUp(0.08)}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1"
          >
            <h2
              id="coverage-heading"
              className="font-[var(--font-manrope)] text-[#0F2747] text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4 lg:mb-5"
            >
              {heading.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-[#5B6270] text-[clamp(15px,1.05vw,18px)] leading-relaxed max-w-[650px] mb-8 lg:mb-0">
              {description}
            </p>
          </motion.div>

          {/* ── Map (mobile: 2nd, desktop: left col spanning full height) ── */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.92, opacity: 0 }
            }
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:row-span-4 mb-8 lg:mb-0"
          >
            <IllustratedMap
              locations={locations}
              hoveredMarker={hoveredMarker}
              setHoveredMarker={setHoveredMarker}
            />
          </motion.div>

          {/* ── Coverage List Card (mobile: 3rd, desktop: right col row 2) ── */}
          <motion.div
            initial={{ x: 25, opacity: 0 }}
            animate={
              isInView ? { x: 0, opacity: 1 } : { x: 25, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-2 mb-6 lg:mb-0"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,39,71,0.08)] p-6 lg:p-7">
              <h3 className="font-[var(--font-manrope)] font-extrabold text-[#0F2747] text-lg mb-4 flex items-center gap-2.5">
                <MapPin
                  className="w-[18px] h-[18px] text-[#CFA447] flex-shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Areas We Cover
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {AREA_NAMES.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ x: 15, opacity: 0 }}
                    animate={
                      isInView ? { x: 0, opacity: 1 } : { x: 15, opacity: 0 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + i * 0.04,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-2.5 group cursor-default"
                  >
                    <CheckCircle
                      className="w-[16px] h-[16px] text-[#CFA447] flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="text-[#15202B] text-[15px] font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-3.5 border-t border-[#E6E2DB]">
                <span className="text-[#184F86] text-[14px] font-semibold flex items-center gap-2">
                  <Navigation
                    className="w-[14px] h-[14px] flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  {extraAreasLabel}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Statistics (mobile: 4th, desktop: right col row 3) ── */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-3 mb-6 lg:mb-0">
            <div className="grid grid-cols-3 gap-3">
              {statistics.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* ── CTA Card (mobile: 5th, desktop: right col row 4) ── */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease,
            }}
            className="lg:col-span-5 lg:col-start-8 lg:row-start-4"
          >
            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(15,39,71,0.08)] p-6 lg:p-7">
              <h3 className="font-[var(--font-manrope)] font-extrabold text-[#0F2747] text-lg mb-1.5 leading-snug">
                {ctaTitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h3>
              <p className="text-[#5B6270] text-[14px] mb-4">
                {ctaDescription}
              </p>

              {/* Postcode input + submit row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <label htmlFor="coverage-postcode" className="sr-only">
                    Enter your postcode
                  </label>
                  <MapPin
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#B0A89B] pointer-events-none"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <input
                    id="coverage-postcode"
                    type="text"
                    inputMode="text"
                    placeholder={inputPlaceholder}
                    className="w-full h-14 pl-10 pr-4 rounded-xl border border-[#E6E2DB] bg-white text-[#15202B] text-[15px] font-medium placeholder:text-[#B0A89B] outline-none transition-all duration-200 focus:border-[#CFA447] focus:ring-2 focus:ring-[#CFA447]/20"
                    autoComplete="postal-code"
                  />
                </div>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="group inline-flex items-center justify-center gap-2 h-14 px-7 rounded-xl bg-[#0F2747] text-white text-[15px] font-bold whitespace-nowrap transition-colors duration-200 hover:bg-[#184F86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA447] focus-visible:ring-offset-2 flex-shrink-0 min-w-[44px] min-h-[44px]"
                  type="submit"
                >
                  {buttonText}
                  <ArrowRight
                    className="w-[17px] h-[17px] transition-transform duration-200 group-hover:translate-x-[5px]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </motion.button>
              </div>

              {/* Phone link */}
              <div className="mt-3.5 pt-3.5 border-t border-[#E6E2DB]">
                <motion.a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  whileHover={{ y: -1 }}
                  className="inline-flex items-center gap-2.5 text-[#184F86] font-semibold text-[14px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CFA447] focus-visible:ring-offset-2 rounded-lg px-1 -ml-1"
                >
                  <Phone
                    className="w-[16px] h-[16px] flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>{phoneLabel}</span>
                  <ArrowRight
                    className="w-[14px] h-[14px] transition-transform duration-200 group-hover:translate-x-[3px]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
