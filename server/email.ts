import nodemailer from "nodemailer";
import type { InsertContactSubmission } from "@shared/schema";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  } : undefined,
});

export async function sendContactEmail(submission: InsertContactSubmission): Promise<boolean> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("Email configuration not set. Contact form submission logged:");
    console.log({
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      company: submission.company,
      service: submission.service,
      message: submission.message,
    });
    return false;
  }

  const emailContent = `
    <h2>New Contact Form Submission - Mshindi Enterprises</h2>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    ${submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : ""}
    ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ""}
    ${submission.service ? `<p><strong>Service Interested In:</strong> ${submission.service}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${submission.message.replace(/\n/g, "<br>")}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "mshindienterprisescoltd@gmail.com",
      replyTo: submission.email,
      subject: `New Contact Form: ${submission.name} - ${submission.service || "General Inquiry"}`,
      html: emailContent,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
