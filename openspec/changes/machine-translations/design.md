## Context

The app displays god data (description, powers, wrath) for 27 DCSS gods in both English and Spanish. Currently Spanish translations are human-made and stored in `es` fields — only 22 of 81 entries are translated. The app has a card grid and spotlight view, a search bar that queries all text fields, and a legend explaining color coding.

There is no i18n framework. Translations live directly in each god's JSON file under `src/data/gods/*.json`. The type `GodText` has `{ en: string; es: string | null }`. A view toggle switches between "Dios del día" (spotlight) and "Todos" (searchable grid).

## Goals / Non-Goals

**Goals:**
- Add `es_mt: string | null` to every `GodText` in the type definition and all 27 JSON files
- Populate all 81 `es_mt` fields with Spanish translations from the English source
- Add a toggle in the toolbar for selecting translation source (human vs machine)
- Machine translations display in green with a 🤖 prefix
- Both "Dios del día" and "Todos" views respect the toggle
- Search indexes `es_mt` in machine translation mode
- Legend shows a new item for machine translations
- Machine translation mode is the default

**Non-Goals:**
- Not modifying the existing `es` human translation data
- Not changing the card border color logic (still reflects human translation status)
- Not adding an i18n library or external translation service call at runtime

## Decisions

1. **Field name `es_mt`**: Using a descriptive suffix `_mt` (machine translation) alongside `es` keeps the relationship explicit. Alternative considered: `es_auto` or a generic `translations` map — but `es_mt` is self-documenting and matches the existing `en`/`es` pattern.

2. **Same JSON file**: Machine translations live in the same `*.json` file as `en` and `es` for each god. Alternative considered: separate `*.mt.json` files — rejected as more complex to import and maintain for no benefit.

3. **Toggle visible in both views**: The translation toggle appears below the view toggle (Dios del día / Todos) and always visible, so users can switch between human and machine translations regardless of which view they're in.

4. **Machine translation by default**: New visitors get full Spanish coverage immediately. Users who prefer the hand-crafted translations can toggle to human mode.

5. **🤖 indicator prefix**: Machine translations are rendered in green (same color as human Spanish) but prefixed with 🤖 for visual distinction. Alternative: a different color entirely — rejected because green already means "Spanish" and changing the color per source would be confusing.

6. **Inline translations during implementation**: All 81 `es_mt` translations are authored during implementation rather than fetched at runtime, eliminating any API dependency.

## Risks / Trade-offs

- **Translation quality**: Machine translations may contain inaccuracies. → Mitigation: Human translations always available via toggle.
- **File size increase**: Adding `es_mt` to 27 files adds ~15-25KB total. → Not a concern for a SPA.
- **Future English changes**: If English source text changes, `es_mt` becomes stale. → Manual update needed; same as `es`.
