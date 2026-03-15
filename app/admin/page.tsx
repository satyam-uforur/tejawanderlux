'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, BookOpen, MapPin, TrendingUp, DollarSign, CheckCircle, XCircle } from 'lucide-react';

interface Stats {
  totalUsers: number;
  totalBookings: number;
  acceptedBookings: number;
  revenue: number;
  destinationCount: number;
  pendingBookings: number;
  declinedBookings: number;
}

export default function AdminDashboard() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, user, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, statsRes] = await Promise.all([
          fetch('/api/bookings'),
          fetch('/api/stats'),
        ]);
        const bookingsData = await bookingsRes.json();
        const statsData = await statsRes.json();
        setBookings(Array.isArray(bookingsData) ? bookingsData : []);
        setStats(statsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setBookings([]);
        setStats(null);
      } finally {
        setLoadingBookings(false);
      }
    };

    if (isAuthenticated && user?.isAdmin) {
      fetchData();
    }
  }, [isAuthenticated, user?.isAdmin]);

  const handleStatusUpdate = async (bookingId: string, newStatus: string) => {
    setUpdatingId(bookingId);
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setBookings((prev) =>
          prev.map((b) =>
            b._id === bookingId ? { ...b, status: newStatus } : b
          )
        );
      }
    } catch (error) {
      console.error('Failed to update booking:', error);
    } finally {
      setUpdatingId(null);
    }
  };

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

  if (!isAuthenticated || !user?.isAdmin) {
    return null;
  }

  const statCards = [
    {
      icon: Users,
      label: 'Total Users',
      value: stats?.totalUsers ? stats.totalUsers.toLocaleString() : '0',
      change: `${stats?.acceptedBookings || 0} accepted`,
      positive: true,
    },
    {
      icon: BookOpen,
      label: 'Total Bookings',
      value: stats?.totalBookings ? stats.totalBookings.toLocaleString() : '0',
      change: `${stats?.pendingBookings || 0} pending`,
      positive: true,
    },
    {
      icon: MapPin,
      label: 'Destinations',
      value: (stats?.destinationCount || 50) + '+',
      change: '+3 new',
      positive: true,
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: stats?.revenue ? `$${(stats.revenue / 1000).toFixed(0)}K` : '$0',
      change: `${stats?.declinedBookings || 0} declined`,
      positive: true,
    },
  ];



  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
              Admin Dashboard
            </h1>
            <p className="text-lg text-foreground/60">
              Welcome back, {user.fullName}. Here's your business overview.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statCards.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-glossy p-6 rounded-2xl glow-accent smooth-hover hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        stat.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Recent Bookings Table */}
          <div className="glass-glossy rounded-2xl glow-accent overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                All Bookings {loadingBookings ? '(Loading...)' : `(${bookings.length})`}
              </h2>
            </div>

            {loadingBookings ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-foreground/60">Loading bookings...</p>
              </div>
            ) : bookings.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-foreground/60">No bookings yet</p>
              </div>
            ) : (
              <div className="space-y-3 sm:overflow-x-auto">
                {/* Mobile view: Card layout */}
                <div className="sm:hidden space-y-3">
                  {bookings.map((booking: any) => (
                    <div
                      key={booking._id}
                      className="border border-white/10 rounded-lg p-4 hover:bg-white/5 smooth-hover"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground text-sm flex-1">
                            {booking.destination}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                              booking.status === 'accepted'
                                ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                                : booking.status === 'declined'
                                ? 'bg-red-500/20 text-red-700 dark:text-red-300'
                                : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'
                            }`}
                          >
                            {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
                          </span>
                        </div>
                        <div className="text-xs text-foreground/60 space-y-1">
                          <p>Guests: {booking.guests}</p>
                          <p>
                            {new Date(booking.startDate).toLocaleDateString()} to{' '}
                            {new Date(booking.endDate).toLocaleDateString()}
                          </p>
                        </div>
                        {booking.status === 'pending' && (
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() => handleStatusUpdate(booking._id, 'accepted')}
                              disabled={updatingId === booking._id}
                              className="flex-1 px-4 py-2 rounded-lg bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30 smooth-hover font-medium text-sm disabled:opacity-50 flex items-center justify-center gap-2 min-h-[44px]"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Accept
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(booking._id, 'declined')}
                              disabled={updatingId === booking._id}
                              className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 smooth-hover font-medium text-sm disabled:opacity-50 flex items-center justify-center gap-2 min-h-[44px]"
                            >
                              <XCircle className="w-4 h-4" />
                              Decline
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop view: Table layout */}
                <table className="w-full hidden sm:table">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                        Destination
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                        Guests
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                        Dates
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking: any) => (
                      <tr
                        key={booking._id}
                        className="border-b border-white/5 hover:bg-white/5 smooth-hover"
                      >
                        <td className="px-6 py-4 text-sm text-foreground font-medium">
                          {booking.destination}
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/80">
                          {booking.guests} guest{booking.guests > 1 ? 's' : ''}
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/60">
                          {new Date(booking.startDate).toLocaleDateString()} to{' '}
                          {new Date(booking.endDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              booking.status === 'accepted'
                                ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                                : booking.status === 'declined'
                                ? 'bg-red-500/20 text-red-700 dark:text-red-300'
                                : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'
                            }`}
                          >
                            {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {booking.status === 'pending' ? (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleStatusUpdate(booking._id, 'accepted')}
                                disabled={updatingId === booking._id}
                                className="px-3 py-2 rounded-lg bg-green-500/20 text-green-700 dark:text-green-300 hover:bg-green-500/30 smooth-hover font-medium text-sm disabled:opacity-50 flex items-center gap-1 min-h-[40px]"
                              >
                                <CheckCircle className="w-4 h-4" />
                                Accept
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(booking._id, 'declined')}
                                disabled={updatingId === booking._id}
                                className="px-3 py-2 rounded-lg bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 smooth-hover font-medium text-sm disabled:opacity-50 flex items-center gap-1 min-h-[40px]"
                              >
                                <XCircle className="w-4 h-4" />
                                Decline
                              </button>
                            </div>
                          ) : (
                            <span className="text-foreground/50 text-xs">No actions</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-glossy p-8 rounded-2xl glow-accent">
              <h3 className="text-lg font-bold text-foreground mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Database</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">API Status</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                    Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Email Service</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-glossy p-8 rounded-2xl glow-accent">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="/destinations"
                  className="block px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 smooth-hover font-medium text-sm"
                >
                  Manage Destinations
                </a>
                <a
                  href="/packages"
                  className="block px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 smooth-hover font-medium text-sm"
                >
                  View Packages
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30 smooth-hover font-medium text-sm"
                >
                  View Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
