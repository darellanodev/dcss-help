> **Purpose**: Define how the application provides navigation on mobile viewports, including a hamburger drawer, top bar, and backdrop overlay.

## Requirements

### Requirement: Mobile top bar
On viewports narrower than 769px, the system SHALL display a fixed top bar containing a hamburger menu button on the left and the app title.

#### Scenario: Top bar visible on mobile
- **WHEN** the viewport width is less than 769px
- **THEN** a fixed top bar with 56px height SHALL be displayed at the top of the viewport

#### Scenario: Top bar hidden on desktop
- **WHEN** the viewport width is 769px or greater
- **THEN** the top bar SHALL NOT be displayed

### Requirement: Mobile drawer navigation
On viewports narrower than 769px, the sidebar content SHALL be hidden by default and revealed as a slide-out drawer overlay triggered by the hamburger button.

#### Scenario: Drawer opens on hamburger tap
- **WHEN** the user taps the hamburger button
- **THEN** the drawer SHALL slide in from the left edge with a 0.3s ease transition

#### Scenario: Drawer content
- **WHEN** the drawer is open
- **THEN** it SHALL display the app name, subtitle, translation progress bar with counts, and the section navigation links

#### Scenario: Drawer closes on backdrop tap
- **WHEN** the drawer is open and the user taps the backdrop overlay
- **THEN** the drawer SHALL slide out to the left and the backdrop SHALL fade out

#### Scenario: Drawer closes on Escape key
- **WHEN** the drawer is open and the user presses the Escape key
- **THEN** the drawer SHALL close

#### Scenario: Drawer closes on hamburger toggle
- **WHEN** the drawer is open and the user taps the hamburger button
- **THEN** the drawer SHALL close

#### Scenario: Body scroll locked while drawer open
- **WHEN** the drawer is open
- **THEN** the body SHALL NOT scroll

### Requirement: Desktop sidebar unchanged
On viewports 769px or wider, the sidebar SHALL remain fixed at 280px width, always visible, with no slide animation.

#### Scenario: Sidebar persistent at desktop width
- **WHEN** the viewport width is 769px or greater
- **THEN** the sidebar SHALL be displayed at its current fixed position without any transform offset

### Requirement: Backdrop overlay
When the drawer is open, the system SHALL display a semi-transparent backdrop overlay between the drawer and the main content.

#### Scenario: Backdrop appearance
- **WHEN** the drawer opens
- **THEN** a backdrop with rgba(0, 0, 0, 0.5) SHALL fade in covering the entire viewport behind the drawer

#### Scenario: Backdrop closes drawer on tap
- **WHEN** the drawer is open and the user taps the backdrop
- **THEN** the drawer SHALL close
