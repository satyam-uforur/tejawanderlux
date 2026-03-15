'use client';

import { useState } from 'react';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    guests: '2',
    travelers: '1',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: formData.destination,
          startDate: formData.startDate,
          endDate: formData.endDate,
          guests: formData.guests,
          travelers: formData.travelers,
          email: 'booking@wanderluxe.com',
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit booking');
      }

      const data = await response.json();
      console.log('Booking created:', data);

      // Reset form
      setFormData({
        destination: '',
        startDate: '',
        endDate: '',
        guests: '2',
        travelers: '1',
      });

      setSubmitMessage(
        `Booking request submitted successfully! Booking ID: ${data.bookingId || 'pending'}`
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred while submitting your booking';
      console.error('Booking error:', error);
      setSubmitError(
        errorMessage.includes('MONGODB_URI')
          ? 'Database not configured. Please set up MongoDB Atlas first.'
          : errorMessage
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent space-y-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Plan Your Journey</h2>

      {/* Destination */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            Destination
          </div>
        </label>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
        >
          <option value="">Select a destination</option>
          <option value="bali">Bali, Indonesia</option>
          <option value="paris">Paris, France</option>
          <option value="tokyo">Tokyo, Japan</option>
          <option value="maldives">Maldives</option>
          <option value="dubai">Dubai, UAE</option>
        </select>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              Check-in
            </div>
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              Check-out
            </div>
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
          />
        </div>
      </div>

      {/* Guests and Travelers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              Number of Rooms
            </div>
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
          >
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Room{i !== 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              Number of Travelers
            </div>
          </label>
          <select
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Person{i !== 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Messages */}
      {submitMessage && (
        <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-700 dark:text-green-300 text-sm">
          {submitMessage}
        </div>
      )}
      {submitError && (
        <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-700 dark:text-red-300 text-sm">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? 'Processing...' : 'Get Quote'}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>

      <p className="text-xs text-foreground/60 text-center">
        Your information is secure and will not be shared
      </p>
    </form>
  );
}
