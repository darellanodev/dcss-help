import type { God, GodText } from '../../types/god'
import { highlightText } from '../../utils/highlight'
import { parseGlossaryText } from '../../utils/glossary'
import { GlossaryTerm } from '../GlossaryTerm/GlossaryTerm'
import styles from './GodSpotlight.module.css'

interface GodSpotlightProps {
  god: God
  useMachineTranslation: boolean
}

function formatDate(): string {
  const now = new Date()
  return now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderSpanish(text: GodText, useMachine: boolean) {
  const sourceText = useMachine ? text.es_mt : text.es
  const prefix = useMachine ? '🤖 ' : '🧑 '
  if (sourceText) {
    return (
      <div
        className={styles.spanishText}
        dangerouslySetInnerHTML={{ __html: prefix + highlightText(sourceText) }}
      />
    )
  }
  return <div className={styles.noTranslation}><span style={{fontStyle: 'normal'}}>{prefix}</span>(no translation)</div>
}

export default function GodSpotlight({ god, useMachineTranslation }: GodSpotlightProps) {
  return (
    <div className={styles.spotlight}>
      <div className={styles.dateLabel}>
        God of the day — {formatDate()}
      </div>

      <h2 className={styles.godName}>{god.name}</h2>
      {god.title && <div className={styles.godTitle}>{god.title}</div>}

      <div className={styles.sectionTitle}>Description</div>
      <div className={styles.textBlock}>
        <div className={styles.englishText}>
          {parseGlossaryText(highlightText(god.description.en), god.glossary, GlossaryTerm)}
        </div>
        {renderSpanish(god.description, useMachineTranslation)}
      </div>

      <div className={styles.sectionTitle}>Powers</div>
      <div className={styles.textBlock}>
        <div className={styles.englishText}>
          {parseGlossaryText(highlightText(god.powers.en), god.glossary, GlossaryTerm)}
        </div>
        {renderSpanish(god.powers, useMachineTranslation)}
      </div>

      <div className={styles.sectionTitle}>Wrath</div>
      <div className={styles.textBlock}>
        <div className={styles.englishText}>
          {parseGlossaryText(highlightText(god.wrath.en), god.glossary, GlossaryTerm)}
        </div>
        {renderSpanish(god.wrath, useMachineTranslation)}
      </div>

    </div>
  )
}
