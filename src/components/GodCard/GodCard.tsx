import type { God } from '../../types/god'
import { getTranslationStatus } from '../../utils/gods'
import { highlightText } from '../../utils/highlight'
import styles from './GodCard.module.css'

interface GodCardProps {
  god: God
}

export default function GodCard({ god }: GodCardProps) {
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
        {god.description.es ? (
          <div
            className={styles.spanishText}
            dangerouslySetInnerHTML={{ __html: highlightText(god.description.es) }}
          />
        ) : (
          <div className={styles.noTranslation}>(sin traducción)</div>
        )}
      </div>

      <div className={styles.sectionTitle}>Poderes</div>
      <div className={styles.textBlock}>
        <div
          className={styles.englishText}
          dangerouslySetInnerHTML={{ __html: highlightText(god.powers.en) }}
        />
        {god.powers.es ? (
          <div
            className={styles.spanishText}
            dangerouslySetInnerHTML={{ __html: highlightText(god.powers.es) }}
          />
        ) : (
          <div className={styles.noTranslation}>(sin traducción)</div>
        )}
      </div>

      <div className={styles.sectionTitle}>Ira</div>
      <div className={styles.textBlock}>
        <div
          className={styles.englishText}
          dangerouslySetInnerHTML={{ __html: highlightText(god.wrath.en) }}
        />
        {god.wrath.es ? (
          <div
            className={styles.spanishText}
            dangerouslySetInnerHTML={{ __html: highlightText(god.wrath.es) }}
          />
        ) : (
          <div className={styles.noTranslation}>(sin traducción)</div>
        )}
      </div>
    </div>
  )
}
