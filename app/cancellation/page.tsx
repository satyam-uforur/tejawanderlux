'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Cancellation Policy
          </h1>
          <p className="text-lg text-foreground/60">
            Our flexible cancellation and modification policies
          </p>
        </div>

        {/* Main Policy */}
        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Booking Cancellation</h2>

          <div className="space-y-6">
            {/* 14+ days */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-foreground">More than 14 days before travel</h3>
              </div>
              <p className="text-foreground/80 font-semibold text-lg mb-2">Full Refund (100%)</p>
              <p className="text-foreground/60 text-sm">
                Cancel anytime more than 14 days before your travel date and receive a 100% refund 
                of all payments made. Processing takes 5-7 business days.
              </p>
            </div>

            {/* 7-14 days */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <h3 className="font-semibold text-foreground">7-14 days before travel</h3>
              </div>
              <p className="text-foreground/80 font-semibold text-lg mb-2">75% Refund</p>
              <p className="text-foreground/60 text-sm">
                A 25% cancellation fee applies to all refunds. You will receive 75% of your total 
                booking amount back. Processing takes 5-7 business days.
              </p>
            </div>

            {/* Less than 7 days */}
            <div className="border-l-4 border-red-500 pl-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-foreground">Less than 7 days before travel</h3>
              </div>
              <p className="text-foreground/80 font-semibold text-lg mb-2">Non-Refundable</p>
              <p className="text-foreground/60 text-sm">
                Cancellations within 7 days of travel are non-refundable. However, you may be 
                eligible to reschedule to a future date with no additional charges (subject to availability).
              </p>
            </div>
          </div>
        </div>

        {/* Modifications */}
        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Booking Modifications</h2>

          <div className="space-y-4 text-foreground/80">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-2">Change Travel Dates</p>
                <p className="text-sm">
                  Modify your travel dates for free up to 14 days before departure, subject to 
                  availability. Changes must be made at least 7 days before your current travel date.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-2">Change Destination</p>
                <p className="text-sm">
                  Switch to a different destination up to 21 days before travel. If there's a price 
                  difference, you'll pay the difference or receive a credit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-2">Reduce Number of Travelers</p>
                <p className="text-sm">
                  Remove travelers from your booking up to 10 days before travel. Per-person costs 
                  will be refunded based on our refund policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Circumstances */}
        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Special Circumstances</h2>

          <p className="text-foreground/80 mb-6">
            We understand that life happens. WanderLuxe may offer refunds or rescheduling options 
            for the following circumstances on a case-by-case basis:
          </p>

          <ul className="space-y-3 text-foreground/80">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Medical emergencies or serious illness (with documentation)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Family emergencies or death of immediate family member</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Job loss or unexpected financial hardship</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Travel restrictions or advisories by government</span>
            </li>
          </ul>

          <p className="text-sm text-foreground/60 mt-6">
            Contact our support team with documentation to discuss your situation.
          </p>
        </div>

        {/* Important Terms */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Important Terms
          </h3>
          <ul className="text-sm text-foreground/80 space-y-2">
            <li>• All times are based on booking confirmation time</li>
            <li>• Refunds are processed to original payment method</li>
            <li>• Processing takes 5-10 business days after cancellation approval</li>
            <li>• Currency conversion fees may apply</li>
            <li>• No refunds on partially used services or tours</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-12 glass rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Need to Cancel or Modify?</h3>
          <p className="text-foreground/60 mb-6">
            Contact our customer support team to process your cancellation or modification request.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-accent smooth-hover"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
