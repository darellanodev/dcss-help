## ADDED Requirements

### Requirement: Date-based god selection
The system SHALL select a god deterministically based on the current day of the year using the formula `dayOfYear % gods.length`. The same god SHALL be returned for all calls on the same calendar day.

#### Scenario: Same god on same day
- **WHEN** `getGodOfDay()` is called twice on the same day
- **THEN** both calls return the same god object

#### Scenario: Different gods on different days
- **WHEN** `getGodOfDay()` is called on day N and day N+1 (where N % 27 ≠ (N+1) % 27)
- **THEN** the two calls return different gods

### Requirement: Spotlight view on initial load
The app SHALL display the God of the Day in a spotlight card when the user first enters the Gods section. The spotlight card SHALL show the god's name, title (if present), and full description, powers, and wrath sections (both en and es).

#### Scenario: Initial load shows spotlight
- **WHEN** the user navigates to the Gods section
- **THEN** a single god card is displayed with the god's name, title, description, powers, and wrath

#### Scenario: Spotlight shows date label
- **WHEN** the spotlight view is displayed
- **THEN** a label shows "Dios del día — {current date}" below the god's title

### Requirement: Toggle to full grid view
The app SHALL display a "Ver todos los 27 dioses" button below the spotlight card. Clicking this button SHALL hide the spotlight and display the full grid of 27 god cards with the search bar and legend.

#### Scenario: Click reveal button
- **WHEN** the user clicks the "Ver todos los 27 dioses" button
- **THEN** the spotlight disappears and the full grid of 27 god cards appears with the search bar and legend

### Requirement: Search only in grid view
The search bar and legend SHALL only be visible when the full grid view is active. They SHALL NOT appear in the spotlight view.

#### Scenario: Spotlight view has no search
- **WHEN** the spotlight view is active
- **THEN** the search bar and legend are not visible

#### Scenario: Grid view has search
- **WHEN** the full grid view is active
- **THEN** the search bar and legend are visible and functional
