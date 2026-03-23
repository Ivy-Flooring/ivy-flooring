"use client";

import { useParams } from "next/navigation";
import { PageHero, FAQSection, CTASection, ProcessSection } from "@/components/sections";
import { TreeDeciduous, Layers, Volume2, Footprints, CheckCircle } from "lucide-react";

import hardwoodImg from "@/assets/Oak_Hardwood_Flooring_Nashville_TN.png";
import engineeredImg from "@/assets/Engineered_Wood_Flooring_Brentwood_TN.png";
import lvpImg from "@/assets/LVP-flooring-nashville-tn.jpg";
import soundproofImg from "@/assets/Soundproof_flooring_Nashville_TN.png";
import stairsImg from "@/assets/Hardwood_Stair_Treads_Nashville_TN.png";

const serviceData: Record<string, any> = {
  "hardwood-flooring": {
    title: "Hardwood Flooring",
    description: "Classic solid hardwood installation for your Nashville home.",
    icon: TreeDeciduous,
    image: hardwoodImg,
    benefits: ["Timeless beauty", "Increases home value", "Eco-friendly"],
    faqs: [{ question: "How long does it last?", answer: "100+ years with care." }]
  },
  "engineered-wood-flooring": {
    title: "Engineered Wood",
    description: "Stable and beautiful flooring for Tennessee's humidity.",
    icon: Layers,
    image: engineeredImg,
    benefits: ["Real wood top layer", "Humidity stable", "Faster install"],
    faqs: [{ question: "Can it be refinished?", answer: "Yes, usually 1-2 times." }]
  },
  "lvp-lvt-laminate": {
    title: "LVP / LVT / Laminate",
    description: "Waterproof and durable flooring for active households.",
    icon: Layers,
    image: lvpImg,
    benefits: ["100% Waterproof", "Scratch resistant", "Budget friendly"],
    faqs: [{ question: "Is it pet friendly?", answer: "Yes, it is the best option for pets." }]
  },
  "soundproof-flooring": {
    title: "Soundproof Flooring",
    description: "Acoustic solutions for multi-level homes and condos.",
    icon: Volume2,
    image: soundproofImg,
    benefits: ["Noise reduction", "HOA compliant", "Extra comfort"],
    faqs: [{ question: "What is the rating?", answer: "We meet IIC 50+ requirements." }]
  },
  "stair-treads": {
    title: "Stair Treads",
    description: "Custom stair treads to match your new Nashville floors.",
    icon: Footprints,
    image: stairsImg,
    benefits: ["Seamless match", "Improved safety", "Visual impact"],
    faqs: [{ question: "Can you match existing floors?", answer: "Yes, we custom stain." }]
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = serviceData[slug] || serviceData["hardwood-flooring"];

  return (
    <>
      <PageHero title={service.title} description={service.description} breadcrumb="Services" image={service.image.src} icon={service.icon} />
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-6">Why Choose {service.title}?</h2>
            <ul className="space-y-4">
              {service.benefits.map((b: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={service.image.src} alt={service.title} className="rounded-lg shadow-xl" />
        </div>
      </section>
      <ProcessSection />
      <FAQSection faqs={service.faqs} />
      <CTASection />
    </>
  );
}