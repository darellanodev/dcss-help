## Why

The English text in god cards contains vocabulary that may be unfamiliar to learners (e.g., "lunges", "wall jumps", "animated weapons"). Currently there is no way to see translations or example usage inline. Adding glossary tooltips lets users hover over a term and instantly see its Spanish translation plus contextual examples — improving vocabulary acquisition without cluttering the UI.

## What Changes

- Add a `glossary` field to god JSON data, containing terms with Spanish translations and 3 example sentences (EN/ES).
- Create a `GlossaryTerm` React component that renders a dotted-underlined term with a Floating UI tooltip on hover.
- Create a `parseGlossaryText()` utility that processes highlighted HTML and wraps matching glossary terms in `GlossaryTerm` components.
- Integrate glossary rendering into both `GodCard` and `GodSpotlight` for the English description section.
- Add Vitest unit tests for conflict cases (e.g., glossary term inside a proper-noun span).
- Add `@floating-ui/react` as a dependency and `vitest` as a dev dependency.

## Capabilities

### New Capabilities

- `glossary-tooltip`: Interactive glossary system — data schema, text processing pipeline, Floating UI tooltip component, and integration into god card views.

### Modified Capabilities

<!-- None — this is a purely additive feature -->

## Impact

- **Types**: `src/types/god.ts` — new `GlossaryEntry` and `GlossaryExample` interfaces, `glossary?` field on `God`.
- **Data**: `src/data/gods/wu-jian.json` — new `glossary` array (starting point; other gods can follow).
- **Components**: `GodCard` and `GodSpotlight` — replace `dangerouslySetInnerHTML` with `parseGlossaryText()` for English description.
- **New files**: `GlossaryTerm` component + CSS module, `glossary.ts` utility.
- **Dependencies**: `@floating-ui/react` (runtime), `vitest` + `@testing-library/react` (dev).
- **Tests**: New test suite in `src/utils/__tests__/glossary.test.ts`.
