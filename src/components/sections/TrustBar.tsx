import { Shield, Clock, Award, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    text: "Licensed & Insured",
  },
  {
    icon: Clock,
    text: "Same-Day Estimates",
  },
  {
    icon: Award,
    text: "10+ Years Experience",
  },
  {
    icon: Users,
    text: "Family Owned",
  },
];

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-secondary-foreground"
            >
              <item.icon className="w-5 h-5 text-accent" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
