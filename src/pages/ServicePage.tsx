import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { PageHero, FAQSection, CTASection, ProcessSection } from "@/components/sections";
import { TreeDeciduous, Layers, Volume2, Footprints, CheckCircle } from "lucide-react";

import galleryLiving from "@/assets/gallery-living.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryStairs from "@/assets/gallery-stairs.jpg";

const serviceData: Record<string, {
  title: string;
  description: string;
  icon: typeof TreeDeciduous;
  image: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}> = {
  "hardwood-flooring": {
    title: "Hardwood Flooring",
    description: "Classic solid hardwood installation with timeless beauty and exceptional durability. Transform your home with the warmth and elegance of real wood floors.",
    icon: TreeDeciduous,
    image: galleryLiving,
    benefits: [
      "Timeless beauty that never goes out of style",
      "Exceptional durability—can be refinished multiple times",
      "Increases home value",
      "Wide variety of wood species and stains",
      "Natural and eco-friendly material",
    ],
    faqs: [
      { question: "How long does hardwood flooring last?", answer: "With proper care, solid hardwood floors can last 100+ years. They can be sanded and refinished multiple times throughout their lifespan." },
      { question: "Is hardwood flooring suitable for Tennessee's climate?", answer: "Yes, when properly installed with appropriate acclimation. We ensure your hardwood adapts to Middle Tennessee's humidity levels before installation." },
      { question: "How long does installation take?", answer: "Most rooms can be completed in 1-2 days. A typical whole-home installation takes 3-5 days depending on the size and complexity." },
    ],
  },
  "engineered-wood-flooring": {
    title: "Engineered Wood Flooring",
    description: "Versatile engineered wood that combines natural beauty with enhanced stability. Perfect for areas where solid hardwood may not be ideal.",
    icon: Layers,
    image: galleryBedroom,
    benefits: [
      "Real wood top layer with beautiful grain",
      "More stable in humid conditions",
      "Can be installed over concrete",
      "Often more affordable than solid hardwood",
      "Faster installation process",
    ],
    faqs: [
      { question: "What's the difference between engineered and solid hardwood?", answer: "Engineered wood has a real hardwood top layer bonded to plywood layers beneath. This construction makes it more stable in varying humidity and allows installation over concrete." },
      { question: "Can engineered wood be refinished?", answer: "Yes, depending on the thickness of the top wear layer. Most quality engineered floors can be refinished 1-3 times." },
      { question: "Is engineered wood good for basements?", answer: "Yes! Engineered wood is an excellent choice for basements because of its stability and ability to be installed over concrete." },
    ],
  },
  "lvp-lvt-laminate": {
    title: "LVP / LVT / Laminate",
    description: "Modern wood-look flooring that's waterproof, scratch-resistant, and budget-friendly. Perfect for active households and moisture-prone areas.",
    icon: Layers,
    image: galleryOffice,
    benefits: [
      "100% waterproof options available",
      "Extremely durable and scratch-resistant",
      "Budget-friendly alternative to hardwood",
      "Easy to clean and maintain",
      "Wide variety of realistic wood looks",
    ],
    faqs: [
      { question: "What's the difference between LVP, LVT, and laminate?", answer: "LVP (Luxury Vinyl Plank) and LVT (Luxury Vinyl Tile) are waterproof vinyl products. Laminate has a wood fiber core with a printed design layer and is water-resistant but not waterproof." },
      { question: "Is LVP good for pets?", answer: "Absolutely! LVP is one of the best flooring options for pet owners—it's scratch-resistant, waterproof, and easy to clean." },
      { question: "How realistic does LVP look?", answer: "Today's premium LVP products are remarkably realistic, with textured surfaces that mimic real wood grain. Many visitors can't tell the difference." },
    ],
  },
  "soundproof-flooring": {
    title: "Soundproof Flooring",
    description: "Specialized flooring solutions with acoustic underlayment for multi-level homes, condos, and noise-sensitive areas.",
    icon: Volume2,
    image: galleryKitchen,
    benefits: [
      "Reduces impact noise between floors",
      "Meets condo and HOA requirements",
      "Improves comfort underfoot",
      "Various flooring options available",
      "Professional acoustic testing available",
    ],
    faqs: [
      { question: "What IIC and STC ratings do you achieve?", answer: "We install systems that meet or exceed typical condo requirements of IIC 50+ and STC 50+. We can recommend specific products based on your building's requirements." },
      { question: "Can you soundproof under any flooring type?", answer: "Yes, we install acoustic underlayment systems under hardwood, engineered wood, LVP, and laminate flooring." },
      { question: "Will soundproof flooring feel different?", answer: "Quality acoustic underlayment actually improves comfort, making floors feel slightly softer and warmer underfoot." },
    ],
  },
  "stair-treads": {
    title: "Stair Treads",
    description: "Custom stair tread and riser installation to match your floors and complete your home's cohesive, elegant look.",
    icon: Footprints,
    image: galleryStairs,
    benefits: [
      "Matches your new or existing floors",
      "Increases home safety",
      "Dramatic visual impact",
      "Custom nosing profiles available",
      "Professional, seamless finish",
    ],
    faqs: [
      { question: "Can you match stair treads to my existing floors?", answer: "Yes! We source matching materials or can custom-stain treads to match your current flooring as closely as possible." },
      { question: "Do you install on carpeted stairs?", answer: "Absolutely. We remove existing carpet and install beautiful hardwood or wood-look treads for a complete transformation." },
      { question: "What about the landing?", answer: "We handle full staircase installations including landings, treads, risers, and transitions to match your flooring throughout." },
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""] || serviceData["hardwood-flooring"];

  return (
    <Layout>
      <PageHero
        title={service.title}
        description={service.description}
        breadcrumb="Services"
        image={service.image}
        icon={service.icon}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="mb-6">Why Choose {service.title}?</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src={service.image} alt={service.title} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection faqs={service.faqs} subtitle={`Common questions about ${service.title.toLowerCase()}`} />
      <CTASection />
    </Layout>
  );
};

export default ServicePage;
