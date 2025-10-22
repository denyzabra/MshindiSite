# Vercel Deployment Guide for MSHINDI ENTERPRISES Website

This guide will help you deploy the MSHINDI ENTERPRISES website to Vercel with a custom domain from cPanel.

---

## Prerequisites

Before you begin, ensure you have:
- ✅ A Vercel account (free at https://vercel.com)
- ✅ Your custom domain configured in cPanel
- ✅ Access to your domain's DNS settings
- ✅ Gmail App Password for SMTP (see SMTP_SETUP_GUIDE.md)

---

## Part 1: Deploy to Vercel

### Step 1: Prepare Your Project

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Verify your project structure** includes:
   - `package.json` with build scripts
   - `vite.config.ts` for frontend configuration
   - `server/` directory for backend code

### Step 2: Import to Vercel

1. Go to https://vercel.com and sign in
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Choose your repository from GitHub
5. Vercel will auto-detect the framework (Vite)

### Step 3: Configure Build Settings

**Framework Preset:** Vite

**Build & Output Settings:**
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**Root Directory:** Leave as `./` (root)

### Step 4: Add Environment Variables

Click **"Environment Variables"** and add:

| Name | Value | Description |
|------|-------|-------------|
| `NODE_ENV` | `production` | Environment mode |
| `SMTP_USER` | `gilbertodongo02@gmail.com` | Gmail address for sending emails |
| `SMTP_PASS` | `your-app-password` | 16-character Gmail App Password |
| `SMTP_HOST` | `smtp.gmail.com` | Gmail SMTP server |
| `SMTP_PORT` | `587` | SMTP port for TLS |
| `CONTACT_EMAIL` | `gilbertodongo02@gmail.com` | Recipient email for contact forms |

**Important:** 
- For `SMTP_PASS`, use the 16-character App Password from Gmail (see SMTP_SETUP_GUIDE.md)
- Click **"Add"** after entering each variable
- These apply to all environments (Production, Preview, Development)

### Step 5: Deploy

1. Click **"Deploy"**
2. Vercel will build and deploy your website
3. Wait for deployment to complete (usually 1-3 minutes)
4. You'll receive a URL like: `your-project.vercel.app`

### Step 6: Test the Deployment

1. Visit your Vercel URL
2. Test all sections: Hero, About, Services, Gallery, Teams, Contact
3. **Test contact forms:**
   - Fill out "Contact Us" form
   - Fill out "Request a Quote" form
   - Check gilbertodongo02@gmail.com for emails
4. Test WhatsApp button functionality
5. Test responsive design on mobile

---

## Part 2: Add Custom Domain from cPanel

### Overview

You have a domain managed in cPanel, and you want to point it to your Vercel deployment. This requires updating DNS records in your cPanel.

### Step 1: Add Domain to Vercel

1. In your Vercel project dashboard, go to **Settings**
2. Click **Domains** in the sidebar
3. Click **"Add"** or **"Add Domain"**
4. Enter your custom domain, for example:
   - `www.mshindienterprisesltd.com`
   - `mshindienterprisesltd.com`
5. Click **"Add"**

**Vercel will provide DNS records** that you need to add to cPanel.

### Step 2: Get DNS Records from Vercel

After adding the domain, Vercel will show you the required DNS configuration. You'll typically see:

**For root domain (example.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP address)

**For www subdomain (www.example.com):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Note:** The actual IP and CNAME values may differ. Use the values shown in your Vercel dashboard.

### Step 3: Update DNS in cPanel

1. **Log in to cPanel**
2. Find **"Zone Editor"** or **"DNS Zone Editor"**
3. Select your domain

#### Add A Record (for root domain)

1. Click **"+ A Record"** or **"Add Record"**
2. Fill in:
   - **Name:** `@` or leave blank (represents root domain)
   - **TTL:** `14400` (4 hours) or `3600` (1 hour)
   - **Type:** `A`
   - **Address:** The IP address from Vercel (e.g., `76.76.21.21`)
3. Click **"Add Record"** or **"Save"**

#### Add CNAME Record (for www subdomain)

1. Click **"+ CNAME Record"** or **"Add Record"**
2. Fill in:
   - **Name:** `www`
   - **TTL:** `14400` or `3600`
   - **Type:** `CNAME`
   - **Target/Points to:** `cname.vercel-dns.com`
3. Click **"Add Record"** or **"Save"**

### Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate globally
- Typically, changes are visible within **30 minutes to 2 hours**
- You can check propagation status at: https://dnschecker.org

### Step 5: Verify Domain in Vercel

1. Return to Vercel → Your Project → **Settings** → **Domains**
2. Wait for the domain status to change from "Invalid Configuration" to "Valid Configuration"
3. Vercel will automatically provision an SSL certificate (HTTPS)
4. Once verified, your domain will show a ✓ checkmark

### Step 6: Test Your Custom Domain

1. Visit your custom domain in a browser
2. Verify HTTPS is working (look for the padlock icon)
3. Test all website functionality
4. Test contact forms and email delivery

---

## Part 3: Advanced Configuration

### Redirect Root to www (or vice versa)

In Vercel, you can set up automatic redirects:

1. Go to **Settings** → **Domains**
2. If you added both `example.com` and `www.example.com`:
   - Click the **"..."** menu next to one domain
   - Select **"Redirect to..."**
   - Choose the other domain
3. Vercel will automatically redirect users

**Recommended:** Redirect root to www (e.g., `example.com` → `www.example.com`)

### SSL Certificate (Automatic)

Vercel automatically provisions **free SSL certificates** using Let's Encrypt:
- ✅ Automatic renewal
- ✅ Covers both root and www domains
- ✅ No configuration needed

### Environment-Specific Domains

You can configure different domains for different environments:
- **Production:** `www.mshindienterprisesltd.com`
- **Preview:** `preview.mshindienterprisesltd.com` (for testing)
- **Development:** `dev.mshindienterprisesltd.com`

---

## Part 4: Troubleshooting

### ❌ Domain shows "Invalid Configuration"

**Solution:**
1. Verify DNS records in cPanel match Vercel's requirements exactly
2. Wait longer for DNS propagation (up to 48 hours)
3. Use https://dnschecker.org to check if DNS has propagated
4. Clear your browser cache and try again

### ❌ SSL Certificate not working

**Solution:**
- Wait for Vercel to provision the certificate (can take a few minutes after DNS verification)
- Ensure your domain is verified in Vercel
- Check that DNS records are correct

### ❌ Website shows 404 or blank page

**Solution:**
1. Check build logs in Vercel for errors
2. Verify environment variables are set correctly
3. Redeploy from Vercel dashboard

### ❌ Contact forms not sending emails

**Solution:**
1. Verify SMTP environment variables in Vercel settings
2. Check Gmail App Password is correct
3. See SMTP_SETUP_GUIDE.md for detailed troubleshooting

### ❌ DNS changes not reflecting

**Solution:**
1. Wait longer (DNS can take up to 48 hours)
2. Clear your local DNS cache:
   - **Windows:** `ipconfig /flushdns`
   - **Mac:** `sudo dscacheutil -flushcache`
   - **Linux:** `sudo systemd-resolve --flush-caches`
3. Try accessing from a different device/network

---

## Part 5: Continuous Deployment

### Automatic Deployments

Once connected to Git, Vercel automatically deploys:
- ✅ Every push to `main` branch → Production deployment
- ✅ Every pull request → Preview deployment
- ✅ All deployments get unique URLs

### Manual Deployment

To manually trigger a deployment:
1. Go to Vercel dashboard
2. Click your project
3. Click **"Deployments"**
4. Click **"..."** next to any deployment
5. Select **"Redeploy"**

### Rollback to Previous Version

If something goes wrong:
1. Go to **Deployments**
2. Find the last working deployment
3. Click **"..."** → **"Promote to Production"**

---

## Part 6: Performance Optimization

### Caching

Vercel automatically caches:
- Static assets (images, CSS, JS)
- API responses (with proper headers)

### Analytics (Optional)

Enable Vercel Analytics:
1. Go to **Analytics** tab
2. Click **"Enable Analytics"**
3. View real-time traffic, page views, and performance

### Speed Insights (Optional)

1. Go to **Speed Insights** tab
2. Click **"Enable Speed Insights"**
3. Monitor Core Web Vitals

---

## Checklist: Pre-Deployment

Before deploying to production, verify:

- [ ] All sections are working correctly
- [ ] Contact forms submit successfully
- [ ] Email delivery is configured and tested
- [ ] Mobile responsiveness is verified
- [ ] All images are optimized
- [ ] WhatsApp button links to correct number
- [ ] Team member information is accurate
- [ ] SMTP credentials are added to Vercel
- [ ] Custom domain DNS records are ready

---

## Quick Reference: DNS Records

**For cPanel DNS Configuration:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

**Note:** Use the actual values provided by Vercel in your dashboard.

---

## Support Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **DNS Checker:** https://dnschecker.org
- **SSL Checker:** https://www.sslshopper.com/ssl-checker.html

---

**Deployment Summary:**

1. ✅ Push code to GitHub
2. ✅ Import to Vercel
3. ✅ Add environment variables (SMTP credentials)
4. ✅ Deploy to Vercel
5. ✅ Add custom domain in Vercel
6. ✅ Update DNS records in cPanel
7. ✅ Wait for DNS propagation
8. ✅ Verify SSL certificate
9. ✅ Test website functionality
10. ✅ You're live! 🎉

---

**Last Updated:** October 21, 2025
