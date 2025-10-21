import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Teams from "@/components/Teams";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Services />
      <Gallery />
      <Teams />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
