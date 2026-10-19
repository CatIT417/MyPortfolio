import { Resend } from "resend";
import { contactSchema } from "../../../lib/contact-schema";
import { isRateLimited } from "../../../lib/rate-limit";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldRow(label: string, value: string): string {
  return `<tr>
            <td style="padding:8px 16px 8px 0;color:#9ca3af;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
            <td style="padding:8px 0;color:#f3f4f6;font-size:14px;">${escapeHtml(value)}</td>
          </tr>`;
}

export async function POST(request: Request): Promise<Response> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!apiKey || !contactEmail) {
    console.error("[contact] Missing environment variables:", {
      hasApiKey: Boolean(apiKey),
      hasContactEmail: Boolean(contactEmail),
    });
    return Response.json({ ok: false, error: "Server configuration error." }, { status: 500 });
  }

  const { name, email, subject, message } = parsed.data;
  const from = process.env.RESEND_FROM?.trim() || "Portfolio Contact <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  const text = [
    `Subject: ${subject}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:32px;background:#0f0a1e;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#171030;border:1px solid #2c2350;border-radius:12px;padding:28px;">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.28em;color:#a78bfa;">PORTFOLIO CONTACT</p>
      <h2 style="margin:0 0 20px;font-size:20px;color:#ffffff;">${escapeHtml(subject)}</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:8px;">
        ${fieldRow("Name", name)}
        ${fieldRow("Email", email)}
      </table>
      <div style="margin-top:16px;padding:16px;background:#0f0a1e;border:1px solid #2c2350;border-radius:8px;font-size:14px;line-height:1.65;color:#e5e7eb;white-space:pre-wrap;word-break:break-word;">${escapeHtml(message)}</div>
    </div>
  </body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [contactEmail],
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json({ ok: false, error: "Failed to send message." }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}
