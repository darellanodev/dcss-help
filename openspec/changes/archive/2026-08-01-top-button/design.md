## Context

The app (`src/App.tsx`) renders two views driven by the `showAll` state: a single-card 'Dios del dia' view (GodSpotlight) and a 'Todos' grid view (up to 27 `GodCard` items). The page scrolls on `window` because the sidebar is `position: fixed` with its own overflow. Long grids leave users far from the top with no quick way back.

## Goals / Non-Goals

**Goals:**
- Provide a small 'Top' button in both views that smooth-scrolls the window to the top.
- Keep the button visually attached to each card in the grid (not a floating global FAB).
- Stay theme-consistent and dependency-free.

**Non-Goals:**
- No global floating "scroll to top" button, no sticky/auto-hide behavior.
- No changes to the GodCard or GodSpotlight components themselves.
- No new dependencies or test files.

## Decisions

- **Single handler, no helper**: `window.scrollTo({ top: 0, behavior: 'smooth' })` inline in each button's `onClick`. There is no existing scroll code; a shared helper is unnecessary for two call sites.
- **Wrapper div per card in the grid**: `GodCard`'s root element is the `.card` itself, and grid children are grid items. A bare `<button>` after each card would become its own grid item, breaking the layout. Instead each `GodCard` is wrapped in `<div className={styles.cardGroup}>` containing the card plus its button.
- **`.cardGroup` is a flex column** with the card as `flex: 1`, so buttons align to the bottom of each equal-height grid row even though card heights differ.
- **Reuse the existing control aesthetic**: the new `.topButton` mirrors `.viewToggle` (transparent background, cyan border/text, radius 8px, hover `rgba(0,212,255,0.1)`), but smaller and subtler. Label is '↑ Top' (English, per user decision).
- **Day view placement**: the button sits below `<GodSpotlight/>` and before the `.viewToggle` 'Ver todos' button, matching the same small-outlined style.

## Risks / Trade-offs

- **Button could wrap awkwardly in very narrow grid columns** → `.cardGroup` uses `flex-direction: column` and the button is small; the existing `minmax(400px, 1fr)` grid collapses to one column on mobile, giving ample width.
- **Duplicate DOM per card** → negligible; 27 cards max.
- **Clicking 'Top' then navigating again** → no state coupling; the scroll is a pure window action, so no view state is disturbed.
