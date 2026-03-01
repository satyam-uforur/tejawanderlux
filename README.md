# WanderLuxe - Luxury Travel Website

A premium travel booking website built with Next.js 16, featuring glassmorphism design, responsive layouts, and a complete travel booking experience.

## Features

✨ **Glassmorphism Design**
- Modern frosted glass effects with backdrop blur
- Gradient accents and smooth hover animations
- Luxury color scheme (deep teals, warm golds)
- Glowing card effects and smooth transitions

📱 **Fully Responsive**
- Mobile-first design optimized for all devices
- Breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1920px (ultra-wide)
- Sticky navigation with hamburger menu on mobile
- Adaptive layouts and typography

🎯 **Complete Travel Booking Platform**
- Home page with hero section and featured destinations
- Destination gallery with 50+ curated locations
- Travel packages (Weekender, Classic Explorer, Premium Adventure)
- Interactive booking form
- User dashboard with booking management
- Dynamic destination detail pages

🎨 **Design System**
- Custom CSS utilities for glassmorphism effects
- Color tokens: Primary (Deep Teal), Secondary (Warm Gold), Accents
- Smooth animations and transitions
- Dark mode support with semantic color tokens

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom utilities
- **Fonts**: Geist & Geist Mono (Google Fonts)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwindcss

## Project Structure

```
/app
  /destinations
    /[id]/          # Dynamic destination detail pages
    page.tsx        # Destinations gallery
  /packages/        # Travel packages page
  /booking/         # Booking page with form
  /dashboard/       # User dashboard
  page.tsx          # Home page
  layout.tsx        # Root layout with metadata
  globals.css       # Global styles and utilities

/components
  Navbar.tsx        # Navigation with mobile menu
  Footer.tsx        # Footer with links
  Hero.tsx          # Hero section
  DestinationCard.tsx  # Reusable destination card
  BookingForm.tsx   # Booking form component
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wanderluxe
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, features, destinations |
| `/destinations` | Full destination gallery with search & filter |
| `/destinations/[id]` | Individual destination details |
| `/packages` | Travel packages and add-ons |
| `/booking` | Booking form and travel planning |
| `/dashboard` | User dashboard with bookings & settings |

## Customization

### Colors & Theme
Edit design tokens in `/app/globals.css`:
- `:root` - Light theme colors
- `.dark` - Dark theme colors
- Customize primary (teal), secondary (gold), and accent colors

### Content
- Update destination data in page components
- Modify package details in `/app/packages/page.tsx`
- Edit navbar links in `/components/Navbar.tsx`

### Styling
- Add custom utilities in `@layer components` in `/app/globals.css`
- Modify Tailwind config in `tailwind.config.ts`
- Use semantic classes: `glass`, `glass-glossy`, `glow-accent`, `smooth-hover`

## Glass Effects

Three main glassmorphism utilities:

```tsx
// Basic glass effect
<div className="glass">...</div>

// Glossy glass with shine
<div className="glass-glossy">...</div>

// Add glow shadows
<div className="glow-accent">...</div>
<div className="glow-accent-warm">...</div>
```

## Mobile Optimization

- **Responsive Images**: All images optimized for mobile
- **Touch-Friendly**: Buttons and interactive elements sized for touch (min 44px)
- **Mobile Menu**: Hamburger menu for navigation on screens < 768px
- **Viewport**: Optimized viewport settings in layout.tsx

## Performance

- Static generation for pages (improves SEO)
- Optimized images with next/image
- CSS utilities for better performance
- Smooth animations using CSS transitions
- No external animation libraries (pure CSS)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Future Enhancements

- Backend API integration for bookings
- User authentication & accounts
- Payment processing (Stripe)
- Review system
- Advanced search & filtering
- Real-time notifications
- Multi-language support

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue in the repository or contact support@wanderluxe.com

---

Built with ❤️ using v0 and Next.js
