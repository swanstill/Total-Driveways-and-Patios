"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { FormValues } from "./QuoteFormSection";

interface Props {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  consentValue: boolean;
  submitting: boolean;
}

const inputClass =
  "w-full h-[52px] px-4 rounded-[14px] border-2 bg-white text-navy-primary text-[15px] font-medium placeholder:text-dark-text/30 outline-none transition-all duration-200 focus:border-deep-blue focus:shadow-[0_0_0_3px_rgba(24,79,134,0.08)]";

const labelClass = "block text-[14px] font-bold text-navy-primary mb-1.5";

export default function StepContact({ register, errors, consentValue, submitting }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name <span className="text-warm-gold">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            {...register("name")}
            className={inputClass}
            autoComplete="name"
            autoFocus
          />
          {errors.name && (
            <p className="text-red-500 text-[12.5px] mt-1 font-medium">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone number <span className="text-warm-gold">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="07700 900 000"
            {...register("phone")}
            className={inputClass}
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-red-500 text-[12.5px] mt-1 font-medium">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email address <span className="text-dark-text/40 font-normal">(optional)</span>
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="email@example.com"
          {...register("email")}
          className={inputClass}
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-red-500 text-[12.5px] mt-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Consent checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              {...register("consent")}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                consentValue
                  ? "bg-warm-gold border-warm-gold"
                  : "border-light-border group-hover:border-deep-blue/50"
              }`}
            >
              {consentValue && (
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              )}
            </div>
          </div>
          <span className="text-[13.5px] text-dark-text/70 leading-snug">
            I agree that Total Driveways and Patios may use these details to contact me about this enquiry.
            <a href="/privacy" className="text-navy-primary font-semibold underline-offset-2 hover:underline ml-1">
              Privacy policy
            </a>
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-500 text-[12.5px] mt-2 font-medium ml-8">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="w-full h-[56px] inline-flex items-center justify-center gap-2 rounded-[14px] font-bold text-[16px] text-white bg-navy-primary cursor-pointer transition-all duration-200 hover:bg-deep-blue shadow-[0_8px_24px_-6px_rgba(15,39,71,0.35)] disabled:opacity-60 disabled:cursor-wait"
        >
          {submitting ? (
            <>
              <svg className="animate-spin w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </button>
      </div>
    </motion.div>
  );
}
