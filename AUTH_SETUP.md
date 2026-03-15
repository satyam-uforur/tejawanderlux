# WanderLuxe Authentication System Setup

## Overview

The WanderLuxe website now includes a complete authentication system with user registration, login, and admin dashboard functionality. All authentication data is stored in MongoDB with encrypted passwords.

## Features

- **User Registration & Login** - Users can create accounts and log in securely
- **Password Encryption** - bcryptjs for secure password hashing
- **Admin Account** - Pre-configured admin account with special privileges
- **Protected Routes** - Packages and Booking pages require authentication
- **Admin Dashboard** - Exclusive admin panel for viewing statistics and bookings
- **MongoDB Integration** - All user data stored in MongoDB Atlas
- **Auto Schema Creation** - Database collections auto-created if missing

## Quick Start

### 1. Get Your MongoDB URI

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in to your account
3. Create a new cluster (free tier available)
4. Get your connection string:
   - Click "Connect"
   - Choose "Drivers"
   - Copy your connection string
   - Replace `<password>` with your database password
   - The string should look like: `mongodb+srv://username:password@cluster0.mongodb.net/wanderluxe?retryWrites=true&w=majority`

### 2. Add Environment Variables

Create a `.env.local` file in your project root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/wanderluxe?retryWrites=true&w=majority
```

### 3. Restart the Development Server

```bash
npm run dev
```

## Default Admin Account

Once the server starts, the admin account is automatically created:

- **Email:** `admin@wanderluxe.com`
- **Password:** `admin123`

**Important:** Change the admin password after first login!

## User Flows

### Login Page (`/login`)

Users can:
1. **Sign In** - Log in with existing email and password
2. **Sign Up** - Create a new account with:
   - Full Name
   - Email
   - Password
   - Phone (optional)

Features:
- Password visibility toggle
- Form validation
- Error messages for failed attempts
- Redirect to protected pages after login

### Protected Routes

The following pages require authentication:

1. **Packages Page** (`/packages`)
   - Shows all travel packages
   - Redirects to login if not authenticated

2. **Booking Page** (`/booking`)
   - Book a trip
   - Redirects to login if not authenticated

3. **Admin Dashboard** (`/admin`)
   - View statistics and recent bookings
   - **Admin-only** - regular users cannot access

### Navigation Changes

- **Not Logged In:**
  - Login button in navbar
  - No access to packages or booking pages

- **Logged In (Regular User):**
  - User name displayed
  - Logout button
  - Full access to packages and booking

- **Logged In (Admin User):**
  - User name displayed
  - Admin Dashboard link
  - Logout button
  - Access to admin panel

## API Routes

### Authentication Endpoints

#### POST `/api/auth/login`

Login with email and password.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "user": {
    "email": "user@example.com",
    "fullName": "John Doe",
    "id": "user_id",
    "isAdmin": false
  }
}
```

**Response (Error):**
```json
{
  "error": "Invalid email or password"
}
```

#### POST `/api/auth/signup`

Create a new user account.

**Request:**
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "fullName": "Jane Doe",
  "phone": "+1234567890"
}
```

**Response (Success):**
```json
{
  "success": true,
  "user": {
    "email": "newuser@example.com",
    "fullName": "Jane Doe",
    "id": "new_user_id",
    "isAdmin": false
  }
}
```

**Response (Error):**
```json
{
  "error": "Email already registered"
}
```

## Database Schema

### Users Collection

```typescript
interface User {
  _id: ObjectId;
  email: string;        // unique
  password: string;     // hashed with bcryptjs
  fullName: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Authentication Flow

```
User Registration/Login
    ↓
Frontend sends email & password to API
    ↓
Backend checks MongoDB for user
    ↓
If login: Verify password with bcrypt
If signup: Hash password and create user
    ↓
Return user data to frontend
    ↓
Frontend stores user in AuthContext
    ↓
User can access protected routes
```

## AuthContext Hook

Use the `useAuth` hook in client components:

```typescript
import { useAuth } from '@/lib/contexts/AuthContext';

export default function MyComponent() {
  const { user, isAuthenticated, isLoading, login, signup, logout } = useAuth();

  // user: AuthUser | null
  // isAuthenticated: boolean
  // isLoading: boolean
  // login: (email, password) => Promise<void>
  // signup: (email, password, fullName, phone?) => Promise<void>
  // logout: () => void
}
```

## Protected Route Component

Use the `ProtectedRoute` component to protect pages:

```typescript
'use client';

import ProtectedRoute from '@/components/ProtectedRoute';

export default function MyPage() {
  return (
    <ProtectedRoute requireAdmin={false}>
      <YourContent />
    </ProtectedRoute>
  );
}
```

## Troubleshooting

### "MONGODB_URI is not set" Error

**Solution:** Add `MONGODB_URI` to `.env.local`

### "Database not configured" Error

**Solution:** 
1. Check that MONGODB_URI is correct
2. Ensure your MongoDB cluster is running
3. Check that database user has access permissions

### Password Reset

To reset the admin password:
1. Log in with admin@wanderluxe.com / admin123
2. Note: Password reset feature not yet implemented
3. Contact database admin to manually update password

### Cannot Create User

Possible causes:
1. Email already exists - try a different email
2. MongoDB connection error - check MONGODB_URI
3. Network issue - check internet connection

## Security Best Practices

✅ Passwords hashed with bcryptjs (10 rounds)
✅ Secure password input fields
✅ HTTPS recommended for production
✅ Environment variables for sensitive data
✅ Input validation on both frontend and backend

⚠️ TODO for Production:
- Email verification
- Password reset via email
- Session tokens / JWT
- CSRF protection
- Rate limiting on login attempts
- Two-factor authentication (optional)

## Admin Dashboard Features

The admin dashboard (`/admin`) shows:

- **Statistics:**
  - Total users
  - Total bookings
  - Number of destinations
  - Revenue

- **Recent Bookings Table:**
  - User names
  - Booking destinations
  - Booking dates
  - Status (Confirmed/Pending)
  - Booking amounts

- **System Status:**
  - Database connection
  - API health
  - Email service status

- **Quick Actions:**
  - Manage destinations
  - View packages
  - View website

## Next Steps

1. Set up MongoDB Atlas account
2. Add MONGODB_URI to .env.local
3. Restart development server
4. Visit `/login` to test authentication
5. Log in with admin@wanderluxe.com / admin123
6. Visit `/admin` to see the admin dashboard
7. Create a new user account to test signup
8. Explore protected routes with your new account

## Support

For issues or questions about authentication:
1. Check the troubleshooting section above
2. Review error messages carefully
3. Check `.env.local` configuration
4. Verify MongoDB Atlas settings
5. Check browser console for client-side errors
6. Check server logs for backend errors
