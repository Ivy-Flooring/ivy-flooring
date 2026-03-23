"use client";

import { useState } from "react";
import { GalleryImage } from "@/components/sections";

const categories = [
    "All",
    "Hardwood Flooring",
    "Engineered Flooring",
    "LVP / LVT / Laminate",
    "Soundproof Flooring",
    "Stair Treads"
];

export default function GalleryFilter({ initialImages }: { initialImages: any[] }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = activeCategory === "All"
        ? initialImages
        : initialImages.filter(img => img.category === activeCategory);

    return (
        <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.length > 0 ? (
                    filteredImages.map((image, index) => (
                        <GalleryImage key={index} {...image} />
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-muted-foreground">
                        No projects found in this category yet.
                    </div>
                )}
            </div>
        </>
    );
}
