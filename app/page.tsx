"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrustBar, ProcessSection, ServiceCard, ReviewCard, GalleryImage, CTASection } from "@/components/sections";
import { Phone, TreeDeciduous, Layers, Volume2, Footprints, ArrowRight, CheckCircle } from "lucide-react";

// Local Asset Imports
import heroImage from "@/assets/Nashville_Hardwood_Flooring_Company.png";
import ivyFamily from "@/assets/ivy-family.jpg"; 
import serviceHardwood from "@/assets/Oak_Hardwood_Flooring_Nashville_TN.png";
import serviceEngineered from "@/assets/Engineered_Wood_Flooring_Brentwood_TN.png";
import serviceLVP from "@/assets/LVP-flooring-nashville-tn.jpg";
import serviceSoundproof from "@/assets/Soundproof_flooring_Nashville_TN.png";
import serviceStairs from "@/assets/Hardwood_Stair_Treads_Nashville_TN.png";

// Gallery Imports
import galleryKitchen from "@/assets/kitchen-hardwood-flooring-nashville-tn.jpg";
import galleryBedroom from "@/assets/bedroom-engineered-flooring-nashville-tn.jpg";

const services = [
  {
    title: "Hardwood Flooring",
    description: "Classic solid hardwood installation with timeless beauty and exceptional durability for your home.",
    href: "/services/hardwood-flooring",
    icon: TreeDeciduous,
    image: serviceHardwood.src,
  },
  {
    title: "Engineered Wood",
    description: "Versatile engineered wood that combines natural beauty with enhanced stability.",
    href: "/services/engineered-wood-flooring",
    icon: Layers,
    image: serviceEngineered.src,
  },
  {
    title: "LVP / LVT / Laminate",
    description: "Modern wood-look flooring options that are waterproof, durable, and budget-friendly.",
    href: "/services/lvp-lvt-laminate",
    icon: Layers,
    image: serviceLVP.src,
  },
  {
    title: "Soundproof Flooring",
    description: "Specialized flooring solutions for multi-level homes, condos, and noise-sensitive areas.",
    href: "/services/soundproof-flooring",
    icon: Volume2,
    image: serviceSoundproof.src,
  },
  {
    title: "Stair Treads",
    description: "Custom stair tread installation to match your floors and complete your home's look.",
    href: "/services/stair-treads",
    icon: Footprints,
    image: serviceStairs.src,
  },
];

const reviews = [
  {
    name: "Justin Born",
    location: "Nashville, TN",
    rating: 5,
    text: "Ivy Flooring for absolutely crushing it and bringing these 60-year-old hardwoods back to life!",
  },
  {
    name: "Billy Richards",
    location: "Portland, TN",
    rating: 5,
    text: "Ivy Flooring added the perfect finishing touch to a breathtaking natural white oak flooring, revealing a brighter, more refined look that unlocks the space's full potential of beauty.",
  },
];

// FIXED: Added .src to all imports so the image path is passed, not the whole object
const galleryImages = [
  { src: serviceHardwood.src, alt: "Modern living room with dark hardwood floors", category: "Hardwood" },
  { src: galleryKitchen.src, alt: "Kitchen with light oak flooring", category: "Kitchen" },
  { src: serviceEngineered.src, alt: "Bedroom with warm hardwood floors", category: "Engineered" },
  { src: serviceStairs.src, alt: "Custom stair treads", category: "Stairs" },
  { src: serviceLVP.src, alt: "Home office with LVP flooring", category: "LVP" },
  { src: galleryBedroom.src, alt: "Herringbone pattern entryway", category: "Bedroom" },
];

const whyIvyPoints = [
  "Hardwood & wood-like flooring specialists—no carpet, no tile",
  "Same-day or next-day digital estimates",
  "Clear communication throughout your project",
  "Accountability through project completion",
  "Licensed, insured, and family-owned",
  "Products we'd install in our own home",
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center -mt-20 overflow-hidden">
        <div
          className="absolute -top-20 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${heroImage.src}")`,
            transform: `translateY(${scrollY * 0.3}px) scale(1.15)`,
            transformOrigin: 'center top',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Middle Tennessee's Hardwood Specialists
            </span>
            <h1 className="text-primary-foreground mb-6 text-5xl md:text-7xl font-bold">
              Beautiful Floors You'll Love Coming Home To
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Precise estimates. Expert installation. Accountability from start to finish.
              Experience flooring done right by a team that treats your home like our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+16157756949" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (615) 775-6949
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="mt-2 mb-4">Our Flooring Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize exclusively in hardwood and wood-like flooring for better quality and faster service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="mt-2 mb-6">The Ivy Flooring Difference</h2>
              <ul className="space-y-4">
                {whyIvyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src={ivyFamily.src} 
                alt="The Ivy Flooring Family" 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-4xl font-heading font-bold">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Project Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A look at our recent work across Nashville and Middle Tennessee.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* FIXED: slice(0, 6) limits to only the first 6 photos */}
            {galleryImages.slice(0, 6).map((image, index) => (
              <GalleryImage key={index} {...image} />
            ))}
          </div>

          {/* NEW: Link to full gallery */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="xl" asChild>
              <Link href="/gallery" className="flex items-center gap-2">
                View Full Gallery <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;