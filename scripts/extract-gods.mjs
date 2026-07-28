import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const indexJs = readFileSync(join(root, 'js', 'index.js'), 'utf8');

// Extract the godsData array by finding the assignment and evaluating it
const match = indexJs.match(/const godsData = (\[[\s\S]*?\n\];)/);
if (!match) { console.error('Could not find godsData'); process.exit(1); }

const godsData = eval(match[1]);

const godsDir = join(root, 'data', 'gods');
mkdirSync(godsDir, { recursive: true });

function toFileName(name) {
    return name.toLowerCase().replace(/\s+/g, '-') + '.js';
}

for (const god of godsData) {
    const fileName = toFileName(god.name);
    const content = `export default ${JSON.stringify(god, null, 4)};\n`;
    writeFileSync(join(godsDir, fileName), content, 'utf8');
    console.log(`Created: data/gods/${fileName}`);
}

console.log(`\nTotal: ${godsData.length} god files created`);
