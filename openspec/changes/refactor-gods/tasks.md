## 1. Extract God Data Files

- [ ] 1.1 Create `data/gods/ashenzari.js` through `data/gods/zin.js` — all 27 god files, each exporting a default object with `{ name, title, description: { en, es }, powers: { en, es }, wrath: { es } }` matching the original data from `js/index.js`
- [ ] 1.2 Verify all 27 files exist in `data/gods/` with correct god names (lowercase, hyphenated compounds: `nemelex-xobeh.js`, `the-shining-one.js`, `wu-jian.js`)

## 2. Create Barrel File

- [ ] 2.1 Create `js/gods.js` that imports all 27 god modules and exports `godsData` array in original order (Ashenzari first, Zin last)

## 3. Refactor index.js

- [ ] 3.1 Add `import { godsData } from '../data/gods.js'` (or equivalent path) at top of `js/index.js`
- [ ] 3.2 Remove the inline `const godsData = [...]` block and its associated comment header (lines 1–470)
- [ ] 3.3 Keep `properNouns[]`, utility functions, render functions, search, event listeners, and initialization intact

## 4. Update HTML

- [ ] 4.1 Change `<script src="js/index.js">` to `<script type="module" src="js/index.js">` in `dcss-vocab-catalog.html`

## 5. Verify

- [ ] 5.1 Open in local dev server and confirm all 27 god cards render with correct English/Spanish text
- [ ] 5.2 Test search filtering by god name, title, and text content
- [ ] 5.3 Confirm progress bar shows correct translation percentage (28/81 = 34%)
