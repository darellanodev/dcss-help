## Context

`js/index.js` is a 672-line monolith that mixes 27 god data definitions (~430 lines) with rendering, search, and utility logic. The `data/gods/` directory exists but is empty. The HTML file loads JS via a regular `<script>` tag. All code runs in global scope.

## Goals / Non-Goals

**Goals:**
- Extract each god definition into its own ES module file under `data/gods/`
- Create a barrel file that re-exports all gods as an array
- Refactor `index.js` to import data instead of defining it inline
- Update HTML to support ES modules
- Zero functional changes — identical rendered output

**Non-Goals:**
- Adding a build step or bundler
- Refactoring rendering/utility functions
- Changing the data schema or file naming conventions
- Modifying CSS

## Decisions

### 1. ES Modules over CommonJS or global scripts
**Choice**: Native ES modules (`export`/`import`)
**Rationale**: No build step required, browser-native, clean dependency graph. The project already runs on a local server.
**Alternative considered**: CommonJS with a bundler — rejected for simplicity.

### 2. One god per file, flat directory
**Choice**: `data/gods/{god-name-lowercase}.js` with hyphenated compound names
**Rationale**: Simple, predictable naming. Flat directory avoids over-engineering for 27 files.
**Examples**: `nemelex-xobeh.js`, `the-shining-one.js`, `wu-jian.js`

### 3. Barrel file at `js/gods.js`
**Choice**: A single `js/gods.js` that imports all 27 modules and exports `godsData`
**Rationale**: Keeps `index.js` clean with a single import. Adding/removing gods only touches `gods.js` and the individual file.
**Alternative considered**: Dynamic `import()` — rejected for unnecessary complexity.

### 4. `type="module"` on script tag
**Choice**: Change `<script src="js/index.js">` to `<script type="module" src="js/index.js">`
**Rationale**: Required for ES module syntax. Modules are deferred by default, so DOMContentLoaded timing is preserved.

## Risks / Trade-offs

- **Local server required**: ES modules don't work over `file://`. Mitigation: project already uses a local server.
- **27 files instead of 1**: More files to navigate. Mitigation: flat structure, consistent naming, and the barrel file keeps the import interface simple.
- **Import paths**: Barrel file must use relative paths. Mitigation: straightforward `../data/gods/*.js` imports.
