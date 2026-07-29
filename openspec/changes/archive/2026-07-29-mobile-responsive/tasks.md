## 1. Sidebar CSS — Drawer & backdrop styles

- [x] 1.1 Add `.backdrop` styles (fixed, full viewport, z-index above main, rgba(0,0,0,0.5) background, opacity transition)
- [x] 1.2 Add mobile media query (< 769px) that sets `.sidebar` to `transform: translateX(-100%)`
- [x] 1.3 Add `.open` variant that sets `transform: translateX(0)` with `transition: transform 0.3s ease` and `will-change: transform`
- [x] 1.4 Ensure `.sidebar` has a z-index above the backdrop on mobile

## 2. App CSS — Top bar & responsive adjustments

- [x] 2.1 Add `.mobileTopBar` styles (fixed top, 56px height, `--bg-secondary` background, flex with hamburger + title, z-index, hidden on desktop via media query)
- [x] 2.2 Add `.menuButton` styles (44×44px min tap target, transparent bg, clear border, cyan color)
- [x] 2.3 Update existing `@media (max-width: 768px)` block in `App.module.css`: add `padding-top: 76px` to `.mainContent` for the fixed top bar

## 3. Sidebar component — New props & drawer wrapper

- [x] 3.1 Add `isOpen?: boolean` and `onClose?: () => void` props to Sidebar
- [x] 3.2 Render backdrop `<div>` before the sidebar `<aside>` when `isOpen` is true, with `onClick` calling `onClose`
- [x] 3.3 Apply conditional `open` class to the `<aside>` based on `isOpen`
- [x] 3.4 Add `aria-hidden`, `role="dialog"`, and `aria-modal` attributes to the drawer for accessibility

## 4. App component — State management & top bar

- [x] 4.1 Add `mobileMenuOpen` state (`useState(false)`) in App
- [x] 4.2 Render mobile top bar `<header>` before `<main>`, with hamburger button that opens the menu
- [x] 4.3 Pass `isOpen={mobileMenuOpen}` and `onClose={() => setMobileMenuOpen(false)}` to Sidebar
- [x] 4.4 Add `useEffect` that adds/removes `overflow: hidden` on `<body>` when drawer opens/closes
- [x] 4.5 Add `useEffect` that listens for Escape key to close the drawer

## 5. Verify

- [x] 5.1 Run `npm run build` to confirm no TypeScript errors
- [ ] 5.2 Resize browser below 769px and verify: top bar appears, sidebar is hidden, hamburger opens drawer, backdrop closes drawer
