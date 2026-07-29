## Context

The app uses a fixed 280px sidebar alongside a main content area with `margin-left: 280px`. At viewports below 769px, the breakpoint removes the margin but the fixed sidebar remains, overlapping content. There is no mobile navigation pattern — the sidebar content (app title, progress bar, section links) is inaccessible on small screens.

The app is a monolingual React + Vite SPA with CSS Modules. No routing library or UI framework is in use.

## Goals / Non-Goals

**Goals:**
- Add a fixed top bar on mobile (< 769px) with hamburger button and app title
- Convert the sidebar into a slide-out drawer overlay on mobile
- Add a semi-transparent backdrop when the drawer is open
- Keep the desktop layout (≥ 769px) unchanged
- Close the drawer via backdrop tap, hamburger toggle, or Escape key
- Prevent body scroll while the drawer is open

**Non-Goals:**
- No changes to the desktop layout or sidebar behavior
- No swipe gesture support (out of scope for this change)
- No routing changes — nav sections remain placeholder links
- No changes to the main content layout beyond responsive padding adjustments

## Decisions

1. **Drawer vs. bottom sheet vs. bottom nav** → **Drawer (slide-overlay)**
   - Bottom nav would require restructuring layout significantly and displaces the progress bar
   - Bottom sheet is less standard for primary navigation
   - Hamburger drawer is the de facto mobile nav pattern, well understood by users
   - Keeps all sidebar content accessible without redesign

2. **Overlay vs. push drawer** → **Overlay**
   - The sidebar slides over the content (not pushing it)
   - Simpler to implement — no need to animate the main content position
   - Content context is visible through the backdrop, aiding orientation

3. **State management** → **React useState in App**
   - A single `mobileMenuOpen: boolean` state in the root component
   - Passed down to Sidebar via `isOpen` / `onClose` props
   - No need for context or redux — only one consumer

4. **Drawer animation** → **CSS transform with transition**
   - `transform: translateX(-100%)` / `translateX(0)` with `transition: transform 0.3s ease`
   - No JS animation library needed
   - Backdrop uses `opacity` transition in parallel
   - Desktop sidebar uses no transform (always visible, no animation)

5. **Body scroll lock** → **useEffect adding class to body**
   - When drawer opens, add `overflow: hidden` to `<body>`
   - Restore on close / unmount
   - Avoids external dependencies

6. **Top bar height** → **56px**
   - Standard mobile touch target height (Apple HIG guideline)
   - Accommodates the hamburger button comfortably at 44×44px tap area

7. **Backdrop color** → **rgba(0, 0, 0, 0.5)**
   - Sufficient opacity to dim content while keeping it visible

## Risks / Trade-offs

- **[Animation performance]** CSS transform + opacity are GPU-composited on modern browsers, but very old mobile devices may jank → Mitigation: `will-change: transform` on the drawer element
- **[Body scroll lock]** If the user rotates from portrait to landscape while drawer is open, viewport height changes → Mitigation: the effect recalculates on resize naturally since it just applies a CSS class
- **[Desktop resizing to mobile]** When narrowing the window past 769px with the drawer closed, the sidebar instantly disappears — this is expected behavior matching common patterns
- **[Backdrop click vs. content click]** The backdrop is a separate element rendered before the sidebar (in DOM order), positioned fixed with a z-index below the sidebar but above main content → ensures only backdrop taps close the drawer
