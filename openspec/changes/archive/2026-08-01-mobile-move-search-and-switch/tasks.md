## 1. Markup

- [x] 1.1 Wrap the `<SearchBar>` in `<div className={styles.searchRow}>` inside the toolbar in `src/App.tsx`, keeping the conditional `{showAll && ...}`.

## 2. Styling

- [x] 2.1 Add base `.searchRow { flex: 1; min-width: 0; max-width: 500px; }` to `src/App.module.css`.
- [x] 2.2 In a `@media (max-width: 1024px)` block of `src/App.module.css` (covers tablet + mobile), add `.toolbar { flex-wrap: wrap; }` and `.searchRow { order: 3; flex-basis: 100%; max-width: 100%; }`.

## 3. Verification

- [x] 3.1 Run `npm run build` (tsc + vite) to confirm type-check and build pass.
- [x] 3.2 Run `npm test` to confirm existing tests still pass.
