'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated background gradients with parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mx-auto lg:mx-0 w-fit">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground/80">
                Experience Luxury Travel
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Journey to Your{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Dream Destination
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-pretty">
              Discover hand-curated travel experiences that blend luxury, adventure, and authentic
              cultural immersion. Your next unforgettable journey awaits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="/packages"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-2xl hover:shadow-primary/40 inline-flex items-center justify-center gap-2"
              >
                Explore Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/booking"
                className="px-8 py-3 rounded-full glass text-primary font-semibold glow-accent smooth-hover hover:bg-white/20 dark:hover:bg-white/10 inline-flex items-center justify-center"
              >
                Start Booking
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { number: '50+', label: 'Destinations' },
                { number: '10K+', label: 'Happy Travelers' },
                { number: '25+', label: 'Years Experience' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Glassmorphic card showcase */}
          <div className="hidden lg:block relative h-96">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl glass glow-accent smooth-hover"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            />
            <div className="absolute inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border border-white/20" />
            
            {/* Floating cards effect with parallax */}
            <div
              className="absolute top-8 right-8 glass-glossy p-6 rounded-xl w-56 glow-accent-warm smooth-hover hover:shadow-2xl transform transition-all"
              style={{
                transform: `translateY(${scrollY * 0.1}px) scale(1)`,
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 hover:opacity-100 smooth-hover" />
              <div className="relative">
                <div className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Bali Paradise
                </div>
                <p className="text-xs text-foreground/60">
                  Tropical islands with pristine beaches and ancient temples
                </p>
                <div className="mt-3 text-xs text-accent font-semibold">From $1,299</div>
              </div>
            </div>

            <div
              className="absolute bottom-8 left-8 glass-glossy p-6 rounded-xl w-56 glow-accent smooth-hover hover:shadow-2xl transform transition-all"
              style={{
                transform: `translateY(${scrollY * -0.1}px) scale(1)`,
                animation: 'float 6s ease-in-out infinite 1s',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 hover:opacity-100 smooth-hover" />
              <div className="relative">
                <div className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  European Escape
                </div>
                <p className="text-xs text-foreground/60">
                  Historic cities, fine dining, and timeless architecture
                </p>
                <div className="mt-3 text-xs text-primary font-semibold">From $1,599</div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
