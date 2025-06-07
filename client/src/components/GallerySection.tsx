import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Work", count: 12 },
    { id: "detailing", label: "Detailing", count: 6 },
    { id: "repairs", label: "Repairs", count: 3 },
    { id: "modifications", label: "Modifications", count: 3 },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "detailing",
      title: "Paint Correction & Ceramic Coating",
      description: "Complete paint restoration with 5-year ceramic protection",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Detailing"
    },
    {
      id: 2,
      category: "detailing", 
      title: "Premium Interior Restoration",
      description: "Leather conditioning and fabric protection service",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Detailing"
    },
    {
      id: 3,
      category: "modifications",
      title: "Full Body Kit Installation", 
      description: "Custom aerodynamics package with performance upgrades",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Modifications"
    },
    {
      id: 4,
      category: "repairs",
      title: "Engine Rebuild & Tuning",
      description: "Complete engine restoration with performance optimization", 
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Repairs"
    },
    {
      id: 5,
      category: "modifications",
      title: "Custom Vinyl Wrap Design",
      description: "Unique aesthetic transformation with premium materials",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", 
      badge: "Modifications"
    },
    {
      id: 6,
      category: "detailing",
      title: "Classic Car Restoration",
      description: "Full restoration to concours condition",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Detailing"
    },
    {
      id: 7,
      category: "detailing",
      title: "Luxury SUV Detail",
      description: "Complete interior and exterior rejuvenation",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Detailing"
    },
    {
      id: 8,
      category: "repairs",
      title: "Brake System Upgrade",
      description: "High-performance brake system installation",
      image: "https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Repairs"
    },
    {
      id: 9,
      category: "modifications",
      title: "Performance Exhaust System",
      description: "Custom exhaust with enhanced sound and performance",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Modifications"
    },
    {
      id: 10,
      category: "detailing",
      title: "Supercar Paint Protection",
      description: "Premium PPF installation with ceramic top coat",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Detailing"
    },
    {
      id: 11,
      category: "repairs",
      title: "Transmission Service",
      description: "Complete transmission rebuild and service",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Repairs"
    },
    {
      id: 12,
      category: "detailing",
      title: "Concours Detail",
      description: "Show-quality detailing for automotive competitions",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Detailing"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "detailing":
        return "bg-auto-orange";
      case "repairs":
        return "bg-auto-blue";
      case "modifications":
        return "bg-white text-auto-black";
      default:
        return "bg-auto-orange";
    }
  };

  return (
    <section id="gallery" className="py-20 bg-auto-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-auto-orange">Work</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            See the transformation. Every project showcases our commitment to excellence and attention to detail.
          </p>

          {/* Gallery Filters */}
          <div className="flex justify-center flex-wrap gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-auto-orange hover:bg-auto-orange/90 text-white"
                    : "bg-auto-medium text-gray-300 hover:bg-auto-dark hover:text-white border-auto-dark"
                }`}
              >
                {filter.label}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {filter.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-auto-charcoal">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-auto-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(item.category)}`}>
                  {item.badge}
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-auto-orange hover:bg-auto-orange/90 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105">
            <i className="fas fa-images mr-2"></i>
            View Full Portfolio
          </Button>
        </div>

        {/* Before/After Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Before & <span className="text-auto-orange">After</span> Transformations
            </h3>
            <p className="text-lg text-gray-300">
              See the dramatic difference our expert services make
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Before restoration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="After restoration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                AFTER
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
