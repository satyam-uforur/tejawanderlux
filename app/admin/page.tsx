'use client';

import { useAuth } from '@/lib/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, BookOpen, MapPin, TrendingUp, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.isAdmin)) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated, user, router]);

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

  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: '1,234',
      change: '+12%',
      positive: true,
    },
    {
      icon: BookOpen,
      label: 'Total Bookings',
      value: '856',
      change: '+8%',
      positive: true,
    },
    {
      icon: MapPin,
      label: 'Destinations',
      value: '50+',
      change: '+3 new',
      positive: true,
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '$125K',
      change: '+23%',
      positive: true,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      user: 'John Doe',
      destination: 'Taj Mahal, Agra',
      date: '2024-03-01',
      status: 'Confirmed',
      amount: '$2,499',
    },
    {
      id: 2,
      user: 'Jane Smith',
      destination: 'Goa Beaches',
      date: '2024-02-28',
      status: 'Pending',
      amount: '$1,999',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      destination: 'Paris',
      date: '2024-02-27',
      status: 'Confirmed',
      amount: '$3,499',
    },
    {
      id: 4,
      user: 'Sarah Williams',
      destination: 'Maldives Luxury',
      date: '2024-02-26',
      status: 'Confirmed',
      amount: '$4,999',
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
            {stats.map((stat, idx) => {
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
                Recent Bookings
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                      Destination
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground/80">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground/80">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b border-white/5 hover:bg-white/5 smooth-hover"
                    >
                      <td className="px-6 py-4 text-sm text-foreground font-medium">
                        {booking.user}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/80">
                        {booking.destination}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/60">
                        {new Date(booking.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                              : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-right text-foreground">
                        {booking.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
