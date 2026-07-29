import type { God } from '../../types/god'
import { highlightText } from '../../utils/highlight'
import styles from './GodSpotlight.module.css'

interface GodSpotlightProps {
  god: God
}

function formatDate(): string {
  const now = new Date()
  return now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function GodSpotlight({ god }: GodSpotlightProps) {
  return (
    <div className={styles.spotlight}>
      <div className={styles.dateLabel}>
        Dios del día — {formatDate()}
      </div>

      <h2 className={styles.godName}>{god.name}</h2>
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
