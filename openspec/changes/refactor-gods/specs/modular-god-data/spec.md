## ADDED Requirements

### Requirement: Individual god module files
Each of the 27 gods SHALL be defined in its own ES module file at `data/gods/{god-name-lowercase}.js`. Each file SHALL export a default object matching the existing god data schema: `{ name, title, description: { en, es }, powers: { en, es }, wrath: { en, es } }`.

#### Scenario: God file exists and exports correct shape
- **WHEN** a god module file is imported
- **THEN** it exports an object with properties `name` (string), `title` (string), `description` (object with `en` and `es` keys), `powers` (object with `en` and `es` keys), and `wrath` (object with `en` and `es` keys)

#### Scenario: All 27 gods have corresponding files
- **WHEN** the `data/gods/` directory is listed
- **THEN** it contains exactly 27 `.js` files, one per god

### Requirement: Barrel export file
A barrel file at `js/gods.js` SHALL import all 27 god modules and export a `godsData` array containing all gods in their original order.

#### Scenario: Barrel file exports complete array
- **WHEN** `js/gods.js` is imported
- **THEN** it exports a `godsData` array with 27 elements
- **AND** the order matches the original `index.js` ordering (Ashenzari first, Zin last)

### Requirement: index.js imports from barrel
`js/index.js` SHALL import `godsData` from `js/gods.js` instead of defining it inline. The inline `godsData` constant and its associated comment block SHALL be removed.

#### Scenario: index.js uses imported data
- **WHEN** `js/index.js` is loaded
- **THEN** `godsData` is sourced from the import statement, not an inline definition
- **AND** the file no longer contains the `const godsData = [...]` block

### Requirement: HTML supports modules
`dcss-vocab-catalog.html` SHALL use `type="module"` on the script tag loading `js/index.js`.

#### Scenario: Script tag has module type
- **WHEN** `dcss-vocab-catalog.html` is parsed
- **THEN** the script tag for `js/index.js` has `type="module"` attribute

### Requirement: No functional regression
The rendered god cards, search functionality, progress tracking, and proper noun highlighting SHALL remain identical to the pre-refactor behavior.

#### Scenario: All gods render correctly
- **WHEN** the page loads
- **THEN** all 27 god cards are displayed with their English and Spanish text
- **AND** the progress bar shows the correct translation percentage

#### Scenario: Search still works
- **WHEN** a user types in the search input
- **THEN** god cards are filtered by name, title, and text content as before
