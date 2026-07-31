export interface GodText {
  en: string
  es: string | null
  es_mt: string | null
}

export interface GlossaryExample {
  en: string
  es: string
}

export interface GlossaryEntry {
  term: string
  translation: string
  examples: GlossaryExample[]
}

export interface God {
  name: string
  title?: string
  description: GodText
  powers: GodText
  wrath: GodText
  glossary?: GlossaryEntry[]
}

export type TranslationStatus = 'complete' | 'partial' | 'none'
