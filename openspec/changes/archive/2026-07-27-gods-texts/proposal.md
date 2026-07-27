## Why

The game Dungeon Crawl Stone Soup (DCSS) contains extensive English vocabulary and phrases that are difficult to understand for non-native speakers. The codebase includes partial Spanish translations, but they are scattered across multiple files and incomplete. A centralized, user-friendly HTML catalog is needed to browse original English text alongside Spanish translations, starting with the Gods section as a manageable first step.

## What Changes

- Create a new HTML file `dcss-catalog/gods.html` with dark mode design
- Parse and display all 25 gods from `crawl-master/crawl-ref/source/dat/descript/gods.txt` (76 entries: descriptions, powers, wrath)
- Show side-by-side original English text and Spanish translations from `dat/descript/es/gods.txt`
- Mark missing translations with "(sin traducción)" indicator
- Highlight proper nouns and untranslatable terms (god names, fantasy terms) in a distinct color
- Include sidebar navigation for future sections (monsters, items, etc.)
- Add search functionality to filter by English or Spanish text
- Display progress indicator showing translation completion percentage

## Capabilities

### New Capabilities

- `gods-catalog`: HTML catalog page for browsing DCSS gods vocabulary with original English text and Spanish translations, including dark mode UI, sidebar navigation, search, and progress tracking

### Modified Capabilities

-none-

## Impact

- New file: `dcss-catalog/gods.html` (standalone HTML, no dependencies)
- Source data: Read-only access to `crawl-master/crawl-ref/source/dat/descript/gods.txt` and `es/gods.txt`
- No existing code modified
- No external dependencies required (vanilla HTML/CSS/JS)
