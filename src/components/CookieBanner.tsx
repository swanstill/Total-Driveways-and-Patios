"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentChoice = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("cookie-consent") as ConsentChoice;
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
  };

  // Don't render anything until mounted (avoids hydration flash)
  // or if user has already made a choice
  if (!mounted || consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[9999]"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="mx-4 mb-4 md:mx-6 md:mb-6 max-w-[720px] md:mx-auto p-5 md:p-6 rounded-[16px] shadow-2xl"
          style={{
            background: "var(--svc-deep-navy, #08213F)",
            pointerEvents: "auto",
          }}
        >
          {/* Gold top accent */}
          <div
            className="absolute top-0 left-6 right-6 h-[2px] rounded-b-[1px]"
            style={{ background: "var(--svc-gold)" }}
          />

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-1 min-w-0">
              <h3
                className="text-[15px] font-bold !text-white mb-1.5"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                🍪 Cookie Notice
              </h3>
              <p
                className="text-[13px] leading-relaxed !text-white/65"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                We use cookies to improve your browsing experience and analyse site traffic.
                By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
                <a
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:no-underline font-medium"
                  style={{ color: "var(--svc-gold)" }}
                >
                  Learn more
                </a>
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              <button
                onClick={handleReject}
                className="text-[13px] font-semibold px-4 py-2.5 rounded-[10px] transition-all duration-200 hover:opacity-80 whitespace-nowrap"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="text-[13px] font-bold px-5 py-2.5 rounded-[10px] transition-all duration-200 hover:brightness-110 whitespace-nowrap"
                style={{
                  background: "var(--svc-gold)",
                  color: "#fff",
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
