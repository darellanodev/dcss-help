## Why

`js/index.js` is a 672-line monolith containing all 27 god definitions inline, mixing data with rendering logic. This makes editing individual gods error-prone, prevents parallel work on different gods, and bloats the file unnecessarily. Extracting each god into its own module improves maintainability and follows a standard modular data pattern.

## What Changes

- Extract each of the 27 god definitions from `js/index.js` into individual ES module files under `data/gods/`
- Create a barrel file `js/gods.js` that imports all 27 god modules and exports the `godsData` array
- Refactor `js/index.js` to import `godsData` from `js/gods.js` instead of defining it inline
- Update `dcss-vocab-catalog.html` to use `type="module"` on the script tag
- No functional changes — the rendered output remains identical

## Capabilities

### New Capabilities
- `modular-god-data`: Individual ES module files for each god definition, with a barrel export

### Modified Capabilities
- (none — no existing specs)

## Impact

- **Files created**: 27 files in `data/gods/`, 1 barrel file `js/gods.js`
- **Files modified**: `js/index.js` (remove ~430 lines of data, add import), `dcss-vocab-catalog.html` (script type attribute)
- **Dependencies**: None added
- **Breaking changes**: None — local dev server required for ES modules (already the case)
