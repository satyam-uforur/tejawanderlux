# WanderLuxe - Code Examples

Common patterns and examples you can use to customize the website.

## 🎨 Component Patterns

### Glass Card Component
```tsx
<div className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent hover:shadow-xl hover:shadow-primary/20 smooth-hover">
  {/* Your content */}
</div>
```

### Gradient Button
```tsx
<button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30">
  Click Me
</button>
```

### Glass Button
```tsx
<button className="px-6 py-3 rounded-lg glass text-primary font-medium glow-accent smooth-hover hover:bg-white/20 dark:hover:bg-white/10">
  Glass Button
</button>
```

### Feature Card with Icon
```tsx
<div className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent hover:shadow-xl smooth-hover group">
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 smooth-hover">
    <Icon className="w-6 h-6 text-primary" />
  </div>
  <h3 className="text-xl font-semibold text-foreground mb-2">Title</h3>
  <p className="text-foreground/60">Description</p>
</div>
```

## 🎯 Layout Patterns

### Responsive Hero Section
```tsx
<section className="min-h-screen pt-20 overflow-hidden">
  {/* Animated background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left: Content */}
      <div className="space-y-6">
        {/* Content here */}
      </div>

      {/* Right: Visual */}
      <div className="hidden lg:block">
        {/* Visual here */}
      </div>
    </div>
  </div>
</section>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item) => (
    <div key={item.id}>{/* item */}</div>
  ))}
</div>
```

### Container with Max Width
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content centered with side padding */}
</div>
```

## 📝 Text & Typography Patterns

### Main Heading
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
  Your Title Here
</h1>
```

### Subheading
```tsx
<p className="text-lg text-foreground/70 max-w-2xl text-pretty leading-relaxed">
  Your description here
</p>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  Colorful Text
</span>
```

### Large Gradient Number
```tsx
<div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  ${price}
</div>
```

## 🔄 List & Array Patterns

### Simple List with Loop
```tsx
{items.map((item, idx) => (
  <div key={idx}>
    {item.name}
  </div>
))}
```

### Conditional Rendering
```tsx
{isOpen ? (
  <div>Open content</div>
) : (
  <div>Closed content</div>
)}
```

### List with Badge
```tsx
{list.map((item, idx) => (
  <div key={idx} className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
    <span className="text-foreground">{item}</span>
  </div>
))}
```

## 🎯 Interactive Patterns

### Toggle/Accordion State
```tsx
const [isOpen, setIsOpen] = useState(false);

return (
  <details 
    open={isOpen}
    onClick={() => setIsOpen(!isOpen)}
    className="glass-glossy p-6 rounded-lg cursor-pointer"
  >
    <summary className="font-semibold">{title}</summary>
    <p className="mt-4 text-foreground/70">{content}</p>
  </details>
);
```

### Favorite/Like Button
```tsx
const [isFavorite, setIsFavorite] = useState(false);

return (
  <button
    onClick={(e) => {
      e.preventDefault();
      setIsFavorite(!isFavorite);
    }}
    className="p-2 rounded-full glass hover:bg-white/20"
  >
    <Heart
      className={`w-5 h-5 ${
        isFavorite ? 'fill-accent text-accent' : 'text-white/60'
      }`}
    />
  </button>
);
```

### Form Input
```tsx
<input
  type="text"
  name="fieldName"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 smooth-hover"
  placeholder="Enter text..."
/>
```

### Loading Button
```tsx
<button
  disabled={isLoading}
  className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isLoading ? 'Processing...' : 'Submit'}
</button>
```

## 🔗 Navigation Patterns

### Link with Hover Underline
```tsx
<Link
  href="/page"
  className="text-foreground/80 hover:text-primary smooth-hover relative group"
>
  Menu Item
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full smooth-hover" />
</Link>
```

### Icon Button Link
```tsx
<Link
  href="/page"
  className="flex items-center gap-2 text-primary hover:text-accent smooth-hover"
>
  <Icon className="w-5 h-5" />
  Link Text
</Link>
```

### Breadcrumb Navigation
```tsx
<Link href="/destinations" className="inline-flex items-center gap-2 text-primary hover:text-accent smooth-hover font-medium">
  <ArrowLeft className="w-4 h-4" />
  Back to Destinations
</Link>
```

## 🎨 Color & Styling Patterns

### Conditional Background Color
```tsx
<span
  className={`px-4 py-2 rounded-full text-sm font-medium ${
    status === 'Confirmed'
      ? 'bg-accent/20 text-accent'
      : 'bg-primary/20 text-primary'
  }`}
>
  {status}
</span>
```

### Opacity Variations for Text
```tsx
<div className="text-foreground">Primary text</div>
<div className="text-foreground/80">Secondary text</div>
<div className="text-foreground/60">Tertiary text</div>
<div className="text-foreground/30">Subtle text</div>
```

### Gradient Background Section
```tsx
<section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
  {/* Content */}
</section>
```

## 📱 Responsive Utilities

### Show/Hide by Breakpoint
```tsx
<div className="hidden md:flex">
  {/* Show on tablet and up */}
</div>

<div className="md:hidden">
  {/* Show only on mobile */}
</div>
```

### Different Grid Columns
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {/* Responsive grid: 1 col mobile, 2 tablet, 3 medium, 4 desktop */}
</div>
```

### Responsive Font Sizes
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  {/* Responsive heading sizes */}
</h1>
```

### Responsive Padding
```tsx
<div className="p-4 sm:p-6 md:p-8 lg:p-12">
  {/* Increases padding on larger screens */}
</div>
```

## 🎬 Animation Patterns

### Hover Scale
```tsx
<div className="hover:scale-110 smooth-hover">
  Image or element scales up on hover
</div>
```

### Hover Color
```tsx
<div className="text-foreground hover:text-primary smooth-hover">
  Text changes color on hover
</div>
```

### Hover Shadow
```tsx
<div className="glow-accent hover:shadow-xl hover:shadow-primary/30 smooth-hover">
  Shadow increases on hover
</div>
```

### Opacity Fade
```tsx
<div className="opacity-0 hover:opacity-100 smooth-hover">
  Fades in on hover
</div>
```

## 🔍 Icon Patterns

### Icon with Text
```tsx
<div className="flex items-center gap-2">
  <MapPin className="w-5 h-5 text-primary" />
  <span>Destination</span>
</div>
```

### Icon Button
```tsx
<button className="p-2 rounded-lg hover:bg-white/10 smooth-hover">
  <Icon className="w-5 h-5 text-foreground/60 hover:text-foreground" />
</button>
```

### Circular Icon Container
```tsx
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

## 💡 Tips & Tricks

### Prevent Default on Link Click
```tsx
<button
  onClick={(e) => {
    e.preventDefault(); // Stop default behavior
    // Your custom logic
  }}
>
  Button
</button>
```

### Line Clamp Text
```tsx
<p className="line-clamp-2">
  {/* Shows only 2 lines, rest hidden with ellipsis */}
</p>
```

### Text Balance for Headings
```tsx
<h1 className="text-balance">
  {/* Better line breaks for longer text */}
</h1>
```

### Using `cn()` Utility
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-styles',
  isActive && 'active-styles'
)}>
  Content
</div>
```

### Sticky Element
```tsx
<div className="sticky top-24">
  {/* Stays at top with 96px offset (navbar height) */}
</div>
```

---

These patterns cover the most common use cases in WanderLuxe. Mix and match them to create new components and sections!
