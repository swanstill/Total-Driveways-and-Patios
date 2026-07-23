"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  MapPin,
  CheckCircle,
  Phone,
  ArrowRight,
  Award,
  Search,
  ChevronDown,
  X,
  AlertCircle,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────

const COVERED_POSTCODES = [
  "CF10", "CF11", "CF14", "CF15", "CF5",
  "CF3", "CF23", "CF24", "CF31", "CF32",
  "CF33", "CF35", "CF36", "CF37", "CF38",
  "CF39", "CF40", "CF41", "CF42", "CF43",
  "CF44", "CF45", "CF46", "CF47", "CF48",
  "CF61", "CF62", "CF63", "CF64", "CF71",
  "CF72", "CF81", "CF82", "CF83", "CF91",
  "NP10", "NP11", "NP12", "NP13", "NP15",
  "NP16", "NP18", "NP19", "NP20", "NP22",
  "NP23", "NP24", "NP25", "NP26",
];

const ALL_AREAS = [
  "Cardiff", "Barry", "Penarth", "Caerphilly",
  "Newport", "Pontypridd", "Bridgend", "Llantwit Major",
  "Cowbridge", "Dinas Powys", "Radyr", "Whitchurch",
  "Rhiwbina", "Llanishen", "Canton", "Roath",
  "Lisvane", "Rumney", "St Mellons",
];

const INITIAL_VISIBLE = 9;

const DISTANCES: Record<string, string> = {
  Cardiff: "0 miles",
  Barry: "10 miles",
  Penarth: "3 miles",
  Newport: "12 miles",
  Bridgend: "20 miles",
  Pontypridd: "10 miles",
  Caerphilly: "8 miles",
  "Llantwit Major": "17 miles",
  Cowbridge: "12 miles",
  "Dinas Powys": "5 miles",
  Radyr: "4 miles",
  Whitchurch: "3 miles",
  Rhiwbina: "4 miles",
  Llanishen: "4 miles",
  Canton: "2 miles",
  Roath: "2 miles",
  Lisvane: "5 miles",
  Rumney: "4 miles",
  "St Mellons": "5 miles",
};

const MAP_LOCATIONS = [
  { name: "Cardiff", x: 300, y: 260, isPrimary: true },
  { name: "Penarth", x: 258, y: 298 },
  { name: "Barry", x: 200, y: 338 },
  { name: "Newport", x: 415, y: 250 },
  { name: "Bridgend", x: 140, y: 310 },
  { name: "Pontypridd", x: 230, y: 190 },
  { name: "Caerphilly", x: 330, y: 200 },
  { name: "Cowbridge", x: 180, y: 278 },
  { name: "Llantwit Major", x: 160, y: 350 },
];

const STATS_DATA = [
  { icon: Award, value: 20, suffix: "+", label: "Areas Covered" },
  { icon: MapPin, value: 25, suffix: "+", label: "Years Experience" },
  { icon: CheckCircle, value: 1500, suffix: "+", label: "Projects Completed" },
];

// ─── Animated Counter ─────────────────────────────────────────────────────

function AnimatedNumber({
  value,
  suffix = "",
  isInView,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      });
      const unsubscribe = rounded.on("change", (v) => {
        setDisplay(`${v}${suffix}`);
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    } else {
      setDisplay(`0${suffix}`);
    }
  }, [isInView, count, value, suffix, rounded]);

  return <span>{display}</span>;
}

// ─── Types ────────────────────────────────────────────────────────────────

type PostcodeStatus = "idle" | "validating" | "success" | "error" | "invalid";

// ─── UK Postcode Validation ───────────────────────────────────────────────

function isValidUKPostcode(postcode: string): boolean {
  return /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i.test(postcode.trim());
}

function checkPostcodeCoverage(postcode: string): boolean {
  const trimmed = postcode.trim().toUpperCase();
  const outcode = trimmed.replace(/[^A-Z0-9]/g, "").slice(0, 4);
  return COVERED_POSTCODES.some((p) => outcode.startsWith(p));
}

// ─── StatCard ─────────────────────────────────────────────────────────────

function StatCard({
  Icon,
  value,
  suffix,
  label,
  isInView,
  delay,
}: {
  Icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-[16px] shadow-[0_8px_24px_-8px_rgba(15,39,71,0.10)] p-7 flex flex-col gap-3 transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(15,39,71,0.20)]"
    >
      <div className="w-[42px] h-[42px] rounded-full bg-[#C89B4A]/10 flex items-center justify-center group-hover:bg-[#C89B4A]/20 transition-colors duration-300">
        <Icon className="w-[22px] h-[22px] text-[#C89B4A]" strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-[var(--font-manrope)] font-extrabold text-[#0F2747] text-[clamp(24px,2vw,30px)] leading-none">
          <AnimatedNumber
            value={value}
            suffix={suffix}
            isInView={isInView}
          />
        </div>
        <div className="font-[var(--font-manrope)] text-[#5B6574] text-[13px] font-medium mt-1">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Coverage Map ─────────────────────────────────────────────────────────

function CoverageMap({
  hoveredMarker,
  setHoveredMarker,
}: {
  hoveredMarker: string | null;
  setHoveredMarker: (name: string | null) => void;
}) {
  const cx = 300;
  const cy = 260;

  return (
    <div className="relative w-full h-[340px] md:h-[430px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-[0_12px_32px_-12px_rgba(15,39,71,0.10)] bg-[#F0EBE1]">
      <svg
        viewBox="0 0 600 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Interactive coverage map of South Wales showing Cardiff as primary service area and surrounding towns"
      >
        <defs>
          <pattern
            id="roadGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#E0D8C8"
              strokeWidth="0.5"
            />
          </pattern>
          <filter id="pinShadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="4"
              floodColor="#0F2747"
              floodOpacity="0.15"
            />
          </filter>
        </defs>

        {/* Base */}
        <rect width="600" height="500" fill="#F0EBE1" />
        <rect width="600" height="500" fill="url(#roadGrid)" />

        {/* Water */}
        <path
          d="M 0 420 Q 100 390, 200 405 Q 300 415, 400 395 Q 500 375, 600 380 L 600 500 L 0 500 Z"
          fill="#D5E3E8"
          opacity="0.5"
        />

        {/* Coastline */}
        <path
          d="M 0 420 Q 100 390, 200 405 Q 300 415, 400 395 Q 500 375, 600 380"
          fill="none"
          stroke="#C0D0D6"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* County outline */}
        <path
          d="M 80 380 C 100 370, 150 365, 180 370 C 210 375, 240 385, 270 380 C 300 375, 340 370, 380 365 C 420 360, 460 350, 500 330 C 520 320, 540 300, 550 270 C 555 250, 550 220, 540 190 C 530 160, 510 140, 480 125 C 450 110, 410 105, 370 110 C 330 115, 290 120, 250 125 C 210 130, 170 140, 140 160 C 110 180, 90 210, 75 250 C 60 290, 55 330, 65 360 Z"
          fill="none"
          stroke="#D0C8B6"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.6"
        />

        {/* Roads */}
        <g opacity="0.4">
          <path
            d="M 140 310 Q 200 300, 300 260 Q 400 250, 415 250"
            fill="none"
            stroke="#C8C0AE"
            strokeWidth="2"
          />
          <path
            d="M 230 190 Q 260 220, 300 260"
            fill="none"
            stroke="#C8C0AE"
            strokeWidth="1.5"
          />
          <path
            d="M 300 260 Q 320 220, 330 200"
            fill="none"
            stroke="#C8C0AE"
            strokeWidth="1.5"
          />
          <path
            d="M 300 260 Q 280 290, 258 298"
            fill="none"
            stroke="#C8C0AE"
            strokeWidth="1.5"
          />
          <path
            d="M 200 338 Q 220 320, 258 298"
            fill="none"
            stroke="#C8C0AE"
            strokeWidth="1.5"
          />
          <path
            d="M 218 228 Q 240 240, 300 260"
            fill="none"
            stroke="#C8C0AE"
            strokeWidth="1.5"
          />
        </g>

        {/* Connection lines from Cardiff to secondary locations */}
        {MAP_LOCATIONS.filter((l) => !l.isPrimary).map((loc) => (
          <line
            key={`line-${loc.name}`}
            x1={cx}
            y1={cy}
            x2={loc.x}
            y2={loc.y}
            stroke="#C89B4A"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.2"
          />
        ))}

        {/* Three animated concentric rings around Cardiff */}
        {[55, 110, 165].map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#C89B4A"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity={0.25 - i * 0.07}
            initial={{ scale: 0.95, opacity: 0.1 }}
            animate={{ scale: 1, opacity: [0.25 - i * 0.07, 0.08, 0.25 - i * 0.07] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Location markers */}
        {MAP_LOCATIONS.map((loc) => (
          <g
            key={loc.name}
            onMouseEnter={() => setHoveredMarker(loc.name)}
            onMouseLeave={() => setHoveredMarker(null)}
            style={{ cursor: "pointer" }}
          >
            {/* Primary pulse */}
            {loc.isPrimary && (
              <>
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  r={18}
                  fill="none"
                  stroke="#C89B4A"
                  strokeWidth="1.5"
                  initial={{ opacity: 0.3, scale: 1 }}
                  animate={{ opacity: [0.3, 0, 0.3], scale: [1, 2, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                {/* Gold glow behind primary pin */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={14}
                  fill="#C89B4A"
                  opacity="0.15"
                />
              </>
            )}

            {/* Pin */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isPrimary ? 9 : 5.5}
              fill={loc.isPrimary ? "#C89B4A" : "#C89B4A"}
              stroke="#fff"
              strokeWidth="2.5"
              filter="url(#pinShadow)"
            />
            {loc.isPrimary && (
              <circle cx={loc.x} cy={loc.y} r={3} fill="#fff" opacity="0.9" />
            )}

            {/* Label */}
            <text
              x={loc.x + (loc.isPrimary ? 14 : 10)}
              y={loc.y + 4}
              fontSize={loc.isPrimary ? "12" : "10"}
              fontWeight={loc.isPrimary ? "700" : "600"}
              fill="#0F2747"
              fontFamily="var(--font-manrope), Manrope, sans-serif"
              dominantBaseline="middle"
            >
              {loc.name}
            </text>
          </g>
        ))}

        {/* Tooltip for hovered marker */}
        {hoveredMarker && MAP_LOCATIONS.find((l) => l.name === hoveredMarker) && (
          <foreignObject
            x={
              Math.min(
                Math.max(
                  (MAP_LOCATIONS.find((l) => l.name === hoveredMarker)?.x ??
                    300) - 65,
                  10
                ),
                480
              )
            }
            y={
              Math.max(
                (MAP_LOCATIONS.find((l) => l.name === hoveredMarker)?.y ??
                  200) - 55,
                10
              )
            }
            width="140"
            height="48"
          >
            <div className="bg-white rounded-[12px] px-3.5 py-2.5 shadow-[0_8px_24px_-6px_rgba(15,39,71,0.18)] border border-[#E8E8E8] text-center">
              <div className="font-[var(--font-manrope)] font-bold text-[#0F2747] text-[13px] leading-tight">
                {hoveredMarker}
              </div>
              <div className="font-[var(--font-manrope)] text-[#C89B4A] text-[11px] font-semibold">
                {DISTANCES[hoveredMarker] ?? "Covered area"}
              </div>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}

// ─── Coverage List Card ───────────────────────────────────────────────────

function CoverageListCard({ isInView }: { isInView: boolean }) {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      ALL_AREAS.filter((a) =>
        a.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-[20px] shadow-[0_8px_24px_-8px_rgba(15,39,71,0.10)] p-8"
    >
      <h3 className="font-[var(--font-manrope)] font-extrabold text-[#0F2747] text-[22px] mb-1">
        Areas We Cover
      </h3>
      <div className="w-full h-px bg-[#E8E8E8] my-4" />

      {/* Search */}
      <div className="relative mb-4">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#5B6574] pointer-events-none"
          strokeWidth={1.5}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setExpanded(true);
          }}
          placeholder="Search areas…"
          aria-label="Search coverage areas"
          className="w-full h-[44px] pl-10 pr-4 rounded-[12px] border border-[#E8E8E8] bg-white text-[#0F2747] text-[14px] font-medium placeholder:text-[#5B6574]/50 outline-none transition-all duration-200 focus:border-[#C89B4A] focus:ring-2 focus:ring-[#C89B4A]/15"
        />
        {search && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setExpanded(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6574] hover:text-[#0F2747] transition-colors"
            aria-label="Clear search"
          >
            <X className="w-[16px] h-[16px]" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Area list */}
      <div className="space-y-1 max-h-[300px] overflow-y-auto pr-1">
        {filtered.length === 0 ? (
          <p className="text-[#5B6574] text-[14px] py-3 text-center">
            No areas found
          </p>
        ) : (
          visible.map((area) => (
            <motion.div
              key={area}
              layout
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-between px-3 py-2.5 rounded-[12px] hover:bg-[#F8F5EF] group transition-colors duration-200 cursor-default"
            >
              <div className="flex items-center gap-3">
                <MapPin
                  className="w-[15px] h-[15px] text-[#5B6574] group-hover:text-[#C89B4A] shrink-0 transition-colors duration-200"
                  strokeWidth={1.5}
                />
                <span className="font-[var(--font-manrope)] text-[#0F2747] text-[15px] font-medium">
                  {area}
                </span>
              </div>
              <CheckCircle
                className="w-[18px] h-[18px] text-[#22A55C] shrink-0"
                strokeWidth={2}
              />
            </motion.div>
          ))
        )}
      </div>

      {/* View All toggle */}
      {filtered.length > INITIAL_VISIBLE && !search && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-[12px] text-[#0F2747] text-[14px] font-semibold hover:bg-[#F8F5EF] transition-all duration-200"
        >
          <span>{expanded ? "Show less" : `View All ${ALL_AREAS.length} Areas`}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </motion.span>
        </button>
      )}
    </motion.div>
  );
}

// ─── Coverage Checker Card ────────────────────────────────────────────────

function CoverageCheckerCard({ isInView }: { isInView: boolean }) {
  const [postcode, setPostcode] = useState("");
  const [status, setStatus] = useState<PostcodeStatus>("idle");
  const [result, setResult] = useState<{ covered: boolean; area?: string } | null>(null);

  const handleCheck = useCallback(() => {
    const trimmed = postcode.trim();
    if (!trimmed) return;

    if (!isValidUKPostcode(trimmed)) {
      setStatus("invalid");
      setResult(null);
      return;
    }

    setStatus("validating");
    setResult(null);

    // Simulate check delay
    setTimeout(() => {
      const covered = checkPostcodeCoverage(trimmed);
      if (covered) {
        setStatus("success");
        setResult({ covered: true, area: trimmed.toUpperCase() });
      } else {
        setStatus("error");
        setResult({ covered: false, area: trimmed.toUpperCase() });
      }
    }, 800);
  }, [postcode]);

  const handleReset = useCallback(() => {
    setPostcode("");
    setStatus("idle");
    setResult(null);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-[20px] shadow-[0_8px_24px_-8px_rgba(15,39,71,0.10)] overflow-hidden"
    >
      {/* Gold accent bar */}
      <div className="h-[5px] bg-[#C89B4A] w-full" />

      <div className="p-8">
        <h3 className="font-[var(--font-manrope)] font-extrabold text-[#0F2747] text-[22px] leading-snug mb-1">
          Not sure we cover your area?
        </h3>
        <p className="font-[var(--font-manrope)] text-[#5B6574] text-[15px] mb-5">
          Enter your postcode and we&apos;ll instantly check availability.
        </p>

        {/* ── Success / Error result card ── */}
        {status === "success" && result?.covered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-4 rounded-[14px] bg-[#ECFDF5] border border-[#A7F3D0]"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-[20px] h-[20px] text-[#22A55C] shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="font-[var(--font-manrope)] font-bold text-[#0F2747] text-[16px]">
                  Great news!
                </div>
                <div className="font-[var(--font-manrope)] text-[#5B6574] text-[14px] mt-0.5">
                  We cover <span className="font-semibold text-[#0F2747]">{result.area}</span> and surrounding areas.
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-[#0F2747] text-[13px] font-semibold underline-offset-2 hover:underline"
                >
                  Check another postcode
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {status === "error" && !result?.covered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-4 rounded-[14px] bg-[#FFFBEB] border border-[#FDE68A]"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-[20px] h-[20px] text-[#D97706] shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="font-[var(--font-manrope)] font-bold text-[#0F2747] text-[16px]">
                  Thanks!
                </div>
                <div className="font-[var(--font-manrope)] text-[#5B6574] text-[14px] mt-0.5">
                  We may still be able to help. Please call us to discuss your project.
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-[#0F2747] text-[13px] font-semibold underline-offset-2 hover:underline"
                >
                  Check another postcode
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Postcode input */}
        <div className="relative mb-3">
          <MapPin
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#5B6574] pointer-events-none"
            strokeWidth={1.5}
          />
          <input
            type="text"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value.toUpperCase());
              if (status === "invalid" || status === "success" || status === "error") {
                setStatus("idle");
                setResult(null);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleCheck();
              }
            }}
            placeholder="Enter your postcode"
            aria-label="Enter your UK postcode"
            className={`w-full h-[52px] pl-10 pr-4 rounded-[16px] border-2 bg-white text-[#0F2747] text-[15px] font-medium placeholder:text-[#5B6574]/40 outline-none transition-all duration-200 focus:border-[#C89B4A] focus:ring-2 focus:ring-[#C89B4A]/15 ${
              status === "invalid"
                ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                : "border-[#E8E8E8]"
            }`}
            autoComplete="postal-code"
          />
          {status === "invalid" && (
            <p className="text-red-500 text-[12.5px] mt-1.5 font-medium flex items-center gap-1">
              <AlertCircle className="w-[14px] h-[14px]" strokeWidth={1.5} />
              Enter a valid UK postcode (e.g. CF10 1AA)
            </p>
          )}
        </div>

        {/* Check button */}
        <button
          type="button"
          onClick={handleCheck}
          disabled={status === "validating" || !postcode.trim()}
          className="w-full h-[52px] inline-flex items-center justify-center gap-2.5 rounded-[16px] bg-[#0F2747] text-white text-[15px] font-bold transition-all duration-300 hover:bg-[#C89B4A] shadow-[0_4px_16px_-4px_rgba(15,39,71,0.30)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "validating" ? (
            <>
              <svg className="animate-spin w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Checking…
            </>
          ) : (
            <>
              Check Coverage
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </>
          )}
        </button>

        {/* Phone button */}
        <a
          href="tel:07722151231"
          className="mt-3 w-full h-[52px] inline-flex items-center justify-center gap-2.5 rounded-[16px] border-2 border-[#0F2747] text-[#0F2747] text-[15px] font-bold transition-all duration-300 hover:bg-[#0F2747] hover:text-white"
        >
          <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
          Call 07722 151231
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function CoverageAreaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8F5EF] py-[120px]"
      aria-labelledby="coverage-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* ── 2-column grid: 65% / 35% ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:grid lg:grid-cols-[65%_35%] lg:gap-[40px]"
        >
          {/* ═══════════════ Left Column (65%) ═══════════════ */}
          <div>
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="block font-[var(--font-manrope)] text-[#C89B4A] text-[12px] font-bold tracking-[0.2em] uppercase mb-4"
            >
              Local Coverage
            </motion.span>

            {/* Heading */}
            <motion.h2
              id="coverage-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[var(--font-manrope)] text-[#0F2747] text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em] mb-4"
            >
              Covering Cardiff
              <br />
              <span className="text-[#C89B4A]">&amp; Surrounding Areas</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-[var(--font-manrope)] text-[#5B6574] text-[18px] leading-relaxed max-w-[520px] mb-8"
            >
              We proudly provide professional driveway, patio, paving and
              landscaping services throughout Cardiff and the surrounding areas.
              Whether you&apos;re in the city or a nearby town, our experienced team
              delivers the same high standards of workmanship and customer service
              on every project.
            </motion.p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] mb-10">
              {STATS_DATA.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  Icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isInView={isInView}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={
                isInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.96, opacity: 0 }
              }
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <CoverageMap
                hoveredMarker={hoveredMarker}
                setHoveredMarker={setHoveredMarker}
              />
            </motion.div>
          </div>

          {/* ═══════════════ Right Column (35%) ═══════════════ */}
          <div className="flex flex-col gap-[24px] mt-10 lg:mt-0">
            <CoverageListCard isInView={isInView} />
            <CoverageCheckerCard isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
