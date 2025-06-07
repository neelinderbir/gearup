import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("detailing");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const serviceCards = [
    {
      icon: "fas fa-spray-can",
      title: "Premium Detailing",
      description: "Interior & exterior detailing, paint correction, ceramic coating, and protection services that restore your car's showroom shine.",
      features: [
        "Paint Correction & Polishing",
        "Ceramic Coating Protection",
        "Interior Deep Cleaning",
        "Engine Bay Detailing",
      ],
      color: "auto-orange",
    },
    {
      icon: "fas fa-tools",
      title: "Expert Repairs",
      description: "Professional diagnostics, mechanical repairs, and maintenance services to keep your vehicle running at peak performance.",
      features: [
        "Advanced Diagnostics",
        "Engine & Transmission",
        "Brake & Suspension",
        "Preventive Maintenance",
      ],
      color: "auto-blue",
    },
    {
      icon: "fas fa-cog",
      title: "Custom Modifications",
      description: "Performance upgrades, body kits, engine tuning, and custom modifications to make your vehicle truly unique.",
      features: [
        "Performance Tuning",
        "Body Kit Installation",
        "Custom Exhaust Systems",
        "Interior Upgrades",
      ],
      color: "white",
    },
  ];

  const detailedServices = {
    detailing: {
      title: "Premium Detailing Services",
      subtitle: "Meticulous attention to every detail",
      description: "Our comprehensive detailing process restores your vehicle's beauty and protects its value using only the finest products and techniques.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: [
        {
          icon: "fas fa-paint-brush",
          title: "Paint Correction & Protection",
          description: "Professional paint correction, ceramic coating, and paint protection film installation.",
        },
        {
          icon: "fas fa-couch",
          title: "Interior Restoration",
          description: "Deep cleaning, leather conditioning, and fabric protection services.",
        },
        {
          icon: "fas fa-shield-alt",
          title: "Long-term Protection",
          description: "Advanced protective coatings that maintain your vehicle's pristine condition.",
        },
      ],
      duration: "2-5 Days",
      color: "auto-orange",
    },
    repairs: {
      title: "Expert Repair Services",
      subtitle: "Certified technicians you can trust",
      description: "Our ASE-certified technicians provide comprehensive repair services using state-of-the-art diagnostic equipment and genuine parts.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: [
        {
          icon: "fas fa-laptop",
          title: "Computer Diagnostics",
          description: "Advanced diagnostic systems to identify and resolve complex issues quickly.",
        },
        {
          icon: "fas fa-cog",
          title: "Engine & Transmission",
          description: "Complete engine rebuilds, transmission service, and drivetrain repairs.",
        },
        {
          icon: "fas fa-car",
          title: "Preventive Maintenance",
          description: "Scheduled maintenance services to prevent costly repairs and extend vehicle life.",
        },
      ],
      duration: "Same Day",
      color: "auto-blue",
    },
    modifications: {
      title: "Custom Modifications",
      subtitle: "Bring your vision to life",
      description: "Transform your vehicle with our custom modification services. From performance upgrades to aesthetic enhancements, we make your automotive dreams a reality.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: [
        {
          icon: "fas fa-tachometer-alt",
          title: "Performance Tuning",
          description: "ECU tuning, turbo installations, and engine modifications for maximum power.",
        },
        {
          icon: "fas fa-palette",
          title: "Custom Aesthetics",
          description: "Body kits, custom paint, vinyl wraps, and unique styling modifications.",
        },
        {
          icon: "fas fa-bolt",
          title: "Electrical Upgrades",
          description: "Audio systems, lighting upgrades, and advanced electronic installations.",
        },
      ],
      duration: "Custom Timeline",
      color: "white",
    },
  };

  return (
    <section id="services" className="py-20 bg-auto-charcoal relative">
      <div className="absolute inset-0 metal-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Services Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-auto-orange">Expert</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From meticulous detailing to performance modifications, we deliver excellence in every service
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {serviceCards.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-auto-dark to-auto-medium border-auto-dark hover-lift group cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className={`text-${service.color} text-5xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={service.icon}></i>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8 text-gray-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <i className={`fas fa-check text-${service.color} mr-3`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    service.color === "auto-orange"
                      ? "bg-auto-orange hover:bg-auto-orange/90"
                      : service.color === "auto-blue"
                      ? "bg-auto-blue hover:bg-auto-blue/90"
                      : "bg-white text-auto-black hover:bg-gray-200"
                  } font-semibold transition-all duration-300`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Complete <span className="text-auto-orange">Automotive</span> Services
            </h3>
            <p className="text-lg text-gray-300">
              Every service is performed by certified professionals using premium products and state-of-the-art equipment.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-auto-medium mb-12">
              <TabsTrigger
                value="detailing"
                className="data-[state=active]:bg-auto-orange data-[state=active]:text-white font-semibold"
              >
                <i className="fas fa-spray-can mr-2"></i>
                Detailing
              </TabsTrigger>
              <TabsTrigger
                value="repairs"
                className="data-[state=active]:bg-auto-blue data-[state=active]:text-white font-semibold"
              >
                <i className="fas fa-tools mr-2"></i>
                Repairs
              </TabsTrigger>
              <TabsTrigger
                value="modifications"
                className="data-[state=active]:bg-white data-[state=active]:text-auto-black font-semibold"
              >
                <i className="fas fa-cog mr-2"></i>
                Modifications
              </TabsTrigger>
            </TabsList>

            {Object.entries(detailedServices).map(([key, service]) => (
              <TabsContent key={key} value={key}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className={`text-3xl font-bold mb-2 text-${service.color}`}>
                      {service.title}
                    </h4>
                    <p className="text-lg text-gray-400 mb-6">{service.subtitle}</p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                          <div className={`bg-${service.color}/20 rounded-lg p-3`}>
                            <i className={`${item.icon} text-${service.color} text-xl`}></i>
                          </div>
                          <div>
                            <h5 className="text-xl font-semibold mb-2 text-white">
                              {item.title}
                            </h5>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={scrollToContact}
                      className={`${
                        service.color === "auto-orange"
                          ? "bg-auto-orange hover:bg-auto-orange/90"
                          : service.color === "auto-blue"
                          ? "bg-auto-blue hover:bg-auto-blue/90"
                          : "bg-white text-auto-black hover:bg-gray-200"
                      } px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                      <i className="fas fa-calendar-check mr-2"></i>
                      Book This Service
                    </Button>
                  </div>

                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                    <div className={`absolute -bottom-6 -right-6 bg-${service.color} rounded-2xl p-6 text-center shadow-2xl`}>
                      <div className={`text-2xl font-bold ${service.color === "white" ? "text-auto-black" : "text-white"}`}>
                        {service.duration.split(" ")[0]}
                      </div>
                      <div className={`text-sm ${service.color === "white" ? "text-auto-black" : "text-white"}/80`}>
                        {service.duration.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
