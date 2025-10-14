import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/shipping_containers__3e8d9c6d.jpg";

export default function Hero() {
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
    }
  };

  return (
    <section id="home" className="relative h-[80vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight" data-testid="text-hero-title">
            MSHINDI ENTERPRISES LIMITED
          </h1>
          
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-white/95" data-testid="text-tagline">
            "Clearing made Easy"
          </p>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Professional clearing and forwarding company in Uganda specializing in logistics, 
            customs clearance, import/export management, warehousing, and transportation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold min-w-[200px]"
              data-testid="button-hero-quote"
            >
              Request a Quote
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-semibold bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
              data-testid="button-hero-services"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
