## Context

The toolbar in `src/App.tsx` (lines 66-85) is a single flex row containing three controls: the "Dios del día / Todos" view toggle, the SearchBar (only when `showAll`), and the TranslationToggle. The `toolbar` container has no mobile-specific rules (`src/App.module.css:51-56`); the only existing `@media (max-width: 768px)` block (lines 160-172) touches the top bar, main content padding, and grid columns.

On mobile and tablet, the SearchBar input (`width: 100%; max-width: 500px`) shrinks to fit between the two toggles (both `flex-shrink: 0`), leaving a near-unusable narrow input. The user asked to move the translation toggle to the top row and the search bar to the bottom row, confirmed for tablet as well as mobile, using a wrapper element plus `order`.

## Goals / Non-Goals

**Goals:**
- On tablet and mobile viewports (narrower than 1025px), show the view toggle and TranslationToggle on the top row and the SearchBar full-width on the row below.
- Keep the desktop toolbar exactly as it is today (single row).
- Minimal, dependency-free CSS layout change.

**Non-Goals:**
- Reordering controls on desktop.
- Changing labels or behavior of the toggles or SearchBar.
- Modifying the `machine-translations` or `refactor-gods` changes in flight.

## Decisions

1. **Wrap the SearchBar in a `.searchRow` container.** The SearchBar component renders an `<input>` as its root; a wrapper div gives App.module.css a named, scoped class to target instead of relying on an implicit `> input` tag selector. The input inside keeps its existing `width: 100%` so it fills the wrapper.

2. **Use flex `order` only inside the tablet/mobile media query (`max-width: 1024px`).** DOM order stays `[view toggle, search, translation toggle]`, so desktop rendering is byte-identical to today. On tablet and mobile, `.searchRow { order: 3 }` visually places the search after both toggles, and `flex-basis: 100%` drops it to its own full-width row. Alternative (reordering the JSX so TranslationToggle comes first) was considered but rejected because it would also change the desktop order.

3. **Enable `flex-wrap: wrap` only on tablet/mobile.** The base `.toolbar` stays `nowrap`; a `@media (max-width: 1024px)` query adds `flex-wrap: wrap` so the full-width search row can wrap beneath the toggles. This breakpoint covers both tablets and phones; the narrower `@media (max-width: 768px)` query continues to handle the hamburger top bar and single-column grid, which are mobile-only. On very narrow screens (< ~420px) where both toggles do not fit side by side, the TranslationToggle wraps to a second row and the search to a third — acceptable graceful degradation.

4. **Base `.searchRow` replicates current desktop sizing.** `flex: 1; min-width: 0; max-width: 500px` matches how the bare input behaves today (fills available space up to 500px, `flex-shrink` prevented via `min-width: 0`).

## Risks / Trade-offs

- [Very narrow phones may not fit both toggles in one row] → Mitigated by `flex-wrap`, which degrades to three stacked rows cleanly.
- [`order` on a flex item is subtle] → Isolated to a single media query (`max-width: 1024px`); desktop unchanged and easy to revert.
- [Tag-selector brittleness avoided] → Using the explicit `.searchRow` wrapper class rather than `> input`.

## Migration Plan

No data or API migration. Deploy as a normal code change; revert by removing the media-query rules and the wrapper div. The `@media (max-width: 1024px)` and `@media (max-width: 768px)` blocks in App.module.css are the places to update.
