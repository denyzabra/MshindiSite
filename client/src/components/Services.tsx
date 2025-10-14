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
  ArrowRightLeft 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Customs Clearance & Documentation",
    description: "Complete customs clearance services with all necessary documentation handled professionally"
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
    description: "Professional assistance with tax exemption processes for eligible cargo"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 relative group"
                data-testid={`card-service-${index}`}
              >
                <div className="absolute top-0 left-6 right-6 h-1 bg-secondary"></div>
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
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
