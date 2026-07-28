import { godsData } from './gods.js';

// ============================================
// PROPER NOUNS LIST - Terms that stay in English
//
// Categories:
// - God names (27 total)
// - Fantasy/sci-fi terms
// - Game-specific mechanics
// ============================================
const properNouns = [
    // God names
    "Ashenzari", "Beogh", "Cheibriados", "Dithmenos", "Elyvilon",
    "Fedhas", "Gozag", "Hepliaklqana", "Ignis", "Jiyva",
    "Kikubaaqudgha", "Lugonu", "Makhleb", "Nemelex", "Xobeh",
    "Okawaru", "Pakellas", "Qazlal", "Ru", "Sif Muna",
    "Trog", "Uskayaw", "Vehumet", "Wu Jian", "Xom",
    "Yredelemnul", "Zin", "the Shining One", "the Wu Jian Council",
    "Madash", "Stormbringer", "Ym Sagoz",

    // Fantasy/sci-fi terms
    "Abyss", "naga", "orc", "demon", "lich", "necromancer",
    "berserk", "piety", "invocations", "spellbooks", "chaos",
    "necromancy", "divine", "holy", "unholy", "torment",

    // Game mechanics
    "Invocations", "piety", "berserk", "mutations"
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Calculate translation status for a god
function getTranslationStatus(god) {
    let total = 0;
    let translated = 0;

    // Check description
    total++;
    if (god.description.es) translated++;

    // Check powers
    total++;
    if (god.powers.es) translated++;

    // Check wrath
    total++;
    if (god.wrath.es) translated++;

    if (translated === total) return 'complete';
    if (translated > 0) return 'partial';
    return 'none';
}

// Highlight proper nouns in text
function highlightText(text) {
    if (!text) return '';
    let highlighted = text;

    // Sort proper nouns by length (longest first) to avoid partial matches
    const sortedNouns = [...properNouns].sort((a, b) => b.length - a.length);

    sortedNouns.forEach(noun => {
        const regex = new RegExp(`\\b${noun}\\b`, 'gi');
        highlighted = highlighted.replace(regex, `<span class="proper-noun">${noun}</span>`);
    });

    return highlighted;
}

// Calculate overall progress
function calculateProgress() {
    let totalEntries = 0;
    let translatedEntries = 0;

    godsData.forEach(god => {
        totalEntries += 3; // description, powers, wrath
        if (god.description.es) translatedEntries++;
        if (god.powers.es) translatedEntries++;
        if (god.wrath.es) translatedEntries++;
    });

    return { total: totalEntries, translated: translatedEntries };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

// Render a single god card
function renderGodCard(god) {
    const status = getTranslationStatus(god);
    const titleText = god.title ? `${god.title}` : '';

    return `
                <div class="god-card ${status}" data-god="${god.name.toLowerCase()}">
                    <h3 class="god-name">${god.name}</h3>
                    ${titleText ? `<div class="god-title">${titleText}</div>` : ''}

                    <div class="section-title">Descripción</div>
                    <div class="text-block">
                        <div class="english-text">${highlightText(god.description.en)}</div>
                        ${god.description.es
            ? `<div class="spanish-text">${highlightText(god.description.es)}</div>`
            : `<div class="no-translation">(sin traducción)</div>`
        }
                    </div>

                    <div class="section-title">Poderes</div>
                    <div class="text-block">
                        <div class="english-text">${highlightText(god.powers.en)}</div>
                        ${god.powers.es
            ? `<div class="spanish-text">${highlightText(god.powers.es)}</div>`
            : `<div class="no-translation">(sin traducción)</div>`
        }
                    </div>

                    <div class="section-title">Ira</div>
                    <div class="text-block">
                        <div class="english-text">${highlightText(god.wrath.en)}</div>
                        ${god.wrath.es
            ? `<div class="spanish-text">${highlightText(god.wrath.es)}</div>`
            : `<div class="no-translation">(sin traducción)</div>`
        }
                    </div>
                </div>
            `;
}

// Render all god cards
function renderAllGods(gods) {
    const container = document.getElementById('god-cards');
    const noResults = document.getElementById('no-results');

    if (gods.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        container.innerHTML = gods.map(renderGodCard).join('');
    }
}

// Update progress display
function updateProgress() {
    const progress = calculateProgress();
    const percentage = Math.round((progress.translated / progress.total) * 100);

    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-text').textContent =
        `${progress.translated}/${progress.total} entradas traducidas (${percentage}%)`;
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function searchGods(query) {
    if (!query.trim()) {
        return godsData;
    }

    const lowerQuery = query.toLowerCase();

    return godsData.filter(god => {
        // Search in name
        if (god.name.toLowerCase().includes(lowerQuery)) return true;

        // Search in title
        if (god.title && god.title.toLowerCase().includes(lowerQuery)) return true;

        // Search in English text
        if (god.description.en.toLowerCase().includes(lowerQuery)) return true;
        if (god.powers.en.toLowerCase().includes(lowerQuery)) return true;
        if (god.wrath.en.toLowerCase().includes(lowerQuery)) return true;

        // Search in Spanish text (if exists)
        if (god.description.es && god.description.es.toLowerCase().includes(lowerQuery)) return true;
        if (god.powers.es && god.powers.es.toLowerCase().includes(lowerQuery)) return true;
        if (god.wrath.es && god.wrath.es.toLowerCase().includes(lowerQuery)) return true;

        return false;
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value;
    const filteredGods = searchGods(query);
    renderAllGods(filteredGods);
});

// ============================================
// INITIALIZATION
// ============================================

// Initial render
renderAllGods(godsData);
updateProgress();
