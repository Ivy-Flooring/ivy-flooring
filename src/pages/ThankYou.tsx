import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

const ThankYou = () => {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            
            <h1 className="mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your quote request has been received. We'll review your project details 
              and get back to you within 24 hours.
            </p>

            <div className="bg-card rounded-lg p-6 shadow-md border border-border mb-8">
              <h3 className="text-lg font-heading font-semibold mb-2">What Happens Next?</h3>
              <ul className="text-left space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>We'll review your project details and prepare questions if needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>A team member will call or email you within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>We'll schedule a convenient time to visit and provide a precise estimate.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/">Return Home</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+16157756949" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
