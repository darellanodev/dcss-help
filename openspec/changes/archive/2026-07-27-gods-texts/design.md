## Context

Dungeon Crawl Stone Soup (DCSS) is an open-source roguelike game with extensive English text content scattered across multiple files. The game has partial Spanish translations in `dat/descript/es/` directory, but these are incomplete and difficult to browse. The user needs a centralized HTML catalog to understand game vocabulary, starting with the Gods section.

Current state:
- English gods data: `crawl-master/crawl-ref/source/dat/descript/gods.txt` (710 lines, 76 entries)
- Spanish translations: `crawl-master/crawl-ref/source/dat/descript/es/gods.txt` (253 lines, 28 entries)
- God names/titles: `crawl-master/crawl-ref/source/dat/database/godname.txt` (169 lines)
- Existing translations: ~37% complete for gods section

## Goals / Non-Goals

**Goals:**
- Create a standalone HTML file with dark mode design
- Display all 25 gods with their descriptions, powers, and wrath text
- Show side-by-side original English and Spanish translations
- Mark missing translations clearly with "(sin traducción)"
- Highlight proper nouns and untranslatable terms in distinct colors
- Include sidebar navigation for future sections
- Add search functionality across all text
- Show translation progress statistics

**Non-Goals:**
- Modify existing game files or translations
- Create a dynamic backend or database
- Implement translation editing capabilities
- Support multiple languages beyond English/Spanish
- Parse complex template syntax from database/ files (future scope)

## Decisions

### 1. Single HTML File with Embedded Data
**Decision**: Embed all god data directly into the HTML as JavaScript objects rather than loading external files.
**Rationale**: Simplicity, no server required, works offline, easy to share.
**Alternative considered**: Separate JSON data files rejected because it adds complexity without benefit for this use case.

### 2. Hardcoded Color Scheme
**Decision**: Use fixed CSS variables for dark mode colors.
**Rationale**: Consistent design, easy to maintain, no runtime overhead.
**Alternative**: Dynamic theme switching rejected as unnecessary for this use case.

### 3. Vanilla JavaScript (No Frameworks)
**Decision**: Use plain HTML/CSS/JS without React, Vue, or other frameworks.
**Rationale**: Maximum compatibility, no build step, easy to understand and modify.
**Alternative**: Framework-based approach rejected for simplicity.

### 4. CSS Grid for Card Layout
**Decision**: Use CSS Grid for responsive card layout.
**Rationale**: Modern browser support, flexible, handles varying content heights well.
**Alternative**: Flexbox rejected because Grid provides better control for this layout pattern.

### 5. Inline SVG Icons
**Decision**: Use simple Unicode characters or inline SVG for sidebar icons.
**Rationale**: No external dependencies, crisp at any size, lightweight.

## Risks / Trade-offs

### Risk: Manual Data Entry
**Impact**: High - all 76 entries must be manually copied into JavaScript objects.
**Mitigation**: Consider creating a simple script to parse text files and generate JS objects (can be done post-implementation).

### Risk: Maintaining Sync with Source Files
**Impact**: Medium - if game text changes, catalog becomes outdated.
**Mitigation**: Document source file paths and versions; manual update process acceptable for this use case.

### Risk: Browser Compatibility
**Impact**: Low - modern browsers only (Chrome, Firefox, Edge, Safari).
**Mitigation**: Use widely-supported CSS features; avoid cutting-edge APIs.

### Trade-off: Completeness vs. Time
**Decision**: Start with gods section only, even though users may want all sections immediately.
**Rationale**: Manageable scope, allows iteration on design before scaling.
