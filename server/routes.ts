import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
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

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: submission.id,
        emailSent
      });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Failed to submit contact form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
