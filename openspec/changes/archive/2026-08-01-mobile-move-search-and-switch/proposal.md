## Why

On mobile and tablet the toolbar squeezes the SearchBar into a near-unusable narrow strip between the "Dios del día / Todos" toggle and the TranslationToggle, making searching painful. Separating the translation toggle (top row) from the search bar (bottom row) improves the mobile and tablet experience.

## What Changes

- Wrap the SearchBar in a dedicated `.searchRow` flex container so it can occupy a full flex row.
- On tablet and mobile viewports (narrower than 1025px), the toolbar wraps: the view toggle and TranslationToggle share the top row, and the SearchBar drops to its own full-width row below.
- Desktop layout stays exactly as-is (single row: toggle, search, translation toggle). No JSX reordering; `order` is applied only inside the tablet/mobile media query.
- No new dependencies; purely CSS layout + a wrapper element in `src/App.tsx`.

## Capabilities

### New Capabilities
- `toolbar-layout`: Responsive stacking of the toolbar controls on tablet and mobile — translation toggle on the top row, search bar full-width on the row below.

### Modified Capabilities
- `view-toggle`: The "SearchBar conditional visibility" requirement changes — the SearchBar is no longer always in the same row as the toggle; on tablet and mobile it moves to its own row below.

## Impact

- `src/App.tsx`: wrap `<SearchBar>` in `<div className={styles.searchRow}>` inside the toolbar (App.tsx:82).
- `src/App.module.css`: add base `.searchRow` rule (flex: 1, max-width 500px) and tablet/mobile media-query rules (`flex-wrap`, `order: 3`, full-width) in `@media (max-width: 1024px)`.
- No dependency, API, or state changes.
