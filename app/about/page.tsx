'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About WanderLuxe</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Crafting extraordinary travel experiences for the discerning explorer since 2010
          </p>
        </div>

        {/* Mission */}
        <div className="glass rounded-lg p-10 mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            At WanderLuxe, we believe that travel is more than just visiting places—it's about 
            discovering yourself, connecting with different cultures, and creating memories that 
            last a lifetime. Our mission is to provide expertly curated, luxurious travel experiences 
            that go beyond typical tourism.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            We work directly with local partners, skilled guides, and premium accommodations to 
            ensure every moment of your journey is exceptional. Whether you're seeking adventure, 
            relaxation, cultural immersion, or a combination, we've got you covered.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Award,
              title: 'Excellence',
              description: 'We maintain the highest standards in every aspect of travel planning',
            },
            {
              icon: Users,
              title: 'Community',
              description: 'We respect local communities and support sustainable tourism',
            },
            {
              icon: Globe,
              title: 'Responsibility',
              description: 'We prioritize environmental conservation and ethical practices',
            },
            {
              icon: Heart,
              title: 'Passion',
              description: 'We genuinely love what we do and it shows in our service',
            },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="glass rounded-lg p-6 text-center hover:shadow-lg smooth-hover">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/60">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Experience */}
        <div className="glass rounded-lg p-10 mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Our Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-foreground/60">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">50,000+</p>
              <p className="text-foreground/60">Happy Travelers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-foreground/60">Destinations Worldwide</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="glass rounded-lg p-10 mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              WanderLuxe was founded in 2010 by a group of passionate travel enthusiasts who 
              believed there had to be a better way to travel. Instead of cookie-cutter tourist 
              packages, we wanted to create immersive, personalized experiences that truly connect 
              travelers with the heart of each destination.
            </p>
            <p>
              What started as a small team of five has grown into a dynamic company of over 200 
              travel experts across the globe. We've maintained our core values while expanding our 
              reach to serve more adventurers, dreamers, and explorers.
            </p>
            <p>
              Today, we're proud to partner with carefully selected local businesses, sustainable 
              hotels, responsible tour operators, and expert guides in every destination we offer. 
              This commitment to quality and responsibility sets us apart from mass-market travel 
              agencies.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Why Choose WanderLuxe?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Expert Travel Consultants',
                desc: 'Our team has personally visited every destination we recommend',
              },
              {
                title: 'Personalized Itineraries',
                desc: 'We customize every trip to match your interests and preferences',
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock assistance before, during, and after your trip',
              },
              {
                title: 'Competitive Pricing',
                desc: 'Get premium experiences without breaking the bank',
              },
              {
                title: 'Sustainable Tourism',
                desc: 'We prioritize environmental and cultural conservation',
              },
              {
                title: 'Flexibility & Safety',
                desc: 'Flexible cancellations and comprehensive travel insurance included',
              },
            ].map((item, index) => (
              <div key={index} className="glass rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Start Your Journey</h3>
          <p className="text-foreground/60 mb-6">
            Join thousands of travelers who've experienced WanderLuxe excellence
          </p>
          <a
            href="/destinations"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-accent smooth-hover"
          >
            Explore Destinations
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
