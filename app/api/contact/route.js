// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, number, location, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'cromwellsamuel3@gmail.com',
      subject: 'New Quote Request from Website',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${number}
        Location: ${location}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
