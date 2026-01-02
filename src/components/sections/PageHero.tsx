import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: string;
  image?: string;
  icon?: LucideIcon;
}

export function PageHero({ title, description, breadcrumb, image, icon: Icon }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-primary overflow-hidden">
      {/* Background Image Overlay */}
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 hero-overlay" />
        </>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {breadcrumb && (
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
              {breadcrumb}
            </p>
          )}
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-xl bg-accent/20 items-center justify-center">
                <Icon className="w-8 h-8 text-accent" />
              </div>
            )}
            <div>
              <h1 className="text-primary-foreground mb-4">{title}</h1>
              {description && (
                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
