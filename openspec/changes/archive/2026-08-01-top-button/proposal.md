## Why

The 'Todos' grid can hold up to 27 god cards, so a reader far down the page has no quick way to return to the top (the sidebar nav only reaches the current section). Users want a small button below each card to scroll back to the very top of the page.

## What Changes

- Add a small 'Top' button (up arrow + text) below the `GodSpotlight` in the 'Dios del dia' view, before the 'Ver todos' button.
- Add the same 'Top' button below every `GodCard` in the 'Todos' grid view.
- Clicking the button smoothly scrolls the window back to the top (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
- Style the button to be small, subtle, and theme-consistent with the existing cyan outlined controls.
- No new dependencies.

## Capabilities

### New Capabilities
- `scroll-to-top`: A small, always-visible button rendered below the spotlight and below every grid card that scrolls the page back to the top.

### Modified Capabilities
<!-- No existing spec-level requirements change; the two views (glossary-tooltip, view-toggle) keep their behavior and only gain an additional control. -->

## Impact

- `src/App.tsx`: add the button in both view branches; wrap each `GodCard` in a `.cardGroup` wrapper so the button stays visually attached to its card without becoming a separate grid item.
- `src/App.module.css`: add `.cardGroup` and `.topButton` styles.
- No API, dependency, or test-file changes.
