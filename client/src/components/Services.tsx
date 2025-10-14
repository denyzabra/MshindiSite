import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { 
  FileText, 
  Package, 
  Ship, 
  Warehouse, 
  Cog, 
  Shield, 
  Building, 
  Plane, 
  Truck, 
  Calculator, 
  Fuel, 
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Customs Clearance & Documentation",
    description: "Complete customs clearance services with all necessary documentation handled efficiently"
  },
  {
    icon: Package,
    title: "Project Cargo & Handling",
    description: "Specialized handling and transportation of project cargo with expert care"
  },
  {
    icon: Ship,
    title: "Imports & Exports Clearance",
    description: "Seamless import and export clearance services for all types of goods"
  },
  {
    icon: Warehouse,
    title: "Warehousing & Transit Cargo",
    description: "Secure warehousing facilities and efficient transit cargo handling solutions"
  },
  {
    icon: Cog,
    title: "Machinery Clearance & Raw Materials",
    description: "Expert clearance services for industrial machinery and raw materials"
  },
  {
    icon: Shield,
    title: "Tax Exemptions for Specialized Cargo",
    description: "Expert assistance with tax exemption processes for eligible cargo"
  },
  {
    icon: Building,
    title: "Government & Diplomatic Cargo",
    description: "Specialized handling of government and diplomatic cargo with discretion"
  },
  {
    icon: Plane,
    title: "Air Cargo Clearance",
    description: "Fast and efficient air cargo clearance services for time-sensitive shipments"
  },
  {
    icon: Ship,
    title: "Marine Cargo Clearance",
    description: "Comprehensive marine cargo clearance and port handling services"
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "End-to-end logistics and transportation solutions across Uganda and beyond"
  },
  {
    icon: Calculator,
    title: "Tax Consultation & Advisory",
    description: "Expert tax consultation and advisory services for import/export operations"
  },
  {
    icon: Fuel,
    title: "Oil & Gas Handling",
    description: "Specialized services for oil and gas industry logistics and clearance"
  }
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <div className="h-1 w-16 bg-secondary mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-services-heading">
              Our Services
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive clearing, forwarding, and logistics solutions tailored to your business needs
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0"
                  >
                    <Card 
                      className="h-full p-6 hover-elevate active-elevate-2 transition-all duration-300 relative group"
                      data-testid={`card-service-${index}`}
                    >
                      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-background shadow-lg disabled:opacity-50"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            data-testid="button-prev-service"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-background shadow-lg disabled:opacity-50"
            onClick={scrollNext}
            disabled={!canScrollNext}
            data-testid="button-next-service"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: services.length }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`dot-${index}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ArrowRightLeft className="w-8 h-8" />
              <h3 className="text-2xl font-heading font-bold">Exports & Re-Exports</h3>
            </div>
            <p className="text-lg opacity-90">
              Complete export and re-export services with expert documentation and compliance support
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
