# Email Configuration Guide for MSHINDI ENTERPRISES Website

This guide will help you configure email notifications so that contact form submissions are automatically sent to **gilbertodongo02@gmail.com**.

## Overview

The website has two contact forms:
1. **Contact Us** - General inquiries
2. **Request a Quote** - Cargo-specific quote requests

Both forms send emails to the same recipient address.

---

## Step 1: Enable Gmail App Passwords

Gmail requires **App Passwords** for applications to send emails securely. Follow these steps:

### 1.1 Enable 2-Step Verification (Required)

1. Go to your **Google Account**: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Scroll to **"How you sign in to Google"**
4. Click **2-Step Verification**
5. Follow the prompts to set up 2-Step Verification using your phone number
6. Complete the verification process

### 1.2 Generate an App Password

1. Return to **Google Account → Security**
2. Scroll to **"How you sign in to Google"**
3. Click **App passwords** (this option only appears after 2-Step Verification is enabled)
4. You may need to sign in again
5. In the "Select app" dropdown, choose **Mail**
6. In the "Select device" dropdown, choose **Other (Custom name)**
7. Enter a name like: **"Mshindi Website"**
8. Click **Generate**
9. Google will display a **16-character password** (format: `xxxx xxxx xxxx xxxx`)
10. **COPY THIS PASSWORD** - you won't be able to see it again!

---

## Step 2: Configure Environment Variables

You need to add the SMTP credentials to your deployment environment.

### For Replit Deployment (Development & Testing)

1. In your Replit project, click **Tools** in the sidebar
2. Click **Secrets**
3. Add the following secrets:

| Secret Key | Secret Value | Description |
|------------|--------------|-------------|
| `SMTP_USER` | `gilbertodongo02@gmail.com` | Your Gmail address |
| `SMTP_PASS` | `xxxx xxxx xxxx xxxx` | The 16-character app password from Step 1.2 |

**Optional Secrets** (use defaults if not provided):
- `SMTP_HOST` - Default: `smtp.gmail.com`
- `SMTP_PORT` - Default: `587`
- `CONTACT_EMAIL` - Default: `gilbertodongo02@gmail.com`

### For Vercel Deployment (Production)

See the **VERCEL_DEPLOYMENT_GUIDE.md** for instructions on adding environment variables to Vercel.

---

## Step 3: Test Email Functionality

### 3.1 Using the Website

1. Navigate to the **Contact** section
2. Fill out either form:
   - **Contact Us** tab for general inquiries
   - **Request a Quote** tab for cargo quotes
3. Submit the form
4. Check **gilbertodongo02@gmail.com** inbox for the email

### 3.2 Expected Email Format

**Subject Line:**
- Contact Form: `New Contact Form Submission from [Name]`
- Quote Request: `New Quote Request from [Name]`

**Email Body includes:**
- Full Name
- Email Address
- Phone Number
- Company (if provided)
- Message/Details
- For Quote Requests: Cargo type, weight, origin, destination

---

## Troubleshooting

### ❌ "Invalid login" or "Authentication failed"

**Solution:**
- Verify that 2-Step Verification is enabled on your Google Account
- Regenerate the App Password and update the `SMTP_PASS` secret
- Make sure you're using the App Password, NOT your regular Gmail password

### ❌ Emails not arriving

**Check:**
1. **Spam/Junk folder** - Gmail may filter automated emails
2. **SMTP credentials** - Verify `SMTP_USER` and `SMTP_PASS` are correct
3. **Server logs** - Check for error messages in the application logs

### ❌ "Connection timeout" errors

**Solution:**
- Verify `SMTP_HOST` is `smtp.gmail.com`
- Verify `SMTP_PORT` is `587`
- Check your network/firewall isn't blocking port 587

### 📧 Mark emails as "Not Spam"

If emails go to spam:
1. Open the email in the **Spam** folder
2. Click **"Not spam"** or **"Report not spam"**
3. Gmail will learn to deliver future emails to your inbox

---

## Email Notification Details

### Email Configuration (server/email.ts)

The email system is already configured in the codebase:
- Uses **Nodemailer** for email delivery
- Uses **Gmail SMTP** server
- Supports HTML email formatting
- Gracefully handles missing SMTP credentials (logs to console with instructions)

### Security Notes

✅ **App Passwords are secure:**
- They're specific to one application
- They can be revoked anytime without changing your main password
- They don't give access to your full Google Account

✅ **Environment Variables:**
- Never commit secrets to version control
- Secrets are encrypted in Replit/Vercel
- Each environment (dev/production) has separate secrets

---

## Alternative SMTP Providers (Optional)

If you prefer not to use Gmail, you can use other SMTP services:

### SendGrid (Free tier: 100 emails/day)
- SMTP_HOST: `smtp.sendgrid.net`
- SMTP_PORT: `587`
- SMTP_USER: `apikey`
- SMTP_PASS: Your SendGrid API key

### Mailgun (Free tier: 5,000 emails/month)
- SMTP_HOST: `smtp.mailgun.org`
- SMTP_PORT: `587`
- SMTP_USER: Your Mailgun SMTP username
- SMTP_PASS: Your Mailgun SMTP password

### AWS SES (Simple Email Service)
- SMTP_HOST: Your SES SMTP endpoint
- SMTP_PORT: `587`
- SMTP_USER: Your SES SMTP username
- SMTP_PASS: Your SES SMTP password

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review server logs for error messages
3. Verify all environment variables are set correctly
4. Test with a different email address to rule out inbox issues

**Current Configuration:**
- **Recipient Email:** gilbertodongo02@gmail.com
- **SMTP Provider:** Gmail (smtp.gmail.com)
- **Port:** 587 (TLS)
- **Forms:** Contact Us + Request a Quote

---

**Last Updated:** October 21, 2025
