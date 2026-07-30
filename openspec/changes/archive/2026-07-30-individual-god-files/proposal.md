## Why

The gods data is currently a single monolithic `src/data/gods.json` file containing all 27 gods. This makes it harder to manage individual god translations, review changes per god, and parallelize work. Splitting into individual files improves maintainability, enables per-god git history, and makes the data structure more modular.

## What Changes

- Replace `src/data/gods.json` with a `src/data/gods/` directory containing one JSON file per god
- Each file will be named using kebab-case of the god's name (e.g., `ashenzari.json`, `nemelex-xobeh.json`)
- Each file will contain a single God object (not an array)
- Update `src/App.tsx` to import all individual files instead of the monolithic JSON
- Generate the individual files automatically from the existing data to avoid manual transcription errors

## Capabilities

### New Capabilities
- `individual-god-files`: Each god stored as a separate JSON file in `src/data/gods/`, named in kebab-case, containing a single God object

### Modified Capabilities
<!-- No existing spec-level behavior changes: the data shape and consumption pattern remain the same -->

## Impact

- **`src/data/gods.json`**: Removed (replaced by `src/data/gods/*.json`)
- **`src/data/gods/`**: Created with 27 individual JSON files
- **`src/App.tsx`**: Import changed from single JSON to individual files (or dynamic loading)
- **Type definitions (`src/types/god.ts`)**: No change — the God interface stays the same
- **Utility functions (`src/utils/gods.ts`, `src/utils/godOfDay.ts`)**: No change — they work with `God[]` and `God` which remain identical
- **Components**: No change — they consume `God` objects identically
