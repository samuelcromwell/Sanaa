import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, number, location, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // your Gmail
      pass: process.env.MAIL_PASS, // app password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'cromwellsamuel3@gmail.com',
    subject: 'New Quote Request',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${number}
      Location: ${location}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
