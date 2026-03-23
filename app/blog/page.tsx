"use client";

import Link from "next/link";
import { PageHero, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "./constants";

export default function BlogIndex() {
  return (
    <>
      <PageHero 
        title="Flooring Insights" 
        description="Expert advice on choosing, installing, and maintaining floors in Middle Tennessee."
        breadcrumb="Blog"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(BLOG_POSTS).map(([slug, post]) => (
              <div key={slug} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href={`/blog/${slug}`}>
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}