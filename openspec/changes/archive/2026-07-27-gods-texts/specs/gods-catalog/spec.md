## ADDED Requirements

### Requirement: Display gods catalog with dark mode interface
The system SHALL provide a standalone HTML page displaying DCSS gods vocabulary in a dark mode interface.

#### Scenario: Page loads with dark theme
- **WHEN** user opens the HTML file in a browser
- **THEN** page displays with dark background (#1a1a2e), light text (#e0e0e0), and colored accents

#### Scenario: Gods are displayed in card format
- **WHEN** page loads
- **THEN** each of the 25 gods displays in a separate card showing name, description, powers, and wrath sections

### Requirement: Show original English text
The system SHALL display the original English text from the game source files.

#### Scenario: English text visible for each god
- **WHEN** user views a god card
- **THEN** original English description, powers, and wrath text are displayed with red-tinted styling (#ff6b6b)

### Requirement: Show Spanish translations where available
The system SHALL display Spanish translations alongside English text when available.

#### Scenario: Spanish translation exists
- **WHEN** a Spanish translation is available for a god entry
- **THEN** Spanish text is displayed with green-tinted styling (#4ecdc4)

#### Scenario: Spanish translation missing
- **WHEN** no Spanish translation exists for a god entry
- **THEN** text "(sin traducción)" is displayed in gray (#6c757d)

### Requirement: Highlight proper nouns and untranslatable terms
The system SHALL visually distinguish proper nouns, god names, and fantasy terms that are not translated.

#### Scenario: Proper nouns highlighted
- **WHEN** text contains god names (Kikubaaqudgha, Zin, etc.) or fantasy terms (lich, naga, etc.)
- **THEN** these terms display in yellow (#ffd93d) to indicate they are untranslatable

### Requirement: Sidebar navigation
The system SHALL include a sidebar menu for navigating between sections.

#### Scenario: Sidebar visible
- **WHEN** page loads
- **THEN** left sidebar displays with navigation links

#### Scenario: Gods section active
- **WHEN** user is viewing the gods catalog
- **THEN** "Dioses" link is highlighted as active in sidebar

### Requirement: Search functionality
The system SHALL provide search capability to filter gods by text content.

#### Scenario: Search by English text
- **WHEN** user enters search term in English
- **THEN** only gods matching the term in English text are displayed

#### Scenario: Search by Spanish text
- **WHEN** user enters search term in Spanish
- **THEN** only gods matching the term in Spanish text are displayed

#### Scenario: Clear search
- **WHEN** user clears search field
- **THEN** all gods are displayed again

### Requirement: Translation progress indicator
The system SHALL display statistics about translation completion.

#### Scenario: Progress shown
- **WHEN** page loads
- **THEN** sidebar shows "28/76 entradas traducidas (37%)" or similar progress indicator

#### Scenario: Card border color indicates status
- **WHEN** viewing god cards
- **THEN** cards with complete translations have green border, partial have yellow, untranslated have red

### Requirement: Responsive design
The system SHALL work on both desktop and mobile devices.

#### Scenario: Desktop view
- **WHEN** viewed on desktop browser
- **THEN** sidebar and content display side by side

#### Scenario: Mobile view
- **WHEN** viewed on mobile browser
- **THEN** sidebar collapses or becomes scrollable, content remains readable
