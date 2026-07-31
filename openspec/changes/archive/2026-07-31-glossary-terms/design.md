## Context

The dcss-vocab-catalog app renders god descriptions using `dangerouslySetInnerHTML` with `highlightText()` output. There is no mechanism to render interactive React components inline within this HTML. The glossary feature requires wrapping specific text spans in a React component (`GlossaryTerm`) that manages its own refs and Floating UI state.

Current rendering pipeline:
```
text → highlightText(text) → dangerouslySetInnerHTML={{ __html: result }}
```

New rendering pipeline:
```
text → highlightText(text) → parseGlossaryText(result, glossary) → React elements → <div> (not dangerouslySetInnerHTML)
```

## Goals / Non-Goals

**Goals:**
- Hovering over a glossary term shows a tooltip with Spanish translation + 3 example sentences.
- Glossary terms are visually distinct (dotted underline in cyan).
- Works on both desktop (hover) and mobile (click fallback).
- Does not break proper-noun highlighting — if a glossary term overlaps a proper-noun span, proper-noun wins.
- Tooltip positioned via Floating UI to handle overflow, flip, and shift automatically.
- Tooltip renders via `FloatingPortal` to escape card `overflow: hidden` / transform stacking contexts.

**Non-Goals:**
- Glossary for Spanish text (English only for now).
- Glossary for all 27 gods (start with Wu Jian; others added incrementally).
- Click-to-open or modal-based glossary.
- Editing glossary entries from the UI.
- Search/filter within glossary.

## Decisions

### 1. Floating UI (`@floating-ui/react`) over CSS-only tooltips

**Choice:** `@floating-ui/react` with `useFloating`, `useHover`, `useClick`, `useFocus`, `useDismiss`, `useRole`, `useInteractions`.

**Alternatives considered:**
- CSS `:hover` + `::after` pseudo-elements — no refs, no portal, can't show rich content with examples, positioning is fragile near card edges.
- `react-tooltip` — heavier, less control over middleware stack.
- Custom portal + `getBoundingClientRect` — reinventing what Floating UI does.

**Rationale:** Floating UI handles the hard parts (overflow detection, flip, shift, arrow positioning) with a small API. `FloatingPortal` solves the card overflow problem. `useClick` gives mobile support alongside `useHover`.

### 2. `parseGlossaryText()` replaces `dangerouslySetInnerHTML`

**Choice:** A new utility function that receives the HTML string from `highlightText()` and returns a `ReactNode[]` with `<GlossaryTerm>` components wrapping matched terms.

**Alternatives considered:**
- Keep `dangerouslySetInnerHTML` and use `useEffect` + DOM traversal to wrap terms post-render — fragile, breaks React's render model, hard to test.
- Parse HTML into a React tree with a library like `html-react-parser` — adds a dependency for something we can do with a targeted regex.

**Rationale:** Since `highlightText()` output is predictable (only `<span class="proper-noun">` tags added to plain text), we can safely split on glossary term matches while respecting HTML tag boundaries. This gives us full React component control (refs, hooks) without new dependencies.

### 3. Glossary data lives in each god's JSON

**Choice:** Add an optional `glossary?: GlossaryEntry[]` field to each god JSON file.

**Alternatives considered:**
- Centralized `glossary.json` — harder to maintain, terms are god-specific.
- Database/API — overkill for a static vocabulary catalog.

**Rationale:** Keeps data co-located with the god it belongs to. The `?` optional field means no changes needed to gods without glossary entries yet.

### 4. Only `description.en` gets glossary treatment

**Choice:** Apply `parseGlossaryText()` only to `god.description.en` in both `GodCard` and `GodSpotlight`. Powers and wrath remain as `dangerouslySetInnerHTML`.

**Rationale:** Description is the longest and most vocabulary-rich section. Powers and wrath can be added later by extending the same pattern. Keeps initial scope small.

### 5. Vitest for unit tests

**Choice:** Add `vitest` + `@testing-library/react` + `jsdom` for testing `parseGlossaryText()` conflict cases.

**Rationale:** Need to verify that glossary terms inside `<span class="proper-noun">` are NOT wrapped, and that case-insensitive matching works. Pure function tests (no DOM rendering) are sufficient for `parseGlossaryText()`.

## Risks / Trade-offs

- **[Conflict: glossary term = proper noun]** → Mitigation: `parseGlossaryText()` regex skips text inside `<span>` tags. Vitest tests verify this.
- **[Performance with many glossary terms]** → Mitigation: Keep glossary entries minimal per god (2-5 terms). Each `GlossaryTerm` creates its own Floating UI instance.
- **[Mobile hover unreliable]** → Mitigation: `useClick` as fallback alongside `useHover`. Tooltip closes on outside click via `useDismiss`.
- **[HTML parsing edge cases]** → Mitigation: `highlightText()` only adds `<span>` tags with a single class. The parser handles this narrow HTML subset. No nested tags to worry about.
