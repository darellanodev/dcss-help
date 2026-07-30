## Why

Currently the app shows Spanish translations where humans have manually translated them, but 59 of 81 text entries (description, powers, wrath across 27 gods) have no Spanish translation at all. Adding machine translations and a toggle lets users choose between human and AI-translated Spanish, giving them full coverage while preserving the hand-crafted translations where they exist.

## What Changes

- Add `es_mt` (machine translation) field to every god's description, powers, and wrath
- Populate all 81 `es_mt` fields with translations from the English source
- Add a toggle switch in the toolbar to switch between human and machine translations
- Machine translation mode is the default (on by default)
- Both views (Dios del día and Todos) respect the toggle
- The Legend gains an entry for machine-translated text
- Search indexes `es_mt` fields in machine translation mode

## Capabilities

### New Capabilities
- `translation-source-toggle`: UI toggle that switches the displayed Spanish text between human (`es`) and machine (`es_mt`) translations, visible in both Dios del día and Todos views, defaulting to machine mode.

### Modified Capabilities
<!-- No existing spec capabilities are changing - the god data model and view toggle specs remain unaffected -->

## Impact

- **`src/types/god.ts`**: `GodText` gains `es_mt: string | null`
- **27 JSON files** in `src/data/gods/`: each gets `es_mt` on all three text sections
- **`src/App.tsx`**: new state `useMachineTranslation` (default `true`), new toggle component
- **`src/components/GodCard/GodCard.tsx`**: conditional display of `es` vs `es_mt`
- **`src/components/GodSpotlight/GodSpotlight.tsx`**: same conditional display
- **`src/components/Legend/Legend.tsx`**: new item for machine translation
- **`src/utils/gods.ts`**: search includes `es_mt`; progress tracks both sources
- **New component**: translation toggle UI
