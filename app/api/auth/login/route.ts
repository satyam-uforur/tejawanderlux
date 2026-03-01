import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createUsersCollection, getUserByEmail } from '@/lib/models/User';

// Initialize admin user on first run
async function initializeAdmin() {
  try {
    const adminEmail = 'admin@wanderluxe.com';
    const existingAdmin = await getUserByEmail(adminEmail);
    
    if (!existingAdmin) {
      const { createUser } = await import('@/lib/models/User');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await createUser({
        email: adminEmail,
        password: hashedPassword,
        fullName: 'Admin User',
        phone: '+91-9999999999',
      });
    }
  } catch (error) {
    console.error('Admin initialization error:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    await createUsersCollection();
    await initializeAdmin();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const isAdmin = email === 'admin@wanderluxe.com';

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
        fullName: user.fullName,
        id: user._id,
        isAdmin,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Failed to login. Please ensure MONGODB_URI is set.' },
      { status: 500 }
    );
  }
}
