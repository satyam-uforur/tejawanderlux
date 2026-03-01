'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ArrowRight, Star, Users, Calendar } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Weekender',
    duration: '3-4 Days',
    price: 1299,
    description: 'Perfect for a quick escape',
    highlights: [
      '3-4 night accommodation',
      'Guided city tours',
      'Welcome dinner included',
      'Airport transfers',
      '24/7 support',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Classic Explorer',
    duration: '7 Days',
    price: 2499,
    description: 'Our most popular choice',
    highlights: [
      '7 night luxury accommodation',
      'Guided tours & activities',
      'All meals included',
      'Private transportation',
      'Adventure packages',
      'Travel insurance',
      'VIP support',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Premium Adventure',
    duration: '14 Days',
    price: 4999,
    description: 'The complete experience',
    highlights: [
      '14 night premium accommodation',
      'Full guided tour experience',
      'All-inclusive meals',
      'Private chauffeur',
      'Multiple destinations',
      'Exclusive experiences',
      'Concierge service',
      'Premium insurance',
    ],
    popular: false,
  },
];

export default function PackagesPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/packages');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/60">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Travel Packages
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl text-pretty">
            Choose the perfect package for your next adventure. All packages include flexibility and customization options.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative glass-glossy rounded-2xl overflow-hidden glow-accent smooth-hover hover:shadow-2xl hover:shadow-primary/20 flex flex-col transition-transform duration-300 ${
                  pkg.popular ? 'md:scale-105 ring-2 ring-accent' : ''
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-accent to-primary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-foreground/60 text-sm">{pkg.description}</p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{pkg.duration}</span>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Starting from</div>
                    <div className="text-4xl sm:text-5xl font-bold">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ${pkg.price}
                      </span>
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">per person</div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 flex-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/booking"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 mt-6"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Customize Your Package
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Spa & Wellness', price: '$299' },
              { name: 'Adventure Activities', price: '$199' },
              { name: 'Private Chef Dinner', price: '$399' },
              { name: 'Photography Session', price: '$149' },
              { name: 'Helicopter Tour', price: '$499' },
              { name: 'Luxury Car Rental', price: '$349' },
            ].map((addon, idx) => (
              <div key={idx} className="glass-glossy p-6 rounded-xl glow-accent hover:shadow-lg hover:shadow-primary/20 smooth-hover cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{addon.name}</h4>
                  <span className="text-accent font-bold">{addon.price}</span>
                </div>
                <p className="text-foreground/60 text-sm">Add to your package</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
