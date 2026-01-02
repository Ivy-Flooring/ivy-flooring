import { Link } from "react-router-dom";
import { PageHero, CTASection } from "@/components/sections";
import { MapPin, ArrowRight } from "lucide-react";

const serviceAreas = [
  {
    name: "Nashville",
    slug: "nashville-tn",
    description: "Serving Nashville and surrounding neighborhoods with premium flooring installation.",
  },
  {
    name: "Franklin",
    slug: "franklin-tn",
    description: "Quality flooring solutions for Franklin's historic and modern homes alike.",
  },
  {
    name: "Brentwood",
    slug: "brentwood-tn",
    description: "Elegant flooring installations for Brentwood's upscale residential properties.",
  },
  {
    name: "Mount Juliet",
    slug: "mount-juliet-tn",
    description: "Professional flooring services for Mount Juliet's growing community.",
  },
  {
    name: "Murfreesboro",
    slug: "murfreesboro-tn",
    description: "Expert hardwood and wood-like flooring throughout Murfreesboro.",
  },
];

const ServiceAreas = () => {
  return (
    <>
      <PageHero
        title="Service Areas"
        description="Ivy Flooring proudly serves homeowners throughout Middle Tennessee. Find flooring services near you."
        breadcrumb="Service Areas"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Serving All of Middle Tennessee</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Nashville to the surrounding suburbs, we bring our expertise in hardwood 
              and wood-like flooring to homeowners across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group bg-card rounded-lg p-6 shadow-md border border-border card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {area.name}, TN
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {area.description}
                    </p>
                    <span className="flex items-center text-primary font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center bg-secondary rounded-lg p-8">
            <h3 className="text-xl font-heading font-semibold mb-4">Don't See Your City?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We serve all of Middle Tennessee. If your city isn't listed, we likely 
              still service your area. Contact us to confirm.
            </p>
            <Link to="/contact">
              <span className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                Contact Us to Confirm Your Area
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceAreas;
