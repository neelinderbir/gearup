import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  serviceType: z.string().min(1, "Service type is required"),
  vehicle: z.string().optional(),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM
      // 4. Send confirmation email to customer
      
      console.log("Contact form submission:", validatedData);
      
      // For now, just return success
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: validatedData 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      service: "AutoCraft Pro API"
    });
  });

  // Business hours endpoint
  app.get("/api/business-hours", (req, res) => {
    res.json({
      hours: {
        monday: { open: "08:00", close: "18:00", isOpen: true },
        tuesday: { open: "08:00", close: "18:00", isOpen: true },
        wednesday: { open: "08:00", close: "18:00", isOpen: true },
        thursday: { open: "08:00", close: "18:00", isOpen: true },
        friday: { open: "08:00", close: "18:00", isOpen: true },
        saturday: { open: "09:00", close: "16:00", isOpen: true },
        sunday: { open: null, close: null, isOpen: false }
      },
      timezone: "America/New_York",
      emergencyAvailable: true
    });
  });

  // Services endpoint
  app.get("/api/services", (req, res) => {
    res.json({
      services: [
        {
          id: "detailing",
          name: "Premium Detailing",
          description: "Interior & exterior detailing, paint correction, ceramic coating, and protection services",
          category: "detailing",
          features: [
            "Paint Correction & Polishing",
            "Ceramic Coating Protection", 
            "Interior Deep Cleaning",
            "Engine Bay Detailing"
          ],
          estimatedTime: "2-5 days",
          priceRange: "$$"
        },
        {
          id: "repairs",
          name: "Expert Repairs",
          description: "Professional diagnostics, mechanical repairs, and maintenance services",
          category: "repairs",
          features: [
            "Advanced Diagnostics",
            "Engine & Transmission",
            "Brake & Suspension", 
            "Preventive Maintenance"
          ],
          estimatedTime: "Same day - 3 days",
          priceRange: "$"
        },
        {
          id: "modifications",
          name: "Custom Modifications",
          description: "Performance upgrades, body kits, engine tuning, and custom modifications",
          category: "modifications",
          features: [
            "Performance Tuning",
            "Body Kit Installation",
            "Custom Exhaust Systems",
            "Interior Upgrades"
          ],
          estimatedTime: "1-4 weeks",
          priceRange: "$$$"
        }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
