import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4" data-testid="text-footer-company">
              MSHINDI ENTERPRISES LIMITED
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Clearing and forwarding company specializing in logistics, 
              customs clearance, and comprehensive transportation solutions across Uganda. 
              Affiliated with UCIFA and licensed by Uganda Revenue Authority.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-secondary transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-secondary transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-secondary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-white/80 hover:text-secondary transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-white/80 hover:text-secondary transition-colors"
                  data-testid="link-footer-teams"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-secondary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-heading font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-white/80">Kira Municipality, Namanve - Wakiso, Uganda</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div className="text-white/80">
                  <a href="tel:+256756504958" className="hover:text-secondary transition-colors block">+256 756 504 958</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <a 
                  href="mailto:mshindienterprisescoltd@gmail.com" 
                  className="text-white/80 hover:text-secondary transition-colors break-all"
                  data-testid="link-footer-email"
                >
                  mshindienterprisescoltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm" data-testid="text-copyright">
              &copy; {currentYear} Mshindi Enterprises Limited. All rights reserved.
            </p>
            <p className="text-white/60 text-sm italic">
              "Clearance made easier"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
