export interface GodText {
  en: string
  es: string | null
  es_mt: string | null
}

export interface God {
  name: string
  title?: string
  description: GodText
  powers: GodText
  wrath: GodText
}

export type TranslationStatus = 'complete' | 'partial' | 'none'
