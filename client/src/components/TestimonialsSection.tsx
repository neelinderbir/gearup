import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "BMW Owner",
      rating: 5,
      text: "Absolutely incredible work! My BMW looks better than the day I bought it. The paint correction and ceramic coating are flawless. Elite Auto exceeded all my expectations.",
      initials: "MJ",
      color: "auto-orange",
    },
    {
      id: 2,
      name: "Sarah Rodriguez", 
      role: "Mustang Enthusiast",
      rating: 5,
      text: "The custom modifications on my Mustang are phenomenal. The team understood exactly what I wanted and delivered beyond my wildest dreams. Professional and skilled!",
      initials: "SR",
      color: "auto-blue",
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Audi Owner", 
      rating: 5,
      text: "Fast, reliable repairs with honest pricing. They diagnosed my transmission issue quickly and had me back on the road the same day. Highly recommend Elite Auto!",
      initials: "DT",
      color: "white",
    },
    {
      id: 4,
      name: "Jennifer Chen",
      role: "Tesla Owner",
      rating: 5,
      text: "Even for my electric vehicle, they provided excellent paint protection services. The ceramic coating is perfect and their attention to detail is unmatched.",
      initials: "JC",
      color: "auto-orange",
    },
    {
      id: 5,
      name: "Robert Martinez",
      role: "Porsche Owner",
      rating: 5,
      text: "The performance modifications transformed my Porsche. More power, better handling, and it still maintains the luxury feel. These guys are true craftsmen.",
      initials: "RM",
      color: "auto-blue",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Mercedes Owner",
      rating: 5,
      text: "Outstanding interior detailing service. My leather seats look brand new and the attention to detail throughout the cabin is remarkable. Worth every penny!",
      initials: "LA",
      color: "white",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      ></i>
    ));
  };

  const getInitialsColor = (color: string) => {
    switch (color) {
      case "auto-orange":
        return "bg-auto-orange";
      case "auto-blue":
        return "bg-auto-blue";
      case "white":
        return "bg-white text-auto-black";
      default:
        return "bg-auto-orange";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-auto-charcoal to-auto-dark relative">
      <div className="absolute inset-0 metal-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="text-auto-orange">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover-lift"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 text-xl">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${getInitialsColor(testimonial.color)}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-auto-orange mb-2">4.9</div>
              <div className="flex justify-center space-x-1 text-xl mb-2">
                {renderStars(5)}
              </div>
              <div className="text-white font-semibold">Google Reviews</div>
            </div>
            
            <div className="h-16 w-px bg-white/20"></div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-auto-blue mb-2">150+</div>
              <div className="text-white font-semibold">Happy Customers</div>
              <div className="text-sm text-gray-400">And growing daily</div>
            </div>
            
            <div className="h-16 w-px bg-white/20"></div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white font-semibold">Satisfaction</div>
              <div className="text-sm text-gray-400">Guaranteed results</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <i className="fas fa-shield-alt text-4xl text-auto-orange mb-4"></i>
            <h4 className="font-semibold text-white mb-2">Satisfaction Guarantee</h4>
            <p className="text-sm text-gray-400">100% satisfaction or money back</p>
          </div>
          
          <div className="flex flex-col items-center">
            <i className="fas fa-certificate text-4xl text-auto-blue mb-4"></i>
            <h4 className="font-semibold text-white mb-2">Certified Professionals</h4>
            <p className="text-sm text-gray-400">ASE certified technicians</p>
          </div>
          
          <div className="flex flex-col items-center">
            <i className="fas fa-clock text-4xl text-white mb-4"></i>
            <h4 className="font-semibold text-white mb-2">On-Time Service</h4>
            <p className="text-sm text-gray-400">Reliable scheduling you can trust</p>
          </div>
          
          <div className="flex flex-col items-center">
            <i className="fas fa-award text-4xl text-auto-orange mb-4"></i>
            <h4 className="font-semibold text-white mb-2">Award Winning</h4>
            <p className="text-sm text-gray-400">Recognized for excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
