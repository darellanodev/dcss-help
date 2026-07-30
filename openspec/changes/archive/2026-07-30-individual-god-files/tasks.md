## 1. Split script

- [x] 1.1 Create `scripts/split-gods.mjs` - reads `src/data/gods.json`, generates individual files in `src/data/gods/` with kebab-case names
- [x] 1.2 Run the script and verify 27 files are created with correct content

## 2. Barrel file and import update

- [x] 2.1 Create `src/data/gods/index.ts` that imports all 27 individual files and exports them as a `God[]` array in the same order as original
- [x] 2.2 Update `src/App.tsx` to import from `./data/gods` instead of `./data/gods.json`
- [x] 2.3 Verify the app builds and runs correctly with the new import

## 3. Cleanup

- [x] 3.1 Delete `src/data/gods.json`
- [x] 3.2 Run `tsc` and verify no type errors
- [x] 3.3 Run the app and verify all gods display correctly
