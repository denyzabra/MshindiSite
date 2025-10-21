import { Shield, Globe, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

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
    title: "Quality Service",
    description: "Expert team dedicated to making your logistics seamless and stress-free"
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-16 bg-secondary mb-4"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-about-heading">
              About Mshindi Enterprises
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mshindi Enterprises Limited is a clearing and forwarding company based in Uganda. 
            We specialize in providing comprehensive logistics solutions, customs clearance, import/export management, 
            warehousing, and transportation services to businesses across various industries.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-3xl mx-auto"
          >
            <p className="text-base text-muted-foreground/90 italic border-l-4 border-primary pl-4 py-2">
              We are affiliated under the umbrella of Uganda Clearing Industry and Forwarding Association (UCIFA) 
              which is the Apex body of all indigenous clearing and forwarding firms in Uganda with Companies 
              Licensed by Uganda Revenue Authority.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 hover-elevate active-elevate-2 transition-all duration-300 relative h-full"
                  data-testid={`card-feature-${index}`}
                >
                <div className="absolute top-0 left-6 right-6 h-1 bg-secondary"></div>
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
