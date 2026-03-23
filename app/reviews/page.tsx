import { PageHero, ReviewCard, CTASection } from "@/components/sections";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Justin Born",
    location: "Nashville, TN",
    rating: 5,
    text: "Ivy Flooring for absolutely crushing it and bringing these 60-year-old hardwoods back to life!",
  },
  {
    name: "Billy Richards",
    location: "Portland, TN",
    rating: 5,
    text: "Ivy Flooring added the perfect finishing touch to a breathtaking natural white oak flooring, revealing a brighter, more refined look that unlocks the space's full potential of beauty.",
  },
];

const Reviews = () => {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        description="Don't just take our word for it. Read what homeowners across Middle Tennessee have to say about working with Ivy Flooring."
        breadcrumb="Reviews"
      />

      {/* Review Stats */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-2xl font-heading font-bold">5.0</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-heading font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Join Our Satisfied Customers"
        description="Experience the Ivy Flooring difference for yourself. Request your free quote today."
      />
    </>
  );
};

export default Reviews;
