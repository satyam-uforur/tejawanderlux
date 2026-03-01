# WanderLuxe Design System

## Color Palette

### Light Theme
- **Background**: `oklch(0.98 0 0)` - Off-white
- **Foreground**: `oklch(0.15 0 0)` - Dark charcoal
- **Primary**: `oklch(0.35 0.15 264)` - Deep Teal
- **Secondary**: `oklch(0.65 0.18 55)` - Warm Gold
- **Accent**: `oklch(0.55 0.2 48)` - Saturated Gold

### Dark Theme
- **Background**: `oklch(0.12 0 0)` - Near black
- **Foreground**: `oklch(0.95 0 0)` - Off-white
- **Primary**: `oklch(0.75 0.18 264)` - Bright Teal
- **Secondary**: `oklch(0.75 0.18 55)` - Bright Gold
- **Accent**: `oklch(0.85 0.2 48)` - Bright Gold

## Typography

- **Sans Serif**: Geist (headings, body text)
- **Monospace**: Geist Mono (code, technical content)

### Heading Sizes
- h1: 4xl (36px) → 6xl (60px) on desktop
- h2: 3xl (30px) → 5xl (48px) on desktop
- h3: 2xl (24px) → 3xl (30px) on desktop

### Body Text
- Base: 16px (sm) → 18px (lg) on desktop
- Line height: 1.5-1.6 (leading-relaxed)

## Glassmorphism Components

### .glass
Basic frosted glass effect
```css
backdrop-blur-md
bg-white/10 (light) or bg-white/5 (dark)
border border-white/20 (light) or border-white/10 (dark)
```

### .glass-glossy
Enhanced glass with shine effect
```css
/* Includes .glass properties plus: */
relative overflow-hidden
::before gradient-to-br from-white/30 to-transparent
```

### .glow-accent
Shadow glow effect with primary color
```css
shadow-lg shadow-primary/20 (light) or shadow-primary/10 (dark)
```

### .glow-accent-warm
Shadow glow effect with accent color
```css
shadow-lg shadow-accent/30 (light) or shadow-accent/20 (dark)
```

### .smooth-hover
Smooth transitions
```css
transition-all duration-300 ease-out
```

## Component Patterns

### Card Layouts
```tsx
<div className="glass-glossy p-6 sm:p-8 rounded-2xl glow-accent hover:shadow-xl smooth-hover">
  {/* content */}
</div>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
  Text
</span>
```

### Gradient Buttons
```tsx
<button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold glow-accent smooth-hover hover:shadow-xl hover:shadow-primary/30">
  Button Text
</button>
```

### Glass Buttons
```tsx
<button className="px-6 py-3 rounded-lg glass text-primary font-medium glow-accent smooth-hover hover:bg-white/20 dark:hover:bg-white/10">
  Glass Button
</button>
```

## Spacing Scale

Following Tailwind's scale:
- xs: 2px (0.125rem)
- sm: 4px (0.25rem)
- base: 8px (0.5rem)
- md: 16px (1rem)
- lg: 24px (1.5rem)
- xl: 32px (2rem)
- 2xl: 48px (3rem)

Use `gap-` for flexbox/grid spacing (preferred over `space-`)

## Responsive Breakpoints

- **Mobile**: 375px (default)
- **Tablet**: 768px (md)
- **Desktop**: 1024px (lg)
- **Wide**: 1280px (xl)
- **Ultra-wide**: 1536px (2xl)

## Animation Guidelines

### Hover States
- Scale: `hover:scale-110` for images
- Color: Use gradients with `group-hover:` 
- Shadow: `hover:shadow-xl hover:shadow-primary/30`
- Duration: Always use `duration-300` for smoothness

### Transitions
- Property: Use `transition-all` for multiple properties
- Duration: 300ms for hover, 500ms for page transitions
- Easing: `ease-out` for enter, `ease-in-out` for continuous

## Icon Usage

- **Size**: 4px (16px), 5px (20px), 6px (24px)
- **Color**: `text-primary`, `text-accent`, `text-foreground/60`
- **Opacity**: Use foreground opacity for secondary icons

## Accessibility

- **Semantic HTML**: Use `<main>`, `<section>`, `<header>`, `<footer>`
- **Color Contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus States**: All interactive elements have focus rings
- **Screen Reader**: Alt text for all images, aria-labels where needed
- **Keyboard Navigation**: All interactive elements are keyboard accessible

## Dark Mode Support

All colors automatically adapt to dark mode via CSS variables. 
Components use semantic tokens (--primary, --accent, etc.) which update based on `.dark` class.

```tsx
// Automatically works in both themes
<div className="text-primary bg-background">Dark mode ready!</div>
```

## Usage Examples

### Feature Card
```tsx
<div className="glass-glossy p-6 rounded-xl group hover:shadow-lg smooth-hover">
  <Icon className="w-8 h-8 text-primary group-hover:text-accent" />
  <h3 className="text-lg font-semibold text-foreground mt-4">{title}</h3>
  <p className="text-foreground/60 text-sm mt-2">{description}</p>
</div>
```

### Hero Section
```tsx
<section className="min-h-screen pt-20">
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-3xl animate-pulse" />
  </div>
  {/* content */}
</section>
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* items */}
</div>
```

## Best Practices

1. **Use Semantic Classes**: Prefer `glass`, `glow-accent` over custom CSS
2. **Mobile First**: Define mobile styles first, then add `sm:`, `md:` prefixes
3. **Consistency**: Use same rounded-lg, gap-6 across similar components
4. **Performance**: Avoid arbitrary values like `p-[17px]`, use Tailwind scale
5. **Accessibility**: Always add alt text, semantic HTML, and ARIA labels
6. **Testing**: Check components in both light and dark modes

## Common Utilities Reference

```tsx
// Layout
flex items-center justify-between gap-4
grid grid-cols-3 gap-6

// Spacing
px-4 py-3 (padding)
mx-auto (centering)
pt-20 pb-16 (specific sides)

// Typography
text-xl font-semibold leading-tight
text-balance (better line breaks)
text-pretty (better wrapping)

// Colors
text-foreground text-foreground/60 text-foreground/30
bg-background border-border
hover:text-primary focus:ring-primary/50

// Effects
rounded-lg rounded-2xl rounded-full
shadow-lg shadow-primary/20
blur-3xl filter

// Responsive
hidden md:flex (show on medium+)
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 (stacked, 2-col, 4-col)
```

---

Last Updated: March 2026
