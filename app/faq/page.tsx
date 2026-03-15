'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I book a travel package?',
    answer:
      'Simply navigate to our Packages page, select your desired trip, and click "Book Now". You\'ll need to be logged in to complete your booking. Fill in your travel dates and preferences, then submit your request. Our team will review and confirm your booking.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We offer flexible cancellation. Bookings can be cancelled up to 14 days before travel for a full refund. Cancellations within 14 days may be subject to a 25% cancellation fee. Emergency cancellations are handled on a case-by-case basis.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer:
      'Yes, we partner with leading travel insurance providers. Travel insurance is optional and can be added during the booking process. Coverage includes trip cancellation, medical emergencies, and baggage protection.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), digital wallets (PayPal, Google Pay, Apple Pay), and bank transfers. A 30% deposit is required at booking, with the balance due 30 days before travel.',
  },
  {
    question: 'Are group discounts available?',
    answer:
      'Yes! We offer special rates for groups of 8 or more. Contact our group travel specialist for a customized quote. Group discounts can save 10-20% depending on destination and travel dates.',
  },
  {
    question: 'Do you provide visa assistance?',
    answer:
      'Absolutely. Our experienced team assists with visa applications for all destinations. We provide guidance on requirements, documentation, and processing. This service is included with all our packages.',
  },
  {
    question: 'What is included in the package prices?',
    answer:
      'Our packages typically include accommodation, guided tours, meals as specified, and airport transfers. Some premium packages also include flights. Check the package details for exactly what\'s included in each tier.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking 6-8 weeks in advance for the best availability and pricing. Last-minute bookings (within 2 weeks) are subject to availability and may have premium pricing. Peak season (Dec-Jan, Jun-Jul) fills up quickly.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-foreground/60">
            Find answers to common questions about our travel services and bookings
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 dark:hover:bg-white/5 smooth-hover"
              >
                <span className="text-left font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary smooth-hover transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-white/10 text-foreground/80 text-sm leading-relaxed animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 glass rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Didn't find your answer?</h3>
          <p className="text-foreground/60 mb-4">
            Contact our support team - we're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-accent smooth-hover hover:shadow-xl"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
