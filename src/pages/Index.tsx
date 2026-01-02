import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrustBar, ProcessSection, ServiceCard, ReviewCard, GalleryImage, CTASection } from "@/components/sections";
import { Phone, TreeDeciduous, Layers, Volume2, Footprints, ArrowRight, CheckCircle } from "lucide-react";

import heroImage from "@/assets/hero-living-room.jpg";
import craftsmanImage from "@/assets/craftsman-installing.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import galleryStairs from "@/assets/gallery-stairs.jpg";
import galleryOffice from "@/assets/gallery-office.jpg";
import galleryEntryway from "@/assets/gallery-entryway.jpg";

const services = [
  {
    title: "Hardwood Flooring",
    description: "Classic solid hardwood installation with timeless beauty and exceptional durability for your home.",
    href: "/services/hardwood-flooring",
    icon: TreeDeciduous,
    image: galleryLiving,
  },
  {
    title: "Engineered Wood",
    description: "Versatile engineered wood that combines natural beauty with enhanced stability.",
    href: "/services/engineered-wood-flooring",
    icon: Layers,
    image: galleryBedroom,
  },
  {
    title: "LVP / LVT / Laminate",
    description: "Modern wood-look flooring options that are waterproof, durable, and budget-friendly.",
    href: "/services/lvp-lvt-laminate",
    icon: Layers,
    image: galleryOffice,
  },
  {
    title: "Soundproof Flooring",
    description: "Specialized flooring solutions for multi-level homes, condos, and noise-sensitive areas.",
    href: "/services/soundproof-flooring",
    icon: Volume2,
    image: galleryKitchen,
  },
  {
    title: "Stair Treads",
    description: "Custom stair tread installation to match your floors and complete your home's look.",
    href: "/services/stair-treads",
    icon: Footprints,
    image: galleryStairs,
  },
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Nashville, TN",
    rating: 5,
    text: "Ivy Flooring transformed our entire first floor. The attention to detail was incredible, and the team was so respectful of our home. Highly recommend!",
    date: "December 2025",
  },
  {
    name: "Michael & Lisa T.",
    location: "Franklin, TN",
    rating: 5,
    text: "From the first estimate to the final walkthrough, the process was seamless. Our new hardwood floors are absolutely stunning.",
    date: "November 2025",
  },
  {
    name: "David R.",
    location: "Brentwood, TN",
    rating: 5,
    text: "Professional, punctual, and the quality of work exceeded our expectations. The team made sure everything was perfect before they left.",
    date: "October 2025",
  },
];

const galleryImages = [
  { src: galleryLiving, alt: "Modern living room with dark hardwood floors", category: "Living Room" },
  { src: galleryKitchen, alt: "Kitchen with light oak flooring", category: "Kitchen" },
  { src: galleryBedroom, alt: "Bedroom with warm hardwood floors", category: "Bedroom" },
  { src: galleryStairs, alt: "Custom stair treads", category: "Stairs" },
  { src: galleryOffice, alt: "Home office with LVP flooring", category: "Office" },
  { src: galleryEntryway, alt: "Herringbone pattern entryway", category: "Entryway" },
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
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center -mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Middle Tennessee's Hardwood Specialists
            </span>
            <h1 className="text-primary-foreground mb-6">
              Beautiful Floors You'll Love Coming Home To
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Precise estimates. Expert installation. Accountability from start to finish. 
              Experience flooring done right by a team that treats your home like our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+16155551234" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (615) 555-1234
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-2 mb-4">Our Flooring Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize exclusively in hardwood and wood-like flooring. 
              This focused expertise means better quality, faster service, and floors that last.
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Ivy Flooring */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-2 mb-6">The Ivy Flooring Difference</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We're not the cheapest option, and we're not trying to be. We're the flooring 
                company you'd confidently invite into your home—professional, accountable, 
                and committed to doing the job right.
              </p>
              <ul className="space-y-4">
                {whyIvyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={craftsmanImage}
                alt="Ivy Flooring craftsman installing hardwood"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-4xl font-heading font-bold">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-2 mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what homeowners across 
              Middle Tennessee have to say about working with Ivy Flooring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews" className="flex items-center gap-2">
                Read More Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="mt-2 mb-4">Project Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our portfolio of completed projects to see the quality and 
              craftsmanship we bring to every flooring installation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage key={index} {...image} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery" className="flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
};

export default Index;
