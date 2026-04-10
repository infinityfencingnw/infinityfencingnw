import { NextRequest, NextResponse } from "next/server";

/*
  Contact Form API Route
  ──────────────────────
  This route handles form submissions from /contact.

  TO CONFIGURE EMAIL DELIVERY:
  
  Option 1 — Resend (recommended, easy setup):
    1. npm install resend
    2. Sign up at resend.com and get API key
    3. Set RESEND_API_KEY in .env.local
    4. Uncomment the Resend code below

  Option 2 — Nodemailer + Gmail:
    1. npm install nodemailer @types/nodemailer
    2. Set SMTP_USER and SMTP_PASS in .env.local
    3. Enable App Passwords in your Google account

  Option 3 — Formspree (zero-code):
    - Replace the form action="/api/contact" with
      action="https://formspree.io/f/YOUR_ID"
    - No backend needed
*/

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();

    const data = {
      firstName: body.get("firstName"),
      lastName: body.get("lastName"),
      phone: body.get("phone"),
      email: body.get("email"),
      location: body.get("location"),
      fenceType: body.get("fenceType"),
      linearFeet: body.get("linearFeet"),
      message: body.get("message"),
    };

    // Validate required fields
    if (!data.firstName || !data.phone || !data.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ── OPTION 1: Resend ──────────────────────────────
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@infinityfencingnw.com",
    //   to: "build@infinityfencingnw.com",
    //   subject: `New Fence Estimate Request – ${data.firstName} ${data.lastName}`,
    //   html: `
    //     <h2>New Estimate Request</h2>
    //     <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Location:</strong> ${data.location}</p>
    //     <p><strong>Fence Type:</strong> ${data.fenceType}</p>
    //     <p><strong>Linear Feet:</strong> ${data.linearFeet || "Not specified"}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // });
    // ─────────────────────────────────────────────────

    // For now, log to console (replace with real email logic above)
    console.log("New estimate request:", data);

    // Redirect to thank you page or back with success
    return NextResponse.redirect(
      new URL("/contact?submitted=true", request.url)
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
