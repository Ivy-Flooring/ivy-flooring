"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { PageHero, CTASection, TrustBar } from "@/components/sections";
import { CheckCircle, ArrowRight } from "lucide-react";

const locationData: Record<string, { name: string; description: string }> = {
  "nashville-tn": { name: "Nashville", description: "Serving Nashville's diverse neighborhoods with premium hardwood and wood-like flooring solutions." },
  "franklin-tn": { name: "Franklin", description: "Quality flooring installations for Franklin's historic charm and modern developments." },
  "brentwood-tn": { name: "Brentwood", description: "Elegant flooring solutions for Brentwood's upscale homes and discerning homeowners." },
  "mount-juliet-tn": { name: "Mount Juliet", description: "Professional flooring services for Mount Juliet's growing residential community." },
  "murfreesboro-tn": { name: "Murfreesboro", description: "Expert hardwood specialists serving Murfreesboro families and homeowners." },
  "hendersonville-tn": { name: "Hendersonville", description: "Premium hardwood flooring for Hendersonville's beautiful lakeside homes and neighborhoods." },
  "lebanon-tn": { name: "Lebanon", description: "Quality flooring installations for Lebanon's growing community and new home developments." },
  "gallatin-tn": { name: "Gallatin", description: "Expert flooring solutions for Gallatin homeowners throughout Sumner County." },
  "springfield-tn": { name: "Springfield", description: "Professional hardwood flooring services for Springfield and Robertson County residents." },
  "kingston-springs-tn": { name: "Kingston Springs", description: "Quality flooring installations for Kingston Springs' scenic and charming community." },
};

const services = [
  { name: "Hardwood Flooring", href: "/services/hardwood-flooring" },
  { name: "Engineered Wood Flooring", href: "/services/engineered-wood-flooring" },
  { name: "LVP / LVT / Laminate", href: "/services/lvp-lvt-laminate" },
  { name: "Soundproof Flooring", href: "/services/soundproof-flooring" },
  { name: "Stair Treads", href: "/services/stair-treads" },
];

const LocationPage = () => {
  const { slug } = useParams() as { slug: string };
  const location = locationData[slug || ""] || { name: "Middle Tennessee", description: "Premium flooring services throughout the region." };

  return (
    <>
      <PageHero
        title={`Flooring Services in ${location.name}, TN`}
        description={location.description}
        breadcrumb="Service Areas"
      />
      <TrustBar />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Hardwood Flooring Specialists in {location.name}</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Ivy Flooring brings professional hardwood and wood-like flooring installation
              to {location.name} homeowners. We specialize in precision estimates, expert
              installation, and accountability from start to finish.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-4">Services We Offer in {location.name}</h3>
            <ul className="space-y-3 mb-8">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection title={`Ready to Transform Your ${location.name} Home?`} />
    </>
  );
};

export default LocationPage;
