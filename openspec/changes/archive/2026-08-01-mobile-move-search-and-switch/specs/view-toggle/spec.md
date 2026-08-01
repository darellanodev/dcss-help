## MODIFIED Requirements

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
