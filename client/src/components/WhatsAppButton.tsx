import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp business number
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about your automotive services. Can you help me?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        size="icon"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
        
        {/* Tooltip */}
        <div
          className={`absolute right-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-sm font-semibold">Chat with us on WhatsApp</div>
          <div className="text-xs text-gray-600">Quick response guaranteed</div>
          
          {/* Arrow */}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2">
            <div className="w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>
      </Button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
}
