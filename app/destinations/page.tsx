'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { allDestinations } from '@/lib/destinations';



export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Explore Destinations
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl text-pretty">
            Discover 50+ handpicked destinations across 6 continents. Find your next dream getaway.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 sm:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
              />
            </div>

            {/* Filter */}
            <button className="flex items-center gap-2 px-4 py-3 rounded-lg glass hover:bg-white/20 dark:hover:bg-white/10 smooth-hover font-medium">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
