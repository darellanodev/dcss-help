## 1. Utility

- [x] 1.1 Create `src/utils/godOfDay.ts` with `getGodOfDay(gods: God[]): God` using `dayOfYear % gods.length`

## 2. GodSpotlight Component

- [x] 2.1 Create `src/components/GodSpotlight/GodSpotlight.module.css` with full-width card styles, date label, and "ver todos" button
- [x] 2.2 Create `src/components/GodSpotlight/GodSpotlight.tsx` — accepts `god` and `onShowAll` props, renders god info with date header

## 3. App Integration

- [x] 3.1 Add `showAll` state and `godOfDay` memo to `App.tsx`
- [x] 3.2 Add conditional rendering: spotlight when `!showAll`, grid+search when `showAll`
- [x] 3.3 Add `.viewToggle` button styles to `App.module.css`

## 4. Verify

- [x] 4.1 Run `pnpm build` — confirm no TypeScript or build errors
- [x] 4.2 Manual check: spotlight shows one god, button toggles to grid, search works in grid only
