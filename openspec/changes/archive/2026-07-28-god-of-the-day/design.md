## Context

The DCSS Vocabulario app currently shows all 27 god cards in a grid immediately upon entering the Gods section. The app is built with React 19 + Vite + TypeScript + CSS Modules. Gods data lives in `src/data/gods.json` (27 entries). The `App.tsx` component manages search state and renders `Sidebar`, `Legend`, `SearchBar`, and `GodCard` components.

## Goals / Non-Goals

**Goals:**
- Show a single "God of the Day" when entering the Gods section
- Deterministic selection based on date (same god all day for everyone)
- Toggle to reveal full grid with search
- Sidebar always visible with progress bar

**Non-Goals:**
- Animations/transitions between views
- Random or user-seeded selection
- Notification when god changes at midnight
- Responsive sidebar changes

## Decisions

### D1: Date-based deterministic selection

**Choice:** `dayOfYear % gods.length`

**Alternatives considered:**
- `Math.random()` — rejected: different every reload, not shareable
- User seed — rejected: unnecessary complexity
- Hash of date string — rejected: overengineered for 27 items

**Rationale:** Simple, deterministic, everyone sees the same god on a given day. Shareable ("hoy toca Trog").

### D2: Toggle view (not scroll)

**Choice:** `showAll` boolean state — spotlight disappears, grid replaces it

**Alternatives considered:**
- Grid below spotlight (scroll) — rejected: user chose option A (disappear)
- Route-based (`/gods` vs `/gods/all`) — rejected: no routing in scope

**Rationale:** User explicitly chose option A. Simpler implementation, no scroll management.

### D3: GodSpotlight reuses GodCard visual language

**Choice:** New component with same CSS variables and section structure, but full-width layout with date header

**Rationale:** Consistent visual identity. No need for a separate "spotlight" design system.

### D4: Search only in grid view

**Choice:** SearchBar and Legend hidden when `showAll === false`

**Alternatives considered:**
- Always visible — rejected: user confirmed search only in grid view

**Rationale:** Spotlight is a focused, single-card experience. Search is a browsing tool.

## Risks / Trade-offs

- **[Risk]** Users might not notice the "Ver todos" button → **Mitigation:** Prominent styling, clear label
- **[Risk]** God of the day repeats every 27 days → **Mitigation:** Acceptable for a catalog tool; could add monthly rotation later
- **[Trade-off]** No animation between views → Simpler code, less delight. Acceptable per user preference.
