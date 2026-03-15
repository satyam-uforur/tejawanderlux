'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/60">
            Have questions? We're here to help. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-foreground/60 text-sm mb-2">
                <a href="mailto:support@wanderluxe.com" className="hover:text-primary smooth-hover">
                  support@wanderluxe.com
                </a>
              </p>
              <p className="text-foreground/60 text-sm">
                <a href="mailto:info@wanderluxe.com" className="hover:text-primary smooth-hover">
                  info@wanderluxe.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground">Phone</h3>
              </div>
              <p className="text-foreground/60 text-sm mb-2">
                <a href="tel:+919876543210" className="hover:text-primary smooth-hover">
                  +91 9876 543 210
                </a>
              </p>
              <p className="text-foreground/60 text-sm">
                Toll Free: 1-800-WANDER
              </p>
            </div>

            {/* Address */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground">Address</h3>
              </div>
              <p className="text-foreground/60 text-sm">
                123 Travel Street
                <br />
                Mumbai, India 400001
              </p>
            </div>

            {/* Business Hours */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground">Hours</h3>
              </div>
              <div className="text-sm text-foreground/60 space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-700 dark:text-green-300 text-sm">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary smooth-hover"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary smooth-hover"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary smooth-hover"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary smooth-hover"
                >
                  <option value="">Select a subject</option>
                  <option value="booking-inquiry">Booking Inquiry</option>
                  <option value="cancellation">Cancellation Request</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary smooth-hover resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="glass rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/faq"
              className="p-4 rounded-lg border border-white/10 hover:bg-white/5 smooth-hover flex items-center justify-between group"
            >
              <span className="font-medium text-foreground">FAQ</span>
              <span className="text-primary group-hover:translate-x-1 smooth-hover">→</span>
            </a>
            <a
              href="/booking-help"
              className="p-4 rounded-lg border border-white/10 hover:bg-white/5 smooth-hover flex items-center justify-between group"
            >
              <span className="font-medium text-foreground">Booking Help</span>
              <span className="text-primary group-hover:translate-x-1 smooth-hover">→</span>
            </a>
            <a
              href="/cancellation"
              className="p-4 rounded-lg border border-white/10 hover:bg-white/5 smooth-hover flex items-center justify-between group"
            >
              <span className="font-medium text-foreground">Cancellation Policy</span>
              <span className="text-primary group-hover:translate-x-1 smooth-hover">→</span>
            </a>
            <a
              href="/travel-tips"
              className="p-4 rounded-lg border border-white/10 hover:bg-white/5 smooth-hover flex items-center justify-between group"
            >
              <span className="font-medium text-foreground">Travel Tips</span>
              <span className="text-primary group-hover:translate-x-1 smooth-hover">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
