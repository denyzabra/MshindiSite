import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { sendContactEmail } from '../server/email';
import { insertContactSubmissionSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only handle POST requests to /api/contact
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);
    
    const emailSent = await sendContactEmail(validatedData);
    
    console.log("Contact form submission received:", {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      service: submission.service,
      emailSent,
    });

    return res.status(200).json({ 
      success: true, 
      message: "Contact form submitted successfully",
      id: submission.id,
      emailSent
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return res.status(400).json({ 
      success: false, 
      message: error.message || "Failed to submit contact form" 
    });
  }
}

