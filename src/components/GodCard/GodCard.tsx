import type { God, GodText } from '../../types/god'
import { getTranslationStatus } from '../../utils/gods'
import { highlightText } from '../../utils/highlight'
import { parseGlossaryText } from '../../utils/glossary'
import { GlossaryTerm } from '../GlossaryTerm/GlossaryTerm'
import styles from './GodCard.module.css'

interface GodCardProps {
  god: God
  useMachineTranslation: boolean
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
  return <div className={styles.noTranslation}><span style={{fontStyle: 'normal'}}>{prefix}</span>(sin traducción)</div>
}

export default function GodCard({ god, useMachineTranslation }: GodCardProps) {
  const status = getTranslationStatus(god)

  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <h3 className={styles.godName}>{god.name}</h3>
      {god.title && <div className={styles.godTitle}>{god.title}</div>}

      <div className={styles.sectionTitle}>Descripción</div>
      <div className={styles.textBlock}>
        <div className={styles.englishText}>
          {parseGlossaryText(highlightText(god.description.en), god.glossary, GlossaryTerm)}
        </div>
        {renderSpanish(god.description, useMachineTranslation)}
      </div>

      <div className={styles.sectionTitle}>Poderes</div>
      <div className={styles.textBlock}>
        <div className={styles.englishText}>
          {parseGlossaryText(highlightText(god.powers.en), god.glossary, GlossaryTerm)}
        </div>
        {renderSpanish(god.powers, useMachineTranslation)}
      </div>

      <div className={styles.sectionTitle}>Ira</div>
      <div className={styles.textBlock}>
        <div className={styles.englishText}>
          {parseGlossaryText(highlightText(god.wrath.en), god.glossary, GlossaryTerm)}
        </div>
        {renderSpanish(god.wrath, useMachineTranslation)}
      </div>
    </div>
  )
}
