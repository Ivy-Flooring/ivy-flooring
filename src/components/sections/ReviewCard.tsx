import { Star, Quote } from "lucide-react";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
}

export function ReviewCard({ name, location, rating, text, date }: ReviewCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md border border-border card-hover">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Quote className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-accent fill-accent" : "text-muted"
                }`}
              />
            ))}
          </div>
          <p className="text-foreground leading-relaxed mb-4">"{text}"</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            {date && (
              <p className="text-xs text-muted-foreground">{date}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
