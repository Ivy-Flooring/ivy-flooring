import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Hardwood Flooring", href: "/services/hardwood-flooring" },
  { name: "Engineered Wood Flooring", href: "/services/engineered-wood-flooring" },
  { name: "LVP / LVT / Laminate", href: "/services/lvp-lvt-laminate" },
  { name: "Soundproof Flooring", href: "/services/soundproof-flooring" },
  { name: "Stair Treads", href: "/services/stair-treads" },
];

const serviceAreas = [
  { name: "Nashville", href: "/service-areas/nashville-tn" },
  { name: "Franklin", href: "/service-areas/franklin-tn" },
  { name: "Brentwood", href: "/service-areas/brentwood-tn" },
  { name: "Mount Juliet", href: "/service-areas/mount-juliet-tn" },
  { name: "Murfreesboro", href: "/service-areas/murfreesboro-tn" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                Ivy Flooring
              </h3>
              <p className="text-xs tracking-wider uppercase text-primary-foreground/70">
                Hardwood Specialists
              </p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Middle Tennessee's trusted hardwood and wood-like flooring specialist. 
              Precision estimates, professional installation, and accountability through project completion.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+16155551234" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (615) 555-1234
              </a>
              <a href="mailto:info@ivyflooring.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                info@ivyflooring.com
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving Middle Tennessee</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary-foreground">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary-foreground">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    to={area.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {area.name}, TN
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Ivy Flooring. All rights reserved.</p>
            <p>Proudly serving Middle Tennessee homeowners and contractors.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
