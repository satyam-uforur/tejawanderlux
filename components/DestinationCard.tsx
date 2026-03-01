'use client';

import Link from 'next/link';
import { Star, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';

interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  rating: number;
  reviews: number;
  price: number;
  continent: string;
  isNew?: boolean;
}

export default function DestinationCard({
  id,
  name,
  description,
  image,
  rating,
  reviews,
  price,
  continent,
  isNew,
}: DestinationCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/destinations/${id}`}>
      <div className="group glass-glossy rounded-2xl overflow-hidden cursor-pointer glow-accent smooth-hover hover:shadow-2xl hover:shadow-primary/20">
        {/* Image container */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 smooth-hover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-16 h-16 text-primary/30" />
            </div>
          )}

          {/* Badge overlay */}
          {isNew && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full">
              New
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-4 left-4 p-2 rounded-full glass hover:bg-white/20 smooth-hover"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? 'fill-accent text-accent' : 'text-white/60'
              }`}
            />
          </button>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 smooth-hover" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Continent tag */}
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {continent}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary smooth-hover line-clamp-1">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-foreground/60 line-clamp-2">{description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'fill-accent text-accent'
                      : 'text-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
            <span className="text-xs text-foreground/60">({reviews} reviews)</span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div>
              <span className="text-xs text-foreground/60">Starting from</span>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ${price}
              </p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 smooth-hover">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
