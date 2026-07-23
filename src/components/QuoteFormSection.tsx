"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import QuoteMarketingPanel from "@/components/QuoteMarketingPanel";
import QuoteProgressStepper from "@/components/QuoteProgressStepper";
import StepHeading from "@/components/StepHeading";
import StepHelpWith from "@/components/StepHelpWith";
import StepExistingSurface from "@/components/StepExistingSurface";
import StepAreaSize from "@/components/StepAreaSize";
import StepTimeline from "@/components/StepTimeline";
import StepPostcode from "@/components/StepPostcode";
import StepNotes from "@/components/StepNotes";
import StepContact from "@/components/StepContact";
import QuoteSecurityFooter from "@/components/QuoteSecurityFooter";

/* ── Zod schema ── */
export const formSchema = z.object({
  helpWith: z.string().min(1, "Select an option"),
  existingSurface: z.string().min(1, "Select an option"),
  areaSize: z.string().min(1, "Select an option"),
  timeline: z.string().min(1, "Select an option"),
  postcode: z.string().min(5, "Enter a valid UK postcode"),
  message: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  consent: z.boolean(),
});

export type FormValues = z.infer<typeof formSchema>;

const defaultValues: FormValues = {
  helpWith: "",
  existingSurface: "",
  areaSize: "",
  timeline: "",
  postcode: "",
  message: "",
  name: "",
  phone: "",
  email: "",
  consent: false,
};

const TOTAL_STEPS = 7;

/* ── Which steps auto-advance when all required fields are filled ── */
const autoAdvanceSteps = new Set([0, 1, 2, 3, 4]);

export default function QuoteFormSection() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [consentError, setConsentError] = useState("");
  const prevValues = useRef<string>("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  const watched = watch();

  /* ── Selection handlers (set + auto-advance) ── */
  const setAndAdvance = useCallback(
    (field: keyof FormValues, value: string, next: number) => {
      setValue(field, value, { shouldValidate: true });
      prevValues.current = "";
      setTimeout(() => {
        setStep(next);
        document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    },
    [setValue],
  );

  /* ── Auto-advance for steps with required fields ── */
  const requiredFields: (keyof FormValues)[][] = [
    ["helpWith"],
    ["existingSurface"],
    ["areaSize"],
    ["timeline"],
    ["postcode"],
  ];

  useEffect(() => {
    if (!autoAdvanceSteps.has(step)) return;

    const fields = requiredFields[step] ?? [];
    const current = JSON.stringify(fields.map((f) => watched[f]));
    if (current === prevValues.current) return;
    prevValues.current = current;

    const allFilled = fields.every((f) => {
      const val = watched[f];
      return val !== undefined && val !== "";
    });

    if (allFilled && step < TOTAL_STEPS - 1) {
      const timer = setTimeout(() => {
        setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
        document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [watched, step]);

  /* ── Navigation ── */
  const goNext = useCallback(() => {
    if (step < TOTAL_STEPS - 1) {
      prevValues.current = "";
      setStep((s) => s + 1);
      document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const goBack = useCallback(() => {
    if (step > 0) {
      prevValues.current = "";
      setStep((s) => s - 1);
      document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  /* ── Submit ── */
  const onSubmit = async (data: FormValues) => {
    // Validate consent manually
    if (!data.consent) {
      setConsentError("You must agree to continue");
      return;
    }
    setConsentError("");
    setSubmitting(true);
    // TODO: Replace with real API call
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Form submitted:", data);
    setSubmitting(false);
    setSubmitted(true);
    document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <section id="quote-form-section" className="bg-white py-24">
        <div className="mx-auto max-w-[1320px] px-8">
          <div className="max-w-[640px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-20 h-20 rounded-full bg-warm-gold/10 flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-warm-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-navy-primary text-[clamp(28px,3.2vw,42px)] font-extrabold leading-[1.1] mb-4">
                Thanks — your quote request has been sent<span className="text-warm-gold">.</span>
              </h2>
              <p className="text-dark-text/60 text-[17px] leading-relaxed mb-3 max-w-[48ch] mx-auto">
                Total Driveways and Patios will review the details and contact you to discuss the project and, where appropriate, arrange a site visit.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <a
                  href="tel:07722151231"
                  className="inline-flex items-center gap-2 h-[52px] px-6 rounded-[14px] font-bold text-[15px] text-white bg-navy-primary hover:bg-deep-blue transition-all duration-200 shadow-[0_8px_24px_-6px_rgba(15,39,71,0.35)]"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.05L7.7 9.79a11 11 0 006.5 6.5l1.46-1.46a1 1 0 011.05-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z" />
                  </svg>
                  Call now
                </a>
                <a
                  href="https://wa.me/4407722151231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-[52px] px-6 rounded-[14px] font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#1DA851] transition-all duration-200 shadow-[0_8px_24px_-6px_rgba(37,211,102,0.35)]"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 h-[52px] px-6 rounded-[14px] font-bold text-[15px] text-navy-primary bg-white border-2 border-navy-primary hover:bg-navy-primary hover:text-white transition-all duration-200"
                >
                  Return home
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  /* ── Main section ── */
  return (
    <section id="quote-form-section" className="bg-white py-16 lg:py-[60px] overflow-visible">
      <div className="mx-auto max-w-[1320px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col lg:flex-row items-stretch"
        >
          {/* Left panel */}
          <div className="w-full lg:w-[36%] lg:min-w-[36%]">
            <QuoteMarketingPanel />
          </div>

          {/* Right panel */}
          <div className="w-full lg:w-[64%] relative lg:-ml-5 lg:z-10 flex">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-[28px] shadow-[0_24px_70px_rgba(15,39,71,0.10)] border border-light-border p-8 md:p-10 lg:p-12 w-full flex flex-col"
            >
              <QuoteProgressStepper current={step} />
              <div className="h-px bg-light-border my-6 md:my-7" />
              <StepHeading step={step} total={TOTAL_STEPS} />

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex-1 flex flex-col">
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {step === 0 && (
                        <StepHelpWith
                          value={watched.helpWith}
                          onChange={(v) => setAndAdvance("helpWith", v, 1)}
                        />
                      )}
                      {step === 1 && (
                        <StepExistingSurface
                          value={watched.existingSurface}
                          onChange={(v) => setAndAdvance("existingSurface", v, 2)}
                        />
                      )}
                      {step === 2 && (
                        <StepAreaSize
                          value={watched.areaSize}
                          onChange={(v) => setAndAdvance("areaSize", v, 3)}
                        />
                      )}
                      {step === 3 && (
                        <StepTimeline
                          value={watched.timeline}
                          onChange={(v) => setAndAdvance("timeline", v, 4)}
                        />
                      )}
                      {step === 4 && (
                        <StepPostcode
                          value={watched.postcode}
                          onChange={(v) => setValue("postcode", v, { shouldValidate: true })}
                          onBlur={() => {
                            trigger("postcode").then((valid) => {
                              if (valid && watched.postcode.length >= 5) goNext();
                            });
                          }}
                          error={errors.postcode}
                        />
                      )}
                      {step === 5 && (
                        <StepNotes
                          value={watched.message ?? ""}
                          onChange={(v) => setValue("message", v)}
                          onBlur={goNext}
                        />
                      )}
                      {step === 6 && (
                        <StepContact
                          register={register}
                          errors={{ ...errors, consent: consentError ? { type: "manual", message: consentError } as any : errors.consent }}
                          consentValue={watched.consent}
                          submitting={submitting}
                        />
                      )}
                  </motion.div>
                </AnimatePresence>
                </div>

                {step > 0 && (
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-2 h-[48px] px-5 rounded-[14px] font-bold text-[15px] text-navy-primary bg-white border-2 border-navy-primary cursor-pointer transition-all duration-200 hover:bg-navy-primary hover:text-white"
                    >
                      <ArrowLeft className="w-[18px] h-[18px]" />
                      Back
                    </button>
                  </div>
                )}
              </form>

              <QuoteSecurityFooter />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
