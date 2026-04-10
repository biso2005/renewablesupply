import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, message, type } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Required fields missing" },
      { status: 400 }
    );
  }

  const typeLabels: Record<string, string> = {
    developer: "Solar / BESS Developer",
    epc: "EPC Contractor",
    lawfirm: "Law Firm",
    fund: "Fund or Lender",
    press: "Press / Media",
    other: "Other",
  };

  try {
    // EMAIL 1 — Internal notification to you
    await resend.emails.send({
      from: "RenewableSupply <hello@renewablesupply.com>",
      to: "hello@renewablesupply.com",
      subject: `New Contact: ${typeLabels[type] || type} — ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: #0F2A4A; padding: 20px 30px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              New Contact — Renewable<span style="color: #00B4A6;">Supply.com</span>
            </h1>
          </div>
          
          <div style="background: #F8FAFC; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px; width: 120px;">Type</td>
                <td style="padding: 10px 0; color: #0F2A4A; font-weight: 600; font-size: 13px;">${typeLabels[type] || type}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">Name</td>
                <td style="padding: 10px 0; color: #0F2A4A; font-weight: 600; font-size: 13px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; font-size: 13px;">
                  <a href="mailto:${email}" style="color: #00B4A6;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">Company</td>
                <td style="padding: 10px 0; color: #0F2A4A; font-weight: 600; font-size: 13px;">${company || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #64748B; font-size: 13px; margin: 0 0 8px 0;">Message</p>
            <p style="color: #0F2A4A; font-size: 15px; line-height: 1.7; margin: 0;">${message}</p>
          </div>

          <a href="mailto:${email}" 
             style="display: inline-block; background: #00B4A6; color: white; font-weight: 700; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-size: 14px;">
            Reply to ${name}
          </a>
        </div>
      `,
    });

    // EMAIL 2 — Auto reply to sender
    await resend.emails.send({
      from: "RenewableSupply <hello@renewablesupply.com>",
      to: email,
      subject: "We received your message — RenewableSupply.com",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: #0F2A4A; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              Renewable<span style="color: #00B4A6;">Supply.com</span>
            </h1>
          </div>

          <h2 style="color: #0F2A4A; font-size: 22px;">
            Thanks ${name}, we got your message.
          </h2>

          <p style="color: #64748B; line-height: 1.7;">
            We will review your enquiry and get back to you 
            within 1 business day.
          </p>

          <div style="background: #F8FAFC; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 24px 0;">
            <p style="color: #64748B; font-size: 13px; margin: 0 0 8px 0;">Your message</p>
            <p style="color: #0F2A4A; font-size: 15px; line-height: 1.7; margin: 0;">${message}</p>
          </div>

          <p style="color: #64748B; line-height: 1.7;">
            While you wait — download our free 2026 UK BESS 
            Compliance Guide if you have not already.
          </p>

          <a href="https://renewablesupply.com/#guide"
             style="display: inline-block; background: #00B4A6; color: white; font-weight: 700; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-size: 14px; margin-bottom: 30px;">
            Get The Free Compliance Guide
          </a>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px;">
              RenewableSupply.com — Compliance infrastructure for 
              sub-20MW solar and BESS developers. UK & Europe.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
