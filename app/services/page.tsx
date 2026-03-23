"use client";

import Link from "next/link";
import { PageHero, ServiceCard, CTASection } from "@/components/sections";
import { TreeDeciduous, Layers, Volume2, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";

// Updated Asset Imports with your exact Nashville filenames
import serviceHardwood from "@/assets/Oak_Hardwood_Flooring_Nashville_TN.png";
import serviceEngineered from "@/assets/Engineered_Wood_Flooring_Brentwood_TN.png";
import serviceLVP from "@/assets/LVP-flooring-nashville-tn.jpg";
import serviceSoundproof from "@/assets/Soundproof_flooring_Nashville_TN.png";
import serviceStairs from "@/assets/Hardwood_Stair_Treads_Nashville_TN.png";

const services = [
  {
    title: "Hardwood Flooring",
    description: "Classic solid hardwood installation with timeless beauty and exceptional durability. Choose from oak, maple, walnut, and more.",
    href: "/services/hardwood-flooring",
    icon: TreeDeciduous,
    image: serviceHardwood.src,
  },
  {
    title: "Engineered Wood Flooring",
    description: "Versatile engineered wood that combines natural beauty with enhanced stability. Perfect for Tennessee's changing humidity.",
    href: "/services/engineered-wood-flooring",
    icon: Layers,
    image: serviceEngineered.src,
  },
  {
    title: "LVP / LVT / Laminate",
    description: "Modern wood-look flooring options that are waterproof, scratch-resistant, and budget-friendly without sacrificing style.",
    href: "/services/lvp-lvt-laminate",
    icon: Layers,
    image: serviceLVP.src,
  },
  {
    title: "Soundproof Flooring",
    description: "Specialized flooring solutions with acoustic underlayment for multi-level homes, condos, and noise-sensitive areas.",
    href: "/services/soundproof-flooring",
    icon: Volume2,
    image: serviceSoundproof.src,
  },
  {
    title: "Stair Treads",
    description: "Custom stair tread and riser installation to match your floors and complete your home's cohesive look.",
    href: "/services/stair-treads",
    icon: Footprints,
    image: serviceStairs.src,
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        title="Our Flooring Services"
        description="We specialize exclusively in hardwood and wood-like flooring. This focused expertise means better quality, faster service, and floors that stand the test of time."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
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

      {/* What We Don't Do Section */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">What We Don't Do</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We believe in focused expertise. That's why we don't offer carpet, tile, 
              or trim-only services. By specializing in hardwood and wood-like flooring, 
              we can deliver exceptional results every time.
            </p>
            <p className="text-muted-foreground">
              If you need carpet or tile work, we're happy to recommend trusted partners 
              in the Middle Tennessee area.
            </p>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready for Beautiful New Floors?"
        description="Request your free digital estimate today and see why Nashville homeowners trust Ivy Flooring."
      />
    </>
  );
};

export default Services;