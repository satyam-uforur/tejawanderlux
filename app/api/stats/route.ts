import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('wanderluxe');

    // Get total users count
    const users = db.collection('users');
    const totalUsers = await users.countDocuments();

    // Get bookings statistics
    const bookings = db.collection('bookings');
    const totalBookings = await bookings.countDocuments();
    const acceptedBookings = await bookings.countDocuments({ status: 'accepted' });
    
    // Calculate revenue from accepted bookings
    const acceptedBookingsData = await bookings
      .find({ status: 'accepted' })
      .toArray();
    
    const revenue = acceptedBookingsData.reduce((sum: number, booking: any) => {
      const basePrice = booking.guests ? 1000 * booking.guests : 1000;
      return sum + basePrice;
    }, 0);

    // Count unique destinations
    const uniqueDestinations = await bookings.distinct('destination');
    const destinationCount = uniqueDestinations.length;

    return Response.json({
      totalUsers,
      totalBookings,
      acceptedBookings,
      revenue: Math.round(revenue),
      destinationCount,
      pendingBookings: totalBookings - acceptedBookings - (await bookings.countDocuments({ status: 'declined' })),
      declinedBookings: await bookings.countDocuments({ status: 'declined' }),
    });
  } catch (error) {
    console.error('Stats error:', error);
    return Response.json({
      totalUsers: 0,
      totalBookings: 0,
      acceptedBookings: 0,
      revenue: 0,
      destinationCount: 0,
      pendingBookings: 0,
      declinedBookings: 0,
    });
  }
}
