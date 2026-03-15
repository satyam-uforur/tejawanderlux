'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lightbulb, MapPin, Backpack, Camera } from 'lucide-react';

const tips = [
  {
    icon: Backpack,
    title: 'Packing Smart',
    description:
      'Pack light but smart. Use packing cubes to organize and maximize space. Bring versatile clothing that works in layers. Always keep medications and essentials in your carry-on bag.',
  },
  {
    icon: MapPin,
    title: 'Research Destinations',
    description:
      'Learn about local culture, customs, and traditions before you go. Check visa requirements, weather, and local holidays. Read recent travel blogs and reviews for current information.',
  },
  {
    icon: Camera,
    title: 'Capture Memories',
    description:
      'Bring a good camera or use your smartphone. Consider a portable charger for electronics. Be respectful when photographing people and sacred sites. Backup your photos regularly.',
  },
  {
    icon: Lightbulb,
    title: 'Budget Management',
    description:
      'Set a daily budget and track spending. Use ATMs for local currency to avoid high exchange rates. Keep copies of important documents separate from originals. Tell your bank about travel dates.',
  },
];

const moreAdvice = [
  {
    title: 'Health & Safety',
    items: [
      'Get travel insurance before you depart',
      'Carry a basic first aid kit',
      'Stay hydrated and get adequate sleep',
      'Know emergency contact numbers',
      'Share your itinerary with family',
    ],
  },
  {
    title: 'Before You Travel',
    items: [
      'Check passport validity (6+ months)',
      'Arrange visas if needed',
      'Notify your bank of travel',
      'Download offline maps',
      'Make hotel reservations in advance',
    ],
  },
  {
    title: 'During Your Trip',
    items: [
      'Keep valuables in hotel safe',
      'Use official taxis or ride services',
      'Respect local customs and laws',
      'Stay aware of surroundings',
      'Try local food but eat safe',
    ],
  },
  {
    title: 'Travel Etiquette',
    items: [
      'Learn basic phrases in local language',
      'Be respectful of religious sites',
      'Dress appropriately for the culture',
      'Support local businesses',
      'Don\'t photograph without permission',
    ],
  },
];

export default function TravelTipsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Travel Tips</h1>
          <p className="text-lg text-foreground/60">
            Essential advice to make your journey smooth and memorable
          </p>
        </div>

        {/* Main Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="glass rounded-lg p-8 hover:shadow-lg smooth-hover">
                <div className="mb-4">
                  <div className="inline-block p-3 rounded-lg bg-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{tip.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{tip.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Advice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {moreAdvice.map((section, index) => (
            <div key={index} className="glass rounded-lg p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Pro Travel Tips</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">🎒</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Join the Frequent Traveler Club</p>
                <p className="text-sm text-foreground/60">
                  Sign up for rewards programs with airlines, hotels, and travel partners to earn 
                  points and get exclusive benefits.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Travel During Off-Season</p>
                <p className="text-sm text-foreground/60">
                  Visit destinations during shoulder or off-seasons for better prices, smaller crowds, 
                  and more authentic experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Book Flights Strategically</p>
                <p className="text-sm text-foreground/60">
                  Tuesday and Wednesday flights are usually cheaper. Book 2-3 months in advance for 
                  domestic flights, 3-6 months for international.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Use Travel Apps</p>
                <p className="text-sm text-foreground/60">
                  Download apps for maps, translation, currency conversion, and accommodation to stay 
                  connected and informed during your trip.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 glass rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Explore?</h3>
          <p className="text-foreground/60 mb-6">
            Book your next adventure with WanderLuxe and create unforgettable memories.
          </p>
          <a
            href="/destinations"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-accent smooth-hover"
          >
            Browse Destinations
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
