'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function BookingHelpPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Booking Help</h1>
          <p className="text-lg text-foreground/60">
            Step-by-step guide to complete your travel booking
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="glass rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-semibold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Create Your Account</h3>
                <p className="text-foreground/60 mb-4">
                  Visit our Login page and click "Sign Up" to create a new account. You'll need:
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Email address
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Full name
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Phone number
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Secure password (min 8 characters)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-semibold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Browse & Select Package</h3>
                <p className="text-foreground/60">
                  Visit the Packages page (login required) to explore our curated travel packages. 
                  Each package includes destination highlights, duration, and pricing tiers. Read 
                  descriptions carefully and check what's included in each package level.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-semibold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Fill Booking Form</h3>
                <p className="text-foreground/60 mb-4">
                  Go to the Booking page and complete the form with:
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Destination selection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Start and end dates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Number of travelers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Special requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-semibold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Submit & Confirmation</h3>
                <p className="text-foreground/60">
                  Submit your booking request. You'll receive a confirmation email with your 
                  booking reference number. Your booking status will be "Pending" while our team 
                  reviews it. You can check the status anytime in your profile.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="glass rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-white font-semibold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">Booking Approval</h3>
                <p className="text-foreground/60">
                  Our admin team will review your booking and either approve or request additional 
                  information. Once approved, you'll receive detailed itinerary and payment instructions. 
                  A 30% deposit is due within 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-lg p-6 border-l-4 border-primary">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Important Notes</h4>
                <ul className="text-sm text-foreground/60 space-y-2">
                  <li>• Login is required to book</li>
                  <li>• Passport valid for 6+ months</li>
                  <li>• Book at least 6 weeks ahead</li>
                  <li>• Deposit required within 7 days</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6 border-l-4 border-accent">
            <div className="flex gap-3">
              <HelpCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                <p className="text-sm text-foreground/60 mb-4">
                  Our customer support team is ready to assist you.
                </p>
                <a
                  href="/contact"
                  className="inline-block text-sm font-semibold text-accent hover:text-primary smooth-hover"
                >
                  Contact Support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
