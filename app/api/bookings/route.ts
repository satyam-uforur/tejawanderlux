import clientPromise from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('wanderluxe');
    const bookings = db.collection('bookings');

    // Validate required fields
    if (!body.destination || !body.startDate || !body.endDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create booking document
    const booking = {
      ...body,
      createdAt: new Date(),
      status: 'pending',
    };

    const result = await bookings.insertOne(booking);

    return NextResponse.json(
      {
        message: 'Booking created successfully',
        bookingId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking API error:', error);

    if (error instanceof Error && error.message.includes('MONGODB_URI')) {
      return NextResponse.json(
        {
          error: 'Database not configured. Please add MONGODB_URI to environment variables.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('wanderluxe');
    const bookings = db.collection('bookings');

    const allBookings = await bookings
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json(allBookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
