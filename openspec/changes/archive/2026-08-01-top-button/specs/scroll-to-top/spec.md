## ADDED Requirements

### Requirement: Top button in the day view
The 'Dios del dia' view SHALL render a 'Top' button below the god spotlight, before the 'Ver todos' button.

#### Scenario: Day view shows the top button
- **WHEN** the app renders in 'Dios del dia' view
- **THEN** a 'Top' button is visible below the god spotlight

#### Scenario: Clicking the top button scrolls to the top
- **WHEN** the user clicks the 'Top' button in the day view
- **THEN** the page scrolls smoothly to the very top of the window

### Requirement: Top button below every grid card
The 'Todos' grid view SHALL render a 'Top' button below each god card, visually attached to its card.

#### Scenario: Every card has a top button
- **WHEN** the app renders the 'Todos' grid view with one or more god cards
- **THEN** each god card is followed by its own 'Top' button

#### Scenario: Clicking the top button scrolls to the top
- **WHEN** the user clicks the 'Top' button below any god card
- **THEN** the page scrolls smoothly to the very top of the window

### Requirement: Consistent, subtle button styling
The 'Top' button SHALL be small and theme-consistent with the existing cyan-outlined controls, using an up arrow plus the short English label 'Top'.

#### Scenario: Button matches the app theme
- **WHEN** the 'Top' button is rendered in either view
- **THEN** it uses a subtle cyan-outlined style consistent with the app's other toggle controls
