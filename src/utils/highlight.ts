const properNouns = [
  "Ashenzari", "Beogh", "Cheibriados", "Dithmenos", "Elyvilon",
  "Fedhas", "Gozag", "Hepliaklqana", "Ignis", "Jiyva",
  "Kikubaaqudgha", "Lugonu", "Makhleb", "Nemelex", "Xobeh",
  "Okawaru", "Pakellas", "Qazlal", "Ru", "Sif Muna",
  "Trog", "Uskayaw", "Vehumet", "Wu Jian", "Xom",
  "Yredelemnul", "Zin", "the Shining One", "the Wu Jian Council",
  "Madash", "Stormbringer", "Ym Sagoz",
  "Abyss", "naga", "orc", "demon", "lich", "necromancer",
  "berserk", "piety", "invocations", "spellbooks", "chaos",
  "necromancy", "divine", "holy", "unholy", "torment",
  "Invocations", "piety", "berserk", "mutations"
]

const sortedNouns = [...properNouns].sort((a, b) => b.length - a.length)

export function highlightText(text: string): string {
  if (!text) return ''
  let highlighted = text

  sortedNouns.forEach(noun => {
    const regex = new RegExp(`\\b${noun}\\b`, 'gi')
    highlighted = highlighted.replace(regex, `<span class="proper-noun">${noun}</span>`)
  })

  return highlighted
}
