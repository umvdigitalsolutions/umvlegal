import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function cleanEnv(value) {
  return value?.trim().replace(/^["']|["']$/g, "");
}

function getEmailAddress(value) {
  const match = value.match(/<([^>]+)>/);
  return (match ? match[1] : value).trim();
}

function getSender(value) {
  if (value.includes("<")) {
    return value;
  }

  return `UMV Legal <${value}>`;
}

const resendApiKey = cleanEnv(process.env.RESEND_API_KEY);
const toEmail =
  cleanEnv(process.env.CONTACT_TO_EMAIL) || "umvlegalassociates@gmail.com";
const fromEmail =
  getSender(cleanEnv(process.env.RESEND_FROM_EMAIL) || "onboarding@resend.dev");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function detailRow(label, value) {
  return `
    <tr>
      <td style="padding: 14px 16px; border-bottom: 1px solid #ece7dc; width: 34%; color: #6b6255; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">
        ${label}
      </td>
      <td style="padding: 14px 16px; border-bottom: 1px solid #ece7dc; color: #171717; font-size: 15px; font-weight: 600;">
        ${value}
      </td>
    </tr>
  `;
}

export async function POST(request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { message: "RESEND_API_KEY is missing in the server environment." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { message: "Please fill all required fields." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(getEmailAddress(fromEmail))) {
    return NextResponse.json(
      { message: "RESEND_FROM_EMAIL must be a valid sender email address." },
      { status: 500 }
    );
  }

  if (!emailPattern.test(toEmail)) {
    return NextResponse.json(
      { message: "CONTACT_TO_EMAIL must be a valid recipient email address." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: [email],
      subject: `UMV Legal Website Inquiry - ${name}`,
      html: `
      <div style="margin: 0; padding: 0; background: #f5f1e8; font-family: Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #f5f1e8; padding: 34px 14px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; overflow: hidden; border-radius: 22px; background: #ffffff; border: 1px solid #e2d7bd; box-shadow: 0 18px 50px rgba(23, 23, 23, 0.10);">
                <tr>
                  <td style="background: #111111; padding: 30px 30px 26px; border-bottom: 4px solid #d6a84f;">
                    <div style="font-family: Georgia, 'Times New Roman', serif; color: #ffffff; font-size: 25px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
                      UMV Legal
                    </div>
                    <div style="margin-top: 7px; color: #d6a84f; font-size: 13px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;">
                      New Website Inquiry
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px;">
                    <p style="margin: 0 0 18px; color: #4b4438; font-size: 15px; line-height: 1.7;">
                      A new inquiry has been submitted through the UMV Legal &amp; Associates website contact form.
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #ece7dc; border-radius: 14px; overflow: hidden; background: #fffdf8;">
                      ${detailRow("Name", safeName)}
                      ${detailRow("Email", `<a href="mailto:${safeEmail}" style="color: #171717; text-decoration: none;">${safeEmail}</a>`)}
                      ${detailRow("Phone", `<a href="tel:${safePhone}" style="color: #171717; text-decoration: none;">${safePhone}</a>`)}
                      ${detailRow("Submitted", escapeHtml(submittedAt))}
                    </table>

                    <div style="margin-top: 24px;">
                      <div style="margin-bottom: 10px; color: #6b6255; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.10em;">
                        Message
                      </div>
                      <div style="border-left: 5px solid #d6a84f; border-radius: 0 14px 14px 0; background: #faf7ef; padding: 18px 20px; color: #171717; font-size: 16px; line-height: 1.75;">
                        ${safeMessage}
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="background: #171717; padding: 20px 30px; color: #d8d2c7; font-size: 12px; line-height: 1.6;">
                    <strong style="color: #d6a84f;">UMV Legal &amp; Associates</strong><br />
                    This email was generated from the website inquiry form. Reply directly to this email to contact the sender.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
      text: `
UMV Legal & Associates - New Website Inquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Submitted: ${submittedAt}

Message:
${message}
    `.trim(),
    });

    if (error) {
      return NextResponse.json(
        { message: error.message || "Unable to send inquiry." },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error.message ||
          "Unable to send inquiry. Please check the Resend email settings.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Inquiry sent successfully." });
}
