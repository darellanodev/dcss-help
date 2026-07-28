# DESIGN.md — DCSS Vocabulario

## 1. Visual Theme & Atmosphere

Dark, data-dense reference tool for Dungeon Crawl Stone Soup players.
Cinematic navy-to-indigo palette with cyan accents — feels like a
game wiki, not a corporate dashboard. Functional density: every pixel
carries information. No decorative imagery, no illustrations.

Mood: scholarly, game-lore, slightly mystical.
Density: medium-high — cards pack text but breathe with 20px padding.

## 2. Color Palette & Roles

### Surfaces

| Token          | Hex     | Role              |
| -------------- | ------- | ----------------- |
| --bg-primary   | #1a1a2e | Page background   |
| --bg-secondary | #16213e | Sidebar, panels   |
| --bg-card      | #0f3460 | God cards         |

### Text

| Token          | Hex     | Role              |
| -------------- | ------- | ----------------- |
| --text-primary | #e0e0e0 | Body text         |
| --text-secondary | #a0a0a0 | Labels, captions |

### Accents

| Token          | Hex     | Role                                      |
| -------------- | ------- | ----------------------------------------- |
| --accent-cyan  | #00d4ff | Primary accent, links, headings           |
| --accent-red   | #ff6b6b | English (original) text                   |
| --accent-green | #4ecdc4 | Spanish (translation) text, progress bar  |
| --accent-yellow| #ffd93d | God titles                                |
| --accent-gray  | #6c757d | Missing translation placeholder           |

### Translation Status Borders

| Token          | Hex     | Meaning              |
| -------------- | ------- | -------------------- |
| --border-green | #2ecc71 | 100% translated      |
| --border-yellow| #f39c12 | Partially translated |
| --border-red   | #e74c3c | Not translated       |

**Note:** Accent colors (text) and status borders (card left border)
are independent systems. Red text = English. Red border = no translation.

## 3. Typography Rules

Font stack: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif (system).
No web fonts loaded.

| Element            | Size   | Weight  | Color         | Case      |
| ------------------ | ------ | ------- | ------------- | --------- |
| Page title (h1)    | 2rem   | bold    | accent-cyan   | normal    |
| Sidebar title      | 1.5rem | bold    | accent-cyan   | normal    |
| God name           | 1.4rem | bold    | accent-cyan   | normal    |
| Section label      | 0.85rem| normal  | accent-cyan   | UPPERCASE |
| God title          | 0.9rem | italic  | accent-yellow | normal    |
| Body text (en)     | 0.95rem| normal  | accent-red    | normal    |
| Body text (es)     | 0.95rem| normal  | accent-green  | normal    |
| No-translation     | 0.9rem | italic  | accent-gray   | normal    |
| Sidebar subtitle   | 0.9rem | normal  | text-secondary| normal    |
| Nav items          | inherit| normal  | text-secondary| normal    |
| Search input       | inherit| normal  | text-primary  | normal    |

Line-height: 1.6 for text blocks.
Letter-spacing: 1px for uppercase section labels.

## 4. Component Stylings

### GodCard

- Background: --bg-card
- Border-radius: 12px
- Border-left: 4px solid (status color: --border-green/yellow/red)
- Padding: 20px
- Hover: translateY(-2px), box-shadow 0 8px 25px rgba(0,0,0,0.3)
- Transitions: transform 0.2s ease, box-shadow 0.2s ease
- Sections: Descripcion → Poderes → Ira (each with en text + es text)

### Sidebar

- Width: 280px, fixed position, height: 100vh
- Background: --bg-secondary
- Border-right: 1px solid rgba(0, 212, 255, 0.2)
- Progress bar: 8px height, gradient green to cyan, border-radius 4px
- Nav links: 8px 12px padding, border-radius 6px
- Hover: bg rgba(0, 212, 255, 0.1)
- Active: bg rgba(0, 212, 255, 0.2), color accent-cyan

### SearchBar

- Full width, background --bg-card
- Border: 1px solid rgba(0, 212, 255, 0.3)
- Border-radius: 8px
- Focus: border accent-cyan

### Legend

- Flexbox with gap 15px
- Color squares: 12x12px, border-radius 2px

## 5. Layout Principles

Single-page layout: fixed sidebar + scrollable main content.

Grid: CSS Grid, repeat(auto-fill, minmax(400px, 1fr)), gap 20px.
Main: margin-left: 280px, padding: 30px.

## 6. Depth & Elevation

Three levels:

- Level 0: --bg-primary (page)
- Level 1: --bg-secondary, --bg-card (surfaces)
- Level 2: card hover (translateY + shadow)

Shadows: only on card hover.
Borders: subtle rgba(0, 212, 255, 0.2-0.3).

## 7. Do's and Don'ts

### Do

- Use CSS variables for all colors
- Use CSS Modules for scoped styles
- Maintain the status-color border pattern (green/yellow/red)
- Keep text readable against dark backgrounds
- Use uppercase + letter-spacing for section labels

### Don't

- Add bright backgrounds or light themes
- Use images or illustrations (text-only cards)
- Mix up accent colors with status colors
- Add border-radius > 12px to cards
- Use font sizes below 0.85rem

## 8. Responsive Behavior

Breakpoint: 768px.

- Desktop (>768px): fixed sidebar 280px, grid auto-fill
- Mobile (<=768px): main full-width, 1-column grid

## 9. Agent Prompt Guide

### Quick Reference

Primary: #00d4ff | Accent: #ff6b6b | Success: #4ecdc4
Warning: #ffd93d | Surface: #0f3460 | Background: #1a1a2e

### Prompt

"Dark-themed reference card UI for game data. Navy backgrounds
(#1a1a2e, #16213e, #0f3460), cyan accent (#00d4ff) for headings,
red (#ff6b6b) for original text, green (#4ecdc4) for translations.
Cards with 12px border-radius, 4px colored left border indicating
translation status. Fixed sidebar with navigation. Grid layout."
