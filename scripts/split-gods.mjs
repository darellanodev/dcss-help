import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const gods = JSON.parse(readFileSync(join(root, 'src', 'data', 'gods.json'), 'utf-8'))
const outDir = join(root, 'src', 'data', 'gods')

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true })
}

function toKebabCase(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

for (const god of gods) {
  const filename = `${toKebabCase(god.name)}.json`
  writeFileSync(join(outDir, filename), JSON.stringify(god, null, 2) + '\n')
}

console.log(`Split ${gods.length} gods into ${outDir}`)
