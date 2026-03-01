'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { CheckCircle, Shield, Award } from 'lucide-react';

export default function BookingPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/booking');
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
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Book Your Dream Getaway
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl text-pretty">
            Fill out the form below and our travel experts will contact you within 24 hours with personalized recommendations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Badges */}
              <div className="glass-glossy p-6 rounded-2xl glow-accent space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Why Book With Us</h3>
                
                {[
                  { Icon: Award, title: 'Award Winning', desc: '25+ years of excellence' },
                  { Icon: Shield, title: 'Fully Insured', desc: 'Protection guaranteed' },
                  { Icon: CheckCircle, title: 'Best Price', desc: '100% price match promise' },
                ].map(({ Icon, title, desc }, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-foreground">{title}</div>
                      <div className="text-sm text-foreground/60">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support */}
              <div className="glass-glossy p-6 rounded-2xl glow-accent">
                <h3 className="font-semibold text-lg text-foreground mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <p className="text-sm text-foreground/70">
                    Call our travel experts for personalized assistance
                  </p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    +1 (555) 123-4567
                  </div>
                  <p className="text-xs text-foreground/60">
                    Available Monday-Friday, 9am-6pm EST
                  </p>
                </div>
              </div>

              {/* FAQ Quick Link */}
              <div className="glass-glossy p-6 rounded-2xl glow-accent">
                <h3 className="font-semibold text-lg text-foreground mb-4">Quick Questions?</h3>
                <ul className="space-y-2 text-sm">
                  {["What's included?", "Cancellation policy", "Payment options", "Group bookings"].map(
                    (q, idx) => (
                      <li key={idx}>
                        <a href="#" className="text-primary hover:text-accent smooth-hover">
                          {q}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'We recommend booking 4-6 weeks in advance for better availability and pricing. However, we also offer last-minute packages for spontaneous travelers.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and flexible payment plans. A 25% deposit secures your booking.',
              },
              {
                q: 'Is travel insurance included?',
                a: 'Travel insurance is included in our Classic Explorer and Premium Adventure packages. It can be added to any package for a small additional fee.',
              },
              {
                q: 'Can I customize a package?',
                a: 'Absolutely! All our packages are fully customizable. Work with our travel experts to create your perfect itinerary.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="glass-glossy p-6 rounded-lg cursor-pointer group">
                <summary className="font-semibold text-foreground flex justify-between items-center hover:text-primary smooth-hover">
                  {faq.q}
                </summary>
                <p className="mt-4 text-foreground/70 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
