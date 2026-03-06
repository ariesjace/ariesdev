import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name        = (form.get("name")        as string) ?? "";
    const email       = (form.get("email")       as string) ?? "";
    const subject     = (form.get("subject")     as string) ?? "";
    const budget      = (form.get("budget")      as string) ?? "";
    const timeline    = (form.get("timeline")    as string) ?? "";
    const description = (form.get("description") as string) ?? "";
    const files       = form.getAll("files") as File[];

    if (!name.trim() || !email.trim() || !description.trim()) {
      return NextResponse.json(
        { error: "Name, email, and description are required." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    for (const file of files) {
      if (file && file.size > 0) {
        attachments.push({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        });
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ariesjace.mail@gmail.com",
        pass: "qawszqmbyjvxqpkf",
      },
    });

    const row = (label: string, value: string) =>
      value
        ? `<tr>
            <td style="padding:6px 0;color:#71717a;font-size:12px;width:90px;vertical-align:top">${label}</td>
            <td style="padding:6px 0;color:#09090b;font-size:13px;font-weight:500">${value}</td>
           </tr>`
        : "";

    const html = `<!DOCTYPE html>
<html>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f4f6;margin:0;padding:24px;">
  <div style="max-width:540px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e4e4e7;overflow:hidden;">
    <div style="background:#09090b;padding:20px 28px;">
      <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#71717a;">New Inquiry</p>
      <h2 style="margin:4px 0 0;font-size:18px;font-weight:600;color:#fafafa;">${subject || "Project Request"}</h2>
    </div>
    <div style="padding:24px 28px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row("From", name)}
        ${row("Email", `<a href="mailto:${email}" style="color:#2563eb;text-decoration:none">${email}</a>`)}
        ${row("Budget", budget)}
        ${row("Timeline", timeline)}
      </table>
      <div style="margin-top:18px;padding-top:18px;border-top:1px solid #f4f4f5;">
        <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#71717a;margin:0 0 10px">Description</p>
        <p style="font-size:14px;color:#18181b;line-height:1.7;margin:0;white-space:pre-wrap">${description}</p>
      </div>
      ${attachments.length
        ? `<div style="margin-top:18px;padding-top:18px;border-top:1px solid #f4f4f5;">
             <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#71717a;margin:0 0 6px">Attachments (${attachments.length})</p>
             <p style="font-size:13px;color:#71717a;margin:0">${attachments.map(a => a.filename).join(" · ")}</p>
           </div>`
        : ""}
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: '"Portfolio Inquiry" <ariesjace.mail@gmail.com>',
      to: "ariesjace.mail@gmail.com",
      replyTo: email,
      subject: `[Inquiry] ${subject || "New Project Request"} — ${name}`,
      html,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[inquire]", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}