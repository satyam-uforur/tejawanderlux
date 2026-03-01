import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, MapPin, Users, Download, MessageSquare, Settings } from 'lucide-react';

export default function DashboardPage() {
  const bookings = [
    {
      id: 1,
      destination: 'Bali, Indonesia',
      startDate: 'June 15, 2026',
      endDate: 'June 22, 2026',
      guests: 2,
      status: 'Confirmed',
      price: 2599,
    },
    {
      id: 2,
      destination: 'Paris, France',
      startDate: 'August 1, 2026',
      endDate: 'August 8, 2026',
      guests: 4,
      status: 'Pending',
      price: 4299,
    },
  ];

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
              <p className="text-foreground/60">Welcome back! Here's your trip overview.</p>
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
              { label: 'Active Bookings', value: '2', icon: '✈️' },
              { label: 'Total Trips', value: '12', icon: '🌍' },
              { label: 'Saved Destinations', value: '18', icon: '❤️' },
              { label: 'Loyalty Points', value: '2,450', icon: '⭐' },
            ].map((stat, idx) => (
              <div key={idx} className="glass-glossy p-6 rounded-xl glow-accent">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bookings */}
          <div className="glass-glossy rounded-2xl p-6 sm:p-8 glow-accent mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Active Bookings</h2>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/5 dark:hover:bg-white/5 smooth-hover"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        {booking.destination}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {booking.startDate} - {booking.endDate}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {booking.guests} guests
                        </div>
                        <div className="font-semibold text-foreground">
                          ${booking.price.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                          booking.status === 'Confirmed'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-primary/20 text-primary'
                        }`}
                      >
                        {booking.status}
                      </span>

                      <button className="p-2 rounded-lg hover:bg-white/10 smooth-hover">
                        <Download className="w-5 h-5 text-foreground/60" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                Icon: MessageSquare,
                title: 'Contact Support',
                desc: 'Need help with your booking?',
                action: 'Get Help',
              },
              {
                Icon: Settings,
                title: 'Account Settings',
                desc: 'Manage your preferences',
                action: 'Settings',
              },
            ].map(({ Icon, title, desc, action }, idx) => (
              <div key={idx} className="glass-glossy p-6 sm:p-8 rounded-xl glow-accent hover:shadow-lg hover:shadow-primary/20 smooth-hover cursor-pointer">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{desc}</p>
                <button className="text-primary font-medium hover:text-accent smooth-hover">
                  {action} →
                </button>
              </div>
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
