## 1. Styles

- [x] 1.1 Add `.cardGroup` style (flex column, card as `flex: 1`) to `src/App.module.css`
- [x] 1.2 Add `.topButton` style (small, transparent bg, cyan border/text, radius 8px, hover `rgba(0,212,255,0.1)`) to `src/App.module.css`

## 2. Implementation

- [x] 2.1 Add 'Top' button (up arrow + 'Top', `onClick` => `window.scrollTo({ top: 0, behavior: 'smooth' })`) below `GodSpotlight` in the day view of `src/App.tsx`
- [x] 2.2 Wrap each `GodCard` in a `<div className={styles.cardGroup}>` and add the same 'Top' button below it in the grid view of `src/App.tsx`

## 3. Verification

- [x] 3.1 Run `npm run build` to confirm type-check passes
- [x] 3.2 Run `npm test` to confirm existing tests still pass
