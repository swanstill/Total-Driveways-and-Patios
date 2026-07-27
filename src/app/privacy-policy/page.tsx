export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#fff" }}>
      {/* Hero header */}
      <div
        className="relative pt-[120px] pb-[60px] md:pb-[80px]"
        style={{ background: "var(--svc-deep-navy, #08213F)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 22px)`,
            backgroundSize: "22px 22px",
          }}
        />
        <div
          className="absolute -top-[160px] -right-[120px] w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--svc-gold) 0%, transparent 65%)" }}
        />
        <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <span
            className="inline-block w-8 h-[2px] mb-5"
            style={{ background: "var(--svc-gold)" }}
          />
          <h1
            className="text-white font-bold leading-[1.12]"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              letterSpacing: "-0.02em",
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="mt-4 text-[15px] md:text-[17px]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Last updated: 27 July 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-[80px]">
        <div
          className="prose prose-lg max-w-none"
          style={{
            color: "var(--svc-body, #4a5568)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {/* Section 1 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            1. Introduction
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            Total Driveways and Patios (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard
            your personal data when you visit our website or use our services.
          </p>
          <p className="text-[15.5px] leading-relaxed mb-6">
            We are a family-run driveway, patio and landscaping business based in Barnsley, South Yorkshire.
            By using our website and services, you agree to the practices described in this policy.
          </p>

          {/* Section 2 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            2. Information We Collect
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-4">
            We may collect the following types of personal information:
          </p>
          <ul className="space-y-3 mb-6 pl-6">
            {[
              "Name and contact details (email address, phone number, postal address)",
              "Details about your property and the surfacing or landscaping project you are enquiring about",
              "Correspondence (including phone call records and email communications)",
              "Technical data such as IP address, browser type and usage patterns via cookies",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-[9px]"
                  style={{ background: "var(--svc-gold)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Section 3 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            3. How We Use Your Information
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-4">
            We use your personal data for the following purposes:
          </p>
          <ul className="space-y-3 mb-6 pl-6">
            {[
              "To respond to your enquiries and provide free quotes for our services",
              "To communicate with you about your project, including site visits and installation schedules",
              "To maintain our customer records and provide aftercare support",
              "To improve our website and services through analytics",
              "To comply with legal and regulatory obligations",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-[9px]"
                  style={{ background: "var(--svc-gold)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            4. Legal Basis for Processing
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            Under UK data protection law (UK GDPR and the Data Protection Act 2018), we process your
            personal data on the following bases:
          </p>
          <ul className="space-y-3 mb-6 pl-6">
            {[
              "Consent &mdash; where you have given us permission to contact you about your enquiry",
              "Legitimate interest &mdash; to provide you with the services you have requested and to run our business effectively",
              "Legal obligation &mdash; where we are required to retain records for tax or regulatory purposes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-[9px]"
                  style={{ background: "var(--svc-gold)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Section 5 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            5. Data Sharing and Disclosure
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            We will never sell your personal data to third parties. We may share your information with
            trusted third-party service providers who help us operate our business (such as email
            communication platforms and payment processors), provided they agree to keep your data
            confidential and secure.
          </p>
          <p className="text-[15.5px] leading-relaxed mb-6">
            We may also disclose your information if required to do so by law or to protect our legal
            rights.
          </p>

          {/* Section 6 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            6. Data Retention
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            We retain your personal data only for as long as is necessary to fulfil the purposes for
            which it was collected, including to satisfy any legal, accounting or reporting requirements.
            Typically, customer records are retained for a period of six years following the completion
            of a project.
          </p>

          {/* Section 7 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            7. Your Rights
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-4">
            Under UK data protection law, you have the following rights:
          </p>
          <ul className="space-y-3 mb-6 pl-6">
            {[
              "The right to access the personal data we hold about you",
              "The right to request correction of inaccurate or incomplete data",
              "The right to request deletion of your personal data (subject to legal retention requirements)",
              "The right to restrict or object to processing of your data",
              "The right to data portability",
              "The right to withdraw consent at any time where processing is based on consent",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-[9px]"
                  style={{ background: "var(--svc-gold)" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[15.5px] leading-relaxed mb-6">
            To exercise any of these rights, please contact us using the details set out in Section 10
            below. We will respond to your request within one month.
          </p>
          <p className="text-[15.5px] leading-relaxed mb-6">
            If you are dissatisfied with our response, you have the right to lodge a complaint with the
            Information Commissioner&rsquo;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--svc-gold)" }}
              className="underline underline-offset-2 hover:no-underline"
            >
              ico.org.uk
            </a>.
          </p>

          {/* Section 8 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            8. Cookies
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            Our website may use cookies and similar tracking technologies to enhance your browsing
            experience and analyse website traffic. You can control cookie preferences through your
            browser settings. For more information, please refer to our Cookie Policy.
          </p>

          {/* Section 9 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            9. Changes to This Policy
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated revision date. We encourage you to review this policy periodically.
          </p>

          {/* Section 10 */}
          <h2
            className="text-[22px] font-bold mt-12 mb-4"
            style={{ color: "var(--svc-heading, #0F2747)", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            10. Contact Us
          </h2>
          <p className="text-[15.5px] leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or how we handle your personal data,
            please contact us:
          </p>
          <div
            className="p-6 rounded-[16px] mb-6"
            style={{
              background: "#FBF9F4",
              border: "1px solid rgba(200,155,74,0.1)",
            }}
          >
            <p className="text-[15px] leading-relaxed mb-1">
              <strong style={{ color: "var(--svc-heading)" }}>Total Driveways and Patios</strong>
            </p>
            <p className="text-[15px] leading-relaxed mb-1">Barnsley, South Yorkshire</p>
            <p className="text-[15px] leading-relaxed mb-1">
              <strong style={{ color: "var(--svc-heading)" }}>Phone:</strong>{" "}
              <a href="tel:07722151231" className="underline underline-offset-2 hover:no-underline" style={{ color: "var(--svc-gold)" }}>
                07722 151231
              </a>
            </p>
            <p className="text-[15px] leading-relaxed">
              <strong style={{ color: "var(--svc-heading)" }}>Email:</strong>{" "}
              <a href="mailto:info@totaldrivewaysandpatios.co.uk" className="underline underline-offset-2 hover:no-underline" style={{ color: "var(--svc-gold)" }}>
                info@totaldrivewaysandpatios.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
