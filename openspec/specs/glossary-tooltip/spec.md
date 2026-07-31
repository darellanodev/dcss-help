# glossary-tooltip

## Purpose

Provides inline glossary tooltips for god description text. Glossary terms in the English description are underlined and show a tooltip with translation and examples on hover (desktop) or tap (mobile). Proper-noun spans take priority over glossary highlighting. Spanish text is excluded.

## Requirements

### Requirement: God JSON supports glossary entries

The `God` type SHALL include an optional `glossary` field containing an array of `GlossaryEntry` objects. Each entry SHALL have a `term` (string), `translation` (string), and `examples` (array of `{ en: string, es: string }`). Gods without glossary entries SHALL NOT include this field.

#### Scenario: God with glossary data
- **WHEN** a god JSON file includes a `glossary` array with entries
- **THEN** the `God` object's `glossary` field contains those entries

#### Scenario: God without glossary data
- **WHEN** a god JSON file does not include a `glossary` field
- **THEN** the `God` object's `glossary` field is `undefined`

### Requirement: Glossary terms are visually distinguished

Glossary terms rendered in English text SHALL display a 2px dotted underline in `var(--accent-cyan)` with `cursor: help`.

#### Scenario: Term has glossary entry
- **WHEN** English text contains a word matching a glossary term
- **THEN** that term renders with a dotted cyan underline

#### Scenario: Term has no glossary entry
- **WHEN** English text contains a word not in the glossary
- **THEN** that word renders without any underline decoration

### Requirement: Tooltip displays on hover

When a user hovers over a glossary term, a tooltip SHALL appear showing: the term in bold, its Spanish translation, and up to 3 example sentences with English and Spanish text.

#### Scenario: Hover over glossary term
- **WHEN** user hovers over a glossary term with a dotted underline
- **THEN** a tooltip appears near the term showing the term (bold), translation, and example sentences

#### Scenario: Mouse leaves glossary term
- **WHEN** user moves the mouse away from the glossary term
- **THEN** the tooltip disappears

### Requirement: Tooltip positioning handles overflow

Tooltips SHALL be rendered via `FloatingPortal` (into `document.body`) and positioned using Floating UI middleware: `offset(8)`, `flip()`, `shift({ padding: 8 })`, and `arrow()`.

#### Scenario: Term near right edge of card
- **WHEN** a glossary term is near the right edge of its container
- **THEN** the tooltip flips to the left side and remains fully visible

#### Scenario: Term near bottom of card
- **WHEN** a glossary term is near the bottom of a scrollable container
- **THEN** the tooltip shifts upward to remain within the viewport

### Requirement: Mobile click fallback

On touch devices, tapping a glossary term SHALL toggle the tooltip (same content as hover). Tapping outside the tooltip SHALL dismiss it.

#### Scenario: Tap glossary term on mobile
- **WHEN** user taps a glossary term on a touch device
- **THEN** the tooltip appears with the same content as desktop hover

#### Scenario: Tap outside tooltip on mobile
- **WHEN** user taps outside an open tooltip on a touch device
- **THEN** the tooltip closes

### Requirement: Glossary does not conflict with proper-noun highlighting

If a glossary term overlaps with a proper-noun span (e.g., "Wu Jian"), the proper-noun span SHALL take priority and the term SHALL NOT be wrapped in glossary markup.

#### Scenario: Glossary term inside proper-noun span
- **WHEN** `highlightText()` wraps "Wu Jian" in `<span class="proper-noun">`
- **THEN** `parseGlossaryText()` does NOT wrap "Wu Jian" in a glossary component

#### Scenario: Glossary term outside proper-noun spans
- **WHEN** a glossary term appears in plain text (not inside a `<span>` tag)
- **THEN** `parseGlossaryText()` wraps it in a glossary component

### Requirement: Glossary only applies to English description

Glossary terms SHALL only be rendered in the English text of the `description` section. Spanish text and other English sections (powers, wrath) SHALL NOT have glossary treatment.

#### Scenario: English description has glossary
- **WHEN** rendering `god.description.en` with a glossary
- **THEN** matching terms are wrapped in glossary components

#### Scenario: Spanish text has no glossary
- **WHEN** rendering `god.description.es` or `god.description.es_mt`
- **THEN** no glossary underline or tooltip is applied
