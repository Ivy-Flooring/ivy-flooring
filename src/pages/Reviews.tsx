import { Layout } from "@/components/layout";
import { PageHero, ReviewCard, CTASection } from "@/components/sections";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Nashville, TN",
    rating: 5,
    text: "Ivy Flooring transformed our entire first floor. The attention to detail was incredible, and the team was so respectful of our home. They cleaned up every day before leaving. Highly recommend!",
    date: "December 2025",
  },
  {
    name: "Michael & Lisa T.",
    location: "Franklin, TN",
    rating: 5,
    text: "From the first estimate to the final walkthrough, the process was seamless. Our new hardwood floors are absolutely stunning. Worth every penny.",
    date: "November 2025",
  },
  {
    name: "David R.",
    location: "Brentwood, TN",
    rating: 5,
    text: "Professional, punctual, and the quality of work exceeded our expectations. The team made sure everything was perfect before they left. We've already recommended them to neighbors.",
    date: "October 2025",
  },
  {
    name: "Jennifer K.",
    location: "Mount Juliet, TN",
    rating: 5,
    text: "After getting quotes from several companies, we chose Ivy Flooring for their professionalism and clear communication. The estimate was accurate, the timeline was met, and the floors are gorgeous.",
    date: "September 2025",
  },
  {
    name: "Robert & Maria S.",
    location: "Murfreesboro, TN",
    rating: 5,
    text: "We had LVP installed throughout our home and couldn't be happier. The team helped us choose the perfect color and the installation was flawless. Great experience from start to finish.",
    date: "August 2025",
  },
  {
    name: "Amanda W.",
    location: "Nashville, TN",
    rating: 5,
    text: "They installed hardwood on our stairs and it completely transformed the look of our home. The craftsmanship is exceptional. These guys really know what they're doing.",
    date: "July 2025",
  },
  {
    name: "James & Patricia L.",
    location: "Franklin, TN",
    rating: 5,
    text: "We've used Ivy Flooring for two projects now—our main living area and later our bedrooms. Consistent quality both times. They've earned a customer for life.",
    date: "June 2025",
  },
  {
    name: "Thomas B.",
    location: "Brentwood, TN",
    rating: 5,
    text: "The soundproof flooring solution they recommended for our condo was perfect. No more complaints from downstairs neighbors. Professional service throughout.",
    date: "May 2025",
  },
  {
    name: "Emily & Chris H.",
    location: "Nashville, TN",
    rating: 5,
    text: "We had a tight timeline before a family event and Ivy Flooring made it happen. No shortcuts, no rush jobs—just beautiful floors delivered on time. Incredible team.",
    date: "April 2025",
  },
];

const Reviews = () => {
  return (
    <Layout>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </Layout>
  );
};

export default Reviews;
