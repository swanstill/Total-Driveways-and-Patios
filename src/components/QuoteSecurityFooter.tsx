"use client";

import { Lock, CheckCircle } from "lucide-react";

export default function QuoteSecurityFooter() {
  return (
    <div className="mt-6 pt-5 border-t border-light-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <div className="flex items-center gap-2 text-dark-text/40 text-[12.5px]">
          <Lock className="w-3.5 h-3.5" />
          <span>Your information is 100% secure and never shared</span>
        </div>
        <div className="hidden sm:block w-[1px] h-3.5 bg-light-border" />
        <div className="flex items-center gap-2 text-dark-text/40 text-[12.5px]">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>No spam. Ever.</span>
        </div>
      </div>
    </div>
  );
}
