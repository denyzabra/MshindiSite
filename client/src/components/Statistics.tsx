import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Package, TrendingUp, Users, Globe } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function AnimatedStat({ icon, value, suffix = "", label, duration = 2 }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center group"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {count}{suffix}
      </div>
      <div className="text-base md:text-lg text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across Uganda and beyond for seamless customs clearance and logistics solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedStat
            icon={<TrendingUp className="w-8 h-8 md:w-10 md:h-10" />}
            value={15}
            suffix="+"
            label="Years of Excellence"
          />
          <AnimatedStat
            icon={<Package className="w-8 h-8 md:w-10 md:h-10" />}
            value={500}
            suffix="+"
            label="Shipments Cleared"
          />
          <AnimatedStat
            icon={<Users className="w-8 h-8 md:w-10 md:h-10" />}
            value={98}
            suffix="%"
            label="Client Satisfaction"
          />
          <AnimatedStat
            icon={<Globe className="w-8 h-8 md:w-10 md:h-10" />}
            value={25}
            suffix="+"
            label="Countries Served"
          />
        </div>
      </div>
    </section>
  );
}
