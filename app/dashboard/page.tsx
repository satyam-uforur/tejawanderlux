'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, MapPin, Users, MessageSquare, Settings, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login?redirect=/dashboard');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await fetch('/api/bookings');
        const data = await response.json();
        setBookings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
        setBookings([]);
      } finally {
        setLoadingBookings(false);
      }
    };

    if (isAuthenticated) {
      fetchUserBookings();
    }
  }, [isAuthenticated]);

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

  if (!isAuthenticated || !user) {
    return null;
  }

  const acceptedCount = bookings.filter(b => b.status === 'accepted').length;
  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const declinedCount = bookings.filter(b => b.status === 'declined').length;

  const getStatusIcon = (status: string) => {
    if (status === 'accepted') return <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />;
    if (status === 'declined') return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
    return <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'accepted')
      return 'bg-green-500/20 text-green-700 dark:text-green-300';
    if (status === 'declined')
      return 'bg-red-500/20 text-red-700 dark:text-red-300';
    return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300';
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                My Dashboard
              </h1>
              <p className="text-foreground/60">Welcome back, {user.fullName}! Here's your trip overview.</p>
            </div>
            <Link
              href="/booking"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto text-center"
            >
              New Booking
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Bookings', value: bookings.length.toString(), icon: '✈️', color: 'from-blue-500/20 to-cyan-500/20' },
              { label: 'Accepted', value: acceptedCount.toString(), icon: '✓', color: 'from-green-500/20 to-emerald-500/20' },
              { label: 'Pending', value: pendingCount.toString(), icon: '⏳', color: 'from-yellow-500/20 to-orange-500/20' },
              { label: 'Declined', value: declinedCount.toString(), icon: '✕', color: 'from-red-500/20 to-pink-500/20' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`glass-glossy p-6 rounded-xl glow-accent hover:shadow-lg smooth-hover active:scale-95 transition-all cursor-pointer border border-white/10 hover:border-white/20 bg-gradient-to-br ${stat.color}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-4xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bookings */}
          <div className="glass-glossy rounded-2xl p-6 sm:p-8 glow-accent mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Your Bookings {loadingBookings ? '(Loading...)' : `(${bookings.length})`}
            </h2>

            {loadingBookings ? (
              <div className="flex justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-foreground/60">Loading your bookings...</p>
                </div>
              </div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-foreground/60 mb-6">You haven't made any bookings yet.</p>
                <Link
                  href="/booking"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover inline-block"
                >
                  Create Your First Booking
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/5 dark:hover:bg-white/5 hover:border-white/20 smooth-hover active:scale-[0.99] transition-all cursor-pointer group"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-primary smooth-hover">
                          <MapPin className="w-5 h-5 text-primary group-hover:scale-110 smooth-hover" />
                          {booking.destination}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="group-hover:text-foreground smooth-hover">
                              {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span className="group-hover:text-foreground smooth-hover">
                              {booking.guests} guest{booking.guests > 1 ? 's' : ''}
                            </span>
                          </div>
                          <div className="font-semibold text-foreground group-hover:text-accent smooth-hover">
                            {booking.guests ? `$${(booking.guests * 1000).toLocaleString()}` : 'TBD'}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 min-h-[44px] active:scale-95 transition-transform ${getStatusColor(booking.status)}`}
                        >
                          {getStatusIcon(booking.status)}
                          {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                Icon: MessageSquare,
                title: 'Contact Support',
                desc: 'Need help with your booking?',
                action: 'Get Help',
                href: '/contact',
              },
              {
                Icon: Settings,
                title: 'My Bookings',
                desc: 'View and manage your bookings',
                action: 'View Bookings',
                href: '/dashboard',
              },
            ].map(({ Icon, title, desc, action, href }, idx) => (
              <Link
                key={idx}
                href={href}
                className="glass-glossy rounded-xl glow-accent hover:shadow-lg hover:shadow-primary/20 smooth-hover block min-h-[200px] flex flex-col p-6 sm:p-8 active:scale-95 transition-transform cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-10 h-10 text-primary group-hover:scale-110 smooth-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-foreground/60 text-sm mb-6 flex-1">{desc}</p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-accent smooth-hover">
                  {action}
                  <span className="group-hover:translate-x-1 smooth-hover">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Saved Destinations */}
          <div className="glass-glossy rounded-2xl p-6 sm:p-8 glow-accent">
            <h2 className="text-2xl font-bold text-foreground mb-6">Saved Destinations</h2>
            <p className="text-foreground/60 text-center py-12">
              You haven't saved any destinations yet.{' '}
              <Link href="/destinations" className="text-primary hover:text-accent smooth-hover font-medium">
                Explore destinations
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
