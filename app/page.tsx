import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import BookingForm from '@/components/BookingForm';
import { Sparkles, Compass, Shield } from 'lucide-react';

const destinations = [
  {
    id: '1',
    name: 'Bali Paradise',
    description: 'Tropical islands with pristine beaches and ancient temples',
    rating: 4.8,
    reviews: 324,
    price: 1299,
    continent: 'Asia',
    isNew: true,
  },
  {
    id: '2',
    name: 'Paris Romance',
    description: 'Historic cities, fine dining, and timeless architecture',
    rating: 4.9,
    reviews: 512,
    price: 1599,
    continent: 'Europe',
  },
  {
    id: '3',
    name: 'Tokyo Adventure',
    description: 'Modern metropolis meets ancient traditions and culture',
    rating: 4.7,
    reviews: 289,
    price: 1699,
    continent: 'Asia',
  },
  {
    id: '4',
    name: 'Maldives Luxury',
    description: 'Crystal waters and exclusive overwater bungalows',
    rating: 5.0,
    reviews: 198,
    price: 2499,
    continent: 'Asia',
    isNew: true,
  },
];

const features = [
  {
    Icon: Compass,
    title: 'Expert Planning',
    description: 'Our travel experts craft personalized itineraries tailored to your preferences',
  },
  {
    Icon: Shield,
    title: 'Travel Protected',
    description: '24/7 support and comprehensive travel insurance for peace of mind',
  },
  {
    Icon: Sparkles,
    title: 'Luxury Experience',
    description: 'Handpicked accommodations and exclusive experiences you cannot find elsewhere',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Why Choose WanderLuxe
            </h2>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              We've been crafting unforgettable travel experiences for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map(({ Icon, title, description }, idx) => (
              <div key={idx} className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent hover:shadow-xl hover:shadow-primary/20 smooth-hover group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 smooth-hover">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-foreground/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Popular Destinations
            </h2>
            <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
              Explore our carefully curated collection of world-class destinations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mb-8">
            Join thousands of satisfied travelers who have discovered extraordinary destinations with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-2xl hover:shadow-primary/40">
              Start Exploring
            </button>
            <button className="px-8 py-3 rounded-full glass text-primary font-semibold glow-accent smooth-hover hover:bg-white/20 dark:hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
