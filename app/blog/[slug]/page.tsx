"use client";

import { useParams } from "next/navigation";
import { PageHero, CTASection } from "@/components/sections";
import { BLOG_POSTS } from "../constants";

export default function BlogPost() {
  const params = useParams();
  // Ensure the slug is a string
  const slug = params?.slug as string;
  
  // Find the post using the slug from the URL
  const post = BLOG_POSTS[slug];

  // If the slug doesn't match a key in constants.ts, show this error
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The slug <code className="bg-secondary px-2 py-1 rounded">"{slug}"</code> does not match any entry in our blog data.
        </p>
        <a href="/blog" className="text-accent hover:underline">← Back to Blog Index</a>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        title={post.title} 
        description={`By ${post.author} • ${post.date}`} 
        breadcrumb="Blog" 
      />
      
      <article className="section-padding">
        <div className="container-custom max-w-3xl">
          <div 
            className="prose prose-lg prose-green max-w-none 
              prose-headings:text-primary prose-headings:font-bold 
              prose-p:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <CTASection />
    </>
  );
}