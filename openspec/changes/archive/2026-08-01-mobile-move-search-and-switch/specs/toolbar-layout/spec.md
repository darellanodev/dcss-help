## ADDED Requirements

### Requirement: Mobile toolbar two-row layout
On viewports narrower than 1025px, when the "Todos" mode is active, the system SHALL arrange the toolbar controls in two rows: the top row contains the view toggle and the TranslationToggle, and the bottom row contains the SearchBar at full available width.

#### Scenario: Two-row layout in Todos mode on mobile
- **WHEN** the viewport width is less than 1025px and the "Todos" view is active
- **THEN** the SearchBar SHALL be displayed full-width on a row below the view toggle and the TranslationToggle

#### Scenario: Day view toolbar on mobile
- **WHEN** the viewport width is less than 1025px and the "Dios del día" view is active
- **THEN** the SearchBar is not rendered and the view toggle and TranslationToggle remain side by side

### Requirement: Translation toggle on top row
On viewports narrower than 1025px, the TranslationToggle SHALL be positioned on the same row as the view toggle, above the SearchBar.

#### Scenario: Translation toggle above the search bar
- **WHEN** the viewport width is less than 1025px and the "Todos" view is active
- **THEN** the TranslationToggle SHALL be visible on the row above the SearchBar

### Requirement: Desktop toolbar single row
On viewports 1025px or wider, the system SHALL keep the toolbar as a single row containing, in order, the view toggle, the SearchBar, and the TranslationToggle.

#### Scenario: Single row toolbar on desktop
- **WHEN** the viewport width is 1025px or greater and the "Todos" view is active
- **THEN** the view toggle, SearchBar, and TranslationToggle SHALL be displayed in a single row
