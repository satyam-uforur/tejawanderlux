'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-4">WanderLuxe</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Discover extraordinary travel experiences crafted for the discerning explorer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Destinations', href: '/destinations' },
                { label: 'Packages', href: '/packages' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-primary smooth-hover text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Booking Help', href: '/booking-help' },
                { label: 'Cancellation', href: '/cancellation' },
                { label: 'Travel Tips', href: '/travel-tips' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-primary smooth-hover text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary hover:bg-primary/10 smooth-hover glow-accent"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm text-center sm:text-left">
              © 2026 WanderLuxe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-foreground/60 hover:text-primary smooth-hover">
                Privacy Policy
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary smooth-hover">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
