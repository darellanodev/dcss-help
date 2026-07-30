## Context

The project currently stores all 27 gods as an array in a single `src/data/gods.json`. It is imported directly in `src/App.tsx` and cast to `God[]`. The God type is defined in `src/types/god.ts`. Utilities in `src/utils/` consume `God[]` and `God` types — none depend on the JSON file structure.

## Goals / Non-Goals

**Goals:**
- Split `src/data/gods.json` into 27 individual JSON files under `src/data/gods/`
- Use kebab-case filenames derived from god names (e.g., `nemelex-xobeh.json`, `the-shining-one.json`)
- Provide a script to generate the individual files from the original (one-time migration + documentation)
- Update the import in `src/App.tsx` to load from the new structure
- Preserve all existing type definitions, utility functions, and component behavior

**Non-Goals:**
- No changes to the God interface or any type definition
- No changes to utility functions or components
- No runtime performance optimization (import mechanism may be equivalent)
- No translation content changes

## Decisions

1. **Generate via build-time script** — A one-time Node.js script (`scripts/split-gods.mjs`) reads `src/data/gods.json` and writes each entry to `src/data/gods/<kebab-name>.json`. The script is kept in the repo for reproducibility and documentation; it's not added to the build pipeline.
2. **Barrel file for imports** — A `src/data/gods/index.ts` barrel file re-exports all gods as an array. This avoids touching each utility and keeps the import in `App.tsx` as a single-line change (`import godsData from './data/gods'` instead of `import godsData from './data/gods.json'`).
3. **Kebab-case filenames** — Spaces in god names (e.g., "Nemelex Xobeh", "the Shining One") are converted to kebab-case for filesystem safety.
4. **Keep `gods.json` during transition** — The original file is removed only after the split script and barrel import are verified. Git history preserves it if needed.

## Risks / Trade-offs

- [Risk] Forgetting to regenerate files when adding a god → Mitigation: The split script documents this; gods data is static (from the game) so new additions are rare.
- [Risk] The barrel file approach may be unfamiliar vs dynamic imports → Chosen for simplicity; Vite barrel imports are optimized at build time with no runtime cost.
- [Risk] Windows vs Unix kebab-case mapping for gods with unusual names → Verified: all god names produce valid filenames after kebab-case conversion.
