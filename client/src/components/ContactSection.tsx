import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    vehicle: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          vehicle: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call us directly at (555) 123-AUTO",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      details: ["1234 Automotive Drive", "Metro City, MC 12345"],
      color: "auto-orange",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      details: ["(555) 123-AUTO", "(555) 123-2886"],
      color: "auto-blue",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: ["info@autocraftpro.com", "service@autocraftpro.com"],
      color: "white",
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "auto-orange",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-auto-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="text-auto-orange">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vehicle? Contact us today for a consultation and quote. We're here to make your automotive dreams a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-auto-charcoal to-auto-dark border-auto-medium">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Book Your Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-auto-medium border-auto-dark text-white placeholder-gray-400 focus:border-auto-orange"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-auto-medium border-auto-dark text-white placeholder-gray-400 focus:border-auto-orange"
                      placeholder="Your surname"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-auto-medium border-auto-dark text-white placeholder-gray-400 focus:border-auto-orange"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-auto-medium border-auto-dark text-white placeholder-gray-400 focus:border-auto-orange"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType" className="text-gray-300">
                    Service Type
                  </Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="bg-auto-medium border-auto-dark text-white focus:border-auto-orange">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-auto-medium border-auto-dark">
                      <SelectItem value="detailing">Car Detailing</SelectItem>
                      <SelectItem value="repairs">Automotive Repairs</SelectItem>
                      <SelectItem value="modifications">Custom Modifications</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="vehicle" className="text-gray-300">
                    Vehicle Details
                  </Label>
                  <Input
                    id="vehicle"
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => handleInputChange("vehicle", e.target.value)}
                    className="bg-auto-medium border-auto-dark text-white placeholder-gray-400 focus:border-auto-orange"
                    placeholder="Year, Make, Model (e.g., 2020 BMW M3)"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-auto-medium border-auto-dark text-white placeholder-gray-400 focus:border-auto-orange resize-none"
                    rows={4}
                    placeholder="Tell us about your project or what you'd like to achieve..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-auto-orange hover:bg-auto-orange/90 text-white py-4 font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <Card className="bg-gradient-to-br from-auto-charcoal to-auto-dark border-auto-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Visit Our Shop
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`bg-${item.color}/20 rounded-lg p-3 flex-shrink-0`}>
                      <i className={`${item.icon} text-${item.color} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-to-br from-auto-charcoal to-auto-medium border-auto-medium">
              <CardContent className="p-8">
                <div className="h-64 flex items-center justify-center rounded-lg bg-auto-dark">
                  <div className="text-center">
                    <i className="fas fa-map text-4xl text-auto-orange mb-4"></i>
                    <p className="text-white font-semibold mb-2">Interactive Map</p>
                    <p className="text-gray-400 text-sm">
                      Google Maps integration would be embedded here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-auto-orange to-orange-600 border-none">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">
                  Emergency Service Available
                </h4>
                <p className="text-white/80 mb-4">
                  Need urgent automotive assistance? We offer 24/7 emergency services.
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-auto-orange font-semibold"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
