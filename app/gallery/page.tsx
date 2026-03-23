"use client";

import { useState } from "react";
import { PageHero, GalleryImage, CTASection } from "@/components/sections";
import { cn } from "@/lib/utils";

// Standard Asset Imports
import bedroomEngineered from "@/assets/bedroom-engineered-flooring-nashville-tn.jpg";
import engineeredBrentwood from "@/assets/Engineered_Wood_Flooring_Brentwood_TN.png";
import hardwoodFranklin from "@/assets/Hardwood_Flooring_Franklin_TN.jpg";
import hardwoodInstallation from "@/assets/Hardwood_Flooring_Installation_Nashville.jpg";
import hardwoodStairs from "@/assets/Hardwood_Stair_Treads_Nashville_TN.png";
import kitchenHardwood from "@/assets/kitchen-hardwood-flooring-nashville-tn.jpg";
import lvpNashville from "@/assets/LVP-flooring-nashville-tn.jpg";
import hardwoodNashvilleHero from "@/assets/Nashville_Hardwood_Flooring_Company.png";
import oakNashville from "@/assets/Oak_Hardwood_Flooring_Nashville_TN.png";
import soundproofNashville from "@/assets/Soundproof_flooring_Nashville_TN.png";

// Herringbone Asset Imports
import herringboneBrentwood2 from "@/assets/Herringbone_hardwood_Flooring_Brentwood_TN_2.jpg";
import herringboneBrentwood4 from "@/assets/Herringbone_hardwood_Flooring_Brentwood_TN_4.jpg";
import herringboneFranklin from "@/assets/Herringbone_hardwood_Flooring_Franklin_TN.jpg";
import herringboneKitchen4 from "@/assets/Herringbone_hardwood_Flooring_in_Kitchen_Nashville_TN_4.jpg";
import herringboneKitchen from "@/assets/Herringbone_hardwood_Flooring_in_Kitchen_Nashville_TN.jpg";
import herringboneNashville2 from "@/assets/Herringbone_hardwood_Flooring_Nashville_TN_2.jpg";
import herringboneNashville3 from "@/assets/Herringbone_hardwood_Flooring_Nashville_TN_3.jpg";
import herringboneNashville from "@/assets/Herringbone_hardwood_Flooring_Nashville_TN.jpg";

const categories = [
  "All", 
  "Hardwood Flooring", 
  "Engineered Flooring", 
  "LVP / LVT / Laminate", 
  "Soundproof Flooring", 
  "Stair Treads"
];

const galleryImages = [
  // Hardwood Category
  { src: oakNashville, alt: "Oak Hardwood Nashville", category: "Hardwood Flooring" },
  { src: hardwoodFranklin, alt: "Hardwood Flooring Franklin", category: "Hardwood Flooring" },
  { src: kitchenHardwood, alt: "Hardwood Kitchen Floor", category: "Hardwood Flooring" },
  { src: hardwoodInstallation, alt: "Hardwood Installation Process", category: "Hardwood Flooring" },
  { src: hardwoodNashvilleHero, alt: "Premium Hardwood Nashville", category: "Hardwood Flooring" },
  
  // Herringbone (Under Hardwood)
  { src: herringboneNashville, alt: "Herringbone Hardwood Nashville", category: "Hardwood Flooring" },
  { src: herringboneNashville2, alt: "Herringbone Pattern Entry", category: "Hardwood Flooring" },
  { src: herringboneNashville3, alt: "Herringbone Living Room", category: "Hardwood Flooring" },
  { src: herringboneKitchen, alt: "Herringbone Kitchen", category: "Hardwood Flooring" },
  { src: herringboneKitchen4, alt: "Detailed Herringbone Kitchen", category: "Hardwood Flooring" },
  { src: herringboneBrentwood2, alt: "Herringbone Flooring Brentwood", category: "Hardwood Flooring" },
  { src: herringboneBrentwood4, alt: "Herringbone Installation Brentwood", category: "Hardwood Flooring" },
  { src: herringboneFranklin, alt: "Herringbone Hardwood Franklin", category: "Hardwood Flooring" },

  // Engineered Category
  { src: engineeredBrentwood, alt: "Engineered Wood Brentwood", category: "Engineered Flooring" },
  { src: bedroomEngineered, alt: "Engineered Bedroom Floor", category: "Engineered Flooring" },
  
  // LVP / LVT
  { src: lvpNashville, alt: "Luxury Vinyl Plank Nashville", category: "LVP / LVT / Laminate" },
  
  // Specialized
  { src: hardwoodStairs, alt: "Custom Hardwood Stairs", category: "Stair Treads" },
  { src: soundproofNashville, alt: "Soundproof Flooring Nashville", category: "Soundproof Flooring" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHero 
        title="Our Work" 
        description="Browse our portfolio of completed flooring projects across Middle Tennessee."
        breadcrumb="Gallery"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  activeCategory === category
                    ? "bg-[#2d4a3e] text-white border-[#2d4a3e] shadow-md" 
                    : "bg-secondary/50 text-secondary-foreground border-transparent hover:border-[#2d4a3e]/30"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-secondary/20">
                <GalleryImage 
                  src={image.src.src} 
                  alt={image.alt} 
                  category={image.category} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}