import { Button } from "@/components/ui/button";

export default function AboutSection() {
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

  const certifications = [
    { icon: "fas fa-certificate", text: "ASE Certified", color: "auto-orange" },
    { icon: "fas fa-shield-alt", text: "Insured & Bonded", color: "auto-blue" },
    { icon: "fas fa-award", text: "Award Winning", color: "white" },
    { icon: "fas fa-handshake", text: "Satisfaction Guarantee", color: "auto-orange" },
  ];

  return (
    <section id="about" className="py-20 bg-auto-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-auto-orange">15+ Years</span> of Automotive Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At AutoCraft Pro, we've built our reputation on precision, quality, and customer satisfaction. Our team of ASE-certified technicians brings decades of combined experience to every project.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From the moment you walk into our state-of-the-art facility, you'll experience the difference that true craftsmanship makes. We don't just service cars – we perfect them.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-auto-orange mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-auto-blue mb-2">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className={`${cert.icon} text-${cert.color} text-xl`}></i>
                  <span className="text-gray-300">{cert.text}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-auto-orange hover:bg-auto-orange/90 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-user-friends mr-2"></i>
              Meet Our Team
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional automotive workshop team"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Certification Badge */}
            <div className="absolute -bottom-6 -right-6 bg-auto-orange rounded-full p-6 shadow-2xl">
              <div className="text-center text-white">
                <i className="fas fa-certificate text-2xl mb-1"></i>
                <div className="text-sm font-bold">ASE Certified</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-center text-white">
                <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                <div className="text-xs">Google Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Why Choose <span className="text-auto-orange">AutoCraft Pro</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're not just another auto shop. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-auto-charcoal rounded-2xl p-8 hover-lift">
                <div className="text-auto-orange text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-clock"></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Fast Turnaround</h4>
                <p className="text-gray-400">
                  Most services completed same-day or within 48 hours. We respect your time and get you back on the road quickly.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-auto-charcoal rounded-2xl p-8 hover-lift">
                <div className="text-auto-blue text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-microscope"></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Precision Work</h4>
                <p className="text-gray-400">
                  Every detail matters. Our meticulous approach ensures perfect results that exceed industry standards.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-auto-charcoal rounded-2xl p-8 hover-lift">
                <div className="text-white text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-heart"></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Passion Driven</h4>
                <p className="text-gray-400">
                  We're car enthusiasts first. This passion drives us to deliver exceptional results on every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
