import { PageHero, GalleryImage, CTASection } from "@/components/sections";
import { useState } from "react";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import galleryStairs from "@/assets/gallery-stairs.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryEntryway from "@/assets/gallery-entryway.jpg";

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Stairs", "Office", "Entryway"];

const galleryImages = [
  { src: galleryLiving, alt: "Modern living room with dark hardwood floors", category: "Living Room" },
  { src: galleryKitchen, alt: "Kitchen with light oak flooring", category: "Kitchen" },
  { src: galleryBedroom, alt: "Bedroom with warm hardwood floors", category: "Bedroom" },
  { src: galleryStairs, alt: "Custom stair treads", category: "Stairs" },
  { src: galleryOffice, alt: "Home office with LVP flooring", category: "Office" },
  { src: galleryEntryway, alt: "Herringbone pattern entryway", category: "Entryway" },
  // Duplicate some for a fuller gallery
  { src: galleryBedroom, alt: "Master bedroom hardwood installation", category: "Bedroom" },
  { src: galleryLiving, alt: "Open concept living area", category: "Living Room" },
  { src: galleryKitchen, alt: "Modern kitchen flooring", category: "Kitchen" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Work"
        description="Browse our portfolio of completed flooring projects across Middle Tennessee. Every project showcases our commitment to quality and craftsmanship."
        breadcrumb="Gallery"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryImage key={index} {...image} />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Love What You See?"
        description="Let's create something beautiful for your home. Request a free quote today."
      />
    </>
  );
};

export default Gallery;
