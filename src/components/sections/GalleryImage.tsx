import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImageProps {
  src: string;
  alt: string;
  category?: string;
}

export function GalleryImage({ src, alt, category }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
        {category && (
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
            {category}
          </div>
        )}
      </button>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-background hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
