## ADDED Requirements

### Requirement: Translation source toggle
The system SHALL provide a toggle in the toolbar that switches the displayed Spanish text between human translations (`es`) and machine translations (`es_mt`). The toggle SHALL be visible in both "Dios del día" and "Todos" views. The default position SHALL be machine translation mode ("Automática").

#### Scenario: Toggle visible in Dios del día mode
- **WHEN** the user is viewing the "Dios del día" spotlight
- **THEN** the translation toggle is visible in the toolbar with "Automática" selected

#### Scenario: Toggle visible in Todos mode
- **WHEN** the user is viewing the "Todos" grid
- **THEN** the translation toggle is visible in the toolbar with "Automática" selected

#### Scenario: Switch to human translations
- **WHEN** the user clicks "Humana" on the translation toggle
- **THEN** all Spanish text in both spotlight and grid cards displays from `es` fields

#### Scenario: Switch to machine translations
- **WHEN** the user clicks "Automática" on the translation toggle
- **THEN** all Spanish text in both spotlight and grid cards displays from `es_mt` fields

### Requirement: Machine translation data model
The system SHALL support `es_mt` as a field in `GodText` alongside `en` and `es`. Every god JSON file SHALL contain `es_mt` entries for description, powers, and wrath.

#### Scenario: GodText type includes es_mt
- **WHEN** a GodText object is loaded
- **THEN** it SHALL contain an `es_mt: string | null` field

#### Scenario: All 81 entries have es_mt
- **WHEN** all 27 god files are scanned
- **THEN** every description, powers, and wrath entry SHALL have a non-null `es_mt` value

### Requirement: Machine translation visual indicator
Machine translation text SHALL be rendered in the same green color as human Spanish, but SHALL be prefixed with a 🤖 emoji followed by a space. Human translation text SHALL have no prefix.

#### Scenario: Machine translation shows robot prefix
- **WHEN** machine translation mode is active and a god card displays
- **THEN** each Spanish text block begins with "🤖 " before the translation text

#### Scenario: Human translation has no prefix
- **WHEN** human translation mode is active and human `es` text exists
- **THEN** the Spanish text block has no emoji prefix

### Requirement: Machine translation fallback
When human translation mode is active and a god's `es` field is null, the system SHALL display "(sin traducción)" in gray, unchanged from current behavior. When machine translation mode is active, the system SHALL always display the `es_mt` content since it is always populated.

#### Scenario: Human mode shows missing label for untranslated field
- **WHEN** human mode is active and a god's `es` field is null
- **THEN** the card displays "(sin traducción)" in gray

#### Scenario: Machine mode always shows translation
- **WHEN** machine mode is active
- **THEN** all text sections display `es_mt` content

### Requirement: Search includes machine translations
When the user searches in machine translation mode, the system SHALL match against `es_mt` fields in addition to `en` fields.

#### Scenario: Search finds text in es_mt
- **WHEN** the user types a query that appears in an `es_mt` field
- **THEN** the corresponding god appears in search results regardless of current translation mode

### Requirement: Legend shows machine translation entry
The Legend SHALL include a new entry for machine translations, distinct from human translations.

#### Scenario: Legend has machine translation item
- **WHEN** the Legend is rendered
- **THEN** it SHALL display an entry with a 🤖 icon and the label "Traducción automática (IA)"
