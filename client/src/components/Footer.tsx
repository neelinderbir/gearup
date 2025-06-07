export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Car Detailing", action: () => scrollToSection("services") },
        { name: "Paint Correction", action: () => scrollToSection("services") },
        { name: "Ceramic Coating", action: () => scrollToSection("services") },
        { name: "Auto Repairs", action: () => scrollToSection("services") },
        { name: "Custom Modifications", action: () => scrollToSection("services") },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", action: () => scrollToSection("about") },
        { name: "Our Team", action: () => scrollToSection("about") },
        { name: "Portfolio", action: () => scrollToSection("gallery") },
        { name: "Testimonials", action: () => scrollToSection("testimonials") },
        { name: "Contact", action: () => scrollToSection("contact") },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "1234 Automotive Drive", action: () => scrollToSection("contact") },
        { name: "Metro City, MC 12345", action: () => scrollToSection("contact") },
        { name: "(555) 123-AUTO", action: () => scrollToSection("contact") },
        { name: "info@autocraftpro.com", action: () => scrollToSection("contact") },
      ],
    },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#", name: "Facebook" },
    { icon: "fab fa-instagram", url: "#", name: "Instagram" },
    { icon: "fab fa-youtube", url: "#", name: "YouTube" },
    { icon: "fab fa-google", url: "#", name: "Google Reviews" },
  ];

  return (
    <footer className="bg-auto-charcoal border-t border-auto-medium py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-wrench text-auto-orange text-2xl"></i>
              <span className="text-2xl font-bold text-white">AutoCraft Pro</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium automotive services including detailing, repairs, and custom modifications. Your vehicle deserves the best.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-auto-medium hover:bg-auto-orange p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-auto-orange transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Business Hours and Certifications */}
        <div className="border-t border-auto-medium pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <div className="text-gray-400 space-y-1">
                <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 4:00 PM</div>
                <div className="text-auto-orange font-semibold">Sunday: Closed</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-auto-orange/20 text-auto-orange px-3 py-1 rounded-full text-sm">
                  ASE Certified
                </span>
                <span className="bg-auto-blue/20 text-auto-blue px-3 py-1 rounded-full text-sm">
                  Insured & Bonded
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  BBB Accredited
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Service Areas</h4>
              <div className="text-gray-400 space-y-1">
                <div>Metro City & Surrounding Areas</div>
                <div>Mobile Services Available</div>
                <div className="text-auto-orange">Free Pickup & Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-auto-medium pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AutoCraft Pro. All rights reserved. | Built for performance and conversion
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-auto-orange transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-auto-orange transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-auto-orange transition-colors duration-300">
                Warranty Information
              </button>
              <button className="text-gray-400 hover:text-auto-orange transition-colors duration-300">
                Sitemap
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="bg-auto-orange hover:bg-auto-orange/90 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label="Back to top"
          >
            <i className="fas fa-chevron-up text-xl"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
