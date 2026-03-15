# WanderLuxe - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. View the Site
Your website is already live! Navigate through the pages:
- **Home** - Hero section with featured destinations
- **Destinations** - Browse 50+ curated travel destinations
- **Packages** - Choose from Weekender, Classic Explorer, or Premium Adventure
- **Book Now** - Fill out the booking form
- **Dashboard** - View bookings and saved destinations

### 2. Customize Content
Edit the destination data and packages in these files:
- **Destinations**: `/app/page.tsx` - lines 30-50 (home), `/app/destinations/page.tsx` - lines 21-70
- **Packages**: `/app/packages/page.tsx` - lines 10-50
- **Navigation**: `/components/Navbar.tsx` - update links

### 3. Update Branding
Change these elements to match your brand:
- **Logo & Name**: `/components/Navbar.tsx` - replace "WanderLuxe"
- **Colors**: `/app/globals.css` - update primary (teal), secondary (gold), accent colors
- **Content**: All text is editable - update descriptions, benefits, features
- **Images**: Replace `/public/hero-destination.jpg` with your own

## 📱 Mobile & Desktop Responsive

The site is optimized for all devices:
- ✅ Mobile (375px+) - Hamburger menu, stacked layouts
- ✅ Tablet (768px+) - Side-by-side layouts
- ✅ Desktop (1024px+) - Full multi-column grids
- ✅ Wide (1920px+) - Maximized content display

## 🎨 Glassmorphism Effects

The design uses these glossy effects throughout:
```
glass        → Basic frosted glass with blur
glass-glossy → Glass with shine effect
glow-accent  → Glowing shadow with accent color
smooth-hover → Smooth animations on hover
```

All effects are responsive and work on mobile!

## 🔧 Common Customizations

### Change Colors
In `/app/globals.css`, update the color variables:
```css
:root {
  --primary: oklch(0.35 0.15 264);    /* Change this for primary color */
  --secondary: oklch(0.65 0.18 55);   /* Change this for secondary color */
  --accent: oklch(0.55 0.2 48);       /* Change this for accent color */
}
```

### Add More Destinations
In `/app/page.tsx` and `/app/destinations/page.tsx`, add to the `destinations` array:
```tsx
{
  id: '5',
  name: 'Your Destination',
  description: 'Description here',
  rating: 4.8,
  reviews: 150,
  price: 1499,
  continent: 'Continent',
  isNew: true,
}
```

### Update Package Details
In `/app/packages/page.tsx`, modify the `packages` array to add features and pricing.

### Change Navigation Links
In `/components/Navbar.tsx`, update the `navLinks` array:
```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/your-page', label: 'Your Link' },
  // Add more...
];
```

## 📊 File Structure Overview

```
WanderLuxe/
├── app/
│   ├── page.tsx              # 🏠 Home page
│   ├── layout.tsx            # Layout & metadata
│   ├── globals.css           # 🎨 Styles & design tokens
│   ├── destinations/
│   │   ├── page.tsx          # Destinations gallery
│   │   └── [id]/page.tsx     # Individual destination
│   ├── packages/page.tsx     # Travel packages
│   ├── booking/page.tsx      # Booking page
│   └── dashboard/page.tsx    # User dashboard
├── components/
│   ├── Navbar.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   ├── Hero.tsx              # Hero section
│   ├── DestinationCard.tsx   # Card component
│   └── BookingForm.tsx       # Booking form
├── public/
│   └── hero-destination.jpg  # Hero image
├── README.md                 # Full documentation
├── DESIGN_SYSTEM.md          # Design tokens & utilities
└── QUICKSTART.md             # This file!
```

## 🎯 Next Steps

### To Deploy
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! 🚀

### To Add Features
1. **Booking System**: Add backend API integration
2. **Authentication**: Add user accounts with Auth.js
3. **Payments**: Integrate Stripe for checkout
4. **Reviews**: Add review/rating system
5. **Search**: Add advanced destination search

### To Optimize
1. **Images**: Optimize with `<Image />` component
2. **SEO**: Update metadata in each page
3. **Analytics**: Add Vercel Analytics
4. **Performance**: Monitor with Web Vitals

## ✨ Key Features Included

✅ **Glossy Glassmorphism** - Frosted glass effects throughout
✅ **Fully Responsive** - Perfect on all devices
✅ **Dark Mode Ready** - Supports light & dark themes
✅ **Multiple Pages** - Home, Destinations, Packages, Booking, Dashboard
✅ **Dynamic Routes** - Individual destination pages with [id]
✅ **Smooth Animations** - CSS transitions & hover effects
✅ **Mobile Menu** - Hamburger navigation for small screens
✅ **Semantic HTML** - Proper accessibility & SEO
✅ **Performance Optimized** - No unnecessary dependencies
✅ **Design System** - Consistent tokens & utilities

## 🆘 Troubleshooting

### Site not showing images?
- Check `/public/hero-destination.jpg` exists
- Restart dev server: `Ctrl+C` then `pnpm dev`

### Styling looks off?
- Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check globals.css was updated correctly

### Mobile menu not working?
- Components use client-side state with `'use client'`
- Make sure JavaScript is enabled

### Colors not changing?
- Edit `/app/globals.css` (light theme `:root`)
- And `.dark` section for dark theme
- Use format: `oklch(lightness saturation hue)`

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org
- **Lucide Icons**: https://lucide.dev
- **Glassmorphism**: https://glassmorphism.com

## 💡 Tips

1. **Test on Mobile**: Always check on real phone (not just browser dev tools)
2. **Use Browser DevTools**: Right-click → Inspect to debug
3. **Check Lighthouse**: Built into Chrome DevTools for performance
4. **Accessibility**: Use WAVE extension to check a11y
5. **Color Contrast**: Aim for WCAG AA (4.5:1) minimum

---

You're all set! Start customizing and deploy your luxury travel website. 🌍✈️

Need help? Check `README.md` and `DESIGN_SYSTEM.md` for more details!
