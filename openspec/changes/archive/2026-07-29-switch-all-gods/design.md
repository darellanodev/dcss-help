## Context

The DCSS Vocabulario app is a React + TypeScript + Vite application with two viewing modes:
1. **Dios del día** — a spotlight card showing the god of the day with description, powers, and wrath
2. **Todos los dioses** — a searchable grid of all 27 gods

The mode is controlled by a `showAll` boolean state in `App.tsx`. Currently, switching from "Dios del día" to "Todos" is only possible via a button inside the GodSpotlight card. There is no visible, persistent control showing the current mode or allowing quick switching back.

The user wants a segmented toggle control (always visible below the Legend) to switch between modes. The SearchBar only appears in "Todos" mode.

## Goals / Non-Goals

**Goals:**
- Add a segmented toggle (pill-style) always visible below the Legend
- Toggle has two options: "Dios del día" and "Todos"
- SearchBar appears only when "Todos" mode is active, positioned to the right of the toggle
- The "Ver todos los 27 dioses" button in the GodSpotlight card remains as a secondary shortcut

**Non-Goals:**
- Changing the data model or god data structure
- Adding animations or transitions between views
- Modifying the Sidebar, Legend, or GodCard components
- Changing the GodSpotlight component (button stays as-is)

## Decisions

### 1. Inline toggle in App.tsx (no new component)

**Choice**: Keep the toggle inline in `App.tsx` rather than creating a separate `ViewToggle` component.

**Rationale**: The toggle is a simple two-button segmented control with minimal logic. It only lives in one place and uses App's `showAll` state directly. A separate component would add indirection without benefit.

**Alternative considered**: Create a `ViewToggle` component — rejected because it's too small to justify its own file.

### 2. Flexbox toolbar layout

**Choice**: Use a `.toolbar` flex container with `justify-content: space-between` to hold the toggle group on the left and the SearchBar on the right.

**Rationale**: Simple, responsive, and aligns with the existing CSS patterns in the app.

### 3. Toggle uses existing `showAll` state

**Choice**: The toggle reads and writes `showAll` directly. No new state.

**Rationale**: The state already exists and controls the same thing. Adding a second state variable would create sync issues.

## Risks / Trade-offs

- **Minimal risk**: This is a UI-only change with no data or API impact
- **SearchBar conditional rendering**: When in "Dios del día" mode, the SearchBar is not rendered (not hidden). This is clean but means the toolbar row shrinks when no SearchBar is present — acceptable since the toggle alone still looks complete

## Migration Plan

No migration needed. This is a pure UI enhancement with no breaking changes.
