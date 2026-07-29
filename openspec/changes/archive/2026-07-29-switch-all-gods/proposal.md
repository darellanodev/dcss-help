## Why

The app currently switches between "Dios del día" (god of the day spotlight) and "Todos los dioses" (all gods grid) via a button inside the spotlight card. This is the only way to toggle between views, and there's no persistent, visible control showing the user which mode they're in or allowing quick switching. Users need a clear, always-visible toggle to switch between the two viewing modes without scrolling to the card button.

## What Changes

- Add a segmented toggle control (pill-style) always visible below the Legend, with two options: "Dios del día" and "Todos"
- The toggle replaces the implicit state switching — it becomes the primary way to switch views
- The SearchBar only appears when "Todos" mode is active, positioned to the right of the toggle
- The "Ver todos los 27 dioses" button inside the GodSpotlight card remains as a secondary shortcut to switch to "Todos" mode
- The existing `showAll` state continues to drive both the toggle and the content rendering

## Capabilities

### New Capabilities
- `view-toggle`: A segmented control that allows switching between "Dios del día" and "Todos" viewing modes. Always visible below the Legend. Controls the same `showAll` state as the existing card button.

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- `src/App.tsx` — restructure the ternary to always render a toolbar row with the toggle, conditionally render SearchBar within the toolbar
- `src/App.module.css` — add styles for `.toolbar`, `.toggleGroup`, `.toggleOption`, `.toggleOption.active`
- No new dependencies. No API changes. No breaking changes.
