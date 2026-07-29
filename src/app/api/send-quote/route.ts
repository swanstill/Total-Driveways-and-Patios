import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    await transporter.sendMail({
      from: `"Total Driveways & Patios" <${process.env.SMTP_FROM || "info@totaldrivewaysandpatiosltd.co.uk"}>`,
      to: "info@totaldrivewaysandpatiosltd.co.uk",
      replyTo: data.email || undefined,
      subject: `New Quote Request from ${data.name} — ${data.helpWith}`,
      text: emailBody,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Send-quote error:", err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
