import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", path: "/", isExternal: true },
    { label: "About", id: "about", path: "/", isExternal: false },
    { label: "Services", id: "services", path: "/", isExternal: false },
    { label: "Gallery", path: "/gallery", isExternal: true },
    { label: "Our Team", path: "/teams", isExternal: true },
    { label: "Contact", id: "contact", path: "/", isExternal: false },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.isExternal) {
      setIsMobileMenuOpen(false);
    } else if (link.id) {
      if (location !== "/") {
        window.location.href = `/#${link.id}`;
      } else {
        scrollToSection(link.id);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-md" : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-white hover:opacity-90 transition-opacity">
            <div data-testid="link-home">
              <Logo className="text-lg sm:text-xl md:text-2xl" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              link.isExternal ? (
                <Link key={link.label} href={link.path}>
                  <button
                    className="text-white hover:text-secondary transition-colors font-medium"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </button>
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-white hover:text-secondary transition-colors font-medium"
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              )
            ))}
            <Button
              onClick={() => {
                if (location !== "/") {
                  window.location.href = "/#contact";
                } else {
                  scrollToSection("contact");
                }
              }}
              variant="secondary"
              className="font-semibold"
              data-testid="button-quote"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link key={link.label} href={link.path}>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-secondary transition-colors font-medium text-left py-2 w-full"
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="text-white hover:text-secondary transition-colors font-medium text-left py-2"
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                )
              ))}
              <Button
                onClick={() => {
                  if (location !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    scrollToSection("contact");
                  }
                }}
                variant="secondary"
                className="font-semibold w-full"
                data-testid="button-mobile-quote"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
