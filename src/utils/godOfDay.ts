import type { God } from '../types/god'

function getDayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export function getGodOfDay(gods: God[]): God {
  const day = getDayOfYear()
  return gods[day % gods.length]
}
