import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuotePayload {
  helpWith: string;
  existingSurface: string;
  areaSize: string;
  timeline: string;
  postcode: string;
  message?: string;
  name: string;
  phone: string;
  email?: string;
}

export async function POST(request: Request) {
  try {
    const data: QuotePayload & { consent?: boolean } = await request.json();

    if (!data.name || !data.phone || !data.postcode) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!data.consent) {
      return Response.json(
        { error: "Consent is required" },
        { status: 400 },
      );
    }

    const emailBody = `
New Quote Request — Total Driveways and Patios

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS
──────────────
Name:            ${data.name}
Phone:           ${data.phone}
Email:           ${data.email || "—"}
Postcode:        ${data.postcode}

PROJECT DETAILS
──────────────
Service needed:  ${data.helpWith}
Existing surface: ${data.existingSurface}
Approx. area:    ${data.areaSize}
Timeline:        ${data.timeline}

${data.message ? `NOTES\n──────────────\n${data.message}\n` : ""}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via totaldrivewaysandpatiosltd.co.uk
`;

    const { error } = await resend.emails.send({
      from: "Quote Form <onboarding@resend.dev>",
      to: "info@totaldrivewaysandpatiosltd.co.uk",
      replyTo: data.email || undefined,
      subject: `New Quote Request from ${data.name} — ${data.helpWith}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Send-quote error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
