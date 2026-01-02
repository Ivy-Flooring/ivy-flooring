import { Phone, Calculator, Calendar, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Initial Contact",
    description: "Reach out for a free consultation. We'll discuss your flooring needs and schedule a convenient time to visit.",
  },
  {
    icon: Calculator,
    number: "02",
    title: "Professional Estimate",
    description: "We use digital measurement tools for precise, accurate estimates. Same-day or next-day turnaround.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Schedule Installation",
    description: "Once you approve the estimate, we'll schedule your installation at a time that works for your family.",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Expert Installation",
    description: "Our skilled team installs your new flooring with attention to detail and respect for your home.",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Final Walkthrough",
    description: "We complete a thorough walkthrough to ensure your complete satisfaction before we leave.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-2 mb-4">Our Simple Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first call to project completion, we make the flooring process 
            straightforward and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card shadow-md mb-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-accent font-heading font-bold text-sm mb-2">
                  Step {step.number}
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
