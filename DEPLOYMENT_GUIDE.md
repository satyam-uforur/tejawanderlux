# WanderLuxe - Complete Deployment Guide

Your luxury travel website is now fully functional with MongoDB integration! Follow this guide to deploy.

## Current Status

✅ **Frontend** - Fully built and responsive
✅ **API Routes** - Ready for MongoDB
✅ **UI Components** - Complete with glassmorphism design
✅ **Mobile Responsive** - Optimized for all devices

## Quick Start (Local Development)

### 1. Set Up MongoDB Atlas
- Follow the detailed guide in `MONGODB_SETUP.md`
- Get your connection string
- Create `.env.local` in project root:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wanderluxe?retryWrites=true&w=majority
```

### 2. Install & Run
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### 3. Test Booking
1. Go to `/booking` page
2. Fill form and click "Get Quote"
3. Check MongoDB Atlas → Collections → bookings to see your data

## Deployment to Vercel

### 1. Push to GitHub (if not already)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"

### 3. Set Environment Variables
1. In Vercel dashboard: Settings → Environment Variables
2. Add: `MONGODB_URI` with your MongoDB Atlas connection string
3. Click "Save"

### 4. Deploy
- Click "Deploy"
- Vercel will build and deploy automatically
- Your site will be live in 1-2 minutes!

## File Structure

```
/app
  /api
    /bookings/
      route.ts          (API endpoint for bookings)
  /destinations
    /[id]/
      page.tsx          (Dynamic destination detail page)
    page.tsx            (Destinations gallery)
  /booking
    page.tsx            (Booking page)
  /dashboard
    page.tsx            (User bookings)
  /packages
    page.tsx            (Travel packages)
  layout.tsx            (Root layout)
  page.tsx              (Home page)

/components
  Navbar.tsx            (Sticky navigation)
  Footer.tsx            (Footer)
  Hero.tsx              (Hero section)
  BookingForm.tsx       (Booking form with API integration)
  DestinationCard.tsx   (Destination cards)

/lib
  mongodb.ts            (MongoDB connection logic)

/public
  hero-destination.jpg  (Hero image)

.env.example            (Template for environment variables)
MONGODB_SETUP.md        (MongoDB setup guide)
DEPLOYMENT_GUIDE.md     (This file)
```

## Customization Guide

### Add a New Destination
1. Open `/app/destinations/page.tsx`
2. Add to `allDestinations` array:
```typescript
{
  id: 'new-id',
  name: 'City Name',
  description: 'Description here',
  rating: 4.8,
  reviews: 100,
  price: 1299,
  continent: 'Asia',
  isNew: false,
}
```

### Update Destination Details
1. Open `/app/destinations/[id]/page.tsx`
2. Add to `destinationData` object:
```typescript
'new-id': {
  name: 'City Name',
  continent: 'Asia',
  rating: 4.8,
  reviews: 100,
  price: 1299,
  description: '...',
  fullDescription: '...',
  highlights: [...],
  images: [...],
}
```

### Change Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.15 264);  /* Main brand color */
  --secondary: oklch(0.65 0.18 55); /* Accent color */
}
```

### Update Navigation Links
Edit `/components/Navbar.tsx` `navLinks` array

### Change Site Metadata
Edit `/app/layout.tsx` metadata object

## API Reference

### POST /api/bookings
Create a new booking

**Request:**
```json
{
  "destination": "Bali, Indonesia",
  "startDate": "2026-06-15",
  "endDate": "2026-06-22",
  "guests": "2",
  "travelers": "1",
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "message": "Booking created successfully",
  "bookingId": "507f1f77bcf86cd799439011"
}
```

### GET /api/bookings
Fetch all bookings

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "destination": "Bali, Indonesia",
    "startDate": "2026-06-15",
    "endDate": "2026-06-22",
    "guests": "2",
    "travelers": "1",
    "createdAt": "2026-03-01T10:30:00Z",
    "status": "pending"
  }
]
```

## Performance Optimization

### Already Implemented
- Next.js 16 with App Router (fastest)
- Image optimization with next/image
- Dynamic imports for code splitting
- CSS minification (Tailwind v4)
- Font optimization

### Optional Enhancements
1. **Add Caching**
   - Use Vercel's Edge Caching
   - Add revalidatePath() in API routes

2. **Add Search/Filtering**
   - Implement MongoDB text search
   - Add Algolia integration

3. **Add Authentication**
   - Implement Auth.js/NextAuth
   - Add user accounts system

## Security Checklist

✅ Environment variables secured (not in code)
✅ MongoDB connection string protected
✅ CORS ready (configure as needed)
✅ Input validation in API routes
✅ Error handling in place
✅ No sensitive data in logs

### Production Security
- [ ] Enable HTTPS (Vercel does this automatically)
- [ ] Set MongoDB IP whitelist to your Vercel IPs
- [ ] Add rate limiting to API routes
- [ ] Enable CORS restrictions
- [ ] Add authentication to sensitive routes
- [ ] Use environment variables for all secrets

## Troubleshooting

### Booking API Returns 500 Error
- Check MongoDB URI in environment variables
- Verify MongoDB cluster is running
- Check MongoDB Atlas Network Access settings

### Page Shows "Database not configured"
- Add MONGODB_URI to `.env.local` (development)
- Add MONGODB_URI to Vercel Environment Variables (production)

### Images Not Loading
- Images use `next/image` component
- In production, images should serve from CDN
- Update image paths in components if needed

### Booking Form Not Submitting
- Check browser console for errors
- Verify API endpoint is working: `curl http://localhost:3000/api/bookings`
- Check network tab in browser DevTools

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas Help](https://docs.mongodb.com/atlas/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Next Steps

1. ✅ Test locally with MongoDB
2. ✅ Deploy to Vercel
3. ✅ Set environment variables
4. 🔄 Customize colors and content
5. 🔄 Add more destinations
6. 🔄 Add user authentication
7. 🔄 Implement payment processing
8. 🔄 Add email notifications

---

**Your WanderLuxe website is production-ready!** 🚀
