import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type BookingPayload = {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
};

// rate limit store (MVP only — memory-based)
const rateLimit = new Map<
  string,
  { count: number; lastRequest: number }
>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

// get IP safely
const getIp = (req: Request) => {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown"
  );
};

// validation
const validate = (data: BookingPayload) => {
  const { name, email, service, date, time } = data;

  if (!name || !email || !service || !date || !time) {
    return "Missing required fields";
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email address";
  }

  return null;
};

export async function POST(req: Request) {
  try {
    // ✅ 1. Parse body FIRST
    const body: BookingPayload = await req.json();

    // ✅ 2. Validate input
    const error = validate(body);
    if (error) {
      return NextResponse.json(
        { message: error },
        { status: 400 }
      );
    }

    // ✅ 3. Rate limit AFTER validation (correct order)
    const ip = getIp(req);
    const now = Date.now();

    const record = rateLimit.get(ip);

    if (!record) {
      rateLimit.set(ip, { count: 1, lastRequest: now });
    } else {
      const timePassed = now - record.lastRequest;

      if (timePassed > RATE_LIMIT_WINDOW) {
        // reset window
        rateLimit.set(ip, { count: 1, lastRequest: now });
      } else {
        if (record.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { message: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }

        rateLimit.set(ip, {
          count: record.count + 1,
          lastRequest: now,
        });
      }
    }

    // ✅ 4. Extract fields AFTER validation
    const { name, email, service, date, time, message } = body;

    const createdAt = new Date().toISOString();

    // ✅ 5. Send email
    const { data, error: resendError } = await resend.emails.send({
      from: "Inxite Data <info@inxitedataanalytics.com>",
      to: [process.env.BOOKING_EMAIL!],
      subject: `New Contact Form Submission — ${name}`,
      replyTo: email,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f6f8fb; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #eaeaea;">
      
      <!-- HEADER -->
      <div style="background:#05254c; padding:20px; text-align:center;">
        <h2 style="color:#ffffff; margin:0;">New Booking Request</h2>
        <p style="color:#cbd5e1; margin:5px 0 0;">Inxite Data Analytics</p>
      </div>

      <!-- BODY -->
      <div style="padding:20px; color:#111827;">
        
        <h3 style="margin-bottom:15px; color:#05254c;">Client Details</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

        <h3 style="margin-bottom:15px; color:#05254c;">Booking Information</h3>

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>

        <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

        <h3 style="margin-bottom:10px; color:#05254c;">Message</h3>
        <p style="background:#f9fafb; padding:12px; border-radius:8px; border:1px solid #eee;">
          ${message || "No additional message provided."}
        </p>

        <p style="font-size:12px; color:#6b7280; margin-top:20px;">
          Submitted At: ${createdAt}
        </p>

      </div>

      <!-- FOOTER -->
      <div style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
        This request was submitted via your website contact form.
      </div>

    </div>
  </div>
`
    });

    if (resendError) {
      console.error(resendError);

      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Booking request sent successfully",
      data,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}