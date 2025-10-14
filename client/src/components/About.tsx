import { Shield, Globe, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Years of experience in clearing and forwarding services across Uganda"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Handling international imports, exports, and diplomatic cargo with expertise"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient customs clearance and documentation for timely deliveries"
  },
  {
    icon: Award,
    title: "Professional Service",
    description: "Expert team dedicated to making your logistics seamless and stress-free"
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block">
            <div className="h-1 w-16 bg-secondary mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-about-heading">
              About Mshindi Enterprises
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mshindi Enterprises Limited is a professional clearing and forwarding company based in Uganda. 
            We specialize in providing comprehensive logistics solutions, customs clearance, import/export management, 
            warehousing, and transportation services to businesses across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 relative"
                data-testid={`card-feature-${index}`}
              >
                <div className="absolute top-0 left-6 right-6 h-1 bg-secondary"></div>
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
