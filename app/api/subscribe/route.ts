import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "RenewableSupply <hello@renewablesupply.com>",
      to: email,
      subject: "Your 2026 UK BESS Compliance Guide",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background: #0F2A4A; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              Renewable<span style="color: #00B4A6;">Supply.com</span>
            </h1>
          </div>
          
          <h2 style="color: #0F2A4A; font-size: 22px;">
            Your Compliance Guide Is Coming
          </h2>
          
          <p style="color: #64748B; line-height: 1.7;">
            Thank you for downloading the 2026 UK BESS Compliance Guide.
            We are putting the finishing touches on it and you will be
            among the first to receive it.
          </p>

          <div style="background: #F8FAFC; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 24px 0;">
            <h3 style="color: #0F2A4A; margin-top: 0;">What the guide covers:</h3>
            <ul style="color: #64748B; line-height: 2;">
              <li>EU Battery Passport — what you need to document now</li>
              <li>G99 / G100 grid compliance workflow</li>
              <li>CBAM & CSDDD dual reporting requirements</li>
              <li>Timeline and deadlines for 2026-2027</li>
            </ul>
          </div>

          <p style="color: #64748B; line-height: 1.7;">
            In the meantime, if you have a specific compliance question
            reply to this email directly. We read every response.
          </p>

          <div style="border-top: 1px solid #e2e8f0; margin-top: 40px; padding-top: 20px; text-align: center;">
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
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
