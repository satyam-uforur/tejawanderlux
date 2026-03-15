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
              <div className="flex items-center gap-3">
                <Link
                  href={user.isAdmin ? "/admin" : "/dashboard"}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/80 to-accent/80 text-white font-semibold hover:from-primary hover:to-accent glow-accent smooth-hover flex items-center gap-2 min-h-[44px] active:scale-95 transition-transform"
                >
                  <User className="w-4 h-4" />
                  {user.isAdmin ? "Admin" : "Dashboard"}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                  className="px-5 py-2.5 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-500/30 smooth-hover flex items-center gap-2 min-h-[44px] active:scale-95 transition-transform"
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
                  <p className="text-sm font-medium text-foreground flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-primary" />
                    {user.fullName}
                    {user.isAdmin && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-semibold">
                        Admin
                      </span>
                    )}
                  </p>
                </div>
                <Link
                  href={user.isAdmin ? "/admin" : "/dashboard"}
                  onClick={() => setIsOpen(false)}
                  className="block w-full mx-4 my-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary/80 to-accent/80 text-white font-semibold hover:from-primary hover:to-accent glow-accent smooth-hover text-center min-h-[48px] flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <User className="w-5 h-5" />
                  {user.isAdmin ? "Admin Dashboard" : "My Dashboard"}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                    setIsOpen(false);
                  }}
                  className="w-full mx-4 my-2 px-5 py-3 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-500/30 smooth-hover flex items-center justify-center gap-2 min-h-[48px] active:scale-95 transition-transform"
                >
                  <LogOut className="w-5 h-5" />
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
