import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(payload: ContactPayload) {
  if (payload.website && payload.website.length > 0) return "Spam detected";
  if (!payload.name || payload.name.length > 100) return "Invalid name";
  if (!payload.company || payload.company.length > 120) return "Invalid company";
  if (!payload.phone || payload.phone.length > 40) return "Invalid phone";
  if (!payload.requirement || payload.requirement.length > 4000) return "Invalid requirement";
  if (!isValidEmail(payload.email)) return "Invalid email";
  return null;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const error = validate(body);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Missing email configuration" },
      { status: 500 },
    );
  }

  const submittedAt = new Date().toISOString();
  const html = `
    <h2>New Quote Request - Honey Trading Corporation</h2>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Company / Industry:</strong> ${body.company}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p><strong>Requirement:</strong><br/>${body.requirement.replace(/\n/g, "<br/>")}</p>
    <p><strong>Submitted:</strong> ${submittedAt}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email,
      subject: `New Quote Request - ${body.company}`,
      html,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "Email provider rejected request" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
