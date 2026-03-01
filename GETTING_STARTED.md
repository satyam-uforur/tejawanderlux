# WanderLuxe - Getting Started

Welcome! Your luxury travel website is ready. Here's everything you need to know.

## What You Have

A fully functional, production-ready travel booking website with:
- 6 pages (home, destinations, packages, booking, dashboard)
- Glassmorphism design (frosted glass effects)
- Responsive design (mobile to desktop)
- MongoDB integration for bookings
- Smooth animations and transitions
- Dark mode support

## Quick Start (3 Steps)

### Step 1: MongoDB Atlas Setup (5 minutes)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account → Create cluster → Get connection string
3. Save your connection string (looks like: `mongodb+srv://user:pass@cluster.mongodb.net/`)

### Step 2: Add to Project
1. Create `.env.local` file in project root:
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/wanderluxe?retryWrites=true&w=majority
```
2. Save the file

### Step 3: Run & Test
```bash
npm install
npm run dev
```
Visit http://localhost:3000 and test booking at `/booking`

## Documentation

Start with these in order:

1. **MONGODB_SETUP.md** - Complete MongoDB Atlas setup guide
2. **DEPLOYMENT_GUIDE.md** - How to deploy to Vercel
3. **README.md** - Technical documentation
4. **DESIGN_SYSTEM.md** - Color system and styling

## Key Files

```
📱 Pages
├── app/page.tsx              → Home page
├── app/destinations/page.tsx → Destinations gallery
├── app/booking/page.tsx      → Booking form
├── app/dashboard/page.tsx    → User dashboard
└── app/packages/page.tsx     → Travel packages

🧩 Components
├── Navbar.tsx       → Navigation (mobile-responsive)
├── Footer.tsx       → Footer
├── Hero.tsx         → Hero section
├── BookingForm.tsx  → Booking form with API
└── DestinationCard.tsx → Card component

⚙️ Backend
└── app/api/bookings/route.ts → MongoDB API endpoint

🎨 Styling
├── app/globals.css  → Design tokens & utilities
└── tailwind.config.ts → Tailwind config

📦 Database
└── lib/mongodb.ts   → MongoDB connection setup
```

## Common Tasks

### Change Website Name
Edit `/app/layout.tsx` → metadata → title

### Change Colors
Edit `/app/globals.css` → CSS variables (--primary, --secondary)

### Add a Destination
Edit `/app/destinations/page.tsx` → Add to `allDestinations` array

### Deploy to Production
```bash
git push origin main
```
Vercel auto-deploys from GitHub

### View Bookings in MongoDB
1. MongoDB Atlas dashboard
2. Click "Collections"
3. Select "wanderluxe" database
4. View "bookings" collection

## API Endpoint

**POST /api/bookings** - Create booking
- Used automatically by BookingForm component
- Stores data in MongoDB
- No authentication required (can be added later)

## Next Steps

1. ✅ Set up MongoDB Atlas (follow MONGODB_SETUP.md)
2. ✅ Create `.env.local` file with MONGODB_URI
3. ✅ Run `npm install && npm run dev`
4. ✅ Test at http://localhost:3000/booking
5. ✅ Deploy to Vercel (see DEPLOYMENT_GUIDE.md)

## Features

✅ Fully responsive design
✅ Glassmorphism effects
✅ Dark mode support
✅ Smooth animations
✅ MongoDB integration
✅ API-ready
✅ Production-optimized
✅ No backend server needed (serverless)

## Customization

Everything is organized and easy to customize:
- **Colors** → `/app/globals.css`
- **Navigation** → `/components/Navbar.tsx`
- **Content** → Individual page files
- **API** → `/app/api/` folder

## Important Notes

- 🔒 Never commit `.env.local` (already in .gitignore)
- 📱 All pages are mobile-responsive
- 🌙 Dark mode is auto-detected from system
- ⚡ Uses Next.js 16 for best performance
- 📦 MongoDB driver already installed

## Need Help?

Check these files:
- **Setting up MongoDB?** → MONGODB_SETUP.md
- **Deploying?** → DEPLOYMENT_GUIDE.md
- **Styling/colors?** → DESIGN_SYSTEM.md
- **Technical details?** → README.md

---

**You're all set! Start with MONGODB_SETUP.md** 🚀
