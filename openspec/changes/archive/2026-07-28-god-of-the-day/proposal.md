## Why

When users visit the Gods section, they're immediately overwhelmed by 27 cards. A "God of the Day" spotlight creates a daily focal point, encouraging users to explore one god deeply before browsing the full catalog. The deterministic date-based selection means everyone sees the same god on a given day, making it shareable.

## What Changes

- Add a `getGodOfDay()` utility that selects a god based on the current day of the year
- Add a `GodSpotlight` component showing the selected god's full info (name, title, description, powers, wrath)
- Modify `App.tsx` to default to spotlight view instead of the full grid
- Add a "Ver todos los 27 dioses" button that toggles to grid view with search
- Search bar and Legend only visible in grid view

## Capabilities

### New Capabilities

- `god-of-the-day`: Date-based god selection and spotlight display with toggle to full grid view

### Modified Capabilities

_(none — no existing specs change)_

## Impact

- **Files created**: `src/utils/godOfDay.ts`, `src/components/GodSpotlight/GodSpotlight.tsx`, `src/components/GodSpotlight/GodSpotlight.module.css`
- **Files modified**: `src/App.tsx` (state + conditional render), `src/App.module.css` (button styles)
- **Dependencies**: None — pure vanilla React + CSS
- **Breaking changes**: None — additive feature, grid view preserved behind toggle
