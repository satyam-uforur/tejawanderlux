'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, MapPin, LogOut, User } from 'lucide-react';
import { useAuth } from '@/lib/contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/booking', label: 'Book Now' },
  ];

  return (
    <nav className="glass-glossy fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group smooth-hover">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent glow-accent flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-semibold text-lg sm:text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:block">
              WanderLuxe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary smooth-hover relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full smooth-hover" />
              </Link>
            ))}
            {isAuthenticated && user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{user.fullName}</span>
                  {user.isAdmin && (
                    <Link
                      href="/admin"
                      className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary font-semibold hover:bg-primary/30 smooth-hover"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                </div>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                  className="px-6 py-2 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-500/30 smooth-hover flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/10 smooth-hover"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-white/5 smooth-hover"
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && user ? (
              <>
                <div className="px-4 py-3 border-t border-white/10 mt-3">
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {user.fullName}
                  </p>
                  {user.isAdmin && (
                    <p className="text-xs text-primary font-semibold mt-1">Administrator</p>
                  )}
                </div>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                    setIsOpen(false);
                  }}
                  className="w-full mt-2 mx-4 px-4 py-2 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-500/30 smooth-hover flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block mx-4 mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium text-center glow-accent"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
