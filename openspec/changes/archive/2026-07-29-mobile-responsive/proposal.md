## Why

The app is not usable on mobile devices. The sidebar occupies a fixed 280px column that overlaps the main content at small viewport widths, and there is no mobile-friendly navigation pattern. With increasing mobile usage for reference tools like this one, the app needs to adapt.

## What Changes

- Add a fixed top bar on mobile with hamburger button + app title
- Convert the sidebar into a slide-out drawer overlay on mobile (< 769px)
- Add backdrop overlay when drawer is open
- Keep the desktop layout unchanged (sidebar always visible at ≥ 769px)
- Adjust main content padding/margins responsively

## Capabilities

### New Capabilities
- `mobile-nav`: Responsive navigation system with hamburger drawer on mobile, persistent sidebar on desktop, and backdrop overlay

### Modified Capabilities
<!-- No existing specs are affected -->

## Impact

- `src/App.tsx` — new state management for mobile menu open/close, new top bar JSX
- `src/App.module.css` — top bar styles, adjusted mobile main content spacing
- `src/components/Sidebar/Sidebar.tsx` — new props (isOpen, onClose), backdrop element, conditional open class
- `src/components/Sidebar/Sidebar.module.css` — drawer animation, backdrop styles, mobile media queries
