import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!['pending', 'accepted', 'declined'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be pending, accepted, or declined' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('wanderluxe');
    const bookings = db.collection('bookings');

    const result = await bookings.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Booking status updated successfully',
        bookingId: id,
        status,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update booking error:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    );
  }
}
