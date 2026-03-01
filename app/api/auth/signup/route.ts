import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createUsersCollection, getUserByEmail, createUser } from '@/lib/models/User';

export async function POST(request: NextRequest) {
  try {
    await createUsersCollection();

    const { email, password, fullName, phone } = await request.json();

    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: 'Email, password, and full name are required' },
        { status: 400 }
      );
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await createUser({
      email,
      password: hashedPassword,
      fullName,
      phone: phone || '',
    });

    return NextResponse.json({
      success: true,
      user: {
        email,
        fullName,
        id: userId,
        isAdmin: false,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create account. Please ensure MONGODB_URI is set.' },
      { status: 500 }
    );
  }
}
