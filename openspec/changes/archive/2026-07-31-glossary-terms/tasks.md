## 1. Setup & Dependencies

- [x] 1.1 Install `@floating-ui/react` as a dependency
- [x] 1.2 Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom` as dev dependencies
- [x] 1.3 Add `"test": "vitest"` script to `package.json`
- [x] 1.4 Create `vitest.config.ts` with jsdom environment

## 2. Types & Data

- [x] 2.1 Add `GlossaryExample` and `GlossaryEntry` interfaces to `src/types/god.ts`
- [x] 2.2 Add optional `glossary?: GlossaryEntry[]` field to `God` interface
- [x] 2.3 Add `glossary` section to `src/data/gods/wu-jian.json` with entries for "lunges" and "wall jumps" (3 examples each)

## 3. Text Processing Utility

- [x] 3.1 Create `src/utils/glossary.ts` with `parseGlossaryText(html, glossary)` function
- [x] 3.2 Implement regex-based parsing that skips text inside `<span>` tags
- [x] 3.3 Return `ReactNode[]` with `<GlossaryTerm>` components for matched terms

## 4. GlossaryTerm Component

- [x] 4.1 Create `src/components/GlossaryTerm/GlossaryTerm.tsx` with `forwardRef`
- [x] 4.2 Implement Floating UI hooks: `useFloating`, `useHover`, `useFocus`, `useDismiss`, `useRole`, `useInteractions`
- [x] 4.3 Add `useClick` as mobile fallback
- [x] 4.4 Configure middleware: `offset(8)`, `flip()`, `shift({ padding: 8 })`, `arrow()`
- [x] 4.5 Render tooltip via `FloatingPortal` with `FloatingArrow`
- [x] 4.6 Create `src/components/GlossaryTerm/GlossaryTerm.module.css` with dotted underline and tooltip styles

## 5. Integration

- [x] 5.1 Update `GodCard` to use `parseGlossaryText()` for `description.en` instead of `dangerouslySetInnerHTML`
- [x] 5.2 Update `GodSpotlight` to use `parseGlossaryText()` for `description.en` instead of `dangerouslySetInnerHTML`
- [x] 5.3 Ensure Spanish text and powers/wrath sections remain unchanged

## 6. Tests

- [x] 6.1 Create `src/utils/__tests__/glossary.test.ts`
- [x] 6.2 Test: glossary term in plain text is wrapped in GlossaryTerm
- [x] 6.3 Test: glossary term inside `<span class="proper-noun">` is NOT wrapped
- [x] 6.4 Test: case-insensitive matching works ("Lunges", "LUNGES", "lunges")
- [x] 6.5 Test: no glossary (undefined) returns HTML unchanged
- [x] 6.6 Test: multiple terms in same text are both wrapped

## 7. Verification

- [x] 7.1 Run `npm run build` — no TypeScript errors
- [x] 7.2 Run `vitest` — all tests pass
- [x] 7.3 Visual check: Wu Jian card shows dotted underline on "lunges" and "wall jumps"
- [x] 7.4 Visual check: tooltip appears on hover with translation and examples
- [x] 7.5 Visual check: tooltip does NOT appear on "Wu Jian" (proper-noun)
