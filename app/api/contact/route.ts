import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// basic validation (don’t skip this in real apps)
const validate = (data: any) => {
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
    const body = await req.json();

    const error = validate(body);
    if (error) {
      return NextResponse.json(
        { message: error },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      service,
      date,
      time,
      message,
      createdAt,
    } = body;

    // send email via resend
    const { data, error: resendError } = await resend.emails.send({
      from: "Booking <onboarding@resend.dev>", // change later to your domain
      to: ["your@email.com"], // where YOU receive bookings
      subject: `New Contact Form Submission — ${name}`,
      replyTo: email,
      html: `
                <h2>New Appointment Booking</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Message:</strong> ${message || "N/A"}</p>
                <p><strong>Submitted At:</strong> ${createdAt}</p>
            `,
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