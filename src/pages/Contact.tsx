import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const flooringTypes = [
  "Hardwood Flooring",
  "Engineered Wood Flooring",
  "LVP / LVT / Laminate",
  "Soundproof Flooring",
  "Stair Treads",
  "Not Sure - Need Guidance",
];

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Received!",
      description: "We'll be in touch within 24 hours.",
    });
    
    navigate("/thank-you");
  };

  return (
    <Layout>
      <PageHero
        title="Request a Quote"
        description="Get a precise, no-obligation estimate for your flooring project. We typically respond within 24 hours."
        breadcrumb="Contact"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-heading font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+16155551234"
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">(615) 555-1234</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@ivyflooring.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">info@ivyflooring.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">All of Middle Tennessee</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-heading font-semibold mb-2">Request Your Free Quote</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you with a detailed estimate.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your full name" 
                        required 
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="(615) 555-0000" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="you@example.com"
                        maxLength={255}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        placeholder="Nashville, Franklin, etc." 
                        required
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="flooring-type">Flooring Type *</Label>
                    <Select name="flooring-type" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select flooring type" />
                      </SelectTrigger>
                      <SelectContent>
                        {flooringTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Project *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Describe your flooring project—room(s), approximate size, timeline, any specific needs..." 
                      rows={5}
                      required
                      maxLength={1000}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting, you agree to be contacted about your flooring project. 
                    We respect your privacy and never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
