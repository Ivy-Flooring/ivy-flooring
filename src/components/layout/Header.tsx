import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ivyLogo from "@/assets/ivy-flooring-logo.avif";

const services = [
  { name: "Hardwood Flooring", href: "/services/hardwood-flooring" },
  { name: "Engineered Wood Flooring", href: "/services/engineered-wood-flooring" },
  { name: "LVP / LVT / Laminate", href: "/services/lvp-lvt-laminate" },
  { name: "Soundproof Flooring", href: "/services/soundproof-flooring" },
  { name: "Stair Treads", href: "/services/stair-treads" },
];

const navLinks = [
  { name: "Service Areas", href: "/service-areas" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={ivyLogo} 
                alt="Ivy Flooring - Hardwood Specialists" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
                    scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-accent"
                  }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[240px]">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-border my-1" />
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-accent"
                  } ${location.pathname === link.href ? (scrolled ? "text-primary" : "text-accent") : ""}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA Button */}
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-card border-t border-border transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-custom py-4 space-y-4">
            {/* Services */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 font-medium text-foreground"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/services" className="block py-1 text-sm font-semibold text-primary">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-2 font-medium text-foreground hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <div className="pt-4 space-y-3">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sticky CTAs */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card border-t border-border p-3 flex gap-3">
        <Button variant="ctaSecondary" size="lg" className="flex-1" asChild>
          <a href="tel:+16155551234" className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </Button>
        <Button variant="cta" size="lg" className="flex-1" asChild>
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </div>
    </>
  );
}
