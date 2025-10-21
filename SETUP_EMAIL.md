# Email Setup Instructions for MSHINDI ENTERPRISES

## 🎯 Purpose
Enable production-grade email sending for contact forms ("Contact Us" and "Request Quote").

All form submissions will be sent to: **gilbertodongo02@gmail.com**

---

## 📝 Step-by-Step Setup

### Step 1: Enable 2-Step Verification on Gmail

1. Go to [Google Account Security Settings](https://myaccount.google.com/security)
2. Find "2-Step Verification" 
3. Click "Get Started" and follow the prompts
4. Complete the setup (you'll need your phone)

### Step 2: Generate Gmail App Password

1. After enabling 2-Step Verification, go back to [Security Settings](https://myaccount.google.com/security)
2. Scroll down to "2-Step Verification"
3. At the bottom, find "App passwords"
4. Click on "App passwords"
5. Select:
   - **App:** Mail
   - **Device:** Other (Custom name) → Enter "Mshindi Website"
6. Click "Generate"
7. **Copy the 16-character password** (format: xxxx xxxx xxxx xxxx)
   - ⚠️ Save this somewhere - you won't see it again!

### Step 3: Add Credentials to Replit

1. In your Replit project, click **Tools** (left sidebar)
2. Click **Secrets**
3. Add the following secrets:

   **Secret 1:**
   - Key: `SMTP_USER`
   - Value: `gilbertodongo02@gmail.com`
   - Click "Add Secret"

   **Secret 2:**
   - Key: `SMTP_PASS`
   - Value: [Paste your 16-character App Password from Step 2]
   - Click "Add Secret"

### Step 4: Restart the Application

1. Go to the Shell (bottom of Replit)
2. The workflow should automatically restart
3. Check the logs - you should see: `[express] serving on port 5000`

---

## ✅ Testing

### Test Contact Form:
1. Open your website
2. Scroll to "Contact" section
3. Fill out the "Contact Us" form
4. Click "Send Message"
5. Check gilbertodongo02@gmail.com for the email!

### Test Quote Request Form:
1. Click the "Request a Quote" tab
2. Fill out the form with cargo details
3. Click "Request Quote"
4. Check gilbertodongo02@gmail.com for the email!

---

## 🔍 Troubleshooting

### "Email configuration not set" in console
- Make sure both SMTP_USER and SMTP_PASS are in Replit Secrets
- Check spelling of the secret keys (case-sensitive)
- Restart the workflow after adding secrets

### Emails not arriving
- Check spam/junk folder in Gmail
- Verify the App Password is correct (no spaces)
- Make sure 2-Step Verification is still enabled
- Try generating a new App Password

### "Invalid credentials" error
- The App Password might be wrong
- Generate a new App Password and update SMTP_PASS secret
- Make sure you're using App Password, NOT your regular Gmail password

---

## 📧 What Happens When Configured

✅ **With SMTP credentials:**
- Forms submit successfully
- Customer gets success message
- Email sent to gilbertodongo02@gmail.com
- Email includes: Name, Email, Phone, Company, Service, Message
- Reply-To is set to customer's email

❌ **Without SMTP credentials:**
- Forms submit successfully
- Customer gets success message
- Submission logged to console (visible in Replit logs)
- No email sent (clear warning in logs)

---

## 🔒 Security Notes

- App Passwords are safer than using your main Gmail password
- Secrets are encrypted in Replit
- Never commit .env files to git (already in .gitignore)
- You can revoke App Passwords anytime in Google Account settings

---

## 📞 Need Help?

If you encounter issues:
1. Check the console logs in Replit for detailed error messages
2. Verify all secrets are correctly entered
3. Try the test steps above
4. Generate a fresh App Password if needed
