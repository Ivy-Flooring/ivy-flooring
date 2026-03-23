"use client";

import { PageHero } from "@/components/sections";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Script from "next/script";

const Contact = () => {
  return (
    <>
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
                  href="tel:+16157756949"
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">(615) 775-6949</p>
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

            {/* Contact Form Container */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                {/* Header and Subtitle outside of the IFRAME */}
                <h3 className="text-2xl font-heading font-semibold mb-2 text-foreground">
                  Request Your Free Quote
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you with a detailed estimate.
                </p>

                {/* HighLevel IFRAME */}
                <div className="min-h-[600px]">
                  <iframe
                    src="https://link.nashvilledigital.co/widget/form/moNboHve7Kyx9xkPVHfy"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "600px",
                      border: "none",
                      borderRadius: "3px",
                    }}
                    id="inline-moNboHve7Kyx9xkPVHfy"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Request Your Free Quote"
                    data-height="undefined"
                    data-layout-iframe-id="inline-moNboHve7Kyx9xkPVHfy"
                    data-form-id="moNboHve7Kyx9xkPVHfy"
                    title="Request Your Free Quote"
                  ></iframe>
                  <Script
                    src="https://link.nashvilledigital.co/js/form_embed.js"
                    strategy="afterInteractive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;