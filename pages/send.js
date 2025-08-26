import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // Vercel Env variable
        pass: process.env.EMAIL_PASS,   // Vercel Env variable
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // apne gmail pe receive hoga
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
}
