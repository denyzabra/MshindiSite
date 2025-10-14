import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Package } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "Kira Municipality, Namanve - Wakiso, Uganda",
    link: "https://maps.google.com/?q=Namanve,Wakiso,Uganda"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+256 756 504 958",
    link: "tel:+256756504958"
  },
  {
    icon: Mail,
    title: "Email",
    content: "mshindienterprisescoltd@gmail.com",
    link: "mailto:mshindienterprisescoltd@gmail.com"
  }
];

const services = [
  "Customs Clearance & Documentation",
  "Project Cargo & Handling",
  "Imports & Exports Clearance",
  "Warehousing & Transit Cargo",
  "Machinery Clearance",
  "Tax Exemptions",
  "Government & Diplomatic Cargo",
  "Air Cargo Clearance",
  "Marine Cargo Clearance",
  "Logistics & Transportation",
  "Tax Consultation",
  "Oil & Gas Handling"
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
      company: undefined,
      service: undefined,
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-contact-heading">
              Get In Touch
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Reach out for quotes, inquiries, or any clearing and forwarding assistance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 md:p-8">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="contact" data-testid="tab-contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </TabsTrigger>
                  <TabsTrigger value="quote" data-testid="tab-quote">
                    <Package className="w-4 h-4 mr-2" />
                    Request a Quote
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="contact">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Thank you for reaching out!</h4>
                      <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} data-testid="input-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+256 700 000 000" {...field} value={field.value || ""} data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Company" {...field} value={field.value || ""} data-testid="input-company" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interested In</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value || undefined}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your requirements..."
                                  className="min-h-[120px] resize-none"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full md:w-auto px-8"
                          disabled={mutation.isPending}
                          data-testid="button-submit"
                        >
                          {mutation.isPending ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </TabsContent>

                <TabsContent value="quote">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Quote request received!</h4>
                      <p className="text-muted-foreground">We'll review your cargo details and get back to you shortly.</p>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} data-testid="input-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@company.com" {...field} data-testid="input-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="+256 700 000 000" {...field} value={field.value || ""} data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company name" {...field} value={field.value || ""} data-testid="input-company" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Required</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value || undefined}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service">
                                    <SelectValue placeholder="Select the service you need" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cargo Details *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please include: Cargo type, weight, dimensions, origin, destination, and any special requirements..."
                                  className="min-h-[120px] resize-none"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full md:w-auto px-8"
                          disabled={mutation.isPending}
                          data-testid="button-submit"
                        >
                          {mutation.isPending ? "Sending..." : "Request Quote"}
                        </Button>
                      </form>
                    </Form>
                  )}
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 bg-primary text-primary-foreground" data-testid={`card-contact-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="hover:text-secondary transition-colors"
                        target={info.icon === MapPin ? "_blank" : undefined}
                        rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                        data-testid={`link-contact-${index}`}
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7591!2d32.6661!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnNTEuNCJOIDMywrAzOSc1OC4wIkU!5e0!3m2!1sen!2sug!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mshindi Enterprises Location"
              data-testid="map-location"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
