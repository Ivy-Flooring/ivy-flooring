import { PageHero, CTASection, ProcessSection } from "@/components/sections";
import { CheckCircle, Heart, Target, Users } from "lucide-react";

import ivyFamilyImage from "@/assets/ivy-family.jpg";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Professional digital measurements and accurate estimates. No surprises, no hidden costs.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "We own every project from start to finish. Issues are addressed, never avoided.",
  },
  {
    icon: Heart,
    title: "Family Standards",
    description: "We use products safe enough for our own homes and treat your space with respect.",
  },
  {
    icon: Users,
    title: "Trust",
    description: "Clear communication throughout every project. One point of contact, one point of responsibility.",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Ivy Flooring"
        description="Middle Tennessee's trusted hardwood and wood-like flooring specialists. Built on relationships, referrals, and a commitment to doing things right."
        breadcrumb="About Us"
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-2 mb-6">Built on Family Values</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ivy Flooring was born from a simple belief: homeowners deserve a flooring 
                  company they can trust. One that shows up when they say they will, gives 
                  honest estimates, and stays until the job is done right.
                </p>
                <p>
                  Named after the owner's daughter, Ivy represents everything we stand for—growth, 
                  durability, and building something that lasts. It's a reminder that every 
                  floor we install goes into someone's home, someone's family space.
                </p>
                <p>
                  We've grown through word-of-mouth, referrals, and repeat customers. Not 
                  through aggressive marketing or being the cheapest option. Our reputation 
                  is built on the work we do and the relationships we build.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={ivyFamilyImage}
                alt="Ivy Flooring owner with daughter Ivy"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="mt-2 mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They guide every decision we make, 
              every project we take on, and every customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-md border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Focus
            </span>
            <h2 className="mt-2 mb-6">Specialists, Not Generalists</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize exclusively in hardwood and wood-like flooring. No carpet. 
              No tile. No trying to be everything to everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This focused expertise means we know these materials inside and out. 
              We understand how different woods react to Tennessee's humidity, which 
              products perform best in high-traffic areas, and how to achieve the 
              finish you're looking for. When you choose a specialist, you get 
              specialized results.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* CTA */}
      <CTASection 
        title="Ready to Work Together?"
        description="Let's discuss your flooring project. No pressure, just honest answers and professional guidance."
      />
    </>
  );
};

export default About;
