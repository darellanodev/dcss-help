## 1. Data Model & Type Changes

- [ ] 1.1 Add `es_mt: string | null` to `GodText` in `src/types/god.ts`
- [ ] 1.2 Add `es_mt` fields to all 27 god JSON files in `src/data/gods/`

## 2. Machine Translations

- [ ] 2.1 Generate machine Spanish translations for every `en` text across all 27 gods (81 entries) and write them to each god's `description.es_mt`, `powers.es_mt`, `wrath.es_mt`

## 3. UI Component — Translation Toggle

- [ ] 3.1 Create `TranslationToggle` component with "Humana" / "Automática" options
- [ ] 3.2 Add CSS module for the toggle (matching existing toggle styles)

## 4. App Integration

- [ ] 4.1 Add `useMachineTranslation` state (default `true`) and wiring in `App.tsx`
- [ ] 4.2 Render TranslationToggle in both Dios del día and Todos views
- [ ] 4.3 Pass `useMachineTranslation` prop to GodCard and GodSpotlight

## 5. Card & Spotlight Display

- [ ] 5.1 Update `GodCard` to conditionally render `es` or `es_mt` based on prop
- [ ] 5.2 Add 🤖 prefix to machine translation text
- [ ] 5.3 Add CSS class `.machineTranslation` for the prefix styling
- [ ] 5.4 Apply same changes to `GodSpotlight`

## 6. Legend Update

- [ ] 6.1 Add "Traducción automática (IA)" entry with 🤖 icon to Legend

## 7. Search & Progress Utilities

- [ ] 7.1 Update `searchGods` to include `es_mt` fields in search
- [ ] 7.2 Update `calculateProgress` to count machine translations (or add a secondary progress metric)

## 8. Verify

- [ ] 8.1 Build the project (`pnpm build`) and confirm no errors
