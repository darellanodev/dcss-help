import type { God, GodText } from '../../types/god'
import { getTranslationStatus } from '../../utils/gods'
import { highlightText } from '../../utils/highlight'
import styles from './GodCard.module.css'

interface GodCardProps {
  god: God
  useMachineTranslation: boolean
}

function renderSpanish(text: GodText, useMachine: boolean) {
  const sourceText = useMachine ? text.es_mt : text.es
  const prefix = useMachine && text.es_mt ? '🤖 ' : ''
  if (sourceText) {
    return (
      <div
        className={styles.spanishText}
        dangerouslySetInnerHTML={{ __html: prefix + highlightText(sourceText) }}
      />
    )
  }
  return <div className={styles.noTranslation}>(sin traducción)</div>
}

export default function GodCard({ god, useMachineTranslation }: GodCardProps) {
  const status = getTranslationStatus(god)

  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <h3 className={styles.godName}>{god.name}</h3>
      {god.title && <div className={styles.godTitle}>{god.title}</div>}

      <div className={styles.sectionTitle}>Descripción</div>
      <div className={styles.textBlock}>
        <div
          className={styles.englishText}
          dangerouslySetInnerHTML={{ __html: highlightText(god.description.en) }}
        />
        {renderSpanish(god.description, useMachineTranslation)}
      </div>

      <div className={styles.sectionTitle}>Poderes</div>
      <div className={styles.textBlock}>
        <div
          className={styles.englishText}
          dangerouslySetInnerHTML={{ __html: highlightText(god.powers.en) }}
        />
        {renderSpanish(god.powers, useMachineTranslation)}
      </div>

      <div className={styles.sectionTitle}>Ira</div>
      <div className={styles.textBlock}>
        <div
          className={styles.englishText}
          dangerouslySetInnerHTML={{ __html: highlightText(god.wrath.en) }}
        />
        {renderSpanish(god.wrath, useMachineTranslation)}
      </div>
    </div>
  )
}
