import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Star, MapPin, Calendar, Users, Heart, Share2, ArrowLeft } from 'lucide-react';

const destinationData: Record<string, any> = {
  '1': {
    name: 'Bali Paradise',
    continent: 'Asia',
    rating: 4.8,
    reviews: 324,
    price: 1299,
    description: 'Tropical islands with pristine beaches and ancient temples',
    fullDescription: 'Bali offers the perfect blend of natural beauty, cultural richness, and modern luxury. From stunning rice terraces to world-class beaches, immerse yourself in tropical paradise.',
    duration: '7 Days',
    highlights: [
      'Ubud Cultural Tours',
      'Beach Resort Stays',
      'Temple Visits',
      'Traditional Spa',
      'Surfing Lessons',
      'Local Cuisine Classes',
    ],
  },
  '2': {
    name: 'Paris Romance',
    continent: 'Europe',
    rating: 4.9,
    reviews: 512,
    price: 1599,
    description: 'Historic cities, fine dining, and timeless architecture',
    fullDescription: 'Experience the magic of Paris with its iconic landmarks, world-renowned museums, and Michelin-starred restaurants. Stroll through charming neighborhoods and savor the romance of the City of Light.',
    duration: '7 Days',
    highlights: [
      'Eiffel Tower & Louvre',
      'Seine River Cruise',
      'Michelin-Starred Dining',
      'Museum Tours',
      'Seine-side Walks',
      'Night Entertainment',
    ],
  },
};

export default function DestinationPage({
  params,
}: {
  params: { id: string }
}) {
  const destination = destinationData[params.id] || destinationData['1'];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="pt-24 sm:pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-primary hover:text-accent smooth-hover font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl glass glow-accent" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white z-10">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-medium mb-4">
              {destination.continent}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
              {destination.name}
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 smooth-hover flex items-center gap-2 font-medium">
              <Heart className="w-5 h-5" />
              Save
            </button>
            <button className="px-6 py-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 smooth-hover flex items-center gap-2 font-medium">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {destination.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Experience Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="glass-glossy p-4 rounded-lg glow-accent">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span className="font-medium text-foreground">{highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent">
              <h3 className="text-2xl font-bold text-foreground mb-6">Trip Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { Icon: Calendar, label: 'Duration', value: destination.duration },
                  { Icon: MapPin, label: 'Continent', value: destination.continent },
                  { Icon: Users, label: 'Group Size', value: '1-20 people' },
                  { Icon: Star, label: 'Rating', value: `${destination.rating}/5 (${destination.reviews} reviews)` },
                ].map(({ Icon, label, value }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-foreground/60">{label}</div>
                      <div className="font-semibold text-foreground text-lg">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent sticky top-24">
              <div className="mb-6">
                <div className="text-sm text-foreground/60 mb-1">Starting from</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ${destination.price}
                </div>
                <div className="text-sm text-foreground/60">per person</div>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(destination.rating)
                        ? 'fill-accent text-accent'
                        : 'text-foreground/30'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-foreground">
                  {destination.rating} ({destination.reviews} reviews)
                </span>
              </div>

              <Link
                href="/booking"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30 block text-center mb-3"
              >
                Book Now
              </Link>

              <button className="w-full px-6 py-3 rounded-lg glass text-primary font-semibold glow-accent smooth-hover hover:bg-white/20 dark:hover:bg-white/10">
                Get Quote
              </button>

              <p className="text-xs text-foreground/60 text-center mt-4">
                Free cancellation up to 7 days before
              </p>
            </div>

            {/* Info Box */}
            <div className="glass-glossy p-6 rounded-xl space-y-3">
              <h4 className="font-semibold text-foreground">Need Help?</h4>
              <p className="text-sm text-foreground/70">
                Our travel experts are ready to help you plan the perfect trip.
              </p>
              <a href="#" className="text-primary font-medium hover:text-accent smooth-hover text-sm">
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl mb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-foreground/70 mb-8">
            Join thousands of travelers who have discovered the beauty of this destination.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
