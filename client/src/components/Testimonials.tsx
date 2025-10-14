import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Nakato",
    company: "East African Traders Ltd",
    role: "Import Manager",
    rating: 5,
    text: "MSHINDI Enterprises has transformed our import process. Their expertise in customs clearance saved us both time and money. Highly professional team!",
  },
  {
    id: 2,
    name: "David Okello",
    company: "Global Logistics Uganda",
    role: "Operations Director",
    rating: 5,
    text: "Outstanding service! They handled our complex machinery imports with precision. The team's knowledge of customs regulations is exceptional.",
  },
  {
    id: 3,
    name: "Grace Mutesi",
    company: "Prime Exports Co.",
    role: "CEO",
    rating: 5,
    text: "We've worked with several clearing agents, but MSHINDI stands out. Their attention to detail and quick turnaround times are impressive.",
  },
  {
    id: 4,
    name: "John Sempala",
    company: "Kampala Manufacturing",
    role: "Supply Chain Manager",
    rating: 5,
    text: "Reliable, efficient, and always available. MSHINDI Enterprises has been our go-to partner for all customs clearance needs for over 5 years.",
  },
  {
    id: 5,
    name: "Patricia Nambooze",
    company: "Delta Freight Services",
    role: "Logistics Coordinator",
    rating: 5,
    text: "Their warehousing and cargo handling services are top-notch. The team goes above and beyond to ensure our shipments are processed smoothly.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" data-testid="testimonial-rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-secondary text-secondary" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across Uganda for exceptional clearing and forwarding services
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  data-testid={`testimonial-${testimonial.id}`}
                >
                  <div className="bg-card rounded-lg p-6 md:p-8 h-full border border-border shadow-sm hover:shadow-md transition-shadow">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <StarRating rating={testimonial.rating} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4">
            <Button
              onClick={scrollPrev}
              size="icon"
              variant="secondary"
              className="pointer-events-auto shadow-lg"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={scrollNext}
              size="icon"
              variant="secondary"
              className="pointer-events-auto shadow-lg"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`dot-testimonial-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
