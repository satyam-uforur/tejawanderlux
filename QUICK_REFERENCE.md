# WanderLuxe - Quick Reference Guide

## Get Started in 2 Minutes

### Step 1: Add MongoDB URI
Create `.env.local` in project root:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/wanderluxe?retryWrites=true&w=majority
```

### Step 2: Start Server
```bash
npm run dev
```

### Step 3: Test Login
Open `http://localhost:3000/login`

**Admin Credentials:**
- Email: `admin@wanderluxe.com`
- Password: `admin123`

---

## Site Map

```
Home (/)
├── Navbar (Login/Logout)
├── Hero Section (Parallax)
├── Destinations Preview
├── Featured Packages
└── Footer

Public Routes
├── /destinations - Browse 50+ destinations
│   └── /destinations/[id] - Destination details
├── /login - Sign in / Sign up
└── / - Home page

Protected Routes (Login Required)
├── /packages - All travel packages
├── /booking - Booking form
└── /admin - Admin dashboard (admin only)
```

---

## Key Features

### Authentication
- User signup/login at `/login`
- Password encrypted with bcryptjs
- Session stored in localStorage
- Auto-logout on session clear

### Destinations
- 50+ destinations (20 Indian, 30 world)
- Each has: name, image, price, rating, activities
- Searchable and filterable grid
- Individual detail pages

### Protected Pages
| Page | Route | Required |
|------|-------|----------|
| Packages | `/packages` | Login |
| Booking | `/booking` | Login |
| Admin | `/admin` | Admin Login |

### Admin Dashboard
- User and booking statistics
- Recent bookings table
- System status indicators
- Quick action links

---

## API Endpoints

### Authentication

**Login**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Signup**
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "password123",
  "fullName": "User Name",
  "phone": "+1234567890"
}
```

---

## File Structure

```
app/
├── page.tsx           # Home page
├── login/page.tsx     # Login/signup
├── destinations/      # Destinations pages
├── packages/page.tsx  # Packages (protected)
├── booking/page.tsx   # Booking (protected)
├── admin/page.tsx     # Admin (admin only)
├── api/
│   └── auth/
│       ├── login/route.ts
│       └── signup/route.ts
└── globals.css        # Global styles & glass effects

components/
├── Navbar.tsx         # Navigation with auth
├── Footer.tsx         # Footer
├── Hero.tsx          # Hero with parallax
├── DestinationCard.tsx
├── BookingForm.tsx
└── ProtectedRoute.tsx

lib/
├── contexts/
│   └── AuthContext.tsx # Auth state management
├── models/
│   └── User.ts        # MongoDB user model
├── destinations.ts    # All destinations data
└── mongodb.ts        # Database connection
```

---

## Styling

### Glass Effects
- `.glass` - Basic glass effect
- `.glass-glossy` - Glossy with shine effect
- `.glow-accent` - Glow shadow
- `.smooth-hover` - Transition effect

### Colors
- Primary: Deep teal (`#3526ca`)
- Secondary: Warm gold (`#c96b30`)
- Accent: Orange (`#d97706`)

### Responsive Breakpoints
- Mobile: 375px (sm)
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Wide: 1920px (xl)

---

## Database

### User Document
```typescript
{
  _id: ObjectId,
  email: string (unique),
  password: string (hashed),
  fullName: string,
  phone?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### Collections Auto-Created
- `users` - All registered users

---

## Troubleshooting

### "MONGODB_URI not set" Error
✅ Add `MONGODB_URI` to `.env.local`

### Cannot see protected pages
✅ Login first at `/login`

### Admin dashboard not showing
✅ Must login with admin account (admin@wanderluxe.com)

### Database not connecting
✅ Check MONGODB_URI is correct
✅ Check MongoDB cluster is running
✅ Check firewall allows connections

---

## Common Tasks

### Add New Destination
Edit `/lib/destinations.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Place Name',
  country: 'Country',
  category: 'Category',
  image: 'image-url',
  description: '...',
  price: 1999,
  rating: 4.8,
  reviews: 123,
  duration: '5 days',
  activities: ['activity1', 'activity2'],
}
```

### Change Admin Password
1. Login with admin@wanderluxe.com / admin123
2. Database update needed (manual)
3. TODO: Add password change feature

### Customize Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.15 264);  /* Deep teal */
  --secondary: oklch(0.65 0.18 55); /* Warm gold */
  --accent: oklch(0.55 0.2 48);     /* Orange */
}
```

---

## Environment Variables

```env
# Required
MONGODB_URI=mongodb+srv://...

# Optional (for future use)
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

---

## Deployment to Vercel

1. Push code to GitHub
2. Connect repo to Vercel
3. Add `MONGODB_URI` in Vercel Environment
4. Deploy with one click
5. Magic! 🎉

---

## User Roles

### Guest (Not Logged In)
- ✅ View home page
- ✅ View destinations
- ✅ View destination details
- ❌ View packages (redirect to login)
- ❌ Make bookings (redirect to login)
- ❌ Access admin (redirect to home)

### Regular User (Logged In)
- ✅ All guest features
- ✅ View packages
- ✅ Make bookings
- ✅ See profile in navbar
- ✅ Access own bookings
- ❌ Access admin (redirect to home)

### Admin User
- ✅ All regular user features
- ✅ Access admin dashboard
- ✅ View all bookings
- ✅ View system statistics
- ✅ Manage platform (future)

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Tips

- Images are lazy-loaded
- CSS uses production optimization
- Database queries are indexed
- API responses cached where possible

---

## Need Help?

1. Check error messages in browser console
2. Review documentation files (README.md, AUTH_SETUP.md)
3. Check `.env.local` configuration
4. Verify MongoDB connection
5. Look at network tab for API errors

---

## Useful Links

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Deployment](https://vercel.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Last Updated:** March 2024
**Status:** Production Ready ✅
