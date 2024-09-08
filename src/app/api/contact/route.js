// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // Create a transporter object with your SMTP details
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Outlook, or use your own SMTP provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  try {
    // Send email to the owner (yourself)
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // Your email address where the form data will be sent
      subject: `New message from ${name}`,
      text: message,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Hi ${name},\n\nThank you for your message! We'll get back to you soon.\n\nMessage received:\n${message}`,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}
