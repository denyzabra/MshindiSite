import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import gallery1 from "@assets/stock_images/shipping_containers__3e8d9c6d.jpg";
import gallery2 from "@assets/stock_images/logistics_warehouse__f5f4997f.jpg";
import gallery3 from "@assets/stock_images/logistics_warehouse__f1e5eb41.jpg";
import gallery4 from "@assets/stock_images/logistics_warehouse__c1c69e33.jpg";
import gallery5 from "@assets/stock_images/freight_truck_transp_e7b24630.jpg";
import gallery6 from "@assets/stock_images/freight_truck_transp_d353431a.jpg";
import gallery7 from "@assets/stock_images/freight_truck_transp_cca23c83.jpg";

const galleryImages = [
  { id: 1, src: gallery1, title: "Container Port Operations", category: "Maritime" },
  { id: 2, src: gallery2, title: "Warehouse Management", category: "Warehousing" },
  { id: 3, src: gallery3, title: "Cargo Handling", category: "Logistics" },
  { id: 4, src: gallery4, title: "Distribution Center", category: "Warehousing" },
  { id: 5, src: gallery5, title: "Freight Transportation", category: "Transport" },
  { id: 6, src: gallery6, title: "Road Logistics", category: "Transport" },
  { id: 7, src: gallery7, title: "Cargo Delivery", category: "Logistics" },
];

const categories = ["All", "Maritime", "Warehousing", "Logistics", "Transport"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block">
            <div className="h-1 w-16 bg-secondary mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-gallery-heading">
              Our Gallery
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive logistics and clearing services through our project gallery
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="font-semibold"
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className="group overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all duration-300"
              onClick={() => setSelectedImage(image)}
              data-testid={`card-gallery-${image.id}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium text-secondary mb-1">{image.category}</p>
                    <h3 className="text-xl font-heading font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors p-2"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-6xl w-full max-h-[90vh] animate-in zoom-in-95 duration-300">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-sm font-medium text-secondary mb-2">{selectedImage.category}</p>
              <h3 className="text-2xl font-heading font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
