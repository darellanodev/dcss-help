## ADDED Requirements

### Requirement: Individual god files
The system SHALL store each god's data as a separate JSON file under `src/data/gods/`, replacing the monolithic `src/data/gods.json`.

#### Scenario: File per god exists
- **WHEN** the system starts
- **THEN** each god SHALL have a corresponding JSON file in `src/data/gods/` named using kebab-case of the god's name
- **AND** the file count SHALL be exactly 27

#### Scenario: File contains single God object
- **WHEN** a god file is read
- **THEN** its content SHALL be a single JSON object conforming to the God interface
- **AND** it SHALL NOT be wrapped in an array

### Requirement: Barrel file exports all gods
The system SHALL provide a barrel module at `src/data/gods/index.ts` that imports all 27 individual files and exports them as a `God[]` array.

#### Scenario: Barrel export matches original data
- **WHEN** the barrel module is imported
- **THEN** the exported array SHALL contain exactly 27 God objects
- **AND** the array content SHALL be identical to the original `src/data/gods.json` (same order, same values)

### Requirement: Import path updated
The system SHALL update `src/App.tsx` to import from `./data/gods` instead of `./data/gods.json`, with no change to type casting or downstream usage.

#### Scenario: App.tsx imports from barrel
- **WHEN** `src/App.tsx` imports god data
- **THEN** the import source SHALL be `'./data/gods'` (or `'./data/gods/index'`)
- **AND** the rest of the file SHALL remain unchanged

### Requirement: Split script available
The system SHALL provide a Node.js script at `scripts/split-gods.mjs` that reads `src/data/gods.json` and writes individual files to `src/data/gods/`.

#### Scenario: Script produces correct output
- **WHEN** the split script is run with `node scripts/split-gods.mjs`
- **THEN** it SHALL create 27 files in `src/data/gods/` with correct content
- **AND** it SHALL NOT modify the original `src/data/gods.json`

#### Scenario: Script is idempotent
- **WHEN** the split script is run multiple times
- **THEN** the output files SHALL be identical each time

### Requirement: Original gods.json removed
After the split is complete and verified, `src/data/gods.json` SHALL be deleted.

#### Scenario: Original file deleted
- **WHEN** the change is complete
- **THEN** `src/data/gods.json` SHALL NOT exist in the repository
