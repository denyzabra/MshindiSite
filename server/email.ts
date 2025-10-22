import nodemailer from "nodemailer";
import type { InsertContactSubmission } from "@shared/schema";

// ==========================================
// EMAIL CONFIGURATION
// ==========================================
// TO ENABLE PRODUCTION EMAIL SENDING:
// 1. Create a .env file with SMTP_USER and SMTP_PASS
// 2. SMTP_USER should be: gilbertodongo02@gmail.com
// 3. SMTP_PASS should be your Gmail App Password (16 characters)
//
// How to get Gmail App Password:
// - Google Account → Security → 2-Step Verification (enable it)
// - Google Account → Security → App passwords → Generate for "Mail"
// ==========================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
    user: process.env.SMTP_USER,        // From .env: gilbertodongo02@gmail.com
    pass: process.env.SMTP_PASS,        // From .env: Your Gmail App Password
  } : undefined,
});

export async function sendContactEmail(submission: InsertContactSubmission): Promise<boolean> {
  // ==========================================
  // IMPORTANT: ADD SMTP CREDENTIALS TO ENABLE EMAIL SENDING
  // ==========================================
  // Without SMTP_USER and SMTP_PASS in .env file, 
  // form submissions will only be logged to console (see below)
  // ==========================================
  
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("\n⚠️  EMAIL NOT CONFIGURED - Form submission logged (not sent via email)");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📧 To enable email sending, create .env file with:");
    console.log("   SMTP_USER = gilbertodongo02@gmail.com");
    console.log("   SMTP_PASS = Your Gmail App Password");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("\n📋 Contact Form Submission:");
    console.log({
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      company: submission.company,
      service: submission.service,
      message: submission.message,
    });
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
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
      to: process.env.CONTACT_EMAIL || "gilbertodongo02@gmail.com",
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
