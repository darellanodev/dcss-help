# view-toggle

## Purpose

Defines the segmented toggle that switches between the "Dios del día" and "Todos" views, and the conditional rendering and layout of the SearchBar across desktop and mobile viewports.

## Requirements

### Requirement: View toggle visibility
The system SHALL always display a segmented toggle control below the Legend, regardless of the active view mode.

#### Scenario: Toggle visible in Dios del día mode
- **WHEN** the user is viewing the "Dios del día" spotlight
- **THEN** the toggle is visible below the Legend with "Dios del día" selected

#### Scenario: Toggle visible in Todos mode
- **WHEN** the user is viewing the "Todos los dioses" grid
- **THEN** the toggle is visible below the Legend with "Todos" selected

### Requirement: Toggle switches view mode
The toggle SHALL contain two options: "Dios del día" and "Todos". Clicking an option SHALL switch the content area to the corresponding view.

#### Scenario: Switch from Dios del día to Todos via toggle
- **WHEN** the user clicks the "Todos" option on the toggle
- **THEN** the content area displays the searchable grid of all gods
- **AND** the SearchBar appears to the right of the toggle

#### Scenario: Switch from Todos to Dios del día via toggle
- **WHEN** the user clicks the "Dios del día" option on the toggle
- **THEN** the content area displays the GodSpotlight card for the god of the day

### Requirement: SearchBar conditional visibility
The SearchBar SHALL only be rendered when the "Todos" mode is active. On viewports 1025px or wider it SHALL appear to the right of the toggle in the same toolbar row; on viewports narrower than 1025px it SHALL appear full-width on its own row below the toggles.

#### Scenario: SearchBar hidden in Dios del día mode
- **WHEN** the user is viewing "Dios del día"
- **THEN** the SearchBar is not rendered

#### Scenario: SearchBar visible in Todos mode on desktop
- **WHEN** the user is viewing "Todos" on a viewport 1025px or wider
- **THEN** the SearchBar is rendered to the right of the toggle

#### Scenario: SearchBar on its own row on mobile
- **WHEN** the user is viewing "Todos" on a viewport narrower than 1025px
- **THEN** the SearchBar is rendered full-width on a row below the toggles

### Requirement: Card button remains functional
The "Ver todos los 27 dioses" button inside the GodSpotlight card SHALL continue to function as a secondary way to switch to "Todos" mode.

#### Scenario: Button switches to Todos mode
- **WHEN** the user clicks "Ver todos los 27 dioses" in the GodSpotlight card
- **THEN** the view switches to "Todos" mode
- **AND** the toggle reflects "Todos" as selected
