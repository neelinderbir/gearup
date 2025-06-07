import { Button } from "@/components/ui/button";

export default function HeroSection() {
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        }}
      />

      {/* Carbon Fiber Texture Overlay */}
      <div className="absolute inset-0 carbon-fiber" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight text-shadow">
          <span className="text-white">Premium</span>
          <br />
          <span className="text-auto-orange">Automotive</span>
          <br />
          <span className="text-white">Excellence</span>
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
          Expert car detailing, professional repairs, and custom modifications with unmatched quality and precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            onClick={scrollToContact}
            className="bg-auto-orange hover:bg-auto-orange/90 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <i className="fas fa-calendar-check mr-2"></i>
            Book Service Now
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
          >
            <i className="fas fa-phone mr-2"></i>
            Get Free Quote
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-auto-orange mb-2">500+</div>
            <div className="text-sm text-gray-300">Cars Serviced</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-sm text-gray-300">Google Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[120px]">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-auto-orange text-2xl"></i>
      </div>
    </section>
  );
}
