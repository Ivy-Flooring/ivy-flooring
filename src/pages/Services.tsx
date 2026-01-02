import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { PageHero, ServiceCard, CTASection } from "@/components/sections";
import { TreeDeciduous, Layers, Volume2, Footprints, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import galleryLiving from "@/assets/gallery-living.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryStairs from "@/assets/gallery-stairs.jpg";

const services = [
  {
    title: "Hardwood Flooring",
    description: "Classic solid hardwood installation with timeless beauty and exceptional durability. Choose from oak, maple, walnut, and more.",
    href: "/services/hardwood-flooring",
    icon: TreeDeciduous,
    image: galleryLiving,
  },
  {
    title: "Engineered Wood Flooring",
    description: "Versatile engineered wood that combines natural beauty with enhanced stability. Perfect for Tennessee's changing humidity.",
    href: "/services/engineered-wood-flooring",
    icon: Layers,
    image: galleryBedroom,
  },
  {
    title: "LVP / LVT / Laminate",
    description: "Modern wood-look flooring options that are waterproof, scratch-resistant, and budget-friendly without sacrificing style.",
    href: "/services/lvp-lvt-laminate",
    icon: Layers,
    image: galleryOffice,
  },
  {
    title: "Soundproof Flooring",
    description: "Specialized flooring solutions with acoustic underlayment for multi-level homes, condos, and noise-sensitive areas.",
    href: "/services/soundproof-flooring",
    icon: Volume2,
    image: galleryKitchen,
  },
  {
    title: "Stair Treads",
    description: "Custom stair tread and riser installation to match your floors and complete your home's cohesive look.",
    href: "/services/stair-treads",
    icon: Footprints,
    image: galleryStairs,
  },
];

const Services = () => {
  return (
    <Layout>
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

      {/* What We Don't Do */}
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

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Services;
