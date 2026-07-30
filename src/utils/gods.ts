import type { God, TranslationStatus } from '../types/god'

export function getTranslationStatus(god: God): TranslationStatus {
  let total = 0
  let translated = 0

  total++
  if (god.description.es) translated++
  total++
  if (god.powers.es) translated++
  total++
  if (god.wrath.es) translated++

  if (translated === total) return 'complete'
  if (translated > 0) return 'partial'
  return 'none'
}

export function calculateProgress(gods: God[]) {
  let totalEntries = 0
  let translatedEntries = 0

  gods.forEach(god => {
    totalEntries += 3
    if (god.description.es) translatedEntries++
    if (god.powers.es) translatedEntries++
    if (god.wrath.es) translatedEntries++
  })

  return { total: totalEntries, translated: translatedEntries }
}

export function searchGods(gods: God[], query: string): God[] {
  if (!query.trim()) return gods

  const lowerQuery = query.toLowerCase()

  return gods.filter(god => {
    if (god.name.toLowerCase().includes(lowerQuery)) return true
    if (god.title && god.title.toLowerCase().includes(lowerQuery)) return true
    if (god.description.en.toLowerCase().includes(lowerQuery)) return true
    if (god.powers.en.toLowerCase().includes(lowerQuery)) return true
    if (god.wrath.en.toLowerCase().includes(lowerQuery)) return true
    if (god.description.es && god.description.es.toLowerCase().includes(lowerQuery)) return true
    if (god.powers.es && god.powers.es.toLowerCase().includes(lowerQuery)) return true
    if (god.wrath.es && god.wrath.es.toLowerCase().includes(lowerQuery)) return true
    if (god.description.es_mt && god.description.es_mt.toLowerCase().includes(lowerQuery)) return true
    if (god.powers.es_mt && god.powers.es_mt.toLowerCase().includes(lowerQuery)) return true
    if (god.wrath.es_mt && god.wrath.es_mt.toLowerCase().includes(lowerQuery)) return true
    return false
  })
}
