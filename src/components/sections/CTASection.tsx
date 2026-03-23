import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  showPhone?: boolean;
}

export function CTASection({
  title = "Ready to Transform Your Floors?",
  description = "Get a precise estimate for your flooring project. No pressure, no obligation—just honest answers and professional guidance.",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary-foreground mb-4">{title}</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link href="/contact">Request a Free Quote</Link>
            </Button>
            {showPhone && (
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+16157756949" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (615) 775-6949
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
